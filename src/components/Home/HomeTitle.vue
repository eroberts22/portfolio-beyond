<template>
  <div class="page-title">Welcome to Portfolio Beyond<span>.</span></div>
  <div class="page-sub-title">My name is <router-link :to="{ name: 'About'}">Liz Roberts<span>.</span></router-link></div>
</template>

<script>
export default {
  name: 'HomeTitle',
}
</script>

<style scoped>
.page-title {
    text-align: left;
    font-size: calc(2.0em + 1.0vmin);
    font-weight: 500;
    margin-top: 25px;
    margin-bottom: 10px;
    padding-left: 20%;
    padding-right: 20%;
}

.page-sub-title {
    text-align: left;
    font-size: calc(1.0em + 0.5vmin);
    font-weight: 400;
    padding-left: 20%;
    margin-bottom: 10px;
}

.page-title span,
.page-sub-title span,
.page-sub-title a,
.page-sub-title a:hover span  {
    color: turquoise;
    text-decoration: none;
    transition: color 0.3s ease;
}

.page-sub-title a span,
.page-sub-title a:hover {
    color: gainsboro;
    transition: color 0.3s ease;
}

@media (max-width:992px) {
    .page-title {
       padding-left: 10%;
       padding-right: 10%;
    }
}
</style>