$(document).ready(function () {
  $('#navbar').append(`
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="row">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
          <div class="col offset-md-2">
            <a class="navbar-brand" href="#">Beer Castle</a>
          </div>
          <div class="col offset-md-3">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a href="#" onclick=""></a>
              </li>
              <li class="nav-item">
                <div class="g-signin2" data-onsuccess="onSignIn" id="google_signin"></div>
              </li>
              <li class="nav-item">
                <a id="register_click" href="#" onclick="register()">Register</a>
              </li>
              <li class="nav-item">
                <a href="#" id="login_click" onclick="login()">Sign in</a>
              </li>
              <li class="nav-item">
                <a href="#" onclick="signOut()" id="sign_out">Sign out</a>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  </nav>`)
})