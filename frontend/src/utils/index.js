exports.slugify = str =>
    require('slugify')(str, {
        remove: /[*+~.()'"!:$@#]/g,
        lower: true
    });
