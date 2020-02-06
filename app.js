$(function() {
  $("#search").on("click", function() {
    let val = $("input[type='text']").val();
    $("input[type='text']").val("");

    $.ajax({
      dataType: "json",
      method: "GET",
      url: `https://itunes.apple.com/search?entity=album&limit=6&term=${val}`
    }).done(function({ results }) {
      // console.log(results);
      $.each(results, function(index, value) {
        let artist = value.collectionName;
        let thumbnail = value.artworkUrl100;

        $(".album-list").append(`<li><img src="${thumbnail}"><br>${artist}</li>`);
      });

     
    });
  });

  //append it to the page

  //collectionName

  // artworkUrl100
});
