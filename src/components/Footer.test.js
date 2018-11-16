import Footer from './Footer';

describe('Footer', () => {
    it('should be a footer', () => {
        const footer = new Footer({
            author: 'Joe Schmo'
        });

        expect(footer.render()).toMatchSnapshot();
    });
});
