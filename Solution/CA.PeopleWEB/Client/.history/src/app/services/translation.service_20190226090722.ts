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
                'example' : 'Example'
            }
        },
        'spa' : {
            languange: 'spa',
            values: {
                'example' : 'Ejemplo'
            }
        }
    };

    constructor() { }

    translate(value: string): string {
        console.log('translate called with value ' + value + ' and language ' + this.language);
        if ( this.dictionary[this.language] != null) {
            const traduction = this.dictionary[this.language].values[value];
            if (traduction == null || traduction === '') {
                return value;
            } else {
                return traduction;
            }

            // return this.dictionary[this.language].values[value];
        }
    }
}
