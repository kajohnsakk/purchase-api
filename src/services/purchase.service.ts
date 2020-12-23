import { PurchaseModel, IPurchaseTransaction } from "../models";

class PurchaseService {
  async getPurchasetransactions() {
    const purchase = new PurchaseModel();
    const purchaseTransactions = await purchase.getPurchaseTransactions();
    return purchaseTransactions;
  }

  async insertPurchaseTransaction({ item_list, payment }: any) {
    try {
      const purchase = new PurchaseModel();
      const totalPrice = item_list.reduce(
        (total: any, item: any) => item.price_per_item + total,
        0
      );

      const itemsQty = item_list.filter((item: any) => item.qty < 1);

      const itemsPrice = item_list.filter(
        (item: any) => item.price_per_item < 1
      );

      if (item_list.length < 1) {
        throw new Error("Item must be at least than 1");
      }

      if (itemsQty.length > 0) {
        throw new Error("Quantity cannot be less than 1");
      }

      if (itemsPrice.length > 0) {
        throw new Error("Item price cannot be less than 1");
      }

      if (payment < totalPrice) {
        throw new Error("Payment must be more than total price");
      }

      const data = {
        total_price: totalPrice,
        change: payment - totalPrice,
      };

      const result = await purchase.insertPurchaseTransaction(data);

      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default new PurchaseService();
