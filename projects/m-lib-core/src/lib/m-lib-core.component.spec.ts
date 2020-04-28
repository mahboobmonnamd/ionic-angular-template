import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLibCoreComponent } from './m-lib-core.component';

describe('MLibCoreComponent', () => {
  let component: MLibCoreComponent;
  let fixture: ComponentFixture<MLibCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLibCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLibCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
