import { NextResponse } from "next/server";
import { createUser } from "@/services/usersServices";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        const { name, email, password } = body;

        if(!name || !email || !password) {
            return NextResponse.json({
                msg: "Todos os campos são obrigatórios!", 
                status: 400
            });
        }

        const user = await createUser(body);
        return NextResponse.json({
            msg: "Usuário Criado com Sucesso!", 
            user: user,
            status: 201
        });
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message },
            { status: 400 }
        )
    }
    
}