<template>
  <footer id="footer" class="site-footer">
    <div class="container footer-main">
      <div class="footer-brand-column">
        <a href="/" class="footer-brand"><img src="@/assets/images/uninexora-logo.png" alt="UniNexora logo"></a>
        <p>Smarter cybersecurity for a connected world. Protecting digital infrastructure through proactive threat detection, vulnerability management, and continuous compliance.</p>
      </div>
      <div class="footer-column">
        <h4>Product</h4>
        <a href="/#platform">Features</a>
        <a href="/#platform">Solutions</a>
        <a href="/#platform">Security</a>
      </div>
      <div class="footer-column">
        <h4>Company</h4>
        <router-link to="/about">About Us</router-link>
        <a href="/#footer">Careers</a>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="footer-column">
        <h4>Resources</h4>
        <a href="/#footer">Documentation</a>
        <a href="/#footer">Support</a>
        <a href="/#footer">Legal</a>
        <a href="/#footer">Privacy</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 UniNexora. All rights reserved.</span>
      <a href="/">Back to home ↑</a>
    </div>
  </footer>
</template>

<script>
export default { name: "FooterSection" };
</script>