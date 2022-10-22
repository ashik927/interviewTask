import React , {useState , useEffect} from 'react'
import Header from '../components/Header'
export const Layout = (props) => {
  return (
    <>
    <div id="layout-wrapper">
        <Header/>
        <div className="main-content" style={{marginTop:"30px"}}>{props.children}</div>
      </div>
    </>
  )
}