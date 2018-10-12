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

    def test_contact_page_exists(self):
        url = reverse("contact")
        r = self.client.get(url)
        self.assertEqual(r.status_code, 200)
