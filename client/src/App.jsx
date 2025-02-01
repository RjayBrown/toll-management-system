import { BrowserRouter, Routes, Route } from "react-router-dom";

/* MAIN */
import MainLayout from "./layouts/global/MainLayout";
import MainDashboardLayout from "./layouts/global/MainDashboardLayout";
import LoginForm from "./components/forms/LoginForm";
import DashboardHome from "./components/global/DashboardHome";
import NotFound from "./components/global/NotFound";

/* ACCOUNT DASHBOARD */
import AccountDashboard from "./layouts/accounts/AccountDashboard";
import AccountSearch from "./components/forms/accounts/AccountSearch";
import AccountSearchResults from "./components/global/AccountSearchResults";
import AccountInfoLayout from "./layouts/accounts/AccountInfoLayout";

/* ADMIN DASHBOARD */
import AdminDashboard from "./layouts/admin/AdminDashboard";
import AdminEmployeeSearch from "./components/forms/admin/AdminEmployeeSearch";
import EmployeeSearchResults from "./components/global/EmployeeSearchResults";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<LoginForm />} />

					{/* PROTECTED */}
					<Route path="dashboard" element={<MainDashboardLayout />}>
						<Route path="*" element={<NotFound />} />
						<Route index element={<DashboardHome />} />
						<Route path="accounts" element={<AccountDashboard />}>
							<Route index element={<AccountSearch />} />
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
							<Route index element={<AdminEmployeeSearch />} />
							{/* ADD SEARCH PARAMS + DASHBOARD ROUTES */}
							<Route
								path="employee-results"
								element={<EmployeeSearchResults />}
							/>
							<Route
								path="account-results"
								element={<AccountSearchResults />}
							/>
							<Route path="info" element={<AccountInfoLayout />}></Route>
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
