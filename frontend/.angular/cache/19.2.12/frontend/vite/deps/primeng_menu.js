import {
  Tooltip,
  TooltipModule
} from "./chunk-MH3NRK5S.js";
import {
  ConnectedOverlayScrollHandler
} from "./chunk-5G7WYC4N.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-NXNCPRYI.js";
import {
  DomSanitizer
} from "./chunk-K37J6QS7.js";
import "./chunk-UICUEX3X.js";
import "./chunk-SNSIKKVG.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-F5CXBDJW.js";
import {
  zindexutils
} from "./chunk-5H5CNZCN.js";
import {
  Ripple
} from "./chunk-GEBZWMNR.js";
import {
  Badge,
  BadgeModule
} from "./chunk-RFZN6HGJ.js";
import {
  BaseComponent
} from "./chunk-OW5WFU2K.js";
import {
  BaseStyle
} from "./chunk-DN2EO6DW.js";
import {
  OverlayService,
  PrimeTemplate,
  SharedModule,
  absolutePosition,
  appendChild,
  find,
  findSingle,
  focus,
  isTouchDevice,
  relativePosition,
  uuid
} from "./chunk-YLBEBIJC.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-RPEKHEIL.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Pipe,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-Z5C32KRW.js";
import "./chunk-HM5YLMWO.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-menu.mjs
var _c0 = ["pMenuItemContent", ""];
var _c1 = (a0) => ({
  "p-disabled": a0
});
var _c2 = (a0) => ({
  $implicit: a0
});
var _c3 = () => ({
  exact: false
});
function MenuItemContent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 6);
    ɵɵtemplate(1, MenuItemContent_ng_container_1_a_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    const itemContent_r3 = ɵɵreference(4);
    ɵɵproperty("target", ctx_r1.item.target)("ngClass", ɵɵpureFunction1(9, _c1, ctx_r1.item.disabled));
    ɵɵattribute("title", ctx_r1.item.title)("href", ctx_r1.item.url || null, ɵɵsanitizeUrl)("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("data-pc-section", "action");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c2, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 8);
    ɵɵtemplate(1, MenuItemContent_ng_container_1_a_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    const itemContent_r3 = ɵɵreference(4);
    ɵɵproperty("routerLink", ctx_r1.item.routerLink)("queryParams", ctx_r1.item.queryParams)("routerLinkActiveOptions", ctx_r1.item.routerLinkActiveOptions || ɵɵpureFunction0(17, _c3))("target", ctx_r1.item.target)("ngClass", ɵɵpureFunction1(18, _c1, ctx_r1.item.disabled))("fragment", ctx_r1.item.fragment)("queryParamsHandling", ctx_r1.item.queryParamsHandling)("preserveFragment", ctx_r1.item.preserveFragment)("skipLocationChange", ctx_r1.item.skipLocationChange)("replaceUrl", ctx_r1.item.replaceUrl)("state", ctx_r1.item.state);
    ɵɵattribute("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("data-pc-section", "action")("title", ctx_r1.item.title);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", ɵɵpureFunction1(20, _c2, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenuItemContent_ng_container_1_a_1_Template, 2, 13, "a", 4)(2, MenuItemContent_ng_container_1_a_2_Template, 2, 22, "a", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r1.item == null ? null : ctx_r1.item.routerLink));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.item == null ? null : ctx_r1.item.routerLink);
  }
}
function MenuItemContent_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function MenuItemContent_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MenuItemContent_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenuItemContent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenuItemContent_ng_container_2_1_Template, 1, 0, null, 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r1.item));
  }
}
function MenuItemContent_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.item.iconClass);
    ɵɵproperty("ngClass", ctx_r1.item.icon)("ngStyle", ctx_r1.item.iconStyle);
  }
}
function MenuItemContent_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.item.label);
  }
}
function MenuItemContent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 14);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, ctx_r1.item.label), ɵɵsanitizeHtml);
  }
}
function MenuItemContent_ng_template_3_p_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-badge", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("styleClass", ctx_r1.item.badgeStyleClass)("value", ctx_r1.item.badge);
  }
}
function MenuItemContent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MenuItemContent_ng_template_3_span_0_Template, 1, 4, "span", 9)(1, MenuItemContent_ng_template_3_span_1_Template, 2, 1, "span", 10)(2, MenuItemContent_ng_template_3_ng_template_2_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, MenuItemContent_ng_template_3_p_badge_4_Template, 1, 2, "p-badge", 11);
  }
  if (rf & 2) {
    const htmlLabel_r4 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.item.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.item.escape !== false)("ngIfElse", htmlLabel_r4);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.item.badge);
  }
}
var _c4 = ["start"];
var _c5 = ["end"];
var _c6 = ["header"];
var _c7 = ["item"];
var _c8 = ["submenuheader"];
var _c9 = ["list"];
var _c10 = ["container"];
var _c11 = (a0) => ({
  "p-menu p-component": true,
  "p-menu-overlay": a0
});
var _c12 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c13 = (a0) => ({
  value: "visible",
  params: a0
});
var _c14 = (a0, a1) => ({
  "p-hidden": a0,
  flex: a1
});
var _c15 = (a0, a1) => ({
  "p-focus": a0,
  "p-disabled": a1
});
function Menu_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Menu_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, Menu_div_0_div_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "start");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (tmp_5_0 = ctx_r1.startTemplate) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : ctx_r1._startTemplate);
  }
}
function Menu_div_0_5_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 14);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const submenu_r3 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(submenu_r3.label);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const submenu_r3 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, submenu_r3.label), ɵɵsanitizeHtml);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template, 2, 1, "span", 17)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template, 2, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlSubmenuLabel_r4 = ɵɵreference(3);
    const submenu_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", submenu_r3.escape !== false)("ngIfElse", htmlSubmenuLabel_r4);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Menu_div_0_5_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 15);
    ɵɵtemplate(1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template, 4, 2, "ng-container", 7)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r4 = ɵɵnextContext();
    const submenu_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction2(7, _c14, submenu_r3.visible === false, submenu_r3.visible))("tooltipOptions", submenu_r3.tooltipOptions);
    ɵɵattribute("data-automationid", submenu_r3.automationId)("id", ctx_r1.menuitemId(submenu_r3, ctx_r1.id, i_r6));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.submenuHeaderTemplate && !ctx_r1._submenuHeaderTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (tmp_13_0 = ctx_r1.submenuHeaderTemplate) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : ctx_r1._submenuHeaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c2, submenu_r3));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 14);
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 20);
    ɵɵlistener("onMenuItemClick", function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template_li_onMenuItemClick_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r7 = ɵɵnextContext();
      const item_r9 = ctx_r7.$implicit;
      const j_r10 = ctx_r7.index;
      const i_r6 = ɵɵnextContext().index;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10)));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r7 = ɵɵnextContext();
    const item_r9 = ctx_r7.$implicit;
    const j_r10 = ctx_r7.index;
    const i_r6 = ɵɵnextContext().index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(item_r9.styleClass);
    ɵɵproperty("pMenuItemContent", item_r9)("itemTemplate", (tmp_13_0 = ctx_r1.itemTemplate) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : ctx_r1._itemTemplate)("ngClass", ɵɵpureFunction2(13, _c15, ctx_r1.focusedOptionId() && ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10) === ctx_r1.focusedOptionId(), ctx_r1.disabled(item_r9.disabled)))("ngStyle", item_r9.style)("tooltipOptions", item_r9.tooltipOptions);
    ɵɵattribute("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r9.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10)))("data-p-disabled", ctx_r1.disabled(item_r9.disabled))("aria-disabled", ctx_r1.disabled(item_r9.disabled))("id", ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template, 1, 0, "li", 12)(1, Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template, 1, 16, "li", 19);
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const submenu_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngIf", item_r9.separator && (item_r9.visible !== false || submenu_r3.visible !== false));
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r9.separator && item_r9.visible !== false && (item_r9.visible !== void 0 || submenu_r3.visible !== false));
  }
}
function Menu_div_0_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_5_ng_template_0_li_0_Template, 1, 0, "li", 12)(1, Menu_div_0_5_ng_template_0_li_1_Template, 3, 12, "li", 13)(2, Menu_div_0_5_ng_template_0_ng_template_2_Template, 2, 2, "ng-template", 11);
  }
  if (rf & 2) {
    const submenu_r3 = ctx.$implicit;
    ɵɵproperty("ngIf", submenu_r3.separator && submenu_r3.visible !== false);
    ɵɵadvance();
    ɵɵproperty("ngIf", !submenu_r3.separator);
    ɵɵadvance();
    ɵɵproperty("ngForOf", submenu_r3.items);
  }
}
function Menu_div_0_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_5_ng_template_0_Template, 3, 3, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_6_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 14);
  }
}
function Menu_div_0_6_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 20);
    ɵɵlistener("onMenuItemClick", function Menu_div_0_6_ng_template_0_li_1_Template_li_onMenuItemClick_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r11 = ɵɵnextContext();
      const item_r13 = ctx_r11.$implicit;
      const i_r14 = ctx_r11.index;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14)));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r11 = ɵɵnextContext();
    const item_r13 = ctx_r11.$implicit;
    const i_r14 = ctx_r11.index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(item_r13.styleClass);
    ɵɵproperty("pMenuItemContent", item_r13)("itemTemplate", (tmp_10_0 = ctx_r1.itemTemplate) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : ctx_r1._itemTemplate)("ngClass", ɵɵpureFunction2(13, _c15, ctx_r1.focusedOptionId() && ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14) === ctx_r1.focusedOptionId(), ctx_r1.disabled(item_r13.disabled)))("ngStyle", item_r13.style)("tooltipOptions", item_r13.tooltipOptions);
    ɵɵattribute("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r13.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14)))("data-p-disabled", ctx_r1.disabled(item_r13.disabled))("aria-disabled", ctx_r1.disabled(item_r13.disabled))("id", ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14));
  }
}
function Menu_div_0_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_6_ng_template_0_li_0_Template, 1, 0, "li", 12)(1, Menu_div_0_6_ng_template_0_li_1_Template, 1, 16, "li", 19);
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    ɵɵproperty("ngIf", item_r13.separator && item_r13.visible !== false);
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r13.separator && item_r13.visible !== false);
  }
}
function Menu_div_0_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_6_ng_template_0_Template, 2, 2, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Menu_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, Menu_div_0_div_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "end");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (tmp_5_0 = ctx_r1.endTemplate) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : ctx_r1._endTemplate);
  }
}
function Menu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4, 0);
    ɵɵlistener("click", function Menu_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function Menu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Menu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    ɵɵtemplate(2, Menu_div_0_div_2_Template, 2, 2, "div", 5);
    ɵɵelementStart(3, "ul", 6, 1);
    ɵɵlistener("focus", function Menu_div_0_Template_ul_focus_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onListFocus($event));
    })("blur", function Menu_div_0_Template_ul_blur_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onListBlur($event));
    })("keydown", function Menu_div_0_Template_ul_keydown_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onListKeyDown($event));
    });
    ɵɵtemplate(5, Menu_div_0_5_Template, 1, 1, null, 7)(6, Menu_div_0_6_Template, 1, 1, null, 7);
    ɵɵelementEnd();
    ɵɵtemplate(7, Menu_div_0_div_7_Template, 2, 2, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_19_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction1(18, _c11, ctx_r1.popup))("ngStyle", ctx_r1.style)("@overlayAnimation", ɵɵpureFunction1(23, _c13, ɵɵpureFunction2(20, _c12, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.popup !== true);
    ɵɵattribute("data-pc-name", "menu")("id", ctx_r1.id);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (tmp_10_0 = ctx_r1.startTemplate) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : ctx_r1._startTemplate);
    ɵɵadvance();
    ɵɵattribute("id", ctx_r1.id + "_list")("tabindex", ctx_r1.getTabIndexValue())("data-pc-section", "menu")("aria-activedescendant", ctx_r1.activedescendant())("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.hasSubMenu());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.hasSubMenu());
    ɵɵadvance();
    ɵɵproperty("ngIf", (tmp_19_0 = ctx_r1.endTemplate) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : ctx_r1._endTemplate);
  }
}
var theme = ({
  dt
}) => `
.p-menu {
    background: ${dt("menu.background")};
    color: ${dt("menu.color")};
    border: 1px solid ${dt("menu.border.color")};
    border-radius: ${dt("menu.border.radius")};
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: ${dt("menu.list.padding")};
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${dt("menu.list.gap")};
}

.p-menu-item-content {
    transition: background ${dt("menu.transition.duration")}, color ${dt("menu.transition.duration")};
    border-radius: ${dt("menu.item.border.radius")};
    color: ${dt("menu.item.color")};
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${dt("menu.item.padding")};
    gap: ${dt("menu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: ${dt("menu.item.icon.color")};
}

.p-menu-item.p-focus .p-menu-item-content {
    color: ${dt("menu.item.focus.color")};
    background: ${dt("menu.item.focus.background")};
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: ${dt("menu.item.icon.focus.color")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: ${dt("menu.item.focus.color")};
    background: ${dt("menu.item.focus.background")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: ${dt("menu.item.icon.focus.color")};
}

.p-menu-overlay {
    box-shadow: ${dt("menu.shadow")};
}

.p-menu-submenu-label {
    background: ${dt("menu.submenu.label.background")};
    padding: ${dt("menu.submenu.label.padding")};
    color: ${dt("menu.submenu.label.color")};
    font-weight: ${dt("menu.submenu.label.font.weight")};
}

.p-menu-separator {
    border-top: 1px solid ${dt("menu.separator.border.color")};
}

/* For PrimeNG */
.p-menu-overlay {
    position: absolute;
}
`;
var classes = {
  root: ({
    props
  }) => ["p-menu p-component", {
    "p-menu-overlay": props.popup
  }],
  start: "p-menu-start",
  list: "p-menu-list",
  submenuLabel: "p-menu-submenu-label",
  separator: "p-menu-separator",
  end: "p-menu-end",
  item: ({
    instance
  }) => ["p-menu-item", {
    "p-focus": instance.id === instance.focusedOptionId,
    "p-disabled": instance.disabled()
  }],
  itemContent: "p-menu-item-content",
  itemLink: "p-menu-item-link",
  itemIcon: "p-menu-item-icon",
  itemLabel: "p-menu-item-label"
};
var MenuStyle = class _MenuStyle extends BaseStyle {
  name = "menu";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMenuStyle_BaseFactory;
    return function MenuStyle_Factory(__ngFactoryType__) {
      return (ɵMenuStyle_BaseFactory || (ɵMenuStyle_BaseFactory = ɵɵgetInheritedFactory(_MenuStyle)))(__ngFactoryType__ || _MenuStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _MenuStyle,
    factory: _MenuStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuStyle, [{
    type: Injectable
  }], null, null);
})();
var MenuClasses;
(function(MenuClasses2) {
  MenuClasses2["root"] = "p-menu";
  MenuClasses2["start"] = "p-menu-start";
  MenuClasses2["list"] = "p-menu-list";
  MenuClasses2["submenuItem"] = "p-menu-submenu-item";
  MenuClasses2["separator"] = "p-menu-separator";
  MenuClasses2["end"] = "p-menu-end";
  MenuClasses2["item"] = "p-menu-item";
  MenuClasses2["itemContent"] = "p-menu-item-content";
  MenuClasses2["itemLink"] = "p-menu-item-link";
  MenuClasses2["itemIcon"] = "p-menu-item-icon";
  MenuClasses2["itemLabel"] = "p-menu-item-label";
})(MenuClasses || (MenuClasses = {}));
var SafeHtmlPipe = class _SafeHtmlPipe {
  platformId;
  sanitizer;
  constructor(platformId, sanitizer) {
    this.platformId = platformId;
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (!value || !isPlatformBrowser(this.platformId)) {
      return value;
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static ɵfac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafeHtmlPipe)(ɵɵdirectiveInject(PLATFORM_ID, 16), ɵɵdirectiveInject(DomSanitizer, 16));
  };
  static ɵpipe = ɵɵdefinePipe({
    name: "safeHtml",
    type: _SafeHtmlPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml",
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: DomSanitizer
  }], null);
})();
var MenuItemContent = class _MenuItemContent {
  item;
  itemTemplate;
  onMenuItemClick = new EventEmitter();
  menu;
  constructor(menu) {
    this.menu = menu;
  }
  onItemClick(event, item) {
    this.onMenuItemClick.emit({
      originalEvent: event,
      item
    });
  }
  static ɵfac = function MenuItemContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuItemContent)(ɵɵdirectiveInject(forwardRef(() => Menu)));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MenuItemContent,
    selectors: [["", "pMenuItemContent", ""]],
    inputs: {
      item: [0, "pMenuItemContent", "item"],
      itemTemplate: "itemTemplate"
    },
    outputs: {
      onMenuItemClick: "onMenuItemClick"
    },
    attrs: _c0,
    decls: 5,
    vars: 3,
    consts: [["itemContent", ""], ["htmlLabel", ""], [1, "p-menu-item-content", 3, "click"], [4, "ngIf"], ["class", "p-menu-item-link", "pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["routerLinkActive", "p-menu-item-link-active", "class", "p-menu-item-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 1, "p-menu-item-link", 3, "target", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["routerLinkActive", "p-menu-item-link-active", "pRipple", "", 1, "p-menu-item-link", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["class", "p-menu-item-icon", 3, "ngClass", "class", "ngStyle", 4, "ngIf"], ["class", "p-menu-item-label", 4, "ngIf", "ngIfElse"], [3, "styleClass", "value", 4, "ngIf"], [1, "p-menu-item-icon", 3, "ngClass", "ngStyle"], [1, "p-menu-item-label"], [1, "p-menu-item-label", 3, "innerHTML"], [3, "styleClass", "value"]],
    template: function MenuItemContent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 2);
        ɵɵlistener("click", function MenuItemContent_Template_div_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemClick($event, ctx.item));
        });
        ɵɵtemplate(1, MenuItemContent_ng_container_1_Template, 3, 2, "ng-container", 3)(2, MenuItemContent_ng_container_2_Template, 2, 4, "ng-container", 3)(3, MenuItemContent_ng_template_3_Template, 5, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵattribute("data-pc-section", "content");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.itemTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.itemTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, Ripple, TooltipModule, BadgeModule, Badge, SharedModule, SafeHtmlPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemContent, [{
    type: Component,
    args: [{
      selector: "[pMenuItemContent]",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, BadgeModule, SharedModule, SafeHtmlPipe],
      template: `
        <div [attr.data-pc-section]="'content'" class="p-menu-item-content" (click)="onItemClick($event, item)">
            <ng-container *ngIf="!itemTemplate">
                <a
                    *ngIf="!item?.routerLink"
                    [attr.title]="item.title"
                    [attr.href]="item.url || null"
                    [attr.data-automationid]="item.automationId"
                    [attr.tabindex]="-1"
                    [attr.data-pc-section]="'action'"
                    class="p-menu-item-link"
                    [target]="item.target"
                    [ngClass]="{ 'p-disabled': item.disabled }"
                    pRipple
                >
                    <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
                </a>
                <a
                    *ngIf="item?.routerLink"
                    [routerLink]="item.routerLink"
                    [attr.data-automationid]="item.automationId"
                    [attr.tabindex]="-1"
                    [attr.data-pc-section]="'action'"
                    [attr.title]="item.title"
                    [queryParams]="item.queryParams"
                    routerLinkActive="p-menu-item-link-active"
                    [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                    class="p-menu-item-link"
                    [target]="item.target"
                    [ngClass]="{ 'p-disabled': item.disabled }"
                    [fragment]="item.fragment"
                    [queryParamsHandling]="item.queryParamsHandling"
                    [preserveFragment]="item.preserveFragment"
                    [skipLocationChange]="item.skipLocationChange"
                    [replaceUrl]="item.replaceUrl"
                    [state]="item.state"
                    pRipple
                >
                    <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
                </a>
            </ng-container>

            <ng-container *ngIf="itemTemplate">
                <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-template>
            </ng-container>

            <ng-template #itemContent>
                <span class="p-menu-item-icon" *ngIf="item.icon" [ngClass]="item.icon" [class]="item.iconClass" [ngStyle]="item.iconStyle"></span>
                <span class="p-menu-item-label" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
                <ng-template #htmlLabel><span class="p-menu-item-label" [innerHTML]="item.label | safeHtml"></span></ng-template>
                <p-badge *ngIf="item.badge" [styleClass]="item.badgeStyleClass" [value]="item.badge" />
            </ng-template>
        </div>
    `,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Menu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => Menu)]
    }]
  }], {
    item: [{
      type: Input,
      args: ["pMenuItemContent"]
    }],
    itemTemplate: [{
      type: Input
    }],
    onMenuItemClick: [{
      type: Output
    }]
  });
})();
var Menu = class _Menu extends BaseComponent {
  overlayService;
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Defines if menu would displayed as a popup.
   * @group Props
   */
  popup;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the list loses focus.
   * @param {Event} event - blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when the list receives focus.
   * @param {Event} event - focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  listViewChild;
  containerViewChild;
  container;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  preventDocumentDefault;
  target;
  visible;
  focusedOptionId = computed(() => {
    return this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : null;
  });
  focusedOptionIndex = signal(-1);
  selectedOptionIndex = signal(-1);
  focused = false;
  overlayVisible = false;
  relativeAlign;
  _componentStyle = inject(MenuStyle);
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
    this.id = this.id || uuid("pn_id_");
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    if (this.visible) this.hide();
    else this.show(event);
    this.preventDocumentDefault = true;
  }
  /**
   * Displays the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  show(event) {
    this.target = event.currentTarget;
    this.relativeAlign = event.relativeAlign;
    this.visible = true;
    this.preventDocumentDefault = true;
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.popup) {
      this.bindDocumentClickListener();
    }
  }
  /**
   * Defines template option for start.
   * @group Templates
   */
  startTemplate;
  _startTemplate;
  /**
   * Defines template option for end.
   * @group Templates
   */
  endTemplate;
  _endTemplate;
  /**
   * Defines template option for header.
   * @group Templates
   */
  headerTemplate;
  _headerTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  submenuHeaderTemplate;
  _submenuHeaderTemplate;
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this._startTemplate = item.template;
          break;
        case "end":
          this._endTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        case "submenuheader":
          this._submenuHeaderTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  getTabIndexValue() {
    return this.tabindex !== void 0 ? this.tabindex.toString() : null;
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (this.popup) {
          this.container = event.element;
          this.moveOnTop();
          this.onShow.emit({});
          this.appendOverlay();
          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          focus(this.listViewChild.nativeElement);
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onHide.emit({});
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event.element);
        }
        break;
    }
  }
  alignOverlay() {
    if (this.relativeAlign) relativePosition(this.container, this.target);
    else absolutePosition(this.container, this.target);
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.container);
      else appendChild(this.appendTo, this.container);
    }
  }
  restoreOverlayAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide() {
    this.visible = false;
    this.relativeAlign = false;
    this.cd.markForCheck();
  }
  onWindowResize() {
    if (this.visible && !isTouchDevice()) {
      this.hide();
    }
  }
  menuitemId(item, id, index, childIndex) {
    return item?.id ?? `${id}_${index}${childIndex !== void 0 ? "_" + childIndex : ""}`;
  }
  isItemFocused(id) {
    return this.focusedOptionId() === id;
  }
  label(label) {
    return typeof label === "function" ? label() : label;
  }
  disabled(disabled) {
    return typeof disabled === "function" ? disabled() : typeof disabled === "undefined" ? false : disabled;
  }
  activedescendant() {
    return this.focused ? this.focusedOptionId() : void 0;
  }
  onListFocus(event) {
    if (!this.focused) {
      this.focused = true;
      this.onFocus.emit(event);
    }
  }
  onListBlur(event) {
    if (this.focused) {
      this.focused = false;
      this.changeFocusedOptionIndex(-1);
      this.selectedOptionIndex.set(-1);
      this.focusedOptionIndex.set(-1);
      this.onBlur.emit(event);
    }
  }
  onListKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Escape":
      case "Tab":
        if (this.popup) {
          focus(this.target);
          this.hide();
        }
        this.overlayVisible && this.hide();
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex());
    this.changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey && this.popup) {
      focus(this.target);
      this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex());
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedOptionIndex(0);
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedOptionIndex(find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
    event.preventDefault();
  }
  onEnterKey(event) {
    const element = findSingle(this.containerViewChild.nativeElement, `li[id="${`${this.focusedOptionIndex()}`}"]`);
    const anchorElement = element && findSingle(element, 'a[data-pc-section="action"]');
    this.popup && focus(this.target);
    anchorElement ? anchorElement.click() : element && element.click();
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  findNextOptionIndex(index) {
    const links = find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  findPrevOptionIndex(index) {
    const links = find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  changeFocusedOptionIndex(index) {
    const links = find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    if (links.length > 0) {
      let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
      order > -1 && this.focusedOptionIndex.set(links[order].getAttribute("id"));
    }
  }
  itemClick(event, id) {
    const {
      originalEvent,
      item
    } = event;
    if (!this.focused) {
      this.focused = true;
      this.onFocus.emit();
    }
    if (item.disabled) {
      originalEvent.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      originalEvent.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent,
        item
      });
    }
    if (this.popup) {
      this.hide();
    }
    if (!this.popup && this.focusedOptionIndex() !== id) {
      this.focusedOptionIndex.set(id);
    }
  }
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
    this.preventDocumentDefault = true;
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener && isPlatformBrowser(this.platformId)) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", (event) => {
        const isOutsideContainer = this.containerViewChild?.nativeElement && !this.containerViewChild?.nativeElement.contains(event.target);
        const isOutsideTarget = !(this.target && (this.target === event.target || this.target.contains(event.target)));
        if (!this.popup && isOutsideContainer && isOutsideTarget) {
          this.onListBlur(event);
        }
        if (this.preventDocumentDefault && this.overlayVisible && isOutsideContainer && isOutsideTarget) {
          this.hide();
          this.preventDocumentDefault = false;
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener && isPlatformBrowser(this.platformId)) {
      const window = this.document.defaultView;
      this.documentResizeListener = this.renderer.listen(window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler && isPlatformBrowser(this.platformId)) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler?.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
      this.scrollHandler = null;
    }
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.preventDocumentDefault = false;
    if (!this.cd.destroyed) {
      this.target = null;
    }
  }
  ngOnDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.container && this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    if (!this.popup) {
      this.unbindDocumentClickListener();
    }
    super.ngOnDestroy();
  }
  hasSubMenu() {
    return this.model?.some((item) => item.items) ?? false;
  }
  isItemHidden(item) {
    if (item.separator) {
      return item.visible === false || item.items && item.items.some((subitem) => subitem.visible !== false);
    }
    return item.visible === false;
  }
  static ɵfac = function Menu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Menu)(ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Menu,
    selectors: [["p-menu"]],
    contentQueries: function Menu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, _c5, 4);
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, _c8, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.startTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.endTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.submenuHeaderTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Menu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c9, 5);
        ɵɵviewQuery(_c10, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      model: "model",
      popup: [2, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      appendTo: "appendTo",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      id: "id",
      tabindex: [2, "tabindex", "tabindex", numberAttribute]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      onBlur: "onBlur",
      onFocus: "onFocus"
    },
    features: [ɵɵProvidersFeature([MenuStyle]), ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["list", ""], ["htmlSubmenuLabel", ""], [3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "click", "ngClass", "ngStyle"], ["class", "p-menu-start", 4, "ngIf"], ["role", "menu", 1, "p-menu-list", "p-reset", 3, "focus", "blur", "keydown"], [4, "ngIf"], ["class", "p-menu-end", 4, "ngIf"], [1, "p-menu-start"], [4, "ngTemplateOutlet"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", "role", "separator", 4, "ngIf"], ["class", "p-menu-submenu-label", "pTooltip", "", "role", "none", 3, "ngClass", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator"], ["pTooltip", "", "role", "none", 1, "p-menu-submenu-label", 3, "ngClass", "tooltipOptions"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "innerHTML"], ["class", "p-menu-item", "pTooltip", "", "role", "menuitem", 3, "pMenuItemContent", "itemTemplate", "ngClass", "ngStyle", "class", "tooltipOptions", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 1, "p-menu-item", 3, "onMenuItemClick", "pMenuItemContent", "itemTemplate", "ngClass", "ngStyle", "tooltipOptions"], [1, "p-menu-end"]],
    template: function Menu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Menu_div_0_Template, 8, 25, "div", 3);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.popup || ctx.visible);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, MenuItemContent, TooltipModule, Tooltip, BadgeModule, SharedModule, SafeHtmlPipe],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Menu, [{
    type: Component,
    args: [{
      selector: "p-menu",
      standalone: true,
      imports: [CommonModule, RouterModule, MenuItemContent, TooltipModule, BadgeModule, SharedModule, SafeHtmlPipe],
      template: `
        <div
            #container
            [ngClass]="{ 'p-menu p-component': true, 'p-menu-overlay': popup }"
            [class]="styleClass"
            [ngStyle]="style"
            *ngIf="!popup || visible"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [@.disabled]="popup !== true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            [attr.data-pc-name]="'menu'"
            [attr.id]="id"
        >
            <div *ngIf="startTemplate ?? _startTemplate" class="p-menu-start" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="startTemplate ?? _startTemplate"></ng-container>
            </div>
            <ul
                #list
                class="p-menu-list p-reset"
                role="menu"
                [attr.id]="id + '_list'"
                [attr.tabindex]="getTabIndexValue()"
                [attr.data-pc-section]="'menu'"
                [attr.aria-activedescendant]="activedescendant()"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                (focus)="onListFocus($event)"
                (blur)="onListBlur($event)"
                (keydown)="onListKeyDown($event)"
            >
                <ng-template ngFor let-submenu let-i="index" [ngForOf]="model" *ngIf="hasSubMenu()">
                    <li class="p-menu-separator" *ngIf="submenu.separator && submenu.visible !== false" role="separator"></li>
                    <li
                        class="p-menu-submenu-label"
                        [attr.data-automationid]="submenu.automationId"
                        *ngIf="!submenu.separator"
                        [ngClass]="{ 'p-hidden': submenu.visible === false, flex: submenu.visible }"
                        pTooltip
                        [tooltipOptions]="submenu.tooltipOptions"
                        role="none"
                        [attr.id]="menuitemId(submenu, id, i)"
                    >
                        <ng-container *ngIf="!submenuHeaderTemplate && !_submenuHeaderTemplate">
                            <span *ngIf="submenu.escape !== false; else htmlSubmenuLabel">{{ submenu.label }}</span>
                            <ng-template #htmlSubmenuLabel><span [innerHTML]="submenu.label | safeHtml"></span></ng-template>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="submenuHeaderTemplate ?? _submenuHeaderTemplate; context: { $implicit: submenu }"></ng-container>
                    </li>
                    <ng-template ngFor let-item let-j="index" [ngForOf]="submenu.items">
                        <li class="p-menu-separator" *ngIf="item.separator && (item.visible !== false || submenu.visible !== false)" role="separator"></li>
                        <li
                            class="p-menu-item"
                            *ngIf="!item.separator && item.visible !== false && (item.visible !== undefined || submenu.visible !== false)"
                            [pMenuItemContent]="item"
                            [itemTemplate]="itemTemplate ?? _itemTemplate"
                            [ngClass]="{
                                'p-focus': focusedOptionId() && menuitemId(item, id, i, j) === focusedOptionId(),
                                'p-disabled': disabled(item.disabled)
                            }"
                            [ngStyle]="item.style"
                            [class]="item.styleClass"
                            (onMenuItemClick)="itemClick($event, menuitemId(item, id, i, j))"
                            pTooltip
                            [tooltipOptions]="item.tooltipOptions"
                            role="menuitem"
                            [attr.data-pc-section]="'menuitem'"
                            [attr.aria-label]="label(item.label)"
                            [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i, j))"
                            [attr.data-p-disabled]="disabled(item.disabled)"
                            [attr.aria-disabled]="disabled(item.disabled)"
                            [attr.id]="menuitemId(item, id, i, j)"
                        ></li>
                    </ng-template>
                </ng-template>
                <ng-template ngFor let-item let-i="index" [ngForOf]="model" *ngIf="!hasSubMenu()">
                    <li class="p-menu-separator" *ngIf="item.separator && item.visible !== false" role="separator"></li>
                    <li
                        class="p-menu-item"
                        *ngIf="!item.separator && item.visible !== false"
                        [pMenuItemContent]="item"
                        [itemTemplate]="itemTemplate ?? _itemTemplate"
                        [ngClass]="{
                            'p-focus': focusedOptionId() && menuitemId(item, id, i) === focusedOptionId(),
                            'p-disabled': disabled(item.disabled)
                        }"
                        [ngStyle]="item.style"
                        [class]="item.styleClass"
                        (onMenuItemClick)="itemClick($event, menuitemId(item, id, i))"
                        pTooltip
                        [tooltipOptions]="item.tooltipOptions"
                        role="menuitem"
                        [attr.data-pc-section]="'menuitem'"
                        [attr.aria-label]="label(item.label)"
                        [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i))"
                        [attr.data-p-disabled]="disabled(item.disabled)"
                        [attr.aria-disabled]="disabled(item.disabled)"
                        [attr.id]="menuitemId(item, id, i)"
                    ></li>
                </ng-template>
            </ul>
            <div *ngIf="endTemplate ?? _endTemplate" class="p-menu-end" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="endTemplate ?? _endTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MenuStyle]
    }]
  }], () => [{
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", {
        descendants: false
      }]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    submenuHeaderTemplate: [{
      type: ContentChild,
      args: ["submenuheader", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MenuModule = class _MenuModule {
  static ɵfac = function MenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MenuModule,
    imports: [Menu, SharedModule, SafeHtmlPipe],
    exports: [Menu, SharedModule, SafeHtmlPipe]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Menu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuModule, [{
    type: NgModule,
    args: [{
      imports: [Menu, SharedModule, SafeHtmlPipe],
      exports: [Menu, SharedModule, SafeHtmlPipe]
    }]
  }], null, null);
})();
export {
  Menu,
  MenuClasses,
  MenuItemContent,
  MenuModule,
  MenuStyle,
  SafeHtmlPipe
};
//# sourceMappingURL=primeng_menu.js.map
