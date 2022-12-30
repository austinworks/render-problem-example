# This repo exists to illustrate a bug

The open issue is being tracked [here](https://github.com/testing-library/svelte-testing-library/issues/190)

When async tests throw an exception, the `screen` container provided by svelte-testing-library doesn't get cleaned up.

Steps to Reproduce: (i am using node 18.12.1)
1. Clone the Repo
2. `npm i`
3. `npm run test:unit` 

As shipped, you will see 2 test failures.  The first is an exception thrown due to svelte trying to bind to a null value.
The second is the follow-on test, breaking because the test that threw the exception did non properly clean up.

Included also is a commented, non-async test with a similar failure mode.  If you uncomment only this test it 
will not cause a failure in the follow-on test.

