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

      <LoginForm />

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
            alt="Apple"
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
import LoginForm from '../../components/auth/LoginForm.vue';
import Button from '../../components/ui/button/Button.vue';
import Separator from '../../components/ui/separator/Separator.vue';
</script>
