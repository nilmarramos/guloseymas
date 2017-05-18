import { Meteor } from 'meteor/meteor';
import { Texto } from '../../imports/model/TextoHome';

Meteor.methods({
    addTexto (texto) {
        return Texto.insert(texto)
    },
    updateTexto (id, texto, imprimir) {
        return Texto.update(id,{$set:{texto: texto, imprimir: imprimir}})
    },
    removeTexto (id) {
        return Texto.remove(id);
    }
});