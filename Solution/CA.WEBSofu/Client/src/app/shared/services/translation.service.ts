import { Injectable } from '@angular/core';

export class TranslationSet {
   public languange: string;
   public values: {[key: string]: string} = {};
}

@Injectable()
export class TranslationService {

    public languages = ['ger', 'eng', 'spa'];

    public language = 'spa';

    private dictionary: {[key: string]: TranslationSet} = {
        'ger' : {
            languange: 'ger',
            values: {
                'example' : 'Beispiel'
            }
        },
        'eng' : {
            languange: 'eng',
            values: {
                'example' : 'Example',
                'username' : 'Username',
                'password' : 'Password',
                'incorrectLogin' : 'Usuario/Contraseña wrong',
                'dashboard' : 'Dashboard',
                'blank-page' : 'Test',
                'field-required' : 'This field is required',
                'validate': 'VALIDATE',
                'connect': 'Connect ...',
                'orconnectwith': 'Or connect with ...',
                'allrightsreserved': 'all rights reserved',
                'model': 'model',
                'maxSpeed': 'maximum speed',
                'apply': 'APPLY',
                'error': 'Error',
                'information': 'Information',
                'warning': 'Warning',
                'incorrect-form': 'Incorrect form',
                'correct-form': 'Updated form',
                'operation-OK': 'Operation OK',
                'operation-KO': 'Operation KO'
            }
        },
        'spa' : {
            languange: 'spa',
            values: {
                'example' : 'Ejemplo',
                'username' : 'Usuario',
                'password' : 'Contraseña',
                'incorrectLogin' : 'Usuario/Contraseña incorrectos',
                'dashboard' : 'Escritorio',
                'blank-page' : 'Test',
                'field-required' : 'Este campo es necesario',
                'validate': 'VALIDAR',
                'connect': 'Conectando ...',
                'orconnectwith': 'O conecta con ...',
                'allrightsreserved': 'todos los derechos reservados',
                'search': 'buscar',
                'model': 'modelo',
                'maxSpeed': 'máxima velocidad',
                'apply': 'APLICAR',
                'error': 'Error',
                'information': 'Información',
                'warning': 'Adverencia',
                'incorrect-form': 'Formulario incorrecto',
                'correct-form': 'Formulario actualizado correctamente',
                'operation-OK': 'Operación realizada con éxito',
                'operation-KO': 'Ha ocurrido un error en la operación'
            }
        }
    };

    constructor() { }

    translate(value: string): string {
        if ( this.dictionary[this.language] != null) {
            const traduction = this.dictionary[this.language].values[value];
            if (traduction == null || traduction === '' || traduction === undefined) {
                return value;
            } else {
                return traduction;
            }
        }
    }
}
