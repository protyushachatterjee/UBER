const dotenv= require('dotenv');
dotenv.config();
const express= require('express');
const app=express();
const cookieParser= require('cookie-parser');
const cors= require('cors');
const connect= require('./db/db');
const mapsRoutes= require('./routes/maps.routes');
const rideRoutes= require('./routes/rides.routes');

connect();
const userRoutes= require('./routes/user.routes');
const captainRoutes= require('./routes/captain.routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());



app.use(cors());

app.get("/", (req, res)=>{
    res.send("Hello");
});
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

module.exports=app;