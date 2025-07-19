import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: string

    @Column()
    description: string

    @Column()
    imagepath: string
}