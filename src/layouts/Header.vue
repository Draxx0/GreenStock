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
            v-if="link.isDisplayed"
          >
            {{ link.name }}
          </RouterLink>
        </li>

        <li v-if="user">
          <RouterLink
            :to="STATIC_WEBSITE_LINK.PROFILE"
            class="cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out"
          >
            <Avatar class="active:translate-y-1">
              <AvatarImage
                :src="`http://localhost:1337${user.avatar.formats.medium.url}`"
              />
              <AvatarFallback>
                <span class="uppercase text-lg font-bold">
                  {{ user.username.charAt(0) }}
                </span>
              </AvatarFallback>
              <span class="sr-only">User</span>
              <AvatarIndicator />
            </Avatar>
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
import Avatar from '../components/ui/avatar/Avatar.vue';
import AvatarFallback from '../components/ui/avatar/AvatarFallback.vue';
import AvatarImage from '../components/ui/avatar/AvatarImage.vue';
import Button from '../components/ui/button/Button.vue';
import RainbowButton from '../components/ui/button/RainbowButton.vue';
import Input from '../components/ui/input/Input.vue';
import { STATIC_WEBSITE_LINK } from '../constants';
import store from '../store/auth.store';

const isAuthenticated = store.getters.isAuthenticated;
const user = store.getters.getUser;

console.log('User:', user);

const LINKS = [
  {
    name: 'Articles',
    path: STATIC_WEBSITE_LINK.POSTS,
    isDisplayed: true,
  },
  {
    name: 'Categories',
    path: STATIC_WEBSITE_LINK.CATEGORIES,
    isDisplayed: true,
  },
  {
    name: 'Tarifs',
    path: STATIC_WEBSITE_LINK.PRICING,
    isDisplayed: true,
  },
  {
    name: 'Auteurs',
    path: STATIC_WEBSITE_LINK.AUTHORS,
    isDisplayed: true,
  },
  {
    name: 'Connexion',
    path: STATIC_WEBSITE_LINK.LOGIN,
    isDisplayed: isAuthenticated ? false : true,
  },
];
</script>
