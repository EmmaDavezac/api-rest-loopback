import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Carrito } from './carrito.model';

@model({settings: {strict: false}})
export class Articulo extends Entity {
  @property({
    type: 'string',
  })
  Descripcion?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @property({
    type: 'string',
  })
  Codigo?: string;

  @property({
    type: 'number',
  })
  Costo?: number;

  @belongsTo(() => Carrito)
  carritoId: string; // Esto define la relación de pertenencia al carrito

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Articulo>) {
    super(data);
  }
}

export interface ArticuloRelations {
  // @belongsTo(() => Carrito)
  // carritoId: string; // Esto define la relación de pertenencia al carrito
  
}

export type ArticuloWithRelations = Articulo & ArticuloRelations;
