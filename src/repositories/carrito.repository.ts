import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongodb2DataSource} from '../datasources';
import {Carrito, CarritoRelations} from '../models';

export class CarritoRepository extends DefaultCrudRepository<
  Carrito,
  typeof Carrito.prototype.Id,
  CarritoRelations
> {
  constructor(
    @inject('datasources.DatasourceMongodb2') dataSource: DatasourceMongodb2DataSource,
  ) {
    super(Carrito, dataSource);
  }
}
