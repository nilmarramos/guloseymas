import { Meteor } from 'meteor/meteor';
import { Category } from '../../imports/model/Category';

Meteor.methods({
    addCategory (category) {
        const exist = Category.findOne({name: category.name});
        if (!exist){
            return Category.insert(category);
        }
    },
    updateCategory (id, name) {
        return Category.update(id,{$set:{name: name}})
    },
    removeCategory (id) {
        return Category.remove(id);
    }
});