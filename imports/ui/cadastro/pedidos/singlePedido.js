import { Template } from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {Order} from '../../../model/Order';


import './singlePedido.html';

Template.singlePedido.helpers({
    order () {
        let id = FlowRouter.getParam('id');
        return Order.find({_id: id}).fetch();
    },
    troco () {
        let id = FlowRouter.getParam('id');
        let r =  Order.findOne({_id: id});

        return r.troco - r.total;
    }
});