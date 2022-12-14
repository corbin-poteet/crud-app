import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Planets extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: true })
    the_geom!: string;

    @Column({ nullable: true })
    cartodb_id!: number;

    @Column({ nullable: true })
    objectid!: number;

    @Column({ nullable: true })
    planet!: string;

    @Column({ nullable: true })
    planet_link!: string;

    @Column({ nullable: true })
    region!: string;

    @Column({ nullable: true })
    region_link!: string;

    @Column({ nullable: true })
    sector!: string;

    @Column({ nullable: true })
    sector_link!: string;
    
    @Column({ nullable: true })
    system!: string;

    @Column({ nullable: true })
    system_link!: string;

    @Column({ nullable: true })
    grid!: string;

    @Column({ type: 'float', nullable: true })
    x!: number;

    @Column({ type: 'float', nullable: true })
    y!: number;

    @Column({ type: 'float', nullable: true })
    z!: number;

    @Column({ nullable: true })
    canon!: boolean;

    @Column({ nullable: true })
    legends!: boolean;

    @Column({ nullable: true })
    zm!: number;

    @Column({ nullable: true })
    name0!: string;

    @Column({ nullable: true })
    name1!: string;

    @Column({ nullable: true })
    name2!: string;

    @Column({ type: 'float', nullable: true })
    lat!: number;

    @Column({ type: 'float', nullable: true })
    long!: number;

    @Column({ nullable: true })
    ref!: string;

    @Column({ nullable: true })
    status!: string;

    @Column({ nullable: true })
    cregion!: string;

    @Column({ nullable: true })
    cregion_link!: string;

    @Column({ nullable: true })
    custom!: boolean;
}