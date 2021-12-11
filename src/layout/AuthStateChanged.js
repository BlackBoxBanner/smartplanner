import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useEffect, useState } from "react";
import UseAuth from "@src/hook/auth";
import Loading from "@component/loading";

export default function AuthStateChanged({ children }) {
  const { setUser } = UseAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }

  return children;
}
