var jsdom = require("jsdom");
module.exports = function(mws){
  var _this = this;


  this.getNewMovies = function(cb){
    jsdom.env(
      "http://www.imdb.com/showtimes/location?ref_=inth_ov_sh_sm",
      ["http://code.jquery.com/jquery.js"],

      function (errors, window) {
        var movies = [];
        var titles = window.$(".lister-item img.loadlate");
        
        for(var t in titles){
          if(typeof titles[t].alt !="undefined" && typeof titles[t].src!="undefined"){
            movies.push({ title:titles[t].alt ,img: titles[t].src });
          }//end if
        }//end for
        
        cb(movies);

    });
  };

};

