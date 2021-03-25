# Manual de instalción

**Prerequisitos:**

- entorno de ejecución [node.js](https://nodejs.org/es/download/)
- sistema de gestión de paquetes [npm](https://www.npmjs.com/get-npm)

## Paso a paso instalación

1.  Clonar el repositorio [https://github.com/brevetdev/edldd](https://github.com/brevetdev/edldd)

`
git clone https://github.com/brevetdev/edldd
`

Una vez clonado el repositorio usted tendrá los siguientes archivos:

![carpetas repositorio](https://edldd.s3.us-east-2.amazonaws.com/manual/03.png)

2. Instalar las dependencias

`
npm i
`

3. Ejecutar la app en entorno local

`
npm start
`

Una vez ejecutado el comando para iniciar la app se rebe recibir una notificación de compilación correcta **Compiled successfully!** y ruta de acceso por el puerto público.

![Compiled successfully!](https://edldd.s3.us-east-2.amazonaws.com/manual/04.png)

4. Compilar la carpeta **./build** para cargar a un servidor

`
npm deploy
`