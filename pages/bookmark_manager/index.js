import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Bookmarkmanager from '../../components/BookmarkManager/bookmarkmanager'
import { Layout } from '../../Layout/Layout'

export default function index() {



    return (
        <Layout>
            <Bookmarkmanager />
        </Layout>
    )
}
