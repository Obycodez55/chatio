import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
export declare class UserService {
    private prisma;
    constructor(prisma: DatabaseService);
    findAll(): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        displayName: string;
        password: string;
        gender: import(".prisma/client").$Enums.Gender;
        profilePic: string | null;
        createdAt: Date;
        updatedAt: Date;
        refreshTokenId: string | null;
    }[]>;
    findUserById(id: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        displayName: string;
        password: string;
        gender: import(".prisma/client").$Enums.Gender;
        profilePic: string | null;
        createdAt: Date;
        updatedAt: Date;
        refreshTokenId: string | null;
    }>;
    findUserByEmail(email: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        displayName: string;
        password: string;
        gender: import(".prisma/client").$Enums.Gender;
        profilePic: string | null;
        createdAt: Date;
        updatedAt: Date;
        refreshTokenId: string | null;
    }>;
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        displayName: string;
        password: string;
        gender: import(".prisma/client").$Enums.Gender;
        profilePic: string | null;
        createdAt: Date;
        updatedAt: Date;
        refreshTokenId: string | null;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        displayName: string;
        password: string;
        gender: import(".prisma/client").$Enums.Gender;
        profilePic: string | null;
        createdAt: Date;
        updatedAt: Date;
        refreshTokenId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        displayName: string;
        password: string;
        gender: import(".prisma/client").$Enums.Gender;
        profilePic: string | null;
        createdAt: Date;
        updatedAt: Date;
        refreshTokenId: string | null;
    }>;
}
