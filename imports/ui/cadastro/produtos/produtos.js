import { Template } from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {Category} from '../../../model/Category';
import {Sabores} from '../../../model/Sabores'

import './produtos.html';

Template.produtos.helpers({
    category () {
        return Category.find();
    },
    sabores() {
        return Sabores.find();
    }
});
Template.produtos.events({
    'click .add' (e, t) {
        e.preventDefault();

        let product = {};
        product.name = t.find('#product').value;
        product.prince = t.find('#prince').value;
        product.image = t.find('#image').value;
        product.description = t.find('#description').value;
        product.categoryId = t.find('#category').value;
        product.estoque = t.find('#estoque').value;
        product.promotion = t.find('#promotion').value;

        Meteor.call('addProduct',product, function () {
            $('#formProduct').trigger('reset');
            $('#product').focus();
        });
    },

});