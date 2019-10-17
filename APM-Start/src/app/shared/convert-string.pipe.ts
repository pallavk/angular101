import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertString'
})
export class ConvertToSpacesPipe implements PipeTransform{

    transform(value: string, fromStr: string): string {
        return value.replace(fromStr, ' ');
    }

}