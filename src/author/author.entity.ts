import { Book } from "src/books/books.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    bio: string;
    @Column()
    nationality: string;
    @OneToMany(() => Book, (books) => books.author)
    books: Book[];


}