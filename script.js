// Função para alternar entre as seções do projeto
function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove a classe ativa de todos os botões
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => {
        btn.classList.remove('active-btn');
    });

    // Mostra a seção selecionada
    document.getElementById(sectionId).classList.add('active');
    
    // Destaca o botão clicado (encontra pelo texto ou onclick, forma simplificada)
    event.target.classList.add('active-btn');
}

// Função do Simulador de Impacto para a Cultura da Soja
function calcularImpacto() {
    const hectares = parseFloat(document.getElementById('hectares').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, insira um valor válido de hectares (maior que 0).");
        resultadoDiv.style.display = 'none';
        return;
    }

    // Projeções baseadas nas metas do projeto (valores estimados)
    const aumentoProdutividadeKg = hectares * 540; // ~9 sacas/ha * 60kg
    const carbonoSequestradoTon = hectares * 2.5;  // 2.5 ton CO2eq/ha/ano
    const economiaInsumosReais = hectares * 450;   // R$ 450,00/ha em bioinsumos
    const nascentesProtegidas = Math.ceil(hectares / 50); // 1 nascente a cada 50ha

    // Exibe os resultados formatados
    resultadoDiv.innerHTML = `
        <h3>📈 Projeção para ${hectares} hectares de soja:</h3>
        <p>🌾 Aumento de Produtividade: +${aumentoProdutividadeKg.toLocaleString('pt-BR')} kg/safra</p>
        <p>🌳 Carbono Sequestrado: ${carbonoSequestradoTon.toLocaleString('pt-BR')} toneladas de CO2eq/ano</p>
        <p>💰 Economia Estimada com Insumos: R$ ${economiaInsumosReais.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
        <p>💧 Nascentes Protegidas/Recuperadas: ~${nascentesProtegidas}</p>
    `;
    
    resultadoDiv.style.display = 'block';
}

// Inicializa a primeira seção como ativa ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('nav button').classList.add('active-btn');
});
