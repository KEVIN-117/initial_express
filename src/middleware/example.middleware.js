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
  if (err) return res.status(500).json({message: err.message})
  res.status(200).json({message:'success'})
  next(err)
}

export const errorHandler = (err, req, res, next) => {
  if (err) return res.status(500).json({message: err.message, stack : err.stack})
  res.json({message:'success'})
}
