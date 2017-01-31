$(document).ready(function() {

    $('.selection').change(function(event) {
      event.preventDefault();


        var categorySelected = $('select option:selected').val();
        $('.stories').empty().append('<img class="loader" src="../assets/images/ajax-loader.gif"/>');


        var url = 'https://api.nytimes.com/svc/topstories/v2/' + categorySelected + '.json';
        url += '?' + $.param({
            'api-key': 'e6dd6cfbfd7c4e748aa37e3491eb34d8'
        });

        $.ajax({
                method: 'GET',
                url: url
            })

            .done(function(data) {
              $('.stories').empty();
                var listItem = '';
                var news = data.results;
                var filteredNews = news.filter(function(item) {
                    return item.multimedia.length > 0;
                }).slice(0, 12);

                $.each(filteredNews, function(item, index) {
                    var img = index.multimedia[4].url;
                    listItem += '<li class="itemImage" style="background-image:url(' + img + ')">';
                    listItem += '<a class="news-link" href="' + index.url + '"> <p>' + index.abstract + '</p>';
                    listItem += '</a></li>';
                })

                $('.stories').append(listItem);
                console.log(listItem);

            });
    });
});
