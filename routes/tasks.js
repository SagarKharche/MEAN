let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
let db = mongojs('mongodb://sagar:sagar123@ds117311.mlab.com:17311/sagar-databsae', ['sagar-databsae'])

// GET api/tasks
router.get('/tasks', (req, res) => {
  db.mytasks.find((err, tasks) => {
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  });
});

// GET api/tasks/{id}
router.get('/task/:id', (req, res) => {
  db.mytasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
});

// POST api/task
router.post('/task', (req, res, next) => {
  let task = req.body;
  console.log(task);
  if (!task.title) {
    res.status(400);
    res.json({ errorMessage: 'Bad Data' });
  } else {
    db.mytasks.save(task, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
});

// DELETE api/task/{id}
router.delete('/task/:id', (req, res, next) => {
  db.mytasks.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
});

// UPDATE api/task/{id}
router.put('/task/:id', (req, res, next) => {
  let task = req.body;
  let updateTask = {};
  if (task.title) {
    updateTask.title = task.title;
  }
  if (task.isDone) {
    updateTask.isDone = task.isDone;
  }
  if (!updateTask) {
    res.status(400);
    res.json({ errorMessage: 'Bad Data' });
  } else {
    db.mytasks.update({ _id: mongojs.ObjectId(req.params.id) }, updateTask, {}, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    })
  }
});


module.exports = router;
