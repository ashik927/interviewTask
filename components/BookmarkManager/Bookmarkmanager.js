import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'

const categoryValueDuplicate = []
export default function Bookmarkmanager() {
  const [allBookmark, setAllBookmark] = useState([])

  useEffect(() => {
    setAllBookmark(JSON.parse(localStorage.getItem("addBookmark")))
  }, [])

  const handleFilter = (categoryName) => {
    let filterValue = allBookmark.filter(catDiff => catDiff.category == categoryName);
    categoryValueDuplicate.push(categoryName)
    if (filterValue.length > 0) {
      return filterValue
    } else {
      return []
    }
  }

  const handleCheckDuplicate = (categoryName) => {
    let filterValue = categoryValueDuplicate.filter(catDiff => catDiff == categoryName);
    if (filterValue.length > 0) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div style={{ margin: "30px" }}>
        {
          allBookmark && allBookmark.length > 0 && allBookmark.map((bookmarkValue) => {
            return <>{
              // handleCheckDuplicate(bookmarkValue.category) ? "" :
                <Card
                  style={{
                    width: '38rem', margin: "auto", marginBottom: "15px"
                  }}
                >
                  {/* {
                  console.log("categoryValueDuplicate.includes(bookmarkValue.category)",categoryValueDuplicate.includes(bookmarkValue.category))
                }
                {
                  console.log("categoryValueDuplicate",categoryValueDuplicate)
                }
                {
                  console.log("bookmarkValue.category",bookmarkValue.category)
                } */}
                  <CardHeader>{bookmarkValue.category}</CardHeader>
                  <ListGroup flush>

                    {
                      handleFilter(bookmarkValue.category).map((filterValue) => {
                        return <>
                          <ListGroupItem>{filterValue.title}
                            <Link href={`/bookmark_details/${bookmarkValue.serial}`}>
                              <a><Button color="primary" style={{ marginLeft: "50px" }}>Details</Button></a>
                            </Link>
                          </ListGroupItem>
                        </>
                      })
                    }
                  </ListGroup>

                </Card>
            }
            </>
          })

        }
      </div>
    </>
  )
}
