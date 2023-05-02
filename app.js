module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.write(JSON.stringify({ message: 'Hello World!' }));
    res.end();
};