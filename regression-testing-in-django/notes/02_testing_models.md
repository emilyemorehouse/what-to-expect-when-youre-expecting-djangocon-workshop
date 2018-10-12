# Step 2 - Testing Models

Testing models may seem redundant, but testing the methods or properties associated with them may
not be.

Let's set up an example model test. We can see in `src/profiles/models.py` that we have an existing model as well as an empty test file in `src/profiles/tests.py`.

Open up `src/profiles/tests.py` and add the following test:

```python
from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import BaseProfile

User = get_user_model()


class UserTestCase(TestCase):
    def setUp(self):
        u = User.objects.get_or_create(email="solo@example.com")

    def test_base_profile_created(self):
        u = User.objects.get(email="solo@example.com")

        self.assertIsNotNone(u.id)
        self.assertEqual(u.email, "solo@example.com")
        self.assertIsNotNone(u.profile)
        self.assertIsNotNone(u.profile.slug)
```

## ▶️ Next up

[3 - Testing Views](./03_testing_views.md)
