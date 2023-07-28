// import React from "./node_modules/react"
// import ReactDOM from "./node_modules/react-dom"
import Header from "./Header.js"
import Footer from "./Footer.js"
import MainContent from "./MainContent"

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))