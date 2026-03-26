"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

interface ContactFormProps {
  dict: Dictionary;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const f = dict.contact.form;

  if (submitted) {
    return (
      <div className="py-32 text-center">
        <span className="label-editorial text-brand-red">{dict.contact.thanks.label}</span>
        <h3 className="mt-4 font-serif text-xl font-light tracking-[0.02em] mb-4">{dict.contact.thanks.title}</h3>
        <p className="text-[14px] text-muted">{dict.contact.thanks.body}</p>
      </div>
    );
  }

  const inputClass = "w-full border-b border-border bg-transparent px-0 py-4 text-[14px] text-foreground placeholder:text-muted/30 focus:outline-none focus:border-foreground transition-colors duration-300";

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-10">
      <div>
        <label htmlFor="category" className="label-editorial text-muted/50 mb-3 block">{f.category} <span className="text-brand-red">*</span></label>
        <select id="category" name="category" required className={`${inputClass} appearance-none cursor-pointer`}>
          <option value="">{f.categoryPlaceholder}</option>
          {dict.contact.categories.map((cat: string) => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <label htmlFor="company" className="label-editorial text-muted/50 mb-3 block">{f.company} <span className="text-brand-red">*</span></label>
          <input type="text" id="company" name="company" required className={inputClass} placeholder={f.companyPlaceholder} />
        </div>
        <div>
          <label htmlFor="name" className="label-editorial text-muted/50 mb-3 block">{f.name} <span className="text-brand-red">*</span></label>
          <input type="text" id="name" name="name" required className={inputClass} placeholder={f.namePlaceholder} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <label htmlFor="email" className="label-editorial text-muted/50 mb-3 block">{f.email} <span className="text-brand-red">*</span></label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder={f.emailPlaceholder} />
        </div>
        <div>
          <label htmlFor="phone" className="label-editorial text-muted/50 mb-3 block">{f.phone}</label>
          <input type="tel" id="phone" name="phone" className={inputClass} placeholder={f.phonePlaceholder} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="label-editorial text-muted/50 mb-3 block">{f.message} <span className="text-brand-red">*</span></label>
        <textarea id="message" name="message" required rows={5} className={`${inputClass} border border-border px-4 py-4 resize-none focus:border-foreground`} placeholder={f.messagePlaceholder} />
      </div>
      <div className="pt-4">
        <button type="submit" className="group inline-flex items-center gap-4 text-[13px] tracking-[0.1em] uppercase text-foreground hover:text-brand-red transition-colors duration-500">
          <span className="w-12 h-px bg-brand-red group-hover:w-20 transition-all duration-500" />{f.submit}
        </button>
        <p className="mt-6 text-[12px] text-muted/40">{f.privacy}</p>
      </div>
    </form>
  );
}
