import {
    Entity,
    PrimaryKey,
    Property,
    OneToMany,
    Collection,
  } from '@mikro-orm/core';

//import { Horario } from './Horario'; // Importa la entidad Horario
//import { Turno } from './Turno'; // Importa la entidad Turno

@Entity()
export class Medico {
  @PrimaryKey()
  id!: number;

  @Property()
  nombre!: string;

  @Property()
  especialidad!: string;

  @Property()
  email!: string;

  @Property()
  telefono!: string;

//   @OneToMany(() => Horario, (horario) => horario.doctor)
//   horarios = new Collection<Horario>(this);

//   @OneToMany(() => Turno, (turno) => turno.doctor)
//   turnos = new Collection<Turno>(this);
}