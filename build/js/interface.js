$(document).ready(function() {
	flexibility(document.documentElement);

    $('body').on('click','.menu-btn', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('body').toggleClass('hidden');
        $('.menu-mobile').slideToggle(10);
    });


	setFullWidth();
	if ($("table").length>0) {
		$("table").wrap("<div class='table-wrap'></div>");
	}

	//FS
    if ($('.fs').length>0) {
    	$('.fs').styler();
    }
    //TABS
    if ($('.resp-tabs').length>0) {
        $('.resp-tabs').responsiveTabs({
            startCollapsed: 'accordion',
            setHash: true,
        });
    }
    //DATEPICKER
    if ($('.input-calendar').length>0) {
		$('.input-calendar').datepicker({
			dateFormat : "dd-mm-yy",
			minDate: new Date($('#hiddendelivdate').val()),
			monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		});
	}

	//UPLOAD FILE
    $("#file-upload").change(function() {
        var ele = document.getElementById($(this).attr('id'));
        var result = ele.files;
        for(var x = 0;x< result.length;x++){
         var fle = result[x];
            $("#file-upload-output").append("<div class='file-upload-output__item'>" + fle.name + "<a href='#' class='file-upload-output__close'>" + "</a>" + "</div>");        
        }
    });
    $("body").on("click", ".file-upload-output__close", function(e){
        e.preventDefault();
        $(this).parents(".file-upload-output__item").last().remove();
    });

	//POPUP-VIDEO
    $(".js-play-btn").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        buttons: [
            "close"
        ],
    });

    //POPUP-INLINE
    $(".js-popup-inline").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        buttons: [
            "close"
        ],
    });

    //ACCORDEON
    $("body").on("click", ".accordeon__link", function(e){
        e.preventDefault();
        $(this).parents('.accordeon__item').toggleClass('active');
        $(this).next('.accordeon__info').slideToggle();
    });

    //TABS
    if ($('.resp-tabs').length>0) {
        $('.resp-tabs').responsiveTabs({
            startCollapsed: 'accordion',
            setHash: true,
        });
    }
	if ($('.brand-name').length>0) {
        $('.brand-name__inner').mousewheel(function(event, delta) {
              this.scrollLeft -= delta * 100;
              event.preventDefault();
        });
    }

    //PAGE-SLIDER
    if ($( ".photo-project-slider" ).length>0) {
        var $slider_p = $('.photo-project-slider');

        $slider_p.slick({
            infinite: false,
            dots: false,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            adaptiveHeight: false,
        });

    };

    if ($('#project-map').length>0) {
        // ymaps.ready(initializeProjectMap);
        var map;
        initializeProjectMap()
    }

    if ($('#contacts-map1').length>0) {
        initializeContactsMap1();
    }
    if ($('#contacts-map2').length>0) {
        initializeContactsMap2();
    }

});




$(window).resize(function () {
	setFullWidth();
});


// $(window).load(function(){

// });

// functions
function setFullWidth(){
	if ($('.container-fullwidth__img').length>0) {
		var fullWidth = $('.layout').innerWidth(),
			containerWidth = $('.page-content > .container-fluid').innerWidth(),
			halfWidthIndent = -(fullWidth - containerWidth)/2; 
		$('.container-fullwidth__img').css({
			transform: 'translate(' + halfWidthIndent + 'px, 0px)',
			MozTransform: 'translate(' + halfWidthIndent + 'px, 0px)',
			WebkitTransform: 'translate(' + halfWidthIndent + 'px, 0px)',
			msTransform: 'translate(' + halfWidthIndent + 'px, 0px)'
		})
	}
}



