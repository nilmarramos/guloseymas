import { Template } from 'meteor/templating';

import {Cart} from '../../model/Cart';
import {Order} from '../../model/Order';
import {PedidosMensal} from '../../model/PedidosMensal';
import {Historico} from '../../model/Historico'

import './order.html';

Template.order.helpers({
    cart () {
        let id = Meteor.userId();
        return Cart.find({userId:id}).fetch();

    },
    sumCart () {
        let id = Meteor.userId();
        let cart = Cart.find({userId: id}).fetch();

        return _.reduce(cart, function(sum, next) {
            return sum + next.prince;
        }, 0);
    }
});

Template.order.events({
    'click .dinheiro'() {
        $('.dinheiro').removeClass('hidden');
        $('.cart').addClass('hidden');
    },
    'click .cartao'() {
        $('.dinheiro').addClass('hidden');
        $('.cart').removeClass('hidden');
    },

    'click .enviar-pedido'() {

        let id = Meteor.userId();
        const order = Cart.find({userId: id}).fetch();

        const profile = Meteor.user().profile;

        let total = _.reduce(order, function(sum, next) {
            return sum + next.prince;
        }, 0);

        let  pagamento = $("#pagamento input[type='radio']:checked").val();

        let troco = $('#troco').val();

        PedidosMensal.insert({
            valorPedido: total,
            date: new Date()
        });
        Historico.insert({
            user_id: id,
            productOrder:order,
            total: total,
            date: new Date()
        });


        Order.insert({
            user_id: Meteor.userId(),
            user: profile.name,
            tell: profile.tell,
            endereco: profile.endereco,
            numero: profile.numero,
            compl: profile.compl,
            bairro: profile.bairro,
            cep: profile.cep,
            productOrder:order,
            total: total,
            pag: pagamento,
            troco: troco,
            date: new Date()
        }, function () {
            Bert.alert('Pedido enviado com Sucesso','success','growl-top-right');
            FlowRouter.go('/');
        });

        Meteor.call('fecharPedido');
    }
});