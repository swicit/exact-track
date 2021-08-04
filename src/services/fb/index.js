// This import loads the firebase namespace along with all its type information.
import firebase from "firebase/app";
// These imports load individual services into the firebase namespace.
import "firebase/auth";
import config from "./config";

const fb = firebase.initializeApp(config);

export default { auth: fb.auth() };
