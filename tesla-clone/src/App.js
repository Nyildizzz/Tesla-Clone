import React, {useState} from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Backdrop from './components/backdrop/Backdrop';
function App({children}) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
       <>
        {
            showSidebar && (
                <>
                <Sidebar showSidebar={setShowSidebar} setShowSidebar={setShowSidebar} />
                <Backdrop onClick={() =>{
                    setShowSidebar(false)
                }}  />
                </>
            )
        }
        <main className={showSidebar ? "blur-content": ""}>
          <Header setShowSidebar={setShowSidebar} />
          {children}
        </main>
       </>
  );
}

export default App;
