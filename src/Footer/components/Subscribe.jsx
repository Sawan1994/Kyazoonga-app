import React from 'react';

export const Subscribe = () => (
    <React.Fragment>
        <div className="col-sm-3 cont-drop">
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Dropdown
            <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="/">Action</a></li>
                    <li><a href="/">Another action</a></li>
                    <li><a href="/">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="/">Separated link</a></li>
                </ul>
            </div>
        </div>
        <div className="col-sm-9 home-newsletter">
            <div className="row">
                <div className="col-sm-5 news-subs-txt">
                    <h3>Subscribe to our Newsletter</h3>
                </div>
                <div className="col-sm-7">
                    <div className="input-group">
                        <input type="email" className="form-control" placeholder="Enter your email" />
                        <span className="input-group-btn">
                            <button className="btn btn-theme" type="submit">Subscribe</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment >
);