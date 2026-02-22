export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-sky-100 py-8">
      <div className="container-shell text-sm text-slate-600">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
