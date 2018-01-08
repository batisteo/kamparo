<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <q-card v-if="!isAuthenticated" class="col-md-5 shadow-24">
        <q-card-title align="center">
          <h5><strong>Ensaluti</strong></h5>
          <span slot="subtitle">Elektu manieron por registriĝi aŭ ensaluti</span>
        </q-card-title>
        <q-card-separator />
        <q-card-main align="center">
          <q-btn @click="logIn" big color="blue-13" class="full-width" icon="fa-facebook-square">
            Facebook
          </q-btn>
          <q-btn @click="logIn" big color="red-8" class="full-width" icon="fa-google">
            Google
          </q-btn>
        </q-card-main>
        <q-card-main>
          <q-collapsible label="Aliaj opcioj">
            <div>
              <p class="center">Per retadreso</p>
              <q-field
                helper="Vi tuj ricevos magian ligilon por registriĝi aŭ ensaluti"
                error-label="Please type a valid email"
              >
                <q-input type="email" v-model="form.email" float-label="Via retadreso"
                  @keyup.enter="submit"
                />
              </q-field>
              <q-btn @click="submit" big flat color="grey" class="full-width">
                Ensaluti
              </q-btn>
            </div>
          </q-collapsible>
        </q-card-main>

      </q-card>

      <q-card v-else class="col-md-5">
        <q-card-main>
          <q-btn @click="logOut" big flat color="red" class="full-width">
            Log Out
          </q-btn>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { Toast } from 'quasar'
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      showOthers: false,
      form: {
        email: ''
      }
    }
  },

  validations: {
    form: {
      email: { required, email }
    }
  },

  computed: mapState({
    isAuthenticated: state => state.isAuthenticated
  }),

  methods: {
    ...mapActions(['logIn', 'logOut']),

    submit () {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        Toast.create('Please review fields again.')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .center { text-align: center }
  .q-btn {
    margin: 1rem auto;
  }
</style>
