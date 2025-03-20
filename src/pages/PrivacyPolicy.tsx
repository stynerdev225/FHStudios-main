export function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including when you sign up for our newsletter, purchase tickets, or contact us.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to send you marketing communications (with your consent).</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You can also opt out of receiving marketing communications from us at any time.</p>
        </section>
      </div>
    </div>
  );
}