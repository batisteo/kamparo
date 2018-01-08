<template>
  <div class="layout-padding">
    <h5>Partoprenantoj</h5>

    <q-search placeholder="Serĉi" v-model="search" autofocus />

    <q-toggle v-model="notPaid" color="red" label="ne pagis" />&nbsp;
    <q-toggle v-model="prePaid" color="purple-4" label="antaŭpagis" />&nbsp;
    <q-toggle v-model="paid" color="green" label="pagis" />&nbsp;
    <q-toggle v-model="arrived" color="blue" label="alvenis" />&nbsp;

    <q-item-separator />

    <q-list highlight no-border inset-separator>
      <q-item>
        <q-item-side avatar="/statics/boy-avatar.png" />
        <q-item-main>
          <q-item-tile label>Baptiste Darthenay</q-item-tile>
          <q-item-tile sublabel>
            batisteo — Francio
            <svg-flag country="FR" />
            <q-chip color="purple-4" small>antaŭpagis</q-chip>
          </q-item-tile>
        </q-item-main>
        <q-item-side right>
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-side>
          <q-item-tile avatar>
            <img src="~assets/boy-avatar.png" />
          </q-item-tile>
        </q-item-side>
        <q-item-main label="Stela Besenyei-Merger">
          <q-item-tile sublabel>
            Stela
            <q-chip color="red" small>ne pagis</q-chip>
          </q-item-tile>
        </q-item-main>
        <q-item-side right icon="chat_bubble" />
      </q-item>
      <q-item>
        <q-item-side avatar="/statics/guy-avatar.png" />
        <q-item-main label="Jack Doe" />
      </q-item>
    </q-list>
  </div>
</template>

<script>
import SvgFlag from '@/SvgFlag.vue'

export default {
  components: { SvgFlag },
  data () {
    return {
      search: '',
      notPaid: true,
      prePaid: true,
      paid: true,
      arrived: true
    }
  }
}
</script>
