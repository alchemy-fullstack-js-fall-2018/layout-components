import Section from './Section';

describe('Section', () => {
    it('should be a section', () => {
        const section = new Section({
            title: 'I Like Coding',
            paragraphs: ['It\'s such a relief to be writing JavaScript again.', 'After CSS, it feels like coming home.']
        });

        expect(section.render()).toMatchSnapshot();
    });
});
