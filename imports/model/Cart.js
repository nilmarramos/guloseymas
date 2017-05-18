import { Mongo } from 'meteor/mongo';
import {Product} from './Product';

export const Cart = new Mongo.Collection('cart');

Cart.helpers({
    product () {
        return Product.findOne(this.productId);
    }
});

Cart.allow({
    insert (userId) {
        return userId
    },
    remove (userId){
        return userId
    }
});