import { initializeApp } from "firebase/app";
const initializeAuthentication = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCO7W8X-sHYXgUD8pJDq944r-GTVK0Hm64",
    authDomain: "medicare-21a29.firebaseapp.com",
    projectId: "medicare-21a29",
    storageBucket: "medicare-21a29.appspot.com",
    messagingSenderId: "777739868936",
    appId: "1:777739868936:web:792cd498a1878558adeabd",
  };
  const app = initializeApp(firebaseConfig);
};

export default initializeAuthentication;
