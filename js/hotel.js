window.Hotel = {
    API_URL: "http://localhost:8086",

    getHotels:function () {
        $.ajax({
            url: Hotel.API_URL + "/hotels",
            method: "GET"
        }).done(function (response) {
          Hotel.displayHotels(response.content);
        })


    },
 getHotelsHtml: function (hotel) {
 return`
<div class="col-md-4 ftco-animate">
\t\t    \t\t\t\t<div class="destination">
\t\t    \t\t\t\t\t<a href="hotel-single.html" class="img img-2 d-flex justify-content-center align-items-center" style="background-image: url(images/hotel-1.jpg);">
\t\t    \t\t\t\t\t\t<div class="icon d-flex justify-content-center align-items-center">
    \t\t\t\t\t\t\t<span class="icon-search2"></span>
    \t\t\t\t\t\t</div>
\t\t    \t\t\t\t\t</a>
\t\t    \t\t\t\t\t<div class="text p-3">
\t\t    \t\t\t\t\t\t<div class="d-flex">
\t\t    \t\t\t\t\t\t\t<div class="one">
\t\t\t\t    \t\t\t\t\t\t<h3><a href="hotel-single.html">Hotel, Italy</a></h3>
\t\t\t\t    \t\t\t\t\t\t<p class="rate">
\t\t\t\t    \t\t\t\t\t\t\t<i class="icon-star"></i>
\t\t\t\t    \t\t\t\t\t\t\t<i class="icon-star"></i>
\t\t\t\t    \t\t\t\t\t\t\t<i class="icon-star"></i>
\t\t\t\t    \t\t\t\t\t\t\t<i class="icon-star"></i>
\t\t\t\t    \t\t\t\t\t\t\t<i class="icon-star-o"></i>
\t\t\t\t    \t\t\t\t\t\t\t<span>8 Rating</span>
\t\t\t\t    \t\t\t\t\t\t</p>
\t\t\t    \t\t\t\t\t\t</div>
\t\t\t    \t\t\t\t\t\t<div class="two">
\t\t\t    \t\t\t\t\t\t\t<span class="price per-price">$40<br><small>/night</small></span>
\t\t    \t\t\t\t\t\t\t</div>
\t\t    \t\t\t\t\t\t</div>
\t\t    \t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries</p>
\t\t    \t\t\t\t\t\t<hr>
\t\t    \t\t\t\t\t\t<p class="bottom-area d-flex">
\t\t    \t\t\t\t\t\t\t<span><i class="icon-map-o"></i> Miami, Fl</span> 
\t\t    \t\t\t\t\t\t\t<span class="ml-auto"><a href="#">Book Now</a></span>
\t\t    \t\t\t\t\t\t</p>
\t\t    \t\t\t\t\t</div>
\t\t    \t\t\t\t</div>
\t\t    \t\t\t</div>
     `
 },

 displayHotels: function (hotel) {
 let hotelHtml = '';
 hotel.forEach( hotel=>hotelHtml+=Hotel.getHotels(hotel));
 $('.container .row .row:first-child').html(hotelHtml);
 },
    bindEvents: function () {
      $ ('.container .row .row:first-child').delegate('.btn btn-primary py-3 px-5', 'click', function (event)
      {
          event.preventDefault();

          $(this).data('form-control');

      });

    }
};
Hotel.getHotels();
Hotel.bindEvents();