const { generateReadmeFromConfig } = require('../index')

test('generate readme', async () => {
  const readme = await generateReadmeFromConfig('test/config.yml', 'test/course-details.md', 'test/out/readme.md');

  expect(readme).toMatchSnapshot();
});