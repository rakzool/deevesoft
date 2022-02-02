import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormsRoute from "./pages/RouteSeperation/FormsRoute/FormsRoute.component";
import LoginPage from "./pages/LoginPage/LoginPage.component";
import RegisterPage from "./pages/RegisterPage/RegisterPage.compoenent";
import UserDashboard from "./pages/UserDashboard/UserDashbord.component";
import UserDashboardRoute from "./pages/RouteSeperation/UserDashboardRoute/UserDashboardRoute.component";
import GoalPage from "./pages/goalPage/goalPage.component";
import ActivityPage from "./pages/ActivityPage/ActivityPage.component";
import CoachSelectPage from "./pages/CoachSelectPage/CoachSelect.component";

export default function RoutesPage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<FormsRoute />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route path="/dashboard" element={<UserDashboardRoute />}>
            <Route path="profile" element={<UserDashboard />} />
            <Route path="goal" element={<GoalPage />} />
            <Route path="activity" element={<ActivityPage />} />
            <Route path="selectcoach" element={<CoachSelectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
