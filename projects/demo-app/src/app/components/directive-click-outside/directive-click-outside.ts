import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClickOutsideDirective } from 'dhemant-utils';

@Component({
  selector: 'app-directive-click-outside',
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './directive-click-outside.html',
  styleUrl: './directive-click-outside.scss',
})
export class DirectiveClickOutside {
  clickCount = 0;
  onClickedOutside() { this.clickCount++; }
}
