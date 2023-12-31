import React from "react";
// import logo from "../../components/assets/images/logo.svg" //logo
import { Link } from "react-router-dom"

const Search = () => {
    // fixed Header
    window.addEventListener("scroll", function () {
      const search = document.querySelector(".search")
      search.classList.toggle("active", window.scrollY > 100)
    })
  
    return (
      <>
        <section className='search'>
          <div className='container c_flex'>
            <div className='logo width '>
              {/* <img src={logo} alt='' /> */}
              <h1 className="Xchange">Xchange</h1>
            </div>
  
            <div className='search-box f_flex'>
              <i className='fa fa-search'></i>
              <input type='text' placeholder='Search' />
              <span>All Category</span>
            </div>
  
            <div className='icon f_flex width'>
              <div className='cart'>
                <Link to ='/user'>
                  <i className='fa fa-user icon-circle'></i>
                </Link>
                <Link to='/cart'>
                  <i className='fa fa-shopping-bag icon-circle'></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

export default Search