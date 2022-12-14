"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_PLANET = exports.DELETE_PLANET = exports.CREATE_PLANET = void 0;
const graphql_1 = require("graphql");
const Planets_1 = require("../../entities/Planets");
const Planet_1 = require("../typedefs/Planet");
const Message_1 = require("../typedefs/Message");
exports.CREATE_PLANET = {
    type: Planet_1.PlanetType,
    args: {
        planet: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { planet } = args;
            yield Planets_1.Planets.insert({ planet: planet, custom: true });
            return args;
        });
    },
};
exports.DELETE_PLANET = {
    type: Message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            yield Planets_1.Planets.delete(id);
            return { success: true, text: "Planet deleted." };
        });
    },
};
exports.UPDATE_PLANET = {
    type: Message_1.MessageType,
    args: {
        planet: { type: graphql_1.GraphQLString },
        x: { type: graphql_1.GraphQLFloat },
        y: { type: graphql_1.GraphQLFloat },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { planet, x, y } = args;
            const foundPlanet = yield Planets_1.Planets.findOne({ where: { planet: planet } });
            if (foundPlanet) {
                if (foundPlanet.custom === false)
                    return { success: false, text: "Can only edit custom planets." };
                yield Planets_1.Planets.update(foundPlanet.id, { x: x, y: y });
                return { success: true, text: "Planet updated." };
            }
            else {
                return { success: false, text: "Planet not found." };
            }
        });
    },
};
