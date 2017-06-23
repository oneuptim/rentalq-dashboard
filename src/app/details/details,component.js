import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'h1': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'h2': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'h3': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'h4': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'h5': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'h6': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'p': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'panel-heading': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'textareaform-control': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'col-md-6': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'btn': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'btn-success': {
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'affix': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'affix + container-fluid': {
    'paddingTop': [{ 'unit': 'px', 'value': 70 }]
  },
  'app-menu': {
    'listStyleType': 'none',
    'marginLeft': [{ 'unit': 'px', 'value': -15 }],
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 25 }],
    'overflow': 'hidden',
    'fontFamily': '"proxima-nova",sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'backgroundColor': '#eee',
    'zIndex': '1',
    'transition': 'all 0.4s ease'
  },
  'app-menu li': {
    'display': 'inline',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'app-menu a': {
    'color': 'black',
    'display': 'inline',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'app-menu li a:hover': {
    'color': 'red',
    'textDecoration': 'none'
  },
  'panel-primary > panel-heading': {
    'color': '#fff',
    'backgroundColor': '#323a45',
    'borderColor': '#323a45',
    'fontWeight': '300',
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'em', 'value': 0.05 }]
  },
  'panel-primary': {
    'borderColor': '#323a45'
  },
  'panel-body': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'nav-side-menu': {
    'overflow': 'auto',
    'fontFamily': '"proxima-nova",sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': '200',
    'backgroundColor': '#323a45',
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 260 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'color': '#fff',
    '<w767': {
      'position': 'relative',
      'width': [{ 'unit': '%H', 'value': 1 }],
      'marginBottom': [{ 'unit': 'px', 'value': 10 }]
    }
  },
  'nav-side-menu brand': {
    'backgroundColor': '#323a45',
    'lineHeight': [{ 'unit': 'px', 'value': 80 }],
    'display': 'block',
    'textAlign': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'marginLeft': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '400'
  },
  'nav-side-menu toggle-btn': {
    'display': 'none'
  },
  'nav-side-menu ul': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 45 }],
    'cursor': 'pointer',
    // .collapsed{
       .arrow:before{
                 font-family: FontAwesome;
                 content: "\f053";
                 display: inline-block;
                 padding-left:10px;
                 padding-right: 10px;
                 vertical-align: middle;
                 float:right;
            }
     }
  },
  'nav-side-menu li': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 45 }],
    'cursor': 'pointer',
    // .collapsed{
       .arrow:before{
                 font-family: FontAwesome;
                 content: "\f053";
                 display: inline-block;
                 padding-left:10px;
                 padding-right: 10px;
                 vertical-align: middle;
                 float:right;
            }
     }
  },
  'nav-side-menu ul :not(collapsed) arrow:before': {
    'fontFamily': 'FontAwesome',
    'content': '"\f078"',
    'display': 'inline-block',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'verticalAlign': 'middle',
    'float': 'right'
  },
  'nav-side-menu li :not(collapsed) arrow:before': {
    'fontFamily': 'FontAwesome',
    'content': '"\f078"',
    'display': 'inline-block',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'verticalAlign': 'middle',
    'float': 'right'
  },
  'nav-side-menu ul active': {
    'borderLeft': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e91e63' }],
    'backgroundColor': '#4f5b69'
  },
  'nav-side-menu li active': {
    'borderLeft': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e91e63' }],
    'backgroundColor': '#4f5b69'
  },
  'nav-side-menu ul sub-menu liactive': {
    'color': '#e91e63'
  },
  'nav-side-menu li sub-menu liactive': {
    'color': '#e91e63'
  },
  'nav-side-menu ul sub-menu liactive a': {
    'color': '#e91e63'
  },
  'nav-side-menu li sub-menu liactive a': {
    'color': '#e91e63'
  },
  'nav-side-menu ul sub-menu li': {
    'backgroundColor': '#181c20',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'nav-side-menu li sub-menu li': {
    'backgroundColor': '#181c20',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'nav-side-menu ul sub-menu li:hover': {
    'backgroundColor': '#020203'
  },
  'nav-side-menu li sub-menu li:hover': {
    'backgroundColor': '#020203'
  },
  'nav-side-menu ul sub-menu li:before': {
    'fontFamily': 'FontAwesome',
    'content': '"\f105"',
    'display': 'inline-block',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'verticalAlign': 'middle'
  },
  'nav-side-menu li sub-menu li:before': {
    'fontFamily': 'FontAwesome',
    'content': '"\f105"',
    'display': 'inline-block',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'verticalAlign': 'middle'
  },
  'nav-side-menu li': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'borderLeft': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2e353d' }]
  },
  'nav-side-menu li a': {
    'textDecoration': 'none',
    'color': '#e1ffff'
  },
  'nav-side-menu li a i': {
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'paddingRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'nav-side-menu li:hover': {
    'borderLeft': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e91e63' }],
    'backgroundColor': '#4f5b69',
    'WebkitTransition': 'all 1s ease',
    'MozTransition': 'all 1s ease',
    'OTransition': 'all 1s ease',
    'MsTransition': 'all 1s ease',
    'transition': 'all 1s ease'
  },
  'fa': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'col-md-12': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'table > tbody > tr > td': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.42857143 }],
    'verticalAlign': 'top',
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'application-btns': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'dropdown-menu': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1000',
    'float': 'left',
    'minWidth': [{ 'unit': 'px', 'value': 214 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'textAlign': 'left',
    'listStyle': 'none',
    'backgroundColor': '#f0ad4e',
    'backgroundClip': 'padding-box',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f0ad4e' }],
    // border: 1px solid rgba(0, 0, 0, .15);
    'borderRadius': '4px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.175)' }]
  },
  'dropdown-menu > li': {
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 20 }],
    'clear': 'both',
    'fontWeight': 'normal',
    'lineHeight': [{ 'unit': 'px', 'value': 1.42857143 }],
    'color': '#fff',
    'whiteSpace': 'nowrap',
    'cursor': 'pointer'
  },
  'dropdown-menu > li > a:hover': {
    'color': '#333'
  },
  'notes': {
    'background': '#eee',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'h6': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'radio-inline': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'panel-heading a:after': {
    'fontFamily': ''fontawesome'',
    'content': '"\f07d"',
    'float': 'right',
    'color': '#323a45'
  },
  'panel-headingaccordion': {
    'cursor': 'pointer',
    'cursor': 'hand'
  },
  'signout': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'toast-title': {
    'fontWeight': '700'
  },
  'toast-message': {
    'wordWrap': 'break-word'
  },
  'toast-message a': {
    'color': '#fff'
  },
  'toast-message label': {
    'color': '#fff'
  },
  'toast-message a:hover': {
    'color': '#ccc',
    'textDecoration': 'none'
  },
  'toast-close-button': {
    'position': 'relative',
    'right': [{ 'unit': 'em', 'value': -0.3 }],
    'top': [{ 'unit': 'em', 'value': -0.3 }],
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '700',
    'color': '#fff',
    'WebkitTextShadow': '0 1px 0 #fff',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#fff' }],
    'opacity': '.8'
  },
  'toast-close-button:focus': {
    'color': '#000',
    'textDecoration': 'none',
    'cursor': 'pointer',
    'opacity': '.4'
  },
  'toast-close-button:hover': {
    'color': '#000',
    'textDecoration': 'none',
    'cursor': 'pointer',
    'opacity': '.4'
  },
  'buttontoast-close-button': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer',
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'WebkitAppearance': 'none'
  },
  'toast-top-center': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'toast-bottom-center': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'toast-top-full-width': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'toast-bottom-full-width': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'toast-top-left': {
    'top': [{ 'unit': 'px', 'value': 12 }],
    'left': [{ 'unit': 'px', 'value': 12 }]
  },
  'toast-top-right': {
    'top': [{ 'unit': 'px', 'value': 12 }],
    'right': [{ 'unit': 'px', 'value': 12 }]
  },
  'toast-bottom-right': {
    'right': [{ 'unit': 'px', 'value': 12 }],
    'bottom': [{ 'unit': 'px', 'value': 12 }]
  },
  'toast-bottom-left': {
    'bottom': [{ 'unit': 'px', 'value': 12 }],
    'left': [{ 'unit': 'px', 'value': 12 }]
  },
  '#toast-container': {
    'pointerEvents': 'none',
    'position': 'fixed',
    'zIndex': '99999'
  },
  '#toast-container *': {
    'boxSizing': 'border-box'
  },
  '#toast-container > div': {
    'position': 'relative',
    'overflow': 'hidden',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'borderRadius': '3px 3px 3px 3px',
    'backgroundPosition': '15px',
    'backgroundRepeat': 'no-repeat',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '#999' }],
    'color': '#fff',
    'opacity': '.8',
    '<w240': {
      'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 50 }],
      'width': [{ 'unit': 'em', 'value': 11 }]
    },
    '>w241&&<w480': {
      'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 50 }],
      'width': [{ 'unit': 'em', 'value': 18 }]
    },
    '>w481&&<w768': {
      'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 50 }],
      'width': [{ 'unit': 'em', 'value': 25 }]
    }
  },
  '#toast-container > divtoast-custom': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'color': '#030303'
  },
  '#toast-container > divtoast-custom toast-close-button': {
    'color': '#999 !important'
  },
  '#toast-container > :hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '#000' }],
    'opacity': '1',
    'cursor': 'pointer'
  },
  '#toast-container > toast-info': {
    'backgroundImage': 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=") !important'
  },
  '#toast-container > toast-error': {
    'backgroundImage': 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=") !important'
  },
  '#toast-container > toast-success': {
    'backgroundImage': 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==") !important'
  },
  '#toast-container > toast-warning': {
    'backgroundImage': 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=") !important'
  },
  '#toast-containertoast-bottom-center > div': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#toast-containertoast-top-center > div': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#toast-containertoast-bottom-full-width > div': {
    'width': [{ 'unit': '%H', 'value': 0.96 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#toast-containertoast-top-full-width > div': {
    'width': [{ 'unit': '%H', 'value': 0.96 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'toast': {
    'backgroundColor': '#fff',
    'pointerEvents': 'auto'
  },
  'toast-success': {
    'backgroundColor': '#51a351'
  },
  'toast-error': {
    'backgroundColor': '#bd362f'
  },
  'toast-info': {
    'backgroundColor': '#2f96b4'
  },
  'toast-warning': {
    'backgroundColor': '#f89406'
  },
  'toast-progress': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 4 }],
    'backgroundColor': '#000',
    'opacity': '.4'
  }
});
