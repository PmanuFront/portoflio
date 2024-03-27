export interface Technologie {
    name: string;
    type: TechType;
}

export enum TechType {
    "LP" = "Lenguajes",
    "F" = "Frontend",
    "B" = "Backend",
    "BD" = "Base_Datos",
    "C" = "Control_Versiones",
    "O" = "Otros"
}