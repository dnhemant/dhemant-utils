import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafePipe } from 'dhemant-utils';

@Component({
  selector: 'app-pipe-safe',
  imports: [CommonModule, SafePipe],
  templateUrl: './pipe-safe.html',
  styleUrl: './pipe-safe.scss',
})
export class PipeSafe { }
