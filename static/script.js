async function carregarPerguntas() {
    
    const listaElemento = document.getElementById('lista-perguntas');
    
    // pra mostrar ao usuário que as perguntas estão sendo carregadas
    listaElemento.innerHTML = '<p>Carregando perguntas...</p>';

    try {
        const resposta = await fetch('/perguntas');

        // verificando erro no servidor
        if (!resposta.ok) {
            throw new Error('O servidor retornou um erro!');
        }

        const perguntas = await resposta.json();

        listaElemento.innerHTML = '';

        perguntas.forEach(pergunta => {
            
            // vamos fazer cada pergunta, que vem acompanhada de sua dificuldade, categoria, e resposta correta, dentro de um cartão
            const htmlDoCartao = `
                <div class="card">
                    <span class="dificuldade ${pergunta.difficulty}">
                        ${pergunta.difficulty.toUpperCase()}
                    </span>
                    
                    <h3>${pergunta.category}</h3>
                    <p>${pergunta.question}</p>
                    
                    <div style="margin-top: 10px; font-size: 0.9em; color: #666;">
                        <strong>Resposta Correta:</strong> ${pergunta.correct_answer}
                    </div>
                </div>
            `;

            // feito o cartão, adicionamos ao html da tela
            listaElemento.innerHTML += htmlDoCartao;
        });

    } catch (erro) {
        // em caso dê erro, mostramos uma mensagem pro usuário
        console.error(erro);
        listaElemento.innerHTML = '<pErro ao buscar as perguntas.</p>';
    }
}
async function carregarFavoritas() {
    const listaElemento = document.getElementById('lista-perguntas');
    listaElemento.innerHTML = '<p>Carregando as favoritas do Lucas..</p>';

    try {
        const resposta = await fetch('/perguntasqueolucasgosta');
        const perguntas = await resposta.json();

        listaElemento.innerHTML = '';

        perguntas.forEach(pergunta => {
            const htmlDoCartao = `
                <div class="card" style="border-left: 5px solid #6f42c1;">
                    <span class="dificuldade ${pergunta.difficulty}">
                        ${pergunta.difficulty.toUpperCase()}
                    </span>
                    
                    <h3>${pergunta.category}</h3>
                    <p>${pergunta.question}</p>
                    <div style="margin-top: 10px; font-size: 0.9em; color: #666;">
                        <strong>Resposta:</strong> ${pergunta.correct_answer}
                    </div>
                </div>
            `;
            listaElemento.innerHTML += htmlDoCartao;
        });

    } catch (erro) {
        console.error(erro);
        listaElemento.innerHTML = '<pErro ao buscar as perguntas.</p>';
    }
}