function initializeProjectMap() {

    var latlng = new google.maps.LatLng(53.9077113,27.482882);
    var icon = "img/content/map_icon.svg";

    var settings = {
        center: latlng,
        zoom: 5,
        styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "hue": "#ff0000"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "hue": "#ff0000"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "saturation": "100"
                            },
                            {
                                "lightness": "-98"
                            },
                            {
                                "gamma": "1.81"
                            },
                            {
                                "color": "#e6ebee"
                            },
                            {
                                "weight": "1.00"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#fdfdfd"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f9f9f9"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.airport",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.airport",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e6ebee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ],
        mapTypeControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl:false,
        //disableDefaultUI: true,
    };

    // Создаем наполнение для информационного окна
    var contentString = '<div class="map-wrapper">' +
                        '<div class="map-info">Владимирская область, Киржачский район, мкр. Красный Октябрь, ул. Первомайская, д. 1</div>' +
                        '<a href="mailto:info@rusklimat.ru" class="map-mail">info@rusklimat.ru </div>' +
                        '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
       content: contentString,
       maxWidth: 505
    });

    var map = new google.maps.Map(document.getElementById("project-map"),settings);
        
    var marker = new google.maps.Marker({
        position: latlng,
        title: 'ads'
    });
    infowindow.open(map, marker);

    marker.setMap(map);

    function ZoomControl(controlDiv, map) {
        // Creating divs & styles for custom zoom control
        // controlDiv.style.padding = '5px';
        controlDiv.style.position = 'relative';
        controlDiv.style.right = "37px";
        controlDiv.style.top = "70px";


        // Set CSS for the control wrapper
        var controlWrapper = document.createElement('div');

        controlDiv.appendChild(controlWrapper);
        controlWrapper.style.top = "20px";
        controlWrapper.style.right = "20px";
        controlWrapper.style.position = 'absolute';

        // Set CSS for the zoomIn
        var zoomInButton = document.createElement('div');
        zoomInButton.style.width = '50px'; 
        zoomInButton.style.height = '50px';
        zoomInButton.style.cursor = 'pointer';
        zoomInButton.style.marginBottom = "20px";
        /* Change this to be the .png image you want to use */
        zoomInButton.style.backgroundImage = 'url("img/content/plus.png")';
        controlWrapper.appendChild(zoomInButton);

        // Set CSS for the zoomOut
        var zoomOutButton = document.createElement('div');
        zoomOutButton.style.width = '50px'; 
        zoomOutButton.style.height = '50px';
        /* Change this to be the .png image you want to use */
        zoomOutButton.style.backgroundImage = 'url("img/content/minus.png")';
        zoomOutButton.style.cursor = 'pointer';
        controlWrapper.appendChild(zoomOutButton);

        // Setup the click event listener - zoomIn
        google.maps.event.addDomListener(zoomInButton, 'click', function() {
        map.setZoom(map.getZoom() + 1);
        });

        // Setup the click event listener - zoomOut
        google.maps.event.addDomListener(zoomOutButton, 'click', function() {
        map.setZoom(map.getZoom() - 1);
        }); 
    }
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);



    //resize map
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

    google.maps.event.addListener(map, 'zoom_changed', function(){
        map.setCenter( marker.getPosition() );
    });

}


function initializeContactsMap1() {

    var latlng = new google.maps.LatLng(53.9077113,27.482882);
    var icon = {
            url: "img/content/label.png", // url
            scaledSize: new google.maps.Size(127, 142), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(63, 71) // anchor
    };

    var settings = {
        center: latlng,
        zoom: 6,
        styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "hue": "#ff0000"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "hue": "#ff0000"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "saturation": "100"
                            },
                            {
                                "lightness": "-98"
                            },
                            {
                                "gamma": "1.81"
                            },
                            {
                                "color": "#e6ebee"
                            },
                            {
                                "weight": "1.00"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#fdfdfd"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f9f9f9"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.airport",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.airport",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e6ebee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ],
        mapTypeControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl:false,
        //disableDefaultUI: true,
    };


    var map = new google.maps.Map(document.getElementById("contacts-map1"),settings);
        
    var marker = new google.maps.Marker({
        position: latlng,
        icon: icon,
    });

    marker.setMap(map);

    function ZoomControl(controlDiv, map) {
        // Creating divs & styles for custom zoom control
        // controlDiv.style.padding = '5px';
        controlDiv.style.position = 'relative';
        controlDiv.style.right = "37px";
        controlDiv.style.top = "70px";


        // Set CSS for the control wrapper
        var controlWrapper = document.createElement('div');

        controlDiv.appendChild(controlWrapper);
        controlWrapper.style.top = "20px";
        controlWrapper.style.right = "20px";
        controlWrapper.style.position = 'absolute';

        // Set CSS for the zoomIn
        var zoomInButton = document.createElement('div');
        zoomInButton.style.width = '50px'; 
        zoomInButton.style.height = '50px';
        zoomInButton.style.cursor = 'pointer';
        zoomInButton.style.marginBottom = "20px";
        /* Change this to be the .png image you want to use */
        zoomInButton.style.backgroundImage = 'url("img/content/plus.png")';
        controlWrapper.appendChild(zoomInButton);

        // Set CSS for the zoomOut
        var zoomOutButton = document.createElement('div');
        zoomOutButton.style.width = '50px'; 
        zoomOutButton.style.height = '50px';
        /* Change this to be the .png image you want to use */
        zoomOutButton.style.backgroundImage = 'url("img/content/minus.png")';
        zoomOutButton.style.cursor = 'pointer';
        controlWrapper.appendChild(zoomOutButton);

        // Setup the click event listener - zoomIn
        google.maps.event.addDomListener(zoomInButton, 'click', function() {
        map.setZoom(map.getZoom() + 1);
        });

        // Setup the click event listener - zoomOut
        google.maps.event.addDomListener(zoomOutButton, 'click', function() {
        map.setZoom(map.getZoom() - 1);
        }); 
    }
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);



    //resize map
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

    google.maps.event.addListener(map, 'zoom_changed', function(){
        map.setCenter( marker.getPosition() );
    });

}

