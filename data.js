$(document).ready(function () {
  
    $.getJSON('./data.json', function(data) {
        alert("this")

        $.each(data, function(index, obj) {
            $('#shoeset').append(
            '<div class="col-lg-3 mb-4 text-center">'+
            '<div class="product-entry border">'+
              '<a href="#" class="prod-img">'+
                '<img src='+obj.image+' class="img-fluid">'+
              '</a>'+
              '<div class="desc">'+
                '<h2><a href="#">'+ obj.name +" mu name"+'</a></h2>'+
                '<span class="price">'+ obj.price +'</span>'+
              '</div>'+
            '</div>'+
          '</div>'
            );
        });

    });
});