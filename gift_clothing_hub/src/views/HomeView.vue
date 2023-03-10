<template>
  <div>
    <h1>THE GIFT CLOTHING HUB</h1>
  </div>
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.dribbble.com/users/392441/screenshots/2606850/adidas.gif" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://steamuserimages-a.akamaihd.net/ugc/830197066433486426/1D522B470B64D3C0D2C2E7F4B22CD72187B58E89/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/originals/cb/9d/1a/cb9d1a912e857068caf2fe481f858d80.gif" class="d-block" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <h2>OUR PROMOTIONS</h2>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
 img{
  height: 35rem;
  width: 100VW;
  margin: auto;
}

</style>