import { Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { ContactLinks } from "./ContactLinks";
import { contactInfo } from "./contact-data";

export function Contact() {
  return (
    <section
      id="contact"
      className="container-page section"
    >
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-[#65FF9A]">
          Contact
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Engineering & Collaboration
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/70">
          Interested in secure systems, cybersecurity,
          software engineering, or open-source development?
          I am open to technical collaborations, engineering
          opportunities, and research discussions.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <Mail className="h-5 w-5 text-[#65FF9A]" />

            <a
              href={`mailto:${contactInfo.email}`}
              className="text-foreground/70 transition-colors hover:text-[#65FF9A]"
            >
              {contactInfo.email}
            </a>
          </div>

          <ContactLinks />
        </div>

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
            md:p-8
          "
        >
          <h3 className="text-2xl font-semibold">
            Start a conversation
          </h3>

          <p className="mt-3 mb-8 text-sm leading-6 text-foreground/60">
            Send a message about research collaboration,
            technical work, or professional opportunities.
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}