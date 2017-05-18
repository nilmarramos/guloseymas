import {Meteor} from 'meteor/meteor';

import {Category} from '../../imports/model/Category';

Meteor.publish('category', function () {
    return Category.find({});
    }
);