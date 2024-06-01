import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiP73U_y5Mkm12UgTev_uWCmI0Yn6CLnw",
  authDomain: "bloc-de-notas-app-ed356.firebaseapp.com",
  projectId: "bloc-de-notas-app-ed356",
  storageBucket: "bloc-de-notas-app-ed356.appspot.com",
  messagingSenderId: "780546814205",
  appId: "1:780546814205:web:b85b9da6293d08fc568e94"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


export default appFirebase;