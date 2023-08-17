import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SignInRepository {
    constructor(private readonly prisma: PrismaService) {}

    async signIn(email, password) {
        return '';
    }

}