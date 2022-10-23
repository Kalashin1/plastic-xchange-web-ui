import { FC } from 'react';

type Props = {
  text: string
}

const SubHeader: FC<Props> = ({
  text,
}) => {
  return (
    <h3
      className="text-xl font-bold"
    >{text }</h3>
  )
}

export default SubHeader;