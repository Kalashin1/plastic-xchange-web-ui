import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
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
        <CardNum num={name} />
      </div>

      <div
         className='mb-4 flex justify-between'
      >
        <CardText
          text='Username'
        />
        <CardNum num={username} />
      </div>
      <div
         className='mb-4 flex justify-between'
      >
        <CardText
          text='Email'
        />
        <CardNum num={email.slice(0, 20)} />
      </div>

      <div
         className='mb-4 flex justify-between'
      >
        <CardText
          text='Phone Number'
        />
        <CardNum num={phoneNumber} />
      </div>
    </div>
  )
};

export default ProfileCard;

const CardText: FC<{ text: string }> = ({ text }) => {
  return (
    <h5 className="font-bold text-sm mb">{text}</h5>
  )
}

const CardNum: FC<{ num: string }> = ({ num }) => {
  return (
    <h5 className="font-bold text-xs">{num}</h5>
  )
}