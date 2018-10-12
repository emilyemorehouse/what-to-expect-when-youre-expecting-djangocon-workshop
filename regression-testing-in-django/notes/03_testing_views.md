# Step 3 - Testing Views

Technically, our very first tests that we wrote for checking that the home, about, and contact
pages returned the proper status code were actually testing views, so we're already ahead of the
game!

Let's take another look at what we already had in `src/regression_testing_boilerplate/tests.py`. We
already have our response object from calling `self.client.get(url)`, but we're only checking the
status code. There are a couple of other interesting attributes of the response that we can test
against, namely `cookies` and `content`.

`Content` is essentially our rendered HTML, so we can check that our templates are rendering as
expected. `Cookies` are useful for checking that things like authentication that store a cookie are
working properly.

## 3a

We can add a few more checks here, though we'll save full view testing for our screenshot tests.

```python
class PageOpenTestCase(TestCase):
    def test_home_page_exists(self):
        url = reverse("home")
        r = self.client.get(url)
        self.assertEqual(r.status_code, 200)
        self.assertIn(b"Home", r.content)

    def test_about_page_exists(self):
        url = reverse("about")
        r = self.client.get(url)
        self.assertEqual(r.status_code, 200)
        self.assertIn(b"About", r.content)

    def test_contact_page_exists(self):
        url = reverse("contact")
        r = self.client.get(url)
        self.assertEqual(r.status_code, 200)
        self.assertIn(b"Contact", r.content)
```

Run your tests to verify that everything is working properly.

## 3b

Another important piece of our views that we may want to test here is anything that is dynamically
rendered in the template, like a variable or filter.

Add a variable with context to our Contact view in `src/regression_testing_boilerplate/views.py`:

```python
class ContactPage(generic.TemplateView):
    template_name = "contact.html"

    def get_context_data(self, *args, **kwargs):
        context = super(ContactPage, self).get_context_data(*args, **kwargs)
        context["two_plus_two"] = 2 + 2
        return context
```

And display that variable in our template. Let's replace our first `<div>` group with this:

```html
<div id="sec1"
    class="text-page">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1>{% include "_brandname.html" %}</h1>
                <p class="lead">2 + 2 = {{ two_plus_two }}</p>
            </div>
        </div>
    </div>
</div>
```

## 3c

Awesome! Now let's run our test:

```sh
⚡ python manage.py test
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
...F.
FAIL: test_contact_page_exists (regression_testing_boilerplate.tests.PageOpenTestCase)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/Users/emily/Development/Conferences/Talks/what-to-expect/WhatToExpect.workshop/regression-testing-in-django/code/src/regression_testing_boilerplate/tests.py", line 23, in test_contact_page_exists
    self.assertIn(b"Contact", r.content)
AssertionError: b'Contact' not found in b'<!DOCTYPE html>... [omitted]'

----------------------------------------------------------------------
Ran 5 tests in 0.043s

FAILED (failures=1)
Destroying test database for alias 'default'...
```

Oops. Turns out that we had a false positive in our test case. If we look closely, we can see that
though we _meant_ to test that the title of the page was set correctly, we didn't actually test for
that. Since we copy-pasted the About page as a starter for our Contact page, we forgot to update
the title of the page. However, our test still passed because we had the word "Contact" elsewhere in
the page, which we just replaced with something else.

Let's update our test so it passes and checks for more explicit information:

```python
class PageOpenTestCase(TestCase):
    def test_home_page_exists(self):
        url = reverse("home")
        r = self.client.get(url)
        self.assertEqual(r.status_code, 200)
        self.assertIn(
            b"<title>Regression_Testing_Boilerplate\n :: Home</title>", r.content
        )

    def test_about_page_exists(self):
        url = reverse("about")
        r = self.client.get(url)
        self.assertEqual(r.status_code, 200)
        self.assertIn(
            b"<title>Regression_Testing_Boilerplate\n :: About</title>", r.content
        )

    def test_contact_page_exists(self):
        url = reverse("contact")
        r = self.client.get(url)
        self.assertEqual(r.status_code, 200)
        self.assertIn(
            b"<title>Regression_Testing_Boilerplate\n :: Contact</title>", r.content
        )
        self.assertIn(b"2 + 2 = 4", r.content)
```

Again, run your tests to make sure everything is back to passing.

## ▶️ Next up

[4 - Testing Forms](./04_testing_forms.md)
