import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { Category } from "../../model/Category";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    handle(req: Request, res: Response): Response {
        const allCategories : Category[] = this.listCategoriesUseCase.execute();

        return res.json(allCategories);
    }
}

export { ListCategoriesController }