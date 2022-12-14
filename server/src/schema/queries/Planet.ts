import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { Planets } from '../../entities/Planets';
import { PlanetType } from '../typedefs/Planet';

export const GET_ALL_PLANETS = {
    type: new GraphQLList(PlanetType),
    resolve() {
        return Planets.find();
    },
};

export const GET_PLANET = {
    type: PlanetType,
    args: {
        id: { type: GraphQLID },
    },
    resolve(parent: any, args: any) {
        const { id } = args;
        return Planets.findOne(id);
    },
};

export const GET_PLANET_BY_NAME = {
    type: PlanetType,
    args: {
        name: { type: GraphQLString },
    },
    resolve(parent: any, args: any) {
        const { name } = args;
        return Planets.findOne({ where: { planet: name } });
    },
};
