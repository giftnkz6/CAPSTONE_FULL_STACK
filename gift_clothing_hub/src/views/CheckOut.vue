<template>
    <!-- <img src="data:image/png;base64,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" alt=""> -->
    <div class="container">
        <form>
            <div>
                <p>Card Number</p>
                <div class="card-number">
                    <div class="mb-3">
                        <input type="text" class="form-control exampleFormControlInput1" maxlength="4" required>
                    </div>
                    <div class="mb-3">
                        <input type="text" required class="form-control exampleFormControlInput1" id="exampleFormControlInput1"
                            maxlength="4">
                    </div>
                    <div class="mb-3">
                        <input type="text" required class="form-control exampleFormControlInput1" id="exampleFormControlInput1"
                            maxlength="4">
                    </div>
                    <div class="mb-3">
                        <input type="text" required class="form-control exampleFormControlInput1" id="exampleFormControlInput1"
                            maxlength="4">
                    </div>
                </div>
            </div>
            <div>
                <p>Card Holder Name</p>
                <div class="cardholder">
                    <div class="mb-3">
                        <input type="text" required class="form-control">
                    </div>
                </div>
            </div>
            <div>
                <p>Password</p>
                <div class="password">
                    <div class="mb-3">
                        <input type="password" required class="form-control">
                    </div>
                </div>
            </div>
            <div>
                <div class="select">
                    <fieldset>
                        <label for="month">Month</label>
                        <select class="form-select exp" required id="month" aria-label=".form-select-lg example" placeholder="month">
                            <option></option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="1">04</option>
                            <option value="2">05</option>
                            <option value="3">06</option>
                            <option value="1">07</option>
                            <option value="2">08</option>
                            <option value="3">09</option>
                            <option value="1">10</option>
                            <option value="2">11</option>
                            <option value="3">12</option>
                        </select>
                    </fieldset>
                    <div class="year">
                        <fieldset>
                            <label for="year">Year</label>
                            <input id="year" required type="text" class="form-control exp" maxlength="4">
                        </fieldset>
                    </div>

                    <div class="ccv">
                        <fieldset>
                            <label for="ccv">CCV</label>
                            <input id="ccv" required type="text" class="form-control exp" maxlength="3">
                        </fieldset>
                    </div>
                </div>
            </div>
            <input class="btn btn-primary" type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    name: "CheckOut"
}
</script>

<style scoped>
.container {
    width: 30rem;
    background-color: black;
    margin-bottom: 1rem;
}

.btn{
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.card-number {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.select {
    display: grid;
    grid-template-columns: .2fr .2fr .2fr;
    margin-top: 3rem;
}

.exp {
    width: 5rem;
}

.exampleFormControlInput1 {
    width: 4rem;
}
</style>