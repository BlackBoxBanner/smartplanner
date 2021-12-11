import firebase from "firebase/compat/app";
import "firebase/auth";

export const AuthService = {
  loginWithGoogle: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const userCredential = firebase.auth().signInWithPopup(provider);
      return {
        user: userCredential.user,
      };
    } catch (e) {
      return {
        error: e.message,
      };
    }
  },
  logout: () => {
    return firebase.auth().signOut();
  },
};
