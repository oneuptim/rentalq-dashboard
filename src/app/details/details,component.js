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
  }
});
