import React, {ReactNode} from "react";
import Navbar from "../components/navbar"

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default UserLayout

