import { Template } from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {Order} from '../../../model/Order';

import './pedidos.html';

Template.pedidos.helpers({
    order () {
        return Order.find({},{sort: {date: - 1 }});
    },
    formatDate(){
        return moment(this.date).format('llll');
    }
});

Template.pedidos.events({
    'click .verOrder'() {
        FlowRouter.go('/admin/pedido/' + this._id)
    },
    'click .removePedido'(e) {
        e.preventDefault();

        Meteor.call('removePedido', this._id);
    },
});