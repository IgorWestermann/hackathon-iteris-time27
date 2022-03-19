<template>
    <v-container>
        <div class="novo-produto">
            <h2 color="deep-purple lighten-2" class="mb-5">Novo Produto</h2>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
            
            <v-file-input
                label="Imagem"
                filled
                prepend-icon="mdi-camera"
            ></v-file-input>

            <p class="mb-2 mt-6">Local:</p>
                <v-text-field
                :rules="Rules"
                label="Nome do Estabelecimento"
                required
                ></v-text-field>

                <v-text-field
                :rules="Rules"
                label="CEP"
                required
                ></v-text-field>

                
                <v-text-field
                :rules="Rules"
                label="Endereço"
                required
                ></v-text-field>

                <p class="mb-2 mt-6">Produto:</p>

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

                <v-btn @click="validate" rounded color="deep-purple lighten-2" dark> Validar </v-btn>

            </v-form>
        </div>

        <div class="meus-produtos">
            <h2 class="mb-5 mt-8">Meus Produtos</h2>
            <v-simple-table>
                <template v-slot:default>
                
                <tbody>
                    <tr
                    v-for="item in desserts"
                    :key="item.name"
                    >
                    <v-avatar color="deep-purple lighten-2" dark class="mt-2" size ="34">
                   
                    </v-avatar>
                    <td>{{ item.nome }}</td>
                    <td>{{ item.preco }}</td>
                    <td>{{ item.sabor }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'NewProductPage',
   data: () => ({
        desserts: [
          {
            nome: 'Ovo1',
            preco: 'R$50,00',
            sabor: 'chocolate ao leite',
          },
          {
            nome: 'Ovo2',
            preco: 'R$70,00',
            sabor: 'chocolate branco',
          },
        ],
      valid: true,
      rules: '',
      Rules: [
        v => !!v || 'Campo Inválido',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>