<script>
import { ref } from 'vue'
import { useImages } from '../assets/useImages.js'
import AnimatedMacaroni from '../components/AnimatedMacaroni.vue'

export default {
  setup() {
    const { images } = useImages()
    const showModal = ref(false)
    const selectedImage = ref(null)

    const openModal = (index) => {
      selectedImage.value = index
      showModal.value = true
    }

    const closeModal = () => {
      selectedImage.value = null
      showModal.value = false
    }

    const selectNext = () => {
      if (selectedImage.value < images.value.length - 1) {
        selectedImage.value += 1
      }
    }

    const selectPrev = () => {
      if (selectedImage.value > 0) {
        selectedImage.value -= 1
      }
    }

    return { images, showModal, selectedImage, openModal, closeModal, selectNext, selectPrev }
  },
  components: {
    AnimatedMacaroni
  }
}
</script>

<template>
  <div id="galleryView" class="view">
    <AnimatedMacaroni />
    <div v-if="showModal" class="modalPopUp">
      <div class="modalImage">
        <img :src="images[selectedImage].src" alt="Wybrane zdjęcie z galerii Anetki" />
        <button @click="closeModal" class="close">X</button>
      </div>
      <button @click="selectPrev" class="previous" :disabled="selectedImage === 0">&lt;</button>
      <button @click="selectNext" class="next" :disabled="selectedImage === images.length - 1">
        &gt;
      </button>
    </div>
    <div class="galleryContent flex">
      <div v-for="(image, index) in images" :key="index + 1" class="row">
        <img :src="image.src" :loading="lazy" @click="openModal(index)" alt="Zdjęcie z galerii Anetki" />
      </div>
    </div>
  </div>
</template>

<style src="./GalleryView.scss"></style>
