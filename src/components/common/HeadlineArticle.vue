<template>
  <div class="space-y-12">
    <Badge>
      <span>Lire nos articles</span>
    </Badge>
    <div class="space-y-4">
      <h1 class="text-3xl font-bold">Parcourez nos articles</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, quod
        adipisci?
      </p>
    </div>

    <RouterLink
      :to="`${STATIC_WEBSITE_LINK.POSTS}/lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit`"
      class="group block relative w-full h-full rounded-xl overflow-hidden"
    >
      <img
        src="https://plus.unsplash.com/premium_photo-1664300792059-863ccfe55932?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yJUMzJUFBdHxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        class="max-h-[550px] overflow-hidden rounded-xl w-full object-cover group-hover:scale-110 transition-transform duration-1000"
      />
      <div
        class="absolute bottom-0 left-0 backdrop-blur-lg bg-white/30 p-6 rounded-b-lg w-full min-h-[35%] flex flex-col justify-between"
      >
        <div class="space-y-3">
          <div class="flex justify-between">
            <h2 class="text-xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            </h2>

            <ArrowUpRight
              class="group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
            />
          </div>

          <p class="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eius, asperiores autem ea, maiores est pariatur dolore, iste
            exercitationem facere nobis! Similique harum ducimus cumque
            quibusdam ex quis velit eius. Harum accusantium, similique sed odio,
            placeat deserunt quod vitae possimus magni eveniet ad velit impedit
            minima facere doloribus. Quod quisquam harum beatae dignissimos
            itaque autem aspernatur maiores atque sit ea.
          </p>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-8">
              <div class="flex items-center gap-2">
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback />
                </Avatar>
                <span class="text-sm font-medium"> William FORT </span>
              </div>

              <div class="flex items-center gap-2">
                <div
                  class="size-8 rounded-full border border-white flex items-center justify-center"
                >
                  <Calendar size="1em" />
                </div>
                <span class="text-sm font-medium"> 12 juin 2022 </span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <Badge variant="outlined">
                <span>UX-UI</span>
              </Badge>
              <Badge variant="outlined">
                <span>Design System</span>
              </Badge>
              <Badge variant="outlined">
                <span>Sleep & Care</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
<script setup>
import { ArrowUpRight, Calendar } from 'lucide-vue-next';
import { STATIC_WEBSITE_LINK } from '../../constants';
import Avatar from '../ui/avatar/Avatar.vue';
import AvatarFallback from '../ui/avatar/AvatarFallback.vue';
import AvatarImage from '../ui/avatar/AvatarImage.vue';
import Badge from '../ui/badge/Badge.vue';
</script>
