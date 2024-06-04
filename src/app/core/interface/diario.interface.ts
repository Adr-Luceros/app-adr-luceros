import { DiarioModel } from './backend/diario.model'
export class Diario {
    
    static desdeBackend(obj: DiarioModel) {
        return new this(
            obj.id,
            obj.name,
            obj.date,
            obj.done,
            obj.hour_init,
            obj.hour_end
        )
    }

    static init() {
        return new this(
            0,
            '',
            '',
            false,
            '',
            ''
        )
    }

    constructor(
        public id: number,
        public name: string,
        public date: string,
        public done: boolean,
        public hour_init: string,
        public hour_end: string,
    ){}
}