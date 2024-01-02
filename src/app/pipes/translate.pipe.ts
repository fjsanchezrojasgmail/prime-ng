import { Pipe, PipeTransform } from '@angular/core'
import { TranslationService } from '../services/translation.service'


@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(language: string, word: string): string {
    return this.translationService.translate(language,word)
  }
}
