<template>
  <v-container>
    <div class="sucess-page">
      <h1 class="text-center page-title">Cadastro efetuado com sucesso</h1>
      <router-link to="/vendedor">
        <v-btn
          class="login-btn mt-6"
          rounded
          color="deep-purple lighten-2"
          dark
        >
          Efetuar Login
        </v-btn>
      </router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterSucessPage',
};
</script>

<style scoped>
.sucess-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sucess-page a {
  text-decoration: none;
}
</style>
