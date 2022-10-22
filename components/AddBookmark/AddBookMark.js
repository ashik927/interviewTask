import React, { useEffect, useState } from 'react'
import { Button, Col, Input, Label, Row } from 'reactstrap';
import Swal from 'sweetalert2';

export default function AddBookMark() {

    const [allCategory, setAllCategory] = useState([])
    const [error, setError] = useState(false)

    const [formData, setFormData] = useState({
        title: "",
        link: "",
        category: ""
    })

    useEffect(() => {
        setAllCategory(JSON.parse(localStorage.getItem("category")))
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleClcik = () => {
        if (formData.title && formData.link && formData.category) {
            setError(false)
            if (localStorage.getItem("addBookmark") != null) {
                let bookMark = JSON.parse(localStorage.getItem("addBookmark"));
                const filterItems = bookMark.filter(p => p.link == formData.link);
                if (filterItems.length == 0) {
                    const newObj = {
                        ...formData,
                        serial: bookMark.length + 1
                    }
                    let newBookMark = [...bookMark, newObj];
                    saveCategoryToSession(newBookMark)
                    Swal.fire(
                        'Thanks!',
                        'Bookmark Saved Successfully',
                        'success'
                    )
                } else {
                    alert("Link Already exists")
                }

            } else {
                let bookMarkArray = []
                const newObj = {
                    ...formData,
                    serial: 1
                }
                let addBookmark = bookMarkArray.push(newObj)
                Swal.fire(
                    'Thanks!',
                    'Bookmark Saved Successfully',
                    'success'
                )
                saveCategoryToSession(bookMarkArray)
            }
        }else{
            setError(true)
        }
    }

    const saveCategoryToSession = (category) => {
        if (category.length === 0) {
            clearCategoryFromSession();
        } else {
            localStorage.setItem("addBookmark", JSON.stringify(category));
        }
    }
    const clearCategoryFromSession = () => {
        localStorage.removeItem("addBookmark");
    }

    return (
        <div>
            {
               error && formData.title == "" && <p style={{color:"red"}}>Title Is Required</p>
            }
            {
              error &&  formData.link == "" && <p style={{color:"red"}}>link Is Required</p>
            }
            {
              error &&  formData.category == "" && <p style={{color:"red"}}>cCtegory Is Required</p>
            }

            <Row style={{ margin: "20px" }}>

                <Row>
                    <Col sm={6}>
                        <Input
                            name="title"
                            onChange={handleChange}
                            placeholder="please input a title"
                            type="text"
                            max="30"
                        />
                    </Col>
                    <Col sm={6}>
                        <Input
                            name="link"
                            onChange={handleChange}
                            placeholder="please input a link"
                            type="text"
                        />
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                    <Col sm={6}>
                        <select name="category" value={formData.category} onChange={handleChange} style={{ padding: "10px", width: "100%" }}>
                            {
                                allCategory && allCategory.length > 0 && allCategory.map((catValue, key) => {
                                    return <option value={catValue.name} key={key}>{catValue.name}</option>

                                })
                            }
                        </select>
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

        </div >
    )
}
