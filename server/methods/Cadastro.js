import { Meteor } from 'meteor/meteor';
import { Product } from '../../imports/model/Product';
import { Sabores } from '../../imports/model/Sabores';

Meteor.methods({
    updateProduct (id,name,prince,categoryId,estoque,promotion,image,description){
      return Product.update(id, {$set:{
          name: name,
          prince: prince,
          categoryId: categoryId,
          estoque: estoque,
          promotion: promotion,
          image: image,
          description: description
      }})
    },

    removeProduct (id) {
        Product.remove(id)
    },
    removeSabor (id){
        Sabores.remove(id)
    }
});
