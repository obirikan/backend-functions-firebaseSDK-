        const batchedProducts = async () => {
          const batchSize=5
          const { location } = showaddress;
        
          // User active latitude and longitude
          const userlat = location.lat;
          const userlng = location.lng;
        
          // Get all products from Firestore in batches
          const productsRef = collection(db, "Products");
          const allProducts = [];
          let lastDoc = null;
          while (true) {
            const query = lastDoc
              ? query(productsRef, startAfter(lastDoc), limit(batchSize))
              : query(productsRef, limit(batchSize));
            const querySnapshot = await getDocs(query);
            if (querySnapshot.empty) break;
            lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
            querySnapshot.forEach((doc) => {
              const product = doc.data();
              product.id = doc.id;
              allProducts.push(product);
            });
          }
        
          // Cache Distance Matrix API responses
          const distanceCache = {};
        
          // Filter products by distance using Haversine formula
          const nearbyProducts = [];
          const R = 6371e3; // Earth's radius in meters
          for (const product of allProducts) {
            const productLat = product.address.location.lat;
            const productLng = product.address.location.lng;
            const phi1 = userlat * (Math.PI / 180);
            const phi2 = productLat * (Math.PI / 180);
            const deltaPhi = (productLat - userlat) * (Math.PI / 180);
            const deltaLambda = (productLng - userlng) * (Math.PI / 180);
            const a =
              Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
              Math.cos(phi1) *
                Math.cos(phi2) *
                Math.sin(deltaLambda / 2) *
                Math.sin(deltaLambda / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c;
            if (distance <= 8046.72) {
              // 5 miles === 8046.72 meters
              nearbyProducts.push(product);
            }
          }
        
          // Group products by market
          const productsByMarket = {};
          nearbyProducts.forEach((product) => {
            product.markets.forEach((market) => {
              if (!productsByMarket[market]) {
                productsByMarket[market] = [];
              }
              productsByMarket[market].push(product);
            });
          });
        
          // Select random products from different markets using reservoir sampling
          const markets = Object.keys(productsByMarket);
          const selectedProducts = [];
          for (let i = 0; i < Math.min(4, markets.length); i++) {
            const marketIndex = Math.floor(Math.random() * (markets.length - i));
            const market = markets[marketIndex];
            const productsInMarket = productsByMarket[market];
            const productIndex = Math.floor(Math.random() * productsInMarket.length);
            const product = productsInMarket[productIndex];
            selectedProducts.push(product);
            // Swap selected product with last unselected product in reservoir
            [productsInMarket[productIndex], productsInMarket[productsInMarket.length - 1]] = [      productsInMarket[productsInMarket.length - 1],
              productsInMarket[productIndex],
            ];
          }
          console.log({selectedProducts});
        };
        batchedProducts ()