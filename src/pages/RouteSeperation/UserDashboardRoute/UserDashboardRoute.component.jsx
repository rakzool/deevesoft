import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import NotFound from "../../NotFound/NotFound.component";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader.component";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase-config";

export default function UserDashboardRoute() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return user ? (
    <div>
      <DashboardHeader />
      <div>
        <Outlet />
      </div>
    </div>
  ) : (
    <NotFound />
  );
}
