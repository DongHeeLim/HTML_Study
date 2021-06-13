var http = require('http');
var fs = require('fs');
var url = require('url');
// var querystring = require('querystring');

function templateHTML(title, list, body){
  return`
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
    <script src="color.js"></script>
  </head>
  <body>
  <div id="_padding">
    <h1><a href="/?id=About">CoolDong's Life</a></h1>
      <input type="button" value="night" style="width:50pt;height:25pt;" onclick="
        nightDayHandler(this);
      ">
      ${list}
      ${body}
  </div>
  </body>
  </html>
  `;
}

function templateList(filelist){
  var list = '<ol>';
  var i = 1;
  while(i< filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i++;
  }
  list = list+'</ol>';
  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname ==='/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(err, filelist){
          var title = "About"
          var description = fs.readFileSync('data/About', 'utf-8');
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h1>${title}</h1>${description}`);
          response.writeHead(200);
          response.end(template);
        });
      }else{
        fs.readdir('./data', function(err, filelist){
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = templateList(filelist);
            var template = templateHTML(title, list, `<h1>${title}</h1>${description}`);
            response.writeHead(200);
            response.end(template); // response.end 출력 완료
          });
        });
      }
    }else{
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
