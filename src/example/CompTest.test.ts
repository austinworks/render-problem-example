import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/svelte'
import {it, expect} from 'vitest';

import Comp from './Comp.svelte'

// this test will not cause a second failure
// it('does not happen when sync tests fail', () => {
//     render(Comp, {name: 'World'});
//     const heading = screen.getByText('Hello world!');
//     expect(heading).toBeInTheDocument();
// });

// Note: This is as an async test as we are using `fireEvent`
it('is triggered by async tests failing', async () => {
    render(Comp, {name: 'World'});
    const button = screen.getByRole('button');

    // Using await when firing events is unique to the svelte testing library because
    // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
    await fireEvent.click(button)
    expect(button).toHaveTextContent('Button Clicked');

})

it('sees many buttons', async () => {
    const { container } = render(Comp, {name: 'World', values: [], testid: "test2"});
    const button = container.querySelector('#test2 button');

    // Using await when firing events is unique to the svelte testing library because
    // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
    await fireEvent.click(button)
    expect(button).toHaveTextContent('Button Clicked');

})