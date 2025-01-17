jQuery(document).ready(function ($) {

  /***** Colour picker *****/

  $('.colorpicker').hide();
  $('.colorpicker').each(function () {
    $(this).farbtastic($(this).closest('.color-picker').find('.color'));
  });

  $('.color').click(function () {
    $(this).closest('.color-picker').find('.colorpicker').fadeIn();
  });

  $(document).mousedown(function () {
    $('.colorpicker').each(function () {
      var display = $(this).css('display');
      if (display == 'block')
        $(this).fadeOut();
    });
  });


  /***** Uploading images *****/

  var file_frame;

  jQuery.fn.uploadMediaFile = function (button, preview_media) {
    var button_id = button.attr('id');
    var field_id = button_id.replace('_button', '');
    var preview_id = button_id.replace('_button', '_preview');

    // If the media frame already exists, reopen it.
    if (file_frame) {
      file_frame.open();
      return;
    }

    // Create the media frame.
    file_frame = wp.media.frames.file_frame = wp.media({
      title: jQuery(this).data('uploader_title'),
      button: {
        text: jQuery(this).data('uploader_button_text'),
      },
      multiple: false
    });

    // When an image is selected, run a callback.
    file_frame.on('select', function () {
      attachment = file_frame.state().get('selection').first().toJSON();
      jQuery("#" + field_id).val(attachment.id);
      if (preview_media) {
        jQuery("#" + preview_id).attr('src', attachment.sizes.thumbnail.url);
      }
      file_frame = false;
    });

    // Finally, open the modal
    file_frame.open();
  }

  jQuery('.image_upload_button').click(function () {
    jQuery.fn.uploadMediaFile(jQuery(this), true);
  });

  jQuery('.image_delete_button').click(function () {
    jQuery(this).closest('td').find('.image_data_field').val('');
    jQuery(this).closest('td').find('.image_preview').remove();
    return false;
  });

  // Anchor Behavior
  jQuery('#apply_to_all_offsite_links').click(function () {
    jQuery('#jquery_selector_field').prop('disabled', jQuery('#apply_to_all_offsite_links').prop('checked'));
  });
  jQuery('#jquery_selector_field').prop('disabled', jQuery('#apply_to_all_offsite_links').prop('checked'));

  // Analytics
  jQuery('#google_analytics_enabled').click(function () {
    jQuery('#google_analytics_property_id').prop('disabled', !jQuery('#google_analytics_enabled').prop('checked'));
    jQuery('#google_analytics_event_category').prop('disabled', !jQuery('#google_analytics_enabled').prop('checked'));
    jQuery('#google_analytics_event_action_leave').prop('disabled', !jQuery('#google_analytics_enabled').prop('checked'));
    jQuery('#google_analytics_event_action_stay').prop('disabled', !jQuery('#google_analytics_enabled').prop('checked'));
  });
  jQuery('#google_analytics_property_id').prop('disabled', !jQuery('#google_analytics_enabled').prop('checked'));
  jQuery('#google_analytics_event_category').prop('disabled', !jQuery('#google_analytics_enabled').prop('checked'));
  jQuery('#google_analytics_event_action_leave').prop('disabled', !jQuery('#google_analytics_enabled').prop('checked'));
  jQuery('#google_analytics_event_action_stay').prop('disabled', !jQuery('#google_analytics_enabled').prop('checked'));

  // Google Tag Manager
  jQuery('#gtm_enabled').click(function () {
    jQuery('#gtm_event_name').prop('disabled', !jQuery('#gtm_enabled').prop('checked'));
    jQuery('#gtm_event_action_leave').prop('disabled', !jQuery('#gtm_enabled').prop('checked'));
    jQuery('#gtm_event_action_stay').prop('disabled', !jQuery('#gtm_enabled').prop('checked'));
  });
  jQuery('#gtm_property_id').prop('disabled', !jQuery('#gtm_enabled').prop('checked'));
  jQuery('#gtm_event_name').prop('disabled', !jQuery('#gtm_enabled').prop('checked'));
  jQuery('#gtm_event_action_leave').prop('disabled', !jQuery('#gtm_enabled').prop('checked'));
  jQuery('#gtm_event_action_stay').prop('disabled', !jQuery('#gtm_enabled').prop('checked'));
});