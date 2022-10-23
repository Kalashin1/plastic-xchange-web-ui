import { FC } from "react";


type Props = {
  label: string
}
const Button: FC<Props> = ({ label }) => {
  return (
    
    <button
      className="shadow-md font-bold px-16 rounded-md py-2 border border-green-800 hover:bg-green-500 hover:border-0 hover:text-white focus:bg-green
      focus:bg-green-800 focus:-border-0 focus:text-white transition"
      type="submit"
    >
      { label }
    </button>
  )
}

export default Button;