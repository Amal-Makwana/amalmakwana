export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 py-8">
      <div className="container-shell text-sm text-black/60">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
