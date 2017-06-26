$(document).ready(function() {

  $("#get-quote").on("click", function(){
    // Only change code below this line.
    $.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes", function(json) {

      var html = '';
      var randomNum = (Math.floor(Math.random()*json.messages.non_personalized.length));
      var pickRedNumber = Math.floor(Math.random() * 256);
      var pickGreenNumber = Math.floor(Math.random() * 256);
      var pickBlueNumber = Math.floor(Math.random() * 256);

      var randomColor = 'rgb(' + pickRedNumber + ', ' + pickGreenNumber + ', ' + pickBlueNumber + ')'

        html += '<p class="quote">"';

        html += json.messages.non_personalized[randomNum];

        html += '"</p>'

      $('#random-quote').html(html);
      $('#author').html('- President Donal Trump');
      $('button').css('background', randomColor);
      $('html').css('background', randomColor);
      if(pickRedNumber < 150 && pickBlueNumber < 200 && pickGreenNumber < 200 || pickRedNumber < 200 && pickBlueNumber < 150 && pickGreenNumber < 200 || pickRedNumber < 200 && pickBlueNumber < 200 && pickGreenNumber < 150) {
        $('button').css('color', 'white');
      } else {
        $('button').css('color', 'black');
      }
      $('#tweet-quote').attr('href','https://twitter.com/intent/tweet?hashtags=trump&related=freecodecamp&text="' + json.messages.non_personalized[randomNum] + '" -Donald Trump');
      });

    });

  });
