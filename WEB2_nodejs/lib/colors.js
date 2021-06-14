var Links = {
  setColor:function(color){
    $('a').css('color', color);
  },
}
var Body = {
  setColor:function(color){
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    $('body').css('backgroundColor', color);
  }
}
module.exports = {
  nightDayHandler:function(self){
    if (self.value==='night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      Links.setColor('powderblue');
      self.value='day';
    }else{
      Body.setBackgroundColor('white');
      Body.setColor('black');
      Links.setColor('blue');
      self.value='night';
    }
  }
}

// function nightDayHandler(self){
//   if (self.value==='night'){
//     Body.setBackgroundColor('black');
//     Body.setColor('white');
//     Links.setColor('powderblue');
//     self.value='day';
//   }else{
//     Body.setBackgroundColor('white');
//     Body.setColor('black');
//     Links.setColor('blue');
//     self.value='night';
//   }
// }
