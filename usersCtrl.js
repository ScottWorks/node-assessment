const usersData = require('./userData.json');

module.exports = {
  getUser: function(req, res) {
    const { age, email, favorites } = req.query;

    var results =
      !age && !email && !favorites
        ? usersData
        : usersData.filter((elem) => {
          if (
            elem.age < +age ||
              elem.email === email ||
              elem.favorites.includes(favorites)
          ) {
            return true;
          }
        });

    res.status(200).send(results);
  },
  getUserById: function(req, res) {
    const { userId } = req.params;

    var results = usersData.filter((elem) => {
      if (elem.id == userId) {
        return true;
      }
    });

    if (results.length > 0) {
      res.status(200).send(results[0]);
    } else {
      res.status(404).json(null);
    }
  },
  getAdmins: function(req, res) {
    var results = usersData.filter((elem) => {
      if (elem.type === 'admin') {
        return true;
      }
    });

    res.status(200).send(results);
  },
  getNonAdmins: function(req, res) {
    var results = usersData.filter((elem) => {
      if (elem.type !== 'admin') {
        return true;
      }
    });

    res.status(200).send(results);
  },
  getUserType: function(req, res) {
    const { userType } = req.params;

    var results = usersData.filter((elem) => {
      if (elem.type === userType) {
        return true;
      }
    });

    res.status(200).send(results);
  },
  updateUser: function(req, res) {
    const { userId } = req.params,
      body = req.body;

    var results = usersData.map((elem) => {
      if (elem.id == userId) {
        return body;
      }

      return elem;
    });

    res.status(200).send(results);
  },
  createUser: function(req, res) {
    const body = req.body;

    body.id = usersData.length + 1;
    var results = usersData;
    results.push(body);
    console.log(results);

    res.status(200).send(results);
  },
  deleteUser: function(req, res) {
    const { userId } = req.params;

    var results = usersData.filter((elem) => {
      if (elem.id > userId) {
        return true;
      }
    });

    res.status(200).send(results);
  }
};
