import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql'

export const PlanetType = new GraphQLObjectType({
    name: 'Planet',
    fields: () => ({
        id: { type: GraphQLID },
        the_geom: { type: GraphQLString },
        cartodb_id: { type: GraphQLID },
        planet: { type: GraphQLString },
        planet_link: { type: GraphQLString },
        region: { type: GraphQLString },
        region_link: { type: GraphQLString },
        sector: { type: GraphQLString },
        sector_link: { type: GraphQLString },
        system: { type: GraphQLString },
        system_link: { type: GraphQLString },
        grid: { type: GraphQLString },
        x: { type: GraphQLFloat },
        y: { type: GraphQLFloat },
        z: { type: GraphQLFloat },
        canon: { type: GraphQLBoolean },
        legends: { type: GraphQLBoolean },
        zm: { type: GraphQLFloat },
        name0: { type: GraphQLString },
        name1: { type: GraphQLString },
        name2: { type: GraphQLString },
        lat: { type: GraphQLFloat },
        long: { type: GraphQLFloat },
        ref: { type: GraphQLString },
        status: { type: GraphQLString },
        cregion: { type: GraphQLString },
        cregion_link: { type: GraphQLString },

        custom: { type: GraphQLBoolean },
    })
})
