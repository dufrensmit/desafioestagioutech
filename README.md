# Desafio Estágio uTech

Desafio para o processo seletivo para estágio na empresa uTech.

## 🛠 Tecnologias
* **Backend:** Python 3 e Flask
* **Frontend:** HTML5, CSS3 e JavaScript
* **Comunicação:** API REST com a biblioteca `requests`

## 📋 Rotas da Aplicação
Há 2 rotas do Backend para o Frontend:
1.  **A padrão do desafio:** Retorna 3 perguntas fáceis, 2 médias e 1 difícil da API Tryvia (`/perguntas`).
2.  **Modo Criativo:** Retorna apenas as perguntas das minhas categorias favoritas (`/perguntasqueolucasgosta`).

---

## 🚀 Como rodar o projeto (Linux)

Digite no terminal (seja no Linux em si ou no terminal integrado do VSCode):

### 1. Instalar pré-requisitos
```bash
sudo apt update
sudo apt install python3-pip python3-venv

git clone [https://github.com/dufrensmit/desafioestagioutech](https://github.com/dufrensmit/desafioestagioutech)
cd desafioestagioutech

pip install -r requirements.txt
python3 app.py

Abra no seu navegador: http://127.0.0.1:5000
