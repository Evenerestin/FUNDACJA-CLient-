<script>
import AnimatedWaves from '../components/AnimatedWaves.vue'
import PercentageIcon from '../components/icons/PercentageIcon.vue'

export default {
  components: {
    PercentageIcon,
    AnimatedWaves
  }
}
</script>

<template>
  <div id="helpView" class="view">
    <div class="waves">
      <AnimatedWaves />
    </div>
    <div class="content">
      <div class="flexColumn">
        <div class="header">
          <img src="/helpView.jpg" alt="Zdjęcie Anetki" />
          <div>
            <h1>Czas bez rehabilitacji jest czasem nie do odpracowania.</h1>
            <h3>
              Kosztowna i długotrwała terapia to jedyna nadzieja na lepsze życie dla Anetki, dlatego
              zwracamy się z wielką prośbą o wsparcie finansowe.
            </h3>
          </div>
        </div>
        <div class="methods flex">
          <div class="column">
            <div>
              <h3>Darowizny</h3>
            </div>
            <p>Fundacja Dzieciom „Zdążyć z Pomocą”</p>
            <p>ul. Łomiańska 5 01-685 Warszawa</p>
            <p>Alior Bank 42 2490 0005 0000 4600 7549 3994</p>
            <p>Z dopiskiem: 11787 Bieryt Aneta - darowizna na pomoc i ochronę zdrowia</p>
          </div>
          <div class="column">
            <div class="flex">
              <PercentageIcon />
              <h3>podatku</h3>
            </div>
            <p>KRS: 0000037904</p>
            <p>W rubryce "Informacje uzupełniające": 11787 Bieryt Aneta</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./HelpView.scss"></style>
