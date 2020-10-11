class Navbar extends HTMLElement {
    connectedCallback() {
     this.innerHTML=`
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
		<a class="navbar-brand" href="/">
			<i class="fa fa-home" style="font-size:40px"></i>	
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
		  <ul class="navbar-nav mr-auto">
			<li class="nav-item active">
			  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="./resume.html">Resume</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="https://medium.com/@dzhen001">Blog</a>
			</li>
		  </ul>
		  <span class="navbar-text">
			Navbar text with an inline element
		  </span>
		</div>
	  </nav>
     ` 
    }
  }
  

customElements.define('main-navbar', Navbar);


