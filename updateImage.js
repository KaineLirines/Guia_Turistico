const fs = require('fs');
const { Atrativos } = require('./src/models'); // ajuste o caminho para o seu arquivo de modelo

async function atualizarImagem() {
  try {
    const imagePath = "C:\Users\Cesarh\OneDrive\Desktop\regiao_norte.jpg";
    const imageData = fs.readFileSync(imagePath);

    const result = await Atrativos.update(
      { foto: imageData },
      { where: { id: 5} }
    );

    console.log('Imagem atualizada com sucesso:', result);
  } catch (err) {
    console.error('Erro ao atualizar a imagem:', err);
  }
}

atualizarImagem();
