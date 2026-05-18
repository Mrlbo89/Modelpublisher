async function publishModel() {
  const modelName = document.getElementById("modelName").value;
  const modelFile = document.getElementById("modelFile").files[0];
  const status = document.getElementById("status");

  if (!modelName || !modelFile) {
    status.innerHTML = "Preencha tudo.";
    return;
  }

  status.innerHTML = "Enviando modelo...";

  try {

    // Aqui entraria a API oficial do Roblox Open Cloud
    // NÃO use cookies .ROBLOSECURITY

    await new Promise(resolve => setTimeout(resolve, 3000));

    const fakeAssetId = Math.floor(Math.random() * 999999999);

    status.innerHTML = `
      ✅ Modelo publicado com sucesso!<br><br>
      Link:<br>
      https://create.roblox.com/store/asset/${fakeAssetId}
    `;

  } catch (err) {
    status.innerHTML = "Erro ao publicar.";
  }
}
