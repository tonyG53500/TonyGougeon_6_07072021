const passSchema = require("../models/Password");

module.exports = (req, res, next) => {
    if (!passSchema.validate(req.body.password)) {
        return res.status(400).json({
            error: "Mot de passe pas assez fort ! Veuillez utiliser un mot de passe avec une majuscule, au moins deux chiffres, au minimum 8 caractères et sans espaces !",
        });
    } else {
        next();
    }
};
