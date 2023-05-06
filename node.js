const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const htmlPath = path.join(__dirname, "nodeHtml.html");
    const htmlContent = fs.readFileSync(htmlPath, "utf8");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlContent);
    res.end();
  } else if (req.url === "/count" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const type = body.trim();
      let number = 0;
      if (type === "plus") {
        number = parseInt(req.headers.cookie.split("=")[1]) + 1;
      } else if (type === "minus") {
        const currentNumber = parseInt(req.headers.cookie.split("=")[1]);
        if (currentNumber > 0) {
          number = currentNumber - 1;
        }
      }
      res.writeHead(200, {
        "Content-Type": "text/plain",
        "Set-Cookie": `number=${number}; HttpOnly`,
      });
      res.write(number.toString());
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
