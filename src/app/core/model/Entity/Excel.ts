export class CamionExcel {
    id: number | null = null
    placa: string | null = null
    marca: any | null = null
}

export class EntregaExcel {
    id: number | null = null
    tienda: TiendaExcel | null = null
}

export class FleteExcel {
    id: number | null = null
    picking: PickingExcel | null = null
    tipo: TipoExcel | null = null
}

export class PickingExcel {
    id: number | null = null
    nroPicking: number | null = null
    fechaCreacion: string | null = null
}

export class TiendaExcel {
    id: number | null = null
    psEx: string | null = null
    destinatario: string | null = null
    nombreTienda: string | null = null
    distrito: string | null = null
    direccion: string | null = null
    horaInicio?: string | null = null
    horaFin?: string | null = null
}

export class TipoExcel {
    id: number | null = null
    nombreTipo: string | null = null
}

export class ViajeExcel {
    id: number | null = null
    fechaDeSalida: string | null = null
    almacen: string | null = null
    camion: CamionExcel | null = null
    fletes: FleteExcel[] | null = null
    entregas: EntregaExcel[] | null = null
}