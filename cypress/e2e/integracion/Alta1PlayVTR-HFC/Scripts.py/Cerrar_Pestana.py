from flask import Flask, render_template_string
import threading
import time

app = Flask(__name__)

# Variable de control para saber si se presionó "OK"
ok_pressed = False

@app.route("/")
def index():
    return render_template_string("""
        <html>
        <head>
            <title>Pausa en Prueba</title>
            <script>
                function enviarConfirmacion() {
                    fetch('/confirm', { method: 'POST' }).then(() => {
                        document.body.innerHTML = "<h2>Continuando prueba...</h2>";
                    });
                }
            </script>
        </head>
        <body style="text-align: center; font-family: Arial, sans-serif;">
            <h2> Prueba en pausa</h2>
            <p>Presiona "OK" para continuar</p>
            <button onclick="enviarConfirmacion()" style="
                background: #007bff; color: white; padding: 10px 20px;
                border: none; cursor: pointer; border-radius: 5px;">
                OK
            </button>
        </body>
        </html>
    """)

@app.route("/confirm", methods=["POST"])
def confirm():
    global ok_pressed
    ok_pressed = True
    return "OK"

def run_server():
    app.run(port=5001, debug=False, use_reloader=False)

# Iniciar el servidor en un hilo
threading.Thread(target=run_server, daemon=True).start()

# Esperar a que el usuario haga clic en "OK"
while not ok_pressed:
    time.sleep(1)

print("Continuando con la prueba en Cypress...")
