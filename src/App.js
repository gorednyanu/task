import { Fragment } from 'react';
import { TopBar } from './component/TopBar';
import { MainTab } from './component/MainTab';
import { StaffRequirment } from './component/staffRequirment';
import { Footer } from './component/footer';

function App() {
  return (
    <Fragment>
      <TopBar />
      <MainTab />
      <StaffRequirment />
      <Footer />
    </Fragment>


  )
}

export default App;
