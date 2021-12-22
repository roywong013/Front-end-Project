
const quoteObj = [
    {"quote": "Be yourself; everyone else is already taken.", "author": "Oscar Wilde"},
    {"quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "author": "Albert Einstein"},
    {"quote": "So many books, so little time.", "author": "Frank Zappa"},
    {"quote": "A room without books is like a body without a soul.", "author": "Marcus Tullius Cicero"},
    {"quote": "Be the change that you wish to see in the world.", "author": "Mahatma Gandhi"}
  ];

const bgColor = ["rgb(45, 199, 122)", "rgb(45, 117, 199)", "rgb(199, 150, 45)", "rgb(199, 45, 109)"]

 

  //Set random function for quote & color
  const random_quote_index = function(){
    return Math.floor(Math.random() * quoteObj.length)
  };

  const random_color_index = function(){
      return Math.floor(Math.random() * bgColor.length);
  };


const random_all = function(){
    quote_index = random_quote_index();
    color_index = random_color_index();
}

//All the content which need to change
const changingQuoteBox = function() {
    $("#text").text(quoteObj[quote_index].quote);
    $("#author").text("-  " + quoteObj[quote_index].author);
    $(".bgColor").css("backgroundColor",bgColor[color_index]);
    $("#text").css("color", bgColor[color_index]);
    $("#author").css("color", bgColor[color_index]);
    $(".fab").css("color", bgColor[color_index]);
}

const showingRandomQuoteBox = function(){
    random_all();
    changingQuoteBox();
    $("#text").show(2000);
    $("#author").show(2000);
}

  //Get first random index
  var quote_index = random_quote_index();
  var color_index = random_color_index();

  
  $(document).ready(function(){
    changingQuoteBox();
      $("#new-quote").click(function(){
        $("#text").animate({opacity: 0}, 500, function(){
            $(this).animate({opacity: 1}, 500);
            random_all();
            changingQuoteBox();
        });
        $("#author").animate({opacity: 0}, 500, function(){
            $(this).animate({opacity: 1}), 500
        });
      
})
  });


