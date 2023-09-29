function iconSvg(n, cls) {
    if (! cls) cls = [];
	return svg({width:20, height:20, class:cls, viewBox:[0,0,24,24]}, function() {
		iconPath(n, 1);
	});
}
function iconGroup(n, x, y, size) {
	g({class:["icon"+n], transform:{translate:[x-size/2,y-size/2], scale:[size/24, size/24]}}, function() {
		iconPath(n, 2);
	});
}
function iconPath(n, strokeWidth) {
    if (! strokeWidth) strokeWidth = 2;
	if (n == "<Conf>") {
		path({class:["line"], transform:{translate:[3.5,2]}, stroke:{width:strokeWidth, linejoin:"round"}, d:"M -0.16704345,6.8121122 1.3873001,4.2062344 3.9952045,5.192978 6.3712747,3.6264749 6.8744317,0.96964458 9.928113,0.9439945 l 0.495399,2.7109965 2.455538,1.5200954 2.454351,-1.0258842 1.618643,2.6726951 -2.156048,1.7706607 -0.05703,2.794519 2.15402,1.760874 -1.507443,2.719943 -2.412836,-1.021832 -2.444913,1.448386 -0.5976514,2.75503 -3.0202727,-0.02733 -0.4775068,-2.674722 -2.5157848,-1.481794 -2.4621101,0.966478 -1.6252141,-2.739513 2.0750442,-1.56986 0.061085,-2.920047 z"});
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 9 12 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0 z"});
	} else if (n == "<Back>") {
		path({class:["line"], stroke:{width:3}, fill:"none"}, function(d) {
			d.Move(16,2).line(-8,8).line(8,8);
		});
	} else if (n == "<Help>") {
		text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":24}, "?");
	} else if (n == "<Enter>") {
		g({transform:{translate:[4,5]}}, function() {
			path({d:"M 6 5.5 v -5.5 l -7 7 l 7 7 v -4.5", stroke:{width:strokeWidth}, class:["line"]});
			path({d:"M 5 4.5 h 7 v -5 M 5 9.5 h 12 v -10", stroke:{width:strokeWidth, linejoin:"round"}, class:["line"]});
			path({d:"M 11 -0.5 h 7", stroke:{width:strokeWidth, linejoin:"round"}, class:["line"]});
		});
	} else if (n == "<Dict>") {
		//path({d:"M 4 5 h 2 m 4 0 h 10 M 4 12 h 2 m 4 0 h 10 M 4 19 h 2 m 4 0 h 10", stroke:{width:strokeWidth*2}, class:["line"]});
		path({d:"M 20.593347,21.530075 H 6.2809761 c 0,0 -1.6396376,-0.01279 -1.6344821,-1.966691 0.00516,-1.953899 1.6344821,-2.015363 1.6344821,-2.015363 H 19.125412 V 3.8166922 c 0,0 -0.07031,-0.7635955 -0.391544,-1.1911829 C 18.41263,2.1979218 17.539199,2.1493577 17.528,2.1437617 H 6.3016473 c 0,0 -0.6776338,-0.047038 -1.1441102,0.3728521 C 4.6910608,2.9365043 4.663985,3.4406618 4.663985,3.4406618 V 19.271212", stroke:{width:strokeWidth}, class:["line"]});
		path({d:"M 9.3,4.6 V 14 H 15.9", stroke:{width:strokeWidth}, class:["line"]});
	} else if (n == "<Colors>") {
		path({d:"M 13 23 C 10,25 0.68,19 0.5,12 0.4,5 4.7,0.74 11.4,0.53 c 6.7,-0.2 12.8,3.6 12,11 -0.83,7.47 -8.53,4.18 -10.4,6.18 -1.89,2 2.8,2.9 0,5.2 z", stroke:{width:strokeWidth}, class:["line"]});
		path({d:"M 4 10 a 2 2 0 1 0 4 0 a 2 2 0 1 0 -4 0 Z", stroke:{width:strokeWidth}, class:["line"]});
		path({d:"M 7 5 a 2 2 0 1 0 4 0 a 2 2 0 1 0 -4 0 Z", stroke:{width:strokeWidth}, class:["line"]});
		path({d:"M 14 5 a 2 2 0 1 0 4 0 a 2 2 0 1 0 -4 0 Z", stroke:{width:strokeWidth}, class:["line"]});
		path({d:"M 17 10 a 2 2 0 1 0 4 0 a 2 2 0 1 0 -4 0 Z", stroke:{width:strokeWidth}, class:["line"]});
	} else if (n == "<Nav>" || n == "<TouchNav>") {
		path({d:"M 12 4 v 16 M 4 12 h 16 M 4 4 h 16 v 16 h -16 z", stroke:{width:strokeWidth}, transform:{rotate:[45, 12, 12]}, class:["line"]});
	} else if (n == "<Pay>") {
		rect({x:2, y:4, width:20, height:16, rx:3, ry:3, stroke:{width:strokeWidth}, class:["line"]});
		path({d:"M 2 10 h 20", stroke:{width:strokeWidth*4}, class:["line"]});
		rect({x:4, y:14, width:4, height:4, rx:1, ry:1, stroke:{width:0}, class:["fill"]});
	} else if (n == "<ModOff>") {
		path({d:"M 4 10 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0 Z", stroke:{width:1}, class:["line"]});
	} else if (n == "<ModOff2>") {
		path({d:"M 18 -26 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0 Z", stroke:{width:1}, class:["line"]});
	} else if (n == "<ModOn>") {
    	path({d:"M 4 10 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0 Z", stroke:{width:2}, class:["line"], style:{"stroke":"#000", "fill":"#ff0"}});
	} else if (n == "<Esc>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "fill":"#aaa"}, "Esc");
	} else if (n == "<Func>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "fill":"#aaa"}, "Fn");
	} else if (n == "<NumLock>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "font-weight":"bold", "fill":"#aaa"}, "NL");
	} else if (n == "<ScrollLock>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "fill":"#aaa"}, "SL");
	} else if (n == "<CapsLock>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "fill":"#aaa"}, "CL");
	} else if (n == "<PrintScreen>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "fill":"#aaa"}, "PS");
	} else if (n == "<PauseBreak>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "fill":"#aaa"}, "PB");
	} else if (n.match(/\<F\d+\>/)) {
	    var m = n.match(/\<F(\d+)\>/);
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":20, "fill":"#888"}, "F"+m[1]);
	} else if (n == "<TouchAlt>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "fill":"#aaa"}, "Alt");
	} else if (n == "<TouchCtrl>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "fill":"#aaa"}, "Ctrl");
	} else if (n == "<TouchShift>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "fill":"#aaa"}, "Shift");
	} else if (n == "<TouchAS>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "fill":"#aaa"}, "A-S");
	} else if (n == "<TouchCS>") {
	    text({x:12, y:12, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":22, "fill":"#aaa"}, "C-S");
	} else if (n == "<ModShift>") {
	    text({x:-16, y:12, "dominant-baseline":"middle", "text-anchor":"left", "text-align":"left", "font-size":22, "fill":"#aaa"}, "Shift");
	} else if (n == "<ModCtrl>") {
	    text({x:-16, y:12, "dominant-baseline":"middle", "text-anchor":"left", "text-align":"left", "font-size":22, "fill":"#aaa"}, "Ctrl");
	} else if (n == "<ModAlt>") {
	    text({x:-16, y:12, "dominant-baseline":"middle", "text-anchor":"left", "text-align":"left", "font-size":22, "fill":"#aaa"}, "Alt");
	} else if (n == "<ModMeta>") {
	    text({x:-16, y:12, "dominant-baseline":"middle", "text-anchor":"left", "text-align":"left", "font-size":22, "fill":"#aaa"}, "Meta");
	} else if (n == "<Shift>") {
		path({d:"M 4 11 l 7 -7 l 7 7 h -4.5 v 9 h -5 v -9 Z", stroke:{width:strokeWidth}, class:["line"]});
	} else if (n == "<ShiftOn>") {
		path({d:"M 4 11 l 7 -7 l 7 7 h -4.5 v 9 h -5 v -9 Z", stroke:{width:strokeWidth}, style:{fill:"#888"}, class:["line"]});
	} else if (n == "<Caps>") {
		path({d:"M 4 11 l 7 -7 l 7 7 h -4.5 v 9 h -5 v -9 Z", stroke:{width:strokeWidth}, style:{"fill":"#888"}, class:["line"]});
    	path({d:"M -34 10 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0 Z", stroke:{width:2}, class:["line"], style:{"stroke":"#000", "fill":"#ff0"}});
	} else if (n == "<Alt>") {
		g({transform:{rotate:[45,0,16]}}, function() {
			path({d:"M 0 0 h 14 v 5 h -9 v 9 h -5 Z", stroke:{width:strokeWidth}, class:["line"]});
		});
	} else if (n == "<IconUndo>") {
		g({transform:{translate:[3,2]}}, function() {
			path({d:"M 0 10 q 9 -9 18 0", stroke:{width:strokeWidth}, class:["line","opacity-50"]});
			path({d:"M -1 4.3 v 7 h 7 Z", class:["fill","opacity-50"]});
		});
	} else if (n == "<IconRedo>") {
		g({transform:{translate:[3,2]}}, function() {
			path({d:"M 0 10 q 9 9 18 0", stroke:{width:strokeWidth}, class:["line","opacity-50"]});
			path({d:"M 13 8 h 7 v 7 Z", class:["fill","opacity-50"]});
		});
	} else if (n == "<Undo>") {
		g({transform:{translate:[3,2]}}, function() {
			path({d:"M 0 6 q 9 -9 18 0", stroke:{width:strokeWidth}, class:["line"]});
			path({d:"M -1 0.3 v 7 h 7 Z", class:["fill"]});
			path({d:"M 0 14 q 9 9 18 0", stroke:{width:strokeWidth}, class:["line"]});
			path({d:"M 13 11.7 h 7 v 7 Z", class:["fill"]});
		});
	} else if (n == "<Tab>") {
		g({transform:{translate:[4.5,8]}}, function() {
			path({d:"M -1 4 h 12.5 m -4 -4 l 4 4 l -4 4", stroke:{width:strokeWidth}, class:["line"]});
			path({d:"M 15 -1 v 10", stroke:{width:strokeWidth}, class:["line"]});
		});
	} else if (n == "<IconLang>") {
		g({transform:{translate:[12,12]}}, function() {
			path({d:"M -9 0 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0", stroke:{width:strokeWidth}, class:["line","opacity-50"]});
			path({d:"M 0.5 -9 q 6 9 0 18", stroke:{width:strokeWidth}, class:["line","opacity-50"]});
			path({d:"M -0.5 -9 q -6 9 0 18", stroke:{width:strokeWidth}, class:["line","opacity-50"]});
			path({d:"M -8.5 -3 h 17", stroke:{width:strokeWidth}, class:["line","opacity-50"]});
			path({d:"M -8.5 3 h 17", stroke:{width:strokeWidth}, class:["line","opacity-50"]});
		});
	} else if (n == "<Lang>") {
		g({transform:{translate:[12,12]}}, function() {
			path({d:"M -9 0 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0", stroke:{width:strokeWidth}, class:["line"]});
			path({d:"M 0.5 -9 q 6 9 0 18", stroke:{width:strokeWidth}, class:["line"]});
			path({d:"M -0.5 -9 q -6 9 0 18", stroke:{width:strokeWidth}, class:["line"]});
			path({d:"M -8.5 -3 h 17", stroke:{width:strokeWidth}, class:["line"]});
			path({d:"M -8.5 3 h 17", stroke:{width:strokeWidth}, class:["line"]});
		});
	} else if (n == "<IconBold>") {
	    path({class:["line","opacity-50"], d:"M 0 0 h 24 v 24 h -24 Z", stroke:{width:strokeWidth}});
	    text({x:12, y:14, "dominant-baseline":"middle", "text-anchor":"middle", "font-family":"serif", "font-size":22, "font-weight":"bold", "fill":"#aaa"}, "B");
	} else if (n == "<IconItalic>") {
	    path({class:["line","opacity-50"], d:"M 0 0 h 24 v 24 h -24 Z", stroke:{width:strokeWidth}});
	    text({x:12, y:14, "dominant-baseline":"middle", "text-anchor":"middle", "font-family":"serif", "font-size":22, "font-style":"italic", "fill":"#aaa"}, "I");
	} else if (n == "<IconUnderline>") {
	    path({class:["line","opacity-50"], d:"M 0 0 h 24 v 24 h -24 Z", stroke:{width:strokeWidth}});
	    text({x:12, y:14, "dominant-baseline":"middle", "text-anchor":"middle", "font-family":"serif", "font-size":22, "text-decoration":"underline", "fill":"#aaa"}, "U");
	} else if (n == "<IconStrikethrough>") {
	    path({class:["line","opacity-50"], d:"M 0 0 h 24 v 24 h -24 Z", stroke:{width:strokeWidth}});
	    text({x:12, y:14, "dominant-baseline":"middle", "text-anchor":"middle", "font-family":"serif", "font-size":22, "text-decoration":"line-through", "fill":"#aaa"}, "S");
	} else if (n == "<IconMonospace>") {
	    path({class:["line","opacity-50"], d:"M 0 0 h 24 v 24 h -24 Z", stroke:{width:strokeWidth}});
	    text({x:12, y:14, "dominant-baseline":"middle", "text-anchor":"middle", "font-family":"monospace", "font-size":22, "fill":"#aaa"}, "M");
	} else if (n == "<IconClearFormat>") {
	    path({class:["line","opacity-50"], d:"M 0 0 h 24 v 24 h -24 Z", stroke:{width:strokeWidth}});
	} else if (n == "<IconSave>") {
	    path({class:["line","opacity-50"], d:"M 3 3 h 14 l 4 4 v 14 h -18 z m 6 0 v 5 h 6 v -5 m 1 18 v -8 h -8 v 8", stroke:{width:strokeWidth}});
	} else if (n == "<KbdLeft>") {
		path({class:["line","opacity-50"], d:"M 16 5 h -8 v 14 h 8", stroke:{width:strokeWidth}});
	} else if (n == "<KbdRight>") {
		path({class:["line","opacity-50"], d:"M 8 5 h 8 v 14 h -8", stroke:{width:strokeWidth}});
	} else if (n == "<KbdCenter>") {
		path({class:["line"], d:"M 5 5 h 14 m -7 0 v 14 m -7 0 h 14", stroke:{width:strokeWidth}});
	} else if (n == "<KbdSplit>") {
		path({class:["line","opacity-50"], d:"M 0 0 h 8 v 8 h -8 Z M 20 0 h -8 v 8 h 8 Z", transform:{translate:[2, 8]}, stroke:{width:strokeWidth}});
	} else if (n == "<KbdJoin>") {
		path({class:["line"], d:"M 3 0 h 14 v 8 h -14 Z", transform:{translate:[2, 8]}, stroke:{width:strokeWidth}});
	} else if (n == "<KbdSmall>") {
		path({class:["line","opacity-50"], d:"M 0 0 h 20 v 14 h -20 Z m 4 0 h 12 v 10 h -12 Z", transform:{translate:[2, 5]}, stroke:{width:strokeWidth}});
	} else if (n == "<KbdFull>") {
		path({class:["line"], d:"M 0 0 h 20 v 14 h -20 Z", transform:{translate:[2, 5]}, stroke:{width:strokeWidth}});
	} else if (n == "<HideLet>") {
		path({class:["line"], d:"M 8 16 l 4 -8 l 4 8 m -1 -2 h -6", stroke:{width:strokeWidth}});
		each(8, function(i) {path({class:["line",isPro ? "" : "opacity-50"], stroke:{width:strokeWidth}, transform:{rotate:[i*45, 12, 12]}}, function(d) {d.Move(0,12).horiz(4);});});
	} else if (n == "<HideDict>") {
		path({class:["line"], d:"M 10 7 v 9 h 6", stroke:{width:strokeWidth}});
		each(8, function(i) {path({class:["line",isPro ? "" : "opacity-50"], stroke:{width:strokeWidth}, transform:{rotate:[i*45, 12, 12]}}, function(d) {d.Move(0,12).horiz(4);});});
	} else if (n == "<ThemeLight>") {
		pathCircle({class:["line","opacity-50"], stroke:{width:strokeWidth}, cx:12, cy:12, r:8});
		each(8, function(i) {path({class:["line"], stroke:{width:strokeWidth}, transform:{rotate:[i*45, 12, 12]}}, function(d) {d.Move(0,12).horiz(4);});});
	} else if (n == "<Theme>") {
	    g({class:["night"]}, function() {
		    pathCircle({class:["line"], stroke:{width:strokeWidth}, cx:12, cy:12, r:8});
		    each(8, function(i) {path({class:["line"], stroke:{width:strokeWidth}, transform:{rotate:[i*45, 12, 12]}}, function(d) {d.Move(0,12).horiz(4);});});
		});
	    g({class:["light"]}, function() {
            path({class:["line"], stroke:{width:strokeWidth}}, function(d) {
                d.Move(12,4).quadratic(5,9,0,18).arc(9,9,0,0,0,0,-18).Zerro();
            });
		});
	} else if (n == "<ThemeNight>") {
		path({class:["line"], stroke:{width:strokeWidth}}, function(d) {
			d.Move(12,4).quadratic(5,9,0,18).arc(9,9,0,0,0,0,-18).Zerro();
		});
	} else if (n == "<Left>" || n == "<TouchLeft>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 20 12 h -14 m 6.5 -7 l -7 7 l 7 7"});
	} else if (n == "<Right>" || n == "<TouchRight>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 4 12 h 14 m -6.5 -7 l 7 7 l -7 7"});
	} else if (n == "<Up>" || n == "<TouchUp>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 12 20 v -14 m -7 6.5 l 7 -7 l 7 7"});
	} else if (n == "<Down>" || n == "<TouchDown>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 12 4 v 14 m -7 -6.5 l 7 7 l 7 -7"});
	} else if (n == "<TouchHomeEnd>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 3 12 h 18 m -13 -5 l -5 5 l 5 5 m 8 -10 l 5 5 l -5 5"});
	} else if (n == "<TouchPage>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 12 3 v 18 m -5 -13 l 5 -5 l 5 5 m -10 8 l 5 5 l 5 -5"});
	} else if (n == "<Touch>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 1 12 a 11 11 0 1 0 22 0 a 11 11 0 1 0 -22 0"});
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 5 12 a 7 7 0 1 0 14 0 a 7 7 0 1 0 -14 0"});
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 9 12 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0"});
	} else if (n == "<Phone>") {
	    g({transform:{scale:[0.95, 0.95]}}, function() {
    		path({class:["fill"], stroke:{width:strokeWidth}, d:"m 17.321292,3.0037456 c -3.019346,-0.9828784 -6.293251,-0.9758073 -9.3196674,0 v 3.1112703 c 0,0.381837 -0.2192031,0.72832 -0.5515433,0.890954 -1.0535891,0.53033 -2.0506096,1.244508 -2.9274221,2.12132 -0.3889087,0.388909 -1.0253048,0.388909 -1.4142135,0 L 0.64064305,6.6594879 c -0.38890873,-0.388909 -0.38890873,-1.025305 0,-1.414214 6.63973265,-6.6397325 17.40189795,-6.6397325 24.04162995,0 0.388909,0.388909 0.388909,1.025305 0,1.414214 L 22.2074,9.1343619 c -0.388909,0.388908 -1.025305,0.388908 -1.414214,0 -0.883883,-0.883884 -1.873833,-1.590991 -2.927422,-2.121321 -0.325269,-0.169705 -0.544472,-0.502046 -0.544472,-0.898025 z"});
	    });
	    g({transform:{scale:[0.8, 0.8], translate:[2.4, 2]}}, function() {
    		path({class:["fill"], stroke:{width:strokeWidth}, d:"M 2 13 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"});
    		path({class:["fill"], stroke:{width:strokeWidth}, d:"M 2 20 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"});
    		path({class:["fill"], stroke:{width:strokeWidth}, d:"M 9 13 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"});
    		path({class:["fill"], stroke:{width:strokeWidth}, d:"M 9 20 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"});
    		path({class:["fill"], stroke:{width:strokeWidth}, d:"M 16 13 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"});
    		path({class:["fill"], stroke:{width:strokeWidth}, d:"M 16 20 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"});
	    })
	} else if (n == "<LetterBlank>") {
		path({class:["line"], stroke:{width:strokeWidth}, fill:"#aaa", d:"M 6 6 h 12 v 16 h -12 z"});
	} else if (n == "<Num>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 5 4 h 15 v 16 h -15 Z m 0 6 h 15 m 0 5 h -15 m 5 5.5 v -10 m 5 -0.5 v 10"});
	} else if (n == "<Space>") {
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 0 7 v 5 h 18 v -5", transform:{translate:[3,8]}});
	} else if (n == "<Sp2>") {
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 0 7 v 3 h 12 v -3", transform:{translate:[6,9]}});
	} else if (n == "<Nbsp>") {
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 6 16 v 3 h 4 m 4 0 h 4 v -3", transform:{translate:[6,9]}});
	} else if (n == "<Exit>") {
		path({class:["line"], transform:{translate:[5,2]}, stroke:{width:strokeWidth}, d:"M 0 11 l 7 7 l 7 -7 h -4.5 v -9 h -5 v 9 Z"});
	} else if (n == "<Kbd>") {
		path({class:["line"], stroke:{width:strokeWidth}, strokeLineJoin:"round", d:"M 2 4.5 h 20 v 15 h -20 Z m 0 5 h 20 m 0 5 h -20 m 5 5.5 v -15 m 5 0 v 10 m 5 5 v -15"});
	} else if (n == "<Mic>") {
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 15 5 a 3,3 0 1,0 -6,0 v 6 a 3,3 0 1,0 6,0 Z"});
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 6 11 a 6,6 0 1,0 12,0 m -6 6 v 4"});
	} else if (n == "<Bsp>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 1.5 12 l 5 -8 h 16.5 v 16 h -16.5 z"});
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 10 8 l 8 8 m -8 0 l 8 -8"});
	} else if (n == "<Ins>") {
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 8 3 l 4 4 l 4 -4 m -4 4 v 10 l 4 4 m -4 -4 l -4 4"});
	} else if (n == "<Del>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 22.5 12 l -5 -8 h -16.5 v 16 h 16.5 z"});
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 6 8 l 8 8 m -8 0 l 8 -8"});
	} else if (n == "<IconSelAll>") {
		path({class:["line","opacity-50"], stroke:{width:strokeWidth}, d:"M 8 8 h 8 v 8 h -8 Z"});
		path({class:["line","opacity-50"], stroke:{width:strokeWidth}, d:"M 5 4 a 1,1 0 0,0 -1,1 m 3 -1 h 2 m 2 0 h 2 m 2 0 h 2 m 3 1 a 1,1 0 0,0 -1,-1 m 1 3 v 2 m 0 2 v 2 m 0 2 v 2 m -1 3 a 1,1 0 0,0 1,-1 m -3 1 h -2 m -2 0 h -2 m -2 0 h -2 m -3 -1 a 1,1 0 0,0 1,1 m -1 -3 v -2 m 0 -2 v -2 m 0 -2 v -2"});
	} else if (n == "<SelAll>") {
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 8 8 h 8 v 8 h -8 Z"});
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 5 4 a 1,1 0 0,0 -1,1 m 3 -1 h 2 m 2 0 h 2 m 2 0 h 2 m 3 1 a 1,1 0 0,0 -1,-1 m 1 3 v 2 m 0 2 v 2 m 0 2 v 2 m -1 3 a 1,1 0 0,0 1,-1 m -3 1 h -2 m -2 0 h -2 m -2 0 h -2 m -3 -1 a 1,1 0 0,0 1,1 m -1 -3 v -2 m 0 -2 v -2 m 0 -2 v -2"});
	} else if (n == "<Cut>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 16 6 v -4 h -13 v 16 h 4"});
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 20 6 h -13 v 16 h 13 Z", style:{fill:"#aaa"}});
	} else if (n == "<IconCut>") {
		path({class:["line","opacity-50"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 16 6 v -4 h -13 v 16 h 4"});
		path({class:["line","opacity-50"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 20 6 h -13 v 16 h 13 Z", style:{fill:"#aaa"}});
	} else if (n == "<IconCopy>") {
		path({class:["line","opacity-50"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 16 6 v -4 h -13 v 16 h 4"});
		path({class:["line","opacity-50"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 20 6 h -13 v 16 h 13 Z"});
	} else if (n == "<Copy>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 16 6 v -4 h -13 v 16 h 4"});
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 20 6 h -13 v 16 h 13 Z"});
	} else if (n == "<IconPaste>") {
		path({class:["line","opacity-50"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 14 3 h 6 v 18 h -16 v -18 h 6"});
		path({class:["line","opacity-50"], stroke:{width:strokeWidth}, d:"M 10 3 a 2,2 0 1,0 4,0 a 2,2 0 1,0 -4,0"});
		path({class:["fill","opacity-50"], stroke:{width:strokeWidth}, d:"M 7 3.5 h 10 v 3 h -10 Z"});
	} else if (n == "<PasteCopy>") {
		path({class:["line"], stroke:{width:strokeWidth, linejoin:"round"}, d:"M 14 3 h 6 v 18 h -16 v -18 h 6"});
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 10 3 a 2,2 0 1,0 4,0 a 2,2 0 1,0 -4,0"});
		path({class:["fill"], stroke:{width:strokeWidth}, d:"M 7 3.5 h 10 v 3 h -10 Z"});
	} else if (n == "<IconClose>") {
		path({class:["line","opacity-50"], transform:{rotate:[45,10.5,0.5], translate:[12,0]}, stroke:{width:strokeWidth}, d:"M 5 0 h 5 v 6 h 6 v 5 h -6 v 6 h -5 v -6 h -6 v -5 h 6 Z"});
	} else if (n == "<Close>") {
		path({class:["line"], transform:{rotate:[45,10.5,0.5], translate:[12,0]}, stroke:{width:strokeWidth}, d:"M 5 0 h 5 v 6 h 6 v 5 h -6 v 6 h -5 v -6 h -6 v -5 h 6 Z"});
	} else if (n == "<KbdMove>") {
		path({class:["line"], transform:{translate:[1,1]}, stroke:{width:strokeWidth}, d:"M 1 9 l 1.5 -1.5 v 3 Z h 16 m 0 0 l -1.5 -1.5 v 3 Z"});
		path({class:["line"], transform:{translate:[1,1]}, stroke:{width:strokeWidth}, d:"M 9 1 l 1.5 1.5 h -3 Z v 16 m 0 0 l 1.5 -1.5 h -3 Z"});
	} else if (n == "<KbdSize>") {
		path({class:["line"], transform:{translate:[4,4]}, stroke:{width:strokeWidth}, d:"M 0 12 l 12 -12 m -3 0 h 3 v 3 Z M 0 9 v 3 h 3 Z"});
	} else if (n == "<SoundOn>") {
		path({class:["line"], stroke:{width:strokeWidth}, d:"M 7 10 h -3 v 4 h 3 l 4 4 v -12 Z"});
		path({class:["line"], stroke:{width:strokeWidth}, d:"m 14,4 c 0,0 5.93,1.93 5.95,7.88 0.02,5.95 -5.95,8.05 -5.95,8.05"});
		path({class:["line"], stroke:{width:strokeWidth}, d:"m 14,9 c 0,0 1.45,0.67 1.45,2.75 0,2.07 -1.45,2.8 -1.45,2.8"});
	} else if (n == "<SoundOff>") {
		path({class:["line","opacity-50"], stroke:{width:strokeWidth}, d:"M 7 10 h -3 v 4 h 3 l 4 4 v -12 Z"});
		path({class:["line","opacity-50"], stroke:{width:strokeWidth}, d:"m 14,8.2 l 7 7 m -7 0 l 7 -7"});
	} else if (n == "<MoveUp>" || n == "<RowPlus>") {
		path({class:["fill2"], stroke:{width:strokeWidth}, transform:{translate:[4,8]}, d:"M 0 4 l 6 -6 l 6 6 Z"});
	} else if (n == "<MoveDown>" || n == "<RowMinus>") {
		path({class:["fill2"], stroke:{width:strokeWidth}, transform:{translate:[4,8]}, d:"M 0 0 l 6 6 l 6 -6 Z"});
	} else if (n == "<MoveLeft>" || n == "<CellMinus>") {
		path({class:["fill2"], stroke:{width:strokeWidth}, transform:{translate:[5,4]}, d:"M 4 0 l -6 6 l 6 6 Z"});
	} else if (n == "<MoveRight>" || n == "<CellPlus>") {
		path({class:["fill2"], stroke:{width:strokeWidth}, transform:{translate:[11,4]}, d:"M 0 0 l 6 6 l -6 6 Z"});
	} else if (n == "<Sort>") {
		path({class:["line"], stroke:{width:strokeWidth*2}, d:"M 12 3 l 3 3 h -6 Z v 18 m 0 0 l 3 -3 h -6 Z"});
	} else if (n == "<Trash>") {
		path({class:["line"], stroke:{width:strokeWidth*2}, d:"M 5.5 5.5 l 13 13 M 18.5 5.5 l -13 13"});
	} else if (n == "<SortUp>") {
		path({class:["line"], stroke:{width:strokeWidth*2}, d:"M 4 16 l 8 -8 l 8 8"});
	} else if (n == "<SortDown>") {
		path({class:["line"], stroke:{width:strokeWidth*2}, d:"M 4 8 l 8 8 l 8 -8"});
	} else if (n == "<Start>") {
		path({class:["line"], stroke:{width:strokeWidth}}, function(d) {
			d.Move(6,2).line(12, 10).line(-12, 10).zerro();
		});
	}
}
function square(x, y) {
	var offset = 3.5;
	var w = 100;
	var h = w;
    rect({class:["square"], x:x*w+offset*2, y:y*h+offset*2, width:w-offset*2, height:h-offset*2, rx:10, ry:10});
}
var l = null;
var accutes = {
    "<AccuteTilde>":String.fromCharCode(0x0303),
    "<AccuteGrave>":String.fromCharCode(0x0300),
    "<AccuteAcute>":String.fromCharCode(0x0301),
    "<AccuteBreve>":String.fromCharCode(0x0306),
    "<AccuteOgonek>":String.fromCharCode(0x0308),
    "<AccuteUmlaut>":String.fromCharCode(0x0308),
    "<AccuteCircumflex>":String.fromCharCode(0x0302),
    "<AccuteHachek>":String.fromCharCode(0x030C),
    "<AccuteCedilla>":String.fromCharCode(0x0327),
    "<AccuteDot>":String.fromCharCode(0x0307),
    "<AccuteHuyen>":String.fromCharCode(0x0300),
    "<AccuteHoi>":String.fromCharCode(0x0309),
    "<AccuteNga>":String.fromCharCode(0x0303),
    "<AccuteSac>":String.fromCharCode(0x0301),
    "<AccuteNang>":String.fromCharCode(0x0323),
    "<AccuteYo>":String.fromCharCode(0x0308),
    "<AccuteYi>":String.fromCharCode(0x0304),
    "<AccuteYu>":String.fromCharCode(0x0326),
    "<AccuteYt>":String.fromCharCode(0x046c),
};
function hLabel(x, y, pos, txt, fontSize, color) {
    if (! txt) return;
    if (! fontSize) fontSize = 30;
    if (! color) color = "#000";
	var offset = 3.5;
	var w = 100;
	var h = w;
    var offsetPos = {
        t:[1/2, 1/5],
        tl:[1/5, 1/5],
        tr:[4/5, 1/5],
        b:[1/2, 4/5],
        bl:[1/5, 4/5],
        br:[4/5, 4/5],
        l:[1/4, 1/2],
        c:[1/2, 1/2],
        r:[3/4, 1/2],
        l2:[1/2 - 1/16, 1/2],
        r2:[1/2 + 1/16, 1/2],
        l32:[1/10, 1/2],
        r32:[9/10, 1/2],
    };
    var offsetX = offsetPos[pos][0];
    var offsetY = offsetPos[pos][1];
    txt = txt.replace("<Vert>", "|");
    txt = txt.replace("<Lt>", "<");
    txt = txt.replace("<Rt>", ">");
    if (txt && txt.match(/\<.+\>/)) {
		if (accutes[txt]) {
			var c = accutes[txt];
			if (c.charCodeAt() >= 0x0300 && c.charCodeAt() <= 0x36f) {
				iconGroup("<LetterBlank>", x*w+offset+offsetX*w, y*h+offset+offsetY*h, 20);
				c = String.fromCharCode(0x2007) + c;
				color = '#000';
			} else {
				color = '#ccc';
			}
			text({x:x*w+offset+offsetX*w, y:y*h+offset+offsetY*h, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":fontSize, "fill":color}, c);
		} else {
			if (repl) each(repl, function(val, key) {if (txt == key) txt = val;});
			if (txt.substr(0,3) == "<LL") {
				text({x:x*w+offset+offsetX*w, y:y*h+offset+offsetY*h, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":fontSize, "fill":color}, txt.substr(3, 2));
			} else {
				iconGroup(txt, x*w+offset+offsetX*w, y*h+offset+offsetY*h, 20, color ? {opacity:0.5} : null);
			}
		}
        txt = "";
    } else if (txt.length == 3 && txt.substr(0, 1) == "(" && txt.substr(txt.length - 1, 1) == ")") {
        txt = String.fromCharCode(0x25cc) + txt.substr(1, 1);
    }
    if (txt) {
        if (repl.textUpperCase) txt = txt.toUpperCase();
        if (txt.length == 2) txt = txt.substr(0, 1)+" "+txt.substr(1);
        text({x:x*w+offset+offsetX*w, y:y*h+offset+offsetY*h, "dominant-baseline":"middle", "text-anchor":"middle", "font-size":fontSize, "fill":color}, txt);
    }
}
function hbutton(x,y,i) {
    square(x, y);
    var isCenter = l[i].c && ! accutes[l[i].c] && l[i].c != "<Close>";
    hLabel(x, y, 'l', l[i].l, isCenter ? 24 : null, isCenter ? '#666' : null);
    hLabel(x, y, 'c', l[i].c);
    hLabel(x, y, 'r', l[i].r, isCenter ? 24 : null, isCenter ? '#666' : null);
    hLabel(x, y, 'l2', l[i].l2, 24, '#AAA');
    hLabel(x, y, 'r2', l[i].r2, 24, '#AAA');
    hLabel(x, y, 'l32', l[i].l32, 24, '#AAA');
    hLabel(x, y, 'r32', l[i].r32, 24, '#AAA');
    hLabel(x, y, 't', l[i].t, 20, '#888');
    hLabel(x, y, 'tl', l[i].tl, 20, '#888');
    hLabel(x, y, 'tr', l[i].tr, 20, '#888');
    hLabel(x, y, 'b', l[i].b, 20, '#888');
    hLabel(x, y, 'bl', l[i].bl, 20, '#888');
    hLabel(x, y, 'br', l[i].br, 20, '#888');
}
function lines(line, y, s) {
    if (y > 0 && ((s === null && y < 8) || (s !== null && y < 4))) {
        each(line.split("|"), function(btn, x) {
            if (x > 0 && x <= 5) {
                var i = x - 1;
                var rowLetter = false;
                var rowTop = false;
                var rowBottom = false;
                if (s !== null) {
                    if (y > 1) i += 5;
                    if (y > 2) i += 5;
                    rowLetter = true;
                } else {
                    if (y > 2) i += 5;
                    if (y > 5) i += 5;
                    if (y == 1 || y == 4 || y == 7) rowLetter = true;
                    else if (y == 2 || y == 5) rowBottom = true;
                    else if (y == 3 || y == 6) rowTop = true;
                }
                var a = l[i];
                var p = btn.split(" ");
                if (rowLetter) {
                    if (p.length == 1 && p[0] != "") {
                        a.c = p[0];
                    } else if (p.length == 2) {
                        if (p[0]) a.l = p[0];
                        if (p[0].length == 2) {
                            a.l2 = a.l.substr(1);
                            a.l = a.l.substr(0, 1);
                        }
                        if (p[1]) a.r = p[1];
                        if (p[1].length == 2) {
                            a.r2 = a.r.substr(0, 1);
                            a.r = a.r.substr(1);
                        }
                    } else if (p.length >= 3) {
                        if (p[0]) a.l = p[0];
                        if (p[1]) a.c = p[1];
                        if (p[2]) a.r = p[2];
                        if (p[0].length == 2) {
                            a.l32 = a.l.substr(1);
                            a.l = a.l.substr(0, 1);
                        }
                        if (p[2].length == 2) {
                            a.r32 = a.r.substr(0, 1);
                            a.r = a.r.substr(1);
                        }
                    }
                } else if (rowBottom) {
                    if (p[0]) a.bl = p[0];
                    if (p[1]) a.b = p[1];
                    if (p[2]) a.br = p[2];
                } else if (rowTop) {
                    if (p[0]) a.tl = p[0];
                    if (p[1]) a.t = p[1];
                    if (p[2]) a.tr = p[2];
                }
            }
        });
    }
}
var repl = null;
function ibutton(x,y,i) {
    hLabel(x, y, 'l', l[i].l, null, true);
    hLabel(x, y, 'c', l[i].c, null, true);
    hLabel(x, y, 'r', l[i].r, null, true);
}
function icons(layout) {
    l = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
	each(layout.split("\n"), function(line, y) {lines(line, y, null);});
	each(5, function(i) {ibutton(i, -0.3, i);});
	each(5, function(i) {ibutton(i, 1.3, i+5);});
	each(5, function(i) {ibutton(i, 2.3, i+5+5);});
}
function hlider(r, layout, layout2) {
    if (! r) r = {};
    if (! layout) layout = i18n.layout;
    if (! layout2 && layout2 !== false) layout2 = layout_symbols;
    repl = r;
    l = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
	if (layout2 == layout_typographic) {
		each(layout2.split("\n"), function(line, y) {lines(line, y, null);});
		each(layout.split("\n"), function(line, y) {if (y > 3) lines(line, y - 3, layout2);});
	} else if (layout2) {
		each(layout2.split("\n"), function(line, y) {lines(line, y, null);});
		each(layout.split("\n"), function(line, y) {lines(line, y, layout2);});
	} else {
		each(layout.split("\n"), function(line, y) {lines(line, y, null);});
	}
	each(5, function(i) {hbutton(i, 0, i);});
	each(5, function(i) {hbutton(i, 1, i+5);});
	each(5, function(i) {hbutton(i, 2, i+5+5);});
}
var theme;
var page;
function vSeparator() {
	div({class:["text-center","my-3"]}, function() {svg({width:50, height:68.75, viewBox:[0,-80,120,75]}, function() {
      path({class:["vseparator"],d:"M64.34375,-39.28125Q67.859375,-33.03125,72.53125,-29.90625Q77.203125,-26.796875,83.109375,-26.796875Q90.21875,-26.796875,94.71875,-31.53125Q99.21875,-36.265625,99.21875,-43.640625Q99.21875,-50.71875,95.0625,-55.421875Q90.921875,-60.125,84.65625,-60.125Q78.96875,-60.125,74.359375,-55.453125Q69.75,-50.796875,64.34375,-39.28125ZM55.765625,-46.78125Q52.3125,-52.96875,47.640625,-56.046875Q42.96875,-59.140625,36.984375,-59.140625Q29.890625,-59.140625,25.390625,-54.46875Q20.890625,-49.8125,20.890625,-42.4375Q20.890625,-35.359375,25.03125,-30.65625Q29.1875,-25.953125,35.4375,-25.953125Q41.140625,-25.953125,45.734375,-30.578125Q50.34375,-35.21875,55.765625,-46.78125ZM60.75,-33.96875Q55.765625,-24.40625,50.3125,-19.96875Q44.859375,-15.546875,38.1875,-15.546875Q28.6875,-15.546875,22.109375,-23.40625Q15.546875,-31.28125,15.546875,-42.859375Q15.546875,-55.15625,21.40625,-62.734375Q27.28125,-70.328125,36.703125,-70.328125Q43.40625,-70.328125,48.671875,-66Q53.953125,-61.671875,59.21875,-51.78125Q64,-61.46875,69.546875,-66.0625Q75.109375,-70.671875,81.921875,-70.671875Q91.265625,-70.671875,97.90625,-62.734375Q104.5625,-54.796875,104.5625,-43.140625Q104.5625,-30.921875,98.6875,-23.375Q92.8125,-15.828125,83.390625,-15.828125Q76.71875,-15.828125,71.546875,-19.9375Q66.375,-24.046875,60.75,-33.96875Z"});
	});});
}
function hSeparator() {
	div({class:["text-center","my-5"]}, function() {svg({width:"100%", height:40, viewBox:[0,0,72,4]}, function() {
        path({class:["hseparator"],d:"m 2.5860997,1.045824 c 0,0 -1.83714599,-0.14643999 -1.80108699,1.11398 0.03606,1.26041 2.92372109,1.34707 11.67604729,1.1017843 C 21.213386,3.0163026 27.9714,2.2991287 31.481445,1.9585476 34.991491,1.6179664 35.541015,1.1844881 37.925947,0.79776294 40.310879,0.41103779 40.109774,3.5793378 37.95346,3.162564 35.797146,2.7457902 32.213075,1.2785904 30.086731,0.98881401 27.960387,0.69903757 27.515752,3.4982796 30.060531,3.269694 32.60531,3.0411084 31.846679,2.8056891 36.806664,1.9001471 41.766649,0.99460508 51.577744,0.94026951 59.268098,0.79765971 c 7.690354,-0.1426098 11.962049,0.0118364 12.07113,1.15347429 0.109081,1.1416378 -1.552948,1.22808 -1.552948,1.22808"});
	});});
}
function back() {
    if (page == "hlider") {
        app.exit();
    } else {
		start();
    }
}
var slayouts = null;
var appDebug = {
    exit: function() {
		window.location.href = "../download_"+i18n.code;
	},
    installDict: function(lang) {
        window.location.href = "../download_"+lang;
    },
    loadPro: function() {return true;},
    selectAccount: function(code) {console.log("Select Account: ", code);},
    activateAccount: function(key) {console.log("Activate:", key); return "";},
    loadTheme: function() {return "LIGHT";},
    saveTheme: function(theme) {console.log("Theme", theme);},
    loadLayouts: function() {
        if (slayouts === null) {
            slayouts = i18n.loadLayouts;
        }
        return slayouts;
    },
    saveLayouts: function(l) {slayouts = l; console.log("Layouts", l);},
    loadArrows: function() {return "org.telegram"},
    saveArrows: function(text) {console.log("Arrows", text);},
    loadHint: function() {return false;},
    saveHint: function(hint) {console.log("HideHint", hint);},
    loadPath: function() {return false;},
    savePath: function(path) {console.log("HidePath", path);},
    loadEditor: function() {return "";},
    saveEditor: function(text) {console.log("Editor", text);},
    loadDict: function() {return "";},
    saveDict: function(text) {console.log("Dict", text);},
    loadDop: function() {return "";},
    saveDop: function(text) {console.log("Dop", text);},
    loadColors: function() {return "";},
    saveColors: function(text) {console.log("Colors", text);},
    loadKeyboards: function() {return "com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME\ncom.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME Gboard\ncom.google.android.googlequicksearchbox/com.google.android.voicesearch.ime.VoiceInputMethodService Google Voice Typing"},
    saveKeyboard: function(keyboard) {console.log("Keyboard", keyboard);},
    loadVoices: function() {return "com.google.android.googlequicksearchbox/com.google.android.voicesearch.ime.VoiceInputMethodService\ncom.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME Gboard\ncom.google.android.googlequicksearchbox/com.google.android.voicesearch.ime.VoiceInputMethodService Google Voice Typing";},
    saveVoice: function(voice) {console.log("Voice", voice);},
    loadStream: function() {return "NOTIFICATION";},
    saveStream: function(stream) {console.log("Stream", stream);},
    loadBold: function() {return false;},
    saveBold: function(bold) {console.log("Bold", bold);},
    loadCapitalization: function() {return false;},
    saveCapitalization: function(value) {console.log("HideCapitalization", value);},
    loadCorrect: function() {return true;},
    saveCorrect: function(value) {console.log("HideCorrect", value);},
    loadDouble: function() {return false;},
    saveDouble: function(value) {console.log("Double", value);},
    loadVibrate: function() {return 0;},
    saveVibrate: function(vibrate) {console.log("Vibrate", vibrate);},
    checkVibrate: function(vibrate) {console.log("Check vibrate", vibrate);},
    loadSlide: function() {return 3;},
    saveSlide: function(slide) {console.log("Slide", slide);},
    loadLongTap: function() {return 700;},
    saveLongTap: function(longTap) {console.log("LongTap", longTap);},
    settingsIME: function() {console.log("settingsIME");},
    settingsKBD: function() {console.log("settingsKBD");},
};
var isNight = false;
var isPro = false;
var vibrate = null;
var vibrateText = null;
var slide = null;
var slideText = null;
var longTap = null;
var longTapText = null;
var list = null;
var sel = null;
var add = null;
var del = null;
var check = null;
var editor = null;
var dict = null;
var dop = null;
function radio(t) {
    div({class:["form-check"]}, function() {
        var id = t.name+"_"+t.value;
        var checked = t.checked ? true : false;
        input({class:["form-check-input"], type:"radio", id:id, checked:checked, name:t.name, value:t.value, onchange: function(e) {
            for (var node of all("."+t.name)) {
                hide(node);
            }
            show(getid("slide_"+e.target.attributes["id"].value));
            for (var node of all(".slide_"+e.target.attributes["id"].value)) {
                show(node);
            }
        }});
        label({class:["form-check-label"], for:id}, t.label);
    });
}
function checkboxHideHint(t) {
    var isHint = app.loadHint();
    div({class:["form-check","form-switch","mb-4"]}, function() {
        input({class:["form-check-input"], type:"checkbox", role:"switch", id:"hide_hint", checked:isHint, onchange: function() {
            app.saveHint(this.checked);
            check.focus();
        }});
        label({class:["form-check-label"], for:"hide_hint"}, t.label);
    });
}
function checkboxHidePath(t) {
    var isPath = app.loadPath();
    div({class:["form-check","form-switch","mb-4"]}, function() {
        input({class:["form-check-input"], type:"checkbox", role:"switch", id:"hide_path", checked:isPath, onchange: function() {
            app.savePath(this.checked);
            check.focus();
        }});
        label({class:["form-check-label"], for:"hide_path"}, t.label);
    });
}
function checkboxShowBold(t) {
    var isBold = app.loadBold();
    div({class:["form-check","form-switch","mb-4"]}, function() {
        input({class:["form-check-input"], type:"checkbox", role:"switch", id:"show_bold", checked:isBold, onchange: function() {
            app.saveBold(this.checked);
            check.focus();
        }});
        label({class:["form-check-label"], for:"show_bold"}, t.label);
    });
}
function checkboxHideCapitalization(t) {
    var isCapitalization = app.loadCapitalization();
    div({class:["form-check","form-switch","mb-4"]}, function() {
        input({class:["form-check-input"], type:"checkbox", role:"switch", id:"hide_capitalization", checked:isCapitalization, onchange: function() {
            app.saveCapitalization(this.checked);
            check.focus();
        }});
        label({class:["form-check-label"], for:"hide_capitalization"}, t.label);
    });
}
function checkboxCorrect(t) {
    var isCorrect = ! app.loadCorrect();
    div({class:["form-check","form-switch","mb-4"]}, function() {
        input({class:["form-check-input"], type:"checkbox", role:"switch", id:"hide_correct", checked:isCorrect, onchange: function() {
            app.saveCorrect(! this.checked);
            check.focus();
        }});
        label({class:["form-check-label"], for:"hide_correct"}, t.label);
    });
}
function checkboxDouble(t) {
    var isDouble = app.loadDouble();
    div({class:["form-check","form-switch","mb-4"]}, function() {
        input({class:["form-check-input"], type:"checkbox", role:"switch", id:"double", checked:isDouble, onchange: function() {
            app.saveDouble(this.checked);
            check.focus();
        }});
        label({class:["form-check-label"], for:"double"}, t.label);
    });
}
function rangeVibrate(t) {
    div({class:["card","mb-3"]}, function() {
        div({class:["card-body"]}, function() {
            label({for:"vibrate", class:["form-label"], onclick: function(e) {
                vibrate.value = 0;
                vibrateText.nodeValue = 0;
                app.saveVibrate(parseInt(vibrate.value));
            }}, function() {
                text(t.label + " (");
                vibrateText = text(app.loadVibrate());
                text(" " + t.ms + "):");
            });
            vibrate = input({type:"range", class:["form-range","text-secondary"], id:"vibrate", min:0, max:60, step:1, value:app.loadVibrate(), oninput: function(e) {
                vibrateText.nodeValue = e.target.value;
            }, onchange: function(e) {
                app.saveVibrate(parseInt(e.target.value));
            }});
            div({class:["text-end"]}, function() {
                button({class:["btn","btn-outline-secondary","mt-2"], onclick: function(e) {
                    app.checkVibrate(parseInt(vibrate.value));
                }}, t.test);
            });
        });
    });
}
function rangeSlide(t) {
    div({class:["card","mb-3"]}, function() {
        div({class:["card-body"]}, function() {
            label({for:"slide", class:["form-label"], onclick: function(e) {
                slide.value = 3;
                slideText.nodeValue = 3;
                app.saveSlide(parseInt(slide.value));
            }}, function() {
                text(t.label + " (");
                slideText = text(app.loadSlide());
                text("/12 " + t.size + "):");
            });
            slide = input({type:"range", class:["form-range","text-secondary"], id:"slide", min:1, max:6, step:1, value:app.loadSlide(), oninput: function(e) {
                slideText.nodeValue = e.target.value;
            }, onchange: function(e) {
                app.saveSlide(parseInt(e.target.value));
            }});
        });
    });
}
function rangeLongTap(t) {
    div({class:["card","mb-3"]}, function() {
        div({class:["card-body"]}, function() {
            label({for:"longTap", class:["form-label"], onclick: function(e) {
                longTap.value = 700;
                longTapText.nodeValue = 700;
                app.saveLongTap(parseInt(longTap.value));
            }}, function() {
                text(t.label + " (");
                longTapText = text(app.loadLongTap());
                text(" " + t.ms + "):");
            });
            longTap = input({type:"range", class:["form-range","text-secondary"], id:"longTap", min:0, max:1200, step:50, value:app.loadLongTap(), oninput: function(e) {
                longTapText.nodeValue = e.target.value;
            }, onchange: function(e) {
                app.saveLongTap(parseInt(e.target.value));
            }});
            div(t.hint);
        });
    });
}
function listStream(list) {
    select({class:["form-select"], onchange: function(e) {
        app.saveStream(e.target.value);
    }}, function() {
        var stream = app.loadStream();
        for (var name in list) {
            var title = list[name];
            option({value:name, selected:name==stream}, title);
        }
    });
}
function listVoices(t) {
    p(function() {
        div({class:["mb-1"]}, function() {
            if (t.icon) {
                iconSvg(t.icon);
                text(" ");
            }
            text(t.label);
        });
        select({class:["form-select"], onchange: function(e) {
            app.saveVoice(e.target.value);
        }}, function() {
            var voices = app.loadVoices().split("\n");
            option({value:""}, t.option);
            var voice = voices[0];
            for (var i=1; i<voices.length; i++) {
                var item = voices[i];
                var pos = item.indexOf(" ");
                if (pos >= 0) {
                    var name = item.substr(0, pos).trim();
                    var title = item.substr(pos + 1).trim();
                    option({value:name, selected:name==voice}, title);
                }
            }
        });
    });
}
function listKeyboards(t) {
    p(function() {
        div({class:["mb-1"]}, function() {
            if (t.icon) {
                iconSvg(t.icon);
                text(" ");
            }
            text(t.label);
        });
        select({class:["form-select"], onchange: function(e) {
            app.saveKeyboard(e.target.value);
        }}, function() {
            var keyboards = app.loadKeyboards().split("\n");
            option({value:""}, t.option);
            var keyboard = keyboards[0];
            for (var i=1; i<keyboards.length; i++) {
                var item = keyboards[i];
                var pos = item.indexOf(" ");
                if (pos >= 0) {
                    var name = item.substr(0, pos).trim();
                    var title = item.substr(pos + 1).trim();
                    option({value:name, selected:name==keyboard}, title);
                }
            }
        });
    });
}
function listLayers(t) {
    var myLayouts = {};
    var l0 = app.loadLayouts().split("\n");
    var l1 = l0[0].split(",");
    for (var i in l0) {
        var item = l0[i];
        var pos = item.indexOf(":");
        if (pos >= 0) {
            var name = item.substr(0, pos).trim();
            var title = item.substr(pos + 1).trim();
            myLayouts[name] = title;
        }
    }
    for (var i in allLayouts) {
        myLayouts[i] = allLayouts[i];
    }
	var layouts = [];
	for (var l in l1) {
	    if (myLayouts[l1[l]]) layouts.push(l1[l]);
	}
    return div(function() {
        ul({class:["list-group","mb-3"]}, function() {
            each(layouts, function(l, i) {
                if (myLayouts[l]) li({class:["list-group-item"]}, function() {
                    button({class:["select-sort","d-flex","align-items-center","w-100","px-2","py-1","text-start","border-0","bg-transparent"], onclick: function() {
                        if (layouts.length > 1) {
                            if (sel !== null) {
                                if (i != sel) {
                                    var l = layouts.splice(sel, 1);
                                    layouts.splice(i, 0, l[0]);
                                    app.saveLayouts(layouts.join(","));
                                }
                                replace(list, function() {list = listLayers(t);});
                                sel = null;
                            } else {
                                hide(add);
                                show(del);
                                sel = i;
                                each(all("button.select-sort", list), function(el, i) {
                                    if (i < sel) append(el, function() {iconSvg("<SortUp>");})
                                    else if (i > sel) append(el, function() {iconSvg("<SortDown>");})
                                    else append(el, function() {iconSvg("<Sort>");})
                                });
                            }
                        }
                    }}, function() {
                        span({class:["flex-grow-1"]}, myLayouts[l]);
                    });
                });
            });
            add = li({class:["list-group-item","rounded-bottom"]}, function() {
                select({class:["select-add","form-select","border-0","px-2","py-1"], onchange: function(e) {
                    layouts.splice(0, 0, this.value);
                    app.saveLayouts(layouts.join(","));
                    replace(list, function() {list = listLayers(t);});
                    sel = null;
                }}, function() {
                    option({selected:"selected", value:""}, t.add);
                    each(myLayouts, function(l, i) {option({value:i, disabled:layouts.indexOf(i) >= 0}, l);});
                });
            });
            del = li({class:["list-group-item"], style:{display:"none"}}, function() {
                button({class:["d-flex","align-items-center","w-100","px-2","py-1","text-start","border-0","bg-transparent"], onclick: function() {
                    layouts.splice(sel, 1);
                    app.saveLayouts(layouts.join(","));
                    replace(list, function() {list = listLayers(t);});
                    sel = null;
                }}, function() {
                    span({class:["flex-grow-1"]}, t.delete);
                    if (layouts.length > 1) iconSvg("<Trash>");
                });
            });
        });
        if (layouts.length > 1) p(t.hint);
    });
}
function listStart(t) {
    p(t.text);
    ol({class:["list-group","list-group-numbered"]}, function() {
        li({class:["list-group-item","mb-4"]}, function() {
            span(t.on);
            br();
            var btn = button({class:["btn","btn-outline-secondary","btn-sm","float-end"], onclick: function() {
                app.settingsIME();
            }}, function() {
                text(t.onBtn);
            });
        });
        p(t.text2);
        li({class:["list-group-item"]}, function() {
            span(t.method);
            br();
            button({class:["btn","btn-outline-secondary","btn-sm","float-end"], onclick: function() {
                app.settingsKBD();
            }}, function() {
                text(t.methodBtn);
            });
        });
    });
    p({class:["mt-3"]}, t.remark);
}
function changeTheme() {
    isNight = !isNight;
    app.saveTheme(isNight ? "NIGHT" : "LIGHT");
    doc.body.classList.toggle("night", isNight);
    replace(theme, function() {theme = isNight ? iconSvg("<ThemeLight>") : iconSvg("<ThemeNight>");});
}
var arrows = null;
function layoutArrows(t) {
    p(function() {
        arrows = textarea({class:["form-control"], rows:3}, app.loadArrows());
    });
    div({class:["d-flex","justify-content-end"]}, function() {
        button({class:["btn","btn-outline-secondary"], onclick: function(e) {
            app.saveArrows(arrows.value);
            check.focus();
        }}, t.save);
    });
}
function layoutList() {
    text(app.loadLayouts().split("\n")[0].split(",").join(", "));
}
function layoutEditor(t) {
    p(function() {
        editor = textarea({class:["form-control","font-monospace"], rows:8, maxlength:100*1024, placeholder:"EN:\n|q w|e r|t y|u i|o p|\n|a s|d f|g h|j k|l |\n|z x|c v| <Space> |b n|m |"}, app.loadEditor());
    });
    div({class:["d-flex","justify-content-end"]}, function() {
        button({class:["btn","btn-outline-secondary"], onclick: function(e) {
            app.saveEditor(editor.value);
            check.focus();
        }}, t.save);
    });
}
function dictEditor(t) {
    p(function() {
        dict = textarea({class:["form-control","font-monospace"], rows:8, maxlength:100*1024, placeholder:"EN:\nhello\nhlider\nworld"}, app.loadDict());
    });
    div({class:["d-flex","justify-content-end"]}, function() {
        button({class:["btn","btn-outline-secondary"], onclick: function(e) {
            app.saveDict(dict.value);
            check.focus();
        }}, t.save);
    });
}
function dopEditor(t) {
    p(function() {
        dop = textarea({class:["form-control","font-monospace"], rows:8, maxlength:100*1024, placeholder:"EN:\nh hello world"}, app.loadDop());
    });
    div({class:["d-flex","justify-content-end"]}, function() {
        button({class:["btn","btn-outline-secondary"], onclick: function(e) {
            app.saveDop(dop.value);
            check.focus();
        }}, t.save);
    });
}
function colorEditor(t) {
    p(function() {
        colors = textarea({class:["form-control","font-monospace"], rows:8, maxlength:100*1024, placeholder:"bg #CCCCCC\nbgDark #FFFFFF22"}, app.loadColors());
    });
    div({class:["d-flex","justify-content-end"]}, function() {
        button({class:["btn","btn-outline-secondary"], onclick: function(e) {
            app.saveColors(colors.value);
            check.focus();
        }}, t.save);
    });
}
function payAccounts(t) {
    p({class:["text-end"]}, function() {
        button({class:["btn","btn-outline-secondary"], onclick:function() {
            app.selectAccount(i18n.code == "ru" ? 2 : 1);
        }}, t.select);
    });
}
function payActivate(t) {
	var error = null;
	var key = textarea({class:["form-control","mb-3"], rows:3, placeholder:t.key, onfocus:function() {hide(error);}}, "");
	error = div({class:["alert","alert-danger"], style:{display:"none"}}, t.error);
	p({class:["text-end"]}, function() {
		button({class:["btn","btn-outline-secondary"], onclick:function() {
			if (key.value != "") {
				var account = true; /* app.activateAccount(key.value); */
				//if (account) {
				    activateSuccess(t.success1, account, t.success2);
			//	} else {
				    show(error);
				//}
			}
		}}, t.activate);
	});
}
function activateSuccess(text1, account, text2) {
	i18n.pagePay = function() {
		p(function() {
			text(text1);
			strong(account);
			text(text2);
		});
	};
	start('pay');
}
function layoutExample(t) {
    p(function() {
        textarea({class:["form-control","font-monospace","opacity-75"], onchange:function() {this.value=this.defaultValue;}, rows:8}, function() {
            text(t);
        });
    });
}
function colorsExample(t) {
    p(function() {
        textarea({class:["form-control","font-monospace","opacity-75"], onchange:function() {this.value=this.defaultValue;}, rows:8}, function() {
            text(t);
        });
    });
}
function colorFix(t) {
	p(t.hint);
	textarea({class:["form-control","font-monospace","opacity-75"], onchange:function() {this.value=this.defaultValue;}, rows:2}, "sym #888888\nsymDark #888888");
}

function start(pageName) {
    if (! pageName) pageName = "hlider";
	if (doc.body.replaceChildren) doc.body.replaceChildren();
	else doc.body.innerHTML = "";
	page = pageName;
	if (typeof(app) === "undefined") window.app = appDebug;
	isPro = app.loadPro();
	isNight = (app.loadTheme() == "NIGHT");
	if (isNight) doc.body.classList.add("night");
	div({id:"menu", class:["position-fixed","w-100","mt-0","shadow"]}, function() {
		nav({class:["d-flex"]}, function() {
			button({id:"menuPage", class:["nav-item","p-2","pe-4","border-0","bg-transparent"], onclick: function(e) {
				e.preventDefault();
				e.stopPropagation();
				back();
			}, ontouchstart: function(e) {
				e.preventDefault();
				e.stopPropagation();
				back();
			}}, function() {
				iconSvg("<Back>");
			});
			span({class:["nav-item","p-2","flex-grow-1","text-center","fs-5"]}, i18n[pageName] ? i18n[pageName] : "Hlider " + (isPro ? "Pro" : "Lite"));
			button({class:["nav-item","p-2","ps-4","pe-3","border-0","bg-transparent"], onclick: function(e) {
				e.preventDefault();
				e.stopPropagation();
				changeTheme();
			}, ontouchstart: function(e) {
				e.preventDefault();
				e.stopPropagation();
				changeTheme();
			}}, function() {
				theme = isNight ? iconSvg("<ThemeLight>") : iconSvg("<ThemeNight>");
			});
		});
	});
	pause(0, function() {
		div({class:["container","py-4","maxwide"]}, function() {
		div({class:["py-5"]}, function() {
			if (pageName == "hlider") {
				div({class:["list-group"]}, function() {
					button({class:["list-group-item","list-group-item-action","d-flex","align-items-center","py-3","mb-4"], onclick: function() {start("start");}}, function() {
						iconSvg("<Start>", ["me-2"]);
						text(i18n.start);
					});
					button({class:["list-group-item","list-group-item-action","d-flex","align-items-center","py-3","mb-4"], onclick: function() {start("settings");}}, function() {
						iconSvg("<Lang>", ["me-2"]);
						text(i18n.settings);
					});
					button({class:["list-group-item","list-group-item-action","d-flex","align-items-center","py-3","mb-4"], onclick: function() {start("colors");}}, function() {
						iconSvg("<Colors>", ["me-2"]);
						text(i18n.colors);
					});
					button({class:["list-group-item","list-group-item-action","d-flex","align-items-center","py-3","mb-4"], onclick: function() {start("help");}}, function() {
						iconSvg("<Help>", ["me-2"]);
						text(i18n.help);
					});
					button({class:["list-group-item","list-group-item-action","d-flex","align-items-center","py-3","mb-4"], onclick: function() {start("pro");}}, function() {
						iconSvg("<Nav>", ["me-2"]);
						text(i18n.pro);
					});
					button({class:["list-group-item","list-group-item-action","d-flex","align-items-center","py-3","mb-4"], onclick: function() {start("dict");}}, function() {
						iconSvg("<Dict>", ["me-2"]);
						text(i18n.dict);
					});
					if (! isPro) {
						button({class:["list-group-item","list-group-item-action","d-flex","align-items-center","py-3","mb-4"], onclick: function() {start("pay");}}, function() {
							iconSvg("<Pay>", ["me-2"]);
							text(i18n.pay);
						});
					}
					div(function() {
					    if (i18n.code!="en") a({class:["btn","btn-light","me-2","mb-2"], href:"index.html"}, "en");
					    if (i18n.code!="ru") a({class:["btn","btn-light","me-2","mb-2"], href:"index_ru.html"}, "ru");
					    small({class:["float-end","p-1","text-secondary"]}, "v." + version);
					});
				});
			} else if (pageName == "help") {
				i18n.pageHelp();
			} else if (pageName == "pro") {
				i18n.pagePro();
			} else if (pageName == "pay") {
				i18n.pagePay();
			} else if (pageName == "dict") {
				i18n.pageDict();
			} else if (pageName == "colors") {
				i18n.pageColors();
			} else if (pageName == "settings") {
				i18n.pageSettings();
			} else if (pageName == "start") {
				i18n.pageStart();
			}
		});
		});
		div({class:["position-fixed","w-100"], style:{bottom:0}}, function() {
		    check = textarea({class:["form-control"], style:{height:"2rem"}, placeholder:i18n.kbdCheck});
		});
	});
};

var exampleColors = "bg #CCCCCC\n\
btn #FFFFFFF8\n\
press #FFFFFFCC\n\
shadow #00000033\n\
txt #000000\n\
let #000000AA\n\
sym #00000055\n\
hint #FF8888\n\
path #FF000088\n\
\n\
bgDark #333333\n\
btnDark #555555EE\n\
pressDark #555555BB\n\
shadowDark #000000\n\
txtDark #FFFFFFCC\n\
letDark #FFFFFFAA\n\
symDark #FFFFFF55\n\
hintDark #888800\n\
pathDark #FFFF0088\n\
\n\
[org.telegram]\n\
bg #A2B9CD\n\
bgDark #212D3B\n\
\n\
[com.whatsapp]\n\
bg #77BBAF\n\
bgDark #1F2C34\n\
\n\
[terminal termux ssh]\n\
bg #AAAAAA\n\
bgDark #000000";

var layout_symbols = "SYM:\n\
||||||\n\
| <PasteCopy> <Nav> b2:<Cut> bt:<Copy>|[] 1 !|() 2 @ lp:<HideDict> tb:<HideLet>|{} 3 #|<Del> <Bsp> |\n\
| <SelAll> <Up>|~` 4 $|'\" 5 %|=+ 6 ^|<Lang> <LLla> |\n\
||||||\n\
| <Exit> <Down>|/? 7 &|-_ 8 *|< 9 >|<Conf> <Enter> |\n\
| <Shift> <Undo> t2:<ModAlt> tb:<Caps>|\\<Vert> , ;|: 0 <Tab>|<Left> . <Right> t2l:<WordLeft> t2r:<WordRight>|<Num> <Alt>  t2:<ModCtrl> tb:<ModMeta>|\n\
||   lp:<Kbd> bt:<Kbd>| <Space>  lp:<HideLet> bt:<HideLet>|   lp:<Mic> bt::<Mic>||\n\
";

var layout_modificators = "MOD:\n\
||||||\n\
|<ModOff> <ModAlt> <Nav>|[ 1 |] 2 |<Ins> 3 |<Del> <Bsp> |\n\
|<ModOn> <ModCtrl> <Up>|` 4 |' 5 |= 6 |<Lang> <LLla> |\n\
||||||\n\
|<ModOff> <ModMeta> <Down>|/ 7 |- 8 | 9 |<Conf> <Enter> |\n\
|<ModOff> <ModShift> <Undo>|\\ , ;| 0 <Tab>|<Left> . <Right>|<Num> <Esc> |\n\
||| <Space> |||\n\
";

var layout_settings = "SET:\n\
|<ThemeNight> <ThemeLight>|| <HideDict> ||<SoundOn> <SoundOff>|\n\
||||||\n\
||||||\n\
|<KbdSplit> <KbdJoin>| <KbdLeft> | <KbdCenter> | <KbdRight> |<KbdSmall> <KbdFull>|\n\
||||||\n\
||||||\n\
|| <Kbd> | <HideLet> | <Mic> |<Close>|\n\
";

var layout_typographic = "ALT:\n\
||||||\n\
|  ¡|™ ¹ ‰ b2:‘’<Left>|© ² § b2:“”<Left>|® ³ № b2:«»<Left>|¦ <Bsp> |\n\
| € ¢|‚‘ ⁴ ’|„“ ½ ”|« ⅓ »| <Nbsp> |\n\
||||||\n\
| £ ¥|‹› ∧ ÷|× ¬ –|± ✓ ∞|µ ¶ |\n\
| <Shift> ¿|⟨⟩ ∨ ≈|≠ • —|° ∙ …|π  |\n\
|||||<Close>|\n\
";

var layout_numeric = "NUM:\n\
|*|7|8|9|-|\n\
| <PasteCopy> <Nav>|[] |() |{} |<Del> <Bsp> |\n\
| <SelAll> <Up>||  %|=  |<Lang>  |\n\
|/|4|5|6|<Sp2> + |\n\
| <Exit> <Down>| ||<  >|<Conf> <Enter> |\n\
| <Shift> <Undo>| , ||<Left> . <Right>|<Phone>  |\n\
|0|1| 2 |3|<Close>|\n\
";

var layout_func = "FUN:\n\
| * <NumLock>|7|8|9|<PrintScreen> - |\n\
|<ModOff> <ModAlt> | <F10> | <F11> |<Ins> <F12> |<Del> <Bsp> |\n\
|<ModOff> <ModCtrl> <Up>| <F7> | <F8> | <F9> |<Lang>  |\n\
| / <CapsLock>|4|5|6|<ScrollLock> + |\n\
|<ModOff> <ModMeta> <Down>| <F4> | <F5> | <F6> |<Conf> <Enter> |\n\
|<ModOff> <ModShift> <Undo>| <F1> | <F2> <Tab>|<Left> <F3> <Right>|<Num> <Esc> |\n\
| 0 .|1|2|3|<PauseBreak> <Close> |\n\
";
var layout_nav = "NAV:\n\
| <TouchCS> | <TouchCtrl> <ModOff2>| <TouchPage> | <TouchUp> |<Ins> <Del> |\n\
| <PasteCopy> |||| <Bsp> |\n\
| <SelAll> |||||\n\
| <TouchShift> | <Touch> <ModOff2>| <TouchLeft> | <TouchNav> | <TouchRight> |\n\
|<ModOff> <ModMeta> |||| <Enter> |\n\
|  <Undo>|||| <Esc> |\n\
| <TouchAS> | <TouchAlt> <ModOff2>| <TouchHomeEnd> | <TouchDown> |<Tab> <Close> |\n\
";

var layout_phone = "FON:\n\
|*|1|2|3|-|\n\
| <PasteCopy> <Nav>||()  ||<Del> <Bsp> |\n\
| <SelAll> <Up>|||=+  |<Lang>  |\n\
|0|4|5|6|<Space>|\n\
| <Exit> <Down>|/  |||<Conf> <Enter> |\n\
| <Shift> <Undo>| ,  t2:,<AutoSp>||<Left> . <Right> t2:.<AutoSp> t2lr:<ArrowWord>|<Num>  |\n\
|#|7|8|9|<Close>|\n\
";

var layout_la_hlider = "LA_HLIDER:\n\
| a <AccuteTilde>|<AccuteAcute> o <AccuteGrave>|<AccuteDot> c f|d t g|z s |\n\
| i <AccuteCircumflex>|<AccuteUmlaut> e <AccuteBreve>|p h b|q n k|j r |\n\
| y <AccuteHachek>|<AccuteCedilla> u <AccuteOgonek>||w l v|x m |\n\
";
var layout_en_hlider = "EN_HLIDER:\n\
|s a z|g o d|f c f|d t g|z s a|\n\
|r i j|k e q|p h b|q n k|j r i|\n\
|m y x|v u w||w l v|x m y|\n\
";
var layout_la_onehand = "LA_ONEHAND:\n\
|<Blank> <Blank> <Theme>|<AccuteTilde> a k|n o r|j c <AccuteAcute>|<AccuteGrave> <Bsp> <Blank>|\n\
| <PasteCopy> <Nav>|[] y 1!|() u 2@|{} x 3#|<Del> <Blank> |\n\
| <SelAll> <Up>|~` <Blank> 4$|'\" q 5%|=+ v 6^|<Lang> <LLla> |\n\
||<AccuteCircumflex> i b|l e m|p h <AccuteUmlaut>|<AccuteBreve> <Enter> <Blank>|\n\
| <Exit> <Down>|/? g 7&|-_ f 8*|< w 9>|<Conf> <Blank> |\n\
| <Blank> <Undo>|\\<Vert> , ;|: 0 <Tab>|<Left> . <Right>|<Num> <Alt> |\n\
|<Blank> <Shift> <AccuteHachek>|<AccuteCedilla> s z| <Space> |d t <AccuteDot>|<AccuteOgonek> <Phone> <Blank>|\n\
";
var layout_en_double_onehand = "EN_DOUBLE_ONEHAND:\n\
|<Blank> a k|n o r|j c j|r o n|k a <Blank>|\n\
| <PasteCopy> <Nav>|[] u 1!|() x 2@|{} u 3#|<Del> <Blank> |\n\
| <SelAll> <Up>|~` q 4$|'\" v 5%|=+ q 6^|<Lang> <LLla> |\n\
|<Blank> i b|l e m|p h p|m e l|b i <Blank>|\n\
| <Exit> <Down>|/? f 7&|-_ w 8*|< f 9>|<Conf> <Enter> |\n\
| <Shift> <Undo>|\\<Vert> , ;|: 0 <Tab>|<Left> . <Right>|<Num> <Alt> |\n\
|<Blank> s z|g t d|y <Space> y|d t g|z s <Blank>|\n\
";
var layout_la_hlider_clear = "LA_HLIDER:\n\
|  <Blank>|<Blank>  <Blank>|<Blank>  |||\n\
|  <Blank>|<Blank>  <Blank>||||\n\
|  <Blank>|<Blank>  <Blank>||||\n\
";
var layout_qwerty = "EN:\n\
|q w|e r|t y|u i|o p|\n\
|a s|d f|g  h|j k|l |\n\
|z x|c v||b n|m |\n\
";
var layout_cy_hlider = "CY_HLIDER:\n\
|ү а ь|э о <AccuteYi>|ц к ф|д т г|з с ґ|\n\
|і и ы|ё е <AccuteYo>|п в б|ж н ч|й р (Ӏ)|\n\
|ў я ъ|ю у <AccuteYu>||ш л щ|х м <AccuteYt>|\n\
";
var layout_ru_hlider = "RU_HLIDER:\n\
|с а ь|э о д|ц к ф|д т г|з с а|\n\
|р и ы|ё е ж|п в б|ж н ч|й р и|\n\
|м я ъ|ю у ш||ш л щ|х м я|\n\
";
var layout_cy_onehand = "CY_ONEHAND:\n\
|<Blank> <Blank> <Theme>|ъ а ч|н о р|й к ц| <Bsp> |\n\
| <PasteCopy> <Nav>|[] я 1!|() у 2@|{} х 3#|<Del> <Blank> |\n\
| <SelAll> <Up>|~` ё 4$|'\" ж 5%|=+ щ 6^|<Lang> <LLla> |\n\
|  <AccuteYt>|ы и б|л е м|п в э|<AccuteYi> <Enter> |\n\
| <Exit> <Down>|/? г 7&|-_ ф 8*|< ш 9>|<Conf>  |\n\
| <Blank> <Undo>|\\<Vert> , ;|: 0 <Tab>|<Left> . <Right>|<Num> <Alt> |\n\
| <Shift> <AccuteYu>|ю с з| <Space> |д т ь|<AccuteYo> <Phone> |\n\
";
var layout_ru_double_onehand = "RU_DOUBLE_ONEHAND:\n\
|ь а эч|н о р|йц к цй|р о н|чэ а ь|\n\
| <PasteCopy> <Nav>|[] у 1!|() х 2@|{} у 3#|<Del> <Bsp> |\n\
| <SelAll> <Up>|~` ж 4$|'\" щ 5%|=+ ж 6^|<Lang> <LLla> |\n\
|ы и ёб|л е м|п в п|м е л|бё и ы|\n\
| <Exit> <Down>|/? ф 7&|-_ ш 8*|< ф 9>|<Conf> <Enter> |\n\
| <Shift> <Undo>|\\<Vert> , ;|: 0 <Tab>|<Left> . <Right>|<Num> <Alt> |\n\
|ю с ъз|г т д|я <Space> я|д т г|зъ с ю|\n\
";
var layout_cy_hlider_clear = "CY_HLIDER:\n\
|<Blank>  |  <Blank>|||  <Blank>|\n\
|<Blank>  |  <Blank>|||  <Blank>|\n\
|<Blank>  |  <Blank>|||  <Blank>|\n\
";


var allLayouts = {
    EN: "English",
    EN_DVORAK: "English Dvorak",
    EN_COLEMAK: "English Colemak",
    EN_WORKMAN: "English Workman",
    LA_ABC: "Latin ABCDEF",
    LA_SU: "Latin JCUKEN",
    LA_HLIDER: "Hlider (Latin)",
    EN_HLIDER: "Hlider (English)",
    LA_ONEHAND: "One handed (Latin)",
    EN_DOUBLE_ONEHAND: "Double One handed (English)",
    ZA: "Afrikaans",
    AB: "العربية",
    AM: "Հայկական",
    AZ: "Azərbaycan",
    AZ_HLIDER: "Azərbaycan Hlider",
    BY: "Беларуская",
    BY_HLIDER: "Беларуская Глайдер",
    BA: "Bosanski",
    BA_HLIDER: "Bosanski Hlider",
    BG: "Българска",
    BG_HLIDER: "Българска Глайдер",
    CZ: "Čeština",
    CZ_HLIDER: "Čeština Hlider",
    WE: "Cymraeg",
    WE_HLIDER: "Cymraeg Hlider",
    //HP_HANYU_PINYIN: "汉语拼音 Hànyǔ pīnyīn",
    DK: "Dansk",
    DK_HLIDER: "Dansk Hlider",
    DE: "Deutsch",
    DE_QWERTY: "Deutsch QWERTY",
    DE_NEO2: "Deutsch Neo2",
    DE_HLIDER: "Deutsch Hlider",
    IN: "देवनागरी",
    EE: "Eesti",
    EE_HLIDER: "Eesti Hlider",
    GR: "Ελληνική",
    ES: "Español",
    ES_HLIDER: "Español Hlider",
    EO: "Esperanto",
    EO_QWERTY: "Esperanto QWERTY",
    EO_HLIDER: "Esperanto Hlider",
    FR: "Français",
    FR_QWERTY: "Français QWERTY",
    FR_HLIDER: "Français Hlider",
    KR_HANGUL: "한글 Hangeul",
    IE: "Gaeilge",
    IE_HLIDER: "Gaeilge Hlider",
    HR: "Hrvatski",
    HR_HLIDER: "Hrvatski Hlider",
    IL: "עִבְרִית",
    IS: "Íslenska",
    IS_HLIDER: "Íslenska Hlider",
    IT: "Italiano",
    IT_HLIDER: "Italiano Hlider",
    JP_KANA: "仮名 Kana",
    GE: "ქართული",
    KZ: "Қазақ",
    KZ_HLIDER: "Қазақ Глайдер",
    KZ_LAT: "Qazaq",
    KZ_LAT_HLIDER: "Qazaq Hlider",
    KU: "Kurdî",
    KU_HLIDER: "Kurdî Hlider",
    KG: "Кыргызча",
    KG_HLIDER: "Кыргызча Глайдер",
    LV: "Latviešu",
    LV_HLIDER: "Latviešu Hlider",
    LU: "Lëtzebuergesch",
    LU_HLIDER: "Lëtzebuergesch Hlider",
    LT: "Lietuvių",
    LT_HLIDER: "Lietuvių Hlider",
    HU: "Magyar",
    HU_HLIDER: "Magyar Hlider",
    MT: "Malti",
    MT_HLIDER: "Malti Hlider",
    MD: "Moldova",
    MD_HLIDER: "Moldova Hlider",
    NL: "Nederlands",
    NL_HLIDER: "Nederlands Hlider",
    NZ: "New Zealand (Māori)",
    NZ_HLIDER: "New Zealand (Māori) Hlider",
    NO: "Norsk",
    NO_HLIDER: "Norsk Hlider",
    OC: "Occitan",
    OC_HLIDER: "Occitan Hlider",
    PL: "Polski",
    PL_DVORAK: "Polski Dworak",
    PL_HLIDER: "Polski Hlider",
    RO: "Română",
    RO_HLIDER: "Română Hlider",
    PT: "Português",
    PT_HLIDER: "Português Hlider",
    RU: "Русская",
    PW_RU: "Русская Пароли",
    RU_PHONETIC: "Русская Фонетическая",
    RU_ABC: "Русская Азбука",
    RU_DVORAK: "Русская Дворак",
    CY_HLIDER: "Глайдер (кириллица)",
    RU_HLIDER: "Глайдер (русская)",
    CY_ONEHAND: "Однорукая (кириллица)",
    RU_DOUBLE_ONEHAND: "Двойная однорукая (русская)",
    RU_ALTAY: "Алтайская",
    RU_BASHKIR: "Башкирская",
    RU_KALMYK: "Калмыцкая",
    RU_KOMI: "Коми",
    RU_MARIY: "Марийская",
    RU_NIVKH: "Нивхская",
    RU_OSETIN: "Осетинская",
    RU_TATAR: "Татарская",
    RU_UDMURT: "Удмуртская",
    RU_CHUVASH: "Чувашская",
    RU_YAKUT: "Якутская",
    AL: "Shqip",
    AL_HLIDER: "Shqip Hlider",
    SK: "Slovenčina",
    SK_HLIDER: "Slovenčina Hlider",
    SI: "Slovenščina",
    SI_HLIDER: "Slovenščina Hlider",
    RS: "Српски",
    RS_HLIDER: "Српски Глайдер",
    RS_LAT: "Srpski",
    RS_LAT_HLIDER: "Srpski Hlider",
    SE: "Svenska",
    SE_HLIDER: "Svenska Hlider",
    FI: "Suomi",
    FI_HLIDER: "Suomi Hlider",
    PH: "Tagalog",
    PH_HLIDER: "Tagalog Hlider",
    TJ: "Тоҷикӣ",
    TJ_HLIDER: "Тоҷикӣ Глайдер",
    TR: "Türkçe",
    TR_HLIDER: "Türkçe Hlider",
    TM: "Türkmençe",
    TM_HLIDER: "Türkmençe Hlider",
    UA: "Українська",
    UA_HLIDER: "Українська Глайдер",
    UZ: "Ўзбек",
    UZ_HLIDER: "Ўзбек Глайдер",
    UZ_LAT: "O'zbek",
    UZ_LAT_HLIDER: "O'zbek Hlider",
    VN: "Việt",
    VN_HLIDER: "Việt Hlider",
    WA: "Walon",
    WA_HLIDER: "Walon Hlider",
};
var version = "2.12";