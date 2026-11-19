<template>
  <div class="site-shell contact-page">
    <HeaderSection />
    <main>
      <section class="contact-hero">
        <div class="container contact-hero-inner">
          <span class="section-eyebrow">LET'S CONNECT</span>
          <h1>Let's build a <span>safer digital future.</span></h1>
          <p>Tell us about your cybersecurity goals, current challenges, or the support you need. Our team will be ready to start the conversation.</p>
          <div class="contact-hero-points">
            <span><i>✓</i> Talk to our team</span>
            <span><i>✓</i> Discuss your requirements</span>
            <span><i>✓</i> Explore the right solution</span>
          </div>
        </div>
      </section>

      <section class="contact-main-section section">
        <div class="container contact-layout">
          <aside class="contact-details">
            <span class="section-eyebrow">GET IN TOUCH</span>
            <h2>We'd love to <span>hear from you.</span></h2>
            <p>Complete the form and tell us a little about what you are looking for. You can also contact us directly by email.</p>

            <a class="contact-detail-card" href="mailto:info@uninexora.com">
              <span class="contact-detail-icon">@</span>
              <span><small>EMAIL US</small><strong>info@uninexora.com</strong><em>Send us your enquiry</em></span>
              <b aria-hidden="true">↗</b>
            </a>
            <div class="contact-detail-card contact-detail-static">
              <span class="contact-detail-icon">◎</span>
              <span><small>WHAT WE CAN HELP WITH</small><strong>Cybersecurity &amp; digital protection</strong><em>Solutions, assessments and general enquiries</em></span>
            </div>
            <div class="contact-assurance"><span>🔒</span><p><strong>Your information matters.</strong><br>We use the details you provide to respond to your enquiry.</p></div>
          </aside>

          <div class="contact-form-card">
            <div class="contact-form-heading">
              <span class="section-eyebrow">SEND AN ENQUIRY</span>
              <h2>How can we help?</h2>
              <p>Fields marked with * are required.</p>
            </div>

            <form class="contact-form" novalidate @submit.prevent="submitForm">
              <div class="form-row">
                <div class="form-field">
                  <label for="contact-name">Full name <span>*</span></label>
                  <input id="contact-name" v-model.trim="form.name" type="text" autocomplete="name" placeholder="Your full name" required :aria-invalid="!!errors.name" @input="clearError('name')">
                  <small v-if="errors.name" class="field-error">{{ errors.name }}</small>
                </div>
                <div class="form-field">
                  <label for="contact-email">Work email <span>*</span></label>
                  <input id="contact-email" v-model.trim="form.email" type="email" autocomplete="email" placeholder="name@company.com" required :aria-invalid="!!errors.email" @input="clearError('email')">
                  <small v-if="errors.email" class="field-error">{{ errors.email }}</small>
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label for="contact-company">Company</label>
                  <input id="contact-company" v-model.trim="form.company" type="text" autocomplete="organization" placeholder="Company name (optional)">
                </div>
                <div class="form-field">
                  <label for="contact-phone">Phone number</label>
                  <input id="contact-phone" v-model.trim="form.phone" type="tel" autocomplete="tel" placeholder="Phone number (optional)">
                </div>
              </div>
              <div class="form-field">
                <label for="contact-service">What are you interested in? <span>*</span></label>
                <select id="contact-service" v-model="form.service" required :aria-invalid="!!errors.service" @change="clearError('service')">
                  <option disabled value="">Select a service</option>
                  <option>Cybersecurity solutions</option>
                  <option>Threat detection and prevention</option>
                  <option>Vulnerability management</option>
                  <option>Data protection and encryption</option>
                  <option>Compliance and risk management</option>
                  <option>Security assessment</option>
                  <option>General enquiry</option>
                </select>
                <small v-if="errors.service" class="field-error">{{ errors.service }}</small>
              </div>
              <div class="form-field">
                <label for="contact-message">Tell us about your requirements <span>*</span></label>
                <textarea id="contact-message" v-model.trim="form.message" rows="5" maxlength="2000" placeholder="Share a few details about your requirements..." required :aria-invalid="!!errors.message" @input="clearError('message')"></textarea>
                <div class="field-meta"><small v-if="errors.message" class="field-error">{{ errors.message }}</small><small>{{ form.message.length }}/2000</small></div>
              </div>
              <label class="consent-field"><input v-model="form.consent" type="checkbox"><span>I agree to be contacted about this enquiry. <b>*</b></span></label>
              <small v-if="errors.consent" class="field-error consent-error">{{ errors.consent }}</small>

              <button class="button button-primary button-large contact-submit" type="submit">Prepare Email <span aria-hidden="true">↗</span></button>
              <p class="form-note">Submitting opens your default email application with your enquiry details ready to send. Your message is not stored on this website.</p>
              <p v-if="submitMessage" class="form-success" role="status">{{ submitMessage }}</p>
            </form>
          </div>
        </div>
      </section>

      <section class="contact-bottom-cta">
        <div class="container contact-bottom-inner">
          <div><span class="section-eyebrow">HERE WHEN YOU NEED US</span><h2>Security starts with a <span>conversation.</span></h2></div>
          <a class="button button-light button-large" href="mailto:info@uninexora.com">Email UniNexora <span>↗</span></a>
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
  name: "ContactView",
  components: { HeaderSection, FooterSection },
  data() {
    return {
      form: { name: "", email: "", company: "", phone: "", service: "", message: "", consent: false },
      errors: {},
      submitMessage: ""
    };
  },
  methods: {
    clearError(field) {
      if (this.errors[field]) delete this.errors[field];
      this.submitMessage = "";
    },
    validateForm() {
      const errors = {};
      if (!this.form.name) errors.name = "Please enter your name.";
      if (!this.form.email) errors.email = "Please enter your email address.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) errors.email = "Please enter a valid email address.";
      if (!this.form.service) errors.service = "Please select a service.";
      if (!this.form.message || this.form.message.length < 10) errors.message = "Please enter at least 10 characters about your requirements.";
      if (!this.form.consent) errors.consent = "Please agree to be contacted about this enquiry.";
      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    submitForm() {
      this.submitMessage = "";
      if (!this.validateForm()) return;
      const subject = encodeURIComponent("UniNexora enquiry: " + this.form.service);
      const body = encodeURIComponent(
        "New enquiry for UniNexora\n\n" +
        "Name: " + this.form.name + "\n" +
        "Email: " + this.form.email + "\n" +
        "Company: " + (this.form.company || "Not provided") + "\n" +
        "Phone: " + (this.form.phone || "Not provided") + "\n" +
        "Interested in: " + this.form.service + "\n\n" +
        "Requirements:\n" + this.form.message
      );
      window.location.href = "mailto:info@uninexora.com?subject=" + subject + "&body=" + body;
      this.submitMessage = "Your email application should open with the enquiry prepared. Please review and send the email to complete your enquiry.";
    }
  }
};
</script>
