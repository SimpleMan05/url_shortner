import { pgTable , uuid, primaryKey} from "drizzle-orm/pg-core";

const usersTable = pgTable('users',{
    id:uuid().primaryKey().defaultRandom()
});

export{
    usersTable
}