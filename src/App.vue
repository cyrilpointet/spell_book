<template>
  <v-app id="app">
    <div class="container">
      <h2 class="text-center primary--text mt-4">Grimoire de sorts</h2>

      <div class="d-flex px-2 mt-4">
        <v-select
          dense
          v-model="selectedClass"
          :items="['tous', ...classes]"
          label="Classe"
          @change="filterByClass"
          class="text-capitalize mr-2"
        />
        <v-spacer />
        <v-select
          dense
          v-model="selectedLevel"
          :items="levels"
          label="niveau"
          @change="filterByClass"
          class="text-capitalize"
        />
      </div>

      <div class="px-2">
        <v-text-field
          dense
          v-model="search"
          append-icon="mdi-magnify"
          label="Nom"
          single-line
          hide-details
        ></v-text-field>
      </div>

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
        class="mt-4"
      >
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <SpellSheet :spell="item" />
          </td>
        </template>
      </v-data-table>
    </div>
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
      levels: ["tous", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      selectedClass: null,
      selectedLevel: null,
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
      this.spells = SPELLS;
      if (null !== this.selectedClass && "tous" !== this.selectedClass) {
        this.spells = this.spells.filter(elem => {
          return (
            -1 !==
            elem.classes.findIndex(classe => classe === this.selectedClass)
          );
        });
      }
      if (null !== this.selectedLevel && "tous" !== this.selectedLevel) {
        this.spells = this.spells.filter(elem => {
          return elem.level === this.selectedLevel;
        });
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  background: url("./assets/background.jpg") repeat center;
  h2 {
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
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &:nth-child(2) {
        width: 25vw;
      }
    }
  }
}
</style>
