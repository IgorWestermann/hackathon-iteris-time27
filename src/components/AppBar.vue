<template>
  <v-container class="app-bar">
    <v-bottom-navigation v-model="value" fixed app>
      <router-link to="/produtos">
        <v-btn value="recent">
        <span>Clientes</span>
        <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/vendedor">
        <v-btn value="nearby">
          <span>Vendedores</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </router-link>

    </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({ value: "recent" }),
};
</script>

<style scoped>
.app-bar a{
  text-decoration: none;
  color: #9575CD;
}
</style>