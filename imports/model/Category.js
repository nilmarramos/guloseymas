import { Mongo } from 'meteor/mongo';

export const Category = new Mongo.Collection('category');

Category.allow({
    insert (userId) {
        return userId;
    },
    remove (userId){
        return userId;
    }
});

const Schema = {};

Schema.Category = new SimpleSchema({
    name: {
        type: String,
        max: 100
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            return new Date();
        }
    }
});

Category.attachSchema(Schema.Category);