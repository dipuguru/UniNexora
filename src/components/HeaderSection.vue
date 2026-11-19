<template>
  <header class="site-header" :class="{ 'menu-open': menuOpen }">
    <div class="container header-inner">
      <a class="brand" href="/" aria-label="UniNexora home" @click="closeMenu">
        <img src="@/assets/images/uninexora-logo.png" alt="UniNexora logo">
      </a>

      <button class="mobile-toggle" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>

      <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Main navigation">
        <router-link class="nav-link" to="/" @click="closeMenu">Home</router-link>
        <a class="nav-link" href="/#platform" @click="closeMenu">Solutions</a>
        <a class="nav-link" href="/#industries" @click="closeMenu">Industries</a>
        <a class="nav-link" href="/#how-it-works" @click="closeMenu">How It Works</a>
        <router-link class="nav-link" to="/about" @click="closeMenu">About Us</router-link>
      </nav>

      <router-link class="button button-primary header-cta" to="/contact" @click="closeMenu">Get in Touch <span aria-hidden="true">↗</span></router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
  data() {
    return { menuOpen: false };
  },
  methods: {
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>