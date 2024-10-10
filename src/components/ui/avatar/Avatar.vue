<script setup lang="ts">
import { AvatarRoot } from 'radix-vue';
import type { HTMLAttributes } from 'vue';
import { type AvatarVariants, avatarVariant } from '.';
import { cn } from '../../../lib/utils';

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class'];
    size?: AvatarVariants['size'];
    shape?: AvatarVariants['shape'];
  }>(),
  {
    size: 'sm',
    shape: 'circle',
  }
);
</script>

<template>
  <AvatarRoot
    :class="
      cn(
        avatarVariant({ size, shape }),
        'bg-primary-foreground border-2 border-primary hover:shadow-blured transition-all duration-300 ease-in-out hover:-translate-y-1',
        props.class
      )
    "
  >
    <slot />
  </AvatarRoot>
</template>
