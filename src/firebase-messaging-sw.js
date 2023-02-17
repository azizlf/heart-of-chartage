importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDFSZvYLHJgaUnhhMfprqB3lk9ZPWBm5P0",
    authDomain: "ihebfront.firebaseapp.com",
    projectId: "ihebfront",
    storageBucket: "ihebfront.appspot.com",
    messagingSenderId: "215501404523",
    appId: "1:215501404523:web:663b034a8fdf455daef42e"
});
const messaging = firebase.messaging();