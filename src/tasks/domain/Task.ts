import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    title!: string;

    @Column({ nullable: false })
    description!: string;

    @Column({ nullable: false })
    status!: string;

    @Column({ nullable: false })
    deadline!: string;

    @Column({ nullable: true })  //ID del usuario responsable
    responsible!: number;

    @Column({
        nullable: true,
        type: 'text', // Transformación de lista a texto para almacenamiento en BD
        transformer: {
          to: comments => JSON.stringify(comments), 
          from: commentsString => JSON.parse(commentsString) 
        }
      })
    comments!: string[];

    @Column({
        nullable: true,
        type: 'text', 
        transformer: {
          to: tags => JSON.stringify(tags), 
          from: tagsString => JSON.parse(tagsString) 
        }
      })
    tags!: string[];

    @Column({ nullable: false })
    is_public!: boolean;
}