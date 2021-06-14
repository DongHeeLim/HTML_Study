var clr = require('./colors.js');

module.exports = {
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
        <input type="button" value="night" style="width:50pt;height:25pt;" onclick="
          nightDayHandler(this);
        ">
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
  }
}
