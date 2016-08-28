$(document).ready(function() {


 $('form').submit(function (e){
    e.preventDefault();
    var input = $('#search').val();
    var submitButton = $('#submit');

    input.prop('disabled',true);
    submitButton.prop('disabled',true).val('searching...');
    
    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags: input,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      input.prop('disabled',false
      submitButton.prop('disabled',false).val('Search');
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready
