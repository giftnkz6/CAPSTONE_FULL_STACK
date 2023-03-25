<template>
  <div class="about">
    <img class="img" src="https://i.postimg.cc/nzcxMrxg/Screenshot-2023-03-13-095116.png" alt="">
    <div class="wrap">
      <h2 class="text">CLOTHING HUB</h2>
      <p class="text">AT THE GIFT CLOTHING HUB we pride ourselves with delivering the best quality products at the best price. The Gift Clothing Hub was founded by Gift Mahlangu in 2020 with the mission to provide an online store which delivers in time at your door step. We sell sneakers all brands, jackets and caps to all genders and all age groups. In 2022 We won the best clothing store award at the African fashion awards 2022, which is our biggest achievement.
      </p>
    </div>
  </div>
</template>

<style scoped>

  .img{
    width: 28rem;
    height: 28rem;
    margin-left: 2rem;
    margin-top: 6rem;
    box-shadow: .5rem .5rem .5rem grey;
  }
  .about{
    display: flex;
  }

  h2{
    font-size: 3rem;
    text-shadow: .2rem .2rem .2rem skyblue;
  }

  .text{
    width: 30rem;
    margin-left: 2rem;
  }

  p{
    color: grey;
  }
  .wrap{
    width: 40rem;
    margin-top: 12rem;
    margin: auto;
    margin-top: 12rem;
  }

  @media screen and (max-width: 1008px) {

    .text{
      width: 23rem;
    }
    
  }

  @media screen and (max-width: 892px) {

    h2{
      font-size: 2rem;
    }

    .text{
      width: 17rem;
    }
    
  }

  @media screen and (max-width: 797px) {
    .about{
      display: flex;
      flex-direction: column;
    }

    .text{
      margin: auto;
      width: 30rem;
    } 

    .wrap{
      margin-bottom: 3rem;
      margin-right: 0rem;
      margin-left: 0rem;
      margin-top: 2rem;
    }

    .img{
      margin: auto;
      margin-top: 1rem;
      margin-bottom: 3rem;
  }

  h2{
      font-size: 3rem;
    }
    
  }

  @media screen and (max-width: 651px) {
    .about{
      display: flex;
      flex-direction: column;
    }

    /* h2{
      font-size: 2rem;
    } */

    .text{
      margin: auto;
      width: 30rem;
    } 

    .wrap{
      margin: auto;
      width: 30rem;
      margin-bottom: 3rem;
    }

    .img{
    margin: auto;
    margin-bottom: 3rem;
  }

  h2{
      font-size: 3rem;
    }
    
  }

  @media screen and (max-width: 492px) {
    .about{
      display: flex;
      flex-direction: column;
    }

    /* h2{
      font-size: 2rem;
    } */

    .text{
      margin: auto;
      width: 25rem;
    } 

    .wrap{
      margin-bottom: 12rem;
      width: 25rem;
      margin-bottom: 3rem;
    }

    .img{
    margin: auto;
    width: 25rem;
    margin-bottom: 3rem;
  }

  h2{
      font-size: 2rem;
    }
    
  }

  @media screen and (max-width: 492px) {
    .about{
      display: flex;
      flex-direction: column;
    }

    .text{
      margin: auto;
      width: 22rem;
    } 

    .wrap{
      margin-bottom: 3rem;
      width: 22rem;
    }

    .img{
    margin: auto;
    width: 22rem;
    margin-bottom: 3rem;
  }

  h2{
      font-size: 2rem;
    }
    
  }

  @media screen and (max-width: 367px) {
    .about{
      display: flex;
      flex-direction: column;
    }
    .text{
      margin: auto;
      width: 20rem;
    } 

    .wrap{
      margin-bottom: 12rem;
      width: 20rem;
    }

    .img{
    margin: auto;
    width: 20rem;
    margin-bottom: 3rem;
  }

  h2{
      font-size: 2rem;
    }
    
  }

  @media screen and (max-width: 337px) {
    .about{
      display: flex;
      flex-direction: column;
    }
    .text{
      margin: auto;
      width: 18rem;
    } 

    .wrap{
      margin-bottom: 12rem;
      width: 18rem;
    }

    .img{
    margin: auto;
    width: 18rem;
    margin-bottom: 3rem;
  }

  h2{
      font-size: 2rem;
    }
    
  }

  @media screen and (max-width: 307px) {
    .about{
      display: flex;
      flex-direction: column;
    }

    /* h2{
      font-size: 2rem;
    } */

    .text{
      margin: auto;
      width: 17rem;
    } 

    .wrap{
      margin-bottom: 12rem;
      width: 17rem;
    }

    .img{
    margin: auto;
    width: 17rem;
    margin-bottom: 3rem;
  }

  h2{
      font-size: 2rem;
    }
    
  }

  
</style>