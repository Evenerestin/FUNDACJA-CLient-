<script>
import PercentageIcon from '../components/icons/PercentageIcon.vue'

export default {
  components: {
    PercentageIcon
  }
}
</script>

<template>
  <div id="homeView">
    <header class="gridCenter">
      <div class="heading flexColumn">
        <div class="title flex">
          <h1>Twój</h1>
          <PercentageIcon />
          <h1>ma wielką moc!</h1>
        </div>
        <RouterLink to="/pomoc">
          <button><span>&rarr;</span>Dowiedz się więcej</button>
        </RouterLink>
      </div>
    </header>
  </div>
</template>

<style src="./HomeView.scss"></style>
