import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyAx-caMGKC9Jz5JDdqHzu77Tr3tLu4CMVg",
    authDomain: "ecommerce-723f4.firebaseapp.com",
    databaseURL: "https://ecommerce-723f4-default-rtdb.firebaseio.com",
    projectId: "ecommerce-723f4",
    storageBucket: "ecommerce-723f4.appspot.com",
    messagingSenderId: "252477395131",
    appId: "1:252477395131:web:87e56ff2c6f95e7a4ad99e"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }