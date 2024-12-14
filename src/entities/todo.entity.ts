import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class TodoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: boolean;

    @Column()
    dueDate: Date;

    @ManyToOne(() => UserEntity, (user) => user.todos)
    user: UserEntity;
}
