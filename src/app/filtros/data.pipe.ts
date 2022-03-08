import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: string, ...args: string[]): Date {
    return new Date(value.replace(' ', 'T')); // safari so reconhece se tiver T
  }
  /*  outra opção
  transform(value: string, ...args: string[]): Date {
    return value.split(' ')[0];
  } */

}
