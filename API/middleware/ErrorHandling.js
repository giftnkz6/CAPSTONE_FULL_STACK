function errorHandling(err, req, res, next) {
    if(err){
        const status = err.status || 500;
        res.status(status).json(
            {
                status: status,
                err: "An error has occurred. Please try again later."
            },
            console.log(err)
        )
    }
    next()
}

module.exports = {errorHandling};