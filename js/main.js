$(document).ready(function() {

    $('.selection').change('.selection option:selected', function(event) {
      event.preventDefault();

        var categorySelected = $('.selection option:selected').text().toLowerCase();


        var url = 'https://api.nytimes.com/svc/topstories/v2/' + categorySelected + '.json';
        url += '?' + $.param({
            'api-key': 'e6dd6cfbfd7c4e748aa37e3491eb34d8'
        });

        $.ajax({
                method: 'GET',
                url: url
            })

            .done(function(data) {
                var listItem = '';
                var news = data.results;
                var filteredNews = news.filter(function(item) {
                    return item.multimedia.length > 0;
                }).slice(0, 12);

                $.each(filteredNews, function(item, index) {
                    var img = index.multimedia[4].url;
                    listItem += '<li class="itemImage" style="background-image:url(' + img + ')"><p>' + index.abstract + '</p></li>';
                    listItem += '<a href="' + index.url + '">';
                    listItem += '</a></li>';
                })

                $('.stories').append(listItem);

            });
    });
});
