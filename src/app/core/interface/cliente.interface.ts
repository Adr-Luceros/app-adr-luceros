import { ClienteModel } from "./backend/cliente.model";

export class Cliente {
    
    static fromBackend(obj: ClienteModel){
        return new this(
            obj.id_person,
            `${obj.name} ${obj.lastname}`,
            obj.DNI,
            obj.cellphone,
            obj.direccion,
            obj.sexo,
        )
    }

    static init(){
        return new this(
            0,
            '',
            '',
            '',
            '',
            '',
        )
    }

    constructor(
        public id: number,
        public fullName: string,
        public DNI: string,
        public cellphone: string,
        public adreess: string,
        public sex: string,
    ){}
}