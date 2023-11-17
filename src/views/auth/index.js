"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertDialog } from "@/components";
import { login, logout, getProfile } from "./auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [connectToken, setConnectToken] = useState(null);
  const [user, setUser] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      if (isError) {
        setDialogOpen(true);
      }
      if (accessToken && !user) {
        setProfile(accessToken);
      } else if (!accessToken) {
        router.replace("/");
      }
    }
  }, [user]);

  const handleCloseAlert = () => {
    setDialogOpen(false);
    router.push("/login");
  };

  const signIn = async (payload, callback) => {
    try {
      await login(payload);
      const userData = await getProfile();
      setUser(userData);
      callback();
    } catch (error) {
      // dispatch(
      //   notifier.open({ message: error.message, variant: ALERT_TYPES.ERROR })
      // );
    }
  };

  const signOut = (callback) => {
    logout();
    setUser(null);
    callback();
  };

  const setProfile = async (token) => {
    const userData = { user: "DummyUser" };
    setUser(userData);
    setConnectToken(token);
  };

  const value = {
    user,
    connectToken,
    signIn,
    signOut,
    setProfile,
  };
  return isError ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AlertDialog
        open={dialogOpen}
        onClose={handleCloseAlert}
        title={"Validation Error"}
        message={errorMessage}
      />
    </div>
  ) : (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (auth.connectToken && auth.user) {
    return children;
  }
};
