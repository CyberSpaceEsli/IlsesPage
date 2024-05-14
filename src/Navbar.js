function Navbar() {

  return (
    <nav class="navbar navbar-expand-xl">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active text-light" aria-current="page" href="/">Home</a>
                    <a class="nav-link text-light" href="#projects">Projects</a>
                    <a class="nav-link text-light" href="#blog">Blog</a>
                    <a class="nav-link text-light" href="#about">About Me</a>
                    <a class="nav-link disabled text-light"href="#contact">Contact</a>
                </div>
            </div>
        </div>
</nav>
  );
}

export default Navbar;