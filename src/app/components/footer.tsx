export default function Footer() {
  return (
    <footer className="site-footer shell" lang="en">
      <p>© {new Date().getUTCFullYear()} randc0degen</p>
      <p>Suzhou, China <span aria-hidden="true">·</span> <a href="https://creativecommons.org/licenses/by-nc/4.0/" rel="license">CC BY-NC 4.0</a></p>
    </footer>
  );
}
