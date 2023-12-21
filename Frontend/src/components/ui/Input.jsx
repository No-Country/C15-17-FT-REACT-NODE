export function Input ({ placeholder, type, className, name, onChange, onFocus, value, ...inputProps }) {
    return (
        <input 
            {...inputProps}
            defaultValue={value}
            onFocus={onFocus}
            placeholder={placeholder}
            name={name}
            type={type ? type : 'text'} 
            className={`border-border-box border-2 rounded-3xl px-4 py-2  focus:outline-sky-400 focus:outline-8 w-full ${className}`} 
            onChange={onChange}
        />
    )
}