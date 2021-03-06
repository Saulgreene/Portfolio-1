'use strict';

var allProjects = [];

var allBlogs = [];

$('.tab-content').hide();
$('#about-me').show();

function Project (projectsData){
  this.title = projectsData.title;
  this.image = projectsData.image;
  this.projectUrl = projectsData.projectUrl;
}

Project.prototype.toHtml = function(){
  var source = $('#articles-template').html();

  var templateRender = Handlebars.compile(source);

  return templateRender(this);
}

projectsInfo.forEach(function(projectObject) {
  allProjects.push(new Project(projectObject));
});

allProjects.forEach(function(a){
  $('#projects-container').append(a.toHtml());
});


//blog post constructor
function BlogPosts (blogData){
  this.title = blogData.title;
  this.author = blogData.author;
  this.body = blogData.body;
}

BlogPosts.prototype.toHtml = function(){
  var source = $('#blog-template').html();

  var templateRender = Handlebars.compile(source);

  return templateRender(this);
}

blogPosts.forEach(function(blogObject) {
  allBlogs.push(new BlogPosts(blogObject));
});

allBlogs.forEach(function(a){
  $('#blog-container').append(a.toHtml());
})

blogPosts.handelBlogCreate = function() {
  var newBlog;

  $('#blogSubmit').click(function(){
    newBlog = new BlogPosts ({
      title: $('#blog-title').val(),
      author: $('#blog-author').val(),
      body: $('#blog-body').val()
    });
    (blogPosts).push(newBlog);
  })
};

blogPosts.handelBlogCreate();
