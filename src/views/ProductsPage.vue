<template>
  <v-container>
    <AppBar />
    <RegionButtons />
  </v-container>
</template>

<script>
import RegionButtons from "../components/RegionButtons.vue";
import AppBar from '../components/AppBar.vue';
export default {

  components: { RegionButtons, AppBar },
}
</script>

<style>

</style>