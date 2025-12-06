import { Entity, ManyToMany, PrimaryGeneratedColumn, Column } from "typeorm";
import { Book } from "src/books/books.entity";

@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    description: string;
    @ManyToMany(() =>Book, (books) => books.categories)
      books: Book[];
}