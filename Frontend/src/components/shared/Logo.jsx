import { Link } from 'react-router-dom'


export function Logo() {
  return (
    <Link to={'/'} className='w-28'>
      <img src='/logo.svg' className='w-16 h-12 object-cover'/>
    </Link>
  )
}
