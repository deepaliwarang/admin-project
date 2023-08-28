import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterr'
})
export class FilterrPipe implements PipeTransform {

  transform(value: any[], SearchTerm:any): any {
    if(SearchTerm==null)
    {
      return value;
    }
    if(SearchTerm.length)
    {
      return value.filter(function(search){
        return search.name.toLowerCase().indexOf(SearchTerm.toLowerCase())>-1; 
      });
    }
    return value;

  }

}
