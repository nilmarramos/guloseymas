import { Mongo } from 'meteor/mongo';
import {Product} from './Product';

export const Order = new Mongo.Collection('order');

Order.helpers({
    productCart () {
        return Product.findOne(this.productId);
    }
});

Order.allow({
    insert (userId) {
        return userId;
    },

});
