# Medallion.js

If you've worked with WinJS, the HTML5 & JavaScript application side, you'll know some of the stuff is not *really* designed for JavaScript developers.

Medallion.js is designed to make it easier to work with the [Badges](https://msdn.microsoft.com/library/windows/apps/hh761459.aspx?WT.mc_id=javascript-0000-aapowell), no more XML manipulation!

# Usage

It supports both numerical and glyph badges so you can decide what you want.

## Showing Badges

To show a badge provide it a value and tell it to show:

	Medallion.show({ value: 42 }); //numerical value will show a numerical badge
	Medallion.show({ value: 'newMessage' }); //strings will be turned into glyphs
	
By default the notifications wont have an expiry set but if you want to control that then you can control that by providing the date you want it to expire:

	Medallion.show({
		value: 42,
		expiry: new Date(+new Date + 1800 * 1000) //30 minutes after it was created
	});
	
## Hiding Badges

You can also hide notifications:

	Medallion.hide();
	
# License

The MIT License

Copyright (c) 2012 Aaron Powell