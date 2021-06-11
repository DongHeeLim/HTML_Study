var http = require('http');
var fs = require('fs');
var url = require('url');
// var querystring = require('querystring');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname ==='/'){
      if(queryData.id === undefined){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = "About"
          var description = "data/?id=About";
          var template =`
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
            <h1><a href="/">CoolDong's Life</a></h1>
              <input type="button" value="night" style="width:50pt;height:25pt;" onclick="
                nightDayHandler(this);
              ">
            <ol>
              <li><a href="?id=TRIGGER">Trigger</a></li>
              <li><a href="?id=BOLT">Bolt</a></li>
              <li><a href="?id=MAGAZINE">Magazine</a></li>
              <li><a href="?id=STOCK">Stock</a></li>
              <li><a href="?id=RESULT">Result</a></li>
              <li><a href="?id=SCRIPT">script</a></li>
            </ol>
            <h1>${title}</h1>

            <p style="margin-top:30px">
              ${description}
            </p>
          </div>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template); // response.end 출력 완료
        });
      }else{
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          console.log(title);
          console.log(description);
          var template =`
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
            <ol>
              <li><a href="?id=TRIGGER">Trigger</a></li>
              <li><a href="?id=BOLT">Bolt</a></li>
              <li><a href="?id=MAGAZINE">Magazine</a></li>
              <li><a href="?id=STOCK">Stock</a></li>
              <li><a href="?id=RESULT">Result</a></li>
              <li><a href="?id=SCRIPT">script</a></li>
            </ol>
            <h1>${title}</h1>

            <p style="margin-top:30px">
              ${description}
            </p>
          </div>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template); // response.end 출력 완료
        });
      }
    }else{
      response.writeHead(404);
      response.end('Not found');
    }






});
app.listen(3000);
