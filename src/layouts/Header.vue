<template>
  <header
    class="border-b border-gray-800 fixed inset-0 z-50 w-full h-fit backdrop-blur-[12px]"
  >
    <nav class="py-4 max-w-8/10 mx-auto flex items-center justify-between">
      <RouterLink :to="STATIC_WEBSITE_LINK.HOME" class="cursor-pointer">
        <div class="flex items-center gap-3 group relative">
          <img src="/assets/images/logo.png" alt="Logo de Blue" class="w-12" />
          <span
            class="text-xl font-bold group-hover:text-primary transition-colors duration-300 ease-in-out"
            >GreenStock</span
          >

          <div
            class="absolute inset-0 h-1/2 w-full bg-primary filter blur-2xl -z-10"
          ></div>
        </div>
      </RouterLink>

      <div class="relative w-full max-w-sm items-center">
        <Input
          id="search"
          type="text"
          placeholder="Rechercher un article"
          class="pl-10"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>

      <ul class="flex items-center gap-8">
        <li v-for="link in LINKS" :key="link.name">
          <RouterLink
            :to="link.path"
            class="cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out"
          >
            {{ link.name }}
          </RouterLink>
        </li>

        <li>
          <Button class="flex items-center gap-2">
            <Pen size="1.2em" />
            <span class="font-semibold">Ecrire</span>
          </Button>
        </li>

        <li class="hover:shadow-blured transition-all duration-300 ease-in-out">
          <RainbowButton>
            <div class="flex items-center gap-2">
              <Crown size="1.2em" class="text-white" />
              <span class="font-semibold text-white text-sm"
                >Devenir Premium</span
              >
            </div>
          </RainbowButton>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { Crown, Pen, Search } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
import Button from '../components/ui/button/Button.vue';
import RainbowButton from '../components/ui/button/RainbowButton.vue';
import Input from '../components/ui/input/Input.vue';
import { STATIC_WEBSITE_LINK } from '../constants';

const LINKS = [
  {
    name: 'Articles',
    path: STATIC_WEBSITE_LINK.POSTS,
  },
  {
    name: 'Categories',
    path: STATIC_WEBSITE_LINK.CATEGORIES,
  },
  {
    name: 'Tarifs',
    path: STATIC_WEBSITE_LINK.PRICING,
  },
  {
    name: 'Auteurs',
    path: STATIC_WEBSITE_LINK.AUTHORS,
  },
  {
    name: 'Connexion',
    path: STATIC_WEBSITE_LINK.LOGIN,
  },
];
</script>
