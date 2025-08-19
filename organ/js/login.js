  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBKKmIZrBX517WXieCv1ZSn5z2FV1lTAsw",
    authDomain: "organ-donation-35930.firebaseapp.com",
    projectId: "organ-donation-35930",
    storageBucket: "organ-donation-35930.firebasestorage.app",
    messagingSenderId: "611473361260",
    appId: "1:611473361260:web:fb69c641ff37c211b6cb49"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
 
  const submit=document.getElementById("loginbtn");
  submit.addEventListener("click" ,function(event){
  event.preventDefault();
  const email= document.getElementById("email").value;
  const pass=document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Login successful! Welcome " + user.email);
   const redirectURL = sessionStorage.getItem("redirectAfterLogin");
   sessionStorage.removeItem("redirectAfterLogin");
   if (redirectURL) {
      window.location.href = redirectURL;
    }
    else {
      window.location.href = "hometest.html";
    }
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert("Error "+errorMessage);
  });
  })

  //cursor
  function setupCursorFollow() {
    const cursor = document.getElementById('cursor-follow');
    
    if (cursor) {
        document.addEventListener("mousemove", function(e) {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });
    }
}
window.addEventListener('DOMContentLoaded', setupCursorFollow);