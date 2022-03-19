<template>
  <v-container>
    <h1 class="text-center page-title mb-6">Cadastrar Estabelecimento</h1>
    <v-form class="registro-box" ref="form">
      <v-text-field
        label="Nome do Estabelecimento"
        color="deep-purple lighten-2"
        required
      >
      </v-text-field>
      <v-text-field label="E-mail" color="deep-purple lighten-2">
      </v-text-field>
      <v-text-field
        label="Telefone"
        color="deep-purple lighten-2"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        label="Cidade"
        color="deep-purple lighten-2"
      ></v-select>
      <v-text-field
        label="Endereço"
        color="deep-purple lighten-2"
      ></v-text-field>
      <v-text-field label="CEP" color="deep-purple lighten-2"></v-text-field>
      <v-text-field
        type="password"
        label="Informe uma senha"
        color="deep-purple lighten-2"
      ></v-text-field>
      <v-text-field
        type="password"
        label="Confirme sua senha"
        color="deep-purple lighten-2"
      ></v-text-field>

      <div class="register-page-btns">
        <v-btn rounded color="deep-purple lighten-2" dark> Cadastrar </v-btn>
        <v-btn rounded color="deep-purple lighten-2 ml-2" dark>
          Cancelar
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'VendorRegisterPage',
  data() {
    return {
      select: null,
      items: ['Manaus - AM', 'Rio Branco - AC', 'Macapá- AP'],
    };
  },
};
</script>

<style scoped>
.page-title {
  color: #9575cd;
}

.register-page-btns {
  display: flex;
  justify-content: center;
}
</style>
