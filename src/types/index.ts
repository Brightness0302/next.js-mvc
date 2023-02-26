import React from "react";

export interface IClient{
    id: string;
    avatar: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    supportTier: 'standard' | 'gold' | 'platinum';
    hourlyRate: number;
    birthday: string;
    sex: string;
}


export interface IRegisterClient{
    avatar: string;
    email: string;
    firstName: string;
    lastName: string;
    supportTier: 'standard' | 'gold' | 'platinum';
    hourlyRate: number;
    birthday: string;
    sex: string;
}