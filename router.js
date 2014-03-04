var views = require ("./views");
var upload = require ("./upload");

function route(pathname,request,response) {
  console.log("About to route a request for " + pathname);
  switch(pathname) {
    case '/' :
      console.log("routed to homepage");
      views.homepage(response);
      break;
    case '/upload' :
      upload.upload(request,response);
      break;
  }
}

exports.route = route;
