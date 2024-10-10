<template>
  <Section>
    <div
      class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10"
    >
      <div class="mx-auto grid w-full gap-2">
        <h1 class="text-3xl font-semibold">Settings</h1>
      </div>
      <div
        class="mx-auto grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
      >
        <nav class="grid gap-4 text-sm text-muted-foreground">
          <RouterLink to="/settings" class="font-semibold text-primary">
            General
          </RouterLink>
          <RouterLink to="/settings/profile"> Profile </RouterLink>
        </nav>
        <div class="grid gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Store Name</CardTitle>
              <CardDescription>
                Used to identify your store in the marketplace.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Input placeholder="Store Name" />
              </form>
            </CardContent>
            <CardFooter class="border-t px-6 py-4">
              <Button>Save</Button>
            </CardFooter>
          </Card>

          <Button class="w-fit" @click="logout">
            <span>Me déconnecter</span>
          </Button>
        </div>
      </div>
    </div>
  </Section>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import Section from '../../components/common/Section.vue';
import Button from '../../components/ui/button/Button.vue';
import Card from '../../components/ui/card/Card.vue';
import CardContent from '../../components/ui/card/CardContent.vue';
import CardDescription from '../../components/ui/card/CardDescription.vue';
import CardFooter from '../../components/ui/card/CardFooter.vue';
import CardHeader from '../../components/ui/card/CardHeader.vue';
import CardTitle from '../../components/ui/card/CardTitle.vue';
import Input from '../../components/ui/input/Input.vue';
import store from '../../store/auth.store';

const router = useRouter();

const logout = async () => {
  await store.dispatch('logout');
  router.push('/auth/login');
};
</script>
