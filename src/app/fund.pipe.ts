import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';


@Pipe({
  name: 'fund'
})
export class FundPipe implements PipeTransform {

  transform(input: Project[], fundFilter) {
    var output: Project[] = [];
    if(fundFilter === "morefund")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].fundRaised > input[i].fundGoal/2)
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(fundFilter === "lessfund")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].fundRaised < input[i].fundGoal/2)
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(fundFilter === "all")
    {
      return input;
    }
  }
}
