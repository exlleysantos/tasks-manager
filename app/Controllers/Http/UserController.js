'use strict';

const User = use('App/Models/User');

class UserController {
	async index({ request }) {
		const { page } = request.all() || 1;

		return User.query().paginate(page, 5);
	}
	async store({ request, response }) {
		const data = request.only(['email', 'password']);

		const userAlreadyExist = await User.findBy('email', data.email);

		if (userAlreadyExist) {
			return response.status(500).send({ error: 'User already exist' });
		}

		const user = await User.create(data);

		return user;
	}

	async show({ params, response }) {
		const user = await User.find(params.id);

		if (!user) {
			return response.status(404).send({ error: 'User not found' });
		}

		return user;
	}
}

module.exports = UserController;
