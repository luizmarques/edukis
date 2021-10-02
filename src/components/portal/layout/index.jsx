import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const index = ({ children }) => {

  return (

    <div>

      <Header />
      <Main>
        {children}
      </Main>
      <Footer />

    </div>

  )
}

export default index;