import { UserEntity } from '../entities';

export type PayloadType = {
    exp: number;
    iat: number;
    uuid: string;
};

export type CreateTitleType = {
    title: string;
    userId: UserEntity;
};
