import toast from "react-hot-toast";
import { create } from "zustand";
import api from '../api/api'
import axios from "axios";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isSigningUp: false,
  isCheckingAuth:true,
  isLoggingOut: false,
  isLoggingIn: false,
  signup: async (credentials, navigate) => {
    set({isSigningUp:true});
    try {
      await api.post(
        "/api/auth/signup",
        credentials
      );
      set({isSigningUp:false});
      navigate("/login");
      toast.success("Account created successfully");
    } catch (error) {
      toast.error("Signup Failed");
      set({isSigningUp:false, user:null});
      console.log(error);
    }
  },
  login: async (credentials, navigate) => {
    set({isLoggingIn:true});
    try {
      const response = await api.post(
        "/api/auth/login",
        credentials
      );
      set({isLoggingIn:false, token:response.data.token});
      // Store the token in local storage
      localStorage.setItem("SNAPSHORT_JWT_TOKEN", JSON.stringify(response.data.token));
      navigate("/dashboard");
      toast.success("Login Successful!");
      console.log(response.data.token);
    } catch (error) {
      toast.error("Login failed");
      set({isLoggingIn:false, user:null});
      console.log(error);
    }
  },
  logout: async (navigate) => {
    localStorage.removeItem("SNAPSHORT_JWT_TOKEN");
    set({token:null});
    navigate("/");
  },
  setToken: (token) => {
    set({token:token, isCheckingAuth:false});
  },
  finishCheckingAuth: () => set({isCheckingAuth:false})
}));