import React from "react";
import NavBar from "./Component/NavBar/NavBar";
import {orginals,action} from './urls'
import './App.css'
import Banner from "./Component/Banner/banner";
import Rowpost from "./Component/RowPost/rowpost";
function App() {
  return (
    <div className="App">
       <NavBar/>
       <Banner/>
       <Rowpost url={orginals} title='Netflix Orginals' />
       <Rowpost  url={action} title='Action Movies' isSmall={true}/>
       {/* or <Rowpost  title='Action Movies' isSmall      :(defalut true)/> */}
    </div>
  );
}

export default App;
