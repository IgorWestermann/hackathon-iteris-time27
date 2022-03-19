<template>
  <v-container class="mt-16">
    <h2 class="text-center mb-6 page-title">Olá, seja bem-vindo!</h2>
    <p class="text-center mb-6">
      Encontre ou seja um vendedor ovos de páscoa artesanais nos estados do
      Acre, Amapá ou Amazonas
    </p>
    <div class="home-img mb-6">
      <img class="home-img" src="../../src/assets/home-img.webp" alt="" />
    </div>

    <h3 class="text-center mb-6 page-title">Escolha uma opção:</h3>

    <div class="text-center home-buttons">
      <router-link to="/produtos">
        <v-btn rounded color="deep-purple lighten-2" dark> Sou cliente </v-btn>
      </router-link>
      <router-link to="/vendedor">
        <v-btn rounded color="deep-purple lighten-2" dark> Sou vendedor </v-btn>
      </router-link>
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
  justify-content: center;
  gap: 10px;
}

.home-buttons a {
  text-decoration: none;
}

.home-img {
  width: 100%;
  border-radius: 60px;
}
</style>
