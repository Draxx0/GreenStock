<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import type { HTMLAttributes } from 'vue';
import { cn } from '../../../lib/utils';

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes['class'];
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex h-10 w-full  rounded-md border border-gray-700 bg-background px-3 py-2 text-sm ring-offset-primary file:border-0 file:bg-transparent file:text-sm file:font-medium focus:placeholder:-translate-y-1 focus:placeholder:opacity-0 focus:placeholder:transition-all focus:placeholder:duration-300 ease-in-out placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  />
</template>
