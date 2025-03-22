import passport from "passport";
import "../config/passport.js";

export const authController = {
	authenticate: async (req, res) => {
		try {
			return res.json({
				success: true,
				employeeID: req.user.employeeID,
				isAdmin: req.user.isAdmin,
			});
		} catch (error) {
			console.log("Failed to authenticate employee"), error.message;
			return res
				.status(500)
				.json({ success: false, message: `Server/Internal error ${error}` });
		}
	},
	logIn: async (req, res) => {
		passport.authenticate("local", (error, employee, info) => {
			if (error) {
				return res.status(500).json({ error: "Login failed" });
			}

			if (!employee) {
				console.log("Invalid login credentials");

				return res.status(401).json(info);
			}

			req.login(employee, (error) => {
				if (error) {
					return res.status(500).json({ error: "Invalid ID or password" });
				}
				return res.status(200).json({
					success: true,
					employeeID: employee.employeeID,
					isAdmin: employee.isAdmin,
				});
			});
		})(req, res);
	},
	logOut: (req, res) => {
		req.logOut((error) => {
			if (error) {
				return res.status(500).json({ error: "Something went wrong" });
			}
			return res.status(200).json({ success: true, message: "Logged out" });
		});
	},
};
