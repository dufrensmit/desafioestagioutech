# desafioestagioutech
Desafio para o processo seletivo para estágio na empresa UTech

Backend: feito com Python 3 e Flask
Frontend: HTML5, CSS3 e JavaScript
Comunicação: API REST com a biblioteca 'requests'

Há 2 rotas do backend para o frontend:
  1. A padrão do desafio. que retorna 3 perguntas fáceis, 2 médias e 1 difícil da API Tryvia (/perguntas)
  2. A que eu inventei, que retorna apenas as perguntas das minhas categorias favoritas (/perguntasqueolucasgosta)

COMO RODAR O PROJETO (em um ambiente Linux):

  digite no terminal (seja no linux em si ou na sua IDE): 
        
        sudo apt update
        sudo apt install python3-pip python3-venv

        git clone [https://github.com/dufrensmit/desafioestagioutech]
        cd desafioestagioutech

        crie a pasta venv:
            python3 -m venv venv

        source venv/bin/activate
  
        pip install -r requirements.txt

        python3 app.py

   acesse no seu navegador:
        
        http://127.0.0.1:5000

#projeto por Lucas Martins Lowen
