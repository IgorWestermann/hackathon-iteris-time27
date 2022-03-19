<template>
  <v-container>
    <AppBar />
    <ProductList />
  </v-container>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import AppBar from '../components/AppBar.vue';
export default {

  components: { ProductList, AppBar },
}
</script>

<style>

</style>