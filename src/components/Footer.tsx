import React from "react"


const Footer = () => {

const d = new Date()
let year = d.getFullYear()

    return (
        <div className="page-footer">
            <p>© {year} mpekkin </p>

        </div>
    )
}

export default Footer