export class Product {
  enabled?: boolean;
  id?: string;
  max?: number;
  min?: number;
  name?: string;
  saleDetails?: [];
  stock?: number;

  constructor(enabled?: boolean, id?: string, max?: number, min?: number, name?: string, saleDetails?: [], stock?: number) {
    this.enabled = enabled;
    this.id = id;
    this.max = max;
    this.min = min;
    this.name = name;
    this.saleDetails = saleDetails;
    this.stock = stock;
  }
}
