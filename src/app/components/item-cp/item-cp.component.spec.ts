import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCpComponent } from './item-cp.component';

describe('ItemCpComponent', () => {
  let component: ItemCpComponent;
  let fixture: ComponentFixture<ItemCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
