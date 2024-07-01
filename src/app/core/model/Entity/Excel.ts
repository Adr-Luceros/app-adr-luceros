export class CamionExcel {
    id: number | null = null;
    placa: string | null = null;
    marca: string | null = null;
    tc: string | null = null;
    soat: string | null = null;
}

export class PickingExcel {
    id: number | null = null;
    nroPicking: number | null = null;
    fechaCreacion: string | null = null;
    volumen: number | null = null;
}

export class TipoExcel {
    id: number | null = null;
    nombreTipo: string | null = null;
}

export class FleteExcel {
    id: number | null = null;
    volumenViaje: number | null = null;
    guia: string | null = null;
    picking: PickingExcel = new PickingExcel();
    ruta: string | null = null;
    tipo: TipoExcel = new TipoExcel();
}

export class TiendaExcel {
    id: number | null = null;
    psEx: string | null = null;
    destinatario: string | null = null;
    nombreTienda: string | null = null;
    distrito: string | null = null;
    direccion: string | null = null;
    horaInicio: string | null = null;
    horaFin: string | null = null;
    contacto: string | null = null;
}

export class EntregaExcel {
    id: number | null = null;
    observaciones: string | null = null;
    tienda: TiendaExcel = new TiendaExcel();
    estadoEntrega: string | null = null;
}

export class PersonalExcel {
    personal_id: number | null = null;
    nombre: string | null = null;
    telefono: string | null = null;
    nroDocumento: string | null = null;
    tipoDocumento: string | null = null;
}

export class RolCargoExcel {
    rolcargo_id: number | null = null;
    nombre: string | null = null;
}

export class CargoExcel {
    cargo_id: number | null = null;
    personal: PersonalExcel = new PersonalExcel();
    rolCargo: RolCargoExcel = new RolCargoExcel();
}

export class ViajeExcel {
    id: number | null = null;
    fechaDeSalida: string | null = null;
    almacen: string | null = null;
    camion: CamionExcel = new CamionExcel();
    fletes: FleteExcel[] = [];
    entregas: EntregaExcel[] = [];
    cargos: CargoExcel[] = [];
}
