<template>
  <v-container >
    <v-bottom-navigation v-model="value" fixed app color="#52E4D5">
      <v-btn value="recent">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Clientes</span>

        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Vendedores</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({ value: 'recent' }),
};
</script>

<style scoped>
</style>