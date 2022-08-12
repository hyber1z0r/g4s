jest.mock('node-fetch');

import fetch from 'node-fetch';
import API from '../src/api';
const { Response } = jest.requireActual('node-fetch');

test('should invoke disarm command', async () => {
	(fetch as unknown as jest.Mock).mockResolvedValue(
		new Response(undefined, { status: 200 }),
	);

	const api = new API('username', 'password');
	await api.disarmPanel(103031);
	expect(fetch).toHaveBeenCalled();
	expect(fetch).toMatchSnapshot();
});

test('should invoke arm command', async () => {
	(fetch as unknown as jest.Mock).mockResolvedValue(
		new Response(undefined, { status: 200 }),
	);

	const api = new API('username', 'password');
	await api.armPanel(103031);
	expect(fetch).toHaveBeenCalled();
	expect(fetch).toMatchSnapshot();
});
