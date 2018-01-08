<template>
  <div class="layout-padding">
    <div class="justify-center">
      <h5>IJK 2019 - Someren, Nederlando</h5>
      <div class="row">
        <q-card class="col-md">
          <q-card-title>
            Partoprenantoj
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            Aliĝis: 289
          </q-card-main>
          <q-card-main>
            Antaŭpagis: 211
          </q-card-main>
          <q-card-main>
            Pagis: 32
          </q-card-main>
          <q-card-main>
            Alvenis: 3
          </q-card-main>
        </q-card>
        <q-card class="col-md">
          <q-card-title>
            Card Title
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            Card Content
          </q-card-main>
        </q-card>
      </div>
    </div>

      Auth
      <span v-if="$auth.ready()">
        Ready!! <span v-text="$auth.user()"></span>
      </span>
      <span v-else>Loading…</span>
      <div>
        <span v-text="$store.state.isAuthenticated"></span>
      </div>
      <q-btn @click="$store.commit('logIn')">Log in</q-btn>
      <q-btn @click="$store.commit('logOut')">Log out</q-btn>
  </div>
</template>

<script>
export default {
  created () {
    this.$auth.ready(function () {
      console.log(this)
    })
  }
}
</script>
