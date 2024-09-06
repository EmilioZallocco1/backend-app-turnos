import { MikroORM } from "@mikro-orm/core";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
import { MySqlDriver } from '@mikro-orm/mysql';

export const orm = await MikroORM.init({
    entities: ['dist/**/*.entity.js'],
    driver: MySqlDriver,
    dbName: 'dsw',
    user: 'root',
    password: 'Rosariocentral19',
    host: 'localhost',
    port: 3306,
    clientUrl: 'mysql://root:1234@localhost:3306/dsw',
    highlighter: new SqlHighlighter(),
    
    schemaGenerator: { // nunca en producción
        disableForeignKeys: true,
        createForeignKeyConstraints: true,
        ignoreSchema:[],
    },
})
export const synsSchema = async () => {
    const generator = orm.getSchemaGenerator()
    await generator.updateSchema()
}