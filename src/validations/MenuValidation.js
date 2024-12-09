import * as Yup from "yup";

export const menuValidationSchema = Yup.object({
  name: Yup.string().trim().required("Menu name is required."),
  description: Yup.string().trim().required("Menu description is required."),
  items: Yup.array()
    .of(
      Yup.object({
        itemName: Yup.string().required("Item name is required."),
        itemDescription: Yup.string().required("Item description is required."),
        itemPrice: Yup.number().positive().required("Item price is required."),
      })
    )
    .test(
      "items-required",
      "All fields for each item must be filled",
      function (value) {
        // Check if any of the fields in the item is empty
        for (let item of value) {
          if (!item.itemName || !item.itemDescription || !item.itemPrice) {
            return this.createError({
              path: "items",
              message: "All fields for each item are required!",
            });
          }
        }
        return true; // If no empty field is found, validation passes
      }
    ),
});
