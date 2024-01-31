import CardWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <div>
                <button>PlayStation</button>
                <button>Nintendo</button>
                <button>PC</button>
            </div>
            <CardWidget/>
        </nav>
    )
}
export default NavBar