import DealHeader from "./componets/DealHeader"

import Homecomponet from "./componets/Homecomponet"
import Topnavber from "./componets/Topnavber"


function App() {
 

  return (
    <>
    <Topnavber/>
<DealHeader/>

<div className="   py-1 px-0 sm:px-4"style={{ backgroundColor: '#c3deff' }} >

<div className=' bg-white rounded-lg'>
  <Homecomponet/>

</div>
</div>

    </>
  )
}

export default App
