const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const securityHandler = require('./middlewares/security.handler');

const app = express();
const port = process.env.PORT || 3000;

const whitelist = ['http://localhost:8080', 'http://127.0.0.1:5500', 'https://myapp.bo'];
const options = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
};

app.use(cors(options));
app.use(express.json());

// Aplicamos el middleware de seguridad
securityHandler(app);

app.get("/api/", (req, res) => {
  res.send("mi servidor Express");
});

routerApi(app);

// Middlewares de manejo de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
