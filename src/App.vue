<template>
  <v-app id="app">
    <h2 class="text-center primary--text mt-4">Grimoire de sorts</h2>
    <v-card class="main mx-auto" elevation="0">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Nom / niveau"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="spells"
          :mobile-breakpoint="0"
          :search="search"
          :single-expand="true"
          :expanded.sync="expanded"
          item-key="title"
          show-expand
          style="background: none !important;"
          :footer-props="{
            'items-per-page-text': 'Sorts/page'
          }"
        >
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <SpellSheet :spell="item" />
            </td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import spells from "@/./spells.json";
import SpellSheet from "@/components/SpellSheet";

export default {
  name: "App",
  components: { SpellSheet },
  data() {
    return {
      spells: spells,
      search: "",
      expanded: [],
      headers: [
        {
          text: "Nom",
          value: "title"
        },
        {
          text: "Niveau",
          value: "level"
        },
        { text: "", value: "data-table-expand" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  background: url("./assets/background.jpg") repeat center;
  h1 {
    font-family: "Uncial Antiqua", cursive;
  }
}
.main {
  background: none !important;
  width: 100%;
  max-width: 1280px;
}
</style>
