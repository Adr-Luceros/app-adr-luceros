import { Capacidad } from "./Capacidad";

export class Camion {
    camion_id: number | null = null;
    placa: string | null = null;
    marca: string | null = null;
    tc: string | null = null;
    soat: string | null = null;
    capacidad: Capacidad = new Capacidad();
}