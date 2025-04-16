export interface DecomeccOrderCutLine {
    idno_Ecp: string;
    circa_weight: number;
    circa_length: number;
    rollNumber_Decomecc: string;
    net: number;
    gross: number;
    length: number;
  }
  
  export interface DecomeccOrderLine {
    lineNumber: number;
    pos: number;
    width: number;
    gauge: number;
    coilnr: string;
    weight_kg: number;
    length_mtr: number;
    width_mm: number;
    remark:string;
    quality_remark:string;
    cuts: DecomeccOrderCutLine[];
  }
  
  export interface DecomeccOrder {
    orderNumber: string;
    orderDate: Date;
    product: string;
    remarks: string;
    max_weight_per_coil: number;
    packing: string;
    edge_waves: string;
    center_buckles: string;
    transversal_bow: string;
    squarness:string;
    status: 'created' | 'send';              
    decomec_status: 'accepted' | 'pending' | 'rejected' | 'in production' | 'ready' | 'shipped'; // 👈 read-only
    lines: DecomeccOrderLine[];
  }
  