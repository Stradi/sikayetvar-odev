import NavigationBar from './components/navigation-bar';
import Sidebar from './components/sidebar';
import SidebarContent from './components/sidebar-content';

export default function Layout({ children }) {
  return (
    <main className="flex h-screen">
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <section className="w-full md:overflow-y-auto">
        <NavigationBar />
        <div>{children}</div>
      </section>
    </main>
  );
}
