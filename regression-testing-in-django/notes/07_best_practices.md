# Step 7 - Best Practices

- Focus on testing single pieces of functionality
  - This can also be a good refactoring exercise - can you break your code into smaller pieces that
    are easier to test and only do a single thing?
- Modularize your tests and ensure you're testing all pieces of your application including:
  - Views
  - Models
  - Forms
  - Filters
  - Validators
  - etc
- Actually run your tests!
  - Integrate your tests into a Continuous Integration service to ensure that tests are passing
    when you push commits or create a pull request
  - Consider using local [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to
    run tests before committing or pushing code
- Set a meaningful benchmark
  - 100% code coverage does not mean 100% bug free!
  - At minimum, when writing regression tests, you should work on focusing on writing tests when a
    bug is found. Thus, it follows that when pushing a fix for a bug, there should be a
    corresponding test or tests that both failed before the fix and pass after the fix is made.
- Find a standard process and stick to it! Consistency can be key in organizing and maintaining
  your tests. Decide on a file structure and test structure and try to use it across your
  application. Once you have a default set of tests, you'll be less likely to forget to test
  different parts of new code.
