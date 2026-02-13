export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-cyan-200/15 py-8">
      <div className="container-shell text-sm text-cyan-50/70">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
