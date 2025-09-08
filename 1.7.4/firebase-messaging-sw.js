importScripts('https://www.gstatic.com/firebasejs/9.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBYnnUW09THuiitDwpokTCJd4lrLDALlBM",
  authDomain: "zubr-dev-591e2.firebaseapp.com",
  projectId: "zubr-dev-591e2",
  storageBucket: "zubr-dev-591e2.appspot.com",
  messagingSenderId: "216012756803",
  appId: "1:216012756803:web:f74f832625e64155b581f6",
  measurementId: "G-HB6VKQHM2X"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();