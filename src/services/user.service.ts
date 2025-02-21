import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

export class usersService {

    constructor() {}

    getAll() {
        return UserRepository.getAll();
    }

    getById(id: number) {
        return UserRepository.getById(id);
    }

    getByEmailAndPassword(email: string, password: string){
        return UserRepository.findByEmailAndPassword(email, password);
    }

    create(user: User) {
        return UserRepository.create(user);
    }

    async update(
        isAdmin: boolean,
        name: string, 
        email: string,
        password: string,
        cpf: string,
        birthDate: Date | string, 
        id: string
        ) {
        const user = await UserRepository.getById(parseInt(id));
        if(user) {
            await UserRepository.update(parseInt(id), { isAdmin, name, email, password, cpf, birthDate });
            return true;
        } else {
            return false;
        }
    }

    async remove(id: string) {
        const user = await UserRepository.getById(parseInt(id));
        if (user) {
            await UserRepository.remove(parseInt(id));
            return true;
        } else {
            return false;
        }
    }
}