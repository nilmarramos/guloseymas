import { Mongo } from 'meteor/mongo';

export const PedidosMensal = new Mongo.Collection('pedidosmensal');

PedidosMensal.allow({
    insert (userId) {
        return userId;
    },
    remove (userId){
        return userId;
    }
});
