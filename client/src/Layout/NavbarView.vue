<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const accentColor = ref('')
const route = useRoute()

const menuData = ref([
  { title: 'O Anetce', url: '/o-anetce' },
  { title: 'Leczenie', url: '/leczenie' },
  { title: 'Podziękowania', url: '/podziekowania' },
  { title: 'Galeria', url: '/galeria' },
  { title: 'Fundacja Dzieciom', url: '/fundacja' },
  { title: 'Pomoc', url: '/pomoc' }
])

const setAccentColor = (path) => {
  if (path === '/o-anetce') {
    accentColor.value = 'about'
  } else if (path === '/leczenie') {
    accentColor.value = 'treatment'
  } else if (path === '/galeria') {
    accentColor.value = 'gallery'
  } else if (path === '/podziekowania') {
    accentColor.value = 'gratitude'
  } else if (path === '/fundacja') {
    accentColor.value = 'foundation'
  } else if (path === '/pomoc') {
    accentColor.value = 'help'
  } else {
    accentColor.value = ''
  }
}

watch(
  () => route.path,
  (newPath) => {
    setAccentColor(newPath)
  }
)
setAccentColor(route.path)
const getAccentColorClass = () => {
  return accentColor.value
}
</script>

<template>
  <nav class="flex">
    <router-link to="/">
      <button class="siteLogo flexColumn">Anetka Bieryt<span>Ty też możesz pomóc!</span></button>
    </router-link>
    <div class="navigation flex">
      <ul class="flex">
        <li v-for="(menu, index) in menuData" :key="index">
          <router-link :to="menu.url">
            <button
              class="menuItem"
              :class="{
                active: $route.path === menu.url,
                [getAccentColorClass()]: accentColor.value !== ''
              }"
            >
              {{ menu.title }}
            </button>
          </router-link>
        </li>
      </ul>
      <a href="https://dzieciom.pl" target="_blank" class="foundationLogo">
        <img src="/zdazyczpomocalogo.png" alt="Fundacja Dzieciom Logo" />
      </a>
    </div>
  </nav>
</template>

<style src="./NavbarView.scss"></style>
