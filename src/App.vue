<template>
  <RouterView v-if="isInit"/>
  <Host v-else/>
</template>

<script setup lang="ts">
import {toRefs} from "vue";
import {useHostStore} from "@/stores/host";
import Host from "@/Host.vue";

const {isInit} = toRefs(useHostStore())

</script>

<style lang="scss">

</style>
