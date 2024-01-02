import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationSet {
  public language!: string
  public values: { [key: string]: string } = {}
}
export class TranslationService {
  public languages = ['ger', 'eng', 'esp']

  public language = 'ger'

  private dictionary: { [key: string]: TranslationSet } = {
    ger: {
      language: 'ger',
      values: {
        example: 'Beispiel',
      },
    },
    eng: {
      language: 'eng',
      values: {
        example: 'Example',
      },
    },
    esp: {
      language: 'esp',
      values: {
        example: 'Ejemplo',
      },
    }
  }

  constructor() {}

  translate(key: string,language: string): string {


    if (this.dictionary[language] != null) {
      console.log('Translate: ', language, key);
      return this.dictionary[language].values[key]
    }else{
      return '';
    }
  }
}
