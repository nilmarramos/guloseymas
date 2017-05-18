import { Template } from 'meteor/templating';
import {PedidosMensal} from '../../../model/PedidosMensal';

import './pedidoMensal.html';

Template.pedidoMensal.helpers({
    pedido () {
        return PedidosMensal.find({},{sort: {date: -1 }});
    },
    totalMensal () {
        let soma = PedidosMensal.find({}).fetch();
        return _.reduce(soma, function(sum, next) {
            return sum + next.valorPedido;
        }, 0);
    },
    formatDate(){
        return moment(this.date).format('llll');
    }
});

Template.pedidoMensal.events({
    'click .removeMensal'(){
        Meteor.call('removeMensal',this._id)
    }
});