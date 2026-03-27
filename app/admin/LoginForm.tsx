"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/projects");
    } else {
      setError("パスワードが正しくありません");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-3 mb-12">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-brand-red text-white text-[9px] font-bold">
            dhp
          </span>
          <div>
            <p className="text-sm font-medium">Project Stories</p>
            <p className="text-[10px] text-muted">Content Management</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-[11px] tracking-[0.15em] uppercase text-muted mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
              placeholder="管理者パスワード"
              required
            />
          </div>

          {error && (
            <p className="text-[12px] text-brand-red">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-foreground text-white py-3 text-[12px] tracking-[0.1em] uppercase hover:bg-foreground/90 transition-colors disabled:opacity-50"
          >
            {loading ? "..." : "ログイン"}
          </button>
        </form>
      </div>
    </div>
  );
}
