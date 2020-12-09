import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/popular">
                        <span className="populares">Películas más populares</span>
                    </NavLink>
                    <NavLink to="/top_rated">
                        <span className="top_rated">Películas mejor valoradas</span>
                    </NavLink>
                    <NavLink to="/upcoming">
                        <span className="upcoming">Próximas Películas</span>
                    </NavLink>

                </div>
            </div>
        </header>
    )
}

export default Header;