import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

type CreateUserDTO = {
    name: string;
    email: string;
    password: string;
}

export async function createUser(data: CreateUserDTO) {
    const [userExists] = await db
    .select()
    .from(users)
    .where(eq(users.email, data.email));

    if(userExists) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const [user] = await db
        .insert(users)
        .values({
            name: data.name,
            email: data.email,
            password: hashedPassword,
        })
        .returning();

    return user;
}
export async function getUsers() {
  const allUsers = await db.select().from(users);

  return allUsers;
}