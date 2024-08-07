<script>
import { ref } from 'vue'
import AnimatedBlobs from '../components/AnimatedBlobs.vue'

export default {
  setup() {
    const images = ref([{ src: '/gratitudeView.jpg' }, { src: '/dziekujemy.png' }])
    return { images }
  },
  components: {
    AnimatedBlobs
  }
}
</script>

<template>
  <div id="gratitudeView" class="view">
    <AnimatedBlobs />
    <img src="/gratitudeView.jpg" alt="" />
    <div class="content flexColumn">
      <div class="firstPara">
        <h1>Serdeczne podziękowania</h1>
        <h3>
          Z całego serca pragniemy wyrazić naszą wdzięczność wszystkim, którzy okazali nam wsparcie
          i pomoc.
        </h3>
      </div>
      <div class="secondPara flexColumn">
        <p>
          Dziękujemy wszystkim za każdą formę wsparcia – zarówno materialną, jak i duchową. To
          dzięki Wam możemy wierzyć w lepsze jutro dla Anetki i mieć nadzieję na lepszą przyszłość.
        </p>
        <p>
          Dziękujemy naszej rodzinie i przyjaciołom, którzy byli przy nas na każdym kroku, dając nam
          siłę i nadzieję. Wasza miłość i troska są bezcenne. Dzięki Wam czuliśmy, że nie jesteśmy
          sami .
        </p>
        <!-- nam siłę do walki i wiarę w lepsze jutro. Dziękujemy za to, że zawsze byliście
        przy nas, że możemy na Was liczyć w każdej sytuacji. Wasza obecność jest dla nas
        największym skarbem. -->
        <p>
          Największe podziękowania należą się naszym ukochanym rodzicom. Jesteście niezastąpionym
          oparciem i wzorem do naśladowania. Wasza troska, poświęcenie i bezgraniczna miłość dały
          Anetce możliwie najlepsze życie, pełne radości i uśmiechu. Nie było by jej tu z nami,
          gdyby nie wasze oddanie.
        </p>
        <!-- <h3>Z wyrazami wdzięczności,</h3>
        <h3>Anetka wraz z rodzeństwem</h3> -->
      </div>
      <img src="/dziekujemy.png" alt="" class="flex" />
    </div>
  </div>
</template>

<style src="./GratitudeView.scss"></style>
