# A few tips for the email template.
1. It is made with Ink - http://zurb.com/ink
2. In the repo, the email is comprised of images, an index.html and an ink.css
	- The ink.css standalone is just to be used for testing!
	- When using it in production, the styles must be included in style tags, only for it to be run through a CSS Inliner - http://zurb.com/ink/inliner.php
	- Once it's run through an inliner, of course, all your CSS will be inline. This is necessary as some email services strip out everything in style tags
3. Interesting things I've found:
	- You can't use pseudoclasses. It's fine to include them, but as you can't have selectors in inline CSS, there is no pseudoclasses in inline CSS either.
