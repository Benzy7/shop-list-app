import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/Item';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() onAddItem: EventEmitter<Item> = new EventEmitter();

  name: string;
  qte: number;
  reminder: boolean = false;
  showAddItem: boolean;
  sub: Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.sub = this.uiService.onToggle().subscribe( (value) => (this.showAddItem = value))
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert("Please add an item!");
      return;
    }

    if (!this.qte) {
      alert("Please add item Quantity");
      return;
    }

    const newItem = {
      name: this.name,
      qte: this.qte,
      reminder: this.reminder
    }

    this.onAddItem.emit(newItem);

    this.name = '';
    this.qte = null;
    this.reminder= false;
  }

}
