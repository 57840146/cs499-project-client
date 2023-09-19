import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch} from "react-router-dom"
import Header from "./Commom/Header/Header"
// import Pages from "./pages/Pages"
// import Data from "./components/Data"
// import Cart from "./common/Cart/Cart"
// import Footer from "./common/footer/Footer"
// import Sdata from "./components/shops/Sdata"

function App(){
        return(
            <>
                <Router>
                    <Header/>
                    <Switch>
                        
                    </Switch>
                    {/* <Footer /> */}
                </Router>
            </>
        )
}

export default App