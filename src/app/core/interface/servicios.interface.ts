import { ServiciosModel } from './backend/servicios.model'

export class Servicios {
    static fromBackend(obj: ServiciosModel) {
        return new this(
            obj.id,
            obj.nombre,
            obj.costo,
            obj.descripcion
        )
    }

    static init() {
        return new this(
            0,
            '',
            0,
            ''
        )
    }

    constructor(
        public id: number,
        public name: string,
        public price: number,
        public description: string
    ){}
}