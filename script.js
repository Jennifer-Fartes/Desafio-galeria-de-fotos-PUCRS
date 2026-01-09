// Dados estáticos consumindo URLs externas
const dadosFotos = [
    { nome: "Montanha", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80" },
    { nome: "Praia", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
    { nome: "Floresta", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80" },
    { nome: "Cidade", url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400&q=80" },
    { nome: "Deserto", url: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=400&q=80" },
    { nome: "Cachoeira", url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&q=80" },
    { nome: "Flores", url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80" },
    { nome: "Neve", url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=400&q=80" },
    { nome: "Pôr do Sol", url: "https://media.istockphoto.com/id/538449165/pt/foto/bela-paisagem-com-nuvens-sobre-o-mar-p%C3%B4r-do-sol-shot.jpg?s=612x612&w=0&k=20&c=01Zw-PRxdtgSgOb2NVbCb_R0rGgxQaWZgJSv_P4vhoQ=" },
    { nome: "Lago", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80" }
];

const galeria = document.getElementById('galeria');
const campoBusca = document.getElementById('campoBusca');

// Função para exibir fotos
function exibirFotos(fotosParaExibir) {
    galeria.innerHTML = ""; 

    if (fotosParaExibir.length === 0) {
        galeria.innerHTML = "<p class='mensagem-erro'>Nenhuma foto encontrada</p>"; // Requisito [cite: 44]
        return;
    }

    fotosParaExibir.forEach(foto => {
        const div = document.createElement('div');
        div.className = 'foto';
        div.innerHTML = `
            <img src="${foto.url}" alt="${foto.nome}">
            <p>${foto.nome}</p>
        `; // Nome centralizado abaixo 
        galeria.appendChild(div);
    });
}

// Busca em tempo real 
campoBusca.addEventListener('input', () => {
    const termo = campoBusca.value.toLowerCase();
    const filtradas = dadosFotos.filter(foto => 
        foto.nome.toLowerCase().includes(termo)
    );
    exibirFotos(filtradas);
});

// Inicialização
exibirFotos(dadosFotos);
