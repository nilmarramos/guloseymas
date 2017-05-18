import { Meteor } from 'meteor/meteor';
import {Order} from '../../imports/model/Order';
import {PedidosMensal} from '../../imports/model/PedidosMensal';

Meteor.publish('order', function () {
    return Order.find({});
});

Meteor.publish('pedidoMensal', function () {
    return PedidosMensal.find({});
});