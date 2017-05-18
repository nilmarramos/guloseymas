import { Meteor } from 'meteor/meteor';
import {Product} from '../../imports/model/Product';

Meteor.publish('cadastro', function () {
    return Product.find({});
});