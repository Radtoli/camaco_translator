const vogais = ["a", "e", "i", "o", "u"];

function trocarLetra(palavra, indice, novaLetra) {
  if (indice < 0 || indice >= palavra.length) {
    return "O índice está fora do intervalo da palavra.";
  }

  var letras = palavra.split("");

  letras[indice] = novaLetra;

  return letras.join("");
}

function convertToMacaco(word) {
  word = word.toLowerCase();

  var indexDeConsoantes = [];

  for (let index = 0; index < word.length; index++) {
    var letra = word[index];
    if (vogais.includes(letra)) {
      continue;
    } else {
      indexDeConsoantes.push(index);
    }
  }

  var primeiraConsoante = word[indexDeConsoantes[0]];
  var segundaConsoante = word[indexDeConsoantes[1]];

  var meiaTroca = trocarLetra(word, indexDeConsoantes[0], segundaConsoante);
  var trocaCompleta = trocarLetra(
    meiaTroca,
    indexDeConsoantes[1],
    primeiraConsoante
  );

  return trocaCompleta;
}

function traduzirFrase(frase) {
  var palavras = frase.split(" ");

  var palavrasTraduzidas = palavras.map(function (palavra) {
    return convertToMacaco(palavra);
  });

  return palavrasTraduzidas.join(" ");
}

export { convertToMacaco, traduzirFrase };
