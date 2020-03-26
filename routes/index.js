//Middleware for auth-token
const jwt = require('jsonwebtoken')
function protectRoute(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) {
        return res.status(401).send('Error. Token is null or not exists')
    }
    jwt.verify(token, process.env.APP_KEY, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).send(err, 'Error. User not found')
        } 
        req.user = user
        next();
    })
}

//Require model controllers
const userController = require ('../controllers').user;

module.exports = (app) => {
    //Free routes
    app.get('/api_free', (req, res) => {
        res.status(200).send({
            message: 'Welcome to te API FREE routes'
        })
    })
    //Protected routes. Each front end request, should send authorization header with the user logged token
    app.use('/api', protectRoute); //All routes starting with /api, are protected.
    app.get('/api', (req, res) => {
        res.status(200).send({
            message: 'Welcome to te API'
        })
    })
    app.get('/api/user', userController.create);
}