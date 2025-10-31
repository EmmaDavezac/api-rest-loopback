import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongodb2DataSource} from '../datasources';
import {Articulo, ArticuloRelations} from '../models';

export class ArticuloRepository extends DefaultCrudRepository<
  Articulo,
  typeof Articulo.prototype.ID,
  ArticuloRelations
> {
  constructor(
    @inject('datasources.DatasourceMongodb2') dataSource: DatasourceMongodb2DataSource,
  ) {
    super(Articulo, dataSource);
  }
}
