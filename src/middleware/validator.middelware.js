import Boom from 'boom';

export const validateSchema = (schema, property) => (req, res, next) => {

  const data = req[property]// de esta manera se coinvierte en dimamico, porque la necesidad
    /**
     * *la infromacion dentro de un req no siempre viene en diferentes lugares depoende de que naya a ser:
     * *-> en el caso de un Post la informacion viene en req.body
     * *-> en el caso de de Get la informacion viene en req.params o req.query, para acceder a algun dato en especifico seria req.query.atributo
     * *-> en el caso de Delete DELETE, Puede enviarse como parámetros en la URL, similar a una solicitud GET, o puede enviarse en el cuerpo de la solicitud, similar a una solicitud POST. puede depender de la configuración del servidor o del diseño de la API específica.
     * *-> en el caso de Put es similar a una solicitut Post
     * *-> en el caso de Patch es similar a una solicit Post
     */
    const { error } = schema.validate(data, {abortEarly: false});
    if (error) {
      next(Boom.badRequest(error.message));
    }
    next()
};
