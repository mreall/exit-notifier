<?php
/*
 * Plugin Name: Exit Notifier Plus
 * Version: 1.9.10
 * Description: Pops up a notice when someone clicks a link that takes them away from your site.
 * Author: Anala
 * Author URI: http://www.anala.com/
 * Requires at least: 4.0
 * Tested up to: 5.9
 *
 * @package WordPress
 * @author Anala
 * @since 1.0.0
 */

if (!defined('ABSPATH')) exit;

// Load plugin class files
require_once('includes/class-exit-notifier-plus.php');
require_once('includes/class-exit-notifier-settings.php');

// Load plugin libraries
require_once('includes/lib/class-exit-notifier-admin-api.php');
require_once('includes/lib/class-exit-notifier-post-type.php');
require_once('includes/lib/class-exit-notifier-taxonomy.php');

/**
 * Returns the main instance of Exit_Notifier to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return object Exit_Notifier_Plus
 */
function Exit_Notifier_Plus()
{
	$instance = Exit_Notifier_Plus::instance(__FILE__, '1.9.10');

	if (is_null($instance->settings)) {
		$instance->settings = Exit_Notifier_Settings::instance($instance);
	}

	return $instance;
}

Exit_Notifier_Plus();
