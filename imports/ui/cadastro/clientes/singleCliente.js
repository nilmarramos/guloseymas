import { Template } from 'meteor/templating';


import './singleCliente.html';

Template.singleCliente.helpers({
    cliente () {
        let id = FlowRouter.getParam('id');
        return Meteor.users.find({_id: id}).fetch();
    }
});