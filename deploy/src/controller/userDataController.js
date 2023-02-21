const User = require('../model/user')

// Home page
exports.profile =  (req, res) => {
    User.find({_id: req.userId}, {firstName: 1,lastName: 1, email: 1, phone: 1, _id: 0, photo: 1})
      .exec((err, data) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error!",
          });
        } else {
          res.status(200).json({
            data: data[0],
            message: "Success",
          });
        }
      });
      
  };

