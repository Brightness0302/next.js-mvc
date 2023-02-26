import type {NextPage} from 'next';
import {useState, useEffect} from 'react';
import {request} from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import {IClient, IRegisterClient} from "../types";

const Index: NextPage = () => {
    //initialize clients data
    const [clients, setClients] = useState<IClient[]>([])

    useEffect(() => {
        try {
            //get clients data using api/clients
            request('GET', '/clients').then(({body: data, status}) => {
                if (status === 200) {
                    setClients(data?.clients.map((client: IClient) => ({
                        ...client,
                        fullName: `${client.firstName} ${client.lastName}`
                    })))
                }
            })
        } catch(err) {
        }
    }, [])

    const onRegister = async (data: IRegisterClient) => {
        try {
            const result = await request('POST', '/clients', data)
            console.log({result})
            // do something with this result
        } catch (err) {
            // do something with the error
        }
    }

    return (
        <>
            <ClientTable clients={clients} onRegister={onRegister}/>
        </>
    );
};

export default Index;
