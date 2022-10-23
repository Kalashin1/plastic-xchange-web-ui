import { FC } from 'react';

const TransactionComponent:FC = () => {
  return (
    <div className="p rounded-md border md:w-full">
      <div className="p-4 rounded bg-green-800 text-white hover:bg-white hover:text-green-800">
        <div className="flex justify-between">
          <p>PPE</p>
          <p>$20</p>
          <p 
            className="text-sm"
          >
            <span><i className='fas fa-edit mr-2' /></span>
            <span><i className='fas fa-user-alt' /></span>
          </p>
        </div>
        <div className="flex justify-between">
          <p>30kg</p>
          <p>2/11/22</p>
          <p>PENDING</p>
        </div>
      </div>
    </div>
  )
};

export default TransactionComponent;