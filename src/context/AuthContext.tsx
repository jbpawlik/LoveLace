import React from "react";
import firebase from "firebase/app";
// @ts-ignore
export const AuthContext = React.createContext<firebase.User | null>(null);