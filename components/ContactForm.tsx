"use client";

import { useState } from "react";

const categories = [
  "プロジェクトに関するご相談",
  "投資・出資に関するご相談",
  "事業提携のご提案",
  "コンサルティング依頼",
  "その他のお問い合わせ",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-32 text-center">
        <span className="label-editorial text-brand-red">Thank You</span>
        <h3 className="mt-4 font-serif text-xl font-light tracking-[0.02em] mb-4">
          お問い合わせを受け付けました
        </h3>
        <p className="text-[14px] text-muted">
          内容を確認の上、担当者よりご連絡いたします。
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border-b border-border bg-transparent px-0 py-4 text-[14px] text-foreground placeholder:text-muted/30 focus:outline-none focus:border-foreground transition-colors duration-300";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-10"
    >
      <div>
        <label htmlFor="category" className="label-editorial text-muted/50 mb-3 block">
          ご相談カテゴリ <span className="text-brand-red">*</span>
        </label>
        <select
          id="category"
          name="category"
          required
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="">選択してください</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <label htmlFor="company" className="label-editorial text-muted/50 mb-3 block">
            会社名 <span className="text-brand-red">*</span>
          </label>
          <input type="text" id="company" name="company" required className={inputClass} placeholder="株式会社〇〇" />
        </div>
        <div>
          <label htmlFor="name" className="label-editorial text-muted/50 mb-3 block">
            お名前 <span className="text-brand-red">*</span>
          </label>
          <input type="text" id="name" name="name" required className={inputClass} placeholder="山田 太郎" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <label htmlFor="email" className="label-editorial text-muted/50 mb-3 block">
            メールアドレス <span className="text-brand-red">*</span>
          </label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder="mail@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="label-editorial text-muted/50 mb-3 block">
            電話番号
          </label>
          <input type="tel" id="phone" name="phone" className={inputClass} placeholder="03-0000-0000" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label-editorial text-muted/50 mb-3 block">
          お問い合わせ内容 <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} border border-border px-4 py-4 resize-none focus:border-foreground`}
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="group inline-flex items-center gap-4 text-[13px] tracking-[0.1em] uppercase text-foreground hover:text-brand-red transition-colors duration-500"
        >
          <span className="w-12 h-px bg-brand-red group-hover:w-20 transition-all duration-500" />
          送信する
        </button>
        <p className="mt-6 text-[12px] text-muted/40">
          お送りいただいた情報は、お問い合わせへの回答にのみ使用いたします。
        </p>
      </div>
    </form>
  );
}
