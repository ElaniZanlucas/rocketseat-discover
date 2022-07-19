const express = require('express');
// Carrega tudo oq tem dentro do express
const app = express();

// Falando pro express que a ferramenta a ser usada para
// renderizar o HTML (view engine)
// vai usar o ejs
app.set("view engine", "ejs");

// Criar uma rota (padrão)
// site.com.br
app.get("/", function(req, res){
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "JS usa Javascript para renderizar HTML"
    },
    {
      title: "M",
      message: "uito fácil de usar"
    },
    {
      title: "A",
      message: "gora ficou mais fácil"
    },
    {
      title: "I",
      message: "nstall ejs"
    },
    {
      title: "S",
      message: "intaxe simples"
    }
  ];

  const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando Javascript"

  // Oq eu vou dar de resposta é renderizar o index
  // Passando o arquivo index e um objeto
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});

// site.com.br/sobre
app.get("/sobre", function(req, res){
  res.render("pages/about");
})

// listen fica ouvindo uma porta(8080)
app.listen(8080);

console.log("rodando");