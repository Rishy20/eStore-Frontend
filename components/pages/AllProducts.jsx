import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {
    ButtonGroup,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead, TablePagination,
    TableRow, TableSortLabel, Typography
} from "@material-ui/core";
import Button from "../Button";
import {Delete, Edit} from "@material-ui/icons";

const AllProducts = props => {
    // Data states
    const [data, setData] = useState([]);
    const [tableData, setTableData] = useState([]);
    // Sorting states
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortedCount, setSortedCount] = useState(0);
    // Pagination states
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    // Edit product state
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        const dbData = [
            {img: "img_src", name: "Google Pixel 5", price: 200000, qty: 25},
            {img: "img_src", name: "Google Pixel 4", price: 150000, qty: 35},
            {img: "img_src", name: "Google Pixel 3", price: 120000, qty: 15},
            {img: "img_src", name: "Google Pixel 2", price: 80000, qty: 20},
            {img: "img_src", name: "Google Pixel 1", price: 600000, qty: 35},
            {img: "img_src", name: "Samsung Galaxy S8", price: 170000, qty: 32},
            {img: "img_src", name: "LG L3", price: 100000, qty: 14},
            {img: "img_src", name: "Xiaomi Redmi 9", price: 35000, qty: 53},
            {img: "img_src", name: "Apple iPhone 8", price: 220000, qty: 23},
            {img: "img_src", name: "Nokia 5.3", price: 26000, qty: 1},
            {img: "img_src", name: "Nokia 6.1", price: 32000, qty: 4},
            {img: "img_src", name: "Nokia 8.2", price: 63000, qty: 3},
        ]

        setData(dbData);
    }, []);

    useEffect(() => {
        convertToTableData();
    }, [sortedCount, data]);

    // Data functions
    const convertToTableData = () => {
        let newTableData = data.map(item => (
            {...item, price: "Rs. " + item.price}
        ));

        setTableData(newTableData);
    }

    // Sorting functions
    const sortItems = column => {
        let newData = data;

        if (column !== sortBy) {
            setSortOrder("asc");
            newData.sort(dynamicSort(column, false));
        } else {
            const newOrder = sortOrder === "asc" ? "desc" : "asc";
            setSortOrder(newOrder);
            newData.sort(dynamicSort(column, newOrder === "desc"));
        }

        setData(newData);
        setSortBy(column);
        setSortedCount(sortedCount + 1);
    }

    const dynamicSort = (column, desc) => {
        let order = desc ? -1 : 1;

        return (a, b) => {
            let result = (a[column] < b[column]) ? -1 : (a[column] > b[column]) ? 1 : 0;
            return result * order;
        }
    }

    // Pagination functions
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(event.target.value);
        setPage(0);
    }

    // Delete product
    const deleteProduct = delItem => {
        let newData = data.filter(item => (item.name !== delItem.name));
        setData(newData);
    }

    return (
        <Card variant="outlined" className={props.styles.cardContainer}>
            <CardHeader
                title="All Products"
                action={
                    <Link to="add">
                        <Button
                            name="Add Products"
                            btnStyle="btn-login"
                        />
                    </Link>
                }
                classes={{action: props.styles.action}}
            />
            <hr className={props.styles.hr} />

            <CardContent>
                <TableContainer component={Paper}>
                    <Table size="small">

                        {/* Table Head */}
                        <TableHead className={props.styles.tableHead}>
                            <TableRow>
                                <TableCell
                                    classes={{head: props.styles.darkCell}}
                                    align="center"
                                >
                                    Image
                                </TableCell>
                                <TableCell
                                    classes={{head: props.styles.darkCell}}
                                    align="center"
                                    onClick={() => sortItems("name")}
                                >
                                    Name
                                    <TableSortLabel
                                        active={sortBy === "name"}
                                        direction={sortOrder}
                                        classes={{icon: props.styles.sortIcon}}
                                    />
                                </TableCell>
                                <TableCell
                                    classes={{head: props.styles.darkCell}}
                                    align="center"
                                    onClick={() => sortItems("price")}
                                >
                                    Price
                                    <TableSortLabel
                                        active={sortBy === "price"}
                                        direction={sortOrder}
                                        classes={{icon: props.styles.sortIcon}}
                                    />
                                </TableCell>
                                <TableCell
                                    classes={{head: props.styles.darkCell}}
                                    align="center"
                                    onClick={() => sortItems("qty")}
                                >
                                    Qty
                                    <TableSortLabel
                                        active={sortBy === "qty"}
                                        direction={sortOrder}
                                        classes={{icon: props.styles.sortIcon}}
                                    />
                                </TableCell>
                                <TableCell
                                    classes={{head: props.styles.darkCell}}
                                    align="center"
                                >
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        {/* Table Data */}
                        <TableBody>
                                {tableData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map(item => (
                                    <TableRow key={item.name}>
                                        <TableCell align="center">
                                            <img
                                                src={item.img}
                                                style={{
                                                    minHeight: "160px",
                                                    maxHeight: "160px"
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography
                                                variant="body1"
                                                classes={{body1: props.styles.tableData}}
                                            >
                                                {item.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography
                                                variant="body1"
                                                classes={{body1: props.styles.tableData}}
                                                style={{color: "red"}}
                                            >
                                                {item.price}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography
                                                variant="body1"
                                                classes={{body1: props.styles.tableData}}
                                            >
                                                {item.qty}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <ButtonGroup color="primary">
                                                <IconButton
                                                    component={Link}
                                                    to="/products/edit"
                                                    onClick={() => setEditProduct(item)}
                                                >
                                                    <Edit />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => deleteProduct(item)}
                                                >
                                                    <Delete />
                                                </IconButton>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    count={tableData.length}
                                    page={page}
                                    rowsPerPage={rowsPerPage}
                                    rowsPerPageOptions={[10, 25, 50]}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default AllProducts;