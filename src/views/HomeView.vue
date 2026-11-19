<template>
  <div class="site-shell">
    <HeaderSection />
    <main>
      <HeroSection />
      <TrustSection />
      <SecurityPlatform />
      <StatsSection />
      <HowItWorks />
      <IndustriesSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "../components/HeaderSection.vue";
import HeroSection from "../components/HeroSection.vue";
import TrustSection from "../components/TrustSection.vue";
import SecurityPlatform from "../components/SecurityPlatform.vue";
import StatsSection from "../components/StatsSection.vue";
import HowItWorks from "../components/HowItWorks.vue";
import IndustriesSection from "../components/IndustriesSection.vue";
import ContactSection from "../components/ContactSection.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
  name: "HomeView",
  components: {
    HeaderSection,
    HeroSection,
    TrustSection,
    SecurityPlatform,
    StatsSection,
    HowItWorks,
    IndustriesSection,
    ContactSection,
    FooterSection
  }
};
</script>