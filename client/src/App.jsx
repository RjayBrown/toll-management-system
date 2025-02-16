import { BrowserRouter, Routes, Route } from "react-router-dom";

/* MAIN */
import MainLayout from "./layouts/global/MainLayout";
import MainDashboardLayout from "./layouts/global/MainDashboardLayout";
import LoginForm from "./components/dashboard/forms/LoginForm";
import DashboardHome from "./components/global/DashboardHome";
import NotFound from "./components/global/NotFound";

/* ACCOUNT DASHBOARD */
import AccountDashboard from "./layouts/accounts/AccountDashboard";
import AccountSearch from "./components/dashboard/forms/accounts/AccountSearch";
import AccountSearchResults from "./components/dashboard/accounts/AccountSearchResults";

import AccountInfoLayout from "./layouts/accounts/AccountInfoLayout";
import AccountDetailsLayout from "./layouts/accounts/AccountDetailsLayout";
import AccountNotesLayout from "./layouts/accounts/AccountNotesLayout";
import AccountContactsLayout from "./layouts/accounts/AccountContactsLayout";
// import AccountAddressesLayout from "./layouts/accounts/AccountAddressesLayout";
// import AccountPaymentInfoLayout from "./layouts/accounts/AccountPaymentInfoLayout";
// import AccountVehiclesLayout from "./layouts/accounts/AccountVehiclesLayout";
// import AccountDevicesLayout from "./layouts/accounts/AccountDevicesLayout";
// import AccountPlansLayout from "./layouts/accounts/AccountPlansLayout";

/* ADMIN DASHBOARD */
import AdminDashboard from "./layouts/admin/AdminDashboard";
import AdminEmployeeSearch from "./components/dashboard/forms/admin/AdminEmployeeSearch";
import EmployeeSearchResults from "./components/dashboard/admin/EmployeeSearchResults";
import AccountDetailsLower from "./components/dashboard/forms/accounts/AccountDetailsLower";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<LoginForm />} />

					{/* PROTECTED */}
					<Route path="dashboard" element={<MainDashboardLayout />}>
						<Route index element={<DashboardHome />} />
						<Route path="accounts" element={<AccountDashboard />}>
							<Route index element={<AccountSearch />} />
							<Route path="search-results" element={<AccountSearchResults />} />
							<Route path="info" element={<AccountInfoLayout />}>
								{/* CREATE SUB NAVBAR COMPONENT FOR EACH LAYOUT */}
								<Route path="general" element={<AccountDetailsLayout />}>
									<Route index element={<AccountDetailsLower />} />
									<Route
										path="conversion"
										element={<h1>AccountConversionComponent</h1>}
									/>
								</Route>
								<Route path="notes" element={<AccountNotesLayout />}></Route>
								<Route path="contacts" element={<AccountContactsLayout />}>
									<Route index element={<h1>ContactsTable</h1>} />
								</Route>
								<Route path="address" element={<h1>AccountAddressLayout</h1>}>
									<Route index element={<h1>AddressTable/Form?</h1>} />
								</Route>
								{/* STRIPE */}
								<Route path="payment" element={<h1>AccountPaymentsLayout</h1>}>
									<Route index element={<h1>PaymentForm</h1>} />
								</Route>
								<Route path="vehicles" element={<h1>AccountVehiclesLayout</h1>}>
									<Route index element={<h1>VehicleForm</h1>} />
								</Route>
								<Route path="devices" element={<h1>AccountDevicesLayout</h1>}>
									<Route index element={<h1>DevicesForm</h1>} />
								</Route>
								<Route path="plans" element={<h1>AccountPlansLayout</h1>}>
									<Route index element={<h1>PlansForm</h1>} />
								</Route>
							</Route>

							{/* <Route path="financials" element={<FinancialsLayout />}>
								<Route
									path="payment"
									element={<h1>Account Replenishment</h1>}
								/>
							</Route> */}

							{/* <Route path="service-requests" element={<ServiceRequestLayout />}></Route> */}

							{/* <Route path="otg" element={<OTGRegistrationForm />}></Route> */}
							{/* <Route path="invoices" element={<TollInvoiceLayout />}>
								<Route index element={<h1>InvoiceList</h1>} />
								<Route path="payment" element={<h1>InvoicePayment</h1>} />
							</Route> */}

							{/* <Route path="violations" element={<ViolationsLayout />}>
								<Route index element={<h1>ViolationsList</h1>} />
								<Route path="payment" element={<h1>ViolationsPayment</h1>} />
								<Route path="dispute" element={<h1>ViolationsDispute</h1>} />
							</Route> */}

							{/* <Route path="history" element={<TollHistoryLayout />}>
								<Route index element={<h1>TollList</h1>} />
								<Route path="dispute" element={<h1>TollDispute</h1>} />
								<Route path="repost" element={<h1>TollRepostForm</h1>} />
							</Route> */}
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
						</Route>
					</Route>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
