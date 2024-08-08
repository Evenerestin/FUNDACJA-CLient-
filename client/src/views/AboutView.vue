<script>
import AnimatedBlobs from '../components/AnimatedBlobs.vue'

export default {
  components: {
    AnimatedBlobs
  }
}
</script>

<template>
  <div id="aboutView" class="view">
    <AnimatedBlobs />
    <div class="content">
      <img src="/aboutView.jpg" alt="" />
      <div class="header">
        <h1>Więcej o naszej małej Anetce</h1>
        <h3>
          Aneta Bieryt jest małą mieszkanką Pawłowic w województwie śląskim. Urodziła się 23 czerwca
          2005 roku w Klinice Neonatologii CSK z wodogłowiem wrodzonym z bardzo dużym obwodem głowy.
        </h3>
        <p>
          Pierwsze dwa miesiące życia spędziła w Górnośląskim Centrum Zdrowia Dziecka i Matki im.
          Jana Pawła II w Katowicach, do którego została przetransportowana w drugiej dobie życia.
          Przebywała na oddziałach: intensywnej terapii, neurochirurgii i patologii dziecięcej.
        </p>
        <p>
          Dziecko ma założoną zastawkę, która odprowadza nadmiar płynu mózgowo-rdzeniowego do komory
          otrzewnowej. Anetka jest dzieckiem leżącym, całkowicie zależnym od drugiej osoby. Nie jest
          w stanie niczego zrobić samodzielnie. Utrzymująca się dysproporcja między głową a ciałem
          nadal nie pozwala na udźwignięcie głowy i na jej kontrolę. Dochodzi do tego padaczka z
          silnymi napadami padaczkowymi z objawami sinienia. Ponadto obniżone napięcie mięśniowe i
          ogólna wiotkość dziecka spowodowały skoliozę kręgosłupa. Na powyższe problemy córki
          nakładają się problemy ze wzrokiem i słuchem - Anetka jest dzieckiem niedowidzącym i
          niedosłyszącym. Komunikacja z córką jest ograniczona, ponieważ nie mówi. W roku 2010 u
          córki stwierdzono również hipoplazję lewej nerki.
        </p>
      </div>
    </div>
  </div>
</template>

<style src="./AboutView.scss"></style>
