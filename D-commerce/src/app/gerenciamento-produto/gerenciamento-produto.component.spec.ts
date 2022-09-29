import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoProdutoComponent } from './gerenciamento-produto.component';

describe('GerenciamentoProdutoComponent', () => {
  let component: GerenciamentoProdutoComponent;
  let fixture: ComponentFixture<GerenciamentoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciamentoProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
