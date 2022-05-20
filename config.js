import  firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyD4R1-zh9hbVeM0QKLrK8OUtHsQx_qk-KI",
  authDomain: "school-attendance-7fb98.firebaseapp.com",
  databaseURL: "https://school-attendance-7fb98-default-rtdb.firebaseio.com",
  projectId: "school-attendance-7fb98",
  storageBucket: "school-attendance-7fb98.appspot.com",
  messagingSenderId: "438166080374",
  appId: "1:438166080374:web:1fa0c9bd875d330e13c857",
  measurementId: "G-44RQX588CX"
};


  firebase.initializeApp(firebaseConfig);


  export default firebase.database();
 

  