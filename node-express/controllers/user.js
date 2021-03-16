
		let users = [

			{id: 1, name:'meti lamitasari', email:'metilamitasari@gmail.com'},
			{id: 2, name:'yaya', email:'mita@gmail.com'}

		]



module.exports = {

	index: function(request, response){
   	if(users.length > 0) {
   		response.json({
   			status:true,
   			data : users,
   			method:request.method,
   			url : request.url
   		})
   	} else {
   		response.json({
   			status : false,
   			message:'data users masih kosong'
	   		})
	   	}
	},
	store: function(request, response){
  	users.push(request.body)
	response.send({
		status:true,
		data : users,
		message : 'Data users berhasil disimpan',
		method : request.method,
		url : request.url
	})
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


	