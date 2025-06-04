import type { Metadata } from "next";
import { Navigation } from "../../components/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy - Worship",
  description: "Privacy Policy for Worship website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <div className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

          <p className="mb-6 text-gray-300 leading-relaxed">
            This Privacy Policy describes how Worship collects, uses, and discloses your Personal
            Information when you visit the Worship website. We respect your privacy and are committed to protecting it.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              We collect certain information when you visit the Site, including information about your device, browser,
              IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site,
              we collect information about the individual web pages or products that you view, what websites or search terms referred
              you to the Site, and information about how you interact with the Site. We refer to this automatically-collected
              information as &quot;Device Information.&quot;
            </p>
            <p className="mb-4 text-gray-300 leading-relaxed">
              We collect Device Information using the following technologies:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li>&quot;Cookies&quot; are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-100">http://www.allaboutcookies.org</a>.</li>
              <li>&quot;Log files&quot; track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
              <li>&quot;Web beacons,&quot; &quot;tags,&quot; and &quot;pixels&quot; are electronic files used to record information about how you browse the Site.</li>
            </ul>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Additionally, if you choose to contact us through a form on the Site, we collect certain information from you, including your name, email address, and the content of your message. We refer to this information as &quot;Contact Information.&quot;
            </p>
            <p className="mb-4 text-gray-300 leading-relaxed">
              When we talk about &quot;Personal Information&quot; in this Privacy Policy, we are talking both about Device Information and Contact Information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">How We Use Your Personal Information</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              We use the Contact Information that we collect generally to communicate with you and respond to your inquiries.
            </p>
            <p className="mb-4 text-gray-300 leading-relaxed">
              We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Sharing Your Personal Information</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site—you can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-100">https://www.google.com/intl/en/policies/privacy/</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-100">https://tools.google.com/dlpage/gaoptout</a>.
            </p>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Data Retention</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              When you contact us through the Site, we will maintain your Contact Information for our records unless and until you ask us to erase this information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Changes</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at [Your Contact Email Address].
            </p>
          </section>

          <p className="mt-12 text-sm text-gray-500 text-center">
            Last updated: June 4, 2024
          </p>
        </div>
      </div>
    </>
  );
} 