<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <div class="space-y-3">
      <Label for="email" class="font-bold">Email</Label>
      <Input
        id="email"
        type="email"
        v-model="email"
        :class="{ 'border-red-500': emailError }"
      />
      <p v-if="emailError" class="text-red-500 text-sm">
        {{ emailError }}
      </p>
    </div>

    <div class="space-y-3">
      <Label for="password" class="font-bold">Mot de passe</Label>
      <Input
        id="password"
        type="password"
        v-model="password"
        :class="{ 'border-red-500': passwordError }"
      />
      <p v-if="passwordError" class="text-red-500 text-sm">
        {{ passwordError }}
      </p>
    </div>

    <Button class="w-full" type="submit" :disabled="!isFieldValid">
      Se connecter
    </Button>
  </form>
</template>
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useField, useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { z } from 'zod';
import Input from '../../components/ui/input/Input.vue';
import Label from '../../components/ui/label/Label.vue';
import store from '../../store/auth.store';
import { renderToast } from '../../utils/renderToast';
import Button from '../ui/button/Button.vue';

const validationSchema = toTypedSchema(
  z.object({
    email: z.string().email('Veuillez entrer une adresse e-mail valide'),
    password: z
      .string()
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
  })
);

const { handleSubmit, isFieldValid } = useForm({
  validationSchema,
});

const { value: email, errorMessage: emailError } = useField<string>('email');
const { value: password, errorMessage: passwordError } =
  useField<string>('password');

const router = useRouter();

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: values.email,
        password: values.password,
      }),
    });

    const { jwt, error } = await response.json();

    if (error) {
      renderToast.error({ title: 'Erreur de connexion', description: error });
      throw new Error(error);
    }

    const userReponse = await fetch(
      'http://localhost:1337/api/users/me?populate=*',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    const user = await userReponse.json();

    console.log('User:', user);

    await store.dispatch('login', { jwt, user });

    router.push({ path: '/' });
  } catch (error) {
    renderToast.error({
      title: 'Erreur de connexion',
      description: 'Une erreur est survenue. Veuillez réessayer plus tard.',
    });
    throw error;
  }
});
</script>
