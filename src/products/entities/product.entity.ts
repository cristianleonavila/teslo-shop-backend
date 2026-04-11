import { Gender } from "@enums/gender";
import { ProductSize } from "@enums/product-sizes";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('varchar', {
        unique: true, 
        comment: 'Titulo del Producto',
        nullable: false
    })
    title!: string;

    @Column('numeric', {default: 0})
    price: number = 0;

    @Column('text')
    description!: string;

    @Column('varchar', {
        unique: true,
        nullable: false
    })    
    slug!: string;

    @Column('integer', {nullable: false, unsigned: true})
    stock:number = 0;

    @Column('enum', {
        enum: ProductSize,
        nullable: false
    })
    sizes!:string;

    @Column('enum', {
        enum: Gender,
        nullable: false
    })
    gender!:string;


}
