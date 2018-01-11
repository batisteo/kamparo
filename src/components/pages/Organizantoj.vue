<template>

  <div class="layout-padding">
    <h5>Organizantoj kaj helpantoj</h5>

    <q-search placeholder="Serĉi" v-model="search" autofocus />

  </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>
