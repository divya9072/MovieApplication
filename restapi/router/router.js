const express = require('express')
const router = express.Router()
const rgTemp = require('../model/Registermodel')
const WatchList = require('../model/watchlist')
const MaxCount = require('../model/max_count')
// const mvTemp=require('../model/Moviemodel')
router.post('/register', async (req, res) => {
    const { Email } = req.body
    const alreadyUser = await rgTemp.findOne({ Email });
    if (alreadyUser) {
        res.json({
            message: "You are already registered..!!"
        })
    } else {
        const registerUser = new rgTemp
            ({
                UserName: req.body.UserName,
                Password: req.body.Password,
                Email: req.body.Email
            })
        registerUser.save()
            .then(
                res.json({
                    status: 'ok',
                    message: 'REGISTERED SUCCESSFULLY'
                })
            ).catch(error => {
                res.json(error)
            })
    }
})
router.post('/login', async (req, res) => {
    const userDetail = await rgTemp.findOne
        ({
            Email: req.body.Email,
            UserName: req.body.UserName,
            Password: req.body.Password
        })
    if (userDetail) {
        return res.json({
            status: 'ok',
            message: 'Welcome Back User'
        })
    }
    else {
        return res.json({
            status: 'error',
            message: 'Username/Password incorrect'
        })
    }
})

router.post('/watchlist', async (req, res) => {
    console.log(req.body.genreId);
    try {

        //watchlist
        //if the case is watchlist is already in my array   
        //    1:=> dont update count as well as send already added  
        //      2:=> update count and add to array
        // if return null that means no data

        const isMovieExist = await WatchList.findOne({ _id: req.body.Email, watchlist: req.body.movieId });
        console.log("From is movie exist")
        console.log(isMovieExist)

        if (isMovieExist || isMovieExist !== null) {
            res.json({ data: isMovieExist, message: "Movie already in watchlist!" });
        } else {
            console.log("From is else")
            const isAdded = await WatchList.findByIdAndUpdate({ _id: req.body.Email }, {
                $addToSet: {
                    watchlist: req.body.movieId,
                }
            }, { upsert: true })
   
            if (isAdded || isAdded !== null) {
                const movie = await MaxCount.findOne({ _id: req.body.movieId });
                console.log("movie" + movie)
                if (movie || movie !== null) {
            
                    var temp = await MaxCount.findOneAndUpdate({
                        _id: movie._id
                    }, {
                        count: movie.count + 1
                    });
                    //    res.json({movie:temp,message:'Count Updated !'})
                    res.json({ data: isMovieExist, addedData: temp, message: "Movie added to watchlist!" })
                } else {
                    const AddMovieToWatchList = new MaxCount({
                        _id: req.body.movieId,
                        MovieName: req.body.MovieName,
                        genre: req.body.genreId,
                        count: 1
                    });
                    console.log(AddMovieToWatchList)
                    AddMovieToWatchList.save().then(
                        (value) => {
                            res.json({ data: isMovieExist, addedData: value, message: "Movie added to watchlist!" })
                        }
                    ).catch(err => {
                        console.log("tests" + err.toString())
                        res.json({ message: 'Error' + err.toString() })
                    })

                }


            } else {
                res.json({ data: isAdded, message: "Something went wrong" })
            }

        }


    } catch (error) {
        res.json({ error: error })
    }
})
router.get('/maxWatchList', async (req, res) => {
    try {
        const movie = await MaxCount.find().sort({ count: -1 }).limit(5)
        res.json({ movies: movie })
    } catch (error) {
        res.json(error)

    }
})


module.exports = router


