import { BrowserRouter, Routes, Route } from "react-router-dom";

/* LAYOUTS */
import MainLayout from "./layouts/MainLayout";
import MainDashboardLayout from "./layouts/MainDashboardLayout";
import EmployeeDashboard from "./layouts/employee/EmployeeDashboard";
import AdminDashboard from "./layouts/admin/AdminDashboard";

/* PAGES (MAIN) */
import LoginPage from "./pages/LoginPage";
import DashboardHome from "./pages/DashboardHome";
import AccountSearchResults from "./pages/AccountSearchResults";

/* PAGES (ACCOUNT DASHBOARD) */
import AccountSearchPage from "./pages/accounts/AccountSearchPage";

/* PAGES (ADMIN DASHBOARD) */
import AdminSearchPage from "./pages/admin/AdminSearchPage";
import EmployeeSearchResults from "./pages/admin/EmployeeSearchResults";
import AccountDetailsTop from "./components/forms/AccountDetailsTop";
import AccountInfoLayout from "./layouts/AccountInfoLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<LoginPage />} />

					{/* PROTECTED */}
					<Route path="dashboard" element={<MainDashboardLayout />}>
						<Route index element={<DashboardHome />} />
						<Route path="accounts" element={<EmployeeDashboard />}>
							<Route index element={<AccountSearchPage />} />
							{/* ADD SEARCH PARAMS + DASHBOARD ROUTES */}
							<Route path="search-results" element={<AccountSearchResults />} />
							<Route path="info" element={<AccountInfoLayout />}></Route>
						</Route>
						<Route path="admin" element={<AdminDashboard />}>
							<Route index element={<AdminSearchPage />} />
							{/* ADD SEARCH PARAMS + DASHBOARD ROUTES */}
							<Route
								path="employee-results"
								element={<EmployeeSearchResults />}
							/>
							<Route
								path="account-results"
								element={<AccountSearchResults />}
							/>
							<Route path="info" element={<AccountDetailsTop />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
