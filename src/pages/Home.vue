<template>
  <Heading />
</template>

<script>
import { defineComponent } from 'vue';
import Heading from '../containers/home/Heading.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Heading,
  },
});
</script>
