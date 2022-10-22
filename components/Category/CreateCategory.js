import React, { useState } from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import Swal from 'sweetalert2';

export default function CreateCategory() {
    const [categoryName, setCategoryName] = useState("")

    const handleChange = (e) => {
        setCategoryName(e.target.value)
    }

    const handleClcik = () => {
        console.log("categoryName", categoryName)
        if (localStorage.getItem("category") != null) {
            let category = JSON.parse(localStorage.getItem("category"));
            const filterItems = category.filter(p => p.name == categoryName);
            if (filterItems.length == 0) {
                const newObj = {
                    name: categoryName,
                    serial: category.length + 1
                }
                let newCategory = [...category, newObj];
                saveCategoryToSession(newCategory)
                Swal.fire(
                    'Thanks!',
                    'Category Saved Successfully',
                    'success'
                )
            } else {
                alert("Category Already exists")
            }

        } else {
            let categoryArray = []
            const newObj = {
                name: categoryName,
                serial: 1
            }
            let addCatefory = categoryArray.push(newObj)
            Swal.fire(
                'Thanks!',
                'Category Saved Successfully',
                'success'
            )
            saveCategoryToSession(categoryArray)
        }
    }

    const saveCategoryToSession = (category) => {
        if (category.length === 0) {
            clearCategoryFromSession();
        } else {
            localStorage.setItem("category", JSON.stringify(category));
        }
    }
    const clearCategoryFromSession = () => {
        localStorage.removeItem("category");
    }
    return (
        <div>
            {/* <input type="text" onChange={handleChange} name="category" placeholder="input a category name" />
            <button onClick={() => handleClcik()}> Category Save Ashik</button> */}
            <Row style={{margin:"20px"}}>
                <Label
                    for="category"
                    sm={1}
                >
                    CategoryName
                </Label>
                <Row>
                    <Col sm={6}>
                        <Input
                            name="category"
                            onChange={handleChange}
                            placeholder="input a category name"
                            type="text"
                        />
                    </Col>
                    <Col sm={6}>
                        <Button
                            color="primary" onClick={() => handleClcik()}
                        >
                            Save
                        </Button>
                    </Col>
                </Row>
            </Row>

        </div>
    )
}
