import { Template } from 'meteor/templating';

import './_login.html';
import './loginValidation';

Template._login.events({

    'submit #login-form' : function(e, t) {
        e.preventDefault();
        var email = t.find('#login-email').value;
        var password = t.find('#login-password').value;

        Meteor.loginWithPassword(email, password,function (err) {
            if (err){
                Bert.alert('Email ou senha invalido','danger','growl-top-right')
            }else {
                Bert.alert('Logado com sucesso','success','growl-top-right')
                $('#login').modal('hide');
            }
        });

    },
    'click .login' (e) {
        e.preventDefault();
        $('#login').modal('hide');
    }
});