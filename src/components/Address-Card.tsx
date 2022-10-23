import { FC } from 'react';

type Props = {
  state: string;
  lga: string;
  zip: string;
  street: string;
}

const AddressCard: FC<Props> = ({
  state,
  lga,
  zip,
  street
}) => {
  return (
    <div
      className="flex rounded-lg flex-col p-6 mt-8 hover:bg-green-50 hover:text-green-800 bg-green-800 text-green-50"
    >
      <div
        className='mb-4 flex justify-between'
      >
        <CardText
          text="Street"
        />
        <CardNum num={street} />
      </div>

      <div
         className='mb-4 flex justify-between'
      >
        <CardText
          text='LGA'
        />
        <CardNum num={lga} />
      </div>
      <div
         className='mb-4 flex justify-between'
      >
        <CardText
          text='Email'
        />
        <CardNum num={zip} />
      </div>

      <div
         className='mb-4 flex justify-between'
      >
        <CardText
          text='Phone Number'
        />
        <CardNum num={state} />
      </div>
    </div>
  )
};

export default AddressCard;

const CardText: FC<{ text: string }> = ({ text }) => {
  return (
    <h5 className="font-bold text-lg mb">{text}</h5>
  )
}

const CardNum: FC<{ num: string }> = ({ num }) => {
  return (
    <h5 className="font-bold text-sm">{num}</h5>
  )
}