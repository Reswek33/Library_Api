import { Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Column } from "typeorm";
import { User } from "src/user/User.entity";
import { Book } from "src/books/books.entity";

@Entity()
export class Borrow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  borrowedDate: Date;

  @Column()
  returnDate: Date;

  @Column()
  isReturn: boolean;

  @ManyToOne(() => User, (user) => user.borrow)
  user: User;   

  @ManyToOne(() => Book, (books) => books.borrow)
  books: Book;   
}
