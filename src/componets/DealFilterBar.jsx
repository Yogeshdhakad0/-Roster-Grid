










// import React, { useState, useMemo } from 'react';
// import { Input, DatePicker, Checkbox, Typography } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { FaListUl } from 'react-icons/fa';
// import dayjs from 'dayjs';
// import DealListStyled from './DealListStyled';
// import dealsData from '../data/dummyDeals';

// const { RangePicker } = DatePicker;

// const DealFilterBar = () => {
//   const [search, setSearch] = useState('');
//   const [dateRange, setDateRange] = useState([]);
//   const [activeDeals, setActiveDeals] = useState(true);

//   // Filtered data based on search & date
//   const filteredData = useMemo(() => {
//     return dealsData
//       .map(stage => {
//         const filteredDeals = stage.deals.filter(deal => {
//           // Ensure trim + lower
//           const searchLower = search.trim().toLowerCase();

//           // Check if deal matches search
//           const matchesSearch =
//             stage.stage.toLowerCase().includes(searchLower) ||
//             deal.clientName.toLowerCase().includes(searchLower) ||
//             deal.dealName.toLowerCase().includes(searchLower) ||
//             deal.assigneeName.toLowerCase().includes(searchLower);

//           // Check if deal is in selected date range
//           const matchesDate =
//             dateRange.length === 0 ||
//             (
//               dayjs(deal.date).isSameOrAfter(dateRange[0], 'day') &&
//               dayjs(deal.date).isSameOrBefore(dateRange[1], 'day')
//             );

//           return matchesSearch && matchesDate;
//         });

//         return { ...stage, deals: filteredDeals };
//       })
//       .filter(stage => stage.deals.length > 0);
//   }, [search, dateRange]);








//   return (
//     <div className="mt-2 px-2 sm:px-3 py-3 w-full max-w-7xl mx-auto">
//       {/* TOP BAR */}
//       <div className="flex flex-wrap gap-3 w-full mb-4">
//         <div className='border border-gray-300 py-2 px-4 w-full sm:w-auto font-semibold tracking-wide rounded-md'>
//           My Deals
//         </div>
//         <div className='border border-gray-300 py-2 px-4 w-full sm:w-auto font-semibold tracking-wide rounded-md'>
//           All clients
//         </div>
//       </div>

//       {/* PIPELINE, SEARCH etc */}
//       <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center w-full mb-4">
//         {/* LEFT */}
//         <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
//           <span className="cursor-pointer px-3 font-semibold tracking-wide">Pipeline</span>
//           <span className="text-blue-600 cursor-pointer flex items-center font-semibold tracking-wide">
//             <FaListUl className="mr-1" /> List1
//           </span>
//           <span className="font-semibold tracking-wide">
//             Total Deals: {dealsData.reduce((acc, s) => acc + s.deals.length, 0)}   
//             Total Revenue: ${dealsData.reduce((acc, s) => acc + s.total, 0)}
//           </span>
//         </div>

//         {/* RIGHT */}
//         <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
//           <Input
//             placeholder="Search..."
//             className='font-bold'
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//             prefix={<SearchOutlined />}
//             style={{ width: 180 }}
//           />
//           <RangePicker
//             value={dateRange}
//             onChange={setDateRange}
//           />
//           <Checkbox
//             checked={activeDeals}
//             onChange={e => setActiveDeals(e.target.checked)}
//           >
//             Active Deals
//           </Checkbox>
//           <Typography.Link onClick={() => {
//             setSearch('');
//             setDateRange([]);
//             setActiveDeals(true);
//           }} type="danger">
//             clear
//           </Typography.Link>
//         </div>
//       </div>

//       {/* DEAL LIST */}
//       <DealListStyled data={filteredData} />
//     </div>
//   );
// };

// export default DealFilterBar;


import React, { useState, useMemo } from 'react';
import { Input, DatePicker, Checkbox, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FaListUl } from 'react-icons/fa';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import DealListStyled from './DealListStyled';
import dealsData from '../data/dummyDeals';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const { RangePicker } = DatePicker;

const DealFilterBar = () => {
  const [search, setSearch] = useState('');
  const [dateRange, setDateRange] = useState([]);
  const [activeDeals, setActiveDeals] = useState(true);

  const filteredData = useMemo(() => {
    return dealsData
      .map(stage => {
        const filteredDeals = stage.deals.filter(deal => {
          const searchLower = search.trim().toLowerCase();

          const matchesSearch =
            stage.stage.toLowerCase().includes(searchLower) ||
            deal.clientName.toLowerCase().includes(searchLower) ||
            deal.dealName.toLowerCase().includes(searchLower) ||
            deal.assigneeName.toLowerCase().includes(searchLower);

          const matchesDate =
            dateRange.length === 0 ||
            (
              deal.date &&
              dayjs(deal.date).isSameOrAfter(dateRange[0], 'day') &&
              dayjs(deal.date).isSameOrBefore(dateRange[1], 'day')
            );

          return matchesSearch && matchesDate;
        });

        return { ...stage, deals: filteredDeals };
      })
      .filter(stage => stage.deals.length > 0);
  }, [search, dateRange]);

  return (
    <div className="mt-2 px-2 sm:px-3 py-3 w-full max-w-7xl mx-auto">
      {/* TOP BAR */}
      <div className="flex flex-wrap gap-3 w-full mb-4">
        <div className='border border-gray-300 py-2 px-4 w-full sm:w-auto font-semibold tracking-wide rounded-md'>
          My Deals
        </div>
        <div className='border border-gray-300 py-2 px-4 w-full sm:w-auto font-semibold tracking-wide rounded-md'>
          All clients
        </div>
      </div>

      {/* PIPELINE, SEARCH, etc */}
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center w-full mb-4">
        {/* LEFT */}
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <span className="cursor-pointer px-3 font-semibold tracking-wide">Pipeline</span>
          <span className="text-blue-600 cursor-pointer flex items-center font-semibold tracking-wide">
            <FaListUl className="mr-1" /> List1
          </span>
          <span className="font-semibold tracking-wide">
            Total Deals: {dealsData.reduce((acc, s) => acc + s.deals.length, 0)} | Total Revenue: ${dealsData.reduce((acc, s) => acc + s.total, 0)}
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <Input
            placeholder="Search..."
            className='font-bold'
            value={search}
            onChange={e => setSearch(e.target.value)}
            prefix={<SearchOutlined />}
            style={{ width: 180 }}
          />
          <RangePicker
            value={dateRange}
            onChange={setDateRange}
          />
          <Checkbox
            checked={activeDeals}
            onChange={e => setActiveDeals(e.target.checked)}
          >
            Active Deals
          </Checkbox>
          <Typography.Link
            onClick={() => {
              setSearch('');
              setDateRange([]);
              setActiveDeals(true);
            }}
            type="danger"
          >
            Clear
          </Typography.Link>
        </div>
      </div>

      {/* DEAL LIST */}
      {filteredData.length === 0 ? (
        <div className="text-center text-gray-500 py-10 text-lg font-semibold">
          🔍 No deals found for selected filters.
        </div>
      ) : (
        <DealListStyled data={filteredData} />
      )}
    </div>
  );
};

export default DealFilterBar;
