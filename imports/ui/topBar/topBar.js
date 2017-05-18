import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './topBar.html';

Template.topBar.events({
    'click .right-sair'(){
        Meteor.logout(function () {
            Bert.alert('Obrigado e Volte Sempre','success','growl-top-right')
        });
    },
    'click .right-login'(){
        $('#login').modal('show');
    },
    'click .cadastro'(){
        $('#register').modal('show');
    }
});