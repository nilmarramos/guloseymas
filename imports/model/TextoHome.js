import { Mongo } from 'meteor/mongo';

export const Texto = new Mongo.Collection('texto');

Texto.allow({
    insert (userId) {
        return userId
    },
    update (userId){
        return userId
    },
    remove (userId){
        return userId
    }
});