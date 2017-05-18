import { Template } from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {Category} from '../../../model/Category';
import {Texto} from '../../../model/TextoHome';

import './categoria.html';
import './modalCategory.html';
import './modalTexto.html';

Template.categoria.helpers({
    text () {
        return Texto.find().fetch();
    },
    countCategory () {
        return Category.find().count();
    },
    category () {
        return Category.find({}, {sort:{createdAt: - 1}})
    }
});

Template.categoria.events({
    'click .modalTexto'(e) {
        e.preventDefault();
        $('#formTexto').trigger('reset');
        $('#modalTexto').modal('show');
        $('.modal-title').text('Cadastro Texto Da Home');
        $('.editTexto').text('Cadastrar').removeClass('editTexto')
            .addClass('addTexto');
    },
    'click .modalCategory'(e) {
        e.preventDefault();
        $('#formCategory').trigger('reset');
        $('#modalCategory').modal('show');
        $('.modal-title').text('Cadastro de Categoria');
        $('.editCategory').text('Cadastrar').removeClass('editCategory')
            .addClass('addCategory');
    },
    'click .addTexto'(e, t) {
        e.preventDefault();

        let texto = {};
        texto.texto = t.find('#texto').value;
        texto.imprimir = t.find('#imprimir').value;

        Meteor.call('addTexto', texto, function () {
            $('#formTexto').trigger('reset');
            $('#texto').focus();
        });
    },
    'click .addCategory'(e, t) {
        e.preventDefault();

        let category = {};
        category.name = t.find('#category').value;

        Meteor.call('addCategory', category, function () {
            $('#formCategory').trigger('reset');
            $('#category').focus();
        });
    },
    'click .edit-texto'(){
        $('#textoId').val(this._id);
        $('#texto').val(this.texto);
        $('#imprimir').val(this.imprimir);
        $('#modalTexto').modal('show');
        $('.modal-title').text('Editar Texto');
        $('.addTexto').text('Atualizar').removeClass('addTexto')
            .addClass('editTexto');
    },
    'click .edit-Category'(){
        $('#categoryId').val(this._id);
        $('#category').val(this.name);
        $('#modalCategory').modal('show');
        $('.modal-title').text('Editar Categoria');
        $('.addCategory').text('Atualizar').removeClass('addCategory')
            .addClass('editCategory');
    },
    'click .editTexto'(e, t){
        let id = t.find('#textoId').value;
        let texto = t.find('#texto').value;
        let imprimir = t.find('#imprimir').value;

        Meteor.call('updateTexto',id,texto,imprimir, function () {
            $('#formTexto').trigger('reset');
            $('#modalTexto').modal('hide');
        })
    },
    'click .editCategory'(e, t){
        let id = t.find('#categoryId').value;
        let name = t.find('#category').value;

        Meteor.call('updateCategory',id,name, function () {
            $('#formCategory').trigger('reset');
            $('#modalCategory').modal('hide');
        })
    },
    'click .removeTexto'(){
        Meteor.call('removeTexto', this._id);
    },
    'click .removeCategory'(){
        Meteor.call('removeCategory', this._id);
    }
});