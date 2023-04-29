import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository"

interface IReq {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {

    constructor( private specificationRepository: SpecificationsRepository ) {}

    execute ({ name, description }: IReq): void{
        const specificationAlreadyExists = this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) { throw new Error("Specification already exists!"); }

        this.specificationRepository.create({name, description });


    }

}

export { CreateSpecificationUseCase }