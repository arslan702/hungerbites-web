/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";
import { useState } from 'react';
import { TableBody, TableRow, TableCell, IconButton, Typography, Checkbox, Popover, MenuItem, Pagination } from '@mui/material';
import Table from '@/components/Table';
import Iconify from '@/components/iconify';

import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../configuration';
import moment from 'moment';

const TABLE_HEAD = [
    { id: 'id', label: 'Review Id', alignRight: false },
    { id: 'foodName', label: 'Food Name', alignRight: false },
    { id: 'reviewText', label: 'Review Text', alignRight: false },
    { id: 'rating', label: 'Rating', alignRight: false, isNumber: true },
    { id: 'updated', label: 'Updated', alignRight: false },
    { id: '' }
];

const FeaturedProducts = ({ setCurrentRowData, reviewsList, setReviewsList, setOpenEdit }) => {
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(null);
    const [currentRowId, setCurrentRowId] = useState(null);
    const [page, setPage] = useState(1);
    const [id, setId] = useState('')

    console.log({reviewsList})
    useEffect(() => {
        const user = JSON?.parse(localStorage.getItem('user'))
        setId(user?.id)
        axios.get(`${API_URL}/review/user/${user?.id}`)
        .then((res) => {
            setReviewsList(res?.data?.data)
        })
    },[])

    const handleDeleteClick = async () => {
        setOpen(null);
        await axios.delete(`${API_URL}/review/${currentRowId}`);
        axios.get(`${API_URL}/review/user/${id}`)
        .then((res) => {
            setReviewsList(res?.data?.data)
        })
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

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const rowsPerPage = 10; // Number of rows to display per page

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    const currentRows = reviewsList?.slice(start, end);
    return (
        <>
            <Table
                tableHead={TABLE_HEAD}
                data={currentRows}
                handleDeleteClick={handleDeleteClick}
                handleEditClick={handleEditClick}
                showActions
                selected={selected}
                setSelected={setSelected}
            >
                <TableBody>
                    {currentRows?.map((row) => {
                        const {
                            id,
                            MenuItem,
                            review_text,
                            rating,
                            updatedAt
                        } = row;
                        const selectedRow = selected.indexOf(row.id) !== -1;
                        return (
                            <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedRow}>
                                <TableCell padding="checkbox">
                                    <Checkbox checked={selectedRow} onChange={(event) => handleClick(event, id)} />
                                </TableCell>
                                <TableCell>
                                    <Typography>{id}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{MenuItem?.name}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{review_text}</Typography>
                                </TableCell>
                                <TableCell align="left">{rating}</TableCell>
                                <TableCell align="left">{moment(updatedAt).format('DD/MM/YYYY')}</TableCell>
                                <TableCell align="right">
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
            <Pagination
                sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}
                count={Math.ceil(reviewsList?.length / rowsPerPage)}
                page={page}
                onChange={handlePageChange}
            />
        </>
    );
};

export default FeaturedProducts;
