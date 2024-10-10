<template>
  <Section>
    <HeadlineArticle />
  </Section>
</template>
<script>
import { defineComponent } from 'vue';
import HeadlineArticle from '../../components/common/HeadlineArticle.vue';
import Section from '../../components/common/Section.vue';

export default defineComponent({
  name: 'Heading',
  components: {
    Section,
    HeadlineArticle,
  },
});
</script>
