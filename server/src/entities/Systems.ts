import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Systems extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({ nullable: true })
    system!: string;

    @Column({ nullable: true })
    system_link!: string;

    @Column({ nullable: true })
    custom!: boolean;
}