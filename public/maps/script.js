

var beach;

$.ajaxPrefilter(function(options, originalOptions, jqXHR) { options.async = true; });

function initMap() {

    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        zoom: 15,
        center: {
            lat: 21.279721,
            lng: -157.8381423
        }

    });



    beach = {
        url: '../images/travel.png',
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 35)
    };

    beach = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {
            lat: 21.28091,
            lng: -157.8380977
        },
        map: map,
        icon: beach,
        size: new google.maps.Size(20, 32),
        scaledSize: new google.maps.Size(25, 25)

    });


    var dot = {
        url: '../images/blueDot.png',
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
    };

    var dot = new google.maps.Marker({
        position: {
            lat: 21.28091,
            lng: -157.8360077
        },
        map: map,
        icon: dot,
        size: new google.maps.Size(20, 20),
        scaledSize: new google.maps.Size(25, 25),
        zIndex: google.maps.Marker.MAX_ZINDEX + 1
    });

    var hotel = {
        url: '../images/travel.png',
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 35)
    };

    var hotel = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {
            lat: 21.29091,
            lng: -157.8380977
        },
        map: map,
        icon: hotel,
        size: new google.maps.Size(20, 32),
        scaledSize: new google.maps.Size(25, 25)
    });

    var exhibition = {
        url: '../images/travel.png',
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 35)
    }

    var exhibition = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {
            lat: 21.28591,
            lng: -157.8401977
        },
        map: map,
        icon: exhibition,
        size: new google.maps.Size(20, 32),
        scaledSize: new google.maps.Size(25, 25)
    });

    var party1 = {
        url: '../images/government.png',
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 35)
    }

    var party1 = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {
            lat: 21.28991,
            lng: -157.8405977
        },
        map: map,
        icon: party1,
        size: new google.maps.Size(20, 32),
        scaledSize: new google.maps.Size(25, 25)
    });

    var party2 = {
        url: '../images/government.png',
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 35)
    }

    var party2 = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {
            lat: 21.28291,
            lng: -157.8409977
        },
        map: map,
        icon: party2,
        size: new google.maps.Size(20, 32),
        scaledSize: new google.maps.Size(25, 25)
    });

    // var bar = {
    //     url: '../images/bars.png',
    //     size: new google.maps.Size(71, 71),
    //     origin: new google.maps.Point(0, 0),
    //     anchor: new google.maps.Point(17, 34),
    //     scaledSize: new google.maps.Size(25, 35)
    // }

    // var bar = new google.maps.Marker({
    //     animation: google.maps.Animation.DROP,
    //     position: {
    //         lat: 21.28991,
    //         lng: -157.8401977
    //     },
    //     map: map,
    //     icon: bars,
    //     size: new google.maps.Size(20, 32),
    //     scaledSize: new google.maps.Size(25, 25)
    // });

    beach.addListener('click', function() {

        $(".box").toggleClass("right");
    });




}



$(document).on('pageinit', function(event) {
    $(".box").swipeleft(function() {
        $(".box").addClass("right1");
        $(".info").addClass("right2");
        $(".checkImg").addClass("right3");
    });

});



$(document).on('pageinit', function(event) {
    $(".location").swiperight(function() {
        $(".box").removeClass("right1", "right");
        $(".info").removeClass("right2");
        $(".checkImg").removeClass("right3");

    });
    $(".box").swiperight(function() {
        $(".box").removeClass("right1");
        $(".info").removeClass("right2");
        $(".checkImg").removeClass("right3");

    });
    $(".Data").swipeleft(function() {
        $(".location").addClass("right5");
        $(".message").addClass("right4");

    });

    $(".message").swiperight(function() {
        $(".location").removeClass("right5");
        $(".message").removeClass("right4");

    });

    $(".checkImg").on("taphold", function() {
        if ($(".checkImg").hasClass("checkImg1")) {
            $(".time").fadeIn();
        }

    });




});



$(document).ready(function() {


    $(".time").hide();
    $(".added").hide();
    $(".checkImg").click(function() {
        $(".checkImg").addClass("checkImg1");
        $(".added").fadeIn();
    });

    $(".exit").click(function() {
        $(".box").removeClass("right1");
        $(".box").removeClass("right");
        $(".info").removeClass("right2");
        $(".checkImg").removeClass("right3");
        $(".location").removeClass("right5");
    });

});