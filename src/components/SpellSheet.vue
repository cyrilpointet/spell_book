<template>
  <div class="my-4 mainSpell">
    <h4 class="primary--text text-center mb-4">{{ spell.title }}</h4>
    <p><strong class="primary--text">Niveau : </strong>{{ spell.level }}</p>
    <p><strong class="primary--text">Ecole : </strong>{{ spell.school }}</p>
    <p>
      <strong class="primary--text">Incantation : </strong>
      {{ spell.incantation }}
    </p>
    <p>
      <strong class="primary--text">Composantes : </strong>
      {{ spell.composantes }}
    </p>
    <p><strong class="primary--text">Portée : </strong>{{ spell.range }}</p>
    <p><strong class="primary--text">Durée : </strong>{{ spell.duration }}</p>
    <p class="mb-2"><strong class="primary--text">Description :</strong></p>
    <div v-html="spell.description" class="description"></div>
  </div>
</template>

<script>
export default {
  name: "SpellSheet",
  props: ["spell"]
};
</script>

<style lang="scss">
.mainSpell {
  font-family: "IM Fell English", serif !important;
  line-height: 1.5;
  font-size: 0.95rem;
}
.description {
  br {
    line-height: 125%;
  }
  table {
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border: lightgray 1px solid;
    border-spacing: 0;
  }
  tbody {
    tr:first-child {
      background-color: #69696942;
    }
  }
  th,
  td {
    text-align: start;
    padding: 0.5rem;
  }
}
</style>
