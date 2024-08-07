<script>
import AnimatedCorners from '../components/AnimatedCorners.vue'

export default {
  components: {
    AnimatedCorners
  }
}
</script>

<template>
  <div id="foundationView" class="view">
    <AnimatedCorners />
    <div class="content">
      <div>
        <h1>
          Misją Fundacji Dzieciom jest realizacja ogólnokrajowego Programu "Zdążyć z Pomocą" pod
          patronatem prof. Zbigniewa Religi.
        </h1>
        <p>
          Fundacja otacza opieką dzieci chore i niepełnosprawne z terenu całej Polski. Ich misja to
          nie tylko zapewnienie niezbędnej pomocy medycznej, ale także oferowanie wsparcia
          emocjonalnego i finansowego dla rodzin w trudnych chwilach. Działając od lat, fundacja
          stała się symbolem solidarności społecznej, łącząc tysiące ludzi w wspólnym wysiłku dla
          dobra najmłodszych.
        </p>
        <h3>
          Fundacja otacza opieką również
          <a href="https://dzieciom.pl/podopieczni?protege_id=11787" target="_blank"
            >naszą Anetkę.</a
          >
        </h3>
      </div>
      <img src="/fundacja.jpg" alt="" />
    </div>
  </div>
</template>

<style src="./FoundationView.scss"></style>
