export enum Rol {
    ADMIN = 'admin',
    CUSTOMER = 'customer',
    AGENT_TRAVEL = 'agentTravel',
    PASSANGER = 'passanger'
}

export type User = {
    _id: string,
    name: string,
    active: boolean,
    rol: Rol
}

