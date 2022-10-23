import { FC } from 'react';


const Card: FC = () => {
  return (
    <div
      className="flex rounded-lg flex-col p-6 mt-8 hover:bg-green-50 hover:text-green-800 bg-green-800 text-green-50"

    >
      <div
        className='mb-8'
      >
        <CardText
          text='Total Plastic Collected'
        />
        <CardNum num={`${300}kg`} />
      </div>

      <div>
        <CardText
          text='Balance'
        />
        <CardNum num={`$${300}`} />
      </div>
    </div>
  )
};

export default Card;

const CardText: FC<{ text: string }> = ({ text }) => {
  return (
    <h5 className="font-bold text-lg mb">{text}</h5>
  )
}

const CardNum: FC<{ num: string }> = ({ num }) => {
  return (
    <h5 className="font-bold">{num}</h5>
  )
}