export interface Juego{
    nombre: string;
    favoritos: Favorito[];
}

export interface Favorito{
    id: number;
    nombre: string;
}