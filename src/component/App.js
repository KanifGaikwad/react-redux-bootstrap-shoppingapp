import React from 'react'
const App = () => {


return(

<div>
    <nav className="navbar navbar-default">
          <a className="navbar-brand">React App</a>
    </nav>
    <div className="btn-group btn-group-justified" role="group" aria-label="...">
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>Products</button>
      </div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-share glyphicon-align-left" aria-hidden="true"></span>Todays sale</button>
      </div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-thumbs-up glyphicon-align-left" aria-hidden="true"></span>Manage</button>
      </div>
    </div>

</div>
)

}

export default App;