import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column()
    status!: string;

    @Column()
    deadline!: string;

    @Column()  //ID del usuario responsable
    responsible!: number;

    @Column({
        type: 'text', // Transformación de lista a texto para almacenamiento en BD
        transformer: {
          to: tags => JSON.stringify(tags), 
          from: tagsString => JSON.parse(tagsString) 
        }
      })
    tags!: string[];
}