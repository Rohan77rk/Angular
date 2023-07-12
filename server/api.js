// Importing important packages
const express = require('express');

// Using express and routes
const app = express();
const eventRoutes = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Employee module which is required and imported
let BatchesModel = require('../server/models/Batches');
let SpecialBatchesModel = require('../server/models/SpecialBatches');
let eventAdmissionModel = require('../server/models/eventAdmission');
let specialAdmissionModel = require('../server/models/specialAdmission');
let UsersModel = require('../server/models/Users');
let AdminModel = require('../server/models/Admin');
// To Get List Of events
eventRoutes.route('/events').get(async function (req, res) {
    try {
      let events = await BatchesModel.find();
      res.json(events);
      console.log(events);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // to get event admissions
eventRoutes.route('/admin/eventadmissionrequest').get(async function (req, res) {
  try {
    let events = await eventAdmissionModel.find();
    res.json(events);
    console.log(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


  // to get special admissions
  eventRoutes.route('/admin/specialadmissionrequest').get(async function (req, res) {
    try {
      let events = await specialAdmissionModel.find();
      res.json(events);
      console.log(events);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // To Get List Of special events
eventRoutes.route('/specialevents').get(async function (req, res) {
    try {
      let specialEvents = await SpecialBatchesModel.find();
      res.json(specialEvents);
      console.log(specialEvents);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // To post eventAdmissions
eventRoutes.route('/events/eventadmission').post(function (req, res) {
  try {
    let eventData = req.body;

    let eventAdmissionData = new eventAdmissionModel(eventData);

    let savedEventInfo = eventAdmissionData.save();

    res.json(savedEventInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

 // To post eventAdmissions
 eventRoutes.route('/specialevents/specialadmission').post(function (req, res) {
  try {
    let specialData = req.body;

    let specialAdmissionData = new specialAdmissionModel(specialData);

    let savedSpecialInfo = specialAdmissionData.save();

    res.json(savedSpecialInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// To post new registrations
eventRoutes.route('/register').post(function (req, res) {
  try {
    let UsersData = req.body;

    let UsersLoginData = new UsersModel(UsersData);

    let savedUsersInfo =UsersLoginData.save();

    res.json(savedUsersInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login route
eventRoutes.route('/login').post(async function (req, res) {
  try {
    const { Email, Password } = req.body;

    // Find the user with the provided email
    const user = await UsersModel.findOne({ Email });

    if (!user) {
      // User not found
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(Password, user.Password);

    if (!isPasswordValid) {
      // Invalid password
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Assuming the login is successful, you can generate a token and send it back to the client
    const token = jwt.sign({ userId: user._id }, 'secretKey');

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//admin login

eventRoutes.route('/admin/adminlogin').post(async function (req, res) {
  try {
    const { Email, Password } = req.body;

    // Find the admin with the provided email
    const admin = await AdminModel.findOne({ Email });

    if (!admin) {
      // Admin not found
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the password
    if (Password === admin.Password) {
      // Assuming the login is successful, you can generate a token and send it back to the client
      const token = jwt.sign({ adminId: admin._id }, 'secretKey');

      res.status(200).json({ token });
    } else {
      // Invalid password
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// to get eventAmission by id


eventRoutes.route('/admin/admineventrequest:_id').get(function (req, res) {
  let _id = req.params._id;
  eventAdmissionModel.findById(_id)
    .then(event => {
      if (!event) {
        res.status(404).json({ error: 'Employee not found' });
      } else {
        res.json(event);
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

// to get event by id


eventRoutes.route('/admin/adminevent/eventedit/:_id').get(function (req, res) {
  let _id = req.params._id;
  BatchesModel.findById(_id)
    .then(event => {
      if (!event) {
        res.status(404).json({ error: 'Employee not found' });
      } else {
        res.json(event);
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal server error' });
    });
});


// to get special by id


eventRoutes.route('/admin/adminspecial/specialedit/:_id').get(function (req, res) {
  let _id = req.params._id;
  SpecialBatchesModel.findById(_id)
    .then(event => {
      if (!event) {
        res.status(404).json({ error: 'Employee not found' });
      } else {
        res.json(event);
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal server error' });
    });
});



// To Delete The eventAdmission
eventRoutes.route('/admin/eventadmissionrequest/delete/:_id').delete(function (req, res) {
  eventAdmissionModel.findByIdAndRemove({ _id: req.params._id }).then (function (err, event) {
   if (err) res.json(err);
   else res.json('Employee Deleted Successfully');
   });
  });

  // To Delete The specialAdmission
eventRoutes.route('/admin/specialadmissionrequest/delete/:_id').delete(function (req, res) {
  specialAdmissionModel .findByIdAndRemove({ _id: req.params._id }).then (function (err, event) {
   if (err) res.json(err);
   else res.json('Employee Deleted Successfully');
   });
  });


  // To Delete The eventAdmission
eventRoutes.route('/admin/eventadmissionrequest/delete/:_id').delete(function (req, res) {
  eventAdmissionModel.findByIdAndRemove({ _id: req.params._id }).then (function (err, event) {
   if (err) res.json(err);
   else res.json('Employee Deleted Successfully');
   });
  });

  // To Delete The special
eventRoutes.route('/admin/adminspecial/deletespecial/:_id').delete(function (req, res) {
  SpecialBatchesModel .findByIdAndRemove({ _id: req.params._id }).then (function (err, event) {
   if (err) res.json(err);
   else res.json('Employee Deleted Successfully');
   });
  });

  // To Delete The event
eventRoutes.route('/admin/adminevent/deleteevent/:_id').delete(function (req, res) {
  BatchesModel .findByIdAndRemove({ _id: req.params._id }).then (function (err, event) {
   if (err) res.json(err);
   else res.json('Employee Deleted Successfully');
   });
  });

// to Launch new Batch
 
 eventRoutes.route('/admin/event/launch').post(function (req, res) {
  try {
    let EventData = req.body;

    let EventInfoData = new BatchesModel(EventData);

    let savedSpecialInfo = EventInfoData.save();

    res.json(savedSpecialInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// to Launch new special Batch
 
eventRoutes.route('/admin/special/launchspecial').post(function (req, res) {
  try {
    let SpecialData = req.body;

    let SpecialInfoData = new SpecialBatchesModel(SpecialData);

    let savedSpecialInfo = SpecialInfoData.save();

    res.json(savedSpecialInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// To Update The event Details
eventRoutes.route('/admin/adminevent/eventedit/updateevent/:_id').put(function (req, res) {
  
  BatchesModel.findById(req.params._id)
    .then(event => {
      if (!event) {
        throw new Error('Unable To Find Employee With This Id');
      } else {
        event.name = req.body.name;
        event.description = req.body.description;
        event.Teacher = req.body.Teacher;
        

        return event.save();
      }
    })
    .then(() => {
      res.json('Employee Updated Successfully');
    })
    .catch(err => {
      res.status(400).send("Unable To Update Employee: " + err.message);
    });
});

// To Update The special Details
eventRoutes.route('/admin/adminspecial/editspecial/updatespecial/:_id').put(function (req, res) {
  
  SpecialBatchesModel.findById(req.params._id)
    .then(special => {
      if (!special) {
        throw new Error('Unable To Find Employee With This Id');
      } else {
        special.name = req.body.name;
        special.description = req.body.description;
        special.Teacher = req.body.Teacher;
        

        return special.save();
      }
    })
    .then(() => {
      res.json('Employee Updated Successfully');
    })
    .catch(err => {
      res.status(400).send("Unable To Update Employee: " + err.message);
    });
});

  module.exports = eventRoutes;