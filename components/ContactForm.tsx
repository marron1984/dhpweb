"use client";

import { useState } from "react";

const categories = [
  "不動産開発に関するご相談",
  "投資・出資に関するご相談",
  "事業提携のご提案",
  "プロジェクトマネジメント委託",
  "コンサルティング依頼",
  "その他のお問い合わせ",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-24 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">
          Thank You
        </p>
        <h3 className="text-xl font-light tracking-tight mb-4">
          お問い合わせを受け付けました
        </h3>
        <p className="text-sm text-gray-500">
          内容を確認の上、担当者よりご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-8"
    >
      {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="block text-xs tracking-wide text-gray-400 uppercase mb-2"
        >
          ご相談カテゴリ <span className="text-red-400">*</span>
        </label>
        <select
          id="category"
          name="category"
          required
          className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-navy transition-colors appearance-none"
        >
          <option value="">選択してください</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-xs tracking-wide text-gray-400 uppercase mb-2"
          >
            会社名 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-xs tracking-wide text-gray-400 uppercase mb-2"
          >
            お名前 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-xs tracking-wide text-gray-400 uppercase mb-2"
          >
            メールアドレス <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs tracking-wide text-gray-400 uppercase mb-2"
          >
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-wide text-gray-400 uppercase mb-2"
        >
          お問い合わせ内容 <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="inline-block text-sm tracking-wide border border-navy text-navy px-10 py-4 hover:bg-navy hover:text-white transition-all duration-300"
        >
          送信する
        </button>
        <p className="mt-4 text-xs text-gray-400">
          お送りいただいた情報は、お問い合わせへの回答にのみ使用いたします。
        </p>
      </div>
    </form>
  );
}
