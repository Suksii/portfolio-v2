"use client";

import { motion } from "motion/react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";
import { ContactForm } from "@/components/sections/contact-form";
import { profile, socials } from "@/lib/data";

const details = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: FiMapPin, label: "Location", value: profile.location },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading index="04" kicker="say hello" title="Let's build something" />

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        {/* left — info */}
        <div className="flex flex-col justify-between gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-sm text-lg leading-relaxed text-muted"
            >
              Have a project in mind, a role to fill, or just want to say hi? My
              inbox is always open — I&apos;ll try to get back to you within a day.
            </motion.p>

            <div className="mt-8 space-y-3">
              {details.map((d, i) => {
                const Inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-card-border bg-card text-violet">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted">{d.label}</span>
                      <span className="font-medium">{d.value}</span>
                    </span>
                  </>
                );
                return (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {d.href ? (
                      <a href={d.href} className="flex items-center gap-4 transition-opacity hover:opacity-80">
                        {Inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{Inner}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-11 w-11 place-items-center rounded-full border border-card-border bg-card text-lg text-muted transition-all hover:-translate-y-1 hover:border-violet hover:text-foreground"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* right — form */}
        <Reveal delay={0.1}>
          <div className="card-surface rounded-3xl p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
