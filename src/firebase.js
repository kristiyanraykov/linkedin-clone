import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, addDoc, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFoJCUhDWjNpTfsS5PnOMUiZ3ZyH8Kjqc",
    authDomain: "linkedin-clone-be505.firebaseapp.com",
    projectId: "linkedin-clone-be505",
    storageBucket: "linkedin-clone-be505.appspot.com",
    messagingSenderId: "404049868888",
    appId: "1:404049868888:web:f8075f7d48f996883d322d"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth();
const timestamp = serverTimestamp()

const queryByTimestamp = query(collection(db, "posts"), orderBy("timestamp", "desc"))

const addPost = async (username, description, message, photoUrl) => {
    const docRef = await addDoc(collection(db, "posts"), {
        name: username,
        description,
        message,
        photoUrl,
        timestamp
    });
}
// const register = (email, password) => {
//     createUserWithEmailAndPassword(auth, email, password)
//     .bind(auth)
//     .then(userCredentials => userCredentials)

// }
export { db, auth, timestamp, addPost, queryByTimestamp};