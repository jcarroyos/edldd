# Manual Técnico

Esta aplicación utiliza el [_framework React.js_](https://es.reactjs.org/), biblioteca open Source que sirve para la creación de la interfaz de usuario en una sola página (Single Page Application). 

## Estructura de los archivos

### ![folder](https://github.githubassets.com/images/icons/emoji/unicode/1f4c1.png?v8) ./build

Esta carpeta contiene el resultado de la compilación de la solución para un entorno de servidor estático, esta carpeta se actualiza al ejecutar desde la carpeta raiz de la solución el comando:
```
$ npm run deploy
```

`npm run build` crea una compilación de la app. Configura el servidor HTTP para que un visitante reciba el index.html y solicite rutas estáticas. Para más indormación sobre la creación de compilación para ambiente de producción visite [https://create-react-app.dev/docs/production-build](https://create-react-app.dev/docs/production-build).

### ![folder](https://github.githubassets.com/images/icons/emoji/unicode/1f4c1.png?v8) ./docs

Es una copia exácta de la carpeta `./build` que se crea específicamente para desplegar la solución en el ambiente de pruebas de gh-pages.
```
$ npm run gh-pages
```
### ![folder](https://github.githubassets.com/images/icons/emoji/unicode/1f4c1.png?v8) ./node_modules

La carpeta `./node_modules` es un directorio que se crea en la carpeta raíz del proyecto cuando se ejecuta la instalación de paquetes o dependencias mediante npm.

### ![folder](https://github.githubassets.com/images/icons/emoji/unicode/1f4c1.png?v8) ./public

La carpeta `./public` contiene el archivo `index.html` donde se establece el título de la página, metadatos y menu de navegación. La etiqueta con el código compilado se agregará automáticamente durante el proceso de compilación.

### ![folder](https://github.githubassets.com/images/icons/emoji/unicode/1f4c1.png?v8) ./src

Esta es la carpeta con el código principal de la solución, el código fuente esta fragmentado en archivos individuales .js para cada funcionalidad de la aplicación. 

`./src/data.json`: archivo con los datos, textos y enlaces a recursos multimedia que se presentan en la app.


`./src/index.js`: es el punto de entrada de JavaScript.

`./src/style.scss`: Archivo de hoja de estilos que se compilará en `style.css`, contiene los selectores y pseudo-selectores que agrupan las reglas de estilo visual que son aplicadas en la app.


**Subdirectorios:**

-  `./src/Components/PageAnimation/` gestiona las funcionalides de secciones con capas gráficas animadas. Puede crear subdirectorios dentro de src. Para reconstrucciones más rápidas, webpack solo procesa los archivos dentro de src. Debe colocar los archivos JS y CSS dentro de src, de lo contrario, el paquete web no los verá.
- `./src/Components/Seccion/` gestiona cada uno de los tipos de contenido, los las plantillas para cada tipo de sección y muestra los contenidos de `.data.json` en la estructura visual correspondiente.
- `./src/helpers/` gestiona las funcionalidades generales de la solución y las acciones de interfaz de usuario.
