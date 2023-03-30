import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.scss']
})
export class ButtonCustomComponent implements OnInit {

  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  @Input() text: string = 'BUTTON'
  @Input() buttonType: 'primary' | 'danger' | 'warn' = 'primary';
  @Input() buttonDisable: boolean = false;
  @Output() buttonAction: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.buttonClick.emit();
  }

}
