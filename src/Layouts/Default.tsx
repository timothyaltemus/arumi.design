/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from '../components/footer/Footer';
import Sidebar from '../components/sidebar/Sidebar';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div id="colorlib-page">
      <Sidebar />
      <div id="colorlib-main">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
