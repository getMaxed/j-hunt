module.exports = str =>
    require('slugify')(str, {
        remove: /[*+~.()'"!:$@#]/g,
        lower: true
    });
