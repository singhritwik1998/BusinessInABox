import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBoxComponent } from './inventory-box.component';

describe('InventoryBoxComponent', () => {
  let component: InventoryBoxComponent;
  let fixture: ComponentFixture<InventoryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
