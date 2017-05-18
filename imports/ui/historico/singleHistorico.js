import { Template } from 'meteor/templating';

import { Historico } from '../../model/Historico';

import './singleHistorico.html';

Template.singleHistorico.helpers({
    historicoP () {
        let id = FlowRouter.getParam('id');
        return Historico.find({_id: id}).fetch();
    }
});
