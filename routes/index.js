const express = require('express');
const router  = express.Router();
const Search = require('../models/Search');

/* GET home page */
router.get('/', (req, res, next) => {
  Search.find()
  .then(queries => {
    res.status(200).json({
			// msg: 'Articles retrieved successfully',
			queries
		});
  })
});

router.post('/', (req, res) => {
	Search.create(req.body)
		.then(search => {
			res.json({
				success: true,
				query: search
			});
		})
		.catch(err => {
			console.log('Photo Uploading Error =====>', err);
			res.status(500).json({ err, msg: 'Article cannot be created' });
		});
});

module.exports = router;
