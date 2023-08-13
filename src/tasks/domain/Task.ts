import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./Comment";

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

    @Column({ nullable: false }) //ID del usuario
    created_by!: number;

    @Column({ nullable: true })  //ID del usuario
    responsible!: number;

    @Column({
        nullable: true,
        type: 'text', // Transformación de lista a texto para almacenamiento en BD
        transformer: {
          to: comments => JSON.stringify(comments), 
          from: commentsString => JSON.parse(commentsString) 
        }
      })
    comments!: Comment[];

    @Column({
        nullable: true,
        type: 'text', 
        transformer: {
          to: tags => JSON.stringify(tags), 
          from: tagsString => JSON.parse(tagsString) 
        }
      })
    tags!: string[];

    @Column({
      nullable: true,
      type: 'text', 
      transformer: {
        to: files => JSON.stringify(files), 
        from: filesString => JSON.parse(filesString) 
      }
    })
    files!: string[];

    @Column({ nullable: false })
    is_public!: boolean;
}