import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {
  @Input() type: string = '';
  @Input() inputLabel: string = '';
  @Input() accept: string = '';
  @Input() control: FormControl = new FormControl()
  @Input() name: string = '';
  fileInput: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
