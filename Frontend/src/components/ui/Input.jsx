export function Input ({ placeholder, type, className, name, onChange }) {
    return (
        <input 
            placeholder={placeholder}
            name={name}
            type={type ? type : 'text'} 
            className={`border-border-box border-2 rounded-xl px-4 py-2 focus:border-border-box/40 focus:outline-primary w-full ${className}`} 
            onChange={onChange}
        />
    )
}