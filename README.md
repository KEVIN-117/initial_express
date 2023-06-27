# BACKEND CON NODE JS UTILIZANDO EXPRESS

- Algunos conceptos muy importantes a tomar en cuenta son

  - <details><summary>backend </summary>
      - que es el backend ?:

      - el backend  es la parte de la aplicacion en donde se realiza toda la logica del negocio tales como validaciones, conecatrse a una base de datos y atender a la petiones del cliente (frontend )
      - sentrandonos mas en el contecto de la web el backend esta compuesto por: 
          - lenguajes de programacion
          - frameworks y librerias que facilitan el desarrollo y gestion de la logica del backend
          - sistemas de gestion de base de datos
          - herrmientas para la gestion de la infrastructura del servidor
          - Apis y servicios que permiten la comuhnicacion con sistemas externos o incluso con el cliente
  </details>

  - <details><summary>node js</summary>
      - que es Node.js? 
      
      - node js es un entorno de ejecucion de javascript en el servidor
        
    </details>
  - <details><summary>express js</summary>
        - Espers en un framework de la web para node js que nos ayuda en la contruccion de applicaicones web y tambies APIS
        - Express proporciona una capa de abstraccion para el modulo <HTTP> que viene integrado en node js, proporciona una serie de carcateristicas y funcionalidades que facilitan el manejo de rutas el manejo de solicitude y repuestas <HTTP> el enrutado, renderizado de vistas y el manejo de middlewares entre otros mas
    </details>
  - A continuacion se explicara la forma en la cual debe ir organizado el proyecto y tambien manejaremos el principio de <una sola reponsabilidad>

## Lista del Proyecto
```
./node_modules
./src/
  |___|controllers
      |___ <file name>.controller.js
      middleware
      |___ <file name>.middleware.js
      router
      |___ <file name>.routes.js
      schemas
      |___ <file name>.schema.js
      services
      |___ <file name>.service.js
      app.js
      index.html
      index.js
.editorconfig
.env
.eslintrc.json
.gitignore
dockerfile
main.ps1
package.json
README.md
vercel.json
yarn-error.log
yarn.lock
```
### Esplicaicon del arbol de directorios y archivos que se presentan en anteriormente
- iniciaremos con:
  - node_modules: node modules se utiliza para guardadr las dependecnias y modulos que puede necesitar el proyecto durante su desarrollo

  - src: es donde se encuentra todo el codigo de nuetra aplicacion
    - controladores <controllers>: los controladores son los que se encargan de gestionar la logica las rutas de esta manera pemitir una mejor organizacion y la reutilizacion de codigo, sin la ayuda de los controladores las rutas irian directamnete donde estan las rutas originales lo que aria que nuestro codigo se vea desordenado y no estarimoa cumpliendo con el <principio de responsabilidad unica>
    - para los controladores se recomienda la siguiente convenciona de nombres
    
    ```
    <nombre del archivo>.controllers.js
    ```
    - middlewares: Los <middlewares> estan en medio del <req> y el <res>, es decir actuan como intermediarios ante una solicitud <HTTP> de esntrada conocido como (request) o <req> y una solicitud <HTTP> de salida conocido como (response) o <res>, de esta manera poder realizar multiples acciones antes de que la solicitud llegue a su destino final 
    - Los middlewares son utilizados para extender la funcionalidad de la aplicacion y permitir el el procesamineto de solicitudes HTTP de nuestra aplicacion de manera mas mdular
    - cada midleware puede realizar tareas especificas, tales como validar, transformar datos, autenticar, gestionar y manejar errores
    - existen dos tipos de middlewar y al unica diferencia es el numero de parametros
    - el mildware resive el next esto ara que siga ejecutando el siguiente midleware, ya los middleware se ejecutan de manera secuencial
    ```
    const middlewareTipoUno => (req, res, next){}
    ```
    - en el ejemplo anterios recive como parametro err lo que no permitira desde ya controlar los errores <> niddleware de tipo error
    ```
    const middlewareTipoDos => (err, req, res, next){
      //code
    }
    ```
  - Alginos middlewares mas concosidos de Express son:
    - [CORS](http://expressjs.com/en/resources/middleware/cors.html): es una herramienta útil para gestionar las políticas de intercambio de recursos entre dominios diferentes en una aplicación web. Ayuda a evitar los problemas de seguridad relacionados con las solicitudes de recursos desde orígenes no autorizados y permite un intercambio de recursos controlado y seguro entre dominios específicos.
    - [Morgan](http://expressjs.com/en/resources/middleware/morgan.html):  Morgan es un middleware de registro para Express que facilita el registro de información sobre las solicitudes y respuestas HTTP en una aplicación web. Ayuda en el desarrollo, la depuración y el monitoreo de aplicaciones al proporcionar registros claros y detallados de las interacciones del servidor.

    - [Helmet](https://github.com/helmetjs/helmet): Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar!

    - [Express Debug](https://github.com/devoidfury/express-debug): Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando.

    - [Express Slash](https://github.com/ericf/express-slash): Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas.

    - [Passport](https://github.com/jaredhanson/passport): Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones

    - [Puedes encontrar más middlewares populares en el siguiente enlace](http://expressjs.com/en/resources/middleware.html)

#### Consideraciones para producción
- para poner una app en la web se deben de tomar ciertas concideraciones en cuneta:
  - 1-> cors: que acceso a quien le damos acceso para las solicitudes
  - 2-> https: se recomienda que la api-rest este sobre un servidor https, porque la coneccion esta sifrada
  - 3-> procesos de build: Se ve en procesos que cosas que tiene procesar información (typescript)
  -  4-> remover logs: no es bueno tener logs es decir (console.log()) debido a que pueden demorar a la app
  -  5-> seguridad (Helmet): Muy importante la seguridad y para esto se recomienda helmet que es una colección de Middleware que colocan capas de segridad a la aplicación
  - 6-> Testing: Correr prebas unitarias o de integración antes de salir de producción
  <Importante>: Algo muy comun es un problema de cors, (CORS) intercambio de recursos de origen cruzado (CORS), esto siginifica que nuestros servidores tienen una seguridad por defecto, es decir que solo aceptan peticiones desde su mismo origen o dominio

- se recomienda
```
<nombre del archivo>.middleware.js
```

- router: 




