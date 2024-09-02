import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
    private readonly saltRounds = 10;

    async hash(password: string): Promise<string> {
        const hashedPassword = await bcrypt.hash(password, this.saltRounds);
        return hashedPassword;
    }

    async compare(password: string, hashedPassword: string): Promise<boolean> {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    }
}
