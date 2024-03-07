alert(555);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBJ01j-LbGR92jVSLsA5XJnz4htyYQP_64",
    authDomain: "web-app-6c176.firebaseapp.com",
    databaseURL: "https://web-app-6c176-default-rtdb.firebaseio.com",
    projectId: "web-app-6c176",
    storageBucket: "web-app-6c176.appspot.com",
    messagingSenderId: "942528902304",
    appId: "1:942528902304:web:e59ee8aa43dad796adc5c5",
    measurementId: "G-FRREEDYLDW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth =getAuth(app);
  
  auth.languageCode='en';
  const provider =new GoogleAuthProvider();
  const GoogleLogin =document.getElementById('google-btn');
  GoogleLogin.addEventListener( 'click',function(){
    console.log('hello');
    alert(5)
  })
