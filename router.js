var views = require ("./views");

function route(pathname,response) {
  console.log("About to route a request for " + pathname);
  switch(pathname) {
    case '/' :
      console.log("routed to homepage");
      views.homepage(response);
      break;
    case '/upload' :
      response.write("upload...");
      response.end();
      break;
  }
}

exports.route = route;
