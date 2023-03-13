<template>
    <div class="container">
        <form action="">
            <h3>SIGN IN</h3>
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required>
            </div>
            <div class="mb-3">
                <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Password" required>
            </div>
            <button type="submit" class="btn btn-secondary">Sign in</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "LoginVue"
}
</script>

<style scoped>
.container{
    width: 700px;
    margin-top: 8rem;
    background-color: whitesmoke;
}
form{
    width: 500px;
    margin: auto;
}

input{
    margin-bottom: 2rem;
}
h3{
    margin-bottom: 1rem;
    margin-top: 2rem;
}
button{
    margin-bottom: 2rem ;
}

@media screen and (max-width: 580px) {
    .container{
        width: 560px;
    }

    form{
        width: 480px;
    }
}

@media screen and (max-width: 560px) {
    .container{
        width: 520px;
    }
}
@media screen and (max-width: 530px) {
    .container{
        width: 500px;
    }
    form{
        width: 440px;
    }
}

@media screen and (max-width: 500px) {
    .container{
        width: 450px;
    }
    form{
        width: 400px;
    }
}

@media screen and (max-width: 470px) {
    .container{
        width: 400px;
    }
    form{
        width: 380px;
    }
}

@media screen and (max-width: 400px) {
    .container{
        width: 360px;
    }
    form{
        width: 320px;
    }
}

@media screen and (max-width: 370px) {
    .container{
        width: 320px;
    }
    form{
        width: 280px;
    }
}

@media screen and (max-width: 330px) {
    .container{
        width: 280px;
    }
    form{
        width: 240px;
    }
}

</style>