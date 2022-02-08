/* eslint-disable no-useless-escape */
// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderListItem } from '../render-utils.js';

const test = QUnit.test;

test('renderListItem renders a div with animal details', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class=\"animal\"><a href=\"./animals/?id=6\"><img src=\"./assets/sheep.svg\"><span class=\"name\">Samuel the Sheep</span><span>Just because we're sheep, it doesn't mean we have to follow. Think for yourselves.</span></a></div>`;
    //Act
    // Call the function you're testing and set the result to a const
    const samuel = {
        id: 6,
        name: 'Samuel the Sheep',
        type: 'sheep',
        says: "Just because we're sheep, it doesn't mean we have to follow. Think for yourselves.",
      
    };
    const actual = renderListItem(samuel);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
