var Twig = require("twig"), twig = Twig.twig;
var fs = require("fs");

console.log("Macros defined before their usage");
var template = twig({ path: "macros-before.twig", async: false });
console.log(template.render());

console.log("Macros defined after their usage");
template = twig({ path: "macros-after.twig", async: false });
console.log(template.render());
