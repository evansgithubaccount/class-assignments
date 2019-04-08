userProfile = {
	name: 'Nemo',
	address: '42 Wallaby Way',
	city: 'Sydney',
	state: 'New South Wales',
	zipcode: '12345',
	avatar: 'clownfish'
}

function getProfileUpdate(){
	return ({name: 'sharkbait', zipcode:'54321'});
}

function updateProfile(flomo){
	const newProf = Object.assign({}, flomo, getProfileUpdate());
	console.log(newProf);
	}

updateProfile(userProfile);