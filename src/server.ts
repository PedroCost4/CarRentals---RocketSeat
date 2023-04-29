import express from 'express';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);



const PORT = process.env.PORT || 3333;

app.listen(PORT,() => { console.log(`Server started on port ${PORT}!`)})