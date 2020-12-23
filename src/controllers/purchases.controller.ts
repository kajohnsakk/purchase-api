import { responseHelper } from "../helpers";
import { purchaseService } from "../services";

class PurchaseController {
  async getPurchaseTransactions(req: any, res: any) {
    try {
      const perchaseTransactions: any = await purchaseService.getPurchasetransactions();
      const payload = responseHelper({
        statusCode: 200,
        message: "Success",
        data: perchaseTransactions,
      });

      res.send(payload);
    } catch (error) {
      const payload = responseHelper({
        statusCode: 400,
        message: error.message,
      });
      res.send(payload);
    }
  }

  async insertPurchaseTransaction(req: any, res: any) {
    try {
      const purchaseData = await purchaseService.insertPurchaseTransaction(
        req.body
      );

      const payload = responseHelper({
        statusCode: 200,
        message: "Success",
        data: purchaseData,
      });

      res.send(payload);
    } catch (error) {
      const payload = responseHelper({
        statusCode: 400,
        message: error.message,
      });
      res.send(payload);
    }
  }
}

export default new PurchaseController();
