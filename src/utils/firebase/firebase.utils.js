import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7yD1hPF2-1z8bICGlkRD1BY2cB0hoHKg",
  authDomain: "crwn-clothing-ok.firebaseapp.com",
  projectId: "crwn-clothing-ok",
  storageBucket: "crwn-clothing-ok.appspot.com",
  messagingSenderId: "539351695296",
  appId: "1:539351695296:web:7db4cead7fc54f249cd225",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionslInform = {} ) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);


  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionslInform
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
}


//////////////////////////////////////////////////////

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password ) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password ) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);


export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback)
}
