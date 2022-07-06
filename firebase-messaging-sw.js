importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBL11lsuMLQAbDRp7RKBs49dOOJJ1Hu6Qs",
  authDomain: "attica-mobile.firebaseapp.com",
  databaseURL: "https://attica-mobile.firebaseio.com",
  projectId: "attica-mobile",
  storageBucket: "attica-mobile.appspot.com",
  messagingSenderId: "G-N69ERE6XGS",
  appId: "1:10473437277:web:3cdf48b3bc254ba13f35b4",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});