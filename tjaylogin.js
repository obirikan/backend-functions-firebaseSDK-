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
  
//firebase.js
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from '@firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAfWHMI_JjXXjDlgcsGCN9J5TN1klpkXGA",
  authDomain: "payment-form-34f25.firebaseapp.com",
  projectId: "payment-form-34f25",
  storageBucket: "payment-form-34f25.appspot.com",
  messagingSenderId: "1040352949790",
  appId: "1:1040352949790:web:e67579251a1f9e38a8a00f"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const storage=getStorage(app)
export const provider=new GoogleAuthProvider()
export const db =getFirestore(app)
export default app
/////////////end of firebasefile///////////  
  
         //send data of products to the database
        const sub=async()=> {
           let sc=collection(db,'students')
            try {
                const result=await addDoc(sc,{
                 
                }))
                console.log(result);
            } catch (error) {
                console.log(error.message)
            }
            
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
