import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuravibImportComponent } from './euravib-import.component';

describe('EuravibImportComponent', () => {
  let component: EuravibImportComponent;
  let fixture: ComponentFixture<EuravibImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuravibImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuravibImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
