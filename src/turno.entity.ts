import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
// import { Doctor } from './Doctor'; // Importa la entidad Doctor
// import { Paciente } from './Paciente'; // Importa la entidad Paciente

@Entity()
export class Turno {
  @PrimaryKey()
  id!: number;

  @Property()
  fecha!: Date;

  @Property()
  hora!: string; // Hora como string (formato HH:mm), puedes usar otro tipo si prefieres manejar tiempos de otra manera

//   @ManyToOne(() => Doctor)
//   doctor!: Doctor;

//   @ManyToOne(() => Paciente)
//   paciente!: Paciente;

  @Property()
  estado!: string; // Estado del turno (Pendiente, Confirmado, Cancelado, etc.)
}
