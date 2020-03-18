
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if(!value)
            return null;
        
        let actualLimit = (args[0]) ? args[0] : 50;
        return value.substring(0, actualLimit) + "...";
    }
}