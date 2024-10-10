<template>
  <Header v-if="!hideHeader" />
  <main :class="!hideHeader ? 'my-[200px]' : ''">
    <RouterView />
  </main>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './layouts/Header.vue';

const route = useRoute();

const hideHeader = computed(() => {
  return route.path.startsWith('/auth');
});
</script>
