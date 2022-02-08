import Sidebar from '../components/sidebar/Sidebar';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div id="colorlib-page">
      <Sidebar />
      <main id="colorlib-main">{children}</main>
    </div>
  );
};

export default DefaultLayout;
