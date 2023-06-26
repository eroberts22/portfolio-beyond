<template>
  <div class="footer">&copy; 2023 by Elizabeth Roberts</div>
</template>

<script>
export default {
  name: 'Footer-Component',
}
</script>

<style scoped>
.footer {
  margin: auto;
  text-align:center;
  padding: 2%;
  opacity: 0.5;
  font-size: 13px;
}

@media (max-width: 875px) {
  .footer {
    margin-bottom: 60px;
  }
}
</style>