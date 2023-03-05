import { ISpecificationsRepository, ICreateSpecificationDTO } from "./ISpecificationsRepository";
import { Specification } from "../model/Specification";

class SpecificationsRepository implements ISpecificationsRepository { 
    private specifications : Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specifications = new Specification();

        Object.assign(specifications, {
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specifications);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }

    list() {
        return this.specifications;
    }

    
}

export { SpecificationsRepository }
    