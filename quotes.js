let url =
  "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
let tweeturl =
  "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

let quoteStored;

//function to generate random quote
//start
function randomQuote() {
  $.ajax({
    url: url,
    success: function(data) {
      console.log(data);
      var post = data.shift(); // The data is an array of posts. Grab the first one.
     
        $("#author").text(post.title);
        $("#text").animate(
          { opacity: 0 },
          500,
          function() {
            $(this).animate({ opacity: 1}, 500);
            $('#text').html(post.content);
          }
        );
      
      
      quoteStored = document.querySelector("#text").textContent;
    },
    cache: false
  });
}
//end

//Loading Quote on Loading the Page
function onLoadQuote() {
  randomQuote();
}

//get new quote button
$("button").click(function(e) {
  randomQuote();
});
//



//tweet button
$("a.buttons").click(function(e) {
  e.preventDefault();

  $("a.buttons").attr({
    href: tweeturl + "'" + quoteStored + "'",
    target: "_blank"
  });
});
