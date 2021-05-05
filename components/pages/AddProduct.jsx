import React, {useEffect, useState} from "react";
import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import FileUpload from "../FileUpload";
import validate from "../validateInfo";


const url = "http://localhost:3000/api/v1/products";

const AddProduct = props => {
    const [values, setValues] = useState({
        name: "",
        category: "Mobile Phones",
        description: "",
        brand: "",
        sku: "",
        price: "",
        qty: "",
        img: "",
        imgFile: {}
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            if (url) {
                submitForm();
                console.log(values);
            }
        }
    })

    const submitForm = () => {
        fetch(url, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(values)
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    const addImg = img => {
        const {file} = img;
        setValues({...values, img: file.name, imgFile: file});
    }

    return (
        <Card variant="outlined" className={props.styles.cardContainer}>
            <CardHeader
                title="Add Product"
                action={
                    <Link to="/products">
                        <Button
                            name="All Products"
                            btnStyle="btn-login"
                        />
                    </Link>
                }
                classes={{action: props.styles.action}}
            />
            <hr className={props.styles.hr} />

            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={12} md={6}>
                            <Input
                                label="Name" type="text" value={values.name}
                                id="name" name="name"
                                onChange={handleChange} error={errors["name"]}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Select
                                label="Category" type="select" value={values.category}
                                id="category" name="category"
                                values={["Mobile Phones", "Laptops", "TVs", "Headphones"]}
                                onChange={handleChange} error={errors["category"]}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <label
                                htmlFor="description"
                                className="form-label"
                                style={{float: "left"}}
                            >
                                Description
                            </label>
                            <textarea
                                value={values.description} id="description"
                                name="description" rows={5}
                                onChange={handleChange} className="input-box"
                            />
                            <p className="error">{errors["description"]}</p>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Input
                                label="Brand" type="text" value={values.brand}
                                id="brand" name="brand"
                                onChange={handleChange} error={errors["brand"]}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Input
                                label="SKU" type="text" value={values.sku}
                                id="sku" name="sku"
                                onChange={handleChange} error={errors["sku"]}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Input
                                label="Price" type="text" value={values.price}
                                id="price" name="price"
                                onChange={handleChange} error={errors["price"]}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Input
                                label="Qty" type="text" value={values.qty}
                                id="qty" name="qty"
                                onChange={handleChange} error={errors["qty"]}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <FileUpload callback={addImg} />
                        </Grid>
                    </Grid>
                    <div style={{marginBlock: "24px", float: "right"}}>
                        <Button name="Save" btnStyle="btn-save" type="submit" />
                        <Button name="Cancel" btnStyle="btn-cancel" />
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default AddProduct;