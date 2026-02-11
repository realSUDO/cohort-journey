/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
	if (month < 1 || month > 12) return null;
	var winter = [1, 12, 2];
	var spring = [3, 4, 5];
	var summer = [6, 7, 8];
	var autumn = [9, 10, 11];

	var season;
	var activity;
	if (winter.includes(month)) season = "Winter";
	else if (spring.includes(month)) season = "Spring";
	else if (summer.includes(month)) season = "Summer";
	else if (autumn.includes(month)) season = "Autumn";

	if (season.toLowerCase() == "winter") {
		if (temperature < 0) activity = "skiing";
		else if (temperature >= 0) activity = "ice skating";
	} else if (season.toLowerCase() == "spring") {
		if (temperature > 20) activity = "hiking";
		else if (temperature <= 20) activity = "museum visit";
	} else if (season.toLowerCase() == "summer") {
		if (temperature > 35) activity = "swimming";
		else if (temperature <= 35) activity = "cycling";
	} else if (season.toLowerCase() == "autumn") {
		if (temperature > 15) activity = "nature walk";
		else if (temperature <= 15) activity = "reading at a cafe";
	}
	return {
		season: season,
		activity: activity,
	};
}

// var a = getSeasonActivity (1,4)
// console.log(a)
