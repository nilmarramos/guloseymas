import { Template } from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {Product} from '../../../model/Product';

import './estoque.html';

Template.estoque.helpers({
    prodEstoque () {
        return Product.find( {estoque: 'nao'},{ sort: { createdAt: - 1 } } );
    }
});