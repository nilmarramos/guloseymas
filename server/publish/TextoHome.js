import { Meteor } from 'meteor/meteor';
import {Texto} from '../../imports/model/TextoHome';

Meteor.publish('texto', function () {
    return Texto.find({});
});