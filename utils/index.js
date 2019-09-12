exports.slugify = str =>
    require('slugify')(str, {
        remove: /[*+~.()'"!:$@#,]/g,
        lower: true
    });

exports.isValidURL = str => {
    var res = str.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
};
exports.formatDate = d => {
    const regex = /[\d]{2}\/[\d]{2}/;
    if (regex.test(d)) {
        const [mm, dd] = d.split('/');
        const date = `${mm}.${dd}.2019`;
        return new Date(date).getTime();
    }
};

exports.addZero = n => (n < 10 ? 0 + n.toString() : n);
exports.maybe = (prob = 2) => (Math.floor(Math.random() * prob) ? true : false);
exports.randNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
