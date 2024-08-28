import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Medico } from './medico.entity.js'; // Importa la entidad Doctor

@Entity()
export class Horario {
  @PrimaryKey()
  id!: number;

  @Property()
  diaSemana!: string; // Puede ser Lunes, Martes, etc.

  @Property()
  horaInicio!: string; // Hora de inicio como string (formato HH:mm)

  @Property()
  horaFin!: string; // Hora de fin como string (formato HH:mm)

  @ManyToOne(() => Medico)
  doctor!: Medico;
}
