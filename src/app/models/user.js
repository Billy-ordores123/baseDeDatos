const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


const userChema= new mongoose.Schema({
    local:{
        email:String,
        password: String
    }

});
userChema.methods.generateHash = function(password){ //SIFRA LA CONTRASEÑA
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userChema.methods.validatePassword = function(password){ //valida la contraseña
    return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userChema);
