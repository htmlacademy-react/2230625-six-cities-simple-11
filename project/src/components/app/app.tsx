import MainPage from '../../pages/main-page/main-page';
import {ReactNode} from 'react';

function App(props: {children?: ReactNode}): JSX.Element {
  return (
    <MainPage>
      {props.children}
    </MainPage>
  );
}

export default App;
