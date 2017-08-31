var React = import from ('react');

var Header = React.createClass({
  render(){
    return(
      <header id="header">
        <div className="container">
          <h1 className="navbar-brand navbar-brand_"><a href="index.html"><img alt="Grill point" src="img/logo_white.png" /></a></h1>
        </div>
        <div className="menuheader">
            <div className="container">
              <nav className="navbar navbar-default navbar-static-top tm_navbar" role="navigation">
                  <ul className="nav sf-menu">
                    <li className="active"><a href="index.html">home</a>
                      <ul>
                        <li><img src="img/arrowup.png" alt="" /><a href="#">info</a></li>
                        <li><a href="#">profile</a></li>
                        <li><a className="last" href="#">news</a>
                          <ul>
                             <li><a href="#">fresh</a></li>
                             <li><a className="last" href="#">archive</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="/bio.html">about me</a></li>
                    <li><a href="/gallery.html">gallery</a></li>
                    <li><a href="/links.html">links</a></li>
                    <li><a href="/location.html">location</a></li>
                  </ul>
              </nav>
            </div>
        </div>
      </header>
    )
  }
});

module.exports = Header;
