import { Injectable } from '@angular/core';
import { DecomeccOrder, DecomeccOrderLine } from '../models/decomecc-order.model';

@Injectable({ providedIn: 'root' })
export class DecomeccOrderService {
  private mockOrders: DecomeccOrder[] = 
  [
    {
      "orderNumber": "903334",
      "orderDate": new Date("2025-04-15T09:55:00Z"),
      "product": "5000 legering in H48",
      "remarks": "Urgent delivery",
      "max_weight_per_coil": 1000,
      "packing": "opwikkelen op huls met ID 608 mm",
      "edge_waves": "d ≤ 6 mm  -  d/f ≤ 1 %",
      "center_buckles": "d ≤ 6 mm -  d/f ≤ 1 %",
      "transversal_bow": "d ≤ 10 mm",
      "squarness": "According to EN 485-4 Table 8",
      "status": "created",
      "decomec_status": "accepted",
      "lines": [
        {
          "lineNumber": 1,
          "pos": 10,
          "width": 2134,
          "gauge": 0.7,
          "coilnr": "15500652",
          "weight_kg": 2700,
          "length_mtr": 643,
          "width_mm": 2134,
          "remark": "input delen omwikkelen op 608 huls",
          "quality_remark": "laagdikte afwijking A=15109 P=1014018",
          "cuts": [
            {
              "idno_Ecp": "15472679",
              "circa_weight": 900,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002961",
              "net": 940,
              "gross": 965,
              "length": 0
            },
            {
              "idno_Ecp": "15502063",
              "circa_weight": 900,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002961",
              "net": 930,
              "gross": 955,
              "length": 0
            },
            {
              "idno_Ecp": "D500002963",
              "circa_weight": 900,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002961",
              "net": 810,
              "gross": 835,
              "length": 0
            }
          ]
        },
        {
          "lineNumber": 2,
          "pos": 10,
          "width": 2134,
          "gauge": 0.7,
          "coilnr": "15500653",
          "weight_kg": 2797,
          "length_mtr": 666,
          "width_mm": 2134,
          "remark": "input delen omwikkelen op 608 huls",
          "quality_remark": "Lakblaasjes A=15109 P=1014017",
          "cuts": [
            {
              "idno_Ecp": "15502065",
              "circa_weight": 930,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002965",
              "net": 970,
              "gross": 995,
              "length": 0
            },
            {
              "idno_Ecp": "15502066",
              "circa_weight": 930,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002966",
              "net": 970,
              "gross": 995,
              "length": 0
            },
            {
              "idno_Ecp": "15502067",
              "circa_weight": 930,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002967",
              "net": 9700,
              "gross": 995,
              "length": 0
            }
          ]
        }
      ]
    },
    {
      "orderNumber": "903335",
      "orderDate": new Date("2025-04-14T08:30:00Z"),
      "product": "6000 legering in T6",
      "remarks": "Standard delivery",
      "max_weight_per_coil": 1200,
      "packing": "opwikkelen op huls met ID 508 mm",
      "edge_waves": "d ≤ 5 mm  -  d/f ≤ 0.8 %",
      "center_buckles": "d ≤ 5 mm -  d/f ≤ 0.8 %",
      "transversal_bow": "d ≤ 8 mm",
      "squarness": "According to EN 485-4 Table 7",
      "status": "created",
      "decomec_status": "pending",
      "lines": [
        {
          "lineNumber": 1,
          "pos": 12,
          "width": 2100,
          "gauge": 0.8,
          "coilnr": "15500654",
          "weight_kg": 2600,
          "length_mtr": 600,
          "width_mm": 2100,
          "remark": "input delen omwikkelen op 508 huls",
          "quality_remark": "laagdikte afwijking A=15110 P=1014019",
          "cuts": [
            {
              "idno_Ecp": "15472680",
              "circa_weight": 850,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002962",
              "net": 900,
              "gross": 920,
              "length": 0
            },
            {
              "idno_Ecp": "15502068",
              "circa_weight": 850,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002962",
              "net": 890,
              "gross": 910,
              "length": 0
            },
            {
              "idno_Ecp": "D500002964",
              "circa_weight": 900,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002962",
              "net": 800,
              "gross": 830,
              "length": 0
            }
          ]
        },
        {
          "lineNumber": 2,
          "pos": 12,
          "width": 2100,
          "gauge": 0.8,
          "coilnr": "15500655",
          "weight_kg": 2650,
          "length_mtr": 610,
          "width_mm": 2100,
          "remark": "input delen omwikkelen op 508 huls",
          "quality_remark": "Lakblaasjes A=15110 P=1014020",
          "cuts": [
            {
              "idno_Ecp": "15502069",
              "circa_weight": 880,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002968",
              "net": 920,
              "gross": 940,
              "length": 0
            },
            {
              "idno_Ecp": "15502070",
              "circa_weight": 880,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002969",
              "net": 910,
              "gross": 930,
              "length": 0
            },
            {
              "idno_Ecp": "15502071",
              "circa_weight": 890,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002970",
              "net": 900,
              "gross": 920,
              "length": 0
            }
          ]
        }
      ]
    },
    {
      "orderNumber": "903336",
      "orderDate": new Date("2025-04-13T10:15:00Z"),
      "product": "7000 legering in T5",
      "remarks": "Express delivery",
      "max_weight_per_coil": 1100,
      "packing": "opwikkelen op huls met ID 610 mm",
      "edge_waves": "d ≤ 7 mm  -  d/f ≤ 1.2 %",
      "center_buckles": "d ≤ 7 mm -  d/f ≤ 1.2 %",
      "transversal_bow": "d ≤ 12 mm",
      "squarness": "According to EN 485-4 Table 9",
      "status": "created",
      "decomec_status": "accepted",
      "lines": [
        {
          "lineNumber": 1,
          "pos": 14,
          "width": 2150,
          "gauge": 0.75,
          "coilnr": "15500656",
          "weight_kg": 2750,
          "length_mtr": 650,
          "width_mm": 2150,
          "remark": "input delen omwikkelen op 610 huls",
          "quality_remark": "laagdikte afwijking A=15111 P=1014021",
          "cuts": [
            {
              "idno_Ecp": "15472681",
              "circa_weight": 920,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002971",
              "net": 950,
              "gross": 970,
              "length": 0
            },
            {
              "idno_Ecp": "15502072",
              "circa_weight": 920,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002971",
              "net": 940,
              "gross": 960,
              "length": 0
            },
            {
              "idno_Ecp": "D500002972",
              "circa_weight": 910,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002971",
              "net": 930,
              "gross": 950,
              "length": 0
            }
          ]
        },
        {
          "lineNumber": 2,
          "pos": 14,
          "width": 2150,
          "gauge": 0.75,
          "coilnr": "15500657",
          "weight_kg": 2800,
          "length_mtr": 660,
          "width_mm": 2150,
          "remark": "input delen omwikkelen op 610 huls",
          "quality_remark": "Lakblaasjes A=15111 P=1014022",
          "cuts": [
            {
              "idno_Ecp": "15502073",
              "circa_weight": 930,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002973",
              "net": 960,
              "gross": 980,
              "length": 0
            },
            {
              "idno_Ecp": "15502074",
              "circa_weight": 930,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002974",
              "net": 950,
              "gross": 970,
              "length": 0
            },
            {
              "idno_Ecp": "15502075",
              "circa_weight": 940,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002975",
              "net": 940,
              "gross": 960,
              "length": 0
            }
          ]
        }
      ]
    },
    {
      "orderNumber": "903337",
      "orderDate": new Date("2025-04-12T11:45:00Z"),
      "product": "8000 legering in O",
      "remarks": "Low priority",
      "max_weight_per_coil": 900,
      "packing": "opwikkelen op huls met ID 600 mm",
      "edge_waves": "d ≤ 4 mm  -  d/f ≤ 0.5 %",
      "center_buckles": "d ≤ 4 mm -  d/f ≤ 0.5 %",
      "transversal_bow": "d ≤ 6 mm",
      "squarness": "According to EN 485-4 Table 6",
      "status": "created",
      "decomec_status": "pending",
      "lines": [
        {
          "lineNumber": 1,
          "pos": 8,
          "width": 2000,
          "gauge": 0.65,
          "coilnr": "15500658",
          "weight_kg": 2200,
          "length_mtr": 500,
          "width_mm": 2000,
          "remark": "input delen omwikkelen op 600 huls",
          "quality_remark": "laagdikte afwijking A=15112 P=1014023",
          "cuts": [
            {
              "idno_Ecp": "15472682",
              "circa_weight": 700,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002976",
              "net": 720,
              "gross": 740,
              "length": 0
            },
            {
              "idno_Ecp": "15502076",
              "circa_weight": 700,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002976",
              "net": 710,
              "gross": 730,
              "length": 0
            },
            {
              "idno_Ecp": "D500002977",
              "circa_weight": 800,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002976",
              "net": 800,
              "gross": 820,
              "length": 0
            }
          ]
        },
        {
          "lineNumber": 2,
          "pos": 8,
          "width": 2000,
          "gauge": 0.65,
          "coilnr": "15500659",
          "weight_kg": 2250,
          "length_mtr": 510,
          "width_mm": 2000,
          "remark": "input delen omwikkelen op 600 huls",
          "quality_remark": "Lakblaasjes A=15112 P=1014024",
          "cuts": [
            {
              "idno_Ecp": "15502077",
              "circa_weight": 750,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002978",
              "net": 770,
              "gross": 790,
              "length": 0
            },
            {
              "idno_Ecp": "15502078",
              "circa_weight": 750,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002979",
              "net": 760,
              "gross": 780,
              "length": 0
            },
            {
              "idno_Ecp": "15502079",
              "circa_weight": 800,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002980",
              "net": 800,
              "gross": 820,
              "length": 0
            }
          ]
        }
      ]
    },
    {
      "orderNumber": "903338",
      "orderDate": new Date("2025-04-11T13:00:00Z"),
      "product": "5000 legering in H32",
      "remarks": "Urgent delivery",
      "max_weight_per_coil": 1050,
      "packing": "opwikkelen op huls met ID 608 mm",
      "edge_waves": "d ≤ 6 mm  -  d/f ≤ 1 %",
      "center_buckles": "d ≤ 6 mm -  d/f ≤ 1 %",
      "transversal_bow": "d ≤ 10 mm",
      "squarness": "According to EN 485-4 Table 8",
      "status": "created",
      "decomec_status": "accepted",
      "lines": [
        {
          "lineNumber": 1,
          "pos": 11,
          "width": 2120,
          "gauge": 0.72,
          "coilnr": "15500660",
          "weight_kg": 2720,
          "length_mtr": 645,
          "width_mm": 2120,
          "remark": "input delen omwikkelen op 608 huls",
          "quality_remark": "laagdikte afwijking A=15113 P=1014025",
          "cuts": [
            {
              "idno_Ecp": "15472683",
              "circa_weight": 910,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002981",
              "net": 950,
              "gross": 970,
              "length": 0
            },
            {
              "idno_Ecp": "15502080",
              "circa_weight": 910,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002981",
              "net": 940,
              "gross": 960,
              "length": 0
            },
            {
              "idno_Ecp": "D500002982",
              "circa_weight": 900,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002981",
              "net": 930,
              "gross": 950,
              "length": 0
            }
          ]
        },
        {
          "lineNumber": 2,
          "pos": 11,
          "width": 2120,
          "gauge": 0.72,
          "coilnr": "15500661",
          "weight_kg": 2780,
          "length_mtr": 655,
          "width_mm": 2120,
          "remark": "input delen omwikkelen op 608 huls",
          "quality_remark": "Lakblaasjes A=15113 P=1014026",
          "cuts": [
            {
              "idno_Ecp": "15502081",
              "circa_weight": 920,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002983",
              "net": 960,
              "gross": 980,
              "length": 0
            },
            {
              "idno_Ecp": "15502082",
              "circa_weight": 920,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002984",
              "net": 950,
              "gross": 970,
              "length": 0
            },
            {
              "idno_Ecp": "15502083",
              "circa_weight": 930,
              "circa_length": 0,
              "rollNumber_Decomecc": "D500002985",
              "net": 940,
              "gross": 960,
              "length": 0
            }
          ]
        }
      ]
    }];
  

  getAllOrders(): DecomeccOrder[] {
    return this.mockOrders;
  }


  getOrderLines(orderNumber: string): DecomeccOrderLine[] {
    return this.mockOrders.find(o => o.orderNumber === orderNumber).lines;
  }

  getOrderByNumber(orderNumber: string): DecomeccOrder | undefined {
    return this.mockOrders.find(o => o.orderNumber === orderNumber);
  }

  saveOrder(order: DecomeccOrder): void {
    const index = this.mockOrders.findIndex(o => o.orderNumber === order.orderNumber);
    if (index > -1) {
      this.mockOrders[index] = order;
    } else {
      this.mockOrders.push(order);
    }
  }
}
