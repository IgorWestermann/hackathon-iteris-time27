<template>
  <v-container>
    <h2 class="text-center mb-6">Olá, seja bem-vindo!</h2>

    <div class="home-img mb-6">
      <img class="home-img" src="../../src/assets/home-img.webp" alt="" />
    </div>

    <h3 class="text-center mb-6">Escolha uma opção:</h3>

    <div class="text-center home-buttons">
      <v-btn rounded color="primary" dark> Sou cliente </v-btn>
      <router-link to="/vendedor">
        <v-btn rounded color="primary" dark> Sou revendedor </v-btn>
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
  justify-content: space-around;
}

.home-img {
  width: 100%;
  border-radius: 60px;
}


</style>
