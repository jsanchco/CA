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
                'incorrectLogin' : 'Usuario/Contraseña wrong'
            }
        },
        'spa' : {
            languange: 'spa',
            values: {
                'example' : 'Ejemplo',
                'username' : 'Usuario',
                'password' : 'Contraseña',
                'incorrectLogin' : 'Usuario/Contraseña incorrectos'
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
