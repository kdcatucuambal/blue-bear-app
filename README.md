# Blue Bear App - Prueba técnica Ionic - Kevin Catucuamba
Se muestran los pasos para la instalación y ejecución de la aplicación de prueba técnica de Blue Bear.


## Tecnologías utilizadas
- Amazon Cognito para la autenticación de usuarios.
- Amazon Api Gateway para la creación de una API REST que se conecta a funciones lambda para la logica de autenticación.
- Ionic Framework para el desarrollo de la aplicación.

## Versiones
- Node: v18.16.0
- npx: 9.5.1
- npm: 9.5.1
- ionic: 7.2.0

## Instalación
Antes de instalar la aplicación, es necesario tener instalado Node.js y npm. Asi mismo configurado el entorno SDK de Android.

1. Clonar el repositorio:

```bash
git clone 
```

2. Instalar ionic CLI

```bash
  npm install -g @ionic/cli #ultima version de ionic
```

3. Instalar las dependencias dentro de la carpeta del proyecto:

```bash
npm install
```

4. Para ejecutar la aplicación en el navegador, ejecutar el siguiente comando:

```bash
ionic serve
```

5. Para generar la APK de la aplicación, ejecutar el siguiente comando:


```bash
ionic build # Construir la aplicación web
ionic capacitor add android # Agregar la plataforma Android
ionic capacitor copy android && cd android && .\gradlew assembleDebug # Generar APK
```
## Consideraciones de la aplicación

- La aplicación valida email y password en el formulario de login.
- La contraseña debe tener al menos 8 caracteres entre letras minúsculas, mayúsculas, números y caracteres especiales.
- El email no debe estar registrado en la base de datos.
- El usuario (nombre y apellido) son unicos.
