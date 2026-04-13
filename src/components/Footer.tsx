"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaDiscord, FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { FiCopy, FiMail, FiPhone } from "react-icons/fi";

const quickLinks = [
  { href: "/aboutme", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

const CONTACT_EMAIL = "pawit.thongkum@gmail.com";
const CONTACT_PHONE = "062-408-1116";
const CONTACT_PHONE_LINK = "+660624081116";
const DISCORD_HANDLE = "perth_the_iamcat";
const DISCORD_ID = "312591574724902913";
const FACEBOOK_URL = "https://www.facebook.com/PawitThongcum";
const INSTAGRAM_URL = "https://www.instagram.com/perth_pwtk/";
const GITHUB_URL = "https://github.com/PerthTheIamCat";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isDiscordCopied, setIsDiscordCopied] = useState(false);
  const copyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

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
    <footer className="border-t border-white/10 bg-neutral-950/95 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.75fr_1.25fr] lg:items-start">
          <div className="space-y-3">
            <p className="text-lg font-semibold tracking-tight">
              Pawit Thongkum
            </p>
            <p className="max-w-sm text-sm leading-6 text-white/60">
              Full Stack Developer focused on web and mobile products.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.3em] text-white/45 uppercase">
              Quick links
            </p>
            <ul className="space-y-2 text-sm text-white/75">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.3em] text-white/45 uppercase">
              Contact
            </p>
            <ul className="grid gap-x-6 gap-y-3 text-sm text-white/75 sm:grid-cols-2 xl:grid-cols-3">
              <li className="sm:col-span-2 xl:col-span-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex w-full min-w-0 items-start gap-2 transition-colors duration-200 hover:text-white"
                >
                  <FiMail className="mt-0.5 shrink-0 text-base" />
                  <span className="flex min-w-0 flex-col leading-tight">
                    <span className="font-medium text-white/90">Email</span>
                    <span className="text-xs break-all text-white/45">
                      {CONTACT_EMAIL}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE_LINK}`}
                  className="inline-flex items-start gap-2 transition-colors duration-200 hover:text-white"
                >
                  <FiPhone className="mt-0.5 shrink-0 text-base" />
                  <span className="flex flex-col leading-tight">
                    <span className="font-medium text-white/90">Phone</span>
                    <span className="text-xs text-white/45">
                      {CONTACT_PHONE}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-start gap-2 transition-colors duration-200 hover:text-white"
                >
                  <FaGithub className="mt-0.5 shrink-0 text-base" />
                  <span className="flex flex-col leading-tight">
                    <span className="font-medium text-white/90">GitHub</span>
                    <span className="text-xs text-white/45">
                      PerthTheIamCat
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={copyDiscordId}
                  className="inline-flex w-full items-start gap-2 text-left transition-colors duration-200 hover:text-white"
                  aria-label="Copy Discord user ID"
                >
                  <FaDiscord className="mt-0.5 shrink-0 text-base" />
                  <span className="flex min-w-0 flex-1 flex-col leading-tight">
                    <span className="font-medium text-white/90">Discord</span>
                    <span className="text-xs text-white/45">
                      {DISCORD_HANDLE}
                    </span>
                  </span>
                  <span className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase">
                    <FiCopy className="mr-1 translate-x-1.5 text-[10px]" />
                    {isDiscordCopied ? "Copied" : "Copy ID"}
                  </span>
                </button>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-start gap-2 transition-colors duration-200 hover:text-white"
                >
                  <FaFacebookF className="mt-0.5 shrink-0 text-base" />
                  <span className="flex flex-col leading-tight">
                    <span className="font-medium text-white/90">Facebook</span>
                    <span className="text-xs text-white/45">PawitThongcum</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-start gap-2 transition-colors duration-200 hover:text-white"
                >
                  <FaInstagram className="mt-0.5 shrink-0 text-base" />
                  <span className="flex flex-col leading-tight">
                    <span className="font-medium text-white/90">Instagram</span>
                    <span className="text-xs text-white/45">perth_pwtk</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            ©{" "}
            <time suppressHydrationWarning dateTime={String(currentYear)}>
              {currentYear}
            </time>{" "}
            Pawit Thongkum. All rights reserved.
          </p>
          <p>Full Stack Developer</p>
        </div>
      </div>
    </footer>
  );
}
