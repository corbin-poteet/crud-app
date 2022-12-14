import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';
import cors from 'cors';
import { createConnection } from 'typeorm';

const main = async () => {

    // establish connection to mysql database
    await createConnection({
        type: 'mysql',
        database: 'heroku_3516b0ec59f04f3',
        username: 'b4c13c07f7da0f',
        password: '17563fd1',
        host: 'us-cdbr-east-06.cleardb.net',
        logging: false,
        synchronize: true,
        entities: [__dirname + '/entities/*.*'],
    });

    // mysql://b4c13c07f7da0f:17563fd1@us-cdbr-east-06.cleardb.net/heroku_3516b0ec59f04f3?reconnect=true

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true,
    }));


    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

main().catch((err) => {
    console.error(err);
});