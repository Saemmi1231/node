const http = require("http");
//fs : 파일 입출력 처리할 때 사용
const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //resolve는 join과 nomalize와 합친 것
    const htmlPath = path.resolve(__dirname, "nodeHtml.html");
    console.log(htmlPath, "=======");
    const htmlContent = fs.readFileSync(htmlPath, "utf8");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlContent);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
