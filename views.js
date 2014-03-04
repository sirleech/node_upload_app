function homepage(response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(
      '<form action="/upload" enctype="multipart/form-data" method="post">'+
      '<input type="text" name="title"><br>'+
      '<input type="file" name="upload" multiple="multiple"><br>'+
      '<input type="submit" value="Upload">'+
      '</form>'
      );
  response.end();
}

exports.homepage = homepage;
