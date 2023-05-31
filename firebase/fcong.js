import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAL41AjQ8U_PXBPhddmGnVEdi_JcewhkpU",
    authDomain: "trial-e5fdf.firebaseapp.com",
    databaseURL: "https://trial-e5fdf-default-rtdb.firebaseio.com",
    projectId: "trial-e5fdf",
    storageBucket: "trial-e5fdf.appspot.com",
    messagingSenderId: "1007717735908",
    appId: "1:1007717735908:web:78d542fed430a37514fbf1"
  };

  export const app = initializeApp(firebaseConfig);

