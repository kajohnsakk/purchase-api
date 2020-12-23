import { validationHelper } from "../../../helpers";
const { Schema } = validationHelper;

const userValidation = {
  purchase: () => {
    return {
      body: Schema.object({
        item_list: Schema.array().required(),
        total_discount: Schema.string().required(),
        payment: Schema.number().required(),
      }),
    };
  },
};

export default userValidation;
