import { Pipe, PipeTransform } from '@angular/core';
import { CONFIG } from '../../../config';
/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'url',
})
export class UrlPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, args?: any) {
  	
  	if(value != undefined)
    	return value.replace('./assets', CONFIG.API_ENDPOINT);
  }
}
