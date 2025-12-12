import requests
from flask import Flask, jsonify, render_template

app = Flask(__name__)

API_URL = "https://tryvia.ptr.red/api.php"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/perguntas')
def buscar_perguntas():
    try:
        resp_facil = requests.get(API_URL, params={'amount': 3, 'difficulty': 'easy'})
        lista_facil = resp_facil.json().get('results', [])

        resp_media = requests.get(API_URL, params={'amount': 2, 'difficulty': 'medium'})
        lista_media = resp_media.json().get('results', [])

        resp_dificil = requests.get(API_URL, params={'amount': 1, 'difficulty': 'hard'})
        lista_dificil = resp_dificil.json().get('results', [])

        lista_final = lista_facil + lista_media + lista_dificil

        return jsonify(lista_final)

    except Exception as erro:
        return jsonify({"erro": "Falha ao conectar na API externa", "detalhes": str(erro)}), 500

@app.route('/perguntasqueolucasgosta')
def buscar_perguntas_do_lucas():
    try:
        resp_filmes = requests.get(API_URL, params={'amount': 1, 'category': '11'}) 
        lista_filmes = resp_filmes.json().get('results', [])

        resp_tabuleiro = requests.get(API_URL, params={'amount': 1, 'category': '16'}) 
        lista_tabuleiro = resp_tabuleiro.json().get('results', [])

        resp_videogame = requests.get(API_URL, params={'amount': 1, 'category': 15}) 
        lista_videogame = resp_videogame.json().get('results', [])

        lista_do_lucas_final = lista_filmes + lista_tabuleiro + lista_videogame
        
        return jsonify(lista_do_lucas_final)

    except Exception as erro:
        return jsonify({"erro": "Falha ao conectar na API", "detalhes": str(erro)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)