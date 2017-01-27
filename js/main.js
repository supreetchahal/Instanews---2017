$.ajax({

  method: 'GET',
  url: 'https://api.nytimes.com/svc/topstories/v2/' + select + '.json?api-key=e6dd6cfbfd7c4e748aa37e3491eb34d8'
}).done(function(data) {

    if (data.results.length === 0) {
      $('.story-grid').append("<p>There are no stories in this section.</p>");
    }
    else {
      let news = data.results;
      news = news.filter(function(item) {
        return item.multimedia.length;
      }).splice(0, 12);
