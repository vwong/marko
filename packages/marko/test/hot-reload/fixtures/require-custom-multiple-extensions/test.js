var fs = require("fs");
var nodePath = require("path");

exports.check = function (marko, hotReload, expect, snapshot) {
  var srcTemplatePath = nodePath.join(__dirname, "template.html");
  var templateSrc = fs.readFileSync(srcTemplatePath, { encoding: "utf8" });

  var tempTemplatePath = nodePath.join(__dirname, "template.temp.html");
  fs.writeFileSync(tempTemplatePath, templateSrc, { encoding: "utf8" });

  var template = marko.load(tempTemplatePath);

  snapshot(template.renderSync({ name: "John" }).toString(), {
    name: "initial",
    ext: ".html",
  });

  fs.writeFileSync(tempTemplatePath, templateSrc + "!", { encoding: "utf8" });

  snapshot(template.renderSync({ name: "John" }).toString(), {
    name: "modified",
    ext: ".html",
  });

  hotReload.handleFileModified(tempTemplatePath, {
    extensions: [".html"],
  });

  snapshot(template.renderSync({ name: "John" }).toString(), {
    name: "reloaded",
    ext: ".html",
  });
};
