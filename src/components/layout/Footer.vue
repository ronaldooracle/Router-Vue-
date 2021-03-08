<template>
  <v-footer
    app
    inset
    color="indigo lighten-4"
  >
    <v-col
      class="overline"
      cols="6"
      md="6"
      sm="12"
    >
      {{ new Date().getFullYear() }} <b>INTRANET CASSEMS</b> • Rua Antônio Maria Coelho, 6065
    </v-col>
    <v-col
      class="text-right overline"
      cols="6"
      md="6"
      sm="12"
    >
      Vivenda do Bosque • CEP 79021-170 • Campo Grande-MS
    </v-col>
    <v-col>
      <share-it>
        <template v-slot:twitter-icon>
          <v-icon>mdi-twitter</v-icon>
        </template>
        <template v-slot:twitter-label>
          <em>Twitte!</em>
        </template>
        <template v-slot:whatsapp-icon>
          <v-icon>mdi-whatsapp</v-icon>
        </template>
        <template v-slot:whatsapp-label>
          <em>Whatsapp</em>
        </template>
      </share-it>
    </v-col>
    </v-footer>
</template>

<script>
export default {}
</script>

<style>

</style>
