import { NextResponse } from "next/server";
import { getUsers } from "@/services/users";

export async function GET(request: Request) {
    try {

        const users = await getUsers();
        return NextResponse.json({
            user: users,
            status: 200
        });
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message },
            { status: 400 }
        )
    }
    
}