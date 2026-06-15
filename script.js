const idioma = document.getElementById("idioma");

idioma.addEventListener("change", () => {
    const linguagem = idioma.value;

    if (linguagem === "pt") {
        document.documentElement.lang = "pt-BR";
    } else if (linguagem === "en") {
        document.documentElement.lang = "en";
    } else if (linguagem === "es") {
        document.documentElement.lang = "es";
    }
});


/* ==========================
   CALCULADORA DE ÁGUA
========================== */

function calcularAgua() {

  let area = Number(document.getElementById("area").value);
  let agua = Number(document.getElementById("agua").value);

  if(area <= 0 || agua <= 0){

    document.getElementById("resultadoAgua").innerHTML =
      "⚠️ Informe valores válidos.";

    return;
  }

  let total = area * agua;

  document.getElementById("resultadoAgua").innerHTML =
    "💧 Será necessário utilizar <b>" +
    total +
    " litros</b> de água no plantio.";
}

/* ==========================
   CALCULADORA DE POLUIÇÃO
========================== */

function calcularPoluicao() {

  let diesel = Number(document.getElementById("diesel").value);
  let maquinas = Number(document.getElementById("maquinas").value);
  let dias = Number(document.getElementById("dias").value);

  if(diesel <= 0 || maquinas <= 0 || dias <= 0){

    document.getElementById("resultadoPoluicao").innerHTML =
      "⚠️ Informe valores válidos.";

    document.getElementById("nivel").innerHTML = "";
    document.getElementById("dicas").innerHTML = "";

    return;
  }

  let emissao = diesel * maquinas * dias * 2.68;

  document.getElementById("resultadoPoluicao").innerHTML =
    "🌍 Emissão estimada de CO₂: <b>" +
    emissao.toFixed(2) +
    " kg</b>";

  let nivel = "";

  if (emissao < 5000) {

    nivel = "🟢 Impacto Ambiental Baixo";

  } else if (emissao < 15000) {

    nivel = "🟡 Impacto Ambiental Moderado";

  } else {

    nivel = "🔴 Impacto Ambiental Alto";
  }

  document.getElementById("nivel").innerHTML = nivel;

  document.getElementById("dicas").innerHTML = `
    <li>🌱 Realize manutenção preventiva nas máquinas.</li>
    <li>☀️ Utilize energia solar na propriedade.</li>
    <li>🚜 Evite desperdício de combustível.</li>
    <li>🌳 Plante árvores para compensar carbono.</li>
    <li>♻️ Invista em práticas agrícolas sustentáveis.</li>
  `;
}

/* ==========================
   TEMA ESCURO
========================== */

function alternarTema() {
  document.body.classList.toggle("escuro");
}