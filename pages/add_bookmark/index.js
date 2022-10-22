import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import AddBookMark from '../../components/AddBookmark/AddBookMark';
import { Layout } from '../../Layout/Layout';

export default function index() {
    return (
        <Layout>
            <AddBookMark />
        </Layout>

    )
}
