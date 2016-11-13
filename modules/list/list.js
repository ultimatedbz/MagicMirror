Module.register("list",{

	// Default module config.
	defaults: {
	    maximumEntries: 6,
		title: "To-Do List<br>",
		line: "___________<br>",
		listSpot1: "",
		listSpot2: "",
		listSpot3: "",
		listSpot4: "",
	},

	getScripts: function() {
        return [
            'https://code.jquery.com/jquery-2.2.3.min.js',  // this file will be loaded from the jquery servers.
        ]
    },

	// Override dom generator.
	getDom: function() {
        var table = document.createElement("table");

        table.style.lineHeight = '25px';
        if (!this.requesting) {
            $.get("https://mms.kirbi.es/post-it", (function(data) {
                this.posts = data.posts;
                this.requesting = true;
                this.updateDom();
            }).bind(this));
        } else {
            var header = table.createTHead();
            var row = header.insertRow(-1);
            var cell = row.insertCell(-1);
            cell.innerHTML = 'To-Do List' + '<br>';
            if (this.posts.length == 0) {
                row = table.insertRow(-1);
                cell = row.insertCell(-1);
                cell.innerHTML = "Add Something to Do!";
            } else {
                this.posts.slice(0, this.config.maximumEntries).map(function(post) {
                    if (post.list) {
                      row = table.insertRow(-1);
                      cell = row.insertCell(-1);
                      cell.innerHTML = post.title;
                      cell = row.insertCell(-1);
                      cell.innerHTML = post.body;
                    }
                });
            }
        }
        table.style.fontSize = "large";
        return table;
    }
});
