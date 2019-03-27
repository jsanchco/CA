import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss']
})
export class IconsPageComponent implements OnInit {

  // Material icons values
  materialIcons = [
    '3d_rotation',
    'access_alarm',
    'access_alarms',
    'access_time',
    'accessibility',
    'account_balance',
    'account_balance_wallet',
    'account_box',
    'account_circle',
    'adb',
    'add',
    'add_alarm',
    'add_alert',
    'add_box',
    'add_circle',
    'add_circle_outline',
    'add_shopping_cart',
    'add_to_photos',
    'adjust',
    'airline_seat_flat',
    'airline_seat_flat_angled',
    'airline_seat_individual_suite',
    'airline_seat_legroom_extra',
    'airline_seat_legroom_normal',
    'airline_seat_legroom_reduced',
    'airline_seat_recline_extra',
    'airline_seat_recline_normal',
    'airplanemode_active',
    'airplanemode_inactive',
    'airplay',
    'alarm',
    'alarm_add',
    'alarm_off',
    'alarm_on',
    'album',
    'android',
    'announcement',
    'apps',
    'archive',
    'arrow_back',
    'arrow_drop_down',
    'arrow_drop_down_circle',
    'arrow_drop_up',
    'arrow_forward',
    'aspect_ratio',
    'assessment',
    'assignment',
    'assignment_ind',
    'assignment_late',
    'assignment_return',
    'assignment_returned',
    'assignment_turned_in',
    'assistant',
    'assistant_photo',
    'attach_file',
    'attach_money',
    'attachment',
    'audiotrack',
    'autorenew',
    'av_timer',
    'backspace',
    'backup',
    'battery_alert',
    'battery_charging_full',
    'battery_full',
    'battery_std',
    'battery_unknown',
    'beenhere',
    'block',
    'bluetooth',
    'bluetooth_audio',
    'bluetooth_connected',
    'bluetooth_disabled',
    'bluetooth_searching',
    'blur_circular',
    'blur_linear',
    'blur_off',
    'blur_on',
    'book',
    'bookmark',
    'bookmark_border',
    'border_all',
    'border_bottom',
    'border_clear',
    'border_color',
    'border_horizontal',
    'border_inner',
    'border_left',
    'border_outer',
    'border_right',
    'border_style',
    'border_top',
    'border_vertical',
    'brightness_1',
    'brightness_2',
    'brightness_3',
    'brightness_4',
    'brightness_5',
    'brightness_6',
    'brightness_7',
    'brightness_auto',
    'brightness_high',
    'brightness_low',
    'brightness_medium',
    'broken_image',
    'brush',
    'bug_report',
    'build',
    'business',
    'cached',
    'cake',
    'call',
    'call_end',
    'call_made',
    'call_merge',
    'call_missed',
    'call_received',
    'call_split',
    'camera',
    'camera_alt',
    'camera_enhance',
    'camera_front',
    'camera_rear',
    'camera_roll',
    'cancel',
    'card_giftcard',
    'card_membership',
    'card_travel',
    'cast',
    'cast_connected',
    'center_focus_strong',
    'center_focus_weak',
    'change_history',
    'chat',
    'chat_bubble',
    'chat_bubble_outline',
    'check',
    'check_box',
    'check_box_outline_blank',
    'check_circle',
    'chevron_left',
    'chevron_right',
    'chrome_reader_mode',
    'class',
    'clear',
    'clear_all',
    'close',
    'closed_caption',
    'cloud',
    'cloud_circle',
    'cloud_done',
    'cloud_download',
    'cloud_off',
    'cloud_queue',
    'cloud_upload',
    'code',
    'collections',
    'collections_bookmark',
    'color_lens',
    'colorize',
    'comment',
    'compare',
    'computer',
    'confirmation_number',
    'contact_phone',
    'contacts',
    'content_copy',
    'content_cut',
    'content_paste',
    'control_point',
    'control_point_duplicate',
    'create',
    'credit_card',
    'crop',
    'crop_16_9',
    'crop_3_2',
    'crop_5_4',
    'crop_7_5',
    'crop_din',
    'crop_free',
    'crop_landscape',
    'crop_original',
    'crop_portrait',
    'crop_square',
    'dashboard',
    'data_usage',
    'dehaze',
    'delete',
    'description',
    'desktop_mac',
    'desktop_windows',
    'details',
    'developer_board',
    'developer_mode',
    'device_hub',
    'devices',
    'dialer_sip',
    'dialpad',
    'directions',
    'directions_bike',
    'directions_boat',
    'directions_bus',
    'directions_car',
    'directions_railway',
    'directions_run',
    'directions_subway',
    'directions_transit',
    'directions_walk',
    'disc_full',
    'dns',
    'do_not_disturb',
    'do_not_disturb_alt',
    'dock',
    'domain',
    'done',
    'done_all',
    'drafts',
    'drive_eta',
    'dvr',
    'edit',
    'eject',
    'email',
    'equalizer',
    'error',
    'error_outline',
    'event',
    'event_available',
    'event_busy',
    'event_note',
    'event_seat',
    'exit_to_app',
    'expand_less',
    'expand_more',
    'explicit',
    'explore',
    'exposure',
    'exposure_neg_1',
    'exposure_neg_2',
    'exposure_plus_1',
    'exposure_plus_2',
    'exposure_zero',
    'extension',
    'face',
    'fast_forward',
    'fast_rewind',
    'favorite',
    'favorite_border',
    'feedback',
    'file_download',
    'file_upload',
    'filter',
    'filter_1',
    'filter_2',
    'filter_3',
    'filter_4',
    'filter_5',
    'filter_6',
    'filter_7',
    'filter_8',
    'filter_9',
    'filter_9_plus',
    'filter_b_and_w',
    'filter_center_focus',
    'filter_drama',
    'filter_frames',
    'filter_hdr',
    'filter_list',
    'filter_none',
    'filter_tilt_shift',
    'filter_vintage',
    'find_in_page',
    'find_replace',
    'flag',
    'flare',
    'flash_auto',
    'flash_off',
    'flash_on',
    'flight',
    'flight_land',
    'flight_takeoff',
    'flip',
    'flip_to_back',
    'flip_to_front',
    'folder',
    'folder_open',
    'folder_shared',
    'folder_special',
    'font_download',
    'format_align_center',
    'format_align_justify',
    'format_align_left',
    'format_align_right',
    'format_bold',
    'format_clear',
    'format_color_fill',
    'format_color_reset',
    'format_color_text',
    'format_indent_decrease',
    'format_indent_increase',
    'format_italic',
    'format_line_spacing',
    'format_list_bulleted',
    'format_list_numbered',
    'format_paint',
    'format_quote',
    'format_size',
    'format_strikethrough',
    'format_textdirection_l_to_r',
    'format_textdirection_r_to_l',
    'format_underlined',
    'forum',
    'forward',
    'forward_10',
    'forward_30',
    'forward_5',
    'fullscreen',
    'fullscreen_exit',
    'functions',
    'gamepad',
    'games',
    'gesture',
    'get_app',
    'gif',
    'gps_fixed',
    'gps_not_fixed',
    'gps_off',
    'grade',
    'gradient',
    'grain',
    'graphic_eq',
    'grid_off',
    'grid_on',
    'group',
    'group_add',
    'group_work',
    'hd',
    'hdr_off',
    'hdr_on',
    'hdr_strong',
    'hdr_weak',
    'headset',
    'headset_mic',
    'healing',
    'hearing',
    'help',
    'help_outline',
    'high_quality',
    'highlight_off',
    'history',
    'home',
    'hotel',
    'hourglass_empty',
    'hourglass_full',
    'http',
    'https',
    'image',
    'image_aspect_ratio',
    'import_export',
    'inbox',
    'indeterminate_check_box',
    'info',
    'info_outline',
    'input',
    'insert_chart',
    'insert_comment',
    'insert_drive_file',
    'insert_emoticon',
    'insert_invitation',
    'insert_link',
    'insert_photo',
    'invert_colors',
    'invert_colors_off',
    'iso',
    'keyboard',
    'keyboard_arrow_down',
    'keyboard_arrow_left',
    'keyboard_arrow_right',
    'keyboard_arrow_up',
    'keyboard_backspace',
    'keyboard_capslock',
    'keyboard_hide',
    'keyboard_return',
    'keyboard_tab',
    'keyboard_voice',
    'label',
    'label_outline',
    'landscape',
    'language',
    'laptop',
    'laptop_chromebook',
    'laptop_mac',
    'laptop_windows',
    'launch',
    'layers',
    'layers_clear',
    'leak_add',
    'leak_remove',
    'lens',
    'library_add',
    'library_books',
    'library_music',
    'link',
    'list',
    'live_help',
    'live_tv',
    'local_activity',
    'local_airport',
    'local_atm',
    'local_bar',
    'local_cafe',
    'local_car_wash',
    'local_convenience_store',
    'local_dining',
    'local_drink',
    'local_florist',
    'local_gas_station',
    'local_grocery_store',
    'local_hospital',
    'local_hotel',
    'local_laundry_service',
    'local_library',
    'local_mall',
    'local_movies',
    'local_offer',
    'local_parking',
    'local_pharmacy',
    'local_phone',
    'local_pizza',
    'local_play',
    'local_post_office',
    'local_printshop',
    'local_see',
    'local_shipping',
    'local_taxi',
    'location_city',
    'location_disabled',
    'location_off',
    'location_on',
    'location_searching',
    'lock',
    'lock_open',
    'lock_outline',
    'looks',
    'looks_3',
    'looks_4',
    'looks_5',
    'looks_6',
    'looks_one',
    'looks_two',
    'loop',
    'loupe',
    'loyalty',
    'mail',
    'map',
    'markunread',
    'markunread_mailbox',
    'memory',
    'menu',
    'merge_type',
    'message',
    'mic',
    'mic_none',
    'mic_off',
    'mms',
    'mode_comment',
    'mode_edit',
    'money_off',
    'monochrome_photos',
    'mood',
    'mood_bad',
    'more',
    'more_horiz',
    'more_vert',
    'mouse',
    'movie',
    'movie_creation',
    'music_note',
    'my_location',
    'nature',
    'nature_people',
    'navigate_before',
    'navigate_next',
    'navigation',
    'network_cell',
    'network_locked',
    'network_wifi',
    'new_releases',
    'nfc',
    'no_sim',
    'not_interested',
    'note_add',
    'notifications',
    'notifications_active',
    'notifications_none',
    'notifications_off',
    'notifications_paused',
    'offline_pin',
    'ondemand_video',
    'open_in_browser',
    'open_in_new',
    'open_with',
    'pages',
    'pageview',
    'palette',
    'panorama',
    'panorama_fish_eye',
    'panorama_horizontal',
    'panorama_vertical',
    'panorama_wide_angle',
    'party_mode',
    'pause',
    'pause_circle_filled',
    'pause_circle_outline',
    'payment',
    'people',
    'people_outline',
    'perm_camera_mic',
    'perm_contact_calendar',
    'perm_data_setting',
    'perm_device_information',
    'perm_identity',
    'perm_media',
    'perm_phone_msg',
    'perm_scan_wifi',
    'person',
    'person_add',
    'person_outline',
    'person_pin',
    'personal_video',
    'phone',
    'phone_android',
    'phone_bluetooth_speaker',
    'phone_forwarded',
    'phone_in_talk',
    'phone_iphone',
    'phone_locked',
    'phone_missed',
    'phone_paused',
    'phonelink',
    'phonelink_erase',
    'phonelink_lock',
    'phonelink_off',
    'phonelink_ring',
    'phonelink_setup',
    'photo',
    'photo_album',
    'photo_camera',
    'photo_library',
    'photo_size_select_actual',
    'photo_size_select_large',
    'photo_size_select_small',
    'picture_as_pdf',
    'picture_in_picture',
    'pin_drop',
    'place',
    'play_arrow',
    'play_circle_filled',
    'play_circle_outline',
    'play_for_work',
    'playlist_add',
    'plus_one',
    'poll',
    'polymer',
    'portable_wifi_off',
    'portrait',
    'power',
    'power_input',
    'power_settings_new',
    'present_to_all',
    'print',
    'public',
    'publish',
    'query_builder',
    'question_answer',
    'queue',
    'queue_music',
    'radio',
    'radio_button_checked',
    'radio_button_unchecked',
    'rate_review',
    'receipt',
    'recent_actors',
    'redeem',
    'redo',
    'refresh',
    'remove',
    'remove_circle',
    'remove_circle_outline',
    'remove_red_eye',
    'reorder',
    'repeat',
    'repeat_one',
    'replay',
    'replay_10',
    'replay_30',
    'replay_5',
    'reply',
    'reply_all',
    'report',
    'report_problem',
    'restaurant_menu',
    'restore',
    'ring_volume',
    'room',
    'rotate_90_degrees_ccw',
    'rotate_left',
    'rotate_right',
    'router',
    'satellite',
    'save',
    'scanner',
    'schedule',
    'school',
    'screen_lock_landscape',
    'screen_lock_portrait',
    'screen_lock_rotation',
    'screen_rotation',
    'sd_card',
    'sd_storage',
    'search',
    'security',
    'select_all',
    'send',
    'settings',
    'settings_applications',
    'settings_backup_restore',
    'settings_bluetooth',
    'settings_brightness',
    'settings_cell',
    'settings_ethernet',
    'settings_input_antenna',
    'settings_input_component',
    'settings_input_composite',
    'settings_input_hdmi',
    'settings_input_svideo',
    'settings_overscan',
    'settings_phone',
    'settings_power',
    'settings_remote',
    'settings_system_daydream',
    'settings_voice',
    'share',
    'shop',
    'shop_two',
    'shopping_basket',
    'shopping_cart',
    'shuffle',
    'signal_cellular_4_bar',
    'signal_cellular_connected_no_internet_4_bar',
    'signal_cellular_no_sim',
    'signal_cellular_null',
    'signal_cellular_off',
    'signal_wifi_4_bar',
    'signal_wifi_4_bar_lock',
    'signal_wifi_off',
    'sim_card',
    'sim_card_alert',
    'skip_next',
    'skip_previous',
    'slideshow',
    'smartphone',
    'sms',
    'sms_failed',
    'snooze',
    'sort',
    'sort_by_alpha',
    'space_bar',
    'speaker',
    'speaker_group',
    'speaker_notes',
    'speaker_phone',
    'spellcheck',
    'star',
    'star_border',
    'star_half',
    'stars',
    'stay_current_landscape',
    'stay_current_portrait',
    'stay_primary_landscape',
    'stay_primary_portrait',
    'stop',
    'storage',
    'store',
    'store_mall_directory',
    'straighten',
    'strikethrough_s',
    'style',
    'subject',
    'subtitles',
    'supervisor_account',
    'surround_sound',
    'swap_calls',
    'swap_horiz',
    'swap_vert',
    'swap_vertical_circle',
    'switch_camera',
    'switch_video',
    'sync',
    'sync_disabled',
    'sync_problem',
    'system_update',
    'system_update_alt',
    'tab',
    'tab_unselected',
    'tablet',
    'tablet_android',
    'tablet_mac',
    'tag_faces',
    'tap_and_play',
    'terrain',
    'text_format',
    'textsms',
    'texture',
    'theaters',
    'thumb_down',
    'thumb_up',
    'thumbs_up_down',
    'time_to_leave',
    'timelapse',
    'timer',
    'timer_10',
    'timer_3',
    'timer_off',
    'toc',
    'today',
    'toll',
    'tonality',
    'toys',
    'track_changes',
    'traffic',
    'transform',
    'translate',
    'trending_down',
    'trending_flat',
    'trending_up',
    'tune',
    'turned_in',
    'turned_in_not',
    'tv',
    'undo',
    'unfold_less',
    'unfold_more',
    'usb',
    'verified_user',
    'vertical_align_bottom',
    'vertical_align_center',
    'vertical_align_top',
    'vibration',
    'video_library',
    'videocam',
    'videocam_off',
    'view_agenda',
    'view_array',
    'view_carousel',
    'view_column',
    'view_comfy',
    'view_compact',
    'view_day',
    'view_headline',
    'view_list',
    'view_module',
    'view_quilt',
    'view_stream',
    'view_week',
    'vignette',
    'visibility',
    'visibility_off',
    'voice_chat',
    'voicemail',
    'volume_down',
    'volume_mute',
    'volume_off',
    'volume_up',
    'vpn_key',
    'vpn_lock',
    'wallpaper',
    'warning',
    'watch',
    'wb_auto',
    'wb_cloudy',
    'wb_incandescent',
    'wb_iridescent',
    'wb_sunny',
    'wc',
    'web',
    'whatshot',
    'widgets',
    'wifi',
    'wifi_lock',
    'wifi_tethering',
    'work',
    'wrap_text',
    'youtube_searched_for',
    'zoom_in',
    'zoom_out'];

