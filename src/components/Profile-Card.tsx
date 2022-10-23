import { FC } from 'react';

type Props = {
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
}

const ProfileCard: FC<Props> = ({
  name,
  username,
  email,
  phoneNumber
}) => {
  return (
    <div
      className="flex rounded-lg flex-col p-6 mt-8 hover:bg-green-50 hover:text-green-800 bg-green-800 text-green-50"
    >
      <div
        className='mb-4 flex justify-between'
      >
        <CardText
          text="Name"
        />
        <CardNum num={`Kinanee`} />
      </div>

      <div
         className='mb-4 flex justify-between'
      >
        <CardText
          text='Username'
        />
        <CardNum num={`kalashin`} />
      </div>
      <div
         className='mb-4 flex justify-between'
      >
        <CardText
          text='Email'
        />
        <CardNum num={`kinaneesamsonjohn@gmail.com`} />
      </div>

      <div
         className='mb-4 flex justify-between'
      >
        <CardText
          text='Phone Number'
        />
        <CardNum num={`+2348149793913`} />
      </div>
    </div>
  )
};

export default ProfileCard;

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