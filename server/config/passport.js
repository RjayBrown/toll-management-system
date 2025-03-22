import passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import Employee from "../models/Employee.js";

passport.use(
	new LocalStrategy(
		{ usernameField: "employeeID" },
		async (employeeID, password, done) => {
			try {
				const employee = await Employee.findOne({ employeeID });

				if (!employee) {
					return done(null, false, {
						error: "Incorrect ID or password",
					});
				}

				const isMatch = await bcrypt.compare(password, employee.password);
				if (!isMatch) {
					return done(null, false, { error: "Incorrect ID or password" });
				}
				done(null, employee);
			} catch (error) {
				done(error);
			}
		}
	)
);

passport.serializeUser((employee, done) => {
	// console.log("serialized", employee._id);
	done(null, employee._id);
});

passport.deserializeUser(async (userId, done) => {
	try {
		const employee = await Employee.findOne({ _id: userId });
		// console.log("deserialized", employee._id);

		if (!employee) {
			return done(new Error("Employee not found"));
		}

		done(null, employee);
	} catch (error) {
		done(error);
	}
});
