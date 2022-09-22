import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";



function App() {
  const [searchKey,setSearchKey]=useState('')
  return (
    <div>
      
<Navbar setSearchKey={setSearchKey}/>
<News searchKey={searchKey}/>
    </div>
  );
}

export default App;
