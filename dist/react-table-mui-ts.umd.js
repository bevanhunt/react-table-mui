!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@mui/material"),require("@mui/icons-material/KeyboardArrowRight"),require("@mui/icons-material/KeyboardArrowUp"),require("classnames"),require("react"),require("react-table"),require("@mui/styles"),require("match-sorter"),require("@mui/system"),require("@mui/material/Table"),require("@mui/material/TableBody"),require("@mui/material/TableCell"),require("@mui/material/TableHead"),require("@mui/material/TableRow"),require("@mui/material/IconButton"),require("@mui/icons-material/FirstPage"),require("@mui/icons-material/KeyboardArrowLeft"),require("@mui/icons-material/LastPage"),require("@mui/icons-material/Add"),require("@mui/icons-material/CreateOutlined"),require("@mui/icons-material/DeleteOutline"),require("@mui/icons-material/FilterList"),require("@mui/icons-material/ViewColumn")):"function"==typeof define&&define.amd?define(["exports","@mui/material","@mui/icons-material/KeyboardArrowRight","@mui/icons-material/KeyboardArrowUp","classnames","react","react-table","@mui/styles","match-sorter","@mui/system","@mui/material/Table","@mui/material/TableBody","@mui/material/TableCell","@mui/material/TableHead","@mui/material/TableRow","@mui/material/IconButton","@mui/icons-material/FirstPage","@mui/icons-material/KeyboardArrowLeft","@mui/icons-material/LastPage","@mui/icons-material/Add","@mui/icons-material/CreateOutlined","@mui/icons-material/DeleteOutline","@mui/icons-material/FilterList","@mui/icons-material/ViewColumn"],t):t((e||self).reactTableMuiTs={},e.material,e.KeyboardArrowRight,e.KeyboardArrowUp,e.classnames,e.react,e.reactTable,e.styles,e.matchSorter,e.system,e.MuiTableTable,e.MuiTableBody,e.MuiTableCell,e.MuiTableHead,e.MuiTableRow,e.IconButton,e.FirstPageIcon,e.KeyboardArrowLeft,e.LastPageIcon,e.AddIcon,e.CreateIcon,e.DeleteIcon,e.FilterListIcon,e.ViewColumnsIcon)}(this,function(e,t,a,r,n,i,l,o,s,c,u,d,m,p,f,g,b,v,y,C,x,w,k,T){function S(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var P=/*#__PURE__*/S(a),N=/*#__PURE__*/S(r),R=/*#__PURE__*/S(n),A=/*#__PURE__*/S(i),I=/*#__PURE__*/S(u),F=/*#__PURE__*/S(d),B=/*#__PURE__*/S(m),z=/*#__PURE__*/S(p),L=/*#__PURE__*/S(f),O=/*#__PURE__*/S(g),H=/*#__PURE__*/S(b),q=/*#__PURE__*/S(v),D=/*#__PURE__*/S(y),E=/*#__PURE__*/S(C),G=/*#__PURE__*/S(x),j=/*#__PURE__*/S(w),M=/*#__PURE__*/S(k),W=/*#__PURE__*/S(T);function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},K.apply(this,arguments)}function V(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var U=o.makeStyles(o.createStyles({filtersActiveLabel:{color:"#998",fontSize:"14px",paddingRight:10},chipZone:{padding:"18px 0 5px 10px",width:"100%"},chipLabel:{fontWeight:500,marginRight:5},filterChip:{marginRight:4,color:"#222"}})),_=function(e,t){if("between"===e.filter){var a=t[0],r=t[1];return a?r?a+"-"+r:">="+a:"<="+r}return t};function J(e){var a=e.instance,r=U({}),n=a.allColumns,l=a.setFilter,o=a.state.filters,s=i.useCallback(function(e){l(e,void 0)},[l]);return Object.keys(o).length>0?h("div",{className:r.chipZone},h("span",{className:r.filtersActiveLabel},"Active filters:"),o&&n.map(function(e){var a=o.find(function(t){return t.id===e.id}),n=a&&a.value;return n&&h(t.Chip,{className:r.filterChip,key:e.id,label:h(Fragment,null,h("span",{className:r.chipLabel},e.render("Header"),":"," "),_(e,n)),onDelete:function(){return s(e.id)},variant:"outlined"})})):null}function Z(e,t,a){return s.matchSorter(e,a,{keys:[function(e){return e.values[t[0]]}]})}Z.autoRemove=function(e){return!e};var $=/([=<>!]*)\s*((?:[0-9].?[0-9]*)+)/;function Q(e,t,a){var r=function(e){var t=function(t){return t==e},a=$.exec(e);if(!a)return t;switch(a[1]){case">":return function(e){return parseFloat(e)>parseFloat(a[2])};case"<":return function(e){return parseFloat(e)<parseFloat(a[2])};case"<=":return function(e){return parseFloat(e)<=parseFloat(a[2])};case">=":return function(e){return parseFloat(e)>=parseFloat(a[2])};case"=":return function(e){return parseFloat(e)===parseFloat(a[2])};case"!":return function(e){return parseFloat(e)!==parseFloat(a[2])}}return t}(a);return e.filter(function(e){return r(e.values[t[0]])})}Q.autoRemove=function(e){return!e};var X=["children","className"],Y=["children","className"],ee=["children","className"],te=["children","className"],ae=["children","className"],re=["children","className"],ne=["children","className"],ie=["children","className"],le=o.makeStyles(function(e){return o.createStyles({tableTable:{borderSpacing:0,border:"1px solid rgba(224, 224, 224, 1)",width:"100%"},tableHead:{},tableHeadRow:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,borderBottom:"1px solid rgba(224, 224, 224, 1)","&:hover $resizeHandle":{opacity:1}},tableHeadCell:{padding:"16px 1px 16px 16px",fontSize:"0.875rem",textAlign:"left",verticalAlign:"inherit",color:e.palette.text.primary,fontWeight:500,lineHeight:"1.5rem",borderRight:"1px solid rgba(224, 224, 224, 1)","&:last-child":{borderRight:"none"}},tableBody:{},tableRow:{color:"inherit",outline:0,verticalAlign:"middle","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.07)"},borderBottom:"1px solid rgba(224, 224, 224, 1)","&:last-child":{borderBottom:"none"},"&.rowSelected":{backgroundColor:"rgba(0, 0, 0, 0.04)","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.07)"}},"&.clickable":{cursor:"pointer"}},tableLabel:{},tableCell:{padding:"8px 16px",fontSize:"0.875rem",textAlign:"left",fontWeight:300,lineHeight:1.3,verticalAlign:"inherit",color:e.palette.text.primary,borderRight:"1px solid rgba(224, 224, 224, 1)","&:last-child":{borderRight:"none"}},resizeHandle:{position:"absolute",cursor:"col-resize",zIndex:100,opacity:0,borderLeft:"1px solid "+e.palette.primary.light,borderRight:"1px solid "+e.palette.primary.light,height:"50%",top:"25%",transition:"all linear 100ms",right:-2,width:3,"&.handleActive":{opacity:1,border:"none",backgroundColor:e.palette.primary.light,height:"calc(100% - 4px)",top:"2px",right:-1,width:1}},tableSortLabel:{"& svg":{width:16,height:16,marginTop:0,marginLeft:2}},headerIcon:{"& svg":{width:16,height:16,marginTop:4,marginRight:0}},iconDirectionAsc:{transform:"rotate(90deg)"},iconDirectionDesc:{transform:"rotate(180deg)"},cellIcon:{"& svg":{width:16,height:16,marginTop:3}}})}),oe=function(e,t){return e.checked===t.checked&&e.indeterminate===t.indeterminate};c.createTheme();var se=function(e){var t=e.children,a=e.className,r=V(e,X),n=le();return h(I.default,K({className:R.default(a,n.tableTable)},r),t)},ce=function(e){var t=e.children,a=e.className,r=V(e,Y),n=le();return h(F.default,K({className:R.default(a,n.tableBody)},r),t)},ue=function(e){var t=e.children,a=e.className,r=V(e,ee),n=le();return h(z.default,K({className:R.default(a,n.tableHead)},r),t)},de=function(e){var t=e.children,a=e.className,r=V(e,te),n=le();return h(L.default,K({className:R.default(a,n.tableHeadRow)},r),t)},he=function(e){var t=e.children,a=e.className,r=V(e,ae),n=le();return h(B.default,K({className:R.default(a,n.tableHeadCell)},r),t)},me=function(e){var t=e.children,a=e.className,r=V(e,re),n=le();return h(L.default,K({className:R.default(a,n.tableRow)},r),t)},pe=function(e){var t=e.children,a=e.className,r=V(e,ne),n=le();return h(B.default,K({className:R.default(a,n.tableCell)},r),t)},fe=function(e){var t=e.children,a=e.className,r=V(e,ie),n=le();return h("div",K({className:R.default(a,n.tableLabel)},r),t)},ge=A.default.memo(o.styled(t.Checkbox)({fontSize:"1rem",margin:"-8px 0 -8px -15px",padding:"8px 9px","& svg":{width:"24px",height:"24px"},"&:hover":{backgroundColor:"transparent"}}),oe),be=A.default.memo(o.styled(t.Checkbox)({fontSize:"14px",margin:"-9px 0 -8px -15px",padding:"5px 9px","&:hover":{backgroundColor:"transparent"},"& svg":{width:24,height:24}}),oe);function ve(e){var t,a=e.column,r=le();return h("div",K({},a.getResizerProps(),{style:{cursor:"col-resize"},className:R.default((t={},t[r.resizeHandle]=!0,t.handleActive=a.isResizing,t))}))}var ye=[10,25,50],Ce=A.default.memo(t.TablePagination,function(e,t){return e.count===t.count&&e.rowsPerPage===t.rowsPerPage&&e.page===t.page&&e.onChangePage===t.onChangePage&&e.onChangeRowsPerPage===t.onChangeRowsPerPage});function xe(e){var t=o.makeStyles(function(e){return o.createStyles({root:{flexShrink:0,marginLeft:e.spacing(2.5)}})})(),a=e.count,r=e.page,n=e.rowsPerPage,i=e.onPageChange;return h("div",{className:t.root},h(O.default,{onClick:function(e){i(e,0)},disabled:0===r,"aria-label":"first page"},h(H.default,null)),h(O.default,{onClick:function(e){i(e,r-1)},disabled:0===r,"aria-label":"previous page"},h(q.default,null)),h(O.default,{onClick:function(e){i(e,r+1)},disabled:r>=Math.ceil(a/n)-1,"aria-label":"next page"},h(P.default,null)),h(O.default,{onClick:function(e){i(e,Math.max(0,Math.ceil(a/n)-1))},disabled:r>=Math.ceil(a/n)-1,"aria-label":"last page"},h(D.default,null)))}function we(e){var t=e.instance,a=t.state,r=a.pageIndex,n=a.pageSize,l=a.rowCount,o=void 0===l?t.rows.length:l,s=t.gotoPage,c=t.nextPage,u=t.previousPage,d=t.setPageSize,m=i.useCallback(function(e,t){t===r+1?c():t===r-1?u():s(t)},[s,c,r,u]),p=i.useCallback(function(e){d(Number(e.target.value))},[d]);return o?h(Ce,{sx:{".MuiTablePagination-selectLabel":{paddingTop:"12px"},".MuiTablePagination-displayedRows":{paddingTop:"15px"}},rowsPerPageOptions:ye,component:"div",count:o,rowsPerPage:n,page:r,onPageChange:m,onRowsPerPageChange:p,ActionsComponent:xe}):null}var ke=o.makeStyles(o.createStyles({columnsPopOver:{padding:24},popoverTitle:{fontWeight:500,padding:"0 24px 24px 0",textTransform:"uppercase"},grid:{display:"grid",gridTemplateColumns:"repeat(2, 198px)","@media (max-width: 600px)":{gridTemplateColumns:"repeat(1, 160px)"},gridColumnGap:6,gridRowGap:6}}));function Te(e){var a=e.instance,r=e.anchorEl,n=e.onClose,i=e.show,l=ke({}),o=a.toggleHideColumn,s=a.allColumns.filter(function(e){return!("_selector"===e.id)}),c=s.reduce(function(e,t){return e+(t.isVisible?0:1)},0)+1>=s.length;return s.length>1?h("div",null,h(t.Popover,{anchorEl:r,className:l.columnsPopOver,id:"popover-column-hide",onClose:n,open:i,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},h("div",{className:l.columnsPopOver},h(t.Typography,{className:l.popoverTitle},"Visible Columns"),h("div",{className:l.grid},s.map(function(e){return h(t.FormControlLabel,{key:e.id,control:h(t.Checkbox,{value:""+e.id,disabled:e.isVisible&&c}),label:e.render("Header"),checked:e.isVisible,onChange:function(){return o(e.id,e.isVisible)}})}))))):null}var Se=o.makeStyles(o.createStyles({columnsPopOver:{padding:24},filtersResetButton:{position:"absolute",top:18,right:21},popoverTitle:{fontWeight:500,padding:"0 24px 24px 0",textTransform:"uppercase"},grid:{display:"grid",gridTemplateColumns:"repeat(2, 218px)","@media (max-width: 600px)":{gridTemplateColumns:"repeat(1, 180px)"},gridColumnGap:24,gridRowGap:24},cell:{width:"100%",display:"inline-flex",flexDirection:"column"},hidden:{display:"none"}}));function Pe(e){var a=e.instance,r=e.anchorEl,n=e.onClose,l=e.show,o=Se({}),s=a.allColumns,c=a.setAllFilters,u=i.useCallback(function(e){e.preventDefault(),n()},[n]),d=i.useCallback(function(){c([])},[c]);return h("div",null,h(t.Popover,{anchorEl:r,id:"popover-filters",onClose:n,open:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},h("div",{className:o.columnsPopOver},h(t.Typography,{className:o.popoverTitle},"Filters"),h("form",{onSubmit:u},h(t.Button,{className:o.filtersResetButton,color:"primary",onClick:d},"Reset"),h("div",{className:o.grid},s.filter(function(e){return e.canFilter}).map(function(e){return h("div",{key:e.id,className:o.cell},e.render("Filter"))})),h(t.Button,{className:o.hidden,type:"submit"}," ")))))}var Ne=o.makeStyles(function(){return o.createStyles({toolbar:{display:"flex",justifyContent:"space-between"},leftButtons:{},rightButtons:{},leftIcons:{"&:first-of-type":{marginLeft:-12}},rightIcons:{padding:12,marginTop:"-6px",width:48,height:48,"&:last-of-type":{marginRight:-12}}})});function Re(e){var a,r=e.instance,n=e.icon,i=e.onClick,l=e.label,o=e.enabled,s=void 0===o?function(){return!0}:o,c=e.variant,u=Ne({});return h(t.Tooltip,{title:l,"aria-label":l},h("span",null,h(t.IconButton,{className:R.default((a={},a[u.rightIcons]="right"===c,a[u.leftIcons]="left"===c,a)),onClick:i(r),disabled:!s(r)},n)))}function Ae(e){var a,r=e.icon,n=e.onClick,i=e.label,l=e.enabled,o=void 0===l||l,s=e.variant,c=Ne({});return h(t.Tooltip,{title:i,"aria-label":i},h("span",null,h(t.IconButton,{className:R.default((a={},a[c.rightIcons]="right"===s,a[c.leftIcons]="left"===s,a)),onClick:n,disabled:!o},r)))}function Ie(e){var a=e.instance,r=e.onAdd,n=e.onDelete,l=e.onEdit,o=a.columns,s=Ne(),c=i.useState(void 0),u=c[0],d=c[1],m=i.useState(!1),p=m[0],f=m[1],g=i.useState(!1),b=g[0],v=g[1],y=o.filter(function(e){return!("_selector"===e.id)}),C=i.useCallback(function(e){d(e.currentTarget),f(!0)},[d,f]),x=i.useCallback(function(e){d(e.currentTarget),v(!0)},[d,v]),w=i.useCallback(function(){f(!1),v(!1),d(void 0)},[]);return h(t.Toolbar,{className:s.toolbar},h("div",{className:s.leftButtons},r&&h(Re,{instance:a,icon:h(E.default,null),onClick:r,label:"Add",enabled:function(e){var t=e.state;return!t.selectedRowIds||0===Object.keys(t.selectedRowIds).length},variant:"left"}),l&&h(Re,{instance:a,icon:h(G.default,null),onClick:l,label:"Edit",enabled:function(e){var t=e.state;return t.selectedRowIds&&1===Object.keys(t.selectedRowIds).length},variant:"left"}),n&&h(Re,{instance:a,icon:h(j.default,null),onClick:n,label:"Delete",enabled:function(e){var t=e.state;return t.selectedRowIds&&Object.keys(t.selectedRowIds).length>0},variant:"left"})),h("div",{className:s.rightButtons},h(Te,{instance:a,onClose:w,show:p,anchorEl:u}),h(Pe,{instance:a,onClose:w,show:b,anchorEl:u}),y.length>1&&h(Ae,{icon:h(W.default,null),onClick:C,label:"Show / hide columns",variant:"right"}),h(Ae,{icon:h(M.default,null),onClick:x,label:"Filter by columns",variant:"right"})))}var Fe=o.makeStyles({truncated:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}),Be=function(e){var a=e.text,r=e.tooltip,n=void 0===r?a:r,i=e.align,l=Fe({});return h(t.Tooltip,{title:n,className:l.truncated,style:{textAlign:i}},h("span",null,a))},ze=["role"],Le=["key","title","role"],Oe=["key","role"],He=["title"],qe=["title"],De=["key","role"],Ee=["key","role"],Ge=function e(t){return t[0].columns?e(t[0].columns):t[0]},je=function(e,t,a){return void 0===a&&(a="left"),[e,{style:{justifyContent:"right"===a?"flex-end":"flex-start",alignItems:"flex-start",display:"flex"}}]},Me=function(e,t){var a=t.column;return je(e,0,a&&a.align)},We=function(e,t){var a=t.cell;return je(e,0,a.column&&a.column.align)},Ke={Filter:function(e){var a=e.columns,r=e.column,n=r.id,l=r.filterValue,o=r.setFilter,s=r.render,c=A.default.useState(l||""),u=c[0],d=c[1];i.useEffect(function(){d(l||"")},[l]);var m=Ge(a)===r;return h(t.TextField,{name:n,label:s("Header"),InputLabelProps:{htmlFor:n},value:u,autoFocus:m,variant:"standard",onChange:function(e){d(e.target.value)},onBlur:function(e){o(e.target.value||void 0)}})},Cell:function(e){var t=e.column.align;return h(Be,{text:e.cell.value,align:void 0===t?"left":t})},Header:function(e){var t=e.column;return h(Fragment,null,t.id.startsWith("_")?null:function(e){for(var t,a="",r=0,n=!0,i=!0;r<e.length;)t=e.charCodeAt(r),0===r?a+=e[r].toUpperCase():!i&&t>=65&&t<=90||!n&&t>=48&&t<=57?(a+=" ",a+=e[r].toUpperCase()):a+=e[r].toLowerCase(),n=t>=48&&t<=57,i=t>=65&&t<=90,r++;return a}(t.id))},minWidth:30,width:150,maxWidth:200},Ve=[l.useColumnOrder,l.useFilters,l.useGroupBy,l.useSortBy,l.useExpanded,l.useFlexLayout,l.usePagination,l.useResizeColumns,l.useRowSelect,function(e){e.allColumns.push(function(e){return[{id:"_selector",disableResizing:!0,disableGroupBy:!0,minWidth:45,width:45,maxWidth:45,Aggregated:void 0,Header:function(e){return h(ge,(0,e.getToggleAllRowsSelectedProps)())},Cell:function(e){return h(be,e.row.getToggleRowSelectedProps())}}].concat(e)}),e.useInstanceBeforeDimensions.push(function(e){e.headerGroups[0].headers[0].canResize=!1})}],Ue={fuzzyText:Z,numeric:Q};e.Table=function(e){var a,r,n,o,s=e.name,c=e.columns,u=e.onAdd,d=e.onDelete,m=e.onEdit,p=e.onClick,f=le(),g=(a="tableState:"+s,r={},n=i.useState(function(){if("undefined"==typeof window)return r;try{var e=window.localStorage.getItem(a);return e?JSON.parse(e):r}catch(e){return console.log(e),r}}),o=n[1],[n[0],i.useCallback(function(e){try{o(e),window.localStorage.setItem(a,JSON.stringify(e))}catch(e){console.log(e)}},[a])])[1],b=l.useTable.apply(void 0,[K({},e,{columns:c,filterTypes:Ue,defaultColumn:Ke,initialState:{hiddenColumns:c.filter(function(e){return!1===e.show}).map(function(e){return e.id||e.accessor})}})].concat(Ve)),v=b.getTableProps,y=b.headerGroups,C=b.getTableBodyProps,x=b.page,w=b.prepareRow,k=function(e,t){var a=i.useState(e),r=a[0],n=a[1];return i.useEffect(function(){var t=setTimeout(function(){n(e)},500);return function(){clearTimeout(t)}},[e,500]),r}(b.state);i.useEffect(function(){g({sortBy:k.sortBy,filters:k.filters,pageSize:k.pageSize,columnResizing:k.columnResizing,hiddenColumns:k.hiddenColumns})},[g,k]);var T=function(e){return function(){p&&!e.column.isGrouped&&!e.row.isGrouped&&"_selector"!==e.column.id&&p(e.row)}},S=V(v(),ze);return h(Fragment,null,h(Ie,{instance:b,onAdd:u,onDelete:d,onEdit:m}),h(J,{instance:b}),h(se,S,h(ue,null,y.map(function(e){var a=e.getHeaderGroupProps(),r=a.key,n=V(a,Le);return h(de,K({key:r},n),e.headers.map(function(e){var a={textAlign:e.align?e.align:"left "},r=e.getHeaderProps(Me),n=r.key,i=V(r,Oe),l=e.getGroupByToggleProps(),o=l.title,s=void 0===o?"":o,c=V(l,He),u=e.getSortByToggleProps(),d=u.title,m=void 0===d?"":d,p=V(u,qe);return h(he,K({key:n},i),e.canGroupBy&&h(t.Tooltip,{title:s},h(t.TableSortLabel,K({active:!0,direction:e.isGrouped?"desc":"asc",IconComponent:P.default},c,{className:f.headerIcon}))),e.canSort?h(t.Tooltip,{title:m},h(t.TableSortLabel,K({active:e.isSorted,direction:e.isSortedDesc?"desc":"asc"},p,{className:f.tableSortLabel,style:a}),e.render("Header"))):h(fe,{style:a},e.render("Header")),e.canResize&&h(ve,{column:e}))}))})),h(ce,C(),x.map(function(e){w(e);var a=e.getRowProps(),r=a.key,n=V(a,De);return h(me,K({key:r},n,{className:R.default({rowSelected:e.isSelected,clickable:p})}),e.cells.map(function(a){var r=a.getCellProps(We),n=r.key,i=V(r,Ee);return h(pe,K({key:n},i,{onClick:T(a)}),a.isGrouped?h(Fragment,null,h(t.TableSortLabel,K({classes:{iconDirectionAsc:f.iconDirectionAsc,iconDirectionDesc:f.iconDirectionDesc},active:!0,direction:e.isExpanded?"desc":"asc",IconComponent:N.default},e.getToggleRowExpandedProps(),{className:f.cellIcon}))," ",a.render("Cell",{editable:!1})," ","(",e.subRows.length,")"):a.isAggregated?a.render("Aggregated"):a.isPlaceholder?null:a.render("Cell"))}))}))),h(we,{instance:b}))}});
//# sourceMappingURL=react-table-mui-ts.umd.js.map
