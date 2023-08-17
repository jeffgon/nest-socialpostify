import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async postUser(name: string, email: string, hashPassword: string, avatar: string) {
        return await this.prisma.users.create({
            data: {
                name: name,
                email: email,
                password: hashPassword,
                avatar: avatar
            }
        }) 
    }

    
}