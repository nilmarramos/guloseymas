import { Meteor } from 'meteor/meteor';
import {Cart} from '../../imports/model/Cart';

Meteor.publish('cart',function () {
    return Cart.find({})
});