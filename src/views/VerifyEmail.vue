<template>
  <div>
    <div v-if="isLoading">Verificando</div>
    <div v-else-if="!isReady">Deu error</div>
    <div v-else>E-mail verificado, Obrigado {{ state.data.first_name }}</div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useAuth } from "@/store/auth";
import { useAsyncState } from "@vueuse/core";
// import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const authStore = useAuth();

const { state, isReady, isLoading } = useAsyncState(
  authStore.verifyEmail(route.query.token).then((r) => r.data)
);
// const isError = ref(false);
// authStore
//   .verifyEmail(route.query.token)
//   .then()
//   .catch(() => {
//     isError.value = true;
//     console.log("error");
//   });
</script>
