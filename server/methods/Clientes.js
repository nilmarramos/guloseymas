import { Meteor } from 'meteor/meteor';


Meteor.methods({
    removeCliente (id) {
        return Meteor.users.remove({_id: id})
    }
});