import { ISpecificationsRepository } from "../repositories/interfaces/ISpecificationsRepository";

interface IReq {
    name: string;
    description: string;
}

class CreateSpecificationService {

    constructor (private SpecificationsRepository: ISpecificationsRepository) {}

    execute ({ name, description }: IReq): void{
        const specificationAlreadyExists = this.SpecificationsRepository.findByName(name);

        if (specificationAlreadyExists) { throw new Error("Specification already exists!"); }

        this.SpecificationsRepository.create({name, description });
    }

}

export {CreateSpecificationService}