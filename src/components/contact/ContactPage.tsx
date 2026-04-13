"use client";

import FadeInDiv from "@/animation/FadeInDiv";
import Link from "next/link";
import {
  type ChangeEvent,
  type SubmitEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  FaArrowRight,
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";
import { FiCopy, FiMail, FiPhone, FiSend } from "react-icons/fi";

const CONTACT_EMAIL = "pawit.thongkum@gmail.com";
const CONTACT_PHONE = "062-408-1116";
const CONTACT_PHONE_LINK = "+660624081116";
const DISCORD_HANDLE = "perth_the_iamcat";
const DISCORD_ID = "312591574724902913";
const FACEBOOK_URL = "https://www.facebook.com/PawitThongcum";
const INSTAGRAM_URL = "https://www.instagram.com/perth_pwtk/";
const GITHUB_URL = "https://github.com/PerthTheIamCat";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactCards = [
  {
    href: `mailto:${CONTACT_EMAIL}`,
    icon: FiMail,
    label: "Email",
    value: CONTACT_EMAIL,
    note: "Best for work inquiries and project discussions.",
  },
  {
    href: `tel:${CONTACT_PHONE_LINK}`,
    icon: FiPhone,
    label: "Phone",
    value: CONTACT_PHONE,
    note: "Direct call or message on mobile.",
  },
  {
    href: GITHUB_URL,
    icon: FaGithub,
    label: "GitHub",
    value: "PerthTheIamCat",
    note: "Source code, projects, and technical work.",
  },
  {
    href: FACEBOOK_URL,
    icon: FaFacebookF,
    label: "Facebook",
    value: "PawitThongcum",
    note: "Profile link for social connection.",
  },
  {
    href: INSTAGRAM_URL,
    icon: FaInstagram,
    label: "Instagram",
    value: "perth_pwtk",
    note: "More personal updates and posts.",
  },
] as const;

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isDiscordCopied, setIsDiscordCopied] = useState(false);
  const copyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const fieldName = name as keyof FormState;

    setForm((current) => ({
      ...current,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject =
      form.subject.trim() ||
      `Portfolio contact from ${form.name.trim() || "a visitor"}`;
    const body = [
      `Name: ${form.name.trim() || "-"}`,
      `Email: ${form.email.trim() || "-"}`,
      "",
      form.message.trim(),
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const copyDiscordId = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_ID);
      setIsDiscordCopied(true);

      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }

      copyTimerRef.current = window.setTimeout(() => {
        setIsDiscordCopied(false);
      }, 2000);
    } catch {
      setIsDiscordCopied(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-7xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-10">
      <FadeInDiv
        delay={0.1}
        className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]"
      >
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold tracking-[0.35em] text-white/55 uppercase">
            Contact
          </p>
          <h1 className="max-w-3xl bg-gradient-to-br from-[rgba(102,204,255,1)] to-[rgba(255,153,255,0.8)] bg-clip-text text-5xl leading-none font-black text-transparent md:text-8xl">
            Let&apos;s connect
          </h1>
          <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Use the form to open your email client, or reach out directly
            through email, phone, GitHub, Discord, Facebook, or Instagram.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-7">
          <p className="text-xs font-semibold tracking-[0.35em] text-white/45 uppercase">
            Direct contact
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-sm font-semibold text-white/90">
                Fastest route
              </p>
              <p className="mt-1 text-sm leading-6 text-white/65">
                Fill the form below and your email app will open with the
                message prefilled.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/75">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                Email
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                Phone
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                Discord
              </span>
            </div>
          </div>
        </div>
      </FadeInDiv>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <FadeInDiv
          delay={0.2}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8"
        >
          <div className="flex flex-col gap-2 border-b border-white/10 pb-5">
            <p className="text-xs font-semibold tracking-[0.35em] text-white/45 uppercase">
              Send a message
            </p>
            <h2 className="text-2xl font-semibold text-white/95">
              Open your email app with one click
            </h2>
          </div>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-semibold tracking-[0.3em] text-white/45 uppercase">
                  Name
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white transition-colors outline-none placeholder:text-white/30 focus:border-white/30"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold tracking-[0.3em] text-white/45 uppercase">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white transition-colors outline-none placeholder:text-white/30 focus:border-white/30"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-xs font-semibold tracking-[0.3em] text-white/45 uppercase">
                Subject
              </span>
              <input
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project inquiry, collaboration, etc."
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white transition-colors outline-none placeholder:text-white/30 focus:border-white/30"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-semibold tracking-[0.3em] text-white/45 uppercase">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={7}
                value={form.message}
                onChange={handleChange}
                placeholder="Write a short note about your idea, project, or question."
                className="resize-y rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white transition-colors outline-none placeholder:text-white/30 focus:border-white/30"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                Open email app
                <FiSend className="text-base" />
              </button>
            </div>
          </form>
        </FadeInDiv>

        <FadeInDiv
          delay={0.3}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20 backdrop-blur md:p-8"
        >
          <div className="flex flex-col gap-2 border-b border-white/10 pb-5">
            <p className="text-xs font-semibold tracking-[0.35em] text-white/45 uppercase">
              Direct links
            </p>
            <h2 className="text-2xl font-semibold text-white/95">
              Reach out on your preferred channel
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  className="group rounded-2xl border border-white/10 bg-black/15 p-4 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon className="text-base text-white/80" />
                        <p className="text-sm font-semibold text-white/95">
                          {card.label}
                        </p>
                      </div>
                      <p className="text-sm break-words text-white/70">
                        {card.value}
                      </p>
                    </div>
                    <FaArrowRight className="mt-1 shrink-0 text-xs text-white/45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white/80" />
                  </div>
                  <p className="mt-4 text-xs leading-5 text-white/45">
                    {card.note}
                  </p>
                </a>
              );
            })}

            <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaDiscord className="text-base text-white/80" />
                    <p className="text-sm font-semibold text-white/95">
                      Discord
                    </p>
                  </div>
                  <p className="text-sm text-white/70">{DISCORD_HANDLE}</p>
                </div>
                <button
                  type="button"
                  onClick={copyDiscordId}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-nowrap text-white/80 transition-colors duration-200 hover:border-white/20 hover:text-white"
                  aria-label="Copy Discord user ID"
                >
                  <FiCopy className="text-xs" />
                  {isDiscordCopied ? "Copied" : "Copy ID"}
                </button>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="text-[11px] font-semibold tracking-[0.3em] text-white/45 uppercase">
                  User ID
                </p>
                <p className="mt-1 font-mono text-sm break-all text-white/80">
                  {DISCORD_ID}
                </p>
              </div>
              <p className="mt-4 text-xs leading-5 text-white/45">
                Discord username: {DISCORD_HANDLE}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-semibold tracking-[0.3em] text-white/45 uppercase">
              Need more context?
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Resume
                <FaArrowRight className="text-xs" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Projects
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </FadeInDiv>
      </div>
    </div>
  );
}
