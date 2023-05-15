import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Input() type: string = '';
  @Input() inputLabel: string = '';
  @Input() control: FormControl = new FormControl()
  @Input() name: string = '';
  @Output() InputChange = new EventEmitter();

  textInput: string = '';

  constructor() { }

  ngOnInit(): void { }

  onInputChange(): void {
    this.InputChange.emit(this.textInput);
  }

}