function initializeContactsMap2() {

    var latlng = new google.maps.LatLng(53.9077113,27.482882);
    var icon = {
            url: "img/content/label.png", // url
            scaledSize: new google.maps.Size(127, 142), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(63, 71) // anchor
    };

    var settings = {
        center: latlng,
        zoom: 6,
        styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "hue": "#ff0000"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "hue": "#ff0000"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "saturation": "100"
                            },
                            {
                                "lightness": "-98"
                            },
                            {
                                "gamma": "1.81"
                            },
                            {
                                "color": "#e6ebee"
                            },
                            {
                                "weight": "1.00"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#fdfdfd"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f9f9f9"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.airport",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.airport",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e6ebee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ],
        mapTypeControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl:false,
        //disableDefaultUI: true,
    };


    var map = new google.maps.Map(document.getElementById("contacts-map2"),settings);
        
    var marker = new google.maps.Marker({
        position: latlng,
        icon: icon,
    });

    marker.setMap(map);

    function ZoomControl(controlDiv, map) {
        // Creating divs & styles for custom zoom control
        // controlDiv.style.padding = '5px';
        controlDiv.style.position = 'relative';
        controlDiv.style.right = "37px";
        controlDiv.style.top = "70px";


        // Set CSS for the control wrapper
        var controlWrapper = document.createElement('div');

        controlDiv.appendChild(controlWrapper);
        controlWrapper.style.top = "20px";
        controlWrapper.style.right = "20px";
        controlWrapper.style.position = 'absolute';

        // Set CSS for the zoomIn
        var zoomInButton = document.createElement('div');
        zoomInButton.style.width = '50px'; 
        zoomInButton.style.height = '50px';
        zoomInButton.style.cursor = 'pointer';
        zoomInButton.style.marginBottom = "20px";
        /* Change this to be the .png image you want to use */
        zoomInButton.style.backgroundImage = 'url("img/content/plus.png")';
        controlWrapper.appendChild(zoomInButton);

        // Set CSS for the zoomOut
        var zoomOutButton = document.createElement('div');
        zoomOutButton.style.width = '50px'; 
        zoomOutButton.style.height = '50px';
        /* Change this to be the .png image you want to use */
        zoomOutButton.style.backgroundImage = 'url("img/content/minus.png")';
        zoomOutButton.style.cursor = 'pointer';
        controlWrapper.appendChild(zoomOutButton);

        // Setup the click event listener - zoomIn
        google.maps.event.addDomListener(zoomInButton, 'click', function() {
        map.setZoom(map.getZoom() + 1);
        });

        // Setup the click event listener - zoomOut
        google.maps.event.addDomListener(zoomOutButton, 'click', function() {
        map.setZoom(map.getZoom() - 1);
        }); 
    }
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);



    //resize map
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

    google.maps.event.addListener(map, 'zoom_changed', function(){
        map.setCenter( marker.getPosition() );
    });

}




// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="project.html">project</a></li> \
		<li><a href="index.html">Text</a></li> \
        <li><a href="list.html">Список</a></li> \
        <li><a href="brand.html">Бренд</a></li> \
        <li><a href="brand-list.html">Бренд список</a></li> \
        <li><a href="contact.html">Контакты</a></li> \
        <li><a href="spisok-kataloga.html">Список кат.</a></li> \
	</ol> \
</div>');
