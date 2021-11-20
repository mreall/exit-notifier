=== Exit Notifier Plus ===
Contributors: cvs@cvstech.com
Tags: exit link, speed bump, external link, Credit Union, pop up
Requires at least: 4.0
Tested up to: 5.7
Stable tag: 1.9.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Provides a way to display a notification to site users that they have clicked an external link and are leaving your site.

Forked from [Exit Notifier](https://github.com/WPPlugins/exit-notifier) to fix compatibility issues with other themes and plugins.

== Description ==

Some industries' compliance recommendations suggest that a notice be presented anytime someone leaves your site. I searched for a plugin to do this, and came up empty, so here you go!

Features:
* Works with little or no configuration.
* The title and the body of the exit box, and the text on the buttons are all editable, and honor shortcodes.
* There are also options for providing a visual indication on your selected links, and for opening selected links in a new window/tab.
* You can completely customize the display of the dialog by modifying the CSS.
* You can set a timeout that will continue or cancel when the time expires, with optional visual feedback.
* Add CSS classes to selected links.
* Add Custom CSS that applies to the whole site.
* You can add custom tags in the anchor tag for each link to provide custom title and body for each link.
* Compatible with simple forms in some cases. Should work well with WooCommerce External/Affiliate product pages.
* Will honor &lt;a target="whatever"&gt; for selectively opening in a new tab/window.
* Allows you to add rel="nofollow" to all outbound links.
* You can now exclude individual links by applying a CSS class.
* Accessibility issues addressed with library updates.

== NOTICE ==

When upgrading, please be sure to clear the cache if you're using a caching plugin like the excellent WP Fastest Cache (http://www.wpfastestcache.com/) or something similar. There have been substantial changes and having older versions of the files cached will almost certainly lead to problems when an external link is clicked.

== Credit where credit is due ==

I have made liberal use of the excellent Wordpress Plugin Template by Hugh Lashbrooke found at https://github.com/hlashbrooke/WordPress-Plugin-Template. Thanks, Hugh!

Also, to <a href="https://htmlguy.com">HTMLGuy</a>, the maker of <a href="https://htmlguyllc.github.io/jAlert/">jAlert</a>, a very versatile and simple alert component! Thanks!


== Installation ==

Installing "Exit Notifier" can be done either by searching for "Exit Notifier" via the "Plugins > Add New" screen in your WordPress dashboard, or by using the following steps:

1. Download the plugin via WordPress.org
2. Upload the ZIP file through the 'Plugins > Add New > Upload' screen in your WordPress dashboard
3. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= What is the plugin for? =

This plugin is designed to provide a mechanism for notifying users of your site that they are leaving for another server. It can also be used to pop an alert for pretty much any &lt;a&gt; tag target (and now some forms!) with some jQuery selector magic. Some industries recommend notifying users if they are leaving your site.

= Can I edit the text in the box? =

Yes. The plugin provides generic defaults, but the settings page allows you to edit the title and body of the exit box. You can now also edit the text of the buttons, and determine the box behavior and look and feel.<br>
You can also add exit-notifier-title="Your title here" and/or exit-notifier-body="Custom Exit Notifier Body text" to any link to customize the message for that particular link.

= How do I "whitelist" links so the notifier does not appear even though they are offsite? =

You can bypass exit notifier for some links by following the guidelines here: <a href="https://wordpress.org/support/topic/a-way-to-whitelist-a-site/">https://wordpress.org/support/topic/a-way-to-whitelist-a-site/</a>

== Screenshots ==

1. A sample notice in action.
2. Default exit box closeup.
3. Content settings page.
4. Alternate Content settings page.
5. Behavior settings page.
6. Display settings page.
7. Timeout settings page.
8. Custom CSS settings page.
