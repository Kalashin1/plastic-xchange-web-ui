import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  label: string;
  placeHolder: string;
  defaultV: string;
  type: string
  updateV: Dispatch<SetStateAction<string>>,
  showError?: boolean;
  errorMessage?: string;
}
const Input: FC<Props> = ({
  label,
  placeHolder,
  defaultV,
  type,
  updateV,
  showError,
  errorMessage
}) => {
  return (
    <div 
      className="my-4 flex flex-col"
      >
      <label className="my-2 text-sm">{label}</label>
      <input 
        className="border focus:bg-white bg-green-400 border-green-900 rounded-md py-2 px-8"
        type={type}
        placeholder={placeHolder}
        value={defaultV}
        onChange={e => updateV(e.target.value)}
      />
      { showError ? 
        (<small>{errorMessage}</small>):
        <></>
      }
    </div>
  )
}

export default Input;