  // Font awesome icons class names
  fontAwesomeIcons = [
    'fa-glass',
    'fa-music',
    'fa-search',
    'fa-envelope-o',
    'fa-heart',
    'fa-star',
    'fa-star-o',
    'fa-user',
    'fa-film',
    'fa-th-large',
    'fa-th',
    'fa-th-list',
    'fa-check',
    'fa-remove',
    'fa-close',
    'fa-times',
    'fa-search-plus',
    'fa-search-minus',
    'fa-power-off',
    'fa-signal',
    'fa-gear',
    'fa-cog',
    'fa-trash-o',
    'fa-home',
    'fa-file-o',
    'fa-clock-o',
    'fa-road',
    'fa-download',
    'fa-arrow-circle-o-down',
    'fa-arrow-circle-o-up',
    'fa-inbox',
    'fa-play-circle-o',
    'fa-rotate-right',
    'fa-repeat',
    'fa-refresh',
    'fa-list-alt',
    'fa-lock',
    'fa-flag',
    'fa-headphones',
    'fa-volume-off',
    'fa-volume-down',
    'fa-volume-up',
    'fa-qrcode',
    'fa-barcode',
    'fa-tag',
    'fa-tags',
    'fa-book',
    'fa-bookmark',
    'fa-print',
    'fa-camera',
    'fa-font',
    'fa-bold',
    'fa-italic',
    'fa-text-height',
    'fa-text-width',
    'fa-align-left',
    'fa-align-center',
    'fa-align-right',
    'fa-align-justify',
    'fa-list',
    'fa-dedent',
    'fa-outdent',
    'fa-indent',
    'fa-video-camera',
    'fa-photo',
    'fa-image',
    'fa-picture-o',
    'fa-pencil',
    'fa-map-marker',
    'fa-adjust',
    'fa-tint',
    'fa-edit',
    'fa-pencil-square-o',
    'fa-share-square-o',
    'fa-check-square-o',
    'fa-arrows',
    'fa-step-backward',
    'fa-fast-backward',
    'fa-backward',
    'fa-play',
    'fa-pause',
    'fa-stop',
    'fa-forward',
    'fa-fast-forward',
    'fa-step-forward',
    'fa-eject',
    'fa-chevron-left',
    'fa-chevron-right',
    'fa-plus-circle',
    'fa-minus-circle',
    'fa-times-circle',
    'fa-check-circle',
    'fa-question-circle',
    'fa-info-circle',
    'fa-crosshairs',
    'fa-times-circle-o',
    'fa-check-circle-o',
    'fa-ban',
    'fa-arrow-left',
    'fa-arrow-right',
    'fa-arrow-up',
    'fa-arrow-down',
    'fa-mail-forward',
    'fa-share',
    'fa-expand',
    'fa-compress',
    'fa-plus',
    'fa-minus',
    'fa-asterisk',
    'fa-exclamation-circle',
    'fa-gift',
    'fa-leaf',
    'fa-fire',
    'fa-eye',
    'fa-eye-slash',
    'fa-warning',
    'fa-exclamation-triangle',
    'fa-plane',
    'fa-calendar',
    'fa-random',
    'fa-comment',
    'fa-magnet',
    'fa-chevron-up',
    'fa-chevron-down',
    'fa-retweet',
    'fa-shopping-cart',
    'fa-folder',
    'fa-folder-open',
    'fa-arrows-v',
    'fa-arrows-h',
    'fa-bar-chart-o',
    'fa-bar-chart',
    'fa-twitter-square',
    'fa-facebook-square',
    'fa-camera-retro',
    'fa-key',
    'fa-gears',
    'fa-cogs',
    'fa-comments',
    'fa-thumbs-o-up',
    'fa-thumbs-o-down',
    'fa-star-half',
    'fa-heart-o',
    'fa-sign-out',
    'fa-linkedin-square',
    'fa-thumb-tack',
    'fa-external-link',
    'fa-sign-in',
    'fa-trophy',
    'fa-github-square',
    'fa-upload',
    'fa-lemon-o',
    'fa-phone',
    'fa-square-o',
    'fa-bookmark-o',
    'fa-phone-square',
    'fa-twitter',
    'fa-facebook-f',
    'fa-facebook',
    'fa-github',
    'fa-unlock',
    'fa-credit-card',
    'fa-feed',
    'fa-rss',
    'fa-hdd-o',
    'fa-bullhorn',
    'fa-bell',
    'fa-certificate',
    'fa-hand-o-right',
    'fa-hand-o-left',
    'fa-hand-o-up',
    'fa-hand-o-down',
    'fa-arrow-circle-left',
    'fa-arrow-circle-right',
    'fa-arrow-circle-up',
    'fa-arrow-circle-down',
    'fa-globe',
    'fa-wrench',
    'fa-tasks',
    'fa-filter',
    'fa-briefcase',
    'fa-arrows-alt',
    'fa-group',
    'fa-users',
    'fa-chain',
    'fa-link',
    'fa-cloud',
    'fa-flask',
    'fa-cut',
    'fa-scissors',
    'fa-copy',
    'fa-files-o',
    'fa-paperclip',
    'fa-save',
    'fa-floppy-o',
    'fa-square',
    'fa-navicon',
    'fa-reorder',
    'fa-bars',
    'fa-list-ul',
    'fa-list-ol',
    'fa-strikethrough',
    'fa-underline',
    'fa-table',
    'fa-magic',
    'fa-truck',
    'fa-pinterest',
    'fa-pinterest-square',
    'fa-google-plus-square',
    'fa-google-plus',
    'fa-money',
    'fa-caret-down',
    'fa-caret-up',
    'fa-caret-left',
    'fa-caret-right',
    'fa-columns',
    'fa-unsorted',
    'fa-sort',
    'fa-sort-down',
    'fa-sort-desc',
    'fa-sort-up',
    'fa-sort-asc',
    'fa-envelope',
    'fa-linkedin',
    'fa-rotate-left',
    'fa-undo',
    'fa-legal',
    'fa-gavel',
    'fa-dashboard',
    'fa-tachometer',
    'fa-comment-o',
    'fa-comments-o',
    'fa-flash',
    'fa-bolt',
    'fa-sitemap',
    'fa-umbrella',
    'fa-paste',
    'fa-clipboard',
    'fa-lightbulb-o',
    'fa-exchange',
    'fa-cloud-download',
    'fa-cloud-upload',
    'fa-user-md',
    'fa-stethoscope',
    'fa-suitcase',
    'fa-bell-o',
    'fa-coffee',
    'fa-cutlery',
    'fa-file-text-o',
    'fa-building-o',
    'fa-hospital-o',
    'fa-ambulance',
    'fa-medkit',
    'fa-fighter-jet',
    'fa-beer',
    'fa-h-square',
    'fa-plus-square',
    'fa-angle-double-left',
    'fa-angle-double-right',
    'fa-angle-double-up',
    'fa-angle-double-down',
    'fa-angle-left',
    'fa-angle-right',
    'fa-angle-up',
    'fa-angle-down',
    'fa-desktop',
    'fa-laptop',
    'fa-tablet',
    'fa-mobile-phone',
    'fa-mobile',
    'fa-circle-o',
    'fa-quote-left',
    'fa-quote-right',
    'fa-spinner',
    'fa-circle',
    'fa-mail-reply',
    'fa-reply',
    'fa-github-alt',
    'fa-folder-o',
    'fa-folder-open-o',
    'fa-smile-o',
    'fa-frown-o',
    'fa-meh-o',
    'fa-gamepad',
    'fa-keyboard-o',
    'fa-flag-o',
    'fa-flag-checkered',
    'fa-terminal',
    'fa-code',
    'fa-mail-reply-all',
    'fa-reply-all',
    'fa-star-half-empty',
    'fa-star-half-full',
    'fa-star-half-o',
    'fa-location-arrow',
    'fa-crop',
    'fa-code-fork',
    'fa-unlink',
    'fa-chain-broken',
    'fa-question',
    'fa-info',
    'fa-exclamation',
    'fa-superscript',
    'fa-subscript',
    'fa-eraser',
    'fa-puzzle-piece',
    'fa-microphone',
    'fa-microphone-slash',
    'fa-shield',
    'fa-calendar-o',
    'fa-fire-extinguisher',
    'fa-rocket',
    'fa-maxcdn',
    'fa-chevron-circle-left',
    'fa-chevron-circle-right',
    'fa-chevron-circle-up',
    'fa-chevron-circle-down',
    'fa-html5',
    'fa-css3',
    'fa-anchor',
    'fa-unlock-alt',
    'fa-bullseye',
    'fa-ellipsis-h',
    'fa-ellipsis-v',
    'fa-rss-square',
    'fa-play-circle',
    'fa-ticket',
    'fa-minus-square',
    'fa-minus-square-o',
    'fa-level-up',
    'fa-level-down',
    'fa-check-square',
    'fa-pencil-square',
    'fa-external-link-square',
    'fa-share-square',
    'fa-compass',
    'fa-toggle-down',
    'fa-caret-square-o-down',
    'fa-toggle-up',
    'fa-caret-square-o-up',
    'fa-toggle-right',
    'fa-caret-square-o-right',
    'fa-euro',
    'fa-eur',
    'fa-gbp',
    'fa-dollar',
    'fa-usd',
    'fa-rupee',
    'fa-inr',
    'fa-cny',
    'fa-rmb',
    'fa-yen',
    'fa-jpy',
    'fa-ruble',
    'fa-rouble',
    'fa-rub',
    'fa-won',
    'fa-krw',
    'fa-bitcoin',
    'fa-btc',
    'fa-file',
    'fa-file-text',
    'fa-sort-alpha-asc',
    'fa-sort-alpha-desc',
    'fa-sort-amount-asc',
    'fa-sort-amount-desc',
    'fa-sort-numeric-asc',
    'fa-sort-numeric-desc',
    'fa-thumbs-up',
    'fa-thumbs-down',
    'fa-youtube-square',
    'fa-youtube',
    'fa-xing',
    'fa-xing-square',
    'fa-youtube-play',
    'fa-dropbox',
    'fa-stack-overflow',
    'fa-instagram',
    'fa-flickr',
    'fa-adn',
    'fa-bitbucket',
    'fa-bitbucket-square',
    'fa-tumblr',
    'fa-tumblr-square',
    'fa-long-arrow-down',
    'fa-long-arrow-up',
    'fa-long-arrow-left',
    'fa-long-arrow-right',
    'fa-apple',
    'fa-windows',
    'fa-android',
    'fa-linux',
    'fa-dribbble',
    'fa-skype',
    'fa-foursquare',
    'fa-trello',
    'fa-female',
    'fa-male',
    'fa-gittip',
    'fa-gratipay',
    'fa-sun-o',
    'fa-moon-o',
    'fa-archive',
    'fa-bug',
    'fa-vk',
    'fa-weibo',
    'fa-renren',
    'fa-pagelines',
    'fa-stack-exchange',
    'fa-arrow-circle-o-right',
    'fa-arrow-circle-o-left',
    'fa-toggle-left',
    'fa-caret-square-o-left',
    'fa-dot-circle-o',
    'fa-wheelchair',
    'fa-vimeo-square',
    'fa-turkish-lira',
    'fa-try',
    'fa-plus-square-o',
    'fa-space-shuttle',
    'fa-slack',
    'fa-envelope-square',
    'fa-wordpress',
    'fa-openid',
    'fa-institution',
    'fa-bank',
    'fa-university',
    'fa-mortar-board',
    'fa-graduation-cap',
    'fa-yahoo',
    'fa-google',
    'fa-reddit',
    'fa-reddit-square',
    'fa-stumbleupon-circle',
    'fa-stumbleupon',
    'fa-delicious',
    'fa-digg',
    'fa-pied-piper-pp',
    'fa-pied-piper-alt',
    'fa-drupal',
    'fa-joomla',
    'fa-language',
    'fa-fax',
    'fa-building',
    'fa-child',
    'fa-paw',
    'fa-spoon',
    'fa-cube',
    'fa-cubes',
    'fa-behance',
    'fa-behance-square',
    'fa-steam',
    'fa-steam-square',
    'fa-recycle',
    'fa-automobile',
    'fa-car',
    'fa-cab',
    'fa-taxi',
    'fa-tree',
    'fa-spotify',
    'fa-deviantart',
    'fa-soundcloud',
    'fa-database',
    'fa-file-pdf-o',
    'fa-file-word-o',
    'fa-file-excel-o',
    'fa-file-powerpoint-o',
    'fa-file-photo-o',
    'fa-file-picture-o',
    'fa-file-image-o',
    'fa-file-zip-o',
    'fa-file-archive-o',
    'fa-file-sound-o',
    'fa-file-audio-o',
    'fa-file-movie-o',
    'fa-file-video-o',
    'fa-file-code-o',
    'fa-vine',
    'fa-codepen',
    'fa-jsfiddle',
    'fa-life-bouy',
    'fa-life-buoy',
    'fa-life-saver',
    'fa-support',
    'fa-life-ring',
    'fa-circle-o-notch',
    'fa-ra',
    'fa-resistance',
    'fa-rebel',
    'fa-ge',
    'fa-empire',
    'fa-git-square',
    'fa-git',
    'fa-y-combinator-square',
    'fa-yc-square',
    'fa-hacker-news',
    'fa-tencent-weibo',
    'fa-qq',
    'fa-wechat',
    'fa-weixin',
    'fa-send',
    'fa-paper-plane',
    'fa-send-o',
    'fa-paper-plane-o',
    'fa-history',
    'fa-circle-thin',
    'fa-header',
    'fa-paragraph',
    'fa-sliders',
    'fa-share-alt',
    'fa-share-alt-square',
    'fa-bomb',
    'fa-soccer-ball-o',
    'fa-futbol-o',
    'fa-tty',
    'fa-binoculars',
    'fa-plug',
    'fa-slideshare',
    'fa-twitch',
    'fa-yelp',
    'fa-newspaper-o',
    'fa-wifi',
    'fa-calculator',
    'fa-paypal',
    'fa-google-wallet',
    'fa-cc-visa',
    'fa-cc-mastercard',
    'fa-cc-discover',
    'fa-cc-amex',
    'fa-cc-paypal',
    'fa-cc-stripe',
    'fa-bell-slash',
    'fa-bell-slash-o',
    'fa-trash',
    'fa-copyright',
    'fa-at',
    'fa-eyedropper',
    'fa-paint-brush',
    'fa-birthday-cake',
    'fa-area-chart',
    'fa-pie-chart',
    'fa-line-chart',
    'fa-lastfm',
    'fa-lastfm-square',
    'fa-toggle-off',
    'fa-toggle-on',
    'fa-bicycle',
    'fa-bus',
    'fa-ioxhost',
    'fa-angellist',
    'fa-cc',
    'fa-shekel',
    'fa-sheqel',
    'fa-ils',
    'fa-meanpath',
    'fa-buysellads',
    'fa-connectdevelop',
    'fa-dashcube',
    'fa-forumbee',
    'fa-leanpub',
    'fa-sellsy',
    'fa-shirtsinbulk',
    'fa-simplybuilt',
    'fa-skyatlas',
    'fa-cart-plus',
    'fa-cart-arrow-down',
    'fa-diamond',
    'fa-ship',
    'fa-user-secret',
    'fa-motorcycle',
    'fa-street-view',
    'fa-heartbeat',
    'fa-venus',
    'fa-mars',
    'fa-mercury',
    'fa-intersex',
    'fa-transgender',
    'fa-transgender-alt',
    'fa-venus-double',
    'fa-mars-double',
    'fa-venus-mars',
    'fa-mars-stroke',
    'fa-mars-stroke-v',
    'fa-mars-stroke-h',
    'fa-neuter',
    'fa-genderless',
    'fa-facebook-official',
    'fa-pinterest-p',
    'fa-whatsapp',
    'fa-server',
    'fa-user-plus',
    'fa-user-times',
    'fa-hotel',
    'fa-bed',
    'fa-viacoin',
    'fa-train',
    'fa-subway',
    'fa-medium',
    'fa-yc',
    'fa-y-combinator',
    'fa-optin-monster',
    'fa-opencart',
    'fa-expeditedssl',
    'fa-battery-4',
    'fa-battery',
    'fa-battery-full',
    'fa-battery-3',
    'fa-battery-three-quarters',
    'fa-battery-2',
    'fa-battery-half',
    'fa-battery-1',
    'fa-battery-quarter',
    'fa-battery-0',
    'fa-battery-empty',
    'fa-mouse-pointer',
    'fa-i-cursor',
    'fa-object-group',
    'fa-object-ungroup',
    'fa-sticky-note',
    'fa-sticky-note-o',
    'fa-cc-jcb',
    'fa-cc-diners-club',
    'fa-clone',
    'fa-balance-scale',
    'fa-hourglass-o',
    'fa-hourglass-1',
    'fa-hourglass-start',
    'fa-hourglass-2',
    'fa-hourglass-half',
    'fa-hourglass-3',
    'fa-hourglass-end',
    'fa-hourglass',
    'fa-hand-grab-o',
    'fa-hand-rock-o',
    'fa-hand-stop-o',
    'fa-hand-paper-o',
    'fa-hand-scissors-o',
    'fa-hand-lizard-o',
    'fa-hand-spock-o',
    'fa-hand-pointer-o',
    'fa-hand-peace-o',
    'fa-trademark',
    'fa-registered',
    'fa-creative-commons',
    'fa-gg',
    'fa-gg-circle',
    'fa-tripadvisor',
    'fa-odnoklassniki',
    'fa-odnoklassniki-square',
    'fa-get-pocket',
    'fa-wikipedia-w',
    'fa-safari',
    'fa-chrome',
    'fa-firefox',
    'fa-opera',
    'fa-internet-explorer',
    'fa-tv',
    'fa-television',
    'fa-contao',
    'fa-500px',
    'fa-amazon',
    'fa-calendar-plus-o',
    'fa-calendar-minus-o',
    'fa-calendar-times-o',
    'fa-calendar-check-o',
    'fa-industry',
    'fa-map-pin',
    'fa-map-signs',
    'fa-map-o',
    'fa-map',
    'fa-commenting',
    'fa-commenting-o',
    'fa-houzz',
    'fa-vimeo',
    'fa-black-tie',
    'fa-fonticons',
    'fa-reddit-alien',
    'fa-edge',
    'fa-credit-card-alt',
    'fa-codiepie',
    'fa-modx',
    'fa-fort-awesome',
    'fa-usb',
    'fa-product-hunt',
    'fa-mixcloud',
    'fa-scribd',
    'fa-pause-circle',
    'fa-pause-circle-o',
    'fa-stop-circle',
    'fa-stop-circle-o',
    'fa-shopping-bag',
    'fa-shopping-basket',
    'fa-hashtag',
    'fa-bluetooth',
    'fa-bluetooth-b',
    'fa-percent',
    'fa-gitlab',
    'fa-wpbeginner',
    'fa-wpforms',
    'fa-envira',
    'fa-universal-access',
    'fa-wheelchair-alt',
    'fa-question-circle-o',
    'fa-blind',
    'fa-audio-description',
    'fa-volume-control-phone',
    'fa-braille',
    'fa-assistive-listening-systems',
    'fa-asl-interpreting',
    'fa-american-sign-language-interpreting',
    'fa-deafness',
    'fa-hard-of-hearing',
    'fa-deaf',
    'fa-glide',
    'fa-glide-g',
    'fa-signing',
    'fa-sign-language',
    'fa-low-vision',
    'fa-viadeo',
    'fa-viadeo-square',
    'fa-snapchat',
    'fa-snapchat-ghost',
    'fa-snapchat-square',
    'fa-pied-piper',
    'fa-first-order',
    'fa-yoast',
    'fa-themeisle',
    'fa-google-plus-circle',
    'fa-google-plus-official',
    'fa-fa',
    'fa-font-awesome',
    'fa-handshake-o',
    'fa-envelope-open',
    'fa-envelope-open-o',
    'fa-linode',
    'fa-address-book',
    'fa-address-book-o',
    'fa-vcard',
    'fa-address-card',
    'fa-vcard-o',
    'fa-address-card-o',
    'fa-user-circle',
    'fa-user-circle-o',
    'fa-user-o',
    'fa-id-badge',
    'fa-drivers-license',
    'fa-id-card',
    'fa-drivers-license-o',
    'fa-id-card-o',
    'fa-quora',
    'fa-free-code-camp',
    'fa-telegram',
    'fa-thermometer-4',
    'fa-thermometer',
    'fa-thermometer-full',
    'fa-thermometer-3',
    'fa-thermometer-three-quarters',
    'fa-thermometer-2',
    'fa-thermometer-half',
    'fa-thermometer-1',
    'fa-thermometer-quarter',
    'fa-thermometer-0',
    'fa-thermometer-empty',
    'fa-shower',
    'fa-bathtub',
    'fa-s15',
    'fa-bath',
    'fa-podcast',
    'fa-window-maximize',
    'fa-window-minimize',
    'fa-window-restore',
    'fa-times-rectangle',
    'fa-window-close',
    'fa-times-rectangle-o',
    'fa-window-close-o',
    'fa-bandcamp',
    'fa-grav',
    'fa-etsy',
    'fa-imdb',
    'fa-ravelry',
    'fa-eercast',
    'fa-microchip',
    'fa-snowflake-o',
    'fa-superpowers',
    'fa-wpexplorer',
    'fa-meetup'];

