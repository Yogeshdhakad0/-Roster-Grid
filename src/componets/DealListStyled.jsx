


import React from 'react';
import { Collapse, Avatar } from 'antd';

const { Panel } = Collapse;

const DealListStyled = ({ data }) => {
  return (
    <div className="py-1 bg-white rounded-lg shadow-md border w-full">
      {data.map(stage => (
        <Collapse key={stage.stage} defaultActiveKey={['1']} ghost>
          <Panel
            header={
              <div className="flex justify-between items-center  px-4 py-2 rounded-sm  " style={{ backgroundColor: '#e4f0ff' }} > 
                <span className="font-semibold text-md">{stage.stage}</span>
                <div className="flex gap-4 text-sm">
                  <span>{stage.deals.length}</span>
                  <span className="bg-white text-purple-600 px-2 py-0.5 rounded">{`$${stage.total}`}</span>
                </div>
              </div>
            }
          >
            <div className='ml-6 -mt-6'>
              <div className="grid grid-cols-4 gap-4 text-sm font-semibold text-gray-500 px-2 py-2 border-b border-gray-300"
                style={{ backgroundColor: '#FDF2F9' }}>
                <div>Client</div>
                <div>Deal Name</div>
                <div>Deal Budget</div>
                <div>Assignee</div>
              </div>

              {stage.deals.map((deal, i) => (
                <div key={i} className="grid grid-cols-4 gap-4 px-2 py-3 hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <Avatar style={{ backgroundColor: '#ccc' }}>{deal.clientInitials}</Avatar>
                    <div>
                      <div className="font-semibold">{deal.clientName}</div>
                      <div className="text-xs text-gray-400">{deal.clientName.split(' ')[0]}</div>
                    </div>
                  </div>
                  <div>{deal.dealName}</div>
                  <div>{deal.dealBudget}</div>
                  <div className="flex items-center gap-2">
                    <Avatar style={{ backgroundColor: '#666' }}>{deal.assigneeInitials}</Avatar>
                    <span className="text-sm text-gray-700">{deal.assigneeName}</span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </Collapse>
      ))}
    </div>
  );
};

export default DealListStyled;
