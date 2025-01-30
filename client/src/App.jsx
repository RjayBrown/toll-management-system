import { BrowserRouter, Routes, Route } from "react-router-dom";

/* LAYOUTS */
import MainLayout from "./layouts/MainLayout";
import MainDashboardLayout from "./layouts/MainDashboardLayout";
import AccountDashboard from "./layouts/accounts/AccountDashboard";
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
import AccountDetailsTop from "./components/forms/accounts/AccountDetailsTop";
import AccountInfoLayout from "./layouts/accounts/AccountInfoLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<LoginPage />} />

					{/* PROTECTED */}
					<Route path="dashboard" element={<MainDashboardLayout />}>
						<Route index element={<DashboardHome />} />
						<Route path="accounts" element={<AccountDashboard />}>
							<Route index element={<AccountSearchPage />} />
							{/* ADD SEARCH PARAMS + DASHBOARD ROUTES */}
							<Route path="search-results" element={<AccountSearchResults />} />
							{/* ADD ROUTE PARAMS FOR SELECTED ACCOUNT */}
							<Route path="info" element={<AccountInfoLayout />}></Route>
							{/* <Route path="financials" element={<FinancialsLayout />}></Route> */}
							{/* <Route path="service-requests" element={<ServiceRequestLayout />}></Route> */}
							{/* <Route path="otg" element={<OTGLayout />}></Route> */}
							{/* <Route path="invoices" element={<TollInvoiceLayout />}></Route> */}
							{/* <Route path="violations" element={<TollViolationsLayout />}></Route> */}
							{/* <Route path="history" element={<TollHistoryLayout />}></Route> */}
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
