importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDLjAPGx9s1iiY9EGSd5len115dRQbQCYw",
  authDomain: "food-delivery-app-24517.firebaseapp.com",
  projectId: "food-delivery-app-24517",
  storageBucket: "food-delivery-app-24517.firebasestorage.app",
  messagingSenderId: "869509993841",
  appId: "1:869509993841:web:d968d5491ca1719ec2d2d0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
