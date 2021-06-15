'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
	return { greeting: 'Welcome to Tasks Manager' };
});

Route.get('/users', 'UserController.index');
Route.post('/users', 'UserController.store');
Route.get('/users/:id', 'UserController.show');
Route.put('/users/:id', 'UserController.update').middleware('auth');
Route.delete('/users/:id', 'UserController.destroy').middleware('auth');

Route.post('auth', 'AuthController.create');

Route.get('/tasks', 'TaskController.index').middleware('auth');
Route.post('/tasks', 'TaskController.store').middleware('auth');
Route.get('/tasks/:id', 'TaskController.show').middleware('auth');
Route.put('/tasks/:id', 'TaskController.update').middleware('auth');
Route.delete('/tasks/:id', 'TaskController.destroy').middleware('auth');
