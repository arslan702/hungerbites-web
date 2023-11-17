"use client";
import { useEffect, useState } from "react";
import {
  Alert,
  Dialog,
  Grid,
  TableBody,
  MenuItem,
  Popover,
  TableCell,
  TableRow,
  Typography,
  Checkbox,
  IconButton,
  Pagination,
} from "@mui/material";
import MainCard from "@/ui-component/cards/MainCard";
import Table from "@/components/Table";
import Iconify from "@/components/iconify";
import Label from "@/components/label";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { API_URL } from "../../configuration";
import moment from "moment/moment";
import OrderDetails from './OrderDetails';

const TABLE_HEAD = [
  { id: "id", label: "Order ID" },
  { id: "created", label: "Placed On" },
  // { id: "tracking", label: "Tracking_ID", alignRight: false, isNumber: true },
  {
    id: "fulfillment",
    label: "Fulfillment",
    alignRight: false,
    isNumber: true,
  },
  // { id: "quantity", label: "Quantity", alignRight: false },
  { id: "totalPrice", label: "Total Price", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "updated", label: "Updated", alignRight: false },
  { id: 'details', label: 'Details', alignRight: false },
  { id: "" },
];

const useRowStyles = makeStyles({
  root: ({ open }) => ({
    borderRadius: '5px'
  }),
  tableBody: {
    "& > :not(:last-child)": {
      borderBottom: "5px solid #EDF1F5",
    }
  }
});

const OrdersView = () => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [currentRowId, setCurrentRowId] = useState(null);
  const [currentStatus, setCurrentStatus] = useState('')
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [page, setPage] = useState(1);
  const classes = useRowStyles();

  useEffect(() => {
    const user = JSON?.parse(localStorage.getItem('user'))
    setUserId(user?.id);
    axios.get(`${API_URL}/order/user/${user?.id}`)
    .then((res) => {
      setOrders(res?.data);
    })
  },[message])

  const handleDeleteClick = (id) => {
    if(currentStatus === 'pending' || 'delivered' || 'cancelled'){
      axios.delete(`${API_URL}/order/${currentRowId}`).then((res) => {
        setMessage('Your order is deleted.')
        setOpenDialog(true);
        setOpen(false);
        axios.get(`${API_URL}/order/user/${userId}`)
        .then((res) => {
        setOrders(res?.data);
        })  
      })
    } else {
      setMessage(`Your order is in processing. Can not be deleted now.`)
      setOpenDialog(true);
      setOpen(false);
    }
  };
  const handleEditClick = (id) => {
    if(currentStatus === 'pending' || 'processing'){
      axios.put(`${API_URL}/order/${currentRowId}`, { status: 'cancelled' }).then((res) => {
        setMessage('Your order is cancelled.')
        setOpenDialog(true);
        setOpen(false);
        axios.get(`${API_URL}/order/user/${user?.user_id}`)
        .then((res) => {
        setOrders(res?.data);
        })
      })
    } else {
      setMessage(`Your order is shipped. Can not be cancelled now.`)
      setOpenDialog(true);
      setOpen(false);
    }
  };
  console.log({currentStatus});
  const handleDetails = (event, row) => {
    const { id } = row;
    setCurrentRowId(id);
    setOpenDetails(true);
}
  const handleOpenMenu = (event, row) => {
    const { id } = row;
    const { Order } = row;
    setCurrentRowId(id);
    setCurrentStatus(Order?.status);
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const rowsPerPage = 10; // Number of rows to display per page

  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  const currentRows = !orders?.length ? [] : orders?.slice(start, end);

  return (
    <MainCard title="My Orders" darkTitle>
      <Table
        tableHead={TABLE_HEAD}
        data={currentRows}
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
        showActions
        selected={selected}
        setSelected={setSelected}
      >
        <TableBody className={classes.tableBody}>
          {currentRows?.map((row) => {
            const {
              id,
              order_date,
              status,
              total_amount,
              updatedAt
            } = row;
            const selectedRow = selected.indexOf(row.id) !== -1;
            return (
              <TableRow
                hover
                key={id}
                tabIndex={-1}
                role="checkbox"
                selected={selectedRow}
                className={classes.root}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedRow}
                    onChange={(event) => handleClick(event, id)}
                  />
                </TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>
                  <Typography>{id}</Typography>
                </TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>
                  <Typography>{moment(order_date).format('DD/MM/YYYY')}</Typography>
                </TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>
                  <Label label={'fullfilment'} color="primary" />
                </TableCell>
                {/* <TableCell sx={{padding: '2px 16px 2px 16px'}}>{quantity}</TableCell> */}
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>{total_amount}</TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>
                  <Label label={status} color="primary" />
                </TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>{moment(updatedAt).format('DD/MM/YYYY')}</TableCell>
                <TableCell align="left" sx={{padding: '6px 16px 6px 16px'}} onClick={(e) => handleDetails(e, row)}>
                  <Label label={"Order details"} sx={{ cursor: 'pointer'}} color="primary" />
                </TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={(e) => handleOpenMenu(e, row)}
                  >
                    <Iconify icon={"eva:more-vertical-fill"} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem onClick={handleEditClick}>
          {/* <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} /> */}
          Cancel Order
        </MenuItem>
        <MenuItem onClick={handleDeleteClick} sx={{ color: "error.main" }}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
      <Pagination
        sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}
        count={Math.ceil(orders?.length / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
      />
      <Dialog open={openDialog}>
      <Alert onClose={() => setOpenDialog(false)}>{message}</Alert>
      </Dialog>
      <Dialog open={openDetails}>
        <OrderDetails id={currentRowId} setOpenDetails={setOpenDetails}/>
      </Dialog>
    </MainCard>
  );
};
export default OrdersView;
