import { Mongo } from 'meteor/mongo';
import {Category} from './Category';

export const Product = new Mongo.Collection('product');


ProductIndex = new EasySearch.Index({
    collection: Product,
    fields: ['name'],
    engine: new EasySearch.Minimongo()
});

Product.helpers({
    category () {
        return Category.findOne(this.categoryId)
    }
});

Product.allow({
    insert (userId) {
        return userId;
    },
    remove (userId){
        return userId;
    }
});

 const Schemas = {};

 Schemas.Product = new SimpleSchema({
     name:{
         type: String,
         max: 100
     },
     image:{
         type: String
     },
     prince:{
         type: Number,
         decimal: true
     },
     promotion: {
         type: String,
         optional: true
     },
     categoryId:{
         type: String,
         max: 100
     },
     estoque: {
         type: String,
         optional: true
     },
     description:{
         type: String,
         max: 400,
         optional: true
     },
     createdAt :{
         type: Date,
         autoValue:function () {
             return new Date();
         }
     }
 });

Product.attachSchema(Schemas.Product);