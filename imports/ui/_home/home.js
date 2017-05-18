import { Template } from 'meteor/templating';
import {Product} from '../../../imports/model/Product';
import {Cart} from '../../../imports/model/Cart';
import {Sabores} from '../../../imports/model/Sabores';
import {Texto} from '../../model/TextoHome';

import './home.html';

Template.home.helpers({
    text () {
        return Texto.find({imprimir: 'sim'});
    },
    sabor () {
        return Sabores.find({productId: this._id});
    },
    promotion () {
        return Product.find({promotion: 'sim', estoque: 'sim'},{sort:{createdAt: - 1}, limit: 1 });
    },
    destaques () {
        return Product.find({promotion: 'nao', estoque: 'sim'},{sort:{createdAt: - 1}, limit: 8 })
    }
});

Template.home.events({
    'click .addCart' () {
        const produto = Product.findOne(this._id);
        let qty = Session.get('qty');
        let sub = qty * produto.prince;
        let  sabor = $('#sabor:checked').val();

        Cart.insert({
            userId: Meteor.userId(),
            name:produto.name,
            sabor: sabor,
            qts: qty,
            prince: sub
        },function () {
            Bert.alert('Inserido com Sucesso','success','growl-top-right')
        });

        $('.modalProd').modal('hide');

        Meteor.setTimeout(function () {
            FlowRouter.go('/cart')
        },1000)

    },
    'click .big-item'() {
        $("input:radio").removeAttr("checked");
    },
    'click .small-item'() {
        $("input:radio").removeAttr("checked");
    },
    'click .login'(){
        $('.modalProd').modal('hide');
    }
});