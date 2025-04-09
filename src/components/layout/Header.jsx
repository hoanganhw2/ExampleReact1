import './header.css';
const Header = () => {
    return (
        <header className="header">
            <ul>
                <li><a className='active' href="/">Home</a></li>
                <li><a href="/user">User</a></li>
                <li><a href="/products">Product</a></li>

            </ul>
        </header>
    )
}
export default Header