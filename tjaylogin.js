  const loginfb= async()=>{
    await signInWithEmailAndPassword(auth,email.value,password.value)
    .then((data)=>{
       console.log(data)
       alert('Successfully Logged In')
       console.log('Success')
       router.replace('/database')
    })
    .catch((error)=>{
      alert(error.message)
      console.log(error.code)
      if (error.code === 'auth/invalid-email') {
           errMsg.value="The Email is incorrect"
          } else if (error.code === 'auth/wrong-password') {
              errMsg.value="The Password is incorrect"
          } else if (error.code === 'auth/user-not-found') {
              errMsg.value="No User was Found"
          } else {
            (error.code==='auth/network-request-failed')
            errMsg.value="Please Check Your Internet Connection"
          }
  });
  }

 async function LogIn(){
   await signInWithEmailAndPassword(auth,email.value,password.value)
   .then((data)=>{
      console.log(data)
      alert('Successfully Logged In')
      console.log('Success')
      router.replace('/database')
   })
   .catch((error)=>{
    alert(error.message)
    console.log(error.code)
    if (error.code === 'auth/invalid-email') {
         errMsg.value="The Email is incorrect"
        } else if (error.code === 'auth/wrong-password') {
            errMsg.value="The Password is incorrect"
        } else if (error.code === 'auth/user-not-found') {
            errMsg.value="No User was Found"
        } else {
          (error.code==='auth/network-request-failed')
          errMsg.value="Please Check Your Internet Connection"
        }
});


 }