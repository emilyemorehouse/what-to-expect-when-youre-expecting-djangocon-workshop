# Step 4 - Testing Forms

## 4a

Add the following test to `src/profiles/test.py`

```python
def test_valid_user_form(self):
    w = User.objects.create(email="leia@example.com", name="Leia")
    data = {"name": w.name}
    form = UserForm(data=data)
    self.assertTrue(form.is_valid())
```

Let's dive a little bit deeper. One of the tricky parts of testing is knowing what to test, and I think we can do better.

We have another form in our `profile` module - a ProfileForm. Let's take a peek at the corresponding model for `BaseProfile`:

```python
class BaseProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True
    )
    slug = models.UUIDField(default=uuid.uuid4, blank=True, editable=False)
    # Add more user profile fields here. Make sure they are nullable
    # or with default values
    picture = models.ImageField(
        "Profile picture", upload_to="profile_pics/%Y-%m-%d/", null=True, blank=True
    )
    bio = models.CharField("Short Bio", max_length=200, blank=True, null=True)
    email_verified = models.BooleanField("Email verified", default=False)

    class Meta:
        abstract = True
```

## 4b

Looking at this model, we can see that we have a few restrictions placed on our attributes. Let's focus on testing the `bio` attribute. It can be null and blank, but the more interesting thing we can test is the max_length. Edge cases are great places to add tests, as we can make sure that our code works up until a certain point before it hits an error.

Since the `bio` attribute has a max length of 200, let's test that a bio with 200 characters is valid, but 201 characters is not.

```python
def test_valid_profile_form_1(self):
    data = {"bio": None}
    form = ProfileForm(data=data)
    self.assertTrue(form.is_valid())

def test_valid_profile_form_2(self):
    data = {"bio": ""}
    form = ProfileForm(data=data)
    self.assertTrue(form.is_valid())

def test_valid_profile_form_3(self):
    data = {"bio": "e" * 200}
    form = ProfileForm(data=data)
    self.assertTrue(form.is_valid())

def test_invalid_profile_form(self):
    data = {"bio": "e" * 201}
    form = ProfileForm(data=data)
    self.assertFalse(form.is_valid())
```

## ▶️ Next up

[4 - Testing API Endpoints](./04_testing_forms.md)
