/**
 * 🗳️ Panchayat Election System - Capstone
 *
 * Village ki panchayat election ka system bana! Yeh CAPSTONE challenge hai
 * jisme saare function concepts ek saath use honge:
 * closures, callbacks, HOF, factory, recursion, pure functions.
 *
 * Functions:
 *
 *   1. createElection(candidates)
 *      - CLOSURE: private state (votes object, registered voters set)
 *      - candidates: array of { id, name, party }
 *      - Returns object with methods:
 *
 *      registerVoter(voter)
 *        - voter: { id, name, age }
 *        - Add to private registered set. Return true.
 *        - Agar already registered or voter invalid, return false.
 *        - Agar age < 18, return false.
 *
 *      castVote(voterId, candidateId, onSuccess, onError)
 *        - CALLBACKS: call onSuccess or onError based on result
 *        - Validate: voter registered? candidate exists? already voted?
 *        - If valid: record vote, call onSuccess({ voterId, candidateId })
 *        - If invalid: call onError("reason string")
 *        - Return the callback's return value
 *
 *      getResults(sortFn)
 *        - HOF: takes optional sort comparator function
 *        - Returns array of { id, name, party, votes: count }
 *        - If sortFn provided, sort results using it
 *        - Default (no sortFn): sort by votes descending
 *
 *      getWinner()
 *        - Returns candidate object with most votes
 *        - If tie, return first candidate among tied ones
 *        - If no votes cast, return null
 *
 *   2. createVoteValidator(rules)
 *      - FACTORY: returns a validation function
 *      - rules: { minAge: 18, requiredFields: ["id", "name", "age"] }
 *      - Returned function takes a voter object and returns { valid, reason }
 *
 *   3. countVotesInRegions(regionTree)
 *      - RECURSION: count total votes in nested region structure
 *      - regionTree: { name, votes: number, subRegions: [...] }
 *      - Sum votes from this region + all subRegions (recursively)
 *      - Agar regionTree null/invalid, return 0
 *
 *   4. tallyPure(currentTally, candidateId)
 *      - PURE FUNCTION: returns NEW tally object with incremented count
 *      - currentTally: { "cand1": 5, "cand2": 3, ... }
 *      - Return new object where candidateId count is incremented by 1
 *      - MUST NOT modify currentTally
 *      - If candidateId not in tally, add it with count 1
 *
 * @example
 *   const election = createElection([
 *     { id: "C1", name: "Sarpanch Ram", party: "Janata" },
 *     { id: "C2", name: "Pradhan Sita", party: "Lok" }
 *   ]);
 *   election.registerVoter({ id: "V1", name: "Mohan", age: 25 });
 *   election.castVote("V1", "C1", r => "voted!", e => "error: " + e);
 *   // => "voted!"
 */
export function createElection(candidates) {
	const votes = {};
	const registeredVoters = new Set();

	function registerVoter(voter) {
		if (!voter || typeof voter !== "object" || !voter.id || !voter.name || !voter.age) {
			return false;
		}
		if (registeredVoters.has(voter.id) || voter.age < 18) {
			return false;
		}
		registeredVoters.add(voter.id);
		return true;
	}

	function castVote(voterId, candidateId, onSuccess, onError) {
		if (!registeredVoters.has(voterId)) {
			return onError("Voter not registered");
		}
		const candidate = candidates.find(c => c.id === candidateId);
		if (!candidate) {
			return onError("Candidate not found");
		}
		if (votes[voterId]) {
			return onError("Voter has already voted");
		}
		votes[voterId] = candidateId;
		return onSuccess({ voterId, candidateId });
	}

	function getResults(sortFn) {
		const tally = {};
		for (const voterId in votes) {
			const candidateId = votes[voterId];
			tally[candidateId] = (tally[candidateId] || 0) + 1;
		}
		let results = candidates.map(c => ({
			id: c.id,
			name: c.name,
			party: c.party,
			votes: tally[c.id] || 0
		}));
		if (typeof sortFn === "function") {
			results.sort(sortFn);
		} else {
			results.sort((a, b) => b.votes - a.votes);
		}
		return results;
	}

	function getWinner() {
		const results = getResults();
		if (results.length === 0 || results[0].votes === 0) {
			return null;
		}
		return results[0];
	}

	return { registerVoter, castVote, getResults, getWinner };
}

export function createVoteValidator(rules) {
	return function(voter) {
		if (!voter || typeof voter !== "object") {
			return { valid: false, reason: "Invalid voter object" };
		}
		for (const field of rules.requiredFields) {
			if (!voter.hasOwnProperty(field)) {
				return { valid: false, reason: `Missing required field: ${field}` };
			}
		}
		if (voter.age < rules.minAge) {
			return { valid: false, reason: `Voter must be at least ${rules.minAge} years old` };
		}
		return { valid: true, reason: "" };
	};	
}

export function countVotesInRegions(regionTree) {
	if (!regionTree || typeof regionTree !== "object" || typeof regionTree.votes !== "number") {
		return 0;
	}
	let totalVotes = regionTree.votes || 0;
	if (Array.isArray(regionTree.subRegions)) {
		for (const subRegion of regionTree.subRegions) {
			totalVotes += countVotesInRegions(subRegion);
		}
	}
	return totalVotes;	
}

export function tallyPure(currentTally, candidateId) {
	if (typeof currentTally !== "object" || typeof candidateId !== "string") {
		return { ...currentTally };
	}
	return {
		...currentTally,
		[candidateId]: (currentTally[candidateId] || 0) + 1
	};	
}
