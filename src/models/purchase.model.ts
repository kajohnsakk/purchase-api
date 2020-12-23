const fs = require("fs");
const PURCHASE_DB = require("path").resolve(__dirname, "../db/purchase.json");

export interface IPurchaseTransaction {
  total_price: number;
  change: number;
}

class PurchaseModel {
  getPurchaseTransactions() {
    return new Promise((resolve: any, reject: any) => {
      fs.readFile(PURCHASE_DB, "UTF-8", (error: any, content: any) => {
        if (error) reject(error);
        resolve(JSON.parse(content));
      });
    });
  }

  insertPurchaseTransaction(data: IPurchaseTransaction) {
    return new Promise(async (resolve: any, reject: any) => {
      let purchaseTransactions: any = await this.getPurchaseTransactions();
      purchaseTransactions.push(data);

      fs.writeFile(
        PURCHASE_DB,
        JSON.stringify(purchaseTransactions, null, 4),
        (error: any) => {
          if (error) reject(error);
          resolve(data);
        }
      );
    });
  }
}

export default PurchaseModel;
