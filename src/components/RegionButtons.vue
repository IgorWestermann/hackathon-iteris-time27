<template>
  <v-container>
    <h2 class="text-center">Selecione a região mais próxima de você</h2>
    <v-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header>
              {{ produtos[i].nome }}
            </v-expansion-panel-header>
            <v-expansion-panel-content> 
              <p>{{ produtos[i].preco }}</p>
              <p>Ovo {{produtos[i].sabor }}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      produtos: [],
      items: ["Manaus", "Rio Branco", "Macapá"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((res) => res.json())
      .then((json) => {
        this.produtos = json;
      });
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}
</style>>
