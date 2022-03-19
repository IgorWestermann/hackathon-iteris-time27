<template>
    <v-container>
        <div class="novo-produto">
            <h2 class="mb-5">Novo Produto</h2>
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
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Nome do Estabelecimento"
                required
                ></v-text-field>

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="CEP"
                required
                ></v-text-field>

                
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Endereço"
                required
                ></v-text-field>

                <p class="mb-2 mt-6">Produto:</p>

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Nome do Produto"
                required
                ></v-text-field>
                
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Preço"
                required
                ></v-text-field>

                
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Sabor"
                required
                ></v-text-field>

                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >
                Validar
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Resetar
                </v-btn>

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
                    <v-avatar class="mt-2" size ="34" color="red">
                   
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
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
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
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>