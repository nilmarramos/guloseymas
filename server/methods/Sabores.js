import { Meteor } from 'meteor/meteor';
import { Sabores } from '../../imports/model/Sabores';

Meteor.methods({
    addSabor (sabor) {
        return Sabores.insert(sabor);
    }
});