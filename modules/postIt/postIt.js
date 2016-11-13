Module.register("postIt",{

	// Default module config.
	defaults: {
	    maximumEntries: 6,
		title: "postIt<br>",
		line: "___________<br>",
	},

	getScripts: function() {
        return [
            'https://code.jquery.com/jquery-2.2.3.min.js',  // this file will be loaded from the jquery servers.
        ]
    },
  getStyles: function() {
    return [
      'postIt.css',
    ]
  },

	// Override dom generator.
	getDom: function() {
        var wrapper = document.createElement("div");

        if (!this.requesting) {
            $.get("https://mms.kirbi.es/post-it", (function(data) {
                console.log(data.posts);
                this.posts = data.posts;
                this.requesting = true;
                this.updateDom();
            }).bind(this));
        } else {
            //cell.innerHTML = 'postIt' + '<br>';
            if (this.posts.length == 0) {
                wrapper.innerHTML = "Add Something to Do!";
            } else {
                this.posts.slice(0, this.config.maximumEntries).map(function(post) {
                    if (!post.list) {
                      var postIt = document.createElement("div");
                      postIt.className = 'post-it';
                      wrapper.appendChild(postIt);
                      var postItTitle = document.createElement("div");
                      postItTitle.className = 'post-it-title';
                      postItTitle.innerHTML = post.title;
                      postIt.appendChild(postItTitle);
                      postIt.innerHTML += post.body;
                    }
                });
            }
        }
        return wrapper;
    }
});