  // Simple line icons class names
  simpleLineIcons = [
    'icon-user',
    'icon-people',
    'icon-user-female',
    'icon-user-follow',
    'icon-user-following',
    'icon-user-unfollow',
    'icon-login',
    'icon-logout',
    'icon-emotsmile',
    'icon-phone',
    'icon-call-end',
    'icon-call-in',
    'icon-call-out',
    'icon-map',
    'icon-location-pin',
    'icon-direction',
    'icon-directions',
    'icon-compass',
    'icon-layers',
    'icon-menu',
    'icon-list',
    'icon-customActionOptions-vertical',
    'icon-customActionOptions',
    'icon-arrow-down',
    'icon-arrow-left',
    'icon-arrow-right',
    'icon-arrow-up',
    'icon-arrow-up-circle',
    'icon-arrow-left-circle',
    'icon-arrow-right-circle',
    'icon-arrow-down-circle',
    'icon-check',
    'icon-clock',
    'icon-plus',
    'icon-minus',
    'icon-close',
    'icon-event',
    'icon-exclamation',
    'icon-organization',
    'icon-trophy',
    'icon-screen-smartphone',
    'icon-screen-desktop',
    'icon-plane',
    'icon-notebook',
    'icon-mustache',
    'icon-mouse',
    'icon-magnet',
    'icon-energy',
    'icon-disc',
    'icon-cursor',
    'icon-cursor-move',
    'icon-crop',
    'icon-chemistry',
    'icon-speedometer',
    'icon-shield',
    'icon-screen-tablet',
    'icon-magic-wand',
    'icon-hourglass',
    'icon-graduation',
    'icon-ghost',
    'icon-game-controller',
    'icon-fire',
    'icon-eyeglass',
    'icon-envelope-open',
    'icon-envelope-letter',
    'icon-bell',
    'icon-badge',
    'icon-anchor',
    'icon-wallet',
    'icon-vector',
    'icon-speech',
    'icon-puzzle',
    'icon-printer',
    'icon-present',
    'icon-playlist',
    'icon-pin',
    'icon-picture',
    'icon-handbag',
    'icon-globe-alt',
    'icon-globe',
    'icon-folder-alt',
    'icon-folder',
    'icon-film',
    'icon-feed',
    'icon-drop',
    'icon-drawer',
    'icon-docs',
    'icon-doc',
    'icon-diamond',
    'icon-cup',
    'icon-calculator',
    'icon-bubbles',
    'icon-briefcase',
    'icon-book-open',
    'icon-basket-loaded',
    'icon-basket',
    'icon-bag',
    'icon-action-undo',
    'icon-action-redo',
    'icon-wrench',
    'icon-umbrella',
    'icon-trash',
    'icon-tag',
    'icon-support',
    'icon-frame',
    'icon-size-fullscreen',
    'icon-size-actual',
    'icon-shuffle',
    'icon-share-alt',
    'icon-share',
    'icon-rocket',
    'icon-question',
    'icon-pie-chart',
    'icon-pencil',
    'icon-note',
    'icon-loop',
    'icon-home',
    'icon-grid',
    'icon-graph',
    'icon-microphone',
    'icon-music-tone-alt',
    'icon-music-tone',
    'icon-earphones-alt',
    'icon-earphones',
    'icon-equalizer',
    'icon-like',
    'icon-dislike',
    'icon-control-start',
    'icon-control-rewind',
    'icon-control-play',
    'icon-control-pause',
    'icon-control-forward',
    'icon-control-end',
    'icon-volume-1',
    'icon-volume-2',
    'icon-volume-off',
    'icon-calendar',
    'icon-bulb',
    'icon-chart',
    'icon-ban',
    'icon-bubble',
    'icon-camrecorder',
    'icon-camera',
    'icon-cloud-download',
    'icon-cloud-upload',
    'icon-envelope',
    'icon-eye',
    'icon-flag',
    'icon-heart',
    'icon-info',
    'icon-key',
    'icon-link',
    'icon-lock',
    'icon-lock-open',
    'icon-magnifier',
    'icon-magnifier-add',
    'icon-magnifier-remove',
    'icon-paper-clip',
    'icon-paper-plane',
    'icon-power',
    'icon-refresh',
    'icon-reload',
    'icon-settings',
    'icon-star',
    'icon-symbol-female',
    'icon-symbol-male',
    'icon-target',
    'icon-credit-card',
    'icon-paypal',
    'icon-social-tumblr',
    'icon-social-twitter',
    'icon-social-facebook',
    'icon-social-instagram',
    'icon-social-linkedin',
    'icon-social-pinterest',
    'icon-social-github',
    'icon-social-google',
    'icon-social-reddit',
    'icon-social-skype',
    'icon-social-dribbble',
    'icon-social-behance',
    'icon-social-foursqare',
    'icon-social-soundcloud',
    'icon-social-spotify',
    'icon-social-stumbleupon',
    'icon-social-youtube',
    'icon-social-dropbox',
    'icon-social-vkontakte',
    'icon-social-steam'];

  constructor() {
  }

  ngOnInit() {
  }

}
