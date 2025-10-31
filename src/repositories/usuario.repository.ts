import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongodb2DataSource} from '../datasources';
import {Usuario, UsuarioRelations} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.User,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.DatasourceMongodb2') dataSource: DatasourceMongodb2DataSource,
  ) {
    super(Usuario, dataSource);
  }
}
