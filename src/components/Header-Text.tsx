import { FC } from 'react';

type Props = {
  text: string
}

const HeaderText: FC<Props> = ({
  text,
}) => {
  return (
    <h3
      className="text-2xl"
    >{text }</h3>
  )
}

export default HeaderText;