var text = document.getElementById("text");
var source = document.getElementById("source");
var buttonQuote = document.getElementById("button-quote");

buttonQuote.addEventListener("click", newQuote);

$.ajax({
  url: 'https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
  success: function(data) {
    var post = data.shift(); // The data is an array of posts. Grab the first one.
    $('#source').text(post.title);
    $('#text').html(post.content);
    changeTweetLink($('#text').text(), post.title);
  },
  cache: false
});


function newQuote() {
  $.ajax( {
    url: 'https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      var post = data.shift(); // The data is an array of posts. Grab the first one.
      $('#source').text(post.title);
      $('#text').html(post.content);
      changeTweetLink($('#text').text(), post.title);
    },
    cache: false
  });
};

function shortenTweet(quote, title) {
  var text = quote + "\n - " + title;
  if (text.length > 280) {
    text = text.slice(0, 279);
  }
  return text;
}
// var encodedLink = encodeURI(text);
//   $("#twitter-share-button").attr("href", encodedLink);

function changeTweetLink(quote, title) {
  $('#tweet-container').html("");
  twttr.widgets.createShareButton(
    '/',
    document.getElementById("tweet-container"),
    {
      text: shortenTweet(quote, title),
    }
  );
}

//change color of a background
function changeColor() {
  var first = Math.floor(Math.random() * 256);
  var second = Math.floor(Math.random() * 256);
  var third = Math.floor(Math.random() * 256);
  var color = "rgb(" + first + "," + second + "," + third + ")"
  document.body.style.backgroundColor = color;
}

