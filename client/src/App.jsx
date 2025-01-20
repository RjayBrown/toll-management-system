import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

/* GLOBAL LAYOUT */
import MainLayout from "./layouts/MainLayout";

/* LAYOUTS (LEVEL 2) */
import AccountDashboardLayout from "./layouts/AccountDashboardLayout";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";

/* LAYOUTS (LEVEL 3) */

/* LOGIN PAGE */
import LoginPage from "./pages/LoginPage";

/* PAGES (ACCOUNT DASHBOARD) */
import AccountHome from "./pages/accounts/AccountHome";
import AccountSearchResults from "./pages/accounts/AccountSearchResults";

/* PAGES (ADMIN DASHBOARD) */

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<LoginPage />} />

					{/* PROTECTED */}
					<Route path="dashboard" element={<AccountDashboardLayout />}>
						<Route path="accounts" element={<AccountHome />}>
							{/* ADD SEARCH PARAMS + DASHBOARD ROUTES */}
							<Route path="search" element={<AccountSearchResults />} />
						</Route>
						<Route path="admin" element={<AdminDashboardLayout />}>
							{/* ADMIN DASHBOARD ROUTES */}
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
