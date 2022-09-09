import { Component, Input, OnInit } from '@angular/core';
import { IPosition } from "../../../../models/snake.model";

@Component({
  selector: 'app-snake-cell',
  templateUrl: './snake-cell.component.html',
  styleUrls: ['./snake-cell.component.scss']
})
export class SnakeCellComponent implements OnInit {

  @Input() position: IPosition;

  @Input() hasElement: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}