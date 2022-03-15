class HttpService {
	private static readonly API_KEY = 'd695042f4d4ed9fe27080705576bba55';
	private static readonly END_POINT = 'http://api.exchangeratesapi.io/v1/';

	fetchLatestData(): Promise<any> {
		return fetch(`${HttpService.END_POINT}latest?access_key=${HttpService.API_KEY}`)
			.then(response => response.json())
			.then(data => data);
	}
}

export default new HttpService();
