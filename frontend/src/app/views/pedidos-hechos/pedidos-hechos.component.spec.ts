import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosHechosComponent } from './pedidos-hechos.component';

describe('PedidosHechosComponent', () => {
  let component: PedidosHechosComponent;
  let fixture: ComponentFixture<PedidosHechosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosHechosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosHechosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
