<template>
    <v-container>
      <AppBar />
        <div class="novo-produto">
            <h2 color="deep-purple lighten-2" class="mb-5">Novo Produto</h2>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >

                <v-text-field
                :rules="Rules"
                label="Nome do Produto"
                required
                ></v-text-field>
                
                <v-text-field
                :rules="Rules"
                label="Preço"
                required
                ></v-text-field>

                
                <v-text-field
                :rules="Rules"
                label="Sabor"
                required
                ></v-text-field>

                <v-file-input class= mt-4
                label="Imagem"
                filled
                prepend-icon="mdi-camera"
            ></v-file-input>

                <v-btn @click="validate" rounded color="deep-purple lighten-2" dark> Validar </v-btn>

            </v-form>
        </div>

        <div class="meus-produtos">
            <h2 class="mb-5 mt-8">Meus Produtos</h2>
            <v-simple-table>
                <template v-slot:default>
                
                <tbody>
                    <tr v-for="(item, i) in produtosRegiaoAP" :key="i">
                    <v-avatar dark size="30" class="mt-5 ml-2">
                      <img
                          :src="produtosRegiaoAP[i].imagem"
                          :alt="produtosRegiaoAP[i].nome"
                      >
                    </v-avatar>
                    <td class="mb-4 pb-3 pt-3">{{ produtosRegiaoAP[i].nome }}</td>
                    <td class="mb-4 pb-3 pt-3">R${{ produtosRegiaoAP[i].preco }}</td>
                    <td class="mb-4 pb-3 pt-3">{{ produtosRegiaoAP[i].sabor }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </div>
    </v-container>
</template>

<script>
import AppBar from '../components/AppBar.vue'

export default {
    name: 'NewProductPage',
   data: () => ({
      tab: null,
      produtos: [],
      produtosRegiaoAM: [],
      produtosRegiaoAC: [],
      produtosRegiaoAP: [],
      items: ["Manaus", "Rio Branco", "Macapá"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      valid: true,
      rules: '',
      Rules: [
        v => !!v || 'Campo Inválido',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate();
       this.$refs.form ='';
      },
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
    },
    components: { AppBar },
  }
</script>