
  // const uploadFileToFirebase = async (fileUri) => {
  //   try {
  //     const response = await fetch(fileUri);
  //     const blob = await response.blob();
  //     const filename = fileUri.split('/').pop();
  //     console.log({filename},blob.type );
  //     // const ref =storage.ref().child(`uploads/${filename}`);
  //     const ref = ref(storage, `upload/${filename}`);

  //     const metadata = { contentType: blob.type };
  //     const task = ref.put(blob, metadata);
  //     task.on('state_changed', 
  //       (snapshot) => {
  //         console.log('Upload is progressing');
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       async () => {
  //         const downloadUrl = await task.snapshot.ref.getDownloadURL();
  //         console.log('Download URL:', downloadUrl);
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };