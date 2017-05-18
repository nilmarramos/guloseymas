import { Template } from 'meteor/templating';
import {Meteor} from 'meteor/meteor';

import './cliente.html';

Template.cliente.helpers({
    clientes () {
        return Meteor.users.find({},{sort: {createdAt: - 1 }});
    },
    count () {
        return Meteor.users.find().count();
    }
});

Template.cliente.events({
    'click .verUser'(){
        FlowRouter.go('/admin/clientes/' + this._id);
    },
    'click .removeCliente'(){
        Meteor.call('removeCliente',this._id);
    }
});