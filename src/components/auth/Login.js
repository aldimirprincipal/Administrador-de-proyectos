import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [ usuario, setUsuario ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault();

        
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">

                <h1>Iniciar sesión</h1>

                <form>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            autoComplete="off"
                            value={email}
                            onChange={onChange} 
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            autoComplete="off"
                            value={password}
                            onChange={onChange} 
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" 
                            value="Iniciar sesion"
                        />
                    </div>

                </form>
                <Link to={'/register'} className="enlace-cuenta">
                    Obtener una cuenta!
                </Link>
            </div>
        </div>
     );
}

export default Login;