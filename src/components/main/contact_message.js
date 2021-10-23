import React, { Component } from 'react'

export default class ContactMessage extends Component {
    render() {
        return (
            <div>
                <p>Добрый день. Чтобы связаться со мной, вы можете перейти в такие мессенджеры, как: </p>
                <div className="mt-2">
                    <div className="row">
                        <div className='col-6'>
                            <a className='message_link' href='https://t.me/DmitriiGrekov' target="_blank" rel="noreferrer"><button className="message_but"><i className="fab fa-telegram-plane"></i></button></a>
                        </div>
                        <div className='col-6'>
                            <a className="message_link" href='https://vk.com/dmitriigrekov' target="_blank" rel="noreferrer"><button className="message_but"><i className="fab fa-vk"></i></button></a>
                        </div>
                        
                    </div>
                </div>
                <p className="mb-2">Или связаться через форму:</p>
            </div>
        )
    }
}
