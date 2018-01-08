<template>
  <div>
    <q-layout ref="layout" view="hHh LpR fff" reveal>
      <!-- Header -->
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          <router-link to="/" exact>{{title}}</router-link>
          <span slot="subtitle"><router-link to="/" exact>{{slug}}.esperant.io</router-link></span>
        </q-toolbar-title>
          <q-btn v-if="$store.state.isAuthenticated" flat @click="$router.push('/profile')">
            <q-icon name="face" />
          </q-btn>
          <q-btn v-else flat @click="$router.push('/login')">
            <q-icon name="account_circle" />
          </q-btn>
      </q-toolbar>
      <!-- Left Side Panel -->
      <div slot="left">
        <left-links />
      </div>
      <!-- sub-routes get injected here: -->
      <router-view />
      <!-- Footer -->
      <q-toolbar slot="footer">
        <q-toolbar-title>
          {{footer}}
        </q-toolbar-title>
      </q-toolbar>
    </q-layout>
  </div>
</template>

<script>
import LeftLinks from '@/LeftLinks.vue'

export default {
  props: ['title', 'slug', 'footer'],
  components: {
    LeftLinks
  }
}
</script>

<style lang="stylus" scoped>
  .q-toolbar-title a { color: white }
</style>
