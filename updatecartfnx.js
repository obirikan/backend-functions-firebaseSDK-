
        // async function updateUserCart(updatedCartData) {
        //   const querySnapshot = await getDocs(
        //     query(usercollection, where('email', '==', current.email))
        //   );
        //   // const querySnapshot = await getDocs(query);
        //   if (!querySnapshot.empty) {
        //     const docRef = querySnapshot.docs[0].ref;
        //     const cartData = querySnapshot.docs[0].data().cart;
        //     const updatedCart = { ...cartData, ...JSON.parse(JSON.stringify(updatedCartData)).reduce((acc, item) => {
        //       acc[item.id] = item;
        //       return acc;
        //     }, {}) };
        //     await updateDoc(docRef, { cart: updatedCart });
        //     console.log('User cart updated successfully.');
        //   } else {
        //     console.error('No user found with the provided userId.');
        //   }
        // }