type UserId = number;

interface User {
	id: UserId;
	fname: string;
	lname?: string; // making last name optional.. 
	email: string;
	contact: {
		mobile: string;
	};
	address: {
		city: string;
		country: string;
	};
}

class myDb {
	private _db: Map<UserId, User>;
	constructor() { }

	public insertUser(data: User) : UserId{
		if(this._db.has(data.id)) {
			throw new Error (`User with ID ${data.id} already exists`)
		}
		this._db.set(data.id, data);
		return data.id;
	}

	public updateUser(id: UserId , updateData : Omit<User, 'id'>) {
		if(!this._db.has(id)) throw new Error (`User with ID ${id} does not exists`)
		this._db.set(id, {...updateData,id})
		return true
	}
}

const Db = new myDb() 
Db.insertUser({
	id : 20,
	fname : "ram" ,
	email : "something@example.com",
	contact : {
		mobile : "39485",
	},
	address : {
		city : "new delhi",
		country : "zillelistan"
	}
})
