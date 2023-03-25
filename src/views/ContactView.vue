<template>
    <div class="container1">
        <div class="row">
            <div id="form" class="container justify-content-center">
                <form class="form container mt-3" action="https://formspree.io/f/mrgdkjgy" method="POST">
                    <h1>Contact us</h1>
                    <div class="form-floating mb-4">
                        <input type="text" class="form-control" name="name" placeholder="Enter your name" id="floatingInput"
                            required>
                        <label for="floatingInput">Enter your name</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="text" class="form-control" name="surname" placeholder="Enter your surname"
                            id="floatingInput" required>
                        <label for="floatingInput">Enter your surname</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="email" class="form-control" placeholder="Enter your email" id="floatingInput" required>
                        <label for="floatingInput">Enter your email</label>
                    </div>
                    <div class="form-floating mb-4">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                            required></textarea>
                        <label for="floatingTextarea">Leave us a message</label>
                    </div>
                    <div class="mb-4">
                        <button class="btn btn-outline-info">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactView"
}
</script>

<style scoped>
.container1{
    width: 36rem;
    background-color:  #d5d5eb;
    margin: auto;
    margin-bottom: 9rem;
    /* border-radius: 2rem; */
    margin-top: 5rem;
    color: grey;
}

h1{
    color: grey;
}

#floatingTextarea{
    min-height: 8rem;
}

@media screen and (max-width: 600px) {
    .container1{
    width: 30rem;
    background-color:  #d5d5eb;
    margin: auto;
    margin-bottom: 9rem;
    /* border-radius: 2rem; */
    margin-top: 5rem;
    color: grey;
}
    
}

@media screen and (max-width: 510px) {
    .container1{
    width: 26rem;
    background-color:  #d5d5eb;
    margin: auto;
    margin-bottom: 9rem;
    /* border-radius: 2rem; */
    margin-top: 5rem;
    color: grey;
}
    
}

@media screen and (max-width: 440px) {
    .container1{
    width: 22rem;
    background-color:  #d5d5eb;
    margin: auto;
    margin-bottom: 9rem;
    /* border-radius: 2rem; */
    margin-top: 5rem;
    color: grey;
}
    
}

@media screen and (max-width: 380px) {
    .container1{
    width: 17rem;
    background-color:  #d5d5eb;
    margin: auto;
    margin-bottom: 9rem;
    /* border-radius: 2rem; */
    margin-top: 5rem;
    color: grey;
}
    
}
</style>