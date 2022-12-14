import { Systems } from './../../entities/Systems';
import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { SystemType } from '../typedefs/System';

export const GET_ALL_SYSTEMS = {
    type: new GraphQLList(SystemType),
    resolve() {
        return Systems.find();
    },
};
