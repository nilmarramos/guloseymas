import { Template } from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {Session} from 'meteor/session';

import {Product} from '../../../imports/model/Product';
import {Sabores} from '../../../imports/model/Sabores';
import {Category} from '../../../imports/model/Category'
import {Cart} from '../../model/Cart';

import './menu.html';

Template.menu.onCreated(function () {
    this.filters = new ReactiveVar({});
});

Template.menu.helpers({
    sabor () {
        return Sabores.find({productId: this._id});
    },
    category () {
        return Category.find();
    },
    produtos () {
        const instance = Template.instance();
        let category = instance.filters.get();
        let check = _.isObject(category);

        if ( check != true){
            return Product.find( {categoryId:category, estoque: 'sim'},{ sort: { createdAt: - 1 } } );
        }else {
            return Product.find( {estoque: 'sim'},{ sort: { createdAt: - 1 } } );
        }
    }
});

Template.menu.events({
    'click .addCart' (e, t) {
        e.preventDefault();
        const produto = Product.findOne(this._id);
        let qty = Session.get('qty');
        let sub = qty * produto.prince;
        let sabor = $('#sabor:checked').val();

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
    'click .img-responsive'() {
        $("input:radio").removeAttr("checked");
    },
    'click .login'(){
        $('.modalProd').modal('hide');
    },

    'change #category': function (e, template) {
        const categories = $('#category').val();
        return template.filters.set(categories);
    }
});