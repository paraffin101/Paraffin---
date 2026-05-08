import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0PkhXHMeiRZFEQEdRIhAFuNBPjBGkNEY",
  authDomain: "paraffin-fc29e.firebaseapp.com",
  projectId: "paraffin-fc29e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("Firebase Connected");
async function signup(email, password, name) {
  const user = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "students", user.user.uid), {
    name: name,
    email: email
  });
  async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
  alert("Login successful");
}

  alert("Signup successful");
}
