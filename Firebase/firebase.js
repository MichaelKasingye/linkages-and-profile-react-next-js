import firebase from "firebase";

const config = {
   
  apiKey: "AIzaSyCa7EGoodLqSA4oy_sQwc6ou-F9zq4Dt-Y",
  authDomain: "the-linkages-and-profile.firebaseapp.com",
  databaseURL: "https://the-linkages-and-profile-default-rtdb.firebaseio.com",
  projectId: "the-linkages-and-profile",
  storageBucket: "the-linkages-and-profile.appspot.com",
  messagingSenderId: "985058206614",
  appId: "1:985058206614:web:d4bd094cda888563b5b3b7",
  measurementId: "G-J7VGMNX7F1"
     
};


  const db = !firebase.apps.length   ? firebase.initializeApp(config).firestore()  : firebase.app().firestore();
  const storage = !firebase.apps.length   ? firebase.initializeApp(config).storage()  : firebase.app().storage();

  // const auth = firebase.auth();
  // const storage = firebase.storage();
  
  export{db,   
    //  auth, 
      storage,
      };
  // export default !firebase.apps.length ? firebaseApp : firebase.app();
  // export default !firebase.apps.length   ? firebase.initializeApp(config).firestore()  : firebase.app().firestore();
  // export default db;