<template>
  <Section>
    <article class="space-y-24">
      <div class="flex flex-col items-center justify-center gap-4">
        <span class="text-primary"> Published Jan 23, 2022 </span>

        <h1 class="text-4xl font-bold">UX In The Age Of AI/ML</h1>

        <p class="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          doloremque.
        </p>

        <div class="flex gap-4">
          <Badge>
            <span> UX-UI </span>
          </Badge>
          <Badge>
            <span> AI </span>
          </Badge>
        </div>
      </div>

      <div class="space-y-8">
        <img
          src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW58ZW58MHx8MHx8fDA%3D"
          alt=""
          class="w-full rounded-lg max-h-[700px] object-cover"
        />
      </div>
    </article>
  </Section>
</template>
<script setup>
import Section from '../../components/common/Section.vue';
import Badge from '../../components/ui/badge/Badge.vue';

defineProps({
  slug: {
    type: String,
    required: true,
  },
});
</script>
