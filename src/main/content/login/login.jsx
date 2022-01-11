import React from 'react'


const Login = () => {
    return (
        <form className='order'>
            <div className="categories">
                <ul>
                    <li className="active">Вход</li>
                    <li>Регистрация</li>
                </ul>
            </div>
            <input type='text' placeholder='Введите email' />
            <input type='text' placeholder='Введите пароль' />
            <button>Войти</button>
        </form>
    )
}

export default Login
