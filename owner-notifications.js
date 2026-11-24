import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpJAPGx9s1iIY9EGSd5len115DRQbQCyw",
    authDomain: "food-delivery-app-24517.firebaseapp.com",
      projectId: "food-delivery-app-24517",
        storageBucket: "food-delivery-app-24517.firebasestorage.app",
          messagingSenderId: "869509993841",
            appId: "1:869509993841:web:d968d5491ca1719ec2d2d0"
            };

            const app = initializeApp(firebaseConfig);
            const messaging = getMessaging(app);
            const db = getFirestore(app);

            const VAPID_KEY = 'BPKtUhRPS6FUB3XJEPCrXpPO2n-Iu0Vm7g_6zYy6mijZbAJkz9yStODymm2QWJrzbaHi2zAZPs3Ljo36ZU9nxqU';

            export async function enableOwnerNotifications() {
              try {
                  const currentToken = await getToken(messaging, { vapidKey: VAPID_KEY });
                      if (currentToken) {
                            await setDoc(doc(db, "owner_fcm", "owner_token"), {
                                    token: currentToken,
                                            updatedAt: new Date()
                                                  }, { merge: true });
                                                        alert("owner notifications activated");
                                                            }
                                                              } catch (err) {
                                                                  console.log("permission error: ", err);
                                                                    }
                                                                    }

                                                                    onMessage(messaging, (payload) => {
                                                                      const audio = new Audio('https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg');
                                                                        audio.play().catch(e => console.log("Audio play failed:", e));
                                                                          if (navigator.serviceWorker.ready) {
                                                                              navigator.serviceWorker.ready.then((registration) => {
                                                                                    registration.showNotification(payload.notification.title, {
                                                                                            body: payload.notification.body,
                                                                                                    icon: '/icon.png',
                                                                                                            data: { url: '/admin.html' }
                                                                                                                  });
                                                                                                                      });
                                                                                                                        }
                                                                                                                        });
                                                                                                                        