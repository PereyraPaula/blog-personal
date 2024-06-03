const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["ejs", "html", "md"]);

  // Configuración para cargar post y proyectos
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/*.md").reverse();
  });
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/projects/*.md").reverse();
  });

  eleventyConfig.addWatchTarget("src/assets/css/bootstrap.min.css");
  
  // Files Bootstrap
  eleventyConfig.addPassthroughCopy({ "src/assets/css/bootstrap.min.css": "/assets/css/bootstrap.min.css" });
  eleventyConfig.addPassthroughCopy({ "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "assets/js/bootstrap.bundle.min.js" });
  
  // Añadir otros archivos estáticos si es necesario
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
}