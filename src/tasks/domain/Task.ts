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

    @Column()
    tags!: string[];
}