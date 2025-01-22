import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
	{
		accountNumber: {
			type: Number,
			required: true,
		},
		demographics: {
			firstName: { type: String, required: true },
			lastName: { type: String, required: true },
			address: {
				addressType: { type: String, required: true },
				addressLine1: { type: String, required: true },
				addressLine2: String,
				zip: Number,
				zipPlus4: Number,
				postalCode: String,
				city: { type: String, required: true },
				state: String,
				province: String,
				country: String,
				deliverable: Boolean,
			},
			phone: { type: Number, required: true },
			email: { type: String, required: true },
		},
		agency: { type: String, required: true },
		accountType: { type: String, required: true },
		accountStatus: { type: String, required: true },
		payMethod: { type: String, required: true },
		vehicles: [
			{
				licensePlate: { type: String, required: true },
				state: { type: String, required: true },
				type: { type: String, required: true },
				dateModified: { type: Date, required: true, default: Date.now },
				year: Number,
				make: String,
				model: String,
				residentPlan: String,
				suspended: Boolean,
			},
		],
		devices: [
			{
				deviceNumber: { type: Number, required: true },
				status: { type: String, required: true, default: "ACTIVE" },
				type: { type: String, required: true, default: "INTERIOR" },
				activationDate: { type: Date, default: Date.now },
				swapDate: { type: Date, default: Date.now },
				deposit: { type: Number, required: true, default: 16 },
			},
		],
		plans: [
			{
				planName: { type: String, required: true },
				deviceNumber: Number,
				startDate: { type: Date, default: Date.now, required: true },
				endDate: Date,
				planStatus: { type: String, required: true },
				planDescription: { type: String, required: true },
			},
		],
		accountBalance: { type: Number, required: true },
		tolls: [
			{
				transactionDate: { type: Date, required: true },
				postedDate: { type: Date, required: true, default: Date.now },
				dueDate: Date,
				amountPayable: { type: Number, required: true },
				paid: Boolean,
				escalationDate: Date,
				entryPlaza: { type: String, required: true },
				exitPlaza: String,
				licensePlate: String,
				deviceNumber: Number,
				invoiceNumber: Number,
				violationNumber: String,
				imgLink: String,
				tollStatus: String,
				repost: Boolean,
				disputed: Boolean,
			},
		],
		tollBillBalance: { type: Number, required: true, default: 0 },
		violationBalance: { type: Number, required: true, default: 0 },
		violationFees: { type: Number, required: true, default: 0 },
		billOverpayment: { type: Number, required: true, default: 0 },
		lastPaymentDate: Date,
		lastTollDate: Date,
		accountOpenDate: Date,
		suspendedNY: { type: Boolean, required: true, default: false },
		oosHold: { type: Boolean, required: true, default: false },
		notes: [
			{
				type: { type: String, required: true },
				subType: { type: String, required: true },
				dateCreated: { type: Date, required: true },
				createdBy: { type: Number, required: true },
				description: { type: String, required: true },
			},
		],
		serviceRequest: [
			{
				dateOpened: { type: Date, required: true, default: Date.now },
				dateClosed: { type: Date, default: Date.now },
				status: { type: String, required: true },
				queue: String,
				priority: { type: String, required: true },
			},
		],
	},
	{ timestamps: true }
);

const Driver = mongoose.model("Driver", driverSchema);

export default Driver;
