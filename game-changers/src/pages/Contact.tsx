import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
   
  const [formData, setFormData] = useState({
    parentName: '',
    kidName: '',
    ageGroup: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ageGroups = [
    { value: 'U8', label: 'U8 ' },
    { value: 'U10', label: 'U10 ' },
    { value: 'U12', label: 'U12 ' },
    { value: 'U14', label: 'U14 ' }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent\'s full name is required';
    }

    if (!formData.kidName.trim()) {
      newErrors.kidName = 'Kid\'s full name is required';
    }

    if (!formData.ageGroup) {
      newErrors.ageGroup = 'Age group is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('https://formsubmit.co/ajax/spikeballclubrb@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.parentName,
            kidName: formData.kidName,
            ageGroup: formData.ageGroup,
            email: formData.email,
            phone: formData.phone,
            message: formData.message || 'No message provided',
            _subject: 'Game Changers Contact Form Submission'
          })
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          throw new Error('Failed to send');
        }
      } catch (error) {
        alert('Error sending message. Please email us directly at spikeballclubrb@gmail.com');
        console.error('Form submission error:', error);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center section-padding"
        style={{ backgroundImage: "url('/f.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="w-16 h-16 bg-fresh-green rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-soft-charcoal mb-4">Thank You!</h2>
          <p className="text-soft-charcoal/70 mb-6">
            Your message has been sent. We'll get back to you soon!
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-secondary"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen section-padding"
      style={{ backgroundImage: "url('/f.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-soft-charcoal mb-4">
                Get In Touch
              </h1>
              <p className="text-lg text-soft-charcoal/70">
                Ready to transform your player's game? We'd love to hear from you.
              </p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="card glass-text space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-soft-charcoal mb-2">
                    Parent's Full Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors ${errors.parentName ? 'border-red-300' : 'border-soft-charcoal/20'
                      }`}
                    placeholder="Enter parent's full name"
                  />
                  {errors.parentName && (
                    <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="kidName" className="block text-sm font-medium text-soft-charcoal mb-2">
                    Kid's Full Name *
                  </label>
                  <input
                    type="text"
                    id="kidName"
                    name="kidName"
                    value={formData.kidName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors ${errors.kidName ? 'border-red-300' : 'border-soft-charcoal/20'
                      }`}
                    placeholder="Enter kid's full name"
                  />
                  {errors.kidName && (
                    <p className="text-red-500 text-sm mt-1">{errors.kidName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="ageGroup" className="block text-sm font-medium text-soft-charcoal mb-2">
                  Age Group *
                </label>
                <select
                  id="ageGroup"
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors ${errors.ageGroup ? 'border-red-300' : 'border-soft-charcoal/20'
                    }`}
                >
                  <option value="">Select age group</option>
                  {ageGroups.map(group => (
                    <option key={group.value} value={group.value}>
                      {group.label}
                    </option>
                  ))}
                </select>
                {errors.ageGroup && (
                  <p className="text-red-500 text-sm mt-1">{errors.ageGroup}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-soft-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors ${errors.email ? 'border-red-300' : 'border-soft-charcoal/20'
                      }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-soft-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors ${errors.phone ? 'border-red-300' : 'border-soft-charcoal/20'
                      }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-soft-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-soft-charcoal/20 rounded-lg focus:ring-2 focus:ring-fresh-green focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your player's goals and any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-secondary text-lg py-4"
              >
                Send Message
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;