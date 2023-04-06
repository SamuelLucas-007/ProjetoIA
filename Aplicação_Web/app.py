from flask import Flask, request, jsonify
from flask_cors import CORS

from warnings import filterwarnings
from joblib import load

filterwarnings('ignore')

def importa_modelo():
    modelo = load('stacking.model')
    return modelo

app = Flask(__name__)
CORS(app)

CORS(app, origins=["http://localhost:5173"])

modelo = importa_modelo()

@app.route('/predict', methods=['POST'])
def home():

    dados_post = request.get_json()
    dados = [dados_post[i] for i in ['idade_no_primeiro_diagnostico',	'subtipo_tumoral',	'receptor_de_estrogenio',	'receptor_de_progesterona',	'ki67_percentage',	'estadio_clinico',	'classificacao_tnm_clinico_t',	'classificacao_tnm_clinico_n']]
    
    resultado = modelo.predict([ dados ])[0]
    
    dict_resp = { 0:'Adjuvante', 1:'Neoadjuvante'}
    result = dict_resp[ resultado ]
    
    return jsonify(resultado = str(result))

app.run(
    debug=True,
    port='5001'
)