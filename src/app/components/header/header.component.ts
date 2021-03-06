import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Shop List';
  showAddItem: boolean;
  sub: Subscription;

  constructor(
    private uiService: UiService,
    private router: Router
  ) { 
    this.sub = this.uiService.onToggle().subscribe( (value) => (this.showAddItem = value))
  }

  ngOnInit(): void {}

  toggleAddItem(){
    this.uiService.toggleAddItem();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}
