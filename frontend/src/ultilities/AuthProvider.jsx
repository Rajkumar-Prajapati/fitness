import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  // const [user, setUser] = useState(null);
  // const [loader, setLoader] = useState(true);
  // const [error, setError] = useState("");
  // const auth = getAuth(app);
  // //   signup new user
  // const signup = async (email, password) => {
  //   try {
  //     setLoader(true);
  //     return await createUserWithEmailAndPassword(auth, email, password);
  //   } catch (error) {
  //     setError(error.code);
  //     throw error;
  //   }
  // };
  // //     login user
  // const login = async () => {
  //   try {
  //     setLoader(true);
  //     return await signInWithEmailAndPassword(auth, email, password);
  //   } catch (error) {
  //     setError(error.code);
  //     throw error;
  //   }
  // };
  // //    logout user
  // const logout = async () => {
  //   try {
  //     return await signOut(auth);
  //   } catch (error) {
  //     setError(error.code);
  //     throw error;
  //   }
  // };
  // // Update user
  // const updateUser = async (name, photo) => {
  //   try {
  //     await updateProfile(auth.currentUser, {
  //       displayName: name,
  //       photoURL: photo,
  //     });
  //     setUser(auth.currentUser);
  //   } catch (error) {
  //     setError(error.code);
  //     throw error;
  //   }
  // };
  // //   using Google login
  // const googleProvider = new GoogleAuthProvider();
  // const googleLogin = async () => {
  //   try {
  //     setLoader(true);
  //     return await signInWithPopup(auth, googleProvider);
  //   } catch (error) {
  //     setError(error.code);
  //     throw error;
  //   }
  // };
  // // observer for user
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged((user) => {
  //     setUser(user);
  //     if (user) {
  //       axios.post;
  //     }
  //   });
  //   return unsubscribe;
  // });
  // const contextVale = { user, signup, login, logout, updateUser, googleLogin };
  // return (
  //   <AuthContext.Provider value={contextVale}>{children}</AuthContext.Provider>
  // );
}

export default AuthProvider;
