// Video processing function using FFmpeg
const processVideo = async (filePath, outputDir, videoId) => {
    const resolutions = ['240p', '360p', '720p', '1080p'];
    const processedFiles = {};
    
    for (const res of resolutions) {
        const outputFile = `${outputDir}/${videoId}_${res}.mp4`;
        await new Promise((resolve, reject) => {
            exec(`ffmpeg -i ${filePath} -vf scale=-2:${res.replace('p', '')} -c:a copy ${outputFile}`, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
        
        // Upload to Cloud Storage
        const destination = `videos/${videoId}_${res}.mp4`;
        await storage.bucket(bucketName).upload(outputFile, { destination });
        processedFiles[res] = `https://storage.googleapis.com/${bucketName}/${destination}`;
    }
    return processedFiles;
};

// Handle video upload and processing
app.post('/api/videos/upload', upload.single('video'), async (req, res) => {
    try {
        const { file } = req;
        if (!file) return res.status(400).send("No video uploaded");
        
        const videoId = Date.now().toString();
        const outputDir = 'processed_videos';
        if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
        
        // Process video and upload to Cloud Storage
        const mediaUrls = await processVideo(file.path, outputDir, videoId);
        
        // Generate thumbnail
        const thumbnailPath = `${outputDir}/${videoId}_thumbnail.jpg`;
        await new Promise((resolve, reject) => {
            exec(`ffmpeg -i ${file.path} -ss 00:00:01.000 -vframes 1 ${thumbnailPath}`, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
        
        // Upload thumbnail
        const thumbnailDestination = `thumbnails/${videoId}.jpg`;
        await storage.bucket(but).upload(thumbnailPath, { destination: thumbnailDestination });
        const thumbnailUrl = `https://storage.googleapis.com/${bucketName}/${thumbnailDestination}`;
        
        // Save metadata to Firestore
        await db.collection('video_feed').doc(videoId).set({
            id: videoId,
            mediaUrls,
            thumbnailUrl,
            createdAt: admin.firestore.Timestamp.now(),
            status: "active"
        });
        
        res.json({ message: "Video uploaded successfully", videoId });
    } catch (error) {
        console.error("Error processing video:", error);
        res.status(500).send("Server Error");
    }
});

// Serve video chunks for progressive download
app.get('/api/videos/stream/:videoId', async (req, res) => {
    const { videoId } = req.params;
    const quality = req.query.quality || '720p';
    const range = req.headers.range;

    if (!range) {
        return res.status(400).send("Requires Range header");
    }

    try {
        // Fetch video metadata from Firestore
        const videoDoc = await db.collection('video_feed').doc(videoId).get();
        if (!videoDoc.exists) {
            return res.status(404).send("Video not found");
        }

        const videoData = videoDoc.data();
        const videoUrl = videoData.mediaUrls[quality];
        
        res.redirect(videoUrl); // Redirect to CDN or Cloud Storage URL
    } catch (error) {
        console.error("Error streaming video:", error);
        res.status(500).send("Server Error");
    }
});

// Get preloaded videos for feed
app.get('/api/videos/preload', async (req, res) => {
    try {
        const snapshot = await db.collection('video_feed').orderBy('createdAt', 'desc').limit(10).get();
        const videos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json({ videos });
    } catch (error) {
        console.error("Error fetching videos:", error);
        res.status(500).send("Server Error");
    }
});