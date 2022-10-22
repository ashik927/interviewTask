import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../../Layout/Layout'

export default function bookmarkDetails() {
  const router = useRouter()
  const { type } = router.query

  const [allBookmark, setAllBookmark] = useState([])
  const [bookFilterValue, setBookFilterValue] = useState([])

  useEffect(() => {
    const localValue = JSON.parse(localStorage.getItem("addBookmark"))
    setAllBookmark(JSON.parse(localStorage.getItem("addBookmark")))
  }, [])

  const handleFilter = () => {
    let filterValue = allBookmark.filter(catDiff => catDiff.serial == type);
    return filterValue
  }

  return (
    <Layout>
      {
        handleFilter().map((value) => {
          return <>
            <div style={{margin:"80px"}}>
              <p>Title : {value.title}</p>
              <p>URL : {value.link}</p>
              <p>Category :{value.category}</p>
            </div>
          </>
        })
      }
    </Layout>
  )
}
