## Mozilla FireFox 70 Secure Settings
// License CC-BY-NC-SA-4.0: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en_US
## Settings of the "user.js" file will be loaded when you restart your FireFox
// Some settings https://warfx.ru/firefox/config/ have been abolished
// and https://habr.com/post/435876/
// Template for configuring and hardening Firefox privacy, security and anti-fingerprinting
// https://github.com/ghacksuserjs/ghacks-user.js/releases/latest
## Drop this file in a folder XXXXXXXX.default at %APPDATA%\Mozilla\Firefox\Profiles\
## chrome://global/content/config.xhtml

// // // CRITICAL
// Turn on if you use the Internet through a mobile operator
## user_pref("accessibility.blockautorefresh", true);
user_pref("browser.meta_refresh_when_inactive.disabled", true);
// Unset window.navigator.userAgent
// https://gist.github.com/e3a09aa97a827916b0b91b726a8c2c66
user_pref("general.useragent.override", "");
// Disable sending of the health report
// https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
user_pref("datareporting.healthreport.uploadEnabled", false);
// Opt-out of add-on metadata updates
// https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
user_pref("extensions.getAddons.cache.enabled", false);
// https://en.wikipedia.org/wiki/SPDY
user_pref("network.http.spdy.allow-push", false);
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.http2", false);
user_pref("devtools.aboutdebugging.showSystemAddons", true);
user_pref("devtools.onboarding.telemetry.logged", false);
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.cachedClientID", ""); // [Useless.But]
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("security.ssl.errorReporting.enabled", true);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
// Disable Location-Aware Browsing
// conflicts with frame in site api-maps.yandex.ru
// http://www.mozilla.org/en-US/firefox/geolocation/
user_pref("geo.enabled", false); // [Conflicts.Detected]
user_pref("geo.wifi.uri", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.hiddenOneOffs", "Поиск Mail.Ru,OZON.ru,Price.ru");
user_pref("browser.search.widget.inNavBar", true);
user_pref("intl.accept_languages", "en-US, en");
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine
user_pref("browser.search.geoip.url", "");
// http://kb.mozillazine.org/Network.proxy.type
// the default in Firefox for Linux is to use system proxy settings.
// We change it to direct connection
user_pref("network.proxy.type", 0);
// Alternative option
user_pref("network.proxy.http", "proxy.antizapret.prostovpn.org");
user_pref("network.proxy.http_port", 3128);
user_pref("network.proxy.autoconfig_url", "http://antizapret.prostovpn.org/proxy.pac");
// Don't reveal your internal IP
// Check the settings with: http://net.ipcalf.com/
// https://github.com/diafygi/webrtc-ips
// https://wiki.mozilla.org/Media/WebRTC/Privacy
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.identity.timeout", 1);
// Disable notifications
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
// Disable scripts to manipulate browser windows
user_pref("dom.disable_beforeunload", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
// https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("beacon.enabled", false);
// Disable pocket
// https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");
// Show "http(s)://" in the URL bar
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.update1", false);
// Disable new tab tile ads & preload
user_pref("browser.newtab.preload", false);
// https://wiki.mozilla.org/Privacy/Reviews/New_Tab
user_pref("browser.newtabpage.enabled", false);
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
user_pref("browser.aboutHomeSnippets.updateUrl", "");
// Disable link prefetching
// https://wiki.mozilla.org/Privacy/Reviews/Necko
user_pref("network.predictor.enabled", false);
#57 user_pref("network.predictor.enable-hover-on-ssl", false);
// http://kb.mozillazine.org/Network.prefetch-next
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#Is_there_a_preference_to_disable_link_prefetching.3F
user_pref("network.prefetch-next", false);
// http://kb.mozillazine.org/Network.dns.disablePrefetch
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
user_pref("network.dns.disablePrefetch", true);
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_speculative-pre-connections
// https://bugzil.la/814169
user_pref("network.http.speculative-parallel-limit", 0);
// Display an error message indicating the entered information is not a valid
// URL instead of asking from google.
// http://kb.mozillazine.org/Keyword.enabled#Caveats
user_pref("keyword.enabled", false);
// Don't try to guess where i'm trying to go!!! e.g.: "http://foo" -> "http://(prefix)foo(suffix)"
// http://www-archive.mozilla.org/docs/end-user/domain-guessing.html
user_pref("browser.fixup.alternate.enabled", false);
#user_pref("network.automatic-ntlm-auth.trusted-uris", "vks,consultant.ru");
// Disabling plug-in Adobe Primetime Content Decryption Module (DRM), 
// which allows to keep track of your browser
user_pref("browser.eme.ui.enabled", false);
user_pref("media.eme.enabled", false);
// https://gist.github.com/Guest007/e3a09aa97a827916b0b91b726a8c2c66
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
// This setting is triggered after setting up other extensions (detailed by the F12)
// https://support.mozilla.org/en-US/kb/tracking-protection
#63 user_pref("urlclassifier.trackingTable", "test-track-simple,base-track-digest256,content-track-digest256");
// conflicts with site gosuslugi.ru (map & date); need to delete the parameter
user_pref("privacy.trackingprotection.pbmode.enabled", false); // [Conflicts.Detected]
// Perhaps the screenshots will not work if the HTML5 is disabled with on the site and option enabled
// https://www.linux.org.ru/news/mozilla/13978522/
user_pref("privacy.resistFingerprinting", true); // [Conflicts?] Doesn't save a zoom in pages
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", false);
user_pref("privacy.donottrackheader.enabled", true); // [Useless.But]
// conflicts with frame in site apis.google.com
user_pref("privacy.firstparty.isolate", true);
// https://support.mozilla.org/en-US/kb/containers
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);
user_pref("privacy.userContext.ui.enabled", true);
// https://wiki.mozilla.org/Security/Sandbox
# user_pref("security.sandbox.content.level", 6);
// https://en.wikipedia.org/wiki/Content_Security_Policy
// https://github.com/greasemonkey/greasemonkey/issues/2631
user_pref("security.csp.enable", true);
user_pref("security.secure_connection_icon_color_gray", false);
// getUserMedia
// https://wiki.mozilla.org/Media/getUserMedia
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
// Disable getUserMedia screen sharing
// https://mozilla.github.io/webrtc-landing/gum_test.html
user_pref("media.getusermedia.screensharing.enabled", false);
// https://bugzil.la/654550
user_pref("media.video_stats.enabled", false);
#67 user_pref("media.autoplay.default", 1);
user_pref("media.autoplay.enabled", false);

// http://kb.mozillazine.org/Network.proxy.socks_remote_dns
user_pref("network.proxy.socks_remote_dns", true);
// http://kb.mozillazine.org/Browser.backspace_action
user_pref("browser.backspace_action", 2);
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_auto-update-checking
user_pref("browser.search.update", false);
// Disables the list of recommended topics in the Customize -> Themes
user_pref("lightweightThemes.recommendedThemes", "");
// https://hg.mozilla.org/releases/mozilla-esr38/file/dd257f17530c/uriloader/prefetch/nsOfflineCacheUpdateService.cpp#l649
// https://hg.mozilla.org/releases/mozilla-esr38/file/dd257f17530c/dom/base/nsContentSink.cpp#l1056
// https://hg.mozilla.org/releases/mozilla-esr38/file/5be76431120a/dom/base/nsContentUtils.cpp#l1709
// https://hg.mozilla.org/releases/mozilla-esr38/file/dd257f17530c/uriloader/prefetch/nsOfflineCacheUpdateService.cpp#l744
user_pref("offline-apps.allow_by_default", false);
// https://wiki.mozilla.org/DevTools/WiFi_Debugging
user_pref("devtools.remote.wifi.scan", false);
user_pref("network.notify.changed", false);
// http://kb.mozillazine.org/Network.cookie.thirdparty.sessionOnly
user_pref("network.cookie.thirdparty.sessionOnly", true);
// http://kb.mozillazine.org/Network.cookie.cookieBehavior
// conflicts with frame in sites discordapp.com, plus.google.com, api.vk.com and other
user_pref("network.cookie.cookieBehavior", 1); // [Conflicts.Detected]
// http://kb.mozillazine.org/Network.cookie.lifetimePolicy
# user_pref("network.cookie.lifetimePolicy", 2); // Delete cookies when the browser closes
// http://kb.mozillazine.org/Signon.autofillForms
user_pref("signon.autofillForms", false);
// https://support.mozilla.org/en-US/questions/889884
user_pref("signon.rememberSignons", false);
user_pref("signon.storeWhenAutocompleteOff", false);
// https://habr.com/company/eset/blog/264619/
// https://blog.mozilla.org/security/2015/08/06/firefox-exploit-found-in-the-wild/
// https://news.ycombinator.com/item?id=10021376
user_pref("pdfjs.disabled", true);
// https://developer.mozilla.org/en-US/docs/Web/API/CSSFontLoading_API
// https://drafts.csswg.org/css-font-loading/
user_pref("layout.css.font-loading-api.enabled", false);
// Adjusting the initial scale of the page
#user_pref("layout.css.devPixelsPerPx", "1.25");
user_pref("layout.css.osx-font-smoothing.enabled", false);

// // // DESIRABLE
user_pref("browser.startup.homepage", "//clck.ru/0f");
user_pref("browser.tabs.insertRelatedAfterCurrent", false);
// Stop GIF animation
# user_pref("image.animation_mode", "once");
// https://wiki.mozilla.org/Security:Renegotiation#security.ssl.treat_unsafe_negotiation_as_broken
// see also CVE-2009-3555
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.sessionstore.interval", 90000);
// The number stored in the memory of page to go back (reduce memory consumption)
user_pref("browser.sessionhistory.max_entries", 12);
// conflicts with sites github.com, gist.github.com, code.sololearn.com
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/dom.event.clipboardevents.enabled
#user_pref("dom.event.clipboardevents.enabled", false); // [Conflicts.Detected]
// Webpages will not be able to affect the right-click menu (Shift+RBM)
# user_pref("dom.event.contextmenu.enabled", false);
// http://kb.mozillazine.org/Dom.storage.enabled
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-localstorage
// conflicts with sites -market.yandex.ru, online.sberbank.ru, pgu.mos.ru, jsfiddle.net and other
// you can also see this with Panopticlick's "DOM localStorage"
# user_pref("dom.storage.enabled", false); // [Conflicts.Detected]
// http://kb.mozillazine.org/Network.http.sendRefererHeader
# user_pref("network.http.sendRefererHeader", 0);
// Disable webGL
// http://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
user_pref("webgl.disable-extensions", true);
// Test https://get.webgl.org/
## user_pref("webgl.disabled", true);
## user_pref("webgl.min_capability_mode", true);
// https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
# user_pref("dom.enable_performance", false);
user_pref("dom.enable_resource_timing", false);
# user_pref("javascript.enabled", false); // [JavaScript.Off]
// http://asmjs.org/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
// https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712
user_pref("javascript.options.asmjs", false);
// https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
user_pref("dom.battery.enabled", false);
// Disallows double tap to zoom (if no touch screen) https://habr.com/ru/post/459880/
user_pref("apz.allow_double_tap_zooming", false);
user_pref("apz.drag.touch.enabled", false);
user_pref("apz.one_touch_pinch.enabled", false);
// Disable the function for Android, does not work in Windows
user_pref("dom.keyboardevent.dispatch_during_composition", false);
// Disable gamepad input
// http://www.w3.org/TR/gamepad/
user_pref("dom.gamepad.enabled", false);
// Disable virtual reality devices
// https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
user_pref("dom.vibrator.enabled", false);
// Disable sensor API
// https://wiki.mozilla.org/Sensor_API
user_pref("device.sensors.enabled", false);
user_pref("devtools.webide.enabled", false);
// JSON Validator https://jsonlint.com/ (just paste link)
# user_pref("devtools.jsonview.enabled", false); // [JSONView.Off]
// Do not add downloaded files to the list of "Recent Documents" (Windows)
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.hide_plugins_without_extensions", false);
// Open results in a new tab, rather than the current
user_pref("browser.search.openintab", true);
user_pref("browser.search.widget.inNavBar", true);
// Remove the line "search" in the drop-down menu when typing in the URL bar
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.decodeURLsOnCopy", true);
user_pref("browser.urlbar.placeholderName.private", "Google");
// Check the spelling in all text fields (and not only in the Textarea)
user_pref("layout.spellcheckDefault", 2);
// Text-to-Speech
# user_pref("media.webspeech.recognition.enable", false);
// Asynchronous Speech Recognition
# user_pref("media.webspeech.synth.enabled", false);

// // // Print View & Reader settings (F9)
user_pref("narrate.enabled", true);
user_pref("reader.content_width", 5);
user_pref("reader.font_size", 2);
user_pref("reader.line_height", 3);
