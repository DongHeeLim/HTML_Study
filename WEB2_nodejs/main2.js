var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateHTML(title, list, body, control){
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
      ${control}
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
      if(queryData.id === undefined){   //초기창
        fs.readdir('./data', function(err, filelist){
          var title = "About"
          var description = fs.readFileSync('data/About', 'utf-8');
          var list = templateList(filelist);
          var template = templateHTML(title, list,
            `<h1>${title}</h1>${description}`,
            `<a href="/create">create</a>`
          );
          response.writeHead(200);
          response.end(template);
        });
      }else{    //id 값 있을 떄
        fs.readdir('./data', function(err, filelist){
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = templateList(filelist);
            var template = templateHTML(title, list,
              `<h1>${title}</h1>${description}`,
              `<a href="/create">create</a> <a href="/update">update</a>`
            );
            response.writeHead(200);
            response.end(template); // response.end 출력 완료
          });
        });
      }
    }else if (pathname ==='/create'){
      fs.readdir('./data', function(err, filelist){
        var title = "Idea-create"
        var list = templateList(filelist);
        var template = templateHTML(title, list, `
          <form action="http://localhost:3000/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
          </form>
        `, '');
        response.writeHead(200);
        response.end(template);
      });
    }else if (pathname==="/create_process"){
      var body = '';
      request.on('data', function(data){  //데이터 조금씩 받을 때마다 합치기
        body = body + data;
      });
      request.on('end', function(){ // 더이상 들어올 데이터 없으면
        var post = qs.parse(body);  // 데이터를 객체화
        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location:`/?id=${qs.escape(title)}`});  // redirection, escape-> 인코딩함수
          response.end();
        })
      });
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
