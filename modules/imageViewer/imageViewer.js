/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("imageViewer",{

	// Default module config.
	defaults: {
		text: "Hello World!",
        imgsrc: "http://vh1.mtvnimages.com/uri/mgid:file:http:shared:vh1.com/news/wp-content/uploads/2015/08/thanks-1438616370.gif",
        imgsrc2: "http://66.media.tumblr.com/tumblr_lr2ysgGcMX1qhz1tdo3_r3_250.gif",
        imgsrc3: "http://67.media.tumblr.com/c501c17987afa726df6936464d5da3e7/tumblr_n8i1jcXggZ1sqtzdpo2_r1_500.gif"
	},

	// Override dom generator.
	getDom: function() {
        var elem = document.createElement("img");
        elem.src = this.config.imgsrc3;
        elem.height = 200;
        elem.width = 200;

	    return elem;
	}
});
