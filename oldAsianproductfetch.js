  //fetch all asian products
  // const asianProducts=async(dat)=>{
  //   console.log({dat});
  //   const productsRef = collection(db, 'Products');
  //   //must be an array to check
  //   const q = query(productsRef, where('markets', 'array-contains', dat), where('zip_code', 'array-contains',zip));
  //   const querySnapshot = await getDocs(q);
  //   const products = [];
  //   querySnapshot.forEach((doc) => {
  //     products.push({ id: doc.id, ...doc.data() });
  //   });
  //   return products
  // }


  // const asianProducts= async (dat) => {

  //   const {location}=activeAddress


  //   //user active latititude and longitude
  //   const userlat=location.lat
  //   const userlng=location.lng

  //   console.log('====================================');
  //   console.log({location});
  //   console.log('====================================');

