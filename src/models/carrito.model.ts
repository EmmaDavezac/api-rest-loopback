import {Entity, model, property, hasMany} from '@loopback/repository';
import { Articulo } from './articulo.model';

@model({settings: {strict: false}})
export class Carrito extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Usuario: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  ListaArticulos?: string[];
  
  @hasMany(() => Articulo)
  articulos: Articulo[]; // Esto define que un carrito puede tener muchos artículos

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Carrito>) {
    super(data);
  }
}

export interface CarritoRelations {
  // describe navigational properties here
}

export type CarritoWithRelations = Carrito & CarritoRelations;
