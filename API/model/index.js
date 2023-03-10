// Database configuration
const dataBs = require('../config');
// bcrypt module
const {hash, compare, hashSync } = require('bcrypt');
// Middleware for creating a token
const {newToken} = require('../middleware/AuthenticatedUser');

// User 
class User {
    login(req, res) {
        const {emailAdd, userPass} = req.body;
        const qur = 
        `
        SELECT firstName, lastName, gender, emailAdd, userPass, userRole, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
        dataBs.query(qur, async (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({err: 
                    "Wrong email address"});
            }else {
                await compare(userPass, 
                    data[0].userPass, 
                    (comError, compareOutput)=> {
                        if(comError) throw comError;
                        // Create a token
                        const jwToken = 
                        newToken(
                            {
                                emailAdd, userPass  
                            }
                        );
                        // Saving
                        res.cookie('LegitUser',
                        jwToken, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(compareOutput) {
                            res.status(200).json({
                                message: 'Successfully logged in',
                                jwToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: 'You need to register first or enter valid password and email. '
                            })
                        }
                    })
            }
        })     
    }
    getUsers(req, res) {
        const qur = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate
        FROM Users;
        `;
        //dataBs
        dataBs.query(qur, (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }
    getUser(req, res) {
        const qur = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate
        FROM Users
        WHERE userID = ?;
        `;
        //dataBs
        dataBs.query(qur,[req.params.id], 
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })

    }
    async newUser(req, res) {
        //Payload req.body to fetch data from user Payload = is an information coming from the user
        // Hashing user password
        req.body.userPass = await 
        hash(req.body.userPass, 15);
        // This information will be used for authentication.
        let user = {
            emailAdd: req.body.emailAdd,
            userPass: req.body.userPass
        }
        // sql query
        const qur =
        `INSERT INTO Users
        SET ?;`;
        dataBs.query(qur, [req.body], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else {
                // Create a token
                const jwToken = newToken(user);
                // This token will be saved in the cookie. 
                // The duration is in milliseconds.
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({message: "A new user record was saved."})
            }
        })    
    }
    editUser(req, res) {
        let data = req.body;
        if(data.userPass !== null || 
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
        const qur = 
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        //dataBs
        dataBs.query(qur,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {message: 
                "A user was updated"} );
        })    
    }
    removeUser(req, res) {
        const qur = 
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        //dataBs
        dataBs.query(qur,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {message: 
                "A user record was removed from the database"} );
        })    
    }
}

// Product
class Product {
    getProducts(req, res) {
        const qur = `SELECT prodID, prodName, prodDescription, 
        category, price, prodQuantity, imgURL, color
        FROM Products;`;
        dataBs.query(qur, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
   getProduct(req, res) {
        const qur = `SELECT prodID, prodName, prodDescription, 
        category, price, prodQuantity, imgURL, color
        FROM Products
        WHERE prodID = ?;`;
        dataBs.query(qur, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    newProduct(req, res) {
        const qur = 
        `
        INSERT INTO Products
        SET ?;
        `;
        dataBs.query(qur,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new record."});
                }else {
                    res.status(200).json({message: "Product saved"});
                }
            }
        );    

    }
    
    editProduct(req, res) {
        const qur = 
        `
        UPDATE Products
        SET ?
        WHERE prodID = ?
        `;
        dataBs.query(qur,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a record."});
                }else {
                    res.status(200).json({message: "Product updated"});
                }
            }
        );    

    }
    removeProduct(req, res) {
        const qur = 
        `
        DELETE FROM Products
        WHERE prodID = ?; `
        dataBs.query(qur,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The record was not found."});
            res.status(200).json({message: "A product was deleted."});
        })
    }

}

// Cart
class Cart {
    getCartItems(req, res) {
        const qur = `SELECT imgURL, prodName, prodDescription, price, color
        FROM Carts 
        INNER JOIN Products 
        ON Carts.prodID = Products.prodID
        WHERE Carts.userID=${req.params.id};`;

        dataBs.query(qur,(err, data) =>{
            if(err){
                console.log(err);
                res.status(400).json({err: "The Cart is empty"});
            } 
            else res.status(200).json({results: data})
        })
    }

    addToCart(req, res) {
        const qur = 
        `
        INSERT INTO Carts
        SET ?;
        `;
        dataBs.query(qur,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Could not add to the cart"});
                }else {
                    res.status(200).json({message: "Added to the cart"});
                }
            }
        );   
    }

    removeCart(req, res) {
        const qur = 
        `
        DELETE FROM Carts
        WHERE cID = ?; `
        dataBs.query(qur,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The item was not found."});
            res.status(200).json({message: "A product was deleted."});
        })
    }

    editCart(req, res) {
        const qur = 
        `
        UPDATE Carts
        SET ?
        WHERE cID = ?
        `;
        dataBs.query(qur,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a record."});
                }else {
                    res.status(200).json({message: "Product updated"});
                }
            }
        );    

    }

}

// Export User and Product class
module.exports = {
    User, 
    Product,
    Cart
}