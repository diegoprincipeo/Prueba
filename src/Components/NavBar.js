import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';

function Navbar(props) {
    console.log(props);

    useEffect(() => {
        getNumbers();
    }, []);
    return (
        <header>
            <div className="overlay"></div>
            <nav>
            <h2>Market Maribel</h2>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/ofertas">Ofertas</Link></li>
                <li><Link to="/categorias">Categorias</Link></li>
                <li className="cart"><Link to="/cart"><ion-icon name="basket"></ion-icon><span>{props.basketProps.basketNumbers}</span></Link></li>
                <li><Link to="/registrate">Registrate</Link></li>
            </ul>
            </nav>
       </header>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);