const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');

const captainSchema= new Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            trim: true,
            minLength: [3, 'First name must be at least 4 characters long'],
        },
        lastname:{
            type: String,
            required: true,
            trim: true,
            minLength: [3, 'Last name must be at least 4 characters long'],
        },
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
        select: false,
    },
    socketId:{
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },

    vehicle:{
        color:{
            type: String,
            required: true,
        },
        plate:{
            type: String,
            required: true,
        },
        capacity:{
            type: Number,
            required: true,
        },
        vehicleType: {  
            type: String,
            enum: ['car', 'motorcycle'],
            required: true,
        },
        
    },
    location: {
        ltd: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
});

captainSchema.index({ location: '2dsphere' });

captainSchema.methods.generateAuthToken= async function(){
    const captain= this;
    const token= jwt.sign({_id: captain._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
};

captainSchema.methods.comparePassword= async function(password){
    const captain= this;
    return await bcrypt.compare(password, captain.password);
};

captainSchema.statics.hashPassword= async function(password){
    return await bcrypt.hash(password, 10);
};


const captainModel= mongoose.model('captain', captainSchema);
module.exports= captainModel;