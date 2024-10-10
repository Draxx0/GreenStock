<template>
  <section
    class="h-svh mx-auto flex flex-col items-center justify-center relative"
  >
    <div
      class="bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGph8fDB8fHww')] h-full w-full absolute inset-0 -z-10 filter blur-md"
    ></div>
    <div
      class="bg-secondary shadow-blured py-6 px-24 rounded-xl space-y-8 min-h-[700px]"
    >
      <div class="space-y-8">
        <div class="flex items-center justify-center gap-2">
          <img src="/assets/images/logo.png" alt="Logo de Blue" class="w-12" />
          <span class="text-xl font-bold">GreenStock</span>
        </div>

        <div class="space-y-2">
          <h1 class="text-center text-2xl font-bold">Vous êtes de retour !</h1>
          <p class="text-sm text-muted-foreground text-center">
            Connectez-vous avec votre compte pour accéder à vos articles.
          </p>
        </div>
      </div>

      <form @submit.prevent="handleSubmit(onSubmit)" class="space-y-4">
        <div class="space-y-3">
          <Label for="email" class="font-bold">Email</Label>
          <Input
            id="email"
            type="email"
            v-model="values.email"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="text-red-500 text-sm">
            {{ errors.email }}
          </p>
        </div>

        <div class="space-y-3">
          <Label for="password" class="font-bold">Mot de passe</Label>
          <Input
            id="password"
            type="password"
            v-model="values.password"
            :class="{ 'border-red-500': errors.password }"
          />
          <p v-if="errors.password" class="text-red-500 text-sm">
            {{ errors.password }}
          </p>
        </div>

        <Button class="w-full" type="submit"> Se connecter </Button>
      </form>

      <Separator class="w-full bg-muted-foreground" />

      <div class="space-y-4">
        <Button class="flex w-full items-center gap-2">
          <img
            src="/assets/images/google-icon.png"
            alt="Google"
            class="w-5 object-contain"
          />
          <span>Continuer avec Google</span>
        </Button>

        <Button class="flex w-full items-center gap-2">
          <img
            src="/assets/images/apple-icon.png"
            alt="Google"
            class="w-5 object-contain"
          />
          <span>Continuer avec Apple</span>
        </Button>
      </div>

      <div class="text-center text-sm text-muted-foreground">
        Vous n'avez pas de compte ?
        <RouterLink
          to="/auth/signup"
          class="text-primary hover:underline hover:underline-offset-4"
          >Créez-en un</RouterLink
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { z } from 'zod';
import Button from '../../components/ui/button/Button.vue';
import Input from '../../components/ui/input/Input.vue';
import Label from '../../components/ui/label/Label.vue';
import Separator from '../../components/ui/separator/Separator.vue';

const schema = z.object({
  email: z.string().email('Veuillez entrer une adresse e-mail valide'),
  password: z
    .string()
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

const { handleSubmit, values, errors } = useForm({
  validationSchema: schema,
});

// watch(errors, () => {
//   console.log('Erreurs:', errors);
// });

const onSubmit = async (data: { email: string; password: string }) => {
  console.log('Email:', data.email);
  console.log('Mot de passe:', data.password);
  try {
    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: data.email,
        password: data.password,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Connexion réussie:', result);
      // Gérer la connexion réussie
    } else {
      console.error('Erreur de connexion:', result);
    }
  } catch (error) {
    console.error('Une erreur est survenue lors de la connexion:', error);
  }
};
</script>
