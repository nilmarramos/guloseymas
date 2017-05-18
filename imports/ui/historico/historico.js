import { Template } from 'meteor/templating';

import { Historico } from '../../model/Historico';

import './historico.html';

Template.historico.helpers({
    historico () {
        let id = Meteor.userId();
        return Historico.find({user_id:id},{sort:{date: - 1},limit: 3 });
    },
    formatDate(){
        return moment(this.date).format('llll');
    }
});

Template.historico.events({
    'click .verHistorico'() {
        FlowRouter.go('/historico/' + this._id);
    }
});