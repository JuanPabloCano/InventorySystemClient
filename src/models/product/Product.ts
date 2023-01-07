export class Product {
  enabled?: boolean;
  id?: string;
  name?: string;
  saleDetails?: [];
  stock?: number;

  constructor(enabled?: boolean, id?: string, name?: string, saleDetails?: [], stock?: number) {
    this.enabled = enabled;
    this.id = id;
    this.name = name;
    this.saleDetails = saleDetails;
    this.stock = stock;
  }
}
