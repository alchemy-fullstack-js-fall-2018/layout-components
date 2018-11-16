import Header from './Header';

describe('Header', () => {
    it('should be a header', () => {
        const header = new Header({
            links: ['about']
        });

        expect(header.render()).toMatchSnapshot();
    });
});
