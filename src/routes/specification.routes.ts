import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes
.post("/", (req, res) => {
    const { name, description } = req.body;
    const createSpecificationService = new CreateSpecificationService(specificationsRepository);
    createSpecificationService.execute({ name, description });
    return res.status(201).send();
})
.get ( "/", (req, res) => {
    const allSpecifications = specificationsRepository.list();

    return res.json(allSpecifications);
});

export { specificationsRoutes };
