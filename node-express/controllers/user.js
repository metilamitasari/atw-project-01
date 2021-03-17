const { v4: uuidv4 } = require('uuid')

		let users = [

			{id: 1, name:'meti lamitasari', email:'metilamitasari@gmail.com'},
			{id: 2, name:'yaya', email:'mita@gmail.com'},
			{id: 3, name:'yaya3', email:'mita3@gmail.com'}

		]


module.exports = {
	index:function(request, response){
		response.render('pages/user/index', {users})

},
	create :function(request,response){
		response.render('pages/user/create')
},
	

	store: function(request, response){
  	users.push({
  		id : uuidv4(),
  		name :request.body.name,
  		email : request.body.email
  	})
  	
  	response.end('/users')
},
update: function(request, response){
	const id = request.params.id
	users.filter(user => {
		if(user.id == id) {
			user.id = id
			user.name = request.body.name
			user.email = request.body.email

			return user
		}
	})
		response.json({
		status:true,
		data : users,
		message : 'Data users berhasil diedit',
		method : request.method,
		url : request.url
	})
},

delete:function(request, response){
	let id = request.params.useriId
	users=users.filter(user=>user.id !=id)
	response.send({
		status:true,
		data : users,
		message : 'Data users berhasil dihapus',
		method : request.method,
		url : request.url
	})
	}
}


	