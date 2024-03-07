// alert(2);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth,signInWithPopup ,GoogleAuthProvider,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  
const firebaseConfig = {
  apiKey: "AIzaSyAFrgdKht1HOjbJYX-BRm5w8STSpd4el6Y",
  authDomain: "got-login-page.firebaseapp.com",
  projectId: "got-login-page",
  storageBucket: "got-login-page.appspot.com",
  messagingSenderId: "871766851385",
  appId: "1:871766851385:web:f610016ab137722da8f2e8"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth =getAuth(app);
  
  auth.languageCode='en';
  const provider =new GoogleAuthProvider();
  const GoogleLogin =document.getElementById('google-btn');
  GoogleLogin.addEventListener( 'click',function(){
    console.log('hello');
    
    const auth = getAuth();
    const provider =new GoogleAuthProvider();
    // alert(5);
    signInWithPopup(auth, provider)
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
    
      const user = result.user;
      console.log(user);
      window.location.href="../logged.html";
      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      
    
    });


  })
  function updateUserProfile(user) {
    
    const userName = user.displayName;
    const userEmai1 = user.email;
    const userProfi1ePicture = user .photoURL;
    // Update the profile section with user data
    document.getElementById("userName").textContent= userName;
    document . getElementById("userEmail").textContent= userEmai1;
    document.getElementById('userProfilePicture').src = userProfilePicture;
  }

// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

  
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });