import React, {useState} from "react";
import {Switch, Route, useHistory} from "react-router-dom";
import {makeStyles, Tab, Tabs} from "@material-ui/core";
import TabPanel from "../TabPanel";
import "./ProductsOrders.css";
import AllProducts from "./AllProducts";
import AllOrders from "./AllOrders";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const useStyles = makeStyles({
    cardContainer: {
        border: "0px",
        borderRadius: "16px",
        marginBlock: "24px",
    },
    tableHead: {
        "&:hover": {
            cursor: "pointer"
        }
    },
    darkCell: {
        backgroundColor: "black",
        color: "white"
    },
    sortIcon: {
        fill: "white"
    },
    action: {
        marginTop: "0px",
        marginBottom: "0px",
        marginRight: "8px"
    },
    hr: {
        border: "1px lightgrey solid",
        marginTop: "-4px",
        marginBottom: "8px"
    },
    tableData: {
        fontWeight: "bold"
    }
})

const ProductsOrders = () => {
    const styles = useStyles();

    const [tab, setTab] = useState(0);
    // State for the current product in edit
    const [editProduct, setEditProduct] = useState(null);

    const history = useHistory();

    const toProducts = () => {
        history.push("/products");
    }

    const changeTab = (event, tab) => setTab(tab);

    return (
        <div className="container">
            <Tabs value={tab} onChange={changeTab}>
                <Tab disableRipple label="Products" />
                <Tab disableRipple label="Orders" />
            </Tabs>
            <hr className="separator"/>

            <TabPanel value={tab} index={0}>
                <Switch>
                    <Route exact path="/products">
                        <AllProducts styles={styles} setEditProduct={setEditProduct} />
                    </Route>
                    <Route path="/products/add">
                        <AddProduct styles={styles} toProducts={toProducts} />
                    </Route>
                    <Route path="/products/edit">
                        <EditProduct styles={styles} editProduct={editProduct} toProducts={toProducts} />
                    </Route>
                </Switch>
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <AllOrders styles={styles} />
            </TabPanel>
        </div>
    )
}

export default ProductsOrders;