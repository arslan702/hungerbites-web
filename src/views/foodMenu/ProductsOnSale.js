/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { TableBody, TableRow, TableCell, IconButton, Typography, Checkbox, Popover, MenuItem } from '@mui/material';
import Table from '../../components/Table';
import Iconify from '../../components/iconify';
import { makeStyles } from '@mui/styles';

import { apiDelete, apiGet, resourceUrl } from '../../services';
import { useEffect } from 'react';
import moment from 'moment';

const TABLE_HEAD = [
    { id: 'id', label: 'Product Id', alignRight: false },
    { id: 'startingDate', label: 'Starting Date', alignRight: false },
    { id: 'productName', label: 'Product Name', alignRight: false },
    { id: 'endingDate', label: 'Ending Date', alignRight: false },
    { id: 'sellingPrice', label: 'Selling Price', alignRight: false, isNumber: true },
    { id: 'totalUnits', label: 'Total Units', alignRight: false, isNumber: true },
    { id: 'discountPercentage', label: 'Discount Percentage', alignRight: false },
    { id: 'discountedPrice', label: 'Discount Price', alignRight: false },
    { id: 'updated', label: 'Updated', alignRight: false },
    { id: '' }
];

const useRowStyles = makeStyles({
    root: ({ open }) => ({
      borderRadius: '5px'
    }),
    tableBody: {
      "& > :not(:last-child)": {
        borderBottom: "10px solid #EDF1F5",
      }
    }
  });

const url = resourceUrl('discount/valid');

const ProductsOnSale = ({ value, setCurrentRowData, discountsList, setDiscountsList, setOpenEdit }) => {
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(null);
    const [currentRowId, setCurrentRowId] = useState(null);
    const classes = useRowStyles();

    async function fetchDiscounts() {
        const data = _.get(await apiGet(url), 'data');
        // console.log({ data })
        setDiscountsList(data)
    }
    console.log({discountsList})
    useEffect(() => {
        (async function () {
            await fetchDiscounts();
        })();
    },[])

    const handleDeleteClick = async () => {
        setOpen(null);
        await apiDelete(url, { id: currentRowId });
        await fetchDiscounts();
    };

    const handleEditClick = (id) => {
        setOpen(null);
        setOpenEdit(true);
    };

    const handleOpenMenu = (event, row) => {
        const { id } = row;
        setCurrentRowData(row);
        setCurrentRowId(id);
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
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    return (
        <>
            <Table
                tableHead={TABLE_HEAD}
                data={discountsList}
                handleDeleteClick={handleDeleteClick}
                handleEditClick={handleEditClick}
                showActions
                selected={selected}
                setSelected={setSelected}
            >
                <TableBody className={classes.tableBody}>
                    {discountsList?.map((row) => {
                        const {
                            id,
                            start_date,
                            Product,
                            end_date,
                            discount_amount,
                            updatedAt
                        } = row;
                        const selectedRow = selected.indexOf(row.id) !== -1;
                        return (
                            <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedRow} className={classes.root}>
                                <TableCell padding="checkbox">
                                    <Checkbox checked={selectedRow} onChange={(event) => handleClick(event, id)} />
                                </TableCell>
                                <TableCell sx={{padding: '6px 16px 6px 16px'}}>
                                    <Typography>{id}</Typography>
                                </TableCell>
                                <TableCell sx={{padding: '6px 16px 6px 16px'}}>
                                    <Typography>{start_date}</Typography>
                                </TableCell>
                                <TableCell sx={{padding: '6px 16px 6px 16px'}}>
                                    <Typography>{Product?.name}</Typography>
                                </TableCell>
                                <TableCell align="left" sx={{padding: '6px 16px 6px 16px'}}>{end_date}</TableCell>
                                <TableCell align="left" sx={{padding: '6px 16px 6px 16px'}}>{Product?.price}</TableCell>
                                <TableCell align="left" sx={{padding: '6px 16px 6px 16px'}}>{Product?.quantity}</TableCell>
                                <TableCell align="left" sx={{padding: '6px 16px 6px 16px'}}>{((discount_amount / Product?.price) * 100).toFixed(2)} %</TableCell>
                                <TableCell align="left" sx={{padding: '6px 16px 6px 16px'}}>{discount_amount}</TableCell>
                                <TableCell align="left" sx={{padding: '6px 16px 6px 16px'}}>{moment(updatedAt).format('DD/MM/YYYY')}</TableCell>
                                <TableCell align="right" sx={{padding: '6px 16px 6px 16px'}}>
                                    <IconButton size="large" color="inherit" onClick={(e) => handleOpenMenu(e, row)}>
                                        <Iconify icon={'eva:more-vertical-fill'} />
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
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 1,
                        width: 140,
                        '& .MuiMenuItem-root': {
                            px: 1,
                            typography: 'body2',
                            borderRadius: 0.75
                        }
                    }
                }}
            >
                <MenuItem onClick={handleEditClick}>
                    <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                    Edit
                </MenuItem>
                <MenuItem sx={{ color: 'error.main' }} onClick={handleDeleteClick}>
                    <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
                    Delete
                </MenuItem>
            </Popover>
        </>
    );
};

export default ProductsOnSale;
