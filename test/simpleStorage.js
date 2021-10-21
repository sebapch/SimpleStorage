const SimpleStorage = artifacts.require('SimpleStorage')

contract('SimpleStorage', () => {
	it('Should set the value of the variable', async () => {
		const simpleStorage = await SimpleStorage.deployed();
		await simpleStorage.set('this');
		const result = await simpleStorage.get();
		assert(result === 'this');
	})
})