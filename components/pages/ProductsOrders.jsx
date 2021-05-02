import React, {useState} from "react";
import {Tab, Tabs, Typography} from "@material-ui/core";
import TabPanel from "../TabPanel";
import "./ProductsOrders.css";

const ProductsOrders = () => {
    const [tab, setTab] = useState(0);

    const changeTab = (event, tab) => setTab(tab);

    return (
        <div className="container">
            <Tabs value={tab} onChange={changeTab}>
                <Tab label="Products" />
                <Tab label="Orders" />
            </Tabs>
            <hr className="separator"/>

            <TabPanel value={tab} index={0}>
                <Typography>Products</Typography>
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <Typography>Orders</Typography>
            </TabPanel>
        </div>
    )
}

export default ProductsOrders;