function index(req,res) {
    res.json({
        base_url: 'localhost:3000',
        endpoint: [
            {
            method: 'GET',
            path: '/api'
            }
        ]
    });
}

module.exports = {
  index: index
}
