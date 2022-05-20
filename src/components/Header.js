import { Link } from 'react-router-dom'
const Header = () => {
  let halaman = [
    { id: '1', name: 'Home', link: '/' },
    { id: '2', name: 'Cart', link: '/cart' },
    { id: '3', name: 'Checkout', link: '/checkout' },
  ]

  return (
    <>
      <header>
        <nav className='flex flex-col sm:flex-row items-center sm:justify-between wrapper shadow-sm rounded-b-lg sm:rounded-full sm:my-2 px-10 py-3 bg-slate-700 text-white'>
          <Link to='/'>
            <div className='navFont'>All Shop</div>
          </Link>
          <ul className='flex gap-5'>
            {halaman.map(({ name, id, link }) => (
              <li key={id}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
