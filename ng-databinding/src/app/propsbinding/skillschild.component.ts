import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillschild',
  templateUrl: './skillschild.component.html',
  styles: [
  ]
})
export class SkillschildComponent implements OnInit {

  @Input()
  skills!:Array<string>
  constructor() { }

  ngOnInit(): void {
  }

}
