/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
	if (!password || typeof password !== "string") {
		return "weak";
	}

	var criteria = {
		lower: new RegExp("[a-z]").test(password),
		upper: new RegExp("[A-Z]").test(password),
		number: new RegExp("[0-9]").test(password),
		special: new RegExp("[~!@#$%^&*()_+\\-={};':<>,.?/]").test(password),
		length: password.length > 7,
	};

	var strength = 0;

	if (criteria.lower) strength += 1;
	if (criteria.upper) strength += 1;
	if (criteria.number) strength += 1;
	if (criteria.special) strength += 1;
	if (criteria.length) strength += 1;

	if (strength <= 1) return "weak";
	else if (strength <= 3) return "medium";
	else if (strength <= 4) return "strong";
	else if (strength === 5) return "very strong";
}

// var str = checkPasswordStrength("He1l@okay")
// console.log(str)
