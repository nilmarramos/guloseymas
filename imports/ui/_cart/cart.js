import { Template } from 'meteor/templating';

import {Cart} from '../../model/Cart';

import './_cart.html';

Template._cart.helpers({
    cart () {
        let id = Meteor.userId();
        return Cart.find({userId:id}).fetch();

    },
    sumCart () {
        let id = Meteor.userId();
        let cart = Cart.find({userId: id}).fetch();

        let limite = _.reduce(cart, function(sum, next) {
            return sum + next.prince;
        }, 0);

        if (limite >= 5.00){
            return limite;
        }

    }
});

Template._cart.events({
    'click .removeCart' () {
        Meteor.call('removeCart',this._id);
    },

});