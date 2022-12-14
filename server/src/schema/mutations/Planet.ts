import { GraphQLFloat, GraphQLID, GraphQLString } from "graphql";
import { Planets } from "../../entities/Planets";
import { PlanetType } from "../typedefs/Planet";
import { MessageType } from "../typedefs/Message";

export const CREATE_PLANET = {
    type: PlanetType,
    args: {
        planet: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { planet } = args;
        await Planets.insert({ planet: planet, custom: true });
        return args;
    },
};

export const DELETE_PLANET = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const { id } = args;
        await Planets.delete(id);
        return { success: true, text: "Planet deleted." };
    },
};

export const UPDATE_PLANET = {
    type: MessageType,
    args: {
        planet: { type: GraphQLString },
        x: { type: GraphQLFloat },
        y: { type: GraphQLFloat },
    },
    async resolve(parent: any, args: any) {
        const { planet, x, y } = args;
        const foundPlanet = await Planets.findOne({ where: { planet: planet } });
        if (foundPlanet) {
            if (foundPlanet.custom === false) return { success: false, text: "Can only edit custom planets." };
            await Planets.update(foundPlanet.id, { x: x, y: y });
            return { success: true, text: "Planet updated." };
        } else {
            return { success: false, text: "Planet not found." };
        }
    },
};