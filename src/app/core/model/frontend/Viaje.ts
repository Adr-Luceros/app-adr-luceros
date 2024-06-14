import { Entrega, Flete, Camion } from '../../index.model.frontend'

export class Viaje {
    id: number | null = null
    fechaDeSalida: string | null = null
    almacen: string | null = null
    camion: Camion | null = null
    fletes: Flete[] | null = null
    entregas: Entrega[] | null = null
}
