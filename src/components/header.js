import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>

                <div className="container">

                    <div className="row">

                        <div className="col-lg-2 col-sm-12 col-md-2 col-xl-2">
                            <button>Г.</button>
                        </div>
                        <div className="col-lg-10 col-sm-12 col-md-10 col-xl-10" style={{padding: 0}}>
                            <div className="author_name">
                                <p>
                                    Дмитрий Греков
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </header>
        )
    }
}
