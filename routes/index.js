module.exports = app => {
    app.get('/', (req, res) => console.log(`Api running`));
    app.use(`/api/auth`, require(`./api/auth`));
    app.use(`/api/login`, require(`./api/login`));
    app.use(`/api/register`, require(`./api/register`));
    app.use(`/api/companies`, require(`./api/companies`));
};
