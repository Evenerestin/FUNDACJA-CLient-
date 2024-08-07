<script>
import { useImages } from '../assets/useImages.js'

export default {
  setup() {
    const { images } = useImages()
    return { images }
  }
}
</script>

<template>
  <div id="galleryView" class="view">
    <div class="galleryContent flex">
      <div v-for="image in images" :key="image.src" class="row">
        <img :src="image.src" :loading="lazy"/>
      </div>
    </div>
  </div>
</template>

<style src="./GalleryView.scss"></style>
