import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'nav-side-menu': {
    'overflow': 'auto',
    'fontFamily': '"proxima-nova",sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': '200',
    'backgroundColor': '#323a45',
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
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
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }],
    'fontFamily': '"proxima-nova",sans-serif'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'badge-success': {
    'backgroundColor': '#5cb85c',
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'em', 'value': 0.01 }]
  },
  'badge-warning': {
    'backgroundColor': '#f0ad4e',
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'em', 'value': 0.01 }]
  },
  'badge-danger': {
    'backgroundColor': '#d9534f',
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'em', 'value': 0.01 }]
  },
  'signout': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  }
});
