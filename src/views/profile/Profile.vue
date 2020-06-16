<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的商城</div>
    </nav-bar>
    <peofile-top />
    <peofile-center />
    <peofile-but />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import PeofileTop from './childcomps/PeofileTop.vue'
  import PeofileCenter from './childcomps/PeofileCenter'
  import PeofileBut from './childcomps/PeofileBut'
  export default {
    name: "Profile",
    components: {
      NavBar,
      PeofileTop,
      PeofileCenter,
      PeofileBut
    },
  }

</script>
<style scoped>
  .profile {
    background-color: #f6f6f6;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>