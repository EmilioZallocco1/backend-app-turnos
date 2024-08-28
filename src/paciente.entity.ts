import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
//import { Turno } from './Turno';  // Importa la entidad Turno si existe en tu proyecto

@Entity()
export class Paciente {

  @PrimaryKey()
  id!: number;

  @Property()
  nombre!: string;

  @Property()
  fechaNacimiento!: Date;

  @Property()
  email!: string;

  @Property()
  telefono!: string;

//   @OneToMany(() => Turno, turno => turno.paciente)
//   turnos = new Collection<Turno>(this);
}
