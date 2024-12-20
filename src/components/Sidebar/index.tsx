// import React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import StarIcon from "@mui/icons-material/Star";
// import { MenuItem } from "@mui/material";

// export default function Sibebar() {
//     const [open, setOpen] = React.useState(false);

//     // Toggle drawer state
//     const toggleDrawer = (newOpen: boolean) => () => {
//         setOpen(newOpen);
//     };

//     // List of products
//     const products = [
//         { name: "Product 1", icon: <ShoppingCartIcon /> },
       
//     ];

//     const DrawerList = (
//         <Box
//             sx={{ width: 250 }}
//             role="presentation"
//             onClick={toggleDrawer(false)}
//             onKeyDown={toggleDrawer(false)}
//         >
//             <List>
//                 {products.map((product) => (
//                     <ListItem key={product.name} disablePadding>
//                         <ListItemButton>
//                             <ListItemIcon>{product.icon}</ListItemIcon>
//                             <ListItemText primary={product.name} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//             <List>
//                 <ListItem disablePadding>
//                     <ListItemButton>
//                         <ListItemIcon>
//                             <ShoppingCartIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="View All Products" />
//                     </ListItemButton>
//                 </ListItem>
//             </List>
//         </Box>
//     );

//     return (
//         <div>
//             <Button variant="contained" color="primary" onClick={toggleDrawer(true)}>
//              <MenuItem/>
//             </Button>
//             <Drawer open={open} onClose={toggleDrawer(false)}>
//                 {DrawerList}
//             </Drawer>
//         </div>
//     );
// }
