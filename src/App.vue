<template>
  <v-app id="app">
    <h2 class="text-center primary--text mt-4">Grimoire de sorts</h2>
    <v-radio-group
      v-model="selectedClass"
      row
      @change="filterByClass"
      class="mx-auto"
    >
      <v-radio label="toutes" value="all" />
      <v-radio
        v-for="classPc in classes"
        :key="classPc"
        :label="classPc"
        :value="classPc"
      />
    </v-radio-group>
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
          :item-class="getRowClass"
          show-expand
          no-results-text="Pas de résultat"
          :footer-props="{
            'items-per-page-text': 'Sorts/page'
          }"
          style="background: none !important;"
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
import SPELLS from "@/./spells.json";
import SpellSheet from "@/components/SpellSheet";
import { CLASSES } from "@/constantes/classes";

export default {
  name: "App",
  components: { SpellSheet },
  data() {
    return {
      spells: SPELLS,
      classes: CLASSES,
      selectedClass: "all",
      search: "",
      expanded: [],
      headers: [
        {
          text: "Nom",
          value: "title",
          class: "spellRow"
        },
        {
          text: "Niveau",
          value: "level",
          class: "spellRow"
        },
        { text: "", value: "data-table-expand" }
      ]
    };
  },
  methods: {
    getRowClass() {
      return "spellRow";
    },
    filterByClass() {
      console.log(this.selectedClass);
      if ("all" === this.selectedClass) {
        this.spells = SPELLS;
      } else {
        this.spells = SPELLS.filter(elem => {
          return (
            -1 !==
            elem.classes.findIndex(classe => classe === this.selectedClass)
          );
        });
      }
    }
  }
};
</script>

<style lang="scss">
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
.spellRow {
  td {
    @media screen and (max-width: 400px) {
      &:first-child {
        max-width: 50vw;
      }
      &:nth-child(2) {
        width: 25vw;
      }
    }
  }
}
</style>
