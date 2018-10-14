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
