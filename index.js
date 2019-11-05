const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Harry has cast the portilus currerus spell and turned on the port, listening on: ${PORT}`);
});