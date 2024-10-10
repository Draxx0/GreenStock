<template>
  <section :class="cn('max-w-8/10 mx-auto', props.class)">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { cn } from '../../lib/utils';

interface Props {
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
});
</script>
