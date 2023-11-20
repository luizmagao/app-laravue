import axios from "axios";
import { defineStore } from "pinia";
import { useMe } from "./me";

export const useAuth = defineStore('auth', {
  state: () => ({}),

  actions: {
    sanctum() {
      return axios.get("sanctum/csrf-cookie");
    },
    login(email, password) {
      const meStore = useMe()
      return axios.post("/api/login", {email, password})
        .then(r => {
          meStore.user = r.data.data
          return r
        })
    },
    logout() {
      const meStore = useMe()
      return axios.post('api/logout')
        .then(() => {
          meStore.user = null
        })
    },
    register(firstName, lastName = '', email, password) {
      return axios.post('api/register',{
        first_name: firstName,
        last_name: lastName,
        email,
        password
      })
    },
    verifyEmail(token) {
      return axios.post("api/verify-email", {token})
    },
    fogoutPassword(email) {
      return axios.post("api/forgot-password", {email})
    },
    resetPassword(token, password) {
      return axios.post("api/reset-password", {token, password})
    }
  },

  getters: {
    isLoggedIn() {
      const meStore = useMe()
      return !!meStore.user
    }
  }
})
