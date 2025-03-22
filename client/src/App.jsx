import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashboardHomePage } from "./components/dashboard/pages/DashboardHomePage";
import { NotFound } from "./components/global/NotFound";

/* AUTH/ROUTE PROTECTION */
import { LoginPage } from "./components/dashboard/pages/LoginPage";
import { Authenticator } from "./components/navigation/Authenticator";
import { AdminAuthenticator } from "./components/navigation/AdminAuthenticator";

/* LAYOUTS */
import { AppLayout } from "./components/global/AppLayout";
import { MainDashboardLayout } from "./components/dashboard/layouts/MainDashboardLayout";
import { AccountDashboardLayout } from "./components/dashboard/layouts/AccountDashboardLayout";
import { AdminDashboardLayout } from "./components/dashboard/layouts/AdminDashboardLayout";

/* MAIN DASHBOARD */
import { AccountSearchForm } from "./components/dashboard/forms/accounts/AccountSearchForm";
import { AccountSearchResultsPage } from "./components/dashboard/pages/AccountSearchResultsPage";
// import { OTGRegistrationForm } from "./components/dashboard/forms/accounts/OTGRegistrationForm";

import { AccountInfoPage } from "./components/dashboard/pages/AccountInfoPage";
import { AccountDetailsSection } from "./components/dashboard/sections/AccountDetailsSection";
import { UpdateAccountDetails } from "./components/dashboard/forms/accounts/UpdateAccountDetails";
import { NotesSection } from "./components/dashboard/sections/NotesSection";
import { ContactsSection } from "./components/dashboard/sections/ContactsSection";
import { AddressSection } from "./components/dashboard/sections/AddressSection";
// import { PaymentDetailsSection } from "./components/dashboard/sections/PaymentDetailsSection";
import { VehiclesSection } from "./components/dashboard/sections/VehiclesSection";
import { VehicleHistory } from "./components/dashboard/cards/VehicleHistory";
import { VehiclesList } from "./components/dashboard/cards/VehiclesList";
import { DevicesSection } from "./components/dashboard/sections/DevicesSection";
import { DeviceList } from "./components/dashboard/cards/DeviceList";
import { DeviceRequestForm } from "./components/dashboard/forms/accounts/DeviceRequestForm";
import { PlansSection } from "./components/dashboard/sections/PlansSection";

import { FinancialsPage } from "./components/dashboard/pages/FinancialsPage";
// import { ServiceRequestPage } from "./layouts/accounts/ServiceRequestPage";

import { TollsPage } from "./components/dashboard/pages/TollsPage";
import { TollList } from "./components/dashboard/cards/TollList";
import { InvoiceList } from "./components/dashboard/cards/InvoiceList";
import { ViolationsList } from "./components/dashboard/cards/ViolationsList";

/* ADMIN DASHBOARD */
import { AdminSearchForm } from "./components/dashboard/forms/admin/AdminSearchForm";
import { EmployeeManagementForm } from "./components/dashboard/forms/admin/EmployeeManagementForm";
import { TollDetailsSection } from "./components/dashboard/sections/TollDetailsSection";

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
										<Route index element={<UpdateAccountDetails />} />
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
										<Route index element={<TollList />} />
										<Route path="invoices" element={<InvoiceList />} />
										<Route path="violations" element={<ViolationsList />} />
										<Route
											path="collections"
											element={<h1>Collections List</h1>}
										/>
									</Route>
									<Route path="pay" element={<h1>Toll Payment Card</h1>} />
									<Route
										path="transfer"
										element={
											<>
												<h1>Toll Transfer Form</h1>
												<h3>
													Alert and navigate to all tolls if none selected
												</h3>
											</>
										}
									/>
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
