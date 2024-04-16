import React from 'react'

export default function Footer() {
  let css = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f8f9fa", /* Set the background color */
    padding: "20", /* Add padding for better visibility */
    zIndex: 1000, /* Ensure the footer is above other content */

  }
  return (
    <>
      <br></br>
      <br></br>
      <footer className="bg-body-tertiary text-center text-lg-start" style={css}>
        {/* <!-- Copyright --> */}
        <div className="text-center p-3 tect-light">
          © 2024 Copyright
          <span className="text-body" >TalhaTodolist.com</span>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  )
}
