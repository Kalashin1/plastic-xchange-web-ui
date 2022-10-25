import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  label: string;
  defaultV: string;
  data: { label: string, value: string }[]
  updateV: any,
}
const Select: FC<Props> = ({
  label,
  defaultV,
  data,
  updateV,
}) => {
  return (
    <div 
      className="my-4 flex flex-col"
      >
      <label className="my-2 text-sm">{label}</label>
      <select 
        className={`border focus:bg-white bg-green-400 border-green-900 rounded-md py-2 px-8`}
        value={defaultV}
        onChange={e => updateV(e.target.value)}
      >
        { data && data.map((d, i) => (
          <option key={i} value={d.value}>{ d.label }</option>
        ))}

      </select>
    </div>
  )
}

export default Select;