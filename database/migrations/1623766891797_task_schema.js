'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TaskSchema extends Schema {
	up() {
		this.create('tasks', (table) => {
			table.increments();
			table.string('title');
			table.enu('status', ['done', 'pending', 'canceled']).defaultTo('pending');
			table.timestamps();
		});
	}

	down() {
		this.drop('tasks');
	}
}

module.exports = TaskSchema;
