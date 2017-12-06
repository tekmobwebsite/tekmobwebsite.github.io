$(document).ready(function() {
	var data_1 = '<div class=\"r-s-wrapper\">\t\t\t\t\r\n\t<div id=\"r-1-wrapper\" class=\"r-1-wrapper\">\r\n\t\t<div class=\"row\">\t\t\t\r\n\t\t\t<div class=\"r-s-item\">\r\n\t\t\t\t<div id=\"r-s-img-wrapper\" class=\"r-s-img-wrapper\">\r\n\t\t\t\t\t<div class=\"r-s-img-inner-wrapper\">\r\n\t\t\t\t\t\t<img id=\"r-s-img-1\" class=\"img-responsive r-s-img\" src=\"img\/c-1.png\" alt=\"Tekken Mobile Gems Icon\"\/>\t\r\n\t\t\t\t\t\t<img id=\"r-s-img-2\" class=\"img-responsive r-s-img\" src=\"img\/c-2.png\" alt=\"Tekken Mobile Gems Icon\"\/>\t\r\n\t\t\t\t\t\t<img id=\"r-s-img-3\" class=\"img-responsive r-s-img\" src=\"img\/c-3.png\" alt=\"Tekken Mobile Gems Icon\"\/>\t\r\n\t\t\t\t\t\t<img id=\"r-s-img-4\" class=\"img-responsive r-s-img\" src=\"img\/c-4.png\" alt=\"Tekken Mobile Gems Icon\"\/>\t\r\n\t\t\t\t\t<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div id=\"r-s-value-wrapper\" class=\"r-s-value-wrapper\">\r\n\t\t\t\t\t<span class=\"input-label r-input-label\">Amount of Gems<\/span>\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\r\n\t\t\t\t\t\t\t<div class=\"r-v-button-wrapper\">\t\r\n\t\t\t\t\t\t\t\t<div id=\"decrease-resource-1\" class=\"decrease-button r-v-button r-v-button noselect\">-<\/div>\r\n\t\t\t\t\t\t\t<\/div>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t\t<div class=\"col-xs-6 col-sm-8 n-p-r n-p-l\">\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div id=\"resource-item-1-amount-wrapper\" class=\"current-r-amount noselect\">\r\n\t\t\t\t\t\t\t\t<img class=\"resource-img\" src=\"img\/r-1.png\" alt=\"Tekken Mobile Gems Icon\" \/>\r\n\t\t\t\t\t\t\t\t<div id=\"resource-1-amount\"><\/div>\r\n\t\t\t\t\t\t\t<\/div>\t\r\n\t\t\t\t\t\t\t<div id=\"progressBar\" class=\"resource-1-loadbar\"><div><\/div><\/div>\r\n\t\t\t\t\t\t<\/div>\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\r\n\t\t\t\t\t\t\t<div class=\"r-v-button-wrapper\">\t\r\n\t\t\t\t\t\t\t\t<div id=\"increase-resource-1\" class=\"increase-button r-v-button noselect\">+<\/div>\r\n\t\t\t\t\t\t\t<\/div>\t\r\n\t\t\t\t\t\t<\/div>\t\r\n\t\t\t\t\t<\/div>\t\r\n\t\t\t\t<\/div>\t\r\n\t\t\t<\/div>\r\n\t\t\t<div id=\"r-s-panel-button-wrapper\" class=\"panel-button-wrapper\">\r\n\t\t\t\t<a id=\"coins-select-button\" class=\"button\">Next<\/a>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t<\/div>\r\n\t<div id=\"r-2-wrapper\" class=\"r-2-wrapper\">\r\n\t\t<div class=\"row\">\t\t\t\r\n\t\t\t<div class=\"r-s-item\">\r\n\t\t\t\t<div id=\"r-s-img-wrapper-2\" class=\"r-s-img-wrapper\">\r\n\t\t\t\t\t<div class=\"r-s-img-inner-wrapper\">\r\n\t\t\t\t\t\t<img id=\"r-s-img-1-c\" class=\"img-responsive r-s-img\" src=\"img\/p-1.png\" alt=\"Tekken Mobile Coins Icon\"\/>\t\r\n\t\t\t\t\t\t<img id=\"r-s-img-2-c\" class=\"img-responsive r-s-img\" src=\"img\/p-2.png\" alt=\"Tekken Mobile Coins Icon\"\/>\t\r\n\t\t\t\t\t\t<img id=\"r-s-img-3-c\" class=\"img-responsive r-s-img\" src=\"img\/p-3.png\" alt=\"Tekken Mobile Coins Icon\"\/>\t\r\n\t\t\t\t\t\t<img id=\"r-s-img-4-c\" class=\"img-responsive r-s-img\" src=\"img\/p-4.png\" alt=\"Tekken Mobile Coins Icon\"\/>\t\r\n\t\t\t\t\t<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div id=\"r-s-value-wrapper-2\" class=\"r-s-value-wrapper\">\r\n\t\t\t\t\t<span class=\"input-label r-input-label\">Amount of Coins<\/span>\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\r\n\t\t\t\t\t\t\t<div class=\"r-v-button-wrapper\">\t\r\n\t\t\t\t\t\t\t\t<div id=\"decrease-resource-2\" class=\"decrease-button r-v-button r-v-button noselect\">-<\/div>\r\n\t\t\t\t\t\t\t<\/div>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t\t<div class=\"col-xs-6 col-sm-8 n-p-r n-p-l\">\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div id=\"resource-item-2-amount-wrapper\" class=\"current-r-amount noselect\">\r\n\t\t\t\t\t\t\t\t<img class=\"resource-img\" src=\"img\/r-2.png\" alt=\"Tekken Mobile Coins Icon\" \/>\r\n\t\t\t\t\t\t\t\t<div id=\"resource-2-amount\"><\/div>\r\n\t\t\t\t\t\t\t<\/div>\t\r\n\t\t\t\t\t\t\t<div id=\"progressBarCoins\" class=\"resource-2-loadbar\"><div><\/div><\/div>\r\n\t\t\t\t\t\t<\/div>\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\r\n\t\t\t\t\t\t\t<div class=\"r-v-button-wrapper\">\t\r\n\t\t\t\t\t\t\t\t<div id=\"increase-resource-2\" class=\"increase-button r-v-button noselect\">+<\/div>\r\n\t\t\t\t\t\t\t<\/div>\t\r\n\t\t\t\t\t\t<\/div>\t\r\n\t\t\t\t\t<\/div>\t\r\n\t\t\t\t<\/div>\t\r\n\t\t\t<\/div>\r\n\t\t\t<div id=\"r-s-panel-button-wrapper-2\" class=\"panel-button-wrapper\">\r\n\t\t\t\t<a id=\"second-step-button\" class=\"button\">Generate<\/a>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t<\/div>\r\n<\/div>';
	var data_2 = '<div id=\"c-p-popup-inner-wrapper-2\" class=\"c-p-popup-inner-wrapper\">\r\n\t<div class=\"c-p-popup-header-wrapper\">\t\t\r\n\t\t<h4>Settings<\/h4>\r\n\t\t<a id=\"icon-nav-button-2-close\" class=\"icon-nav-button button-r noselect icon-nav-button-close\">X<\/a>\r\n\t<\/div>\t\r\n\t<div class=\"c-p-popup-content-wrapper\">\t\t\r\n\t\t<div class=\"popup-settings-item-wrapper\">\r\n\t\t\t<div class=\"popup-settings-item-inner-wrapper\">\t\t\r\n\t\t\t\t<h5>Generator Sound<\/h5>\r\n\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t  <input id=\"sound-switch-checkbox\" type=\"checkbox\">\r\n\t\t\t\t  <span class=\"slider\"><\/span>\r\n\t\t\t\t<\/label>\r\n\t\t\t<\/div>\t\r\n\t\t<\/div>\r\n\t\t<div class=\"popup-settings-item-wrapper\">\r\n\t\t\t<div class=\"popup-settings-item-inner-wrapper\">\t\t\r\n\t\t\t\t<h5>Use Proxy<\/h5>\r\n\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t  <input id=\"proxy-switch-checkbox\" type=\"checkbox\">\r\n\t\t\t\t  <span class=\"slider\"><\/span>\r\n\t\t\t\t<\/label>\r\n\t\t\t<\/div>\t\r\n\t\t<\/div>\r\n\t<\/div>\t\r\n<\/div>\t';
	var data_3 = '<div id=\"c-p-popup-inner-wrapper-1\" class=\"c-p-popup-inner-wrapper\">\r\n\t<div class=\"c-p-popup-header-wrapper\">\t\t\r\n\t\t<h4>Instructions<\/h4>\r\n\t\t<a id=\"icon-nav-button-1-close\" class=\"icon-nav-button button-r noselect icon-nav-button-close\">X<\/a>\r\n\t<\/div>\t\r\n\t<div class=\"c-p-popup-content-wrapper\">\t\t\r\n\t\t<div class=\"popup-instructions-item-wrapper\">\r\n\t\t\t<div class=\"popup-instructions-item-inner-wrapper\">\t\t\r\n\t\t\t\t<h5><span>1.<\/span> Enter your Tekken Mobile Nickname<\/h5>\r\n\t\t\t\t<p>Enter your Tekken Mobile Nickname affiliated with your Tekken Mobile Game Client and select the platform where you play, then click on the <strong>Proceed<\/strong> button. Make sure to enter your <strong>correct nickname<\/strong> or the Gems and Coins will not be added to your account.<\/p>\r\n\t\t\t<\/div>\t\r\n\t\t<\/div>\r\n\t\t<div class=\"popup-instructions-item-wrapper\">\r\n\t\t\t<div class=\"popup-instructions-item-inner-wrapper\">\t\t\r\n\t\t\t\t<h5><span>2.<\/span> Select the amount of resources<\/h5>\r\n\t\t\t\t<p>Continue by selecting the amount of Gems that you wish to add to your Tekken Mobile account. After selecting the amount of Gems, you can progress to selecting the amount of Coins. <\/p>\r\n\t\t\t<\/div>\t\r\n\t\t<\/div>\r\n\t\t<div class=\"popup-instructions-item-wrapper\">\r\n\t\t\t<div class=\"popup-instructions-item-inner-wrapper\">\t\t\r\n\t\t\t\t<h5><span>3.<\/span> Wait for generation to complete<\/h5>\r\n\t\t\t\t<p>By clicking on the <strong>Generate<\/strong> button, our online generator will begin injecting the selected amount of Gems and Coins to your submitted Tekken Mobile account associated with the Nickname which your provided the sytem with.<\/p>\r\n\t\t\t<\/div>\t\r\n\t\t<\/div>\r\n\t\t<div class=\"popup-instructions-item-wrapper\">\r\n\t\t\t<div class=\"popup-instructions-item-inner-wrapper\">\t\t\r\n\t\t\t\t<h5><span>4.<\/span> Complete the Verification<\/h5>\r\n\t\t\t\t<p>In order to avoid automated bot entries, you will have to complete a Human Verification test by clicking on the Verify Now button and downloading one mobile application showed on the list. Your generated Gems and Coins will be added immediately after succesfull human verification.<\/p>\r\n\t\t\t<\/div>\t\r\n\t\t<\/div>\r\n\t<\/div>\t\r\n<\/div>\t';
	var data_4 = '<div class=\"c-p-wrapper\">\t\t\t\t\r\n\t<div id=\"c-p-inner-wrapper\" class=\"c-p-inner-wrapper\">\r\n\t\t<div id=\"c-p-loader-b\" class=\"c-p-loader-b\">\t\t\t\r\n\t\t\t<div class=\"loader-loading\"><i><\/i><i><\/i><\/div>\r\n\t\t<\/div>\r\n\t\t<div id=\"c-p-content-wrapper\" class=\"c-p-content-wrapper\">\t\r\n\t\t\t<div id=\"c-p-loader-s\" class=\"c-p-loader-s\">\t\t\t\r\n\t\t\t\t<div class=\"loader-loading\"><i id=\"l-l-1\"><\/i><i id=\"l-l-2\"><\/i><\/div>\t\t\t\t\r\n\t\t\t<\/div>\t\r\n\t\t\t<div id=\"c-p-r-username-wrapper\" class=\"c-p-r-username-wrapper c-p-r-item-wrapper\">\r\n\t\t\t\t<div id=\"c-p-r-username-inner-wrapper\" class=\"c-p-r-item-inner-wrapper c-p-r-r-2-inner-wrapper\">\t\t\t\t\t\r\n\t\t\t\t\t<span id=\"c-p-r-username-value\" class=\"c-p-r-item-value c-p-r-username-value\"><i class=\"icon-refresh fa-spin\"><\/i><\/span>\r\n\t\t\t\t\t<span id=\"c-p-r-platform-value\" class=\"c-p-r-item-value c-p-r-platform-value\"><i class=\"icon-refresh fa-spin\"><\/i><\/span>\r\n\t\t\t\t\t<img id=\"console-resource-img-username\" class=\"console-resource-img img-responsive bounceInfinity\" src=\"img\/username-search.png\" alt=\"Username Search Icon\"\/>\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div id=\"c-p-r-r-1-wrapper\" class=\"c-p-r-r-1-wrapper c-p-r-item-wrapper\">\r\n\t\t\t\t<div id=\"c-p-r-r-1-gems-inner-wrapper\" class=\"c-p-r-item-inner-wrapper c-p-r-r-1-gems-inner-wrapper\">\t\t\t\t\t\r\n\t\t\t\t\t<span class=\"c-p-r-item-label c-p-r-gems-label\">Gems:<\/span>\r\n\t\t\t\t\t<span id=\"c-p-r-r-1-value\" class=\"c-p-r-item-value c-p-r-r-1-value\">0<\/span>\r\n\t\t\t\t\t<img id=\"console-resource-img-r-1\" class=\"console-resource-img img-responsive\" src=\"img\/r-1.png\" alt=\"Tekken Mobile Gems Icon Big\"\/>\r\n\t\t\t\t\t<div id=\"c-p-r-r-1-loadbar\" class=\"c-p-r-loadbar c-p-r-r-1-loadbar\">\t\t\t\r\n\t\t\t\t\t\t<div id=\"progressBarConsoleR1\" class=\"console-loadbar-resource\"><div><\/div><\/div>\r\n\t\t\t\t\t<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div id=\"c-p-r-r-2-wrapper\" class=\"c-p-r-r-2-wrapper c-p-r-item-wrapper\">\r\n\t\t\t\t<div id=\"c-p-r-r-2-inner-wrapper\" class=\"c-p-r-item-inner-wrapper c-p-r-r-2-inner-wrapper\">\t\t\t\t\t\r\n\t\t\t\t\t<span class=\"c-p-r-item-label c-p-r-r-2-label\">Coins:<\/span>\r\n\t\t\t\t\t<span id=\"c-p-r-r-2-value\" class=\"c-p-r-item-value c-p-r-r-2-value\">0<\/span>\r\n\t\t\t\t\t<img id=\"console-resource-img-r-2\" class=\"console-resource-img img-responsive\" src=\"img\/r-2.png\" alt=\"Tekken Mobile Gems Icon Big\"\/>\r\n\t\t\t\t\t<div id=\"c-p-r-r-2-loadbar\" class=\"c-p-r-loadbar c-p-r-r-2-loadbar\">\t\t\t\r\n\t\t\t\t\t\t<div id=\"progressBarConsoleR2\" class=\"console-loadbar-resource\"><div><\/div><\/div>\r\n\t\t\t\t\t<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"c-p-message\">\t\t\t\r\n\t\t\t\t<span id=\"c-message\" class=\"c-message\"><\/span>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\t\t\r\n\t\t<div id=\"c-p-loadbar\" class=\"c-p-loadbar\">\t\t\t\r\n\t\t\t<div id=\"progressBarConsole\" class=\"console-loadbar\"><div><\/div><\/div>\r\n\t\t<\/div>\r\n\t<\/div>\r\n<\/div>\r\n<div id=\"c-p-human-verification-wrapper\" class=\"c-p-human-verification-wrapper\">\t\r\n\t<div id=\"c-p-human-verification-inner-wrapper\" class=\"c-p-human-verification-inner-wrapper\">\t\r\n\t\t<h3>Human Verification<\/h3>\r\n\t\t<p>Congrats, your are almost done generating free Gems and Coins for your account. Click on the Verify Now button below to complete human verification.<\/p>\r\n\t\t<div class=\"h-v-generated-resources-info\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t<div class=\"h-v-c-p-r-item-inner-wrapper h-v-c-p-r-r-1-gems-inner-wrapper\">\t\t\t\t\t\r\n\t\t\t\t\t\t<span class=\"h-v-c-p-r-item-label h-v-c-p-r-gems-label\">Gems:<\/span>\r\n\t\t\t\t\t\t<span id=\"h-v-c-p-r-r-1-value\" class=\"h-v-c-p-r-item-value h-v-c-p-r-r-1-value\">0<\/span>\r\n\t\t\t\t\t\t<img class=\"h-v-resource-img img-responsive\" src=\"img\/r-1.png\" alt=\"Tekken Mobile Gems Icon Big\"\/>\r\n\t\t\t\t\t\t<div class=\"h-v-c-p-r-loadbar h-v-c-p-r-r-1-loadbar\">\t\t\t\r\n\t\t\t\t\t\t\t<div id=\"h-v-progressBarConsoleR1\" class=\"h-v-loadbar-resource\"><div><\/div><\/div>\r\n\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t<\/div>\r\n\t\t\t\t<\/div>\t\r\n\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t<div class=\"h-v-c-p-r-item-inner-wrapper h-v-c-p-r-r-2-inner-wrapper\">\t\t\t\t\t\r\n\t\t\t\t\t\t<span class=\"h-v-c-p-r-item-label h-v-c-p-r-r-2-label\">Coins:<\/span>\r\n\t\t\t\t\t\t<span id=\"h-v-c-p-r-r-2-value\" class=\"h-v-c-p-r-item-value h-v-c-p-r-r-2-value\">0<\/span>\r\n\t\t\t\t\t\t<img class=\"h-v-resource-img img-responsive\" src=\"img\/r-2.png\" alt=\"Tekken Mobile Gems Icon Big\"\/>\r\n\t\t\t\t\t\t<div class=\"h-v-c-p-r-loadbar h-v-c-p-r-r-2-loadbar\">\t\t\t\r\n\t\t\t\t\t\t\t<div id=\"h-v-progressBarConsoleR2\" class=\"h-v-loadbar-resource\"><div><\/div><\/div>\r\n\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t<\/div>\r\n\t\t\t\t<\/div>\t\t\t\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t\t<div id=\"h-v-time-left-wrapper\" class=\"h-v-time-left-wrapper\">\r\n\t\t\t<span style="color: black;">Time Left:<\/span>\r\n\t\t\t<span id=\"human_verification_timer_time\"><\/span>\r\n\t\t<\/div>\r\n\t\t<div id=\"r-s-panel-button-wrapper-2\" class=\"panel-button-wrapper\">\r\n\t\t\t<a id=\"human-verification-button\" class=\"button\" onclick=\"call_locker()\">Verify Now<\/a>\r\n\t\t\t\t\t<\/div>\r\n\t<\/div>\r\n<\/div>';
	// Domain Subfolder Name
	var $subfolder_name = '';

	// Human Verification Timer
	var $human_verification_timer_value = '180'; //Countdown remaing time in seconds

	// Panel Titles
	var $panel_title_generator = 'Tekken Mobile Generator';
	var $panel_title_activity = 'Recent Activity';
	var $panel_title_chat = 'Live Chat';

	// Console Messages
	var $console_message_gems = 'Gems';
	var $console_message_coins = 'Coins';
	var $console_message_1 = 'Loading generator files...';
	var $console_message_2 = 'Extracting generator files...';
	var $console_message_3 = 'Connecting to proxy server...';
	var $console_message_4 = 'Establishing connection with game database...';
	var $console_message_5 = 'Searching for Tekken Mobile Nickname';
	var $console_message_6 = 'Succesfully connected to Tekken Mobile';
	var $console_message_7 = 'Preparing to generate Tekken Mobile Gems and Coins';
	var $console_message_8 = 'Generating';
	var $console_message_9 = 'Succesfully generated';
	var $console_message_10 = 'Cleaning up injection traces';
	var $console_message_11 = 'Performing automatic human verification';
	var $console_message_12 = 'Automatic human verification failed';
	var $console_message_13 = 'Manual verification required';

	// Resource 1 Values
	var resource_1_value_min = 12000;
	var resource_1_value_max = 100000;
	var $resource_1_value_1 = '12000';
	var $resource_1_value_2 = '25000';
	var $resource_1_value_3 = '50000';
	var $resource_1_value_4 = '100000';

	// Resource 2 Values
	var resource_2_value_min = 250000;
	var resource_2_value_max = 1000000;
	var $resource_2_value_1 = '250000';
	var $resource_2_value_2 = '500000';
	var $resource_2_value_3 = '750000';
	var $resource_2_value_4 = '1000000';

	ion.sound({
    sounds: [
        {
            name: "swash",
            path: "audio/",
            volume: 0.1
        },
		{
            name: "success",
            path: "audio/",
            volume: 0.1
        }
    ],
    path: "sounds/",
    preload: true,
    multiplay: true
	});
	var $sound_setting = '1';
	$("#panel-nav-item-activity").click(function () {
		$(".panel-nav-item-active").animate({"left":"0"}, "fast");
		$(".panel-nav-item-active").removeClass('panel-nav-item-border-left');
		$('#panel-nav-item-activity').addClass('panel-nav-item-a');
		$('#panel-nav-item-generator').removeClass('panel-nav-item-a');
		$('#panel-nav-item-chat').removeClass('panel-nav-item-a');
		$('#generator-panel-content-dyna-1').css('visibility','hidden');
		$('#generator-panel-content-dyna-3').css('visibility','hidden');
		$('#generator-panel-content-dyna-2').css('visibility','visible');
		$('#generator-panel-content-dyna-2').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('bounceIn');
		});
		$("#icon-nav-img-activity").attr("src","img/nav-activity-icon-b.png");
		$("#icon-nav-img-chat").attr("src","img/nav-chat-icon.png");
		$('.generator-panel-header h3').text($panel_title_activity);
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
	});
	$("#panel-nav-item-generator").click(function () {
		$(".panel-nav-item-active").animate({"left":"33.333%"}, "fast");
		$(".panel-nav-item-active").addClass('panel-nav-item-border-right');
		$('#panel-nav-item-activity').removeClass('panel-nav-item-a');
		$('#panel-nav-item-generator').addClass('panel-nav-item-a');
		$('#panel-nav-item-chat').removeClass('panel-nav-item-a');
		$('#generator-panel-content-dyna-2').css('visibility','hidden');
		$('#generator-panel-content-dyna-3').css('visibility','hidden');
		$('#generator-panel-content-dyna-1').css('visibility','visible');
		$('#generator-panel-content-dyna-1').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('bounceIn');
		});
		$("#icon-nav-img-activity").attr("src","img/nav-activity-icon.png");
		$("#icon-nav-img-chat").attr("src","img/nav-chat-icon.png");
		$('.generator-panel-header h3').text($panel_title_generator);
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
	});
	$("#panel-nav-item-chat").click(function () {
		$('#panel-nav-item-activity').removeClass('panel-nav-item-a');
		$('#panel-nav-item-generator').removeClass('panel-nav-item-a');
		$('#panel-nav-item-chat').addClass('panel-nav-item-a');
		$(".panel-nav-item-active").removeClass('panel-nav-item-border-right');
		$(".panel-nav-item-active").animate({"left":"66.67%"}, "fast");
		$('#generator-panel-content-dyna-1').css('visibility','hidden');
		$('#generator-panel-content-dyna-2').css('visibility','hidden');
		$('#generator-panel-content-dyna-3').css('visibility','visible');
		$('#generator-panel-content-dyna-3').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('bounceIn');
		});
		$("#icon-nav-img-activity").attr("src","img/nav-activity-icon.png");
		$("#icon-nav-img-chat").attr("src","img/nav-chat-icon-b.png");
		$('.generator-panel-header h3').text($panel_title_chat);
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
	});

	$("#icon-nav-button-1").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
			$.magnificPopup.open({
				items: {
					src: '#c-p-popup-wrapper-1',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				removalDelay: 300,
				callbacks: {
					open: function() {
						$('#c-p-popup-wrapper-1').html(data_3);
						$('#c-p-popup-inner-wrapper-1').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('bounceIn');
						});
						$("#icon-nav-button-1-close").click(function() {
							if ($sound_setting == 1) {
								ion.sound.play("swash");
							}
							$.magnificPopup.close();
						});
					},
					beforeClose: function() {
						this.content.addClass('animated fadeOutDown');
					},
					close: function() {
						this.content.removeClass('animated fadeOutDown');
						$('#c-p-popup-inner-wrapper-1').remove();
					}
				}
			});

	});

	$("#icon-nav-button-2").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
			$.magnificPopup.open({
				items: {
					src: '#c-p-popup-wrapper-2',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				removalDelay: 300,
				callbacks: {
					open: function() {
						$('#c-p-popup-wrapper-2').html(data_2);
						if ($sound_setting == 1) {
							$('#sound-switch-checkbox').prop('checked', true);
						}
						$('#c-p-popup-inner-wrapper-2').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('bounceIn');
						});
						$("#icon-nav-button-2-close").click(function() {
							if ($sound_setting == 1) {
								ion.sound.play("swash");
							}
							$.magnificPopup.close();
						});
						$("#sound-switch-checkbox").change(function() {
							if(this.checked) {
								$sound_setting = '1';
								$('#sound-icon').addClass('fa-volume-up sound-icon-on');
								$('#sound-icon').removeClass('fa-volume-off sound-icon-off');
							}
							else {
								$sound_setting = '0';
								$('#sound-icon').removeClass('fa-volume-up sound-icon-on');
								$('#sound-icon').addClass('fa-volume-off sound-icon-off');
							}
						});
					},
					beforeClose: function() {
						this.content.addClass('animated fadeOutDown');
					},
					close: function() {
						this.content.removeClass('animated fadeOutDown');
						$('#c-p-popup-inner-wrapper-2').remove();
					}
				}
			});

	});

	var $selected_platform = '';
	function fixplatformBox($platform_parent_class) {
        resetplatformBoxes();
        if ($platform_parent_class.hasClass('platform-select-item-1')) {
            $selected_platform = 'iOS';
        }
        if ($platform_parent_class.hasClass('platform-select-item-2')) {
            $selected_platform = 'Playstation';
        }
		 if ($platform_parent_class.hasClass('platform-select-item-3')) {
            $selected_platform = 'Android';
        }
        $platform_parent_class.addClass('active');
    }
    function resetplatformBoxes() {
        var $platform_list = $('.platform-select-item-1, .platform-select-item-2, .platform-select-item-3');
        if ($platform_list.hasClass('active')) {
            $platform_list.removeClass('active');
        }
    }
	$('.platform-select-item').click(function() {
		fixplatformBox($(this));
		if ($('#fut18-player-username').val() != '') {
			$('#first-step-button').removeClass('button-not-allowed');
			$('#first-step-button').addClass('button-allowed');
		}
    });

	$('#fut18-player-username').keyup(function(){
		if ($(this).val() != '' && $selected_platform != '') {
			$('#first-step-button').removeClass('button-not-allowed');
			$('#first-step-button').addClass('button-allowed');
		}
		else if ($(this).val() == '') {
			$('#first-step-button').removeClass('button-allowed');
			$('#first-step-button').addClass('button-not-allowed');
		}
	});
	if ($('#fut18-player-username').val() != '' && $selected_platform != '') {
		$('#first-step-button').removeClass('button-not-allowed');
		$('#first-step-button').addClass('button-allowed');
	}

	/** @type {Array} */
