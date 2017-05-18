import { Meteor } from 'meteor/meteor';
import { Order } from '../../imports/model/Order';
import { PedidosMensal } from '../../imports/model/PedidosMensal';


Meteor.methods({
    removePedido (id) {
        Order.remove(id)
    },
    removeMensal (id) {
        PedidosMensal.remove(id)
    }
});
