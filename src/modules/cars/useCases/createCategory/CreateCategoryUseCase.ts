import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IReq {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository){
        //this.categoriesRepository = categoriesRepository;
    }

    execute({name, description} : IReq) : void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) { throw new Error("Category already exists!"); }
        
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase }