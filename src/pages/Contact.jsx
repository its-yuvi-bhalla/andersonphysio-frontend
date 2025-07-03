import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section className="min-h-screen py-20 px-4 bg-[#f8f8f8] text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Google Map */}
        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.4192948600235!2d-114.11962512315218!3d50.95295157169257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537173fcef3e4137%3A0xe7558e29bb4d37cc!2s11440%20Braeside%20Dr%20SW%2C%20Calgary%2C%20AB%20T2W%203E5!5e0!3m2!1sen!2sca!4v1751541252347!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Anderson Clinic Location"
          />
        </div>
      </div>
    </section>
  );
}
