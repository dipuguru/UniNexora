<template>
  <div class="site-shell">
    <HeaderSection />
    <main class="about-page">
      <section class="about-hero">
        <div class="container about-hero-inner">
          <span class="section-eyebrow">ABOUT UNINEXORA</span>
          <h1>Securing the <span>Digital Future</span></h1>
          <p>Uninexora was founded with a singular belief: cybersecurity should not be a privilege reserved for large enterprises. We built a platform that brings enterprise-grade security to every organization.</p>
        </div>
      </section>

      <section class="section about-story">
        <div class="container about-two-column">
          <div>
            <span class="section-eyebrow">WHO WE ARE</span>
            <h2>Our <span>Story</span></h2>
            <p>Uninexora was founded to make enterprise-grade cybersecurity accessible to organizations of all sizes. Our platform simplifies security, compliance, and threat detection, helping businesses stay protected in an increasingly complex digital world. Today, Uninexora secures 500+ organizations across India and globally.</p>
          </div>
          <div class="about-story-art" role="img" aria-label="Digital cybersecurity network illustration"><span>UN</span><i></i><b></b></div>
        </div>
      </section>

      <section class="section section-light">
        <div class="container about-two-column mission-grid">
          <article class="about-info-card">
            <span class="about-card-icon">◎</span>
            <h2>Our <span>Mission</span></h2>
            <p>To democratize cybersecurity — making proactive threat detection, compliance management, and security governance accessible to every organization, regardless of size or sector.</p>
          </article>
          <article class="about-info-card">
            <span class="about-card-icon">◇</span>
            <h2>Our <span>Vision</span></h2>
            <p>To be the most trusted cybersecurity partner for growing organizations worldwide — powering a safer, more resilient digital economy through AI-driven intelligence and continuous assurance.</p>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-heading centered">
            <span class="section-eyebrow">WHAT GUIDES US</span>
            <h2>Our Core <span>Values</span></h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div class="values-grid">
            <article v-for="(value, index) in values" :key="value.title" class="value-card">
              <span class="value-number">0{{ index + 1 }}</span>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section section-light">
        <div class="container">
          <div class="section-heading centered">
            <span class="section-eyebrow">INDUSTRY-RECOGNIZED STANDARDS</span>
            <h2>Certifications & <span>Trust Badges</span></h2>
            <p>Industry-recognized compliance and security standards</p>
          </div>
          <div class="certifications-grid">
            <article v-for="cert in certifications" :key="cert.name" class="certification-card">
              <span class="certification-check">✓</span>
              <h3>{{ cert.name }}</h3>
              <p>{{ cert.description }}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "../components/HeaderSection.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
  name: "AboutView",
  components: { HeaderSection, FooterSection },
  data() {
    return {
      values: [
        { title: "Precision First", description: "Every feature solves a real procurement problem. No unnecessary complexity — only what drives business value." },
        { title: "Continuous Innovation", description: "Our platform evolves constantly through customer feedback, market insights, and emerging technologies." },
        { title: "Customer Trust", description: "Your data, suppliers, and procurement processes remain secure, transparent, and protected at all times." },
        { title: "Speed to Value", description: "Get started quickly and see measurable improvements in procurement efficiency within weeks, not months." },
        { title: "Inclusive Collaboration", description: "Built for businesses of every size, enabling buyers and suppliers to work together seamlessly." },
        { title: "Transparency", description: "Clear workflows, clear reporting, and complete visibility across every procurement activity." }
      ],
      certifications: [
        { name: "ISO 9001", description: "Quality Management" },
        { name: "ISO 27001", description: "Information Security" },
        { name: "SOC 2 Type II", description: "Security & Compliance" },
        { name: "GDPR Compliant", description: "Data Protection" },
        { name: "PCI DSS", description: "Payment Security" },
        { name: "MSME Registered", description: "Government Recognition" }
      ]
    };
  }
};
</script>
