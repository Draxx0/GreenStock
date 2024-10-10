<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '../../../lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border border-gray-600 bg-secondary-foreground text-white shadow-sm',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
