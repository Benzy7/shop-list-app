import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/Item';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private itemServise: ItemService
  ) { }

  ngOnInit(): void {
    this.itemServise.getItems().subscribe( (items) => this.items = items)
  }

  deleteItem(item: Item){
    this.itemServise.deleteItem(item).subscribe(
      () => (this.items = this.items.filter((i) => i.id !== item.id))
    );
  }

  toogleReminder(item: Item){
    item.reminder = !item.reminder;
    this.itemServise.updateItemReminder(item).subscribe();
  }

  addItem(item: Item){
    this.itemServise.addItem(item).subscribe( (item) => this.items.push(item));
  }

}
