import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/Item';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-cp',
  templateUrl: './item-cp.component.html',
  styleUrls: ['./item-cp.component.css']
})
export class ItemCpComponent implements OnInit {
  @Input() item: Item;
  @Output() onDeleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() onToogleReminder: EventEmitter<Item> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDel(item){
    this.onDeleteItem.emit(item);
  }

  onToogle(item){
    this.onToogleReminder.emit(item);
  }

}
