import {
  Box,
  Button,
  FormHelperText,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ContactUs from "../Components/ContactUs";
import MenuItems from "../Components/MenuItems";
import axios from "axios";
import { BASE_URL } from "../services/baseUrl";
import toast, { Toaster } from "react-hot-toast";
import { menuValidationSchema } from "../validations/MenuValidation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {md:400,xs:350},
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p:2
};

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => (setOpen(false), setFormErrors({}));
  const [formErrors, setFormErrors] = useState({});
  const [menu, setMenu] = useState({
    name: "",
    description: "",
    items: [
      {
        itemName: "",
        itemDescription: "",
        itemPrice: null,
      },
    ],
  });

  // Handle input changes for menu
  const handleMenuChange = (name, value) => {
    setMenu({
      ...menu,
      [name]: value,
    });
  };

  // Handle input changes for items
  const handleItemChange = (index, name, value) => {
    setMenu((prevMenu) => {
      const updatedItems = [...prevMenu.items];
      updatedItems[index] = { ...updatedItems[index], [name]: value };
      return {
        ...prevMenu,
        items: updatedItems,
      };
    });
  };

  // Add a new item
  const addNewItem = () => {
    setMenu({
      ...menu,
      items: [
        ...menu.items,
        { itemName: "", itemDescription: "", itemPrice: 0 },
      ],
    });
  };

  // Remove an item
  const removeItem = (index) => {
    const updatedItems = menu.items.filter((_, i) => i !== index);
    setMenu({
      ...menu,
      items: updatedItems,
    });
  };

  //add api
  const handleAddMenu = async () => {
    try {
      await menuValidationSchema.validate(menu, { abortEarly: false }); // Validate all fields
      //console.log( menu);
      await axios
        .post(`${BASE_URL}/api/menu/add-menu`, menu)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Menu created successfully!");
            setTimeout(() => {
              setOpen(false);
            }, 500);
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message || "Error creating menu!");
          setMenu({
            name: "",
            description: "",
            items: [
              {
                itemName: "",
                itemDescription: "",
                itemPrice: 0,
              },
            ],
          });
          //   console.log(err);
        });
    } catch (validationError) {
      const errors = {};
      validationError.inner.forEach((error) => {
        errors[error.path] = error.message; 
      });
      setFormErrors(errors); 
    }
  };

  return (
    <>
      <Stack
        sx={{
          backgroundImage: "url(/assets/Rectangle%20103.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          component={"h5"}
          mt={{ md: 15, xs: 5 }}
          fontSize={{ md: 75, xs: 40 }}
          fontWeight={"bold"}
          color="white"
          sx={{
            textShadow: "4px 3px 0px #800020",
            display: "inline-block",
          }}
        >
          MENU
        </Typography>
        <Stack width={"100%"} direction={"row"} justifyContent={"center"}>
          <Typography
            component={"p"}
            fontSize={{ md: 18, xs: 16 }}
            color="#BBBBBB"
            width={681}
          >
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </Typography>
        </Stack>
        <Stack
          mt={4}
          mb={7}
          direction={"row"}
          justifyContent={"center"}
          width={"100%"}
        >
          <Button
            sx={{
              width: { md: 200, xs: 150 },
              height: { md: 49, xs: 31 },
              border: "1px solid #0796EF",
              bgcolor: "#0796EF",
              color: "white",
              fontSize: 17,
              borderRadius: 0,
            }}
            onClick={handleOpen}
          >
            Add menu
          </Button>
        </Stack>
        <Modal
          sx={{
            overflow: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              component={"h6"}
              color="#0796EF"
              fontSize={30}
              mb={3}
              fontWeight={500}
            >
              Menu Details
            </Typography>
            <TextField
              required={true}
              placeholder="Menu Name"
              fullWidth
              onChange={(e) => handleMenuChange("name", e.target.value)}
              sx={{
                "& .MuiInputBase-root": {
                  bgcolor: "white",
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#0796EF",
                },
              }}
            />
            <FormHelperText sx={{ color: "red",fontFamily:'monospace !important',fontSize:13,mb:2 }}>
              {formErrors.name}
            </FormHelperText>
            <TextField
              placeholder="Menu Description"
              fullWidth
              multiline
              rows={3}
              onChange={(e) => handleMenuChange("description", e.target.value)}
              sx={{
                "& .MuiInputBase-root": {
                  bgcolor: "white",
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#0796EF",
                },
              }}
            />
            <FormHelperText sx={{ color: "red",fontFamily:'monospace !important',fontSize:13,mb:2 }}>
              {formErrors.description}
            </FormHelperText>
            <Typography color="white" fontWeight={500} mb={1}>
              Items:
            </Typography>
            {formErrors?.items && (
              <FormHelperText sx={{ color: "red",fontFamily:'monospace !important' ,fontSize:13}}>
                {formErrors.items}
              </FormHelperText>
            )}
            {menu.items.map((item, index) => (
              <Stack key={index} spacing={1} mb={2}>
                <TextField
                  required
                  placeholder="Item Name"
                  value={item.itemName}
                  onChange={(e) =>
                    handleItemChange(index, "itemName", e.target.value)
                  }
                  fullWidth
                  sx={{
                    mb: 2,
                    "& .MuiInputBase-root": {
                      bgcolor: "white",
                    },
                    "& .Mui-focused .MuiInputLabel-root": {
                      color: "#0796EF",
                    },
                  }}
                />
                <TextField
                  required
                  placeholder="Item Description"
                  value={item.itemDescription}
                  onChange={(e) =>
                    handleItemChange(index, "itemDescription", e.target.value)
                  }
                  fullWidth
                  multiline
                  rows={2}
                  sx={{
                    mb: 2,
                    "& .MuiInputBase-root": {
                      bgcolor: "white",
                    },
                    "& .Mui-focused .MuiInputLabel-root": {
                      color: "#0796EF",
                    },
                  }}
                />
                <TextField
                  required
                  placeholder="Item Price"
                  value={item.itemPrice}
                  type="number"
                  onChange={(e) =>
                    handleItemChange(index, "itemPrice", e.target.value)
                  }
                  fullWidth
                  sx={{
                    mb: 2,
                    "& .MuiInputBase-root": {
                      bgcolor: "white",
                    },
                    "& .Mui-focused .MuiInputLabel-root": {
                      color: "#0796EF",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeItem(index)}
                  disabled={menu.items.length === 1}
                >
                  Remove Item
                </Button>
              </Stack>
            ))}

            <Button
              variant="outlined"
              sx={{ color: "white" }}
              onClick={addNewItem}
              fullWidth
            >
              Add New Item
            </Button>

            <Button
            size="small"
              sx={{
                width: 120,
                bgcolor: "#0796EF",
                color: "white",
                fontSize: 17,
                borderRadius: 1,
                mt: 3,
              }}
              onClick={handleAddMenu}
            >
              Add Menu
            </Button>
            <Button
            size="small"
              sx={{
                width: 120,
                bgcolor: "red",
                color: "white",
                fontSize: 17,
                borderRadius: 1,
                mt: 3,
                ml:2
              }}
              onClick={()=>setOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </Modal>
      </Stack>
      <MenuItems />
      <ContactUs />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          padding: "10px",
          fontSize: "17px",
          fontFamily: "sans-serif",
        }}
      />
    </>
  );
};

export default Menu;
