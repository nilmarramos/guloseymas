import { Meteor } from 'meteor/meteor';
import { Cart } from '../../imports/model/Cart';

Meteor.methods({
    removeCart (id) {
        Cart.remove(id)
    },
    fecharPedido (){
         Cart.remove({ userId:Meteor.userId() })
    }
});
