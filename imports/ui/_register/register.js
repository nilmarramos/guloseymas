import { Template } from 'meteor/templating';

import './_register.html';

Template._register.events({

    'submit #register-form' : function(e, t) {
        e.preventDefault();
        let name = t.find('#name').value;
        let tell = t.find('#tell').value;
        let email = t.find('#email').value;
        let password = t.find('#password').value;
        let endereco = t.find('#endereco').value;
        let numero = t.find('#numero').value;
        let complemento = t.find('#compl').value;
        let bairro = t.find('#bairro').value;
        let cep = t.find('#cep').value;

        Accounts.createUser({
            name:name,
            tell:tell,
            email:email,
            password:password,
            endereco:endereco,
            numero:numero,
            compl:complemento,
            bairro:bairro,
            cep:cep

        }, function (err) {
            if (err){
                Bert.alert('Nao foi Possivel o Registro','danger','growl-top-right')
            }else{
                Bert.alert('Registro Com Susesso','success','growl-top-right')
            }
        });
        $('#register-form').trigger('reset');
        $('#register').modal('hide');
    }
});