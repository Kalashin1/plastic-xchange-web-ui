import { FC } from 'react';
import { formatDate, formatter } from '../helper';
import { useNavigate } from 'react-router-dom';

type Props = {
  type: string;
  amount: number;
  _id: string;
  transId: string
  weight: number;
  date: string;
  status: string;
  userType: string;
}

const TransactionComponent: FC<Props> = ({
  type,
  amount,
  weight,
  date,
  transId,
  status,
  _id,
  userType
}) => {

  const navigate = useNavigate();

  return (
    <div 
      className="p rounded-md border md:w-full my-4"
    >
      <div className="p-4 rounded bg-white text-green-800 hover:bg-green-50 hover:text-green-900">
        <div className="flex justify-between">
          <span>{type}</span>
          <span>{formatter.format(amount)}</span>
          <span
            className="text-sm"
          >
            {userType === "AGENT" &&
              (<span 
                onClick={e => navigate(`/edit-exchnage/${transId}/`)}
                className='text-sm cursor-pointer'
              ><i className='fas fa-edit mr-2' /></span>)
            }
            <span 
              className='text-sm cursor-pointer'
              onClick={e => navigate(`/view-profile/${_id}/`)}
            ><i className='fas fa-user-alt' /></span>
          </span>
        </div>
        <div className="flex justify-between">
          <span>{new Intl.NumberFormat().format(weight)}kg</span>
          <span>{formatDate(date)}</span>
          <span>{status}</span>
        </div>
      </div>
    </div>
  )
};

export default TransactionComponent;