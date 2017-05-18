    import {Template} from 'meteor/templating';

Template._login.onRendered(function () {
    $('#login-form').validate({
        rules: {
            email:{
                required: true,
                email: true
            },
            password:{
                required: true
            }
        },
        messages:{
            email: {
                required: "Entre com seu email para  logar",
                email: "Entre com email valido"
            },
            password: "Entre com sua senha"
        }
    })
});