import { Mongo } from 'meteor/mongo';

export const Historico = new Mongo.Collection('historico');

Historico.allow({
    insert (userId) {
        return userId;
    }
});