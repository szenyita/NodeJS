const Blog = require('../models/blog');

const get_blogs = (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then(result => res.render('blogs/index', {title: 'Blogs', blogs: result}))
        .catch(err => console.log(err));
};

const get_blogs_create = (req, res) => {
    res.render('blogs/create', {title: 'Create'});
}

const post_blog_create = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then(response => res.redirect('/blogs'))
        .catch(err => console.log(err));
}

const get_blog = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => res.render('blogs/details', {blog: result}))
        .catch(err => res.status(404).render('404', {title: '404'}));
}

const delete_blog = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(response => res.json({redirect: '/blogs'}))
        .catch(err => console.log(err));
}

module.exports = {
    get_blogs,
    get_blogs_create,
    post_blog_create,
    get_blog,
    delete_blog 
}