# Step 1 - Intro To Testing

Django comes with a built-in testing infrastructure, so even without making any changes or writing
any tests, we can run our empty test suite:

```sh
⚡ python manage.py test
Creating test database for alias 'default'...
System check identified no issues (0 silenced).

----------------------------------------------------------------------
Ran 0 tests in 0.000s

OK
Destroying test database for alias 'default'...
```

## What do we get out of the box?

Django's testing infrastructure is build on top of unittest, but we'll learn more about that later.
We can see so far that when we run `python manage.py test`, we immediately get a test database that
gets created and torn down, along with basic reporting and statistics.

## Let's add a test case!

When using Django to render templates, one of the easiest things to test is just if your page
renders! Let's test it out.

We can see that we have a home page and an about page right off the bat

[screenshot of default view - ss 1]

::TODO:: add empty test file in starter

Open up regression_testing_boilerplate/tests.py and add:

```
from __future__ import unicode_literals
from django.test import TestCase
from django.urls import reverse


class PageOpenTestCase(TestCase):
    def test_home_page_exists(self):
        url = reverse("home")
        r = self.client.get(url)
        self.assertEqual(r.status_code, 200)

    def test_about_page_exists(self):
        url = reverse("about")
        r = self.client.get(url)
        self.assertEqual(r.status_code, 200)
```

Then run `python manage.py test`:

```sh
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
..
----------------------------------------------------------------------
Ran 2 tests in 0.023s

OK
Destroying test database for alias 'default'...
```

Let's dig deeper into what we just wrote.

Django comes with a full-featured test system (that is, there are certainly add-ons and additional
libraries that we can use, but we have enough of what we need out of the box to run pretty much any
test that we need).

From the [Django Documentation](https://docs.djangoproject.com/en/2.1/topics/testing/overview/):

> When you run your tests, the default behavior of the test utility is to find all the test cases
> (that is, subclasses of unittest.TestCase) in any file whose name begins with test, automatically
> build a test suite out of those test cases, and run that suite.

We're using TestCase, but what is that?

TODO EXPAND UPON:
https://github.com/django/django/blob/8ef8bc0f64c463684268a7c55f3d3da4de066c0d/django/test/testcases.py#L993

We have access to a few other test classes, including:

- [SimpleTestCase](https://docs.djangoproject.com/en/2.0/topics/testing/tools/#simpletestcase)
- [TransactionTestCase](https://docs.djangoproject.com/en/2.0/topics/testing/tools/#transactiontestcase)
- [TestCase](https://docs.djangoproject.com/en/2.0/topics/testing/tools/#testcase)
- [LiveServerTestCase](https://docs.djangoproject.com/en/2.0/topics/testing/tools/#liveservertestcase)

::TODO also ref::
https://docs.djangoproject.com/en/2.1/topics/testing/overview/#understanding-the-test-output

We also have access to [built-in assertions](https://docs.python.org/3.7/library/unittest.html#assert-methods) from unittest:

- `assertEqual(a, b)`: `a == b`
- `assertNotEqual(a, b)`: `a != b`
- `assertTrue(x)`: `bool(x) is True`
- `assertFalse(x)`: `bool(x) is False`
- `assertIs(a, b)`: `a is b`
- `assertIsNot(a, b)`: `a is not b`
- `assertIsNone(x)`: `x is None`
- `assertIsNotNone(x)`: `x is not None`
- `assertIn(a, b)`: `a in b`
- `assertNotIn(a, b)`: `a not in b`
- `assertIsInstance(a, b)`: `isinstance(a, b)`
- `assertNotIsInstance(a, b)`: `not isinstance(a, b)`

## Fixing Our Test Case

Let's add our contact page so that our test passes.

::TODO::

## ▶️ Next up

[2 - Testing Models](./02_testing_models.md)
