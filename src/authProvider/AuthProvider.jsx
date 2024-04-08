/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // gitHub login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // twitter login
  const twitterLogin = () => {
    return signInWithPopup(auth, twitterProvider);
  };
  // twitter login
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  //logout
  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  //Observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const allValues = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    twitterLogin,
    facebookLogin,
    logOut,
    user,
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
