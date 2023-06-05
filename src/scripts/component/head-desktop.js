class HeadDesktop extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
        <button id="menu" class="menuMobile">
          <img aria-label="ikon menu" alt="ikon menu" src="../images/icons/menu-icon.svg">
        </button>
    </header>
    <nav id="drawer" class="nav">
        <h1 class="appName">Hungeerz</h1>
        <ul class="navList">
            <li class="navItem"><a href="#/home">Home</a></li>
            <li class="navItem"><a href="#/favorites">Favorites</a></li>
            <li class="navItem"><a href="https://waidzk.github.io" target="_blank" rel="noopener">About</a></li>
        </ul>
    </nav>
    `;
  }
}

customElements.define("head-desktop", HeadDesktop);
