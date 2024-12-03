/* eslint-disable react/prop-types */

const Input = ({ lable, name, type, placeholder, value, onChange }) => {
    return (
        <div>
            <lable htmlFor={lable} className="block mb-1 text-[#7DC08E] font-medium leading-6 capitalize" >
                {lable}
            </lable>
            <div className="">
                <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className="block w-full outline-none  border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#7cbe8c]  " />
            </div>
        </div>
    )
}

export default Input