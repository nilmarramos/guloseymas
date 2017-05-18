import { Meteor } from 'meteor/meteor';
import {Product} from '../../imports/model/Product';
import {Sabores} from '../../imports/model/Sabores';

Meteor.publish('product', function () {
    return Product.find({});
});

Meteor.publish('sabores', function () {
    return Sabores.find({});
});
