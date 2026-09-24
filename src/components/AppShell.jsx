import { DesktopSidebar, MobileNav, MobileTopBar } from "./Sidebar";
import GlobalSearch from "./GlobalSearch";

const AppShell = ({ children }) => {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] gap-6 px-3 py-6 sm:px-6">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <DesktopSidebar />
      <div className="min-w-0 flex-1">
        <GlobalSearch />
        <MobileTopBar />
        <main id="main" className="pb-28 lg:pb-6">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
};

export default AppShell;
