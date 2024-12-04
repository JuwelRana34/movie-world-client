import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { Auth } from "../../firebase.config";
import { toast } from "sonner";


export const UserContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  const GoogleProvider = new GoogleAuthProvider();

  const SignInWithGoogle = () => {
    return signInWithPopup(Auth, GoogleProvider);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const LogOut = () => {
    signOut(Auth)
      .then(() => {
        setIsloading(false);
        setUser(null);
        toast.warning("Logged Out Successfully");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const UpdateProfile = async (name, photo) => {
    if (!Auth.currentUser) {
      toast.error("You are not user please log in before this action");
      return;
    }
    try {
      await updateProfile(Auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      setUser({ ...Auth.currentUser, displayName: name, photoURL: photo });
    } catch (e) {
      toast.error(e.message);
      console.error(e);
    }
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        setUser(user);
        setIsloading(false);
      } else {
        setIsloading(false);
      }
    });

    return () => {
      Unsubscribe();
    };
  }, [user]);

  const AuthInfo = {
    signin,
    signUp,
    SignInWithGoogle,
    user,
    isLoading,
    LogOut,
    UpdateProfile,
  };

  return (
    <UserContext.Provider value={AuthInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;
