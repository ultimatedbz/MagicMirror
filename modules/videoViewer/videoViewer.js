/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("videoViewer",{

	// Default module config.
	defaults: {
		text: "Hello World!",
    videosrc: "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4",
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
	//	wrapper.innerHTML = this.config.text;
    var elem = document.createElement("video");
    elem.src = this.config.videosrc;
    elem.height = 300;
    elem.width = 400;
    elem.loop = true;
    wrapper.appendChild(elem);
    elem.play();

		return wrapper;
	}
});
