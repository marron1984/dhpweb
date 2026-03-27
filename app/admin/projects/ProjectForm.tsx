"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProjectStory, ProjectCategory } from "@/lib/types";

const CATEGORIES: ProjectCategory[] = [
  "ホテル・リゾート",
  "都市開発",
  "商業・飲食",
  "再生・リノベーション",
  "コンサルティング",
  "投資・流動化",
];

interface ProjectFormProps {
  initialData?: ProjectStory;
  mode: "create" | "edit";
}

const EMPTY_PROJECT: ProjectStory = {
  slug: "",
  title: "",
  subtitle: "",
  category: "ホテル・リゾート",
  location: "",
  year: new Date().getFullYear(),
  thumbnail: "",
  heroImage: "",
  summary: "",
  challenge: "",
  strategy: "",
  execution: "",
  result: "",
  future: "",
  relatedTags: [],
  featured: false,
  metrics: [],
};

export default function ProjectForm({ initialData, mode }: ProjectFormProps) {
  const [data, setData] = useState<ProjectStory>(initialData || EMPTY_PROJECT);
  const [tagsInput, setTagsInput] = useState(initialData?.relatedTags.join(", ") || "");
  const [metricsInput, setMetricsInput] = useState(
    initialData?.metrics?.map((m) => `${m.label}:${m.value}`).join("\n") || ""
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState<"thumbnail" | "hero" | null>(null);
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const heroRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function updateField<K extends keyof ProjectStory>(key: K, value: ProjectStory[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleUpload(file: File, field: "thumbnail" | "heroImage") {
    setUploading(field === "thumbnail" ? "thumbnail" : "hero");
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    if (res.ok) {
      const { url } = await res.json();
      updateField(field, url);
    }
    setUploading(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    // Parse tags and metrics
    const relatedTags = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
    const metrics = metricsInput
      .split("\n")
      .map((line) => {
        const [label, ...rest] = line.split(":");
        return label && rest.length ? { label: label.trim(), value: rest.join(":").trim() } : null;
      })
      .filter(Boolean) as { label: string; value: string }[];

    const payload = { ...data, relatedTags, metrics };

    try {
      const url = mode === "create" ? "/api/projects" : `/api/projects/${data.slug}`;
      const method = mode === "create" ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "保存に失敗しました");
      }

      router.push("/admin/projects");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "保存に失敗しました");
    }
    setSaving(false);
  }

  const inputClass =
    "w-full border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors";
  const labelClass = "block text-[11px] tracking-[0.1em] uppercase text-muted mb-2";
  const textareaClass = `${inputClass} resize-none`;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/admin/projects")}
            className="text-[11px] text-muted hover:text-foreground transition-colors"
          >
            ← 一覧に戻る
          </button>
          <h1 className="text-lg font-medium">
            {mode === "create" ? "新規プロジェクト" : `編集: ${data.title}`}
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <section className="bg-white border border-border p-6 space-y-5">
          <h2 className="text-[11px] tracking-[0.15em] uppercase text-muted mb-4">基本情報</h2>

          {mode === "create" && (
            <div>
              <label className={labelClass}>Slug (URL) <span className="text-brand-red">*</span></label>
              <input
                type="text"
                value={data.slug}
                onChange={(e) => updateField("slug", e.target.value.replace(/[^a-z0-9-]/g, ""))}
                className={inputClass}
                placeholder="project-name (英数字とハイフンのみ)"
                required
              />
            </div>
          )}

          <div>
            <label className={labelClass}>タイトル <span className="text-brand-red">*</span></label>
            <input
              type="text"
              value={data.title}
              onChange={(e) => updateField("title", e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>サブタイトル</label>
            <input
              type="text"
              value={data.subtitle}
              onChange={(e) => updateField("subtitle", e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>カテゴリ <span className="text-brand-red">*</span></label>
              <select
                value={data.category}
                onChange={(e) => updateField("category", e.target.value as ProjectCategory)}
                className={inputClass}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>年度 <span className="text-brand-red">*</span></label>
              <input
                type="number"
                value={data.year}
                onChange={(e) => updateField("year", parseInt(e.target.value))}
                className={inputClass}
                required
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>ロケーション <span className="text-brand-red">*</span></label>
            <input
              type="text"
              value={data.location}
              onChange={(e) => updateField("location", e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              checked={data.featured || false}
              onChange={(e) => updateField("featured", e.target.checked)}
              className="accent-brand-red"
            />
            <label htmlFor="featured" className="text-sm text-muted">注目のストーリーに表示</label>
          </div>
        </section>

        {/* Images */}
        <section className="bg-white border border-border p-6 space-y-5">
          <h2 className="text-[11px] tracking-[0.15em] uppercase text-muted mb-4">画像</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>サムネイル</label>
              {data.thumbnail && (
                <div className="relative aspect-[3/2] bg-cream mb-3 overflow-hidden">
                  <Image src={data.thumbnail} alt="" fill className="object-cover" sizes="300px" />
                </div>
              )}
              <input
                ref={thumbnailRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], "thumbnail")}
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => thumbnailRef.current?.click()}
                  className="text-[11px] border border-border px-3 py-1.5 hover:border-foreground transition-colors"
                  disabled={uploading === "thumbnail"}
                >
                  {uploading === "thumbnail" ? "アップロード中..." : "画像を選択"}
                </button>
                <input
                  type="text"
                  value={data.thumbnail}
                  onChange={(e) => updateField("thumbnail", e.target.value)}
                  className="flex-1 border border-border px-2 py-1 text-[11px] text-muted"
                  placeholder="/images/..."
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>ヒーロー画像</label>
              {data.heroImage && (
                <div className="relative aspect-[3/2] bg-cream mb-3 overflow-hidden">
                  <Image src={data.heroImage} alt="" fill className="object-cover" sizes="300px" />
                </div>
              )}
              <input
                ref={heroRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], "heroImage")}
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => heroRef.current?.click()}
                  className="text-[11px] border border-border px-3 py-1.5 hover:border-foreground transition-colors"
                  disabled={uploading === "hero"}
                >
                  {uploading === "hero" ? "アップロード中..." : "画像を選択"}
                </button>
                <input
                  type="text"
                  value={data.heroImage}
                  onChange={(e) => updateField("heroImage", e.target.value)}
                  className="flex-1 border border-border px-2 py-1 text-[11px] text-muted"
                  placeholder="/images/..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="bg-white border border-border p-6 space-y-5">
          <h2 className="text-[11px] tracking-[0.15em] uppercase text-muted mb-4">ストーリーコンテンツ</h2>

          <div>
            <label className={labelClass}>概要 (Summary) <span className="text-brand-red">*</span></label>
            <textarea rows={4} value={data.summary} onChange={(e) => updateField("summary", e.target.value)} className={textareaClass} required />
          </div>
          <div>
            <label className={labelClass}>課題 (Challenge) <span className="text-brand-red">*</span></label>
            <textarea rows={5} value={data.challenge} onChange={(e) => updateField("challenge", e.target.value)} className={textareaClass} required />
          </div>
          <div>
            <label className={labelClass}>戦略 (Strategy) <span className="text-brand-red">*</span></label>
            <textarea rows={5} value={data.strategy} onChange={(e) => updateField("strategy", e.target.value)} className={textareaClass} required />
          </div>
          <div>
            <label className={labelClass}>実行 (Execution) <span className="text-brand-red">*</span></label>
            <textarea rows={5} value={data.execution} onChange={(e) => updateField("execution", e.target.value)} className={textareaClass} required />
          </div>
          <div>
            <label className={labelClass}>成果 (Result) <span className="text-brand-red">*</span></label>
            <textarea rows={5} value={data.result} onChange={(e) => updateField("result", e.target.value)} className={textareaClass} required />
          </div>
          <div>
            <label className={labelClass}>今後の展開 (Future)</label>
            <textarea rows={4} value={data.future} onChange={(e) => updateField("future", e.target.value)} className={textareaClass} />
          </div>
        </section>

        {/* Metadata */}
        <section className="bg-white border border-border p-6 space-y-5">
          <h2 className="text-[11px] tracking-[0.15em] uppercase text-muted mb-4">メタデータ</h2>

          <div>
            <label className={labelClass}>タグ (カンマ区切り)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className={inputClass}
              placeholder="ホテル, 軽井沢, マリオット"
            />
          </div>

          <div>
            <label className={labelClass}>メトリクス (1行1項目 / ラベル:値)</label>
            <textarea
              rows={4}
              value={metricsInput}
              onChange={(e) => setMetricsInput(e.target.value)}
              className={textareaClass}
              placeholder={"事業規模:約150億円\n客室数:108室\nブランド:Marriott"}
            />
          </div>
        </section>

        {/* Submit */}
        {error && (
          <p className="text-[12px] text-brand-red bg-red-50 px-4 py-3">{error}</p>
        )}

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={saving}
            className="bg-brand-red text-white px-8 py-3 text-[12px] tracking-[0.1em] hover:bg-brand-red/90 transition-colors disabled:opacity-50"
          >
            {saving ? "保存中..." : mode === "create" ? "作成する" : "更新する"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/projects")}
            className="text-[12px] text-muted hover:text-foreground transition-colors"
          >
            キャンセル
          </button>
        </div>
      </form>
    </div>
  );
}