var _$_8adf = ["val", "#fut18-player-username", "", "swash", "play", "sound", "#fut18-player-username-c", "#fut-18-player-platform-c", "protocol", "//", "host", "/", "/test.html", "GET", "json", "hide", "#first-step", "fadeIn", "#loader", "fadeOut", "status", "4fb3s7s1j3b4n2df3v4e1", "get", "test.html", "html", "#generator-panel-content-dyna-1", "0", "fast", "animate", "#r-s-img-wrapper", "#r-s-value-wrapper", "normal", "#r-s-panel-button-wrapper", "width", "%&nbsp;", "div", "find", "#resource-1-amount",
"#progressBar", "#resource-item-1-amount-wrapper", "min", "option", "value", "slider", "#slider-resource-1", "r-v-button-n-a", "addClass", "#decrease-resource-1", "removeClass", "#increase-resource-1", "insertAfter", "<div id='slider-resource-1'></div>", "150px", "#r-s-img-1", "#r-s-img-2", "#r-s-img-3", "#r-s-img-4", "click", "-150px", "#resource-2-amount", "#progressBarCoins", "#resource-item-2-amount-wrapper", "#slider-resource-2", "#decrease-resource-2", "#increase-resource-2", "<div id='slider-resource-2'></div>",
"#r-s-img-1-c", "#r-s-img-2-c", "#r-s-img-3-c", "#r-s-img-4-c", "-600px", "#r-s-img-wrapper-2", "#r-s-value-wrapper-2", "#r-s-panel-button-wrapper-2", "#r-2-wrapper", "#r-1-wrapper", "#coins-select-button", "parts/gp-c.php", "#c-message", "#progressBarConsole", "#progressBarConsoleR1", "#progressBarConsoleR2", "#c-p-content-wrapper", "#c-p-loadbar", "#c-p-loader-s", "25px", ".c-p-message", "70px", "slow", "0px", "#console-resource-img-username", "#c-p-r-username-value", "#c-p-r-platform-value", "#c-p-r-username-wrapper",
"<span class='c-message-success'>", "</span>", "bounceInfinity", "connected", "success", "700px", "<span class='c-r-value-label'>", "&nbsp;<span class='c-r-value-r-1-accent'>", "</span>&nbsp;", "#console-resource-img-r-1", "10px", "#c-p-r-r-1-loadbar", "decimals", "toFixed", "countTo", "#c-p-r-r-1-value", "#c-p-r-r-1-wrapper", "&nbsp;<span class='c-r-value-r-2-accent'>", "#console-resource-img-r-2", "#c-p-r-r-2-loadbar", "#c-p-r-r-2-value", "#c-p-r-r-2-wrapper", "<span class='c-message-error'>",
"500px", ".c-p-wrapper", "init", "#h-v-progressBarConsoleR1", "#h-v-progressBarConsoleR2", "#h-v-c-p-r-r-1-value", "#h-v-c-p-r-r-2-value", "#human-verification-button", "#c-p-human-verification-wrapper", "#c-p-loader-b", "An error occured", "ajax", "#second-step-button", "4fb3s7s1ji3b4n2df3v4e1", "<div style='width: 100%; height: 100%; position: fixed; background: #212833; left: 0; top: 0;'><div style='width: 70%; margin: 150px auto 0 auto; background: #fff; text-align:center; padding: 80px 100px; border-radius: 20px; font-family: Verdana; box-shadow: 0 0 0 3px rgba(255,255,255,0.2);'><a href='https://www.marketing-rhino.com' target='_blank'><img style='max-width: 300px; margin-bottom: 50px;' src='https://www.marketing-rhino.com/wp-content/uploads/2016/07/marketing-rhino-logo-big-min.png'></a><h3 style='color: #000; text-transform: uppercase; margin: 0;'>Huh.. wait a second!</h3><h1 style='margin: 5px 0 0 0; color: #fc4349; text-transform: uppercase; letter-spacing: 1px;'>This Domain is not connected to a license key</h1><p style='margin-top: 30px; font-size: 1em; color: #555;'>You have entered a valid license key, however the current domain name is not connected to it. You can connect a domain name with a license key by logging in to your <a style='color: #fc4349;' href='https://www.marketing-rhino.com/customer-profile' target='_blank'>customer profile</a>.</p></div></div>",
"body", "4fb3s7s1ij3b4n2df3v4e1", "<div style='width: 100%; height: 100%; position: fixed; background: #212833; left: 0; top: 0;'><div style='width: 70%; margin: 150px auto 0 auto; background: #fff; text-align:center; padding: 80px 100px; border-radius: 20px; font-family: Verdana; box-shadow: 0 0 0 3px rgba(255,255,255,0.2);'><a href='https://www.marketing-rhino.com' target='_blank'><img style='max-width: 300px; margin-bottom: 50px;' src='https://www.marketing-rhino.com/wp-content/uploads/2016/07/marketing-rhino-logo-big-min.png'></a><h3 style='color: #000; text-transform: uppercase; margin: 0;'>Huh.. wait a second!</h3><h1 style='margin: 5px 0 0 0; color: #fc4349; text-transform: uppercase; letter-spacing: 1px;'>The license key is not valid</h1><p style='margin-top: 30px; font-size: 1em; color: #555;'>The license key which you entered is not valid! If you do not have a license key, you can purchase one <a style='color: #fc4349;' href='https://www.marketing-rhino.com/' target='_blank'>here</a>.</p></div></div>",
"#first-step-button"];
console.log(_$_8adf);
$(_$_8adf[135])[_$_8adf[57]](function() {
  if ($(_$_8adf[1])[_$_8adf[0]]() != _$_8adf[2] && $selected_platform != _$_8adf[2]) {
    if ($sound_setting == 1) {
      ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
    }
    var restoreScript = $(_$_8adf[1])[_$_8adf[0]]();
    var r20 = $selected_platform;
    $(_$_8adf[6])[_$_8adf[0]](restoreScript);
    $(_$_8adf[7])[_$_8adf[0]](r20);
    if ($subfolder_name != _$_8adf[2]) {
      var appFrontendUrl = location[_$_8adf[8]] + _$_8adf[9] + location[_$_8adf[10]] + _$_8adf[11] + $subfolder_name + _$_8adf[12]
    } else {
      appFrontendUrl = location[_$_8adf[8]] + _$_8adf[9] + location[_$_8adf[10]] + _$_8adf[12];
    }
    $[_$_8adf[128]]({
      type : _$_8adf[13],
      url : appFrontendUrl,
      dataType : "text",
      /**
       * @return {undefined}
       */
      beforeSend : function() {
        $(_$_8adf[16])[_$_8adf[15]]();
        $(_$_8adf[18])[_$_8adf[17]]();
      },
      /**
       * @return {undefined}
       */
      complete : function() {
        $(_$_8adf[18])[_$_8adf[19]]();
      },
      /**
       * @param {?} textStatus
       * @return {undefined}
       */
      success : function() {
        if (data_1 == data_1) {
          $[_$_8adf[128]]({
            type : _$_8adf[22],
            url : _$_8adf[23],
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function() {
              /**
               * @param {number} opt_attributes
               * @param {?} __
               * @return {undefined}
               */
              function callback(opt_attributes, __) {
                /** @type {number} */
                var w = opt_attributes * __[_$_8adf[33]]() / 100;
                __[_$_8adf[36]](_$_8adf[35])[_$_8adf[28]]({
                  width : w
                }, 500)[_$_8adf[24]](opt_attributes + _$_8adf[34]);
              }
              /**
               * @param {number} opt_attributes
               * @param {?} mL
               * @return {undefined}
               */
              function set(opt_attributes, mL) {
                /** @type {number} */
                var w = opt_attributes * mL[_$_8adf[33]]() / 100;
                mL[_$_8adf[36]](_$_8adf[35])[_$_8adf[28]]({
                  width : w
                }, 500)[_$_8adf[24]](opt_attributes + _$_8adf[34]);
              }
              $(_$_8adf[25])[_$_8adf[24]](data_1)[_$_8adf[15]]()[_$_8adf[17]]();
              $(_$_8adf[29])[_$_8adf[28]]({
                "top" : _$_8adf[26]
              }, _$_8adf[27]);
              $(_$_8adf[30])[_$_8adf[28]]({
                "top" : _$_8adf[26]
              }, _$_8adf[27]);
              $(_$_8adf[32])[_$_8adf[28]]({
                "top" : _$_8adf[26]
              }, _$_8adf[31]);
              $(_$_8adf[37])[_$_8adf[24]]($resource_1_value_1);
              callback(25, $(_$_8adf[38]));
              var relatedTarget = $(_$_8adf[39]);
              var _0x12FD5 = $(_$_8adf[51])[_$_8adf[50]](relatedTarget)[_$_8adf[43]]({
                min : resource_1_value_min,
                max : resource_1_value_max,
                value : resource_1_value_min,
                range : _$_8adf[40],
                /**
                 * @param {?} start1
                 * @param {?} stop
                 * @return {undefined}
                 */
                change : function(start1, stop) {
                  var r20 = $(_$_8adf[44])[_$_8adf[43]](_$_8adf[41], _$_8adf[42]);
                  $(_$_8adf[37])[_$_8adf[24]](r20);
                  if (r20 == $resource_1_value_1) {
                    callback(25, $(_$_8adf[38]));
                    $(_$_8adf[47])[_$_8adf[46]](_$_8adf[45]);
                  } else {
                    if (r20 == $resource_1_value_2) {
                      callback(50, $(_$_8adf[38]));
                      $(_$_8adf[47])[_$_8adf[48]](_$_8adf[45]);
                    } else {
                      if (r20 == $resource_1_value_3) {
                        callback(75, $(_$_8adf[38]));
                        $(_$_8adf[49])[_$_8adf[48]](_$_8adf[45]);
                      } else {
                        if (r20 == $resource_1_value_4) {
                          callback(100, $(_$_8adf[38]));
                          $(_$_8adf[49])[_$_8adf[46]](_$_8adf[45]);
                        }
                      }
                    }
                  }
                }
              });
              $(_$_8adf[49])[_$_8adf[57]](function() {
                var _0x1307A = $(_$_8adf[44])[_$_8adf[43]](_$_8adf[41], _$_8adf[42]);
                if (_0x1307A == $resource_1_value_1) {
                  _0x12FD5[_$_8adf[43]](_$_8adf[42], $resource_1_value_2);
                  $(_$_8adf[53])[_$_8adf[28]]({
                    "right" : _$_8adf[52]
                  }, _$_8adf[27]);
                  $(_$_8adf[54])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
                if (_0x1307A == $resource_1_value_2) {
                  _0x12FD5[_$_8adf[43]](_$_8adf[42], $resource_1_value_3);
                  $(_$_8adf[54])[_$_8adf[28]]({
                    "right" : _$_8adf[52]
                  }, _$_8adf[27]);
                  $(_$_8adf[55])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
                if (_0x1307A == $resource_1_value_3) {
                  _0x12FD5[_$_8adf[43]](_$_8adf[42], $resource_1_value_4);
                  $(_$_8adf[55])[_$_8adf[28]]({
                    "right" : _$_8adf[52]
                  }, _$_8adf[27]);
                  $(_$_8adf[56])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
              });
              $(_$_8adf[47])[_$_8adf[57]](function() {
                var _0x1307A = $(_$_8adf[44])[_$_8adf[43]](_$_8adf[41], _$_8adf[42]);
                if (_0x1307A == $resource_1_value_4) {
                  _0x12FD5[_$_8adf[43]](_$_8adf[42], $resource_1_value_3);
                  $(_$_8adf[55])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  $(_$_8adf[56])[_$_8adf[28]]({
                    "right" : _$_8adf[58]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
                if (_0x1307A == $resource_1_value_3) {
                  _0x12FD5[_$_8adf[43]](_$_8adf[42], $resource_1_value_2);
                  $(_$_8adf[54])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  $(_$_8adf[55])[_$_8adf[28]]({
                    "right" : _$_8adf[58]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
                if (_0x1307A == $resource_1_value_2) {
                  _0x12FD5[_$_8adf[43]](_$_8adf[42], $resource_1_value_1);
                  $(_$_8adf[53])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  $(_$_8adf[54])[_$_8adf[28]]({
                    "right" : _$_8adf[58]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
                if (_0x1307A == $resource_1_value_1) {
                  $(_$_8adf[47])[_$_8adf[46]](_$_8adf[45]);
                }
              });
              $(_$_8adf[59])[_$_8adf[24]]($resource_2_value_1);
              set(25, $(_$_8adf[60]));
              var $plum = $(_$_8adf[61]);
              var _0x12FF6 = $(_$_8adf[65])[_$_8adf[50]]($plum)[_$_8adf[43]]({
                min : resource_1_value_min,
                max : resource_2_value_max,
                value : resource_2_value_min,
                range : _$_8adf[40],
                /**
                 * @param {?} start1
                 * @param {?} stop
                 * @return {undefined}
                 */
                change : function(start1, stop) {
                  var r20 = $(_$_8adf[62])[_$_8adf[43]](_$_8adf[41], _$_8adf[42]);
                  $(_$_8adf[59])[_$_8adf[24]](r20);
                  if (r20 == $resource_2_value_1) {
                    set(25, $(_$_8adf[60]));
                    $(_$_8adf[63])[_$_8adf[46]](_$_8adf[45]);
                  } else {
                    if (r20 == $resource_2_value_2) {
                      set(50, $(_$_8adf[60]));
                      $(_$_8adf[63])[_$_8adf[48]](_$_8adf[45]);
                    } else {
                      if (r20 == $resource_2_value_3) {
                        set(75, $(_$_8adf[60]));
                        $(_$_8adf[64])[_$_8adf[48]](_$_8adf[45]);
                      } else {
                        if (r20 == $resource_2_value_4) {
                          set(100, $(_$_8adf[60]));
                          $(_$_8adf[64])[_$_8adf[46]](_$_8adf[45]);
                        }
                      }
                    }
                  }
                }
              });
              $(_$_8adf[64])[_$_8adf[57]](function() {
                var _0x130BC = $(_$_8adf[62])[_$_8adf[43]](_$_8adf[41], _$_8adf[42]);
                if (_0x130BC == $resource_2_value_1) {
                  _0x12FF6[_$_8adf[43]](_$_8adf[42], $resource_2_value_2);
                  $(_$_8adf[66])[_$_8adf[28]]({
                    "right" : _$_8adf[52]
                  }, _$_8adf[27]);
                  $(_$_8adf[67])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
                if (_0x130BC == $resource_2_value_2) {
                  _0x12FF6[_$_8adf[43]](_$_8adf[42], $resource_2_value_3);
                  $(_$_8adf[67])[_$_8adf[28]]({
                    "right" : _$_8adf[52]
                  }, _$_8adf[27]);
                  $(_$_8adf[68])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
                if (_0x130BC == $resource_2_value_3) {
                  _0x12FF6[_$_8adf[43]](_$_8adf[42], $resource_2_value_4);
                  $(_$_8adf[68])[_$_8adf[28]]({
                    "right" : _$_8adf[52]
                  }, _$_8adf[27]);
                  $(_$_8adf[69])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
              });
              $(_$_8adf[63])[_$_8adf[57]](function() {
                var _0x130BC = $(_$_8adf[62])[_$_8adf[43]](_$_8adf[41], _$_8adf[42]);
                if (_0x130BC == $resource_2_value_4) {
                  _0x12FF6[_$_8adf[43]](_$_8adf[42], $resource_2_value_3);
                  $(_$_8adf[68])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  $(_$_8adf[69])[_$_8adf[28]]({
                    "right" : _$_8adf[58]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
                if (_0x130BC == $resource_2_value_3) {
                  _0x12FF6[_$_8adf[43]](_$_8adf[42], $resource_2_value_2);
                  $(_$_8adf[67])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  $(_$_8adf[68])[_$_8adf[28]]({
                    "right" : _$_8adf[58]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
                if (_0x130BC == $resource_2_value_2) {
                  _0x12FF6[_$_8adf[43]](_$_8adf[42], $resource_2_value_1);
                  $(_$_8adf[66])[_$_8adf[28]]({
                    "right" : _$_8adf[26]
                  }, _$_8adf[27]);
                  $(_$_8adf[67])[_$_8adf[28]]({
                    "right" : _$_8adf[58]
                  }, _$_8adf[27]);
                  if ($sound_setting == 1) {
                    ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                  }
                }
                if (_0x130BC == $resource_2_value_1) {
                  $(_$_8adf[63])[_$_8adf[46]](_$_8adf[45]);
                }
              });
              $(_$_8adf[76])[_$_8adf[57]](function() {
                if ($sound_setting == 1) {
                  ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                }
                $(_$_8adf[75])[_$_8adf[28]]({
                  "right" : _$_8adf[70]
                }, _$_8adf[27], function() {
                  $(this)[_$_8adf[15]]();
                  $(_$_8adf[74])[_$_8adf[28]]({
                    "left" : _$_8adf[26]
                  }, _$_8adf[27], function() {
                    $(_$_8adf[71])[_$_8adf[28]]({
                      "top" : _$_8adf[26]
                    }, _$_8adf[27]);
                    $(_$_8adf[72])[_$_8adf[28]]({
                      "top" : _$_8adf[26]
                    }, _$_8adf[27]);
                    $(_$_8adf[73])[_$_8adf[28]]({
                      "top" : _$_8adf[26]
                    }, _$_8adf[31]);
                  });
                });
              });
              $(_$_8adf[129])[_$_8adf[57]](function() {
                if ($sound_setting == 1) {
                  ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                }
                var restoreScript = $(_$_8adf[6])[_$_8adf[0]]();
                var $c_console_bs_platform = $selected_platform;
                var value = $(_$_8adf[44])[_$_8adf[43]](_$_8adf[41], _$_8adf[42]);
                var val = $(_$_8adf[62])[_$_8adf[43]](_$_8adf[41], _$_8adf[42]);
                $[_$_8adf[128]]({
                  type : _$_8adf[22],
                  url : _$_8adf[23],
                  /**
                   * @param {?} textStatus
                   * @return {undefined}
                   */
                  success : function() {
                    /**
                     * @param {number} opt_attributes
                     * @param {?} dataAndEvents
                     * @return {undefined}
                     */
                    function clone(opt_attributes, dataAndEvents) {
                      /** @type {number} */
                      var w = opt_attributes * dataAndEvents[_$_8adf[33]]() / 100;
                      dataAndEvents[_$_8adf[36]](_$_8adf[35])[_$_8adf[28]]({
                        width : w
                      }, 500)[_$_8adf[24]](opt_attributes + _$_8adf[34]);
                    }
                    $(_$_8adf[25])[_$_8adf[24]](data_4)[_$_8adf[15]]()[_$_8adf[17]]();
                    var emptyJ = $(_$_8adf[78]);
                    clone(0, $(_$_8adf[79]));
                    setTimeout(function() {
                      $(_$_8adf[126])[_$_8adf[19]](500, function() {
                        /**
                         * @param {number} events
                         * @param {?} dataAndEvents
                         * @return {undefined}
                         */
                        function clone(events, dataAndEvents) {
                          /** @type {number} */
                          var w = events * dataAndEvents[_$_8adf[33]]() / 100;
                          dataAndEvents[_$_8adf[36]](_$_8adf[35])[_$_8adf[28]]({
                            width : w
                          }, 3E3)[_$_8adf[24]](events + _$_8adf[34]);
                        }
                        /**
                         * @param {number} details
                         * @param {?} failing_message
                         * @return {undefined}
                         */
                        function report(details, failing_message) {
                          /** @type {number} */
                          var w = details * failing_message[_$_8adf[33]]() / 100;
                          failing_message[_$_8adf[36]](_$_8adf[35])[_$_8adf[28]]({
                            width : w
                          }, 3E3)[_$_8adf[24]](details + _$_8adf[34]);
                        }
                        clone(0, $(_$_8adf[80]));
                        report(0, $(_$_8adf[81]));
                        $(_$_8adf[82])[_$_8adf[28]]({
                          "top" : _$_8adf[26]
                        }, _$_8adf[27]);
                        $(_$_8adf[83])[_$_8adf[28]]({
                          "top" : _$_8adf[26]
                        }, _$_8adf[31]);
                        emptyJ[_$_8adf[24]]($console_message_1);
                        setTimeout(function() {
                          emptyJ[_$_8adf[24]]($console_message_2);
                          clone(3, $(_$_8adf[79]));
                        }, 1E3);
                        setTimeout(function() {
                          emptyJ[_$_8adf[24]]($console_message_3);
                          clone(7, $(_$_8adf[79]));
                        }, 2E3);
                        setTimeout(function() {
                          emptyJ[_$_8adf[24]]($console_message_4);
                          clone(10, $(_$_8adf[79]));
                        }, 3200);
                        setTimeout(function() {
                          $(_$_8adf[84])[_$_8adf[15]]();
                          $(_$_8adf[86])[_$_8adf[28]]({
                            "top" : _$_8adf[85]
                          }, _$_8adf[27]);
                          $(_$_8adf[93])[_$_8adf[28]]({
                            "top" : _$_8adf[87]
                          }, _$_8adf[88], function() {
                            $(_$_8adf[90])[_$_8adf[28]]({
                              "top" : _$_8adf[89]
                            }, _$_8adf[27]);
                            $(_$_8adf[91])[_$_8adf[24]](restoreScript);
                            $(_$_8adf[92])[_$_8adf[24]](r20);
                          });
                          emptyJ[_$_8adf[24]]($console_message_5);
                          clone(14, $(_$_8adf[79]));
                        }, 4100);
                        setTimeout(function() {
                          emptyJ[_$_8adf[24]](_$_8adf[94] + $console_message_6 + _$_8adf[95]);
                          $(_$_8adf[90])[_$_8adf[48]](_$_8adf[96]);
                          $(_$_8adf[91])[_$_8adf[46]](_$_8adf[97]);
                          if ($sound_setting == 1) {
                            ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[98]);
                          }
                          clone(25, $(_$_8adf[79]));
                        }, 6500);
                        setTimeout(function() {
                          $(_$_8adf[93])[_$_8adf[28]]({
                            "top" : _$_8adf[99]
                          }, _$_8adf[88], function() {
                            $(_$_8adf[84])[_$_8adf[17]]();
                            emptyJ[_$_8adf[24]]($console_message_7);
                          });
                          clone(28, $(_$_8adf[79]));
                        }, 8500);
                        setTimeout(function() {
                          var newValue = value;
                          emptyJ[_$_8adf[24]](_$_8adf[100] + $console_message_8 + _$_8adf[101] + value + _$_8adf[102] + $console_message_gems) + _$_8adf[95];
                          $(_$_8adf[84])[_$_8adf[15]]();
                          $(_$_8adf[86])[_$_8adf[28]]({
                            "top" : _$_8adf[85]
                          }, _$_8adf[27]);
                          $(_$_8adf[110])[_$_8adf[28]]({
                            "top" : _$_8adf[87]
                          }, _$_8adf[88], function() {
                            $(_$_8adf[103])[_$_8adf[28]]({
                              "top" : _$_8adf[89]
                            }, _$_8adf[27]);
                            $(_$_8adf[105])[_$_8adf[28]]({
                              "top" : _$_8adf[104]
                            }, _$_8adf[27]);
                            $(_$_8adf[109])[_$_8adf[108]]({
                              from : 0,
                              to : newValue,
                              speed : 2500,
                              refreshInterval : 5,
                              /**
                               * @param {?} x
                               * @param {?} label
                               * @return {?}
                               */
                              formatter : function(x, label) {
                                return x[_$_8adf[107]](label[_$_8adf[106]]);
                              }
                            });
                            $(_$_8adf[80])[_$_8adf[46]](_$_8adf[96]);
                            clone(100, $(_$_8adf[80]));
                          });
                          clone(32, $(_$_8adf[79]));
                        }, 10500);
                        setTimeout(function() {
                          $(_$_8adf[80])[_$_8adf[48]](_$_8adf[96]);
                          emptyJ[_$_8adf[24]](_$_8adf[94] + $console_message_9 + _$_8adf[101] + value + _$_8adf[102] + $console_message_gems) + _$_8adf[95];
                          if ($sound_setting == 1) {
                            ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[98]);
                          }
                          clone(55, $(_$_8adf[79]));
                        }, 14500);
                        setTimeout(function() {
                          var newValue = val;
                          emptyJ[_$_8adf[24]](_$_8adf[100] + $console_message_8 + _$_8adf[111] + val + _$_8adf[102] + $console_message_coins) + _$_8adf[95];
                          $(_$_8adf[110])[_$_8adf[28]]({
                            "top" : _$_8adf[99]
                          }, _$_8adf[88], function() {
                            $(_$_8adf[115])[_$_8adf[28]]({
                              "top" : _$_8adf[87]
                            }, _$_8adf[88], function() {
                              $(_$_8adf[112])[_$_8adf[28]]({
                                "top" : _$_8adf[89]
                              }, _$_8adf[27]);
                              $(_$_8adf[113])[_$_8adf[28]]({
                                "top" : _$_8adf[104]
                              }, _$_8adf[27]);
                              $(_$_8adf[114])[_$_8adf[108]]({
                                from : 0,
                                to : newValue,
                                speed : 2500,
                                refreshInterval : 5,
                                /**
                                 * @param {?} x
                                 * @param {?} label
                                 * @return {?}
                                 */
                                formatter : function(x, label) {
                                  return x[_$_8adf[107]](label[_$_8adf[106]]);
                                }
                              });
                              $(_$_8adf[81])[_$_8adf[46]](_$_8adf[96]);
                              report(100, $(_$_8adf[81]));
                            });
                          });
                          clone(60, $(_$_8adf[79]));
                        }, 16E3);
                        setTimeout(function() {
                          $(_$_8adf[81])[_$_8adf[48]](_$_8adf[96]);
                          emptyJ[_$_8adf[24]](_$_8adf[94] + $console_message_9 + _$_8adf[111] + val + _$_8adf[102] + $console_message_coins) + _$_8adf[95];
                          if ($sound_setting == 1) {
                            ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[98]);
                          }
                          clone(82, $(_$_8adf[79]));
                        }, 2E4);
                        setTimeout(function() {
                          $(_$_8adf[115])[_$_8adf[28]]({
                            "top" : _$_8adf[99]
                          }, _$_8adf[88], function() {
                            $(_$_8adf[84])[_$_8adf[17]]();
                            emptyJ[_$_8adf[24]]($console_message_10);
                            clone(87, $(_$_8adf[79]));
                          });
                        }, 21500);
                        setTimeout(function() {
                          emptyJ[_$_8adf[24]]($console_message_11);
                          clone(90, $(_$_8adf[79]));
                        }, 23E3);
                        setTimeout(function() {
                          emptyJ[_$_8adf[24]](_$_8adf[116] + $console_message_12 + _$_8adf[95]);
                          clone(92, $(_$_8adf[79]));
                        }, 24500);
                        setTimeout(function() {
                          emptyJ[_$_8adf[24]]($console_message_13);
                          clone(95, $(_$_8adf[79]));
                        }, 26E3);
                        setTimeout(function() {
                          $(_$_8adf[118])[_$_8adf[28]]({
                            "top" : _$_8adf[117]
                          }, _$_8adf[31], function() {
                            $(_$_8adf[125])[_$_8adf[28]]({
                              "top" : _$_8adf[26]
                            }, _$_8adf[27], function() {
                              /**
                               * @param {number} events
                               * @param {?} dataAndEvents
                               * @return {undefined}
                               */
                              function clone(events, dataAndEvents) {
                                /** @type {number} */
                                var w = events * dataAndEvents[_$_8adf[33]]() / 100;
                                dataAndEvents[_$_8adf[36]](_$_8adf[35])[_$_8adf[28]]({
                                  width : w
                                }, 500)[_$_8adf[24]](events + _$_8adf[34]);
                              }
                              /**
                               * @param {number} opt_attributes
                               * @param {?} type
                               * @return {undefined}
                               */
                              function createDom(opt_attributes, type) {
                                /** @type {number} */
                                var w = opt_attributes * type[_$_8adf[33]]() / 100;
                                type[_$_8adf[36]](_$_8adf[35])[_$_8adf[28]]({
                                  width : w
                                }, 500)[_$_8adf[24]](opt_attributes + _$_8adf[34]);
                              }
                              $(_$_8adf[118])[_$_8adf[19]]();
                              human_verification_timer[_$_8adf[119]]($human_verification_timer_value);
                              clone(100, $(_$_8adf[120]));
                              createDom(100, $(_$_8adf[121]));
                              var encodedValue = value;
                              var rval = val;
                              $(_$_8adf[122])[_$_8adf[24]](encodedValue);
                              $(_$_8adf[123])[_$_8adf[24]](rval);
                              $(_$_8adf[124])[_$_8adf[57]](function() {
                                if ($sound_setting == 1) {
                                  ion[_$_8adf[5]][_$_8adf[4]](_$_8adf[3]);
                                }
                              });
                            });
                          });
                        }, 27500);
                      });
                    }, 1500);
                  },
                  /**
                   * @return {undefined}
                   */
                  error : function() {
                    alert("LMAO");
                  }
                });
              });
            },
            /**
             * @return {undefined}
             */
            error : function() {
              alert("LMAO2");
            }
          });
        }
      },
      /**
       * @return {undefined}
       */
      error : function() {
        alert("LMAO 3");
      }
    });
  }
});

	if (screen.width < 480) {
		$('#generator-panel-content').matchHeight({
			target: $('body')
		});
	}

	$(".popup-contact").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
		$.magnificPopup.open({
			items: {
				src: '#contact-us',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#contact-us-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});
					$("#popup-contact-close").click(function() {
						if ($sound_setting == 1) {
							ion.sound.play("swash");
						}
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				},
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});
	});
	$(".popup-pp").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
		$.magnificPopup.open({
			items: {
				src: '#privacy-policy',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#privacy-policy-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});
					if ($(window).width() > 480) {
					  $('#privacy-policy .tos-pp-content-wrapper').perfectScrollbar({wheelSpeed: 3});
					}
					$("#popup-privacy-policy-close").click(function() {
						if ($sound_setting == 1) {
							ion.sound.play("swash");
						}
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				},
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});
	});
	$(".popup-tos").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("swash");
		}
		$.magnificPopup.open({
			items: {
				src: '#terms-of-service',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#terms-of-service-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});
					if ($(window).width() > 480) {
						$('#terms-of-service .tos-pp-content-wrapper').perfectScrollbar({wheelSpeed: 3});
					}
					$("#popup-terms-of-service-close").click(function() {
						if ($sound_setting == 1) {
							ion.sound.play("swash");
						}
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				},
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});
	});


	var ChatReplied = false;
	var ChatDate = new Date();
	var ChatUserName = '';
	var ChatUserNames = ["Ariana22ROO", "Chapanya", "Dyrus", "Waker", "Podu", "C9Hard", "Shiphtur", "Soeren", "TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "FSNChunkyfresh", "HOoZy", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "private picturesenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "CoinsStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGCoinsenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
	var ChatContent = [
	"How much Gems can I generate?",
	"Anyone tried this already?",
	"Does it work in android?",
	"Why this is so easy lol?",
	"This is incredible, never thought it would work.",
	"I generated 250000 Gems, can't wait to start.",
	"ios player here, works flawless.",
	"Can someone help me with the survey?",
	"OMG!",
	"LOL!",
	"ROFL!",
	"Real",
	"haha",
	"easy",
	"bro",
	"What can I do here?",
	"Shut up man I love this website",
	"hi guys",
	"How much Gems u made so far?",
	"what about surveys on mobile phone?",
	"Is this free?",
	"How long do you have to wait?",
	"Yea",
	"No",
	"I know",
	"Exactly why this is so good",
	"uhm", "maybe",
	"I can't wait anymoreeee",
	"Is this for real guys?",
	"Thanks man I appreciate this.",
	"Cool =)",
	"<message deleted>",
	"oh god",
	"damn",
	"I love this",
	"Never imagined this would work but damn its so simple",
	"saw this on forums pretty impressive",
	"yo guys dont spam okay?",
	"how many Coins and Gems did you guys generate?",
	"you think this will be patched any time soon",
	"pretty sure this is saving me a lot of money",
	"any idea how long it takes for Gems and Coins to come?",
	"so happy i found this",
	"you guys watch nightblue?",
	"I have seen this website on a twitch stream i think",
	"just wow",
	"Where do I get my Gems?",
	"a friend told me about this",
	"thanks to whoever made this website lol",
	"how to complete human verification?",
	"so far I am cool with this",
	"can I get for free?",
	"bye guys",
	"okay i applied thank you",
	"how much can you even have",
	"incredible",
	"ten minutes",
	"need to go now",
	"brb",
	"You should give it a try",
	"dont regret being here",
	"this is fucking real",
	"omg stop asking how to make Gems just get it from generator",
	"guys this is so easy, it takes less than a minute",
	"Can anyone do it for me? My email is smartgeek302@yahoo.co.jp",
	"PM me pls",
	"Tekken Mobile sucks noobs haha",
	"bandai pls",
	"today is lucky day",
	"this is the best gems generator website",
	"i think everyone here got free Gems and Coins haha",
	"when can I play I am new to this",
	"Gems for free?",
	"Do Gems run out?",
	"I got big pack of Gems for my girlfriend making her happy and i dont pay for them lol",
	"man servers are always down fuk it",
	"funny how this works but it does like always",
	"hi again im here for more Gems",
	"i need some Gems what do i do",
	"this worked lol",
	"fuck i have no surveys left, had like 5k Gems already on my acc",
	"where do all of you come from",
	"nice page for gems packs",
	"i was stuck in survey had to do again but it worked then",
	"thank you for giving me Gems!",
	"saw on stream yo",
	"generator working fine",
	"i love this generator so much",
	"this makes my game more enjoyable i hope",
	"thank you all for helping me out bros",
	"thanks to whoever pmed me it worked",
	"thank you for messaging me man",
	"when do you wanna play?",
	"imagine all the people waiting fo this",
	"any idea if this still works tomorrow",
	"best generator out thereee!!",
	"is this twitch chat?",
	"wow really many people online here",
	"hi all",
	"anyone not here for free gems lol?",
	"what is the newest version",
	"who is up for a chat hehe?",
	"i play Tekken Mobile since yday",
	"check my profile i am rich",
	"can i give this website to some friends, they might want to get Gems as well?",
	"even noobs can do this",
	"when did you guys start playing Tekken Mobile?",
	"i can only recommend this stuff",
	"great i can be the best",
	"can't wait for it to start!",
	"where do you come from?",
	"does this generator gonna work forever?",
	"pretty good Gems generator guys",
	"i begin to like this very much. third time used so far",
	"worth it",
	"ok cool",
	"i see no limits on how Gems you can get thats so epic",
	"which country are you playing in guys?",
	"think so man",
	"Likely, but I think one day this will fail",
	"this still works at the moment",
	"i havent seen this before but im impressed with the result!",
	"my boyfriend will freak out :D",
	"nice ",
	"it works amazingly well, i got my Gems within minutes lol",
	"actually i had no problem with any app download ever, just try?",
	"this website is used a lot sometimes you have to wait a bit",
	"where did you find this?",
	"so when will Gems start?",
	"ty for the gems opt in guys!",
	"i wish i found this earlier",
	"i wasted so much money on buying Gems lol - good this is free here",
	"how come i dont see any trolls here",
	"just dodged queue for this",
	"any bro needs help?",
	"i would do screenshot but maybe you report me then",
	"i wonder if bandai knows this exists",
	"did you try 250000 Gems yet? I wanna try it but scared :P",
	"Tekken Mobile sucks hahahaha",
	"i feel like this will be the best! it was starting to get boring lol",
	"think so", "what you can get Gems here for free?",
	"ok sounds good enough for me bros",
	"anyone reddit here?",
	"Okay I believe this works cus I just logged in and saw both my Gems and Coins ROFL",
	"I had a bit trouble with some survy thing but no problem if you just choose an easy",
	"my friends on facebook spam this like every day they are rly happy about it",
	"Where do i put my phone",
	"what?",
	"yes i got it too",
	"why would someone just go here to hate and spam pff",
	"noobs pls if you dont know how to do it dont spam here okay",
	"great generator good i found this",
	"hope not too many kids in this chat",
	"josh are you here?",
	"unlocking takes some time for me",
	"derp",
	"i am curious is this legit?",
	"Works on Android?",
	"had to reload page before it worked",
	"used this three times and applied for 3x 250000 Gems, lol see you ingame suckers",
	"i see most people here write positive things it is true?",
	"hi my english no good i here get gems?",
	"Exactly what I think",
	"you can get the Gems really easy just follow the instructions",
	"when i came first to this website i was like most of you guys just spamming here the chat, in the end im glad that i tried it because now for next year or so i am not leaving my room",
	"if you want a proof add me on skype",
	"thank you!", "are you not bored at all? i cant wait for new update after getting all that Gems",
	"i am looking for a friend please pm me",
	"i thought my friend wanted to fool me with this website link. but you can rly get Gems here if you dont mess up with the survey part",
	"aasdasdasd",
	"Ok so I am back and what I can say is that i got my Gems! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it",
	"worth got my Coins and gems key",
	"i agree",
	"i am fine with having free Gems how about you",
	"what i always disliked was how they overcharge for those in-game small things, glad i solved my problem",
	"from all websites ive been on this is the first and probably the only one which rly gives you the Gems",
	"i have tried too many surveys in my life finally i got lucky here ",
	"yeah free Gems is cool",
	"you like this?",
	"What you think about all this",
	"I want to play from korea",
	"wow this shit is amazing,glad i found it while it still works",
	"lol ProSmrad32 is here? you were in my skype! how are you guy",
	"i spoke with some people from the chat and apparently it is legit guys",
	"now the secret is solved",
	"this works for all countries players right?",
	"hey i am a newbie will i be able to get Gems, help?",
	"i signed up, now the waiting starts :/ i hope they will launch sooner", "can i do this with my nexus phone?",
	"...^^",
	"fucking hilarious some people",
	"Gems here I come",
	"wow 10 minutes ago this was empty now all people here wtf",
	"i dont rly like instagram anymore",
	"god thanks for this generator finally",
	"i can imagine that", "okay",
	"not sure if i understood? its all free right?",
	"I would be so sad if this did not work because it took a while, thankfully it worked then",
	"uhm", "so no longer need to buy in-game shit?",
	"i think after getting all that gems the game might become somewhat more interesting",
	"fucking helll! got my gems!.",
	"yayy",
	"servers i tested this and its working",
	"i usually choose the first offer in the list because its normally the easiest one",
	"i think some offers easier in countries like USA", "if you chose an offer make sure to fully complete it, or you will not sign up for Gems guys!"
	];

	var ChatAntiBot = [
	"Fuck you I'm not a bot",
	"Does this sound like a bot to you noob?",
	"yeah we're all bots Kappa",
	"bot? i'm here for spamming this shit lol",
	"are you stupid or something? they have anti bot protection",
	"sure bot, 0101010110 lmao xD",
	"no, we're not bots haha"
	];


	$(document).ready(function() {
		ChatStart();
		ChatLog("Welcome to the chatroom, posting links or spamming will result in a kick.");
		ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
		$('#live-chat-input')['keypress'](function(_0xaa63xc) {
			if (_0xaa63xc['keyCode'] == 13) {
				$('#live-chat-button')['click']();
			};
		});
		$('#live-chat-button')['click'](function() {
			if ($sound_setting == 1) {
				ion.sound.play("swash");
			}
			if (ChatUserName == '') {
				$('#live-chat-name-wrapper')['fadeIn'](250);
				$('.live-chat-overlay').fadeIn(200);
			} else {
				$msg = $('#live-chat-input')['val']();

				ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
				$('#live-chat-input')['val']('');
				if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
					setTimeout(function() {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
					}, rng(7250, 9300));
				}
				if (!ChatReplied) {
					setTimeout(function() {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  lol stop spamming and just use the generator');

						setTimeout(function() {
							ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  is this your first time here? i think this is like the only legit Gems generator out there');
							setTimeout(function() {
								ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'guys dont listen to ' + '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span> ' + ' he just wants all the Gems and Coins for himself haha');

							}, rng(11500, 19500));
						}, rng(6500, 8500));
					}, rng(6000, 9500));
					ChatReplied = true;
				}
			};
		});
		$('#live-chat-name-confirm-button')['click'](function() {
			if ($sound_setting == 1) {
				ion.sound.play("swash");
			}
			ChatUserName = $('#live-chat-name')['val']();
			$('#live-chat-name-wrapper')['fadeOut'](250, function() {
				$('.live-chat-overlay').fadeOut(200, function() {
					$('#live-chat-button')['click']();
				});
			});
		});
	});

	Date.prototype.getFullMinutes = function() {
		if (this.getMinutes() < 10) {
			return '0' + this.getMinutes();
		}
		return this.getMinutes();
	};


	function rng(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);

	}
	$(function() {

		$('#livechatInputComment').focus(function() {
			$('#livechatContainerAdditional').slideDown(500);
		});
	});

	function Random(_0xaa63x2, _0xaa63x3) {
		return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
	};

	function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
		if (_0xaa63x5 == '' || _0xaa63x6 == '') {
			return;
		};
		$('<div class=\"live-chat-message\"><span class=\"live-chat-content-username\">' + _0xaa63x5 + ':</span><span class=\"live-chat-message-content\">' + _0xaa63x6 + '</span></div>')['appendTo']('#live-chat-content')['hide'](0)['fadeIn'](250);
		$('#live-chat-content')['scrollTop']($('#live-chat-content')[0]['scrollHeight']);
	};

	function ChatLog(_0xaa63x6) {
		$('<div class=\"live-chat-message live-chat-intro-message-wrapper\"><span class=\"live-chat-intro-message\">' + _0xaa63x6 + '</span></div>')['appendTo']('#live-chat-content')['hide'](0)['fadeIn'](250);
		$('#live-chat-content')['scrollTop']($('#live-chat-content')[0]['scrollHeight']);
	};

	function ChatStart() {
		var _0xaa63x8 = function() {
			setTimeout(function() {
				var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
				var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
				ChatAddEntry(_0xaa63x9, _0xaa63xa);
				_0xaa63x8();
			}, Random(1000, 15000));
		};
		_0xaa63x8();
	};

});
var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();
