import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecomeccOrder } from '@app/models/decomecc-order.model';
import { EditMode } from '@app/models/enum';
import { DecomeccOrderService } from '@app/services/decomecc-order.service';
import { DxToolbarModule, DxButtonModule, DxTextBoxModule, DxButtonGroupModule, DxTextAreaModule, DxFormModule, DxTabPanelModule } from 'devextreme-angular';
import { AngularSplitModule } from 'angular-split';
import { OrderLinesComponent } from './order-lines.component';

@Component({
  selector: 'app-new-order',
  imports: [CommonModule, DxToolbarModule, DxButtonModule, DxTextBoxModule, 
    DxButtonGroupModule, DxTextAreaModule, DxFormModule, DxTabPanelModule, AngularSplitModule,
    OrderLinesComponent],

  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.scss'
})
export class NewOrderComponent {
  private route = inject(ActivatedRoute);
  readonly EditMode = EditMode;
  private orderService= inject(DecomeccOrderService);

  orderNumber!: string | null;
  order: DecomeccOrder;
  isSaved:boolean = true;
  stylingMode = "underlined";
  editClass = '';

  private _editMode = EditMode.Read

  set editMode(value: EditMode) {
    this._editMode = value;
    if (value !== EditMode.Read)
    {
      this.editClass = 'edit-color';
      this.stylingMode = 'underlined';
    }
    else
    {
      this.editClass = '';
      this.stylingMode = 'underlined';
    }

  }
  get editMode() {return this._editMode}

  ngOnInit(): void {
    this.orderNumber =this.route.snapshot.paramMap.get('orderNumber');
    if (this.orderNumber) {
      this.order = this.orderService.getOrderByNumber(this.orderNumber);

    }
    
  }


  AddRecord():void {}
  DeleteRecord():void {}
  EditRecord():void {
    this.editMode = EditMode.Edit;
  }
  CancelRecord(

  ):void {
    this.editMode = EditMode.Read;
    this.isSaved = true;
  }
  SaveRecord():void {}
  GetRecord():void {}

}
