<script>
import AnimatedMacaroni from '../components/AnimatedMacaroni.vue'

export default {
  components: {
    AnimatedMacaroni
  }
}
</script>

<template>
  <div id="treatmentView" class="view">
    <AnimatedMacaroni />
    <img src="/treatmentView.jpg" alt="" />
    <div class="content">
      <div class="header">
        <h1>Leczenie</h1>
        <p class="first">
          <span>
            Aneta jest systematycznie usprawniana w Ośrodku Wczesnej Interwencji w Żorach, gdzie
            znajduje się pod opieką rehabilitanta, logopedy, psychologa, pedagoga i neurologa. Córka
            znajduje się również pod opieką Regionalnej Fundacji Pomocy Niewidomym w Chorzowie z
            filią w Czerwionce-Leszczynach.
          </span>
          <span>
            W niej otrzymuje pomoc tyflopedagoga, instruktora orientacji przestrzennej,
            rehabilitanta, psychologa, okulisty, neurologa oraz ortopedy. Poza tym Anetka jest
            stałym pacjentem poradni neurochirurgicznej, neurologicznej, audiologicznej oraz
            nefrologicznej. Jak również pacjentem ośrodka zdrowia w poradni dziecięcej w Pawłowicach
            Śl.
          </span>
        </p>
        <h3>
          Wszyscy Ci ludzie, specjaliści pracują nad tym, żeby życie Anetki miało lepszą jakość.
        </h3>
        <p class="second">
          Dalsze leczenie i rehabilitacja ma na celu usprawnianie i poprawę funkcjonowania naszego
          dziecka w społeczeństwie, jednakże wymaga to dużych nakładów finansowych, którym my
          rodzice nie jesteśmy w stanie sprostać. Środki zgromadzone chcemy przeznaczyć na dalszą
          systematyczną rehabilitację, turnusy rehabilitacyjne oraz sprzęt medyczny i
          rehabilitacyjny.
        </p>
      </div>
    </div>
  </div>
</template>

<style src="./TreatmentView.scss"></style>
