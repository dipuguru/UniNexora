<template>
  <section id="home" class="hero-section">
    <div class="hero-grid-glow"></div>
    <div class="container hero-layout">
      <div class="hero-copy reveal-up">
        <div class="eyebrow"><span class="eyebrow-shield">✓</span> Secure. Intelligent. Connected.</div>
        <p class="hero-kicker">CYBERSECURITY, REIMAGINED</p>
        <h1>Defend What Matters Most — <span>Smarter Cybersecurity</span> for a Connected World</h1>
        <p class="hero-description">
          UniNexora helps organizations proactively detect threats, manage vulnerabilities,
          and maintain continuous compliance — across every layer of your digital infrastructure.
        </p>
        <div class="hero-actions">
          <a class="button button-primary button-large" href="#contact">Start Free Trial <span aria-hidden="true">→</span></a>
          <a class="button button-outline button-large" href="#platform">Explore Solutions <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-assurance">
          <span class="assurance-icon">✓</span>
          <span>Proactive protection <i></i> Continuous compliance <i></i> 24/7 monitoring</span>
        </div>
      </div>

      <div class="hero-visual" aria-label="Cybersecurity shield and digital network illustration">
        <div class="visual-halo halo-one"></div>
        <div class="visual-halo halo-two"></div>
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="orbit orbit-three"></div>
        <div class="visual-grid"></div>
        <div class="visual-image-wrap">
          <img class="hero-art" src="@/assets/images/uninexora-cybersecurity-hero.png" alt="Glowing cybersecurity shield protecting a connected digital globe">
        </div>
        <div class="float-card float-card-lock">
          <span class="mini-icon">⌑</span>
          <span><b>Secure access</b><small>Identity protected</small></span>
        </div>
        <div class="float-card float-card-cloud">
          <span class="mini-icon">☁</span>
          <span><b>Cloud security</b><small>Infrastructure safe</small></span>
        </div>
        <div class="float-card float-card-status">
          <span class="status-dot"></span>
          <span><b>Protection active</b><small>Systems monitored</small></span>
        </div>
        <span class="particle particle-one"></span>
        <span class="particle particle-two"></span>
        <span class="particle particle-three"></span>
        <span class="particle particle-four"></span>
      </div>
    </div>
    <div class="hero-bottom-wave"></div>
  </section>
</template>

<script>
export default {
  name: "HeroSection"
};
</script>