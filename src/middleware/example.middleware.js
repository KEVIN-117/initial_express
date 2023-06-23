/**
 * ?¿Qué son los Middlewares?
 * estan en medio del req y res  es decir actuan como intermediarios ante una solicitud de entreara (request) y una solicictud de salida (response)
 * permitiendo realizar diversas acciones antes de que la solicitud llegue a su destino final
 * los Middlewares son utilizados pora extender la funcionalidad de la apliacacion y permitir el procesaamineto de solicitudes de manera modular
 * cada midleware puede realizar tareas especificas, tales como validar, transformar datos, autenticar, gestionar y manejar errores
 * existen dos tipos de middlewar y al unica diferencia es el numero de parametros
 * * -> const middlewareTipoUno => (req, res, next){}
 *  en el ejemplo anterios el mildware resive el next esto ara que siga ejecutando el siguiente midleware, ya los middleware se ejecutan de manera secuencial
 * * -> const middlewareTipoDos => (err, req, res, next){ //midleware de tipo error
 *  en el ejemplo anterios recive como parametro err lo que no permitira desde ya controlar los errores
 * }
 * */


//middlewares para HttpErrors

export const logError = (err, req, res, next) => {
  if (err) return res.status(500).json({ message: err.message });
  res.status(200).json({ message: 'success' });
  next(err);
};

export const errorHandler = (err, req, res, next) => {
  if (err)
    return res.status(500).json({ message: err.message, stack: err.stack });
  res.json({ message: 'success' });
};

export const boomHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
};

/***
 * Algunios middlewares mas populares be express son:
 * *-> CORS: es una herramienta útil para gestionar las políticas de intercambio de recursos entre dominios diferentes en una aplicación web. Ayuda a evitar los problemas de seguridad relacionados con las solicitudes de recursos desde orígenes no autorizados y permite un intercambio de recursos controlado y seguro entre dominios específicos.
 * @link http://expressjs.com/en/resources/middleware/cors.html
 *
 * *->Morgan:  Morgan es un middleware de registro para Express que facilita el registro de información sobre las solicitudes y respuestas HTTP en una aplicación web. Ayuda en el desarrollo, la depuración y el monitoreo de aplicaciones al proporcionar registros claros y detallados de las interacciones del servidor.
 * @link http://expressjs.com/en/resources/middleware/morgan.html
 *
 * *-> Helmet: Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar!
 * @link https://github.com/helmetjs/helmet
 *
 * *->Express Debug: Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando.
 * @link https://github.com/devoidfury/express-debug
 *
 * *-> Express Slash: Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas.
 * @link https://github.com/ericf/express-slash
 *
 * *-> Passport: Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones.
 * @link https://github.com/jaredhanson/passport
 * *->Puedes encontrar más middlewares populares en el siguiente enlace:
 * @link http://expressjs.com/en/resources/middleware.html
 */

/**
 *@Title Consideraciones para producción
 * para poner una app en la web se deben de tomar ciertas concideraciones en cuneta:
 * * 1-> cors: que acceso a quien le damos acceso para las solicitudes
 * * 2-> https: se recomienda que la api-rest este sobre un servidor https, porque la coneccion esta sifrada
 * * 3-> procesos de build: Se ve en procesos que cosas que tiene procesar información (typescript)
 * * 4-> remover logs: no es bueno tener logs es decir (console.log()) debido a que pueden demorar a la app
 * * 5-> seguridad (Helmet): Muy importante la seguridad y para esto se recomienda helmet que es una colección de Middleware que colocan capas de segridad a la aplicación
 * * 6-> Testing: Correr prebas unitarias o de integración antes de salir de producción
 *
 * Algo muy comun es un problema de cors, (CORS) intercambio de recursos de origen cruzado (CORS), esto siginifica que nuestros servidores tienen una seguridad por defecto, es decir que solo aceptan peticiones desde su mismo origen o dominio
 */
