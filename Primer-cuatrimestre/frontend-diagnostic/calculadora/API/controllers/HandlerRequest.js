const url = require("url");
const { Model } = require("../model/model");

function handleRequest(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.end();
  } else if (path === "/evaluate") {
    let expression = query.expression.trim();
    expression = expression.replace(/^0+(?=\d)/, "");

    if (expression == "" || expression == null) {
    }

    let model = new Model();
    let result = model.evaluateExpression(expression.toString());

    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    });
    res.end(result.toString());
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
}

module.exports = { handleRequest };
