import React, { useState } from 'react';
import '../styles/Contact.css';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.startsWith('234') && cleaned.length > 3) {
      const part1 = cleaned.slice(0, 3);
      const part2 = cleaned.slice(3, 6);
      const part3 = cleaned.slice(6, 9);
      const part4 = cleaned.slice(9, 13);
      if (part4) return `+${part1} ${part2} ${part3} ${part4}`;
      if (part3) return `+${part1} ${part2} ${part3}`;
      if (part2) return `+${part1} ${part2}`;
      return `+${part1}`;
    }
    if (cleaned && !cleaned.startsWith('0')) {
      return `+${cleaned}`;
    }
    return cleaned;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatWhatsAppMessage = (data: ContactFormData): string => {
    return `*NEW CONTACT MESSAGE - GK FOODS* 🍽️%0A%0A` +
      `*Name:* ${data.name}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Subject:* ${data.subject}%0A` +
      `*Message:*%0A${data.message}%0A%0A` +
      `*Sent from GK Foods Contact Page*`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors in the form',
      });
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 3000);
      return;
    }
    
    setIsSubmitting(true);
    
    const whatsappNumber = '2348109048272';
    const message = formatWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'success',
        message: 'Redirecting to WhatsApp... Please send the message to complete your inquiry.',
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
    }, 800);
  };

  const subjects = [
    'General Inquiry',
    'Catering Services',
    'Food Delivery',
    'Event Booking',
    'Partnership',
    'Feedback',
    'Complaint',
    'Other',
  ];

  // Google Maps embed URL for the specific address
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4567!2d3.5678!3d6.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2b2b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2sNo17%20KAYODE%20Turna%20Greenville%20Estate%20Badore%20Ajah!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng";

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">
            Get in Touch With <span className="highlight">GK Foods</span>
          </h1>
          <p className="contact-hero-subtitle">
            We'd love to hear from you! Fill out the form below and we'll respond within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Info Cards */}
            <div className="contact-info">
              <div className="info-header">
                <h2>Contact Information</h2>
                <p>Reach out to us through any of these channels</p>
              </div>
              
              <div className="info-cards">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <h4>Visit Us</h4>
                    <p>No17 KAYODE Turna Greenville Estate</p>
                    <p>Badore Ajah, Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-details">
                    <h4>Call Us</h4>
                    <p>+234 810 904 8272</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-details">
                    <h4>Email Us</h4>
                    <p>Ojemeejayeuwa@gmail.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div className="info-details">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8am - 8pm</p>
                    <p>Saturday - Sunday: 10am - 6pm</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              {/* <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">📘 Facebook</a>
                  <a href="#" className="social-link">📷 Instagram</a>
                  <a href="#" className="social-link">🐦 Twitter</a>
                  <a href="#" className="social-link">💼 LinkedIn</a>
                </div>
              </div> */}
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form and we'll get back to you via WhatsApp</p>
              </div>

              {submitStatus.type && (
                <div className={`status-message ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 xxx xxx xxxx"
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject <span className="required">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={errors.subject ? 'error' : ''}
                    >
                      <option value="">Select a subject</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message via WhatsApp →'
                  )}
                </button>

                <p className="form-footer">
                  We'll review your message and respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GK Foods Location - No17 KAYODE Turna Greenville Estate Badore Ajah"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="contact-container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>🍽️ Do you offer catering services?</h3>
              <p>Yes! We provide full catering services for events of all sizes.</p>
            </div>
            <div className="faq-item">
              <h3>🚚 Do you deliver?</h3>
              <p>Yes, we deliver within Lagos and surrounding areas. Delivery fees may apply based on location.</p>
            </div>
            <div className="faq-item">
              <h3>📅 How far in advance should I book?</h3>
              <p>For catering services, we recommend booking at least 2 weeks in advance. For large events, 1 month notice is ideal.</p>
            </div>
            <div className="faq-item">
              <h3>💰 What payment methods do you accept?</h3>
              <p>We accept bank transfers,and cash on delivery for orders under ₦50,000.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;