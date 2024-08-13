// A blog post

var post = {
	id : 1,
	title : "My Crazy Space Adventure",
	author : "Philae",
	created : "2015-06-21",
	body : "You will not believe where I just woke up!! Only on a comet..."
};



/* Further Adventures
 *
 * 1) Display some of the properties.
 *
 * 2) Add a second post.
 *
 */

//answer//
// Display some of the properties//
console.log("Post Title:", post.title);
console.log("Author:", post.author);
console.log("Created:", post.created);

//Add a second post//
var post2 = {
	id: 2,
	title: "My Next Space Adventure",
	author: "Philae",
	created: "2015-07-01",
	body: "I'm back on the comet and ready for more!"
  };
  var posts = [post, post2];
  console.log("Post 1 Title:", posts[0].title);
  console.log("Post 2 Title:", posts[1].title);