import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specification.routes';
const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

const PORT = process.env.PORT || 3333;

app.listen(PORT,() => { console.log(`Server started on port ${PORT}!`)})