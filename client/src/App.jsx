import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashboardHomePage } from "./components/pages/DashboardHomePage";
import { NotFound } from "./components/global/NotFound";

/* AUTH/ROUTE PROTECTION */
import { LoginPage } from "./components/pages/LoginPage";
import { Authenticator } from "./components/navigation/Authenticator";
import { AdminAuthenticator } from "./components/navigation/AdminAuthenticator";

/* LAYOUTS */
import { AppLayout } from "./components/global/AppLayout";
import { MainDashboardLayout } from "./components/dashboard/layouts/MainDashboardLayout";
import { AccountDashboardLayout } from "./components/dashboard/layouts/AccountDashboardLayout";
import { AdminDashboardLayout } from "./components/dashboard/layouts/AdminDashboardLayout";

/* MAIN DASHBOARD */
import { AccountSearchForm } from "./components/forms/AccountSearchForm";
import { AccountSearchResultsPage } from "./components/pages/AccountSearchResultsPage";
// import { OTGRegistrationForm } from "./components/dashboard/forms/accounts/OTGRegistrationForm";

import { AccountInfoPage } from "./components/pages/AccountInfoPage";
import { AccountDetailsSection } from "./components/dashboard/sections/AccountDetailsSection";
import { AccountDetailsForm } from "./components/forms/AccountDetailsForm";
import { NotesSection } from "./components/dashboard/sections/NotesSection";
import { ContactsSection } from "./components/dashboard/sections/ContactsSection";
import { AddressSection } from "./components/dashboard/sections/AddressSection";
// import { PaymentDetailsSection } from "./components/dashboard/sections/PaymentDetailsSection";
import { VehiclesSection } from "./components/dashboard/sections/VehiclesSection";
import { VehicleHistory } from "./components/dashboard/cards/VehicleHistory";
import { VehiclesList } from "./components/dashboard/cards/VehiclesList";
import { DevicesSection } from "./components/dashboard/sections/DevicesSection";
import { DeviceList } from "./components/dashboard/cards/DeviceList";
import { DeviceRequestForm } from "./components/forms/DeviceRequestForm";
import { PlansSection } from "./components/dashboard/sections/PlansSection";

import { FinancialsPage } from "./components/pages/FinancialsPage";
// import { ServiceRequestPage } from "./layouts/accounts/ServiceRequestPage";

import { TollsPage } from "./components/pages/TollsPage";
import { TollList } from "./components/pages/TollsPage";
import { InvoiceList } from "./components/pages/TollsPage";
import { ViolationsList } from "./components/pages/TollsPage";

/* ADMIN DASHBOARD */
import { AdminSearchForm } from "./components/forms/AdminSearchForm";
import { EmployeeManagementForm } from "./components/forms/EmployeeManagementForm";
import { TollDetailsSection } from "./components/dashboard/sections/TollDetailsSection";
import { TollTransferForm } from "./components/forms/TollTransferForm";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<LoginPage />} />

					{/* PROTECTED ROUTES */}
					<Route element={<Authenticator />}>
						<Route path="dashboard" element={<MainDashboardLayout />}>
							<Route index element={<DashboardHomePage />} />
							<Route path="main" element={<AccountDashboardLayout />}>
								<Route index element={<AccountSearchForm />} />
								<Route
									path="search-results"
									element={<AccountSearchResultsPage />}
								/>
								<Route
									path="otg-tag-search"
									element={<h1>OTG Registration Form </h1>}
								/>

								<Route path="account" element={<AccountInfoPage />}>
									<Route path="details" element={<AccountDetailsSection />}>
										<Route index element={<AccountDetailsForm />} />
										<Route
											path="conversion"
											element={<h1>Account Conversion Form</h1>}
										/>
									</Route>
									<Route path="notes" element={<NotesSection />} />
									<Route path="contacts" element={<ContactsSection />} />
									<Route path="address" element={<AddressSection />} />
									<Route
										path="payment"
										element={<h1>Payment Details Section</h1>}
									/>

									<Route path="vehicles" element={<VehiclesSection />}>
										<Route index element={<VehiclesList />} />
										<Route path="history" element={<VehicleHistory />} />
									</Route>

									<Route path="devices" element={<DevicesSection />}>
										<Route index element={<DeviceList />} />
										<Route path="request" element={<DeviceRequestForm />} />
									</Route>

									<Route path="plans" element={<PlansSection />} />
								</Route>

								<Route path="financials" element={<FinancialsPage />}>
									{/* STRIPE */}
									<Route index element={<h1>Account Replenishmment</h1>} />
									<Route
										path="payment-history"
										element={<h1>Payment History</h1>}
									/>
									<Route path="refunds" element={<h1>Refunds</h1>} />
								</Route>

								<Route
									path="service-request"
									element={<h1>Service Request Page </h1>}
								/>

								<Route path="tolls" element={<TollsPage />}>
									<Route path="all" element={<TollDetailsSection />}>
										<Route index element={<TollList listType={"all"} />} />
										<Route
											path="invoices"
											element={<TollList listType={"invoices"} />}
										/>
										<Route
											path="violations"
											element={<TollList listType={"violations"} />}
										/>
										<Route
											path="collections"
											element={<h1>Collections List</h1>}
										/>
									</Route>
									<Route path="pay" element={<h1>Toll Payment Card</h1>} />
									<Route path="transfer" element={<TollTransferForm />} />
								</Route>
							</Route>

							{/* ADMIN ONLY ROUTES */}
							<Route element={<AdminAuthenticator />}>
								<Route path="admin" element={<AdminDashboardLayout />}>
									<Route index element={<AdminSearchForm />} />
									<Route
										path="employee-management"
										element={<EmployeeManagementForm />}
									/>
									<Route
										path="service-request"
										element={<h1>Update Service Request Form</h1>}
									/>
									<Route
										path="toll-dispute"
										element={<h1>Search/Update Toll Dispute</h1>}
									/>
									<Route
										path="violation-dispute"
										element={<h1>Search/Update Violation Dispute</h1>}
									/>
								</Route>
							</Route>
						</Route>
					</Route>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
