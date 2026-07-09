async function buscar() {
  const nome = document.getElementById("anime").value;

  if (!nome) return;

  const resposta = await fetch(
    `https://api.jikan.moe/v4/anime?q=${nome}&limit=12`
  );

  const dados = await resposta.json();

  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  dados.data.forEach(anime => {
    resultado.innerHTML += `
      <div class="card">
        <img src="${anime.images.jpg.image_url}">
        <h2>${anime.title}</h2>
        <p>${anime.synopsis || "Sem descrição"}</p>
      </div>
    `;
  });
}