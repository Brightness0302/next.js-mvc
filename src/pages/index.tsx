import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { InferGetStaticPropsType } from 'next';

type ClientData = [
    id: string,
    avatar: string,
    birthday: Date, 
    email: string,
    firstName: string,
    lastName: string,
    sex: string, 
    supportTier: 'standard' | 'gold' | 'platinum',
    hourlyRate: number,
];

export const getStaticProps = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/clients');
        const clients: ClientData = await res.json();
    
        return {
          props: {
            clients, 
          },
        };
    }
    catch(err) {
        console.log(err)
        return null
    }
    
};

const Index = ({ clients }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { data } = clients
    const onRegister = () => {

    }

    return (
        <>
            <ClientTable clients={data} onRegister={onRegister} />
        </>
    );
};

export default Index;
