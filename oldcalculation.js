// const newcarts=async ()=>{

//   const {location}=activeAddress

//   //user active latititude and longitude
//   const userlat=location.lat
//   const userlng=location.lng

//   const apiKey = "AIzaSyBgdZyG5qyyBQoblLSVkjzCNvCQOnOeIiY";
//   const distanceMatrixUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${userlat},${userlng}&destinations=`;
//   const products = [];
//   for (const product of carts) {
//     const distanceMatrixResponse = await axios.get(`${distanceMatrixUrl}${product.address.location.lat},${product.address.location.lng}&key=${apiKey}`);
//     const distance = distanceMatrixResponse.data.rows[0].elements[0].distance.value
//     console.log(distance);
//     if (distance <= 32268) { // filter by 5 miles (or 8046.72 meters)
//       products.push(product);
//     }
//   }

//    setcarts(products);
// }
