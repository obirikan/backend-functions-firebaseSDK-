  //   // Get all products from Firestore
  //   const productsRef = collection(db, "Products");
  //   const q = query(productsRef, where('markets', 'array-contains', dat));
  //   const querySnapshot = await getDocs(q);
  //   const allProducts = [];
  //   querySnapshot.forEach((doc) => {
  //     const product = doc.data();
  //     product.id = doc.id;
  //     allProducts.push(product);
  //   });
  
  
  //   // Filter products by distance using Google Distance Matrix API
  //   const apiKey = "AIzaSyBgdZyG5qyyBQoblLSVkjzCNvCQOnOeIiY";
  //   const distanceMatrixUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${userlat},${userlng}&destinations=`;
  //   const products = [];
  //   for (const product of allProducts) {
  //     const distanceMatrixResponse = await axios.get(`${distanceMatrixUrl}${product.address.location.lat},${product.address.location.lng}&key=${apiKey}`);
  //     const elements = distanceMatrixResponse.data.rows[0].elements;
  //     console.log(elements);
  //       // if (distance <= 32268) { // filter by 5 miles (or 8046.72 meters)
  //       //   products.push(product);
  //       // }
  //   }
    
  //   return products;
  // };