<template>
  <div class="about">
    <img class="img" src="https://i.postimg.cc/nzcxMrxg/Screenshot-2023-03-13-095116.png" alt="">
    <div class="wrap">
      <h2 class="text">CLOTHING HUB</h2>
      <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae, exercitationem tempore dolore deserunt in eligendi nostrum quaerat tenetur, maxime alias aperiam non minus voluptas magni molestias? A, at pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur possimus facilis reprehenderit culpa illo nesciunt consequuntur odio nam, necessitatibus porro?
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
    box-shadow: .2rem .2rem .2rem grey;
  }
  .about{
    display: flex;
  }

  h2{
    font-size: 3rem;
    text-shadow: .2rem .2rem .2rem grey;
  }

  .text{
    width: 30rem;
    margin-left: 2rem;
  }

  p{
    color: black;
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