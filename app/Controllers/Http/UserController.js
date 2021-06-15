'use strict';

const User = use('App/Models/User');

class UserController {
	async index() {
		return User.all();
	}
	async create({ request }) {
		const data = request.only(['email', 'password']);

		const user = await User.create(data);

		return user;
	}

	async show({ params, response }) {
		const user = await User.find(params.id);

		if (!user) {
			return response.status(404).send({ error: 'Not found' });
		}

		return user;
	}
}

module.exports = UserController;
