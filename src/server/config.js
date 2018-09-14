module.exports = {
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/ironhack-change-this-name-pls',
    SECRET_JWT_PASSPHRASE: 'TWLom9RDbmGYBtkHHPe4m8pKswyUY',
    CLOUDINARY_NAME: 'dzr2ham2r',
    CLOUDINARY_KEY: '154938791918322',
    CLOUDINARY_SECRET: 'L26vmA2jIyHFItXfYqXZIgSt4NU',
}
