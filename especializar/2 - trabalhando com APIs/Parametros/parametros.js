/*
 * Parâmetros nas requisições
 * Formas de passar para dentro do código informações
 * que não estavam lá antes
 * 
 * 3 principais formas de pegar tais informações:
 * 
 * app.route('/').get((req, res) => res.send(req.query.name))
 * 
 * app.route('/').put((req, res) => res.send(req.body.author))
 * 
 * app.route('/:parametro').get((req, res) => res.send(req.params.parametro))
 */

/*
 * Tipos de parâmetros:
 * 
 * 
 * BODY:
 * É uma forma de enviar informações para a API,
 * mas as informações não vão ficar na URL, 
 * vão ficar escondidas e serem enviadas no corpo da requisição
 * POST, PUT e PATCH são os verbos que aceitam o BODY
 * 
 * 
 * ROUTE:
 * Forma de enviar informações através da rota
 * 
 * 
 * QUERY:
 * Forma de passar os parâmetros através da URL
 */
