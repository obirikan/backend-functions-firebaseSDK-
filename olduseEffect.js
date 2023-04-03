 // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       try {
  //         // Fetch the user document from Firestore based on the user's email address
  //         const querySnapshot = await getDocs(
  //           query(usercollection, where("aid", "==", user.uid))
  //         );

  //         if (!querySnapshot.empty) {
  //           // If the query returns at least one document
  //           const userData = querySnapshot.docs[0].data();
  //           setloading(true);
  //           setcurrent(userData);
  //           updateAsyncStorageData(userData);
  //           // console.log(userData);

  //           const data = await AsyncStorage.getItem("@user");
  //           const newi = JSON.parse(data);
  //           setcarts(newi.cart)
  //           //setting up the cart

  //         } else {
  //           console.log("User document does not exist");
  //         }
  //       } catch (error) {
  //         console.log("Error fetching user document:", error);
  //       }
  //     } else {
  //       console.log('why');
  //     }
  //   });
  // }, []);