const helmet = require('helmet');

function securityHandler(app) {
  app.use(helmet());
}

module.exports = securityHandler;
/*//¿Para qué sirve este código?
El propósito de este código es fortalecer la seguridad
 de una aplicación web de Node.js 
 al usar helmet. helmet configura 
 varios encabezados HTTP para proteger 
 la aplicación de vulnerabilidades comunes, 
 como ataques XSS, clickjacking, y sniffing de MIME type, 
 entre otros. Este código encapsula la configuración 
 de helmet en una función que puede ser 
 fácilmente aplicada a cualquier aplicación Express.*/