// var clr = require('./colors.js');

module.exports = {
//     state : 'night',
//     control2:function(self){
//       if (self.value==='night'){
//         Body.setBackgroundColor('black');
//         Body.setColor('white');
//         Links.setColor('powderblue');
//         self.value='day';
//       }else{
//         Body.setBackgroundColor('white');
//         Body.setColor('black');
//         Links.setColor('blue');
//         self.value='night';
//       }
//
//       return `
//       <input type="button" value="night" style="width:50pt;height:25pt;"
//       onclick="${nightDayHandler(this)};">`
//     },

  html:function(title, list, body, control){
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>CoolDong's Life-${title}</title>
      <meta charset="utf-8">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NW8YK33GNJ"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NW8YK33GNJ');
      </script>
      <link rel="stylesheet" type="text/css" href="padding.css"/>
      <style>
        .js{
          font-weight:bold;
          color:red;
        }
        #setRed{
          color:red;
        }
        #setBlue{
          color:blue;
        }
        span{
          color:green;
        }
      </style>
      <script src="colors.js"></script>
    </head>
    <body>
    <div id="_padding">
      <h1><a href="/?id=About">CoolDong's Life</a></h1>
      <input type="button" value="night" style="width:50pt;height:25pt;" onclick="alert("test")">
        ${list}
        ${control}
        ${body}
    </div>
    </body>
    </html>
    `;
  },
  list:function(filelist){
    var list = '<ol>';
    var i = 1;
    while(i< filelist.length){
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i++;
    }
    list = list+'</ol>';
    return list;
  },
  crud:function(title){
    return `
     <a href="/create">create</a>
     <a href="/update?id=${title}">update</a>
     <form action="/delete_process" method="post" onsubmit="return check()">
      <input type="hidden" name="id" value=${title}>
      <input type="submit" value="delete">
     </form>`
  },
  create_html:function(){
      return `
        <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
        </form>`
  },
  update_html:function(title, description){
    return `
      <form action="/update_process" method="post">
      <input type="hidden" name="id" value="${title}">
      <p><input type="text" name="title" placeholder="title" value=${title}></p>
      <p>
        <textarea name="description" placeholder="description">${description}</textarea>
      </p>
      <p>
        <input type="submit">
      </p>
      </form>
    `
  }
}
//nightDayHandler(this)
