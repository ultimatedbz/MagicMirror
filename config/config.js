/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'list',
			position: 'bottom_left'
		},
    /*
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
    */
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'postIt',
			position: 'top_left'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Berkeley',
				locationID: '5327684',  //ID from http://www.openweathermap.org
				appid: 'fb48fecfe81fedbf19d33b77871698c9'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'Berkeley',
				locationID: '5327684',  //ID from http://www.openweathermap.org
			appid: 'fb48fecfe81fedbf19d33b77871698c9'
			}
		},
    {
        module: 'imageViewer',
        position: 'bottom_left',

    },
    {
        module: 'videoViewer',
        position: 'bottom_right',

    },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
