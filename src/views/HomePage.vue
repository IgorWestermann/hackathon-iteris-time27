<template>
  <v-container>
    <h2 class="text-center mb-6 page-title">Olá, seja bem-vindo!</h2>

    <div class="home-img mb-6">
      <img class="home-img" src="../../src/assets/home-img.webp" alt="" />
    </div>

    <h3 class="text-center mb-6 page-title">Escolha uma opção:</h3>

    <div class="text-center home-buttons">
      <router-link to="/produtos">
        <v-btn rounded color="deep-purple lighten-2" dark> Sou cliente </v-btn>
      </router-link>
      <v-btn rounded color="deep-purple lighten-2" dark> Sou vendedor </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-buttons {
  display: flex;
  justify-content: space-around;
}

.home-buttons a {
  text-decoration: none;
}

.home-img {
  width: 100%;
  border-radius: 60px;
}
</style>
