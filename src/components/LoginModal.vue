<template>
  <div>
    <q-modal v-model="open">
      <login-actions />
    </q-modal>
  </div>
</template>

<script>
import LoginActions from '@/LoginActions.vue'

export default {
  components: {
    LoginActions
  },
  data () {
    return {
      open: this.$store.state.loginOpen
    }
  }
}
</script>
