module.exports = app => {
    app.get('/', (req, res) => console.log(`Api running`));
    app.use(`/api/users`, require(`./api/users`));
    app.use(`/api/auth`, require(`./api/auth`));
    app.use(`/api/applications`, require(`./api/applications`));
};
