import { Meteor } from 'meteor/meteor';
import { Product } from '../../imports/model/Product';

Meteor.methods({

    addProduct (product) {
        return Product.insert(product);
    }
});