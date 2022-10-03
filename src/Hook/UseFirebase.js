import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.initial";

initializeAuthentication();
const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  //google signIn

  //email password sign in
  const emailPassSignIn = (email, pass, navigate, name) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        //console.log(result.user);
        setUser(result.user);
        navigate("/");
        setUserName(name);
      })
      .catch((error) => {
        setError(error.message);
        alert(error.message);
      });
  };

  // email password login
  const emailPassLogIn = (email, password, navigate) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        alert(error.message);
      });
  };

  //update displayName
  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  //logout
  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser("");
        // console.log("logout succesfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    Logout,
    emailPassSignIn,
    emailPassLogIn,
  };
};
export default UseFirebase;
