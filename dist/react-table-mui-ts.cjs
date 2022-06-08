var e=require("@mui/material"),t=require("@mui/icons-material/KeyboardArrowRight"),n=require("@mui/icons-material/KeyboardArrowUp"),r=require("classnames"),a=require("react"),l=require("react-table"),i=require("@mui/styles"),o=require("match-sorter"),s=require("@mui/system"),c=require("@mui/material/Table"),u=require("@mui/material/TableBody"),d=require("@mui/material/TableCell"),p=require("@mui/material/TableHead"),g=require("@mui/material/TableRow"),f=require("@mui/material/IconButton"),m=require("@mui/icons-material/FirstPage"),b=require("@mui/icons-material/KeyboardArrowLeft"),v=require("@mui/icons-material/LastPage"),y=require("@mui/icons-material/Add"),C=require("@mui/icons-material/CreateOutlined"),x=require("@mui/icons-material/DeleteOutline"),w=require("@mui/icons-material/FilterList"),k=require("@mui/icons-material/ViewColumn");function S(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var T=/*#__PURE__*/S(t),N=/*#__PURE__*/S(n),P=/*#__PURE__*/S(r),R=/*#__PURE__*/S(a),F=/*#__PURE__*/S(c),A=/*#__PURE__*/S(u),z=/*#__PURE__*/S(d),B=/*#__PURE__*/S(p),I=/*#__PURE__*/S(g),O=/*#__PURE__*/S(f),q=/*#__PURE__*/S(m),L=/*#__PURE__*/S(b),H=/*#__PURE__*/S(v),D=/*#__PURE__*/S(y),E=/*#__PURE__*/S(C),G=/*#__PURE__*/S(x),j=/*#__PURE__*/S(w),W=/*#__PURE__*/S(k);function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(n=l[r])>=0||(a[n]=e[n]);return a}var _=i.makeStyles(i.createStyles({filtersActiveLabel:{color:"#998",fontSize:"14px",paddingRight:10},chipZone:{padding:"18px 0 5px 10px",width:"100%"},chipLabel:{fontWeight:500,marginRight:5},filterChip:{marginRight:4,color:"#222"}})),K=function(e,t){if("between"===e.filter){var n=t[0],r=t[1];return n?r?n+"-"+r:">="+n:"<="+r}return t};function U(t){var n=t.instance,r=_({}),l=n.allColumns,i=n.setFilter,o=n.state.filters,s=a.useCallback(function(e){i(e,void 0)},[i]);return Object.keys(o).length>0?h("div",{className:r.chipZone},h("span",{className:r.filtersActiveLabel},"Active filters:"),o&&l.map(function(t){var n=o.find(function(e){return e.id===t.id}),a=n&&n.value;return a&&h(e.Chip,{className:r.filterChip,key:t.id,label:h(Fragment,null,h("span",{className:r.chipLabel},t.render("Header"),":"," "),K(t,a)),onDelete:function(){return s(t.id)},variant:"outlined"})})):null}function J(e,t,n){return o.matchSorter(e,n,{keys:[function(e){return e.values[t[0]]}]})}J.autoRemove=function(e){return!e};var Z=/([=<>!]*)\s*((?:[0-9].?[0-9]*)+)/;function $(e,t,n){var r=function(e){var t=function(t){return t==e},n=Z.exec(e);if(!n)return t;switch(n[1]){case">":return function(e){return parseFloat(e)>parseFloat(n[2])};case"<":return function(e){return parseFloat(e)<parseFloat(n[2])};case"<=":return function(e){return parseFloat(e)<=parseFloat(n[2])};case">=":return function(e){return parseFloat(e)>=parseFloat(n[2])};case"=":return function(e){return parseFloat(e)===parseFloat(n[2])};case"!":return function(e){return parseFloat(e)!==parseFloat(n[2])}}return t}(n);return e.filter(function(e){return r(e.values[t[0]])})}$.autoRemove=function(e){return!e};var Q=["children","className"],X=["children","className"],Y=["children","className"],ee=["children","className"],te=["children","className"],ne=["children","className"],re=["children","className"],ae=["children","className"],le=i.makeStyles(function(e){return i.createStyles({tableTable:{borderSpacing:0,border:"1px solid rgba(224, 224, 224, 1)",width:"100%"},tableHead:{},tableHeadRow:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,borderBottom:"1px solid rgba(224, 224, 224, 1)","&:hover $resizeHandle":{opacity:1}},tableHeadCell:{padding:"16px 1px 16px 16px",fontSize:"0.875rem",textAlign:"left",verticalAlign:"inherit",color:e.palette.text.primary,fontWeight:500,lineHeight:"1.5rem",borderRight:"1px solid rgba(224, 224, 224, 1)","&:last-child":{borderRight:"none"}},tableBody:{},tableRow:{color:"inherit",outline:0,verticalAlign:"middle","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.07)"},borderBottom:"1px solid rgba(224, 224, 224, 1)","&:last-child":{borderBottom:"none"},"&.rowSelected":{backgroundColor:"rgba(0, 0, 0, 0.04)","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.07)"}},"&.clickable":{cursor:"pointer"}},tableLabel:{},tableCell:{padding:"8px 16px",fontSize:"0.875rem",textAlign:"left",fontWeight:300,lineHeight:1.3,verticalAlign:"inherit",color:e.palette.text.primary,borderRight:"1px solid rgba(224, 224, 224, 1)","&:last-child":{borderRight:"none"}},resizeHandle:{position:"absolute",cursor:"col-resize",zIndex:100,opacity:0,borderLeft:"1px solid "+e.palette.primary.light,borderRight:"1px solid "+e.palette.primary.light,height:"50%",top:"25%",transition:"all linear 100ms",right:-2,width:3,"&.handleActive":{opacity:1,border:"none",backgroundColor:e.palette.primary.light,height:"calc(100% - 4px)",top:"2px",right:-1,width:1}},tableSortLabel:{"& svg":{width:16,height:16,marginTop:0,marginLeft:2}},headerIcon:{"& svg":{width:16,height:16,marginTop:4,marginRight:0}},iconDirectionAsc:{transform:"rotate(90deg)"},iconDirectionDesc:{transform:"rotate(180deg)"},cellIcon:{"& svg":{width:16,height:16,marginTop:3}}})}),ie=function(e,t){return e.checked===t.checked&&e.indeterminate===t.indeterminate};s.createTheme();var oe=function(e){var t=e.children,n=e.className,r=M(e,Q),a=le();return h(F.default,V({className:P.default(n,a.tableTable)},r),t)},se=function(e){var t=e.children,n=e.className,r=M(e,X),a=le();return h(A.default,V({className:P.default(n,a.tableBody)},r),t)},ce=function(e){var t=e.children,n=e.className,r=M(e,Y),a=le();return h(B.default,V({className:P.default(n,a.tableHead)},r),t)},ue=function(e){var t=e.children,n=e.className,r=M(e,ee),a=le();return h(I.default,V({className:P.default(n,a.tableHeadRow)},r),t)},de=function(e){var t=e.children,n=e.className,r=M(e,te),a=le();return h(z.default,V({className:P.default(n,a.tableHeadCell)},r),t)},he=function(e){var t=e.children,n=e.className,r=M(e,ne),a=le();return h(I.default,V({className:P.default(n,a.tableRow)},r),t)},pe=function(e){var t=e.children,n=e.className,r=M(e,re),a=le();return h(z.default,V({className:P.default(n,a.tableCell)},r),t)},ge=function(e){var t=e.children,n=e.className,r=M(e,ae),a=le();return h("div",V({className:P.default(n,a.tableLabel)},r),t)},fe=R.default.memo(i.styled(e.Checkbox)({fontSize:"1rem",margin:"-8px 0 -8px -15px",padding:"8px 9px","& svg":{width:"24px",height:"24px"},"&:hover":{backgroundColor:"transparent"}}),ie),me=R.default.memo(i.styled(e.Checkbox)({fontSize:"14px",margin:"-9px 0 -8px -15px",padding:"5px 9px","&:hover":{backgroundColor:"transparent"},"& svg":{width:24,height:24}}),ie);function be(e){var t,n=e.column,r=le();return h("div",V({},n.getResizerProps(),{style:{cursor:"col-resize"},className:P.default((t={},t[r.resizeHandle]=!0,t.handleActive=n.isResizing,t))}))}var ve=[10,25,50],ye=R.default.memo(e.TablePagination,function(e,t){return e.count===t.count&&e.rowsPerPage===t.rowsPerPage&&e.page===t.page&&e.onChangePage===t.onChangePage&&e.onChangeRowsPerPage===t.onChangeRowsPerPage});function Ce(e){var t=i.makeStyles(function(e){return i.createStyles({root:{flexShrink:0,marginLeft:e.spacing(2.5)}})})(),n=e.count,r=e.page,a=e.rowsPerPage,l=e.onPageChange;return h("div",{className:t.root},h(O.default,{onClick:function(e){l(e,0)},disabled:0===r,"aria-label":"first page"},h(q.default,null)),h(O.default,{onClick:function(e){l(e,r-1)},disabled:0===r,"aria-label":"previous page"},h(L.default,null)),h(O.default,{onClick:function(e){l(e,r+1)},disabled:r>=Math.ceil(n/a)-1,"aria-label":"next page"},h(T.default,null)),h(O.default,{onClick:function(e){l(e,Math.max(0,Math.ceil(n/a)-1))},disabled:r>=Math.ceil(n/a)-1,"aria-label":"last page"},h(H.default,null)))}function xe(e){var t=e.instance,n=t.state,r=n.pageIndex,l=n.pageSize,i=n.rowCount,o=void 0===i?t.rows.length:i,s=t.gotoPage,c=t.nextPage,u=t.previousPage,d=t.setPageSize,p=a.useCallback(function(e,t){t===r+1?c():t===r-1?u():s(t)},[s,c,r,u]),g=a.useCallback(function(e){d(Number(e.target.value))},[d]);return o?h(ye,{sx:{".MuiTablePagination-selectLabel":{paddingTop:"12px"},".MuiTablePagination-displayedRows":{paddingTop:"15px"}},rowsPerPageOptions:ve,component:"div",count:o,rowsPerPage:l,page:r,onPageChange:p,onRowsPerPageChange:g,ActionsComponent:Ce}):null}var we=i.makeStyles(i.createStyles({columnsPopOver:{padding:24},popoverTitle:{fontWeight:500,padding:"0 24px 24px 0",textTransform:"uppercase"},grid:{display:"grid",gridTemplateColumns:"repeat(2, 198px)","@media (max-width: 600px)":{gridTemplateColumns:"repeat(1, 160px)"},gridColumnGap:6,gridRowGap:6}}));function ke(t){var n=t.instance,r=t.anchorEl,a=t.onClose,l=t.show,i=we({}),o=n.toggleHideColumn,s=n.allColumns.filter(function(e){return!("_selector"===e.id)}),c=s.reduce(function(e,t){return e+(t.isVisible?0:1)},0)+1>=s.length;return s.length>1?h("div",null,h(e.Popover,{anchorEl:r,className:i.columnsPopOver,id:"popover-column-hide",onClose:a,open:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},h("div",{className:i.columnsPopOver},h(e.Typography,{className:i.popoverTitle},"Visible Columns"),h("div",{className:i.grid},s.map(function(t){return h(e.FormControlLabel,{key:t.id,control:h(e.Checkbox,{value:""+t.id,disabled:t.isVisible&&c}),label:t.render("Header"),checked:t.isVisible,onChange:function(){return o(t.id,t.isVisible)}})}))))):null}var Se=i.makeStyles(i.createStyles({columnsPopOver:{padding:24},filtersResetButton:{position:"absolute",top:18,right:21},popoverTitle:{fontWeight:500,padding:"0 24px 24px 0",textTransform:"uppercase"},grid:{display:"grid",gridTemplateColumns:"repeat(2, 218px)","@media (max-width: 600px)":{gridTemplateColumns:"repeat(1, 180px)"},gridColumnGap:24,gridRowGap:24},cell:{width:"100%",display:"inline-flex",flexDirection:"column"},hidden:{display:"none"}}));function Te(t){var n=t.instance,r=t.anchorEl,l=t.onClose,i=t.show,o=Se({}),s=n.allColumns,c=n.setAllFilters,u=a.useCallback(function(e){e.preventDefault(),l()},[l]),d=a.useCallback(function(){c([])},[c]);return h("div",null,h(e.Popover,{anchorEl:r,id:"popover-filters",onClose:l,open:i,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},h("div",{className:o.columnsPopOver},h(e.Typography,{className:o.popoverTitle},"Filters"),h("form",{onSubmit:u},h(e.Button,{className:o.filtersResetButton,color:"primary",onClick:d},"Reset"),h("div",{className:o.grid},s.filter(function(e){return e.canFilter}).map(function(e){return h("div",{key:e.id,className:o.cell},e.render("Filter"))})),h(e.Button,{className:o.hidden,type:"submit"}," ")))))}var Ne=i.makeStyles(function(){return i.createStyles({toolbar:{display:"flex",justifyContent:"space-between"},leftButtons:{},rightButtons:{},leftIcons:{"&:first-of-type":{marginLeft:-12}},rightIcons:{padding:12,marginTop:"-6px",width:48,height:48,"&:last-of-type":{marginRight:-12}}})});function Pe(t){var n,r=t.instance,a=t.icon,l=t.onClick,i=t.label,o=t.enabled,s=void 0===o?function(){return!0}:o,c=t.variant,u=Ne({});return h(e.Tooltip,{title:i,"aria-label":i},h("span",null,h(e.IconButton,{className:P.default((n={},n[u.rightIcons]="right"===c,n[u.leftIcons]="left"===c,n)),onClick:l(r),disabled:!s(r)},a)))}function Re(t){var n,r=t.icon,a=t.onClick,l=t.label,i=t.enabled,o=void 0===i||i,s=t.variant,c=Ne({});return h(e.Tooltip,{title:l,"aria-label":l},h("span",null,h(e.IconButton,{className:P.default((n={},n[c.rightIcons]="right"===s,n[c.leftIcons]="left"===s,n)),onClick:a,disabled:!o},r)))}function Fe(t){var n=t.instance,r=t.onAdd,l=t.onDelete,i=t.onEdit,o=n.columns,s=Ne(),c=a.useState(void 0),u=c[0],d=c[1],p=a.useState(!1),g=p[0],f=p[1],m=a.useState(!1),b=m[0],v=m[1],y=o.filter(function(e){return!("_selector"===e.id)}),C=a.useCallback(function(e){d(e.currentTarget),f(!0)},[d,f]),x=a.useCallback(function(e){d(e.currentTarget),v(!0)},[d,v]),w=a.useCallback(function(){f(!1),v(!1),d(void 0)},[]);return h(e.Toolbar,{className:s.toolbar},h("div",{className:s.leftButtons},r&&h(Pe,{instance:n,icon:h(D.default,null),onClick:r,label:"Add",enabled:function(e){var t=e.state;return!t.selectedRowIds||0===Object.keys(t.selectedRowIds).length},variant:"left"}),i&&h(Pe,{instance:n,icon:h(E.default,null),onClick:i,label:"Edit",enabled:function(e){var t=e.state;return t.selectedRowIds&&1===Object.keys(t.selectedRowIds).length},variant:"left"}),l&&h(Pe,{instance:n,icon:h(G.default,null),onClick:l,label:"Delete",enabled:function(e){var t=e.state;return t.selectedRowIds&&Object.keys(t.selectedRowIds).length>0},variant:"left"})),h("div",{className:s.rightButtons},h(ke,{instance:n,onClose:w,show:g,anchorEl:u}),h(Te,{instance:n,onClose:w,show:b,anchorEl:u}),y.length>1&&h(Re,{icon:h(W.default,null),onClick:C,label:"Show / hide columns",variant:"right"}),h(Re,{icon:h(j.default,null),onClick:x,label:"Filter by columns",variant:"right"})))}var Ae=i.makeStyles({truncated:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}),ze=function(t){var n=t.text,r=t.tooltip,a=void 0===r?n:r,l=t.align,i=Ae({});return h(e.Tooltip,{title:a,className:i.truncated,style:{textAlign:l}},h("span",null,n))},Be=["role"],Ie=["key","title","role"],Oe=["key","role"],qe=["title"],Le=["title"],He=["key","role"],De=["key","role"],Ee=function e(t){return t[0].columns?e(t[0].columns):t[0]},Ge=function(e,t,n){return void 0===n&&(n="left"),[e,{style:{justifyContent:"right"===n?"flex-end":"flex-start",alignItems:"flex-start",display:"flex"}}]},je=function(e,t){var n=t.column;return Ge(e,0,n&&n.align)},We=function(e,t){var n=t.cell;return Ge(e,0,n.column&&n.column.align)},Ve={Filter:function(t){var n=t.columns,r=t.column,l=r.id,i=r.filterValue,o=r.setFilter,s=r.render,c=R.default.useState(i||""),u=c[0],d=c[1];a.useEffect(function(){d(i||"")},[i]);var p=Ee(n)===r;return h(e.TextField,{name:l,label:s("Header"),InputLabelProps:{htmlFor:l},value:u,autoFocus:p,variant:"standard",onChange:function(e){d(e.target.value)},onBlur:function(e){o(e.target.value||void 0)}})},Cell:function(e){var t=e.column.align;return h(ze,{text:e.cell.value,align:void 0===t?"left":t})},Header:function(e){var t=e.column;return h(Fragment,null,t.id.startsWith("_")?null:function(e){for(var t,n="",r=0,a=!0,l=!0;r<e.length;)t=e.charCodeAt(r),0===r?n+=e[r].toUpperCase():!l&&t>=65&&t<=90||!a&&t>=48&&t<=57?(n+=" ",n+=e[r].toUpperCase()):n+=e[r].toLowerCase(),a=t>=48&&t<=57,l=t>=65&&t<=90,r++;return n}(t.id))},minWidth:30,width:150,maxWidth:200},Me=[l.useColumnOrder,l.useFilters,l.useGroupBy,l.useSortBy,l.useExpanded,l.useFlexLayout,l.usePagination,l.useResizeColumns,l.useRowSelect,function(e){e.allColumns.push(function(e){return[{id:"_selector",disableResizing:!0,disableGroupBy:!0,minWidth:45,width:45,maxWidth:45,Aggregated:void 0,Header:function(e){return h(fe,(0,e.getToggleAllRowsSelectedProps)())},Cell:function(e){return h(me,e.row.getToggleRowSelectedProps())}}].concat(e)}),e.useInstanceBeforeDimensions.push(function(e){e.headerGroups[0].headers[0].canResize=!1})}],_e={fuzzyText:J,numeric:$};exports.Table=function(t){var n,r,i,o,s=t.name,c=t.columns,u=t.onAdd,d=t.onDelete,p=t.onEdit,g=t.onClick,f=le(),m=(n="tableState:"+s,r={},i=a.useState(function(){if("undefined"==typeof window)return r;try{var e=window.localStorage.getItem(n);return e?JSON.parse(e):r}catch(e){return console.log(e),r}}),o=i[1],[i[0],a.useCallback(function(e){try{o(e),window.localStorage.setItem(n,JSON.stringify(e))}catch(e){console.log(e)}},[n])])[1],b=l.useTable.apply(void 0,[V({},t,{columns:c,filterTypes:_e,defaultColumn:Ve,initialState:{hiddenColumns:c.filter(function(e){return!1===e.show}).map(function(e){return e.id||e.accessor})}})].concat(Me)),v=b.getTableProps,y=b.headerGroups,C=b.getTableBodyProps,x=b.page,w=b.prepareRow,k=function(e,t){var n=a.useState(e),r=n[0],l=n[1];return a.useEffect(function(){var t=setTimeout(function(){l(e)},500);return function(){clearTimeout(t)}},[e,500]),r}(b.state);a.useEffect(function(){m({sortBy:k.sortBy,filters:k.filters,pageSize:k.pageSize,columnResizing:k.columnResizing,hiddenColumns:k.hiddenColumns})},[m,k]);var S=function(e){return function(){g&&!e.column.isGrouped&&!e.row.isGrouped&&"_selector"!==e.column.id&&g(e.row)}},R=M(v(),Be);return h(Fragment,null,h(Fe,{instance:b,onAdd:u,onDelete:d,onEdit:p}),h(U,{instance:b}),h(oe,R,h(ce,null,y.map(function(t){var n=t.getHeaderGroupProps(),r=n.key,a=M(n,Ie);return h(ue,V({key:r},a),t.headers.map(function(t){var n={textAlign:t.align?t.align:"left "},r=t.getHeaderProps(je),a=r.key,l=M(r,Oe),i=t.getGroupByToggleProps(),o=i.title,s=void 0===o?"":o,c=M(i,qe),u=t.getSortByToggleProps(),d=u.title,p=void 0===d?"":d,g=M(u,Le);return h(de,V({key:a},l),t.canGroupBy&&h(e.Tooltip,{title:s},h(e.TableSortLabel,V({active:!0,direction:t.isGrouped?"desc":"asc",IconComponent:T.default},c,{className:f.headerIcon}))),t.canSort?h(e.Tooltip,{title:p},h(e.TableSortLabel,V({active:t.isSorted,direction:t.isSortedDesc?"desc":"asc"},g,{className:f.tableSortLabel,style:n}),t.render("Header"))):h(ge,{style:n},t.render("Header")),t.canResize&&h(be,{column:t}))}))})),h(se,C(),x.map(function(t){w(t);var n=t.getRowProps(),r=n.key,a=M(n,He);return h(he,V({key:r},a,{className:P.default({rowSelected:t.isSelected,clickable:g})}),t.cells.map(function(n){var r=n.getCellProps(We),a=r.key,l=M(r,De);return h(pe,V({key:a},l,{onClick:S(n)}),n.isGrouped?h(Fragment,null,h(e.TableSortLabel,V({classes:{iconDirectionAsc:f.iconDirectionAsc,iconDirectionDesc:f.iconDirectionDesc},active:!0,direction:t.isExpanded?"desc":"asc",IconComponent:N.default},t.getToggleRowExpandedProps(),{className:f.cellIcon}))," ",n.render("Cell",{editable:!1})," ","(",t.subRows.length,")"):n.isAggregated?n.render("Aggregated"):n.isPlaceholder?null:n.render("Cell"))}))}))),h(xe,{instance:b}))};
//# sourceMappingURL=react-table-mui-ts.cjs.map
