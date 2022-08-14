const { check , validationResult } = require('express-validator')
const { validateResults } = require('../utils/handleValidator')
const validatorCreateItem = [
    check("name")
    .exists()
    .notEmpty(),
    check("album")
    .exists()
    .notEmpty(),
    check("cover")
    .exists()
    .notEmpty(),
    check("artist")
    .exists()
    .notEmpty(),
    check("artist.name")
    .exists()
    .notEmpty(),
    check("artist.nickname")
    .exists()
    .notEmpty(),
    check("artist.nationality")
    .exists()
    .notEmpty(),
    check("duration")
    .exists()
    .notEmpty(),
    check("duration.start")
    .exists()
    .notEmpty(),
    check("duration.end")
    .exists()
    .notEmpty(),
    check("mediaId")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
          } catch (err) {
            res.status(403);
            res.send({ errors: err.array()});
          }
    }
];

module.exports = {
    validatorCreateItem
}
