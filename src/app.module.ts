import { UsersModule } from './users/users.module';
import { UsersHttpModule } from './users/users.http.module';
import { User } from './users/entity/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getConnectionOptions, Connection } from 'typeorm';

@Module({
    imports: [
        // TypeOrmModule.forRoot({
        //     "type": "postgres", 
        //     "host": "127.0.0.1", 
        //     "port": 5432, 
        //     "username": "postgres", 
        //     "password": "1234", 
        //     "database": "postgres", 
        //     "entities": [
        //         User, 
        //         // "dist/**/entity/*.{ts,js}"
        //     ], 
        //     "synchronize": true
        // }), 

        TypeOrmModule.forRootAsync({
            useFactory: async () => Object.assign(
                await getConnectionOptions(), 
                {autoLoadEntities: true}
            )
        }), 
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    // constructor(private connection: Connection) {}
}
