import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  bank: string;
  account: string;
}

const BankCard: FC<Props> = ({
  bank,
  account,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex rounded-lg flex-col p-6 mt-8 hover:bg-green-50 hover:text-green-800 bg-green-800 text-green-50"
      onClick={e => navigate('/update-bank')}
    >
      <div
        className='mb-4 flex justify-between'
      >
        <CardText
          text="Bank"
        />
        <CardNum num={bank} />
      </div>

      <div
         className='mb-4 flex justify-between'
      >
        <CardText
          text="Account No"
        />
        <CardNum num={account} />
      </div>
    </div>
  )
};

export default BankCard;

const CardText: FC<{ text: string }> = ({ text }) => {
  return (
    <h5 className="font-bold text-md mb">{text}</h5>
  )
}

const CardNum: FC<{ num: string }> = ({ num }) => {
  return (
    <h5 className="font-bold text-xs">{num}</h5>
  )
}