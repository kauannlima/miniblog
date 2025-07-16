import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setErrors] = useState(null);
  const [loading, setLoading] = useState(null);

  // CLEANUP
  // DEAL WITH MEMOREY LEAK
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  //REGISTER
  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setErrors(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });

      setLoading(false);
      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }

      setLoading(false);
      setErrors(systemErrorMessage);
    }
  };

  // LOGOUT - SIGN OUT
  const logout = () => {
    checkIfIsCancelled();

    signOut(auth);
  };

  //LOGIN - SIGN IN
  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setErrors(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let systemErrorMessage;

      console.log(error.message);
      console.log(typeof error.message);

      // O firebase não valida erros separados para user e password
      if (error.message.includes("invalid")) {
        systemErrorMessage =
          "Não foi possível fazer login. Verifique suas credenciais.";
        // } else if (error.message.includes("wrong")) {
        //   systemErrorMessage = "Senha incorreta";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }

      setErrors(systemErrorMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
