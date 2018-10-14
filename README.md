# What To Expect When You're Expecting

This repository holds all materials for the DjangoCon 2018 workshop presented by Emily Morehouse.

The original proposal can be viewed
[here](https://github.com/emilyemorehouse/conference-talk-proposals/blob/master/accepted/what-to-expect-djangocon.md),
but is summarized below.

## Summary

We all know we should be testing our applications, but testing is hard and great testing is even
harder.

Take a deep dive into what types of things to test and how to approach testing them in your Django
apps, plus learn how to leverage modern headless browser libraries and automated visual diff-ing to
get (and keep) pixel-perfect apps.

We'll cover types of testing as a whole, plus practical applications and deep dives for testing in
Django and visual regression testing with Javascript (whether for templates rendered by Django or
for a standalone Javascript client application).

## Audience Expectations

A foundational knowledge of Python and a web framework of choice is beneficial, as we'll dive right
into testing an existing application. Starter code and code progressions will be provided, so you
don't have to be a Django expert to grasp the content! Whether you love, hate, or have never used
Javascript, you'll feel at home; our use of JS will be limited to leveraging libraries to gather
data and screenshots for visual regression testing, whether for a JS client or a Django web app.

---

## 📽 Slides

Online: [Link](https://emilyemorehouse.github.io/what-to-expect-when-youre-expecting/)

## 📝 Content and Notes

1. Introduction
1. Foundational Knowledge for Testing
1. [Walkthrough - Regression Testing in Django](regression-testing-in-django/README.md)
1. [Walkthrough - Visual Regression Testing Powered By
   Javascript](agnostic-visual-regression-testing/README.md)
1. Conclusion - Suggested tools and resources

## 📚 References

"If I have seen further it is by standing on ye sholders of Giants." -- Sir Isaac Newton

- [Django's Testing Documentation](https://docs.djangoproject.com/en/2.1/topics/testing/)

## 🧠 Resources

- [Testing in Django](https://docs.djangoproject.com/en/2.1/topics/testing/)
- [Edge - Django Boilerplate](https://django-edge.readthedocs.io)

## 🦄 Additional Resources

- [Percy.io - Visual Testing as a Service](https://percy.io/)
- [Travis CI - Hosted CI and CD for GitHub Projects](https://travis-ci.com/)
- [ResembleJS - Image Analysis and Compare Tool](https://huddleeng.github.io/Resemble.js/)
- [Puppeteer - Easy-To-Use NodeJS Library for
  Chrome/Chromium](https://github.com/GoogleChrome/puppeteer)
- [Selenium - Full-Featured Browser Automation](https://www.seleniumhq.org/)

## 🏅 Contributing

Feel free to open an issue or PR. Please read CONTRIBUTING.md for details on the code of conduct,
as well as [DjangoCon's Code of Conduct](https://2018.djangocon.us/conduct/).

If you have feedback or questions, you can contact me:

- Email: emily [at] cuttlesoft [dot] com
- Twitter: [@emilyemorehouse](https://twitter.com/emilyemorehouse)
