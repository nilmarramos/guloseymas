import { Meteor } from 'meteor/meteor';
import {Order} from '../../imports/model/Order';

Meteor.methods({
    addOrder (order) {

        return Order.insert(order);
    }
});
