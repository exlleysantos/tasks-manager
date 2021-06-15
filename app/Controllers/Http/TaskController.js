'use strict';

const Task = use('App/Models/Task');

class TaskController {
	async index() {
		return Task.all();
	}

	async store({ request }) {
		const data = request.only(['title', 'status']);

		const task = await Task.create(data);

		return task;
	}

	async show({ params, response }) {
		const task = await Task.find(params.id);

		if (!task) {
			return response.status(404).send({ error: 'Task not found' });
		}

		return task;
	}

	async update({ params, request, response }) {
		const task = await Task.find(params.id);
		const data = request.only(['title', 'status']);

		if (!task) {
			return response.status(404).send({ error: 'Task not found' });
		}

		task.merge(data);
		await task.save();
		return task;
	}

	async destroy({ params, response }) {
		const task = await Task.find(params.id);

		if (!task) {
			return response.status(404).send({ error: 'Not found' });
		}

		await task.delete();

		return response.status(200).send({ message: 'Task deleted!' });
	}
}

module.exports = TaskController;
