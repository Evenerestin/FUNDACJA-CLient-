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
    <img src="/helpView.jpg" alt="" class="test">
    <div class="content">
      <div>
        <h1>Czas bez rehabilitacji jest czasem nie do odpracowania.</h1>
        <h3>
          Kosztowna i długotrwała terapia to jedyna nadzieja na lepsze życie dla Anetki, dlatego
          zwracamy się z wielką prośbą o wsparcie finansowe.
        </h3>
        <div class="methods flex">
          <div class="column">
            <div>
              <h3>Darowizny</h3>
            </div>
            <!-- <h3 class="title">Darowizny</h3> -->
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
      <!-- <img src="/helpView.jpg" alt="" /> -->
    </div>
  </div>
  <!-- <div id="helpView" class="view">
    <div class="wave" id="firstWave"></div>
    <div class="wave" id="secondWave"></div>
    <div class="wave" id="thirdWave"></div>
    <div class="wave" id="fourthWave"></div>
    <div class="content flex">
      <div class="header flexColumn">
        <div>
          <h1>Czas bez rehabilitacji jest czasem nie do odpracowania.</h1>
          <p>
            Kosztowna i długotrwała terapia to jedyna nadzieja na lepsze życie dla Anetki, dlatego
            zwracamy się z wielką prośbą o wsparcie finansowe.
          </p>
        </div>
        <div class="flex">
          <div class="methods">
            <h3 class="title">Darowizny</h3>
            <p>Fundacja Dzieciom „Zdążyć z Pomocą”</p>
            <p>ul. Łomiańska 5 01-685 Warszawa</p>
            <p>Alior Bank 42 2490 0005 0000 4600 7549 3994</p>
            <p>Z dopiskiem: 11787 Bieryt Aneta - darowizna na pomoc i ochronę zdrowia</p>
          </div>
          <div class="methods">
            <div class="title flex">
              <PercentageIcon />
              <h3>podatku</h3>
            </div>
            <p>KRS: 0000037904</p>
            <p>W rubryce "Informacje uzupełniające": 11787 Bieryt Aneta</p>
          </div>
        </div>
      </div>
      <img src="/helpView.jpg" alt="" />
    </div>
  </div> -->
</template>

<style src="./HelpView.scss"></style>
