import os
import glob

# Rutas de las carpetas de Cypress
screenshots_folder = "cypress/screenshots"
videos_folder = "cypress/videos"

# Función para eliminar archivos específicos en una carpeta
def eliminar_archivos(carpeta, extension="*"):
    if os.path.exists(carpeta):
        archivos = glob.glob(os.path.join(carpeta, f"*.{extension}"))
        for archivo in archivos:
            try:
                os.remove(archivo)
                print(f"Archivo eliminado: {archivo}")
            except Exception as e:
                print(f"Error al eliminar {archivo}: {e}")
    else:
        print(f"La carpeta {carpeta} no existe.")

# Eliminar capturas de pantalla (.png) y videos (.mp4)
eliminar_archivos(screenshots_folder, "png")
eliminar_archivos(videos_folder, "mp4")

print("Eliminacion de archivos completada.")
