# Manual de usuario

La presentación visual de los contenidos se hace en modo pantalla completa, usando el plugin [fullpage.js](https://github.com/alvarotrigo/fullPage.js/) se logra un desplazamiento de pantalla completa (también como sitio web de una sola página ) y agrega controles deslizantes horizontales dentro de las secciones del sitio.

## Carga de contenidos

La app web se divide en secciones, cada sección presenta los textos y contenidos que se cargan desde un archivo estático tipo .json en la ruta [./src/data.json](/src/data.json).

Los archivos multimedia se llaman desde cualquier url pública, se recomienda el uso de *buckets* o contenedores de archivos S3 de amazom. Los contenidos iniciales cargados en la app estan en el **ARN arn:aws:s3:::edldd** con la siguiente organización por carpetas:

![carpetas aws](https://edldd.s3.us-east-2.amazonaws.com/manual/02.png)


## Tipos de contenido


### [Animada](./src/Componentes/Seccion/Animada.js)

Se usa para crear un título destacado, utiliza capas de imagen con transparecia que se cargan con transiciones y animación.

```json
  {
    "tipo": "animada",
    "titulo": "texto plano",
    "textos": [
      {
        "parrafo": "texto que admite etiquetas html"
      }
    ],
    "capas": {
      "uno": "ruta_url.png",
      "dos": "ruta_url.png",
      "tres": "ruta_url.png",
      "cuatro": "ruta_url.png",
      "cinco": "ruta_url.png"
    }
  }
```

### [Audio](./src/Componentes/Seccion/Audio.js)

Se usa para cargar archivos de audio, utiliza un reproductor react-playlist-player.

```json
  {
    "tipo": "audio",
    "audios": {
      "playlistCoverUrl": "ruta_url.png",
      "songs": [
        {
          "position": "numero_entero",
          "songName": "Paisaje Sonoro P1",
          "songUrl": "ruta_url.mp3"
        }
      ]
    },
    "ayuda": "texto que acepta etiquetas html"
    "capas": {
      "uno": "ruta_url.png",
      "dos": "ruta_url.png"
    }
  }
```

### [Mapa](./src/Componentes/Seccion/Mapa.js)

Se usa para crear una sección de tipo storymap con bloques de texto a los que corresponde una latitud y longitud en un mapa.

```json
"tipo": "mapa",
"titulo": "texto plano",
"fondo": "ruta_url.png",
"slide": [
  {
    "titulo": "texto plano",
    "descripcion": "texto que acepta etiquetas html",
    "lista": [{ "texto": "" }],
    "mapa": {
      "center": [latitud, longitud],
      "zoom": numero_entero
    }
  }
]
```

### [Normal](./src/Componentes/Seccion/Normal.js)

Se usa para crear una sección de de presentación de texto con imagen de fondo.

```json
  {
    "tipo": "normal",
    "textos": [
      {
        "parrafo": "texto html"
      }
    ],
    "fondo": "ruta_url.png",
    "capas": {
      "inferiorIzquierda": "ruta_url.png"
    }
  }
```

### [Slide](./src/Componentes/Seccion/Slide.js)

Se usa para crear una sección de de presentación de texto con rotador e imagen de fondo.

```json
  {
    "tipo": "slide",
    "fondo": "ruta_url2.png",
    "titulo": "texto plano",
    "slide": [
      {
        "titulo": "texto plano",
        "descripcion": "texto html",
        "lista": [
          { "texto": "texto plano" }
        ]
      }
    }
```

### [Tableau](./src/Componentes/Seccion/Tableau.js)

Se usa para crear insertar un _dashboard_ desde Tablau Public.

```json
  {
    "tipo": "tableau",
    "titulo": "Mapa interactivo",
    "fondo": "ruta_url.png",
    "url": "https://public.tableau.com/views/estrategias_edldd/dashboard_demo"
  }
```

### [Video](./src/Componentes/Seccion/Video.js)

Se usa para crear insertar un video.

```json
  {
    "tipo": "solovideo",
    "fondo": "",
    "video_webm": "ruta_url.webm",
    "video_mp4": "ruta_url.webm"
  },
```

## Ambiente de pruebas

Para desplegar la app en internet ambiente de pruebas se usa la característica de [GitHub Pages](https://guides.github.com/features/pages/)

1. Compile y reemplace los archivos en la carpeta docs

`
npm run deploy
`

2. Haga un commit y publique en github

`
git add .
`

`
git commit -m "compilación para ambiente de pruebas en github-pages"
`

`
git push
`

El actual sitio de pruebas esta en [https://brevetdev.github.io/edldd](https://brevetdev.github.io/edldd)
