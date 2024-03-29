import { Router } from 'express';
import multer from 'multer';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp"
})

categoriesRoutes
    .post("/", (req, res) => {
        return createCategoryController.handle(req, res);
    })

    .get("/", (req, res) => {
        const allCategories = listCategoriesController.handle(req, res);

        return res.json(allCategories);
    })

    .post("/import", upload.single("file"), (req, res) => {
        return importCategoryController.handle(req, res);
    })

export { categoriesRoutes };