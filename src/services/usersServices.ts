import { prisma } from '@/lib/prisma';
import bcrypt from "bcryptjs";

interface CreateUserDTO {
    name: string,
    email: string,
    password: string
}

export async function createUser(data: CreateUserDTO) {
    const userExists = await prisma.users.findUnique({
        where: { email: data.email }
    });

    if(userExists) {
        throw new Error("User already exists")
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.users.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword
        }
    });

    return user;
}
export async function getUsers() {
    const users = await prisma.users.findMany();

    return users;
}