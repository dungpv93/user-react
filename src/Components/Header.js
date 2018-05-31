import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <section className="header-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="box-header">
                                    <div className="jumbotron jumbotron-fluid">
                                        <div className="container">
                                            <h3 className="text-center">Learn React</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End header */}

            </div>
        );
    }
}

export default Header;