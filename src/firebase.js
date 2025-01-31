
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {addDoc, collection, endAt, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALq03xBRy481HdqxiYxyJqmPCn7T5l7DQ",
  authDomain: "netflix-clone-4b526.firebaseapp.com",
  projectId: "netflix-clone-4b526",
  storageBucket: "netflix-clone-4b526.firebasestorage.app",
  messagingSenderId: "12463953417",
  appId: "1:12463953417:web:97730817fba48c878dcad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db = getFirestore(app)

//signup
const signup=async(name,email,password)=>{
try {
    const res = await createUserWithEmailAndPassword(auth,email,password)
    const user =res.user;
    await addDoc(collection(db, "user"),{
        uid:user.uid,
        name,
        authProvider:'local',
        email
    })
    toast.success('SignUp Successful')
} catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
}
}
//signIn

const login=async(email,password)=>{

    try {
     await signInWithEmailAndPassword(auth,email,password);
     console.log(email,password)
     toast.success('SignIn Successful')

    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}


//Signout
const logout=async()=>{

    signOut(auth)

}

export  {auth,db,login,signup,logout}