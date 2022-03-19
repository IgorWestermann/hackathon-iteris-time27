<template>
  <v-container>
    <h2>Confira agora os pontos de venda</h2>
    <h3 class="text-center">Manaus</h3>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in produtosRegiaoAM" :key="i">
        <v-expansion-panel-header class="text-center" style="margin-top: 40px">
          <v-img :src="produtosRegiaoAM[i].imagem" width="100"></v-img>
          <p>
            {{ produtosRegiaoAM[i].nome }}
          </p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>{{ produtosRegiaoAM[i].preco }}</p>
          <p>Ovo {{ produtosRegiaoAM[i].sabor }}</p>
          <p>Localização:</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.615742968204!2d-67.8815258846714!3d-9.965893009395424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917f8e9316483eb3%3A0x1408619d83a7b8cd!2sAv.%20Beija%20Fl%C3%B4r%20-%20Portal%20da%20Amaz%C3%B4nia%2C%20Rio%20Branco%20-%20AC%2C%2069903-050!5e0!3m2!1spt-BR!2sbr!4v1647713523526!5m2!1spt-BR!2sbr"
            width="320"
            height="350"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <h3 class="text-center">Rio Branco</h3>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in produtosRegiaoAC" :key="i">
        <v-expansion-panel-header>
          <v-img :src="produtosRegiaoAC[i].imagem" width="100" />
          <p>
            {{ produtosRegiaoAC[i].nome }}
          </p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>{{ produtosRegiaoAC[i].preco }}</p>
          <p>Ovo {{ produtosRegiaoAC[i].sabor }}</p>
          <p>Localização:</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.615742968204!2d-67.8815258846714!3d-9.965893009395424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917f8e9316483eb3%3A0x1408619d83a7b8cd!2sAv.%20Beija%20Fl%C3%B4r%20-%20Portal%20da%20Amaz%C3%B4nia%2C%20Rio%20Branco%20-%20AC%2C%2069903-050!5e0!3m2!1spt-BR!2sbr!4v1647714159747!5m2!1spt-BR!2sbr"
            width="320"
            height="350"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <h3 class="text-center">Macapá</h3>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in produtosRegiaoAP" :key="i">
        <v-expansion-panel-header>
          <v-img :src="produtosRegiaoAP[i].imagem" width="100" />
          <p>
            {{ produtosRegiaoAP[i].nome }}
          </p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>{{ produtosRegiaoAP[i].preco }}</p>
          <p>Ovo {{ produtosRegiaoAP[i].sabor }}</p>
          <p>Localização:</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8139971222467!2d-51.08541248474026!3d0.08434606435603682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d61e688c55959c1%3A0xb755ac8dbb2f3f98!2sAv%20do%20Murici%2C%20131%20-%20Macap%C3%A1%2C%20AP!5e0!3m2!1spt-BR!2sbr!4v1647714002153!5m2!1spt-BR!2sbr"
            width="320"
            height="350"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      produtos: [],
      produtosRegiaoAM: [],
      produtosRegiaoAC: [],
      produtosRegiaoAP: [],
      items: ["Manaus", "Rio Branco", "Macapá"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((res) => res.json())
      .then((json) => {
        this.produtos = json;
      })
      .then(() => {
        for (let i = 0; i < this.produtos.length; i++) {
          if (this.produtos[i].local.id == 2) {
            this.produtosRegiaoAC.push(this.produtos[i]);
          } else if (this.produtos[i].local.id == 1) {
            this.produtosRegiaoAM.push(this.produtos[i]);
          } else if (this.produtos[i].local.id == 3) {
            this.produtosRegiaoAP.push(this.produtos[i]);
          }
        }
      });
    // criaListaRegiao();

    // this.produtosRegiao = this.produtos.map((data) =>(
    //   if(produtos[data].local.id) {

    //   }
    // ));
    // function getProdutosRegiao (data) {
    // }
  },
  methods: {
    criaListaRegiao() {
      for (let i = 0; i < this.produtos.length; i++) {
        if (this.produtos[i].local.id == 1) {
          this.produtosRegiaoAM.push(this.produtos[i]);
        }
        if (this.produtos[i].local.id == 2) {
          this.produtosRegiaoAC.push(this.produtos[i]);
        }
        if (this.produtos[i].local.id == 3) {
          this.produtosRegiaoAP.push(this.produtos[i]);
        }
      }
    },
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
