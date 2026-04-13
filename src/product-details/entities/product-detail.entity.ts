import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductDetail {
    
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('varchar', {
        nullable: false
    })
    productId!: string;

    @Column('numeric', {default: 0, nullable: true})
    price?: number;

    @Column('text', {nullable: true})
    description?: string;

    @Column('varchar', {
        unique: true,
        nullable: false
    })    
    slug!: string;
}
