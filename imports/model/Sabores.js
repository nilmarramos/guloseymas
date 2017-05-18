import { Mongo } from 'meteor/mongo';
import {Product} from './Product';

export const Sabores = new Mongo.Collection('sabores');

Sabores.helpers({
    saborMenu () {
        return Product.findOne(this.productId)
    }
});

Sabores.allow({
    insert (userId) {
        return userId;
    },
    remove (userId){
        return userId;
    }
});

const Schema = {};

Schema.Sabor = new SimpleSchema({
    name: {
        type: String,
        max: 100
    },
    productId: {
        type: String,
        optional: true
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            return new Date();
        }
    }
});

Sabores.attachSchema(Schema.Sabor);