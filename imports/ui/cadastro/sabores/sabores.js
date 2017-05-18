import { Template } from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {Product} from '../../../model/Product';
import {Sabores} from '../../../model/Sabores'

import './sabores.html';

Template.sabores.helpers({
    saborProduto () {
        return Product.find({});
    },
    sabor () {
        return Sabores.find({},{sort: {createdAt: - 1 }});
    }
});

Template.sabores.events({
    'click .addSabor'(e,t) {
        e.preventDefault();

        let sabor = {};

        sabor.name = t.find('#sabor').value;
        sabor.productId = t.find('#produto').value;

        Meteor.call('addSabor',sabor, function () {
            $('#sabor').focus();
        });
    }
});