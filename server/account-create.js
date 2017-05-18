
Accounts.onCreateUser(function(options, user) {

    user.profile = options.profile || {};

    user.profile.name = options.name;
    user.profile.tell= options.tell;
    user.profile.email = options.email;
    user.profile.endereco = options.endereco;
    user.profile.numero= options.numero;
    user.profile.compl= options.compl;
    user.profile.bairro= options.bairro;
    user.profile.cep = options.cep;


    return user;
});