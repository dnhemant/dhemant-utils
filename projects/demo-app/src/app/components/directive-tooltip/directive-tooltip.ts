import { Component } from '@angular/core';
import { TooltipDirective } from 'dhemant-utils';

@Component({
  selector: 'app-directive-tooltip',
  imports: [TooltipDirective],
  templateUrl: './directive-tooltip.html',
  styleUrl: './directive-tooltip.scss',
})
export class DirectiveTooltip {

}
