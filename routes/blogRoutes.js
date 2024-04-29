const express = require('express');
const controller = require('../controllers/blogController');

const router = express.Router();

router.get('/', controller.get_blogs);
router.get('/create', controller.get_blogs_create);
router.post('/create', controller.post_blog_create);
router.get('/:id', controller.get_blog);
router.delete('/:id', controller.delete_blog);

module.exports = router;