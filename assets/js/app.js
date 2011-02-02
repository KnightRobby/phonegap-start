// 
//  --- our app behavior logic ---
//
run(function () {
    // immediately invoked on first run
    var init = (function () {
/*		alert('date');

		alert((new Date()).toLocaleString());

		document.getElementById('time').innerHTML = (new Date()).toLocaleString();*/

    })();
    
    // a little inline controller
	/*
    when('#welcome');
    when('#settings', function() {
		// load settings from store and make sure we persist radio buttons.
		store.get('config', function(saved) {
			if (saved) {
				if (saved.map) {
					x$('input[value=' + saved.map + ']').attr('checked',true);
				}
				if (saved.zoom) {
					x$('input[name=zoom][value="' + saved.zoom + '"]').attr('checked',true);
				}
			}
		});
	});
    when('#map', function () {
        store.get('config', function (saved) {
            // construct a gmap str
            var map  = saved ? saved.map || ui('map') : ui('map')
            ,   zoom = saved ? saved.zoom || ui('zoom') : ui('zoom')
            ,   path = "http://maps.google.com/maps/api/staticmap?center=";
			
            navigator.geolocation.getCurrentPosition(function (position) {
                var location = "" + position.coords.latitude + "," + position.coords.longitude;
                path += location + "&zoom=" + zoom;
                path += "&size=250x250&maptype=" + map + "&markers=color:red|label:P|";
                path += location + "&sensor=false";

                x$('img#static_map').attr('src', path);
            });
        });
    });*/

	when('#wiki', function () {
		self.location.href = 'http://en.wikipedia.org/wiki/Special:Random';
	});
	when('#monitor', function () {
		self.location.href = 'https://monitor.distimo.com/m/';
	});
	when('#phonegap', function () {
		self.location.href = 'http://aegir.fokdat.nl/Code/Phonegap/phonegap-start';
	});
	when('#puzzle', function () {
		self.location.href = 'http://fokdat.nl/p/';
	});



    /*when('#save', function () {
        store.save({
            key:'config',
            map:ui('map'),
            zoom:ui('zoom')
        });
        display('#welcome');
    });*/
});
