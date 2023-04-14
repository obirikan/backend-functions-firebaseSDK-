
  // const handleRegister =async ()=>{
  //   try {
  //     if (email === '' || password === '' || zipcode==='' || username==='' || phoneNumber==='') {
  //       throw new Error('Please fill in all fields.');
  //     }
  //     setloading(true);
  //     const added = await register(email, password, username, zipcode, address,phoneNumber).then(res=>{console.log(res)
  //     if(!res){
  //       // seterr('')
  //       setmsg(false)
  //     }else{
  //       seterr('is either your email  has been used already or  password is weak')
  //       setmsg(true)
  //     }}
  //     ).catch(err=>console.log({err}))
  //     console.log('r successful:', added);

  //   } catch (error) {
  //     console.log('r failed:', error.message);
  //     alert('fill in all fields')
  //   } finally{
  //     setTimeout(()=>{
  //       setloading(false)
  //     },1000)
  //   }
  // }