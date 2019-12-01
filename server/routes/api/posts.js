const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
const db = process.env.DB;
const db_name = process.env.DB_NAME;

// Get Posts
router.get('/', async (req, res) => {
	const posts = await loadPostsCollection();
	res.send(await posts.find({}).toArray());
});

// Add Posts
router.post('/', async (req, res) => {
	const posts = await loadPostsCollection();
	await posts.insertOne({
		text: req.body.text,
		createdAt: new Date()
	});
	res.status(201).send();
});

// Delete Posts
router.delete('/:id', async (req, res) => {
	const posts = await loadPostsCollection();
	await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
	res.status(200).send();
});

async function loadPostsCollection() {
	const client = await mongodb.MongoClient.connect(`${db}`, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	});

	return client.db(`${db_name}`).collection('posts');
}

module.exports = router;
