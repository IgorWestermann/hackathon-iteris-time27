<template>
  <v-container>
    <div class="sucess-page">
      <h1 class="text-center page-title">Cadastro efetuado com sucesso</h1>
      <v-btn class="login-btn" rounded color="deep-purple lighten-2 mt-6" dark>
        Efetuar Login
      </v-btn>
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
}

.sucess-page a {
  text-decoration: none;
}

.sucess-img {
  width: 86px;
}
</style>
