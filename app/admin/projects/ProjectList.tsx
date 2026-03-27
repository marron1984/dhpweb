"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ProjectStory } from "@/lib/types";

export default function ProjectList() {
  const [projects, setProjects] = useState<ProjectStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  async function handleDelete(slug: string, title: string) {
    if (!confirm(`「${title}」を削除しますか？この操作は取り消せません。`)) return;
    const res = await fetch(`/api/projects/${slug}`, { method: "DELETE" });
    if (res.ok) {
      setProjects((prev) => prev.filter((p) => p.slug !== slug));
    }
  }

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin");
  }

  const filtered = search
    ? projects.filter(
        (p) =>
          p.title.includes(search) ||
          p.location.includes(search) ||
          p.category.includes(search) ||
          p.slug.includes(search)
      )
    : projects;

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-7 h-7 bg-brand-red text-white text-[8px] font-bold">
            dhp
          </span>
          <div>
            <p className="text-sm font-medium">Project Stories CMS</p>
            <p className="text-[10px] text-muted">{projects.length} projects</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/ja"
            target="_blank"
            className="text-[11px] text-muted hover:text-foreground transition-colors"
          >
            サイトを見る ↗
          </Link>
          <button
            onClick={handleLogout}
            className="text-[11px] text-muted hover:text-brand-red transition-colors"
          >
            ログアウト
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="プロジェクトを検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 max-w-md border border-border bg-white px-4 py-2.5 text-sm rounded-none focus:outline-none focus:border-foreground transition-colors"
        />
        <Link
          href="/admin/projects/new"
          className="bg-brand-red text-white px-5 py-2.5 text-[12px] tracking-[0.05em] hover:bg-brand-red/90 transition-colors whitespace-nowrap"
        >
          + 新規プロジェクト
        </Link>
      </div>

      {/* List */}
      {loading ? (
        <div className="py-20 text-center text-sm text-muted">読み込み中...</div>
      ) : (
        <div className="bg-white border border-border">
          <div className="grid grid-cols-[1fr_120px_100px_80px_100px] gap-4 px-5 py-3 border-b border-border text-[10px] tracking-[0.15em] uppercase text-muted">
            <span>タイトル</span>
            <span>カテゴリ</span>
            <span>エリア</span>
            <span>年度</span>
            <span>操作</span>
          </div>
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="grid grid-cols-[1fr_120px_100px_80px_100px] gap-4 px-5 py-4 border-b border-border/50 hover:bg-[#f8f8f7] transition-colors items-center"
            >
              <div>
                <p className="text-sm font-medium truncate">{project.title}</p>
                <p className="text-[11px] text-muted truncate mt-0.5">{project.slug}</p>
              </div>
              <span className="text-[11px] text-muted">{project.category}</span>
              <span className="text-[11px] text-muted truncate">{project.location}</span>
              <span className="text-[11px] text-muted tabular-nums">{project.year}</span>
              <div className="flex items-center gap-3">
                <Link
                  href={`/admin/projects/${project.slug}/edit`}
                  className="text-[11px] text-foreground hover:text-brand-red transition-colors"
                >
                  編集
                </Link>
                <button
                  onClick={() => handleDelete(project.slug, project.title)}
                  className="text-[11px] text-muted hover:text-brand-red transition-colors"
                >
                  削除
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="py-12 text-center text-sm text-muted">
              該当するプロジェクトがありません
            </div>
          )}
        </div>
      )}
    </div>
  );
}
