import { Template } from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {Product} from '../../model/Product';

import './cadastro.html'

Template.cadastro.helpers({
    attr: function () {
        return { 'class': 'm-b-15 form-control', 'placeholder': 'Pesquisar Produto...' };
    },
    productIndex: () => ProductIndex,

    countProduct () {
        return Product.find().count();
    },
    allProducts () {
        return Product.find({});
    }
});

Template.cadastro.events({
    'click .modalProduto'(e) {
        e.preventDefault();
        $('#formProduct').trigger('reset');
        $('#modalProduto').modal('show');
        $('.modal-title').text('Cadastro de Produtos');
        $('.edit').text('Cadastrar').removeClass('edit')
            .addClass('add');
    },
    'click .modalEstoque'() {
        $('#modalEstoque').modal('show');
    },
    'click .modalSabores'(e) {
        e.preventDefault();
        $('#formProduct').trigger('reset');
        $('#modalSabores').modal('show');
    },
    'click .removeSabor'() {
        Meteor.call('removeSabor', this._id);
    },
    'click .removeProduct'(e) {
        e.preventDefault();

        Meteor.call('removeProduct', this._id);
    },
    'click .editProduct'(e, t) {
        $('#product').val(this.name);
        $('#prince').val(this.prince);
        $('#category').val(this.categoryId);
        $('#estoque').val(this.estoque);
        $('#promotion').val(this.promotion);
        $('#image').val(this.image);
        $('#description').val(this.description);
        $('#productId').val(this._id);

        $('#modalProduto').modal('show');
        $('.modal-title').text('Editar Produto');
        $('.add').text('Atualizar').removeClass('add')
            .addClass('edit');
    },
    'click .edit'(e, t) {
        e.preventDefault();
        let id = t.find('#productId').value;
        let name = t.find('#product').value;
        let prince = t.find('#prince').value;
        let image = t.find('#image').value;
        let estoque = t.find('#estoque').value;
        let promotion = t.find('#promotion').value;
        let description = t.find('#description').value;
        let categoryId = t.find('#category').value;

        Meteor.call('updateProduct',id,name,prince,categoryId,estoque,promotion,image,description, function () {
            $('#formProduct').trigger('reset');
            $('#modalProduto').modal('hide');
        });
    }
});