Meteor.startup(function(){
    if (Meteor.users.find().count() === 0 ){
        Accounts.createUser({
            email:'guloseymas@email.com',
            password:'220259'
        })
    }

    let user = Meteor.users.find().fetch();
    _.each(user,function(userData){
        if (userData.emails[0].address ==='guloseymas@email.com'){
            Roles.addUsersToRoles(userData,['admin']);
        }
    });
});

