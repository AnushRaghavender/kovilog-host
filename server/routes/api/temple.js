const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Temple = require('../../models/Temple');
const User = require('../../models/User');

//Fetch all temples
router.get('/', asyncHandler (async (req, res) => {
  const temples = await Temple.find({});
  res.json(temples);
}));

//Fetch single temple
router.get('/:id', asyncHandler (async (req, res) => {
  const temple = await Temple.findById(req.params.id);
  if (temple) {
    res.json(temple);
  } else {
    res.status(404).json({message: 'Temple not found.'})
  }
}));

//Add Temple to liked list
router.put('/like/:id', auth, async (req, res) => {
    const temple = await Temple.findById(req.params.id);
    const user = await User.findById(req.user.id);
    if(temple.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
      return res.json({msg: 'Temple already liked.'})
    }
    temple.likes.unshift({user: req.user.id, name: user.name});
    user.likes.unshift({temple: temple._id, name: temple.temple_name, image: temple.image});
    await temple.save();
    await user.save();
    res.json({msg: 'Temple liked successfully.'});
});

//Remove Temple from liked list
router.put('/unlike/:id', auth, async (req, res) => {
    const temple = await Temple.findById(req.params.id);
    const user = await User.findById(req.user.id);
    if(temple.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
      return res.json({msg: 'Temple not yet liked.'});
    }
    const removeIndex = temple.likes.map(like => like.user.toString()).indexOf(req.user.id);
    const removeIndex1 = user.likes.map(like => like.temple.toString()).indexOf(req.params.id);
    temple.likes.splice(removeIndex, 1);
    user.likes.splice(removeIndex1, 1);
    await temple.save();
    await user.save();
    res.json({msg: 'Temple unliked successfully.'});
});

//Add Temple to liked list1
router.put('/like1/:id', auth, async (req, res) => {
    const temple = await Temple.findById(req.params.id);
    const user = await User.findById(req.user.id);
    if(temple.likes1.filter(like => like.user.toString() === req.user.id).length > 0) {
      return res.json({msg: 'Temple already liked.'})
    }
    temple.likes1.unshift({user: req.user.id, name: user.name});
    user.likes1.unshift({temple: temple._id, name: temple.temple_name, image: temple.image});
    await temple.save();
    await user.save();
    res.json({msg: 'Temple liked successfully.'});
});

//Remove Temple from liked list1
router.put('/unlike1/:id', auth, async (req, res) => {
    const temple = await Temple.findById(req.params.id);
    const user = await User.findById(req.user.id);
    if(temple.likes1.filter(like => like.user.toString() === req.user.id).length === 0) {
      return res.json({msg: 'Temple not yet liked.'});
    }
    const removeIndex = temple.likes1.map(like => like.user.toString()).indexOf(req.user.id);
    const removeIndex1 = user.likes1.map(like => like.temple.toString()).indexOf(req.params.id);
    temple.likes1.splice(removeIndex, 1);
    user.likes1.splice(removeIndex1, 1);
    await temple.save();
    await user.save();
    res.json({msg: 'Temple unliked successfully.'});
});

//Add Comment
router.post(
  '/comment/:id',
  [
    auth,
    [
      check('text', 'Text is required').not().isEmpty()
    ]
  ],
  async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const temple = await Temple.findById(req.params.id);

      var date = new Date();

      var year = date.getFullYear().toString().substring(2);

      var month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);

      var dt = (date.getDate() < 10 ? '0' : '') + date.getDate();

      var d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var day = d[date.getDay()];

      var hour = ('0'+date.getHours()).slice(-2);
      var minute = ('0'+date.getMinutes()).slice(-2);

      var fulldate = hour + ":" + minute + "," + " " + day + "," + " " + dt + "/" + month + "/" + year ;

      const newComment = {
        text: req.body.text,
        name: user.name,
        user: req.user.id,
        date: fulldate
      };

      temple.comments.unshift(newComment);
      await temple.save();
      res.json(temple.comments);
    }
    catch(err) {
      console.error(err.message);
      res.status(500).send('Server Error.');
    }
  }
)

module.exports = router;
