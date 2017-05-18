import { Meteor } from 'meteor/meteor';
import {Historico} from '../../imports/model/Historico'

Meteor.publish('historico', function () {
    return Historico.find({});
});
