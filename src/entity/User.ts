import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("user")
class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}

export { User };
