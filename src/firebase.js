import { initializeApp } from "firebase/app";
import { getAuth, getIdToken, onAuthStateChanged } from "firebase/auth";

// firebaseConfig auto generated in project settings
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDiHvXxzD7tv1ghrXXLQLb4oXFfzx6tPB4",
  authDomain: "survey-app-fyp.firebaseapp.com",
  databaseURL:
    "https://survey-app-fyp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "survey-app-fyp",
});

const auth = getAuth(firebaseApp);

// Make firebase auth use browser's default language
auth.useDeviceLanguage();

/**
 * Only returns authentication header object if user is authenticated.
 * If user is unauthenticated, this does not throw and just returns undefined.
 * @function getAuthHeader
 * @returns {object | undefined} Authentication header object or nothing.
 */
async function getAuthHeader() {
  if (auth.currentUser)
    return { Authorization: `Bearer ${await getIdToken(auth.currentUser)}` };
}

// Export only the items that will be used
export { firebaseApp, auth, onAuthStateChanged, getAuthHeader };
