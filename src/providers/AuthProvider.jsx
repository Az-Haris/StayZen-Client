import { AuthContext } from "../contexts/contexts";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useEffect, useState } from "react";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0)

  // Register user
  const registerNewUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //   Login User
  const loginUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //   Logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update user
  const updateUser = (userInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userInfo);
  };

  // Password Reset
  const passwordReset = (emailValue) =>{
    return sendPasswordResetEmail(auth, emailValue)
  }

  //   Login With Google
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    auth,
    registerNewUser,
    loading,
    setLoading,
    user,
    setUser,
    loginUser,
    logOut,
    updateUser,
    loginWithGoogle,
    email,
    setEmail,
    passwordReset,
    rating,
    setRating,
    ratingCount,
    setRatingCount
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
