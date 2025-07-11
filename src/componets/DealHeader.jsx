import { Button } from 'antd'
import React from 'react'

const DealHeader = () => {
  return (
    <header className="  bg-gradient-to-t from-blue-200 to-white   py-20 md:py-28">
      <div className="container mx-auto px-6 sm:px-0 lg:flex lg:items-center lg:justify-between  bg-transparent">
        <div className="mb-10 lg:mb-0 lg:w-1/2">
          <p className="text-gray-500 text-sm md:text-base font-semibold mb-3">Welcome!</p>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Manage your 
              <span className='text-blue-600'> Deals</span> 
                </h1>
    <Button type="primary"> Get Started</Button>
        </div>

        <div className="lg:w-1/2  h-full lg:h-80  bg-transparent    ">
          <img
            src="/src/assets/headerscrenn-removebg-preview.png"
            alt="Office Illustration"

            className="w-full rounded-xl shadow-xl bg-transparent   sm:h-100  "
          />
        </div>


        
      </div>






    
    </header>
  )
}

export default DealHeader



// import { Button } from 'antd'
// import React from 'react'

// const DealHeader = () => {
//   return (
//     <header className="bg-gradient-to-t from-blue-200 to-white py-16 md:py-24">
//       <div className="container mx-auto px-6 sm:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        
//         {/* Left Text Section */}
//         <div className="text-center lg:text-left lg:w-1/2 mt-10 lg:mt-0">
//           <p className="text-gray-500 text-sm md:text-base font-semibold mb-2">Welcome!</p>
//           <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
//             Manage your <span className="text-blue-600">Deals</span>
//           </h1>
//           <Button type="primary" size="large">Get Started</Button>
//         </div>

//         {/* Right Image Section */}
//         <div className="lg:w-1/2 w-full flex justify-center">
//           <img
//             src="/src/assets/headerscrenn-removebg-preview.png"
//             alt="Office Illustration"
          
//             className="w-full max-w-md lg:max-w-full rounded-2xl shadow-2xl    bg-blue-500   object-contain"
//           />
//         </div>
//       </div>
//     </header>
//   )
// }

// export default DealHeader
