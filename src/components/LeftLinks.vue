<template>
  <q-list no-border link inset-separator>
    <q-list-header></q-list-header>
    <q-side-link item to="/" exact>
      <q-item-side icon="home" />
      <q-item-main label="Ĉefpaĝo" />
    </q-side-link>
    <q-side-link v-if="!$store.state.isAuthenticated" item to="/login">
      <q-item-side icon="account_circle" />
      <q-item-main label="Ensaluti" />
    </q-side-link>
    <q-side-link item to="/form">
      <q-item-side icon="plus_one" />
      <q-item-main label="Aliĝilo" />
    </q-side-link>
    <q-side-link item to="/partoprenantoj">
      <q-item-side icon="people" />
      <q-item-main label="Partoprenantoj" />
    </q-side-link>
    <q-side-link item to="/organizantoj">
      <q-item-side icon="people_outline" />
      <q-item-main label="Organizantoj" />
    </q-side-link>
    <q-side-link item to="/program">
      <q-item-side icon="date_range" />
      <q-item-main label="Programo" />
    </q-side-link>
    <q-side-link item to="/rooms">
      <q-item-side icon="hotel" />
      <q-item-main label="Ĉambroj" />
    </q-side-link>
    <q-side-link item to="/caravans">
      <q-item-side icon="train" />
      <q-item-main label="Karavanoj" />
    </q-side-link>
    <q-item-separator />
    <q-side-link item to="/categories">
      <q-item-side icon="local_offer" />
      <q-item-main label="Kategorioj" />
    </q-side-link>
  </q-list>
</template>
