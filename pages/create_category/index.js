import React, { useState } from 'react'
// import Swal from 'sweetalert2';
import CreateCategory from '../../Components/Category/createCategory';
import { Layout } from '../../Layout/Layout';

export default function index() {

    // const [categoryName, setCategoryName] = useState("")

    // const handleChange = (e) => {
    //     setCategoryName(e.target.value)
    // }

    // const handleClcik = () => {
    //     console.log("categoryName", categoryName)
    //     if (localStorage.getItem("category") != null) {
    //         let category = JSON.parse(localStorage.getItem("category"));
    //         const filterItems = category.filter(p => p.name == categoryName);
    //         if (filterItems.length == 0) {
    //             const newObj = {
    //                 name: categoryName,
    //                 serial: category.length + 1
    //             }
    //             let newCategory = [...category, newObj];
    //             saveCategoryToSession(newCategory)
    //             Swal.fire(
    //                 'Thanks!',
    //                 'Category Saved Successfully',
    //                 'success'
    //             )
    //         } else {
    //             alert("Category Already exists")
    //         }

    //     } else {
    //         let categoryArray = []
    //         const newObj = {
    //             name: categoryName,
    //             serial: 1
    //         }
    //         let addCatefory = categoryArray.push(newObj)
    //         Swal.fire(
    //             'Thanks!',
    //             'Category Saved Successfully',
    //             'success'
    //         )
    //         saveCategoryToSession(categoryArray)
    //     }
    // }

    // const saveCategoryToSession = (category) => {
    //     if (category.length === 0) {
    //         clearCategoryFromSession();
    //     } else {
    //         localStorage.setItem("category", JSON.stringify(category));
    //     }
    // }
    // const clearCategoryFromSession = () => {
    //     localStorage.removeItem("category");
    // }
    return (
        <>
        <Layout>
        <CreateCategory/>
        </Layout>
            {/* <div>
                <input type="text" onChange={handleChange} name="category" placeholder="input a category name" />
                <button onClick={() => handleClcik()}> Category Save</button>
            </div> */}
        </>
    )
}
