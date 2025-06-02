import {
  Ripple,
  RippleModule
} from "./chunk-7CASXX42.js";
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "./chunk-6DDEEH6N.js";
import {
  BaseComponent
} from "./chunk-RHUCIING.js";
import {
  BaseStyle
} from "./chunk-PQ2U6TIQ.js";
import {
  PrimeTemplate,
  SharedModule,
  equals,
  findSingle,
  focus,
  getAttribute,
  getOffset,
  getOuterWidth,
  getWidth,
  isRTL,
  uuid
} from "./chunk-RA2TSF4P.js";
import {
  CommonModule,
  NgClass,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-RBTQK5UD.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostListener,
  Injectable,
  NgModule,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-TYWYC7CF.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-tabs.mjs
var _c0 = ["previcon"];
var _c1 = ["nexticon"];
var _c2 = ["content"];
var _c3 = ["prevButton"];
var _c4 = ["nextButton"];
var _c5 = ["inkbar"];
var _c6 = ["tabs"];
var _c7 = ["*"];
var _c8 = (a0) => ({
  "p-tablist-viewport": a0
});
function TabList_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabList_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabList_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.prevIconTemplate || ctx_r2._prevIconTemplate);
  }
}
function TabList_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronLeftIcon");
  }
}
function TabList_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10, 3);
    ɵɵlistener("click", function TabList_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onPrevButtonClick());
    });
    ɵɵtemplate(2, TabList_Conditional_0_Conditional_2_Template, 1, 1, "ng-container")(3, TabList_Conditional_0_Conditional_3_Template, 1, 0, "ChevronLeftIcon");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("aria-label", ctx_r2.prevButtonAriaLabel)("tabindex", ctx_r2.tabindex())("data-pc-group-section", "navigator");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r2.prevIconTemplate || ctx_r2._prevIconTemplate ? 2 : 3);
  }
}
function TabList_Conditional_8_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabList_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabList_Conditional_8_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.nextIconTemplate || ctx_r2._nextIconTemplate);
  }
}
function TabList_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon");
  }
}
function TabList_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12, 4);
    ɵɵlistener("click", function TabList_Conditional_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onNextButtonClick());
    });
    ɵɵtemplate(2, TabList_Conditional_8_Conditional_2_Template, 1, 1, "ng-container")(3, TabList_Conditional_8_Conditional_3_Template, 1, 0, "ChevronRightIcon");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("aria-label", ctx_r2.nextButtonAriaLabel)("tabindex", ctx_r2.tabindex())("data-pc-group-section", "navigator");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r2.nextIconTemplate || ctx_r2._nextIconTemplate ? 2 : 3);
  }
}
function TabPanel_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var theme = ({
  dt
}) => `
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${dt("tabs.tablist.background")};
    border-style: solid;
    border-color: ${dt("tabs.tablist.border.color")};
    border-width: ${dt("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${dt("tabs.nav.button.background")};
    color: ${dt("tabs.nav.button.color")};
    width: ${dt("tabs.nav.button.width")};
    transition: color ${dt("tabs.transition.duration")}, outline-color ${dt("tabs.transition.duration")}, box-shadow ${dt("tabs.transition.duration")};
    box-shadow: ${dt("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${dt("tabs.nav.button.focus.ring.shadow")};
    outline: ${dt("tabs.nav.button.focus.ring.width")} ${dt("tabs.nav.button.focus.ring.style")} ${dt("tabs.nav.button.focus.ring.color")};
    outline-offset: ${dt("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${dt("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${dt("tabs.tab.gap")};
    background: ${dt("tabs.tab.background")};
    border-width: ${dt("tabs.tab.border.width")};
    border-color: ${dt("tabs.tab.border.color")};
    color: ${dt("tabs.tab.color")};
    padding: ${dt("tabs.tab.padding")};
    font-weight: ${dt("tabs.tab.font.weight")};
    transition: background ${dt("tabs.transition.duration")}, border-color ${dt("tabs.transition.duration")}, color ${dt("tabs.transition.duration")}, outline-color ${dt("tabs.transition.duration")}, box-shadow ${dt("tabs.transition.duration")};
    margin: ${dt("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${dt("tabs.tab.focus.ring.shadow")};
    outline: ${dt("tabs.tab.focus.ring.width")} ${dt("tabs.tab.focus.ring.style")} ${dt("tabs.tab.focus.ring.color")};
    outline-offset: ${dt("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${dt("tabs.tab.hover.background")};
    border-color: ${dt("tabs.tab.hover.border.color")};
    color: ${dt("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${dt("tabs.tab.active.background")};
    border-color: ${dt("tabs.tab.active.border.color")};
    color: ${dt("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${dt("tabs.tabpanel.background")};
    color: ${dt("tabs.tabpanel.color")};
    padding: ${dt("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${dt("tabs.tabpanel.focus.ring.shadow")};
    outline: ${dt("tabs.tabpanel.focus.ring.width")} ${dt("tabs.tabpanel.focus.ring.style")} ${dt("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${dt("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${dt("tabs.active.bar.bottom")};
    height: ${dt("tabs.active.bar.height")};
    background: ${dt("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`;
var classes = {
  root: ({
    props
  }) => ["p-tabs p-component", {
    "p-tabs-scrollable": props.scrollable
  }]
};
var TabsStyle = class _TabsStyle extends BaseStyle {
  name = "tabs";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTabsStyle_BaseFactory;
    return function TabsStyle_Factory(__ngFactoryType__) {
      return (ɵTabsStyle_BaseFactory || (ɵTabsStyle_BaseFactory = ɵɵgetInheritedFactory(_TabsStyle)))(__ngFactoryType__ || _TabsStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _TabsStyle,
    factory: _TabsStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsStyle, [{
    type: Injectable
  }], null, null);
})();
var TabsClasses;
(function(TabsClasses2) {
  TabsClasses2["root"] = "p-tabs";
  TabsClasses2["list"] = "p-tablist";
  TabsClasses2["content"] = "p-tablist-content";
  TabsClasses2["tablist"] = "p-tablist-tab-list";
  TabsClasses2["tab"] = "p-tab";
  TabsClasses2["inkbar"] = "p-tablist-active-bar";
  TabsClasses2["button"] = "p-tablist-nav-button";
  TabsClasses2["tabpanels"] = "p-tabpanels";
  TabsClasses2["tabpanel"] = "p-tabs-panel";
})(TabsClasses || (TabsClasses = {}));
var TabList = class _TabList extends BaseComponent {
  /**
   * A template reference variable that represents the previous icon in a UI component.
   * @type {TemplateRef<any> | undefined}
   * @group Templates
   */
  prevIconTemplate;
  /**
   * A template reference variable that represents the next icon in a UI component.
   * @type {TemplateRef<any> | undefined}
   * @group Templates
   */
  nextIconTemplate;
  templates;
  content;
  prevButton;
  nextButton;
  inkbar;
  tabs;
  pcTabs = inject(forwardRef(() => Tabs));
  isPrevButtonEnabled = signal(false);
  isNextButtonEnabled = signal(false);
  resizeObserver;
  showNavigators = computed(() => this.pcTabs.showNavigators());
  tabindex = computed(() => this.pcTabs.tabindex());
  scrollable = computed(() => this.pcTabs.scrollable());
  constructor() {
    super();
    effect(() => {
      this.pcTabs.value();
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          this.updateInkBar();
        });
      }
    });
  }
  get prevButtonAriaLabel() {
    return this.config.translation.aria.previous;
  }
  get nextButtonAriaLabel() {
    return this.config.translation.aria.next;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.showNavigators() && isPlatformBrowser(this.platformId)) {
      this.updateButtonState();
      this.bindResizeObserver();
    }
  }
  _prevIconTemplate;
  _nextIconTemplate;
  ngAfterContentInit() {
    this.templates.forEach((t) => {
      switch (t.getType()) {
        case "previcon":
          this._prevIconTemplate = t.template;
          break;
        case "nexticon":
          this._nextIconTemplate = t.template;
          break;
      }
    });
  }
  ngOnDestroy() {
    this.unbindResizeObserver();
    super.ngOnDestroy();
  }
  onScroll(event) {
    this.showNavigators() && this.updateButtonState();
    event.preventDefault();
  }
  onPrevButtonClick() {
    const _content = this.content.nativeElement;
    const width = getWidth(_content);
    const pos = Math.abs(_content.scrollLeft) - width;
    const scrollLeft = pos <= 0 ? 0 : pos;
    _content.scrollLeft = isRTL(_content) ? -1 * scrollLeft : scrollLeft;
  }
  onNextButtonClick() {
    const _content = this.content.nativeElement;
    const width = getWidth(_content) - this.getVisibleButtonWidths();
    const pos = _content.scrollLeft + width;
    const lastPos = _content.scrollWidth - width;
    const scrollLeft = pos >= lastPos ? lastPos : pos;
    _content.scrollLeft = isRTL(_content) ? -1 * scrollLeft : scrollLeft;
  }
  updateButtonState() {
    const _content = this.content?.nativeElement;
    const _list = this.el?.nativeElement;
    const {
      scrollWidth,
      offsetWidth
    } = _content;
    const scrollLeft = Math.abs(_content.scrollLeft);
    const width = getWidth(_content);
    this.isPrevButtonEnabled.set(scrollLeft !== 0);
    this.isNextButtonEnabled.set(_list.offsetWidth >= offsetWidth && scrollLeft !== scrollWidth - width);
  }
  updateInkBar() {
    const _content = this.content?.nativeElement;
    const _inkbar = this.inkbar?.nativeElement;
    const _tabs = this.tabs?.nativeElement;
    const activeTab = findSingle(_content, '[data-pc-name="tab"][data-p-active="true"]');
    if (_inkbar) {
      _inkbar.style.width = getOuterWidth(activeTab) + "px";
      _inkbar.style.left = getOffset(activeTab).left - getOffset(_tabs).left + "px";
    }
  }
  getVisibleButtonWidths() {
    const _prevBtn = this.prevButton?.nativeElement;
    const _nextBtn = this.nextButton?.nativeElement;
    return [_prevBtn, _nextBtn].reduce((acc, el) => el ? acc + getWidth(el) : acc, 0);
  }
  bindResizeObserver() {
    this.resizeObserver = new ResizeObserver(() => this.updateButtonState());
    this.resizeObserver.observe(this.el.nativeElement);
  }
  unbindResizeObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.el.nativeElement);
      this.resizeObserver = null;
    }
  }
  static ɵfac = function TabList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabList)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabList,
    selectors: [["p-tablist"]],
    contentQueries: function TabList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prevIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TabList_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c2, 5);
        ɵɵviewQuery(_c3, 5);
        ɵɵviewQuery(_c4, 5);
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prevButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inkbar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabs = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function TabList_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-name", "tablist");
        ɵɵclassProp("p-tablist", true)("p-component", true);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c7,
    decls: 9,
    vars: 6,
    consts: [["content", ""], ["tabs", ""], ["inkbar", ""], ["prevButton", ""], ["nextButton", ""], ["type", "button", "pRipple", "", 1, "p-tablist-nav-button", "p-tablist-prev-button"], [1, "p-tablist-content", 3, "scroll", "ngClass"], ["role", "tablist", 1, "p-tablist-tab-list"], ["role", "presentation", 1, "p-tablist-active-bar"], ["type", "button", "pRipple", "", 1, "p-tablist-nav-button", "p-tablist-next-button"], ["type", "button", "pRipple", "", 1, "p-tablist-nav-button", "p-tablist-prev-button", 3, "click"], [4, "ngTemplateOutlet"], ["type", "button", "pRipple", "", 1, "p-tablist-nav-button", "p-tablist-next-button", 3, "click"]],
    template: function TabList_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵtemplate(0, TabList_Conditional_0_Template, 4, 4, "button", 5);
        ɵɵelementStart(1, "div", 6, 0);
        ɵɵlistener("scroll", function TabList_Template_div_scroll_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onScroll($event));
        });
        ɵɵelementStart(3, "div", 7, 1);
        ɵɵprojection(5);
        ɵɵelement(6, "span", 8, 2);
        ɵɵelementEnd()();
        ɵɵtemplate(8, TabList_Conditional_8_Template, 4, 4, "button", 9);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.showNavigators() && ctx.isPrevButtonEnabled() ? 0 : -1);
        ɵɵadvance();
        ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c8, ctx.scrollable()));
        ɵɵadvance(5);
        ɵɵattribute("data-pc-section", "inkbar");
        ɵɵadvance(2);
        ɵɵconditional(ctx.showNavigators() && ctx.isNextButtonEnabled() ? 8 : -1);
      }
    },
    dependencies: [CommonModule, NgClass, NgTemplateOutlet, ChevronLeftIcon, ChevronRightIcon, RippleModule, Ripple, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabList, [{
    type: Component,
    args: [{
      selector: "p-tablist",
      standalone: true,
      imports: [CommonModule, ChevronLeftIcon, ChevronRightIcon, RippleModule, SharedModule],
      template: `
        @if (showNavigators() && isPrevButtonEnabled()) {
            <button type="button" #prevButton pRipple class="p-tablist-nav-button p-tablist-prev-button" [attr.aria-label]="prevButtonAriaLabel" [attr.tabindex]="tabindex()" [attr.data-pc-group-section]="'navigator'" (click)="onPrevButtonClick()">
                @if (prevIconTemplate || _prevIconTemplate) {
                    <ng-container *ngTemplateOutlet="prevIconTemplate || _prevIconTemplate" />
                } @else {
                    <ChevronLeftIcon />
                }
            </button>
        }
        <div #content class="p-tablist-content" [ngClass]="{ 'p-tablist-viewport': scrollable() }" (scroll)="onScroll($event)">
            <div #tabs class="p-tablist-tab-list" role="tablist">
                <ng-content />
                <span #inkbar role="presentation" class="p-tablist-active-bar" [attr.data-pc-section]="'inkbar'"></span>
            </div>
        </div>
        @if (showNavigators() && isNextButtonEnabled()) {
            <button type="button" #nextButton pRipple class="p-tablist-nav-button p-tablist-next-button" [attr.aria-label]="nextButtonAriaLabel" [attr.tabindex]="tabindex()" [attr.data-pc-group-section]="'navigator'" (click)="onNextButtonClick()">
                @if (nextIconTemplate || _nextIconTemplate) {
                    <ng-container *ngTemplateOutlet="nextIconTemplate || _nextIconTemplate" />
                } @else {
                    <ChevronRightIcon />
                }
            </button>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-tablist]": "true",
        "[class.p-component]": "true",
        "[attr.data-pc-name]": '"tablist"'
      }
    }]
  }], () => [], {
    prevIconTemplate: [{
      type: ContentChild,
      args: ["previcon", {
        descendants: false
      }]
    }],
    nextIconTemplate: [{
      type: ContentChild,
      args: ["nexticon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    prevButton: [{
      type: ViewChild,
      args: ["prevButton"]
    }],
    nextButton: [{
      type: ViewChild,
      args: ["nextButton"]
    }],
    inkbar: [{
      type: ViewChild,
      args: ["inkbar"]
    }],
    tabs: [{
      type: ViewChild,
      args: ["tabs"]
    }]
  });
})();
var Tab = class _Tab extends BaseComponent {
  /**
   * Value of tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model();
  /**
   * Whether the tab is disabled.
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, {
    transform: booleanAttribute
  });
  pcTabs = inject(forwardRef(() => Tabs));
  pcTabList = inject(forwardRef(() => TabList));
  el = inject(ElementRef);
  ripple = computed(() => this.config.ripple());
  id = computed(() => `${this.pcTabs.id()}_tab_${this.value()}`);
  ariaControls = computed(() => `${this.pcTabs.id()}_tabpanel_${this.value()}`);
  active = computed(() => equals(this.pcTabs.value(), this.value()));
  tabindex = computed(() => this.active() ? this.pcTabs.tabindex() : -1);
  mutationObserver;
  onFocus(event) {
    this.pcTabs.selectOnFocus() && this.changeActiveValue();
  }
  onClick(event) {
    this.changeActiveValue();
  }
  onKeyDown(event) {
    switch (event.code) {
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        this.onEnterKey(event);
        break;
      default:
        break;
    }
    event.stopPropagation();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.bindMutationObserver();
  }
  onArrowRightKey(event) {
    const nextTab = this.findNextTab(event.currentTarget);
    nextTab ? this.changeFocusedTab(event, nextTab) : this.onHomeKey(event);
    event.preventDefault();
  }
  onArrowLeftKey(event) {
    const prevTab = this.findPrevTab(event.currentTarget);
    prevTab ? this.changeFocusedTab(event, prevTab) : this.onEndKey(event);
    event.preventDefault();
  }
  onHomeKey(event) {
    const firstTab = this.findFirstTab();
    this.changeFocusedTab(event, firstTab);
    event.preventDefault();
  }
  onEndKey(event) {
    const lastTab = this.findLastTab();
    this.changeFocusedTab(event, lastTab);
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.findLastTab());
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(this.findFirstTab());
    event.preventDefault();
  }
  onEnterKey(event) {
    this.changeActiveValue();
    event.preventDefault();
  }
  findNextTab(tabElement, selfCheck = false) {
    const element = selfCheck ? tabElement : tabElement.nextElementSibling;
    return element ? getAttribute(element, "data-p-disabled") || getAttribute(element, "data-pc-section") === "inkbar" ? this.findNextTab(element) : element : null;
  }
  findPrevTab(tabElement, selfCheck = false) {
    const element = selfCheck ? tabElement : tabElement.previousElementSibling;
    return element ? getAttribute(element, "data-p-disabled") || getAttribute(element, "data-pc-section") === "inkbar" ? this.findPrevTab(element) : element : null;
  }
  findFirstTab() {
    return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild, true);
  }
  findLastTab() {
    return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild, true);
  }
  changeActiveValue() {
    this.pcTabs.updateValue(this.value());
  }
  changeFocusedTab(event, element) {
    focus(element);
    this.scrollInView(element);
  }
  scrollInView(element) {
    element?.scrollIntoView?.({
      block: "nearest"
    });
  }
  bindMutationObserver() {
    if (isPlatformBrowser(this.platformId)) {
      this.mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          if (this.active()) {
            this.pcTabList?.updateInkBar();
          }
        });
      });
      this.mutationObserver.observe(this.el.nativeElement, {
        childList: true,
        characterData: true,
        subtree: true
      });
    }
  }
  unbindMutationObserver() {
    this.mutationObserver.disconnect();
  }
  ngOnDestroy() {
    if (this.mutationObserver) {
      this.unbindMutationObserver();
    }
    super.ngOnDestroy();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTab_BaseFactory;
    return function Tab_Factory(__ngFactoryType__) {
      return (ɵTab_BaseFactory || (ɵTab_BaseFactory = ɵɵgetInheritedFactory(_Tab)))(__ngFactoryType__ || _Tab);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Tab,
    selectors: [["p-tab"]],
    hostVars: 16,
    hostBindings: function Tab_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("focus", function Tab_focus_HostBindingHandler($event) {
          return ctx.onFocus($event);
        })("click", function Tab_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown", function Tab_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("data-pc-name", "tab")("id", ctx.id())("aria-controls", ctx.ariaControls())("role", "tab")("aria-selected", ctx.active())("data-p-disabled", ctx.disabled())("data-p-active", ctx.active())("tabindex", ctx.tabindex());
        ɵɵclassProp("p-tab", true)("p-tab-active", ctx.active())("p-disabled", ctx.disabled())("p-component", true);
      }
    },
    inputs: {
      value: [1, "value"],
      disabled: [1, "disabled"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [ɵɵHostDirectivesFeature([Ripple]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c7,
    decls: 1,
    vars: 0,
    template: function Tab_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tab, [{
    type: Component,
    args: [{
      selector: "p-tab",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-tab]": "true",
        "[class.p-tab-active]": "active()",
        "[class.p-disabled]": "disabled()",
        "[class.p-component]": "true",
        "[attr.data-pc-name]": '"tab"',
        "[attr.id]": "id()",
        "[attr.aria-controls]": "ariaControls()",
        "[attr.role]": '"tab"',
        "[attr.aria-selected]": "active()",
        "[attr.data-p-disabled]": "disabled()",
        "[attr.data-p-active]": "active()",
        "[attr.tabindex]": "tabindex()"
      },
      hostDirectives: [Ripple]
    }]
  }], null, {
    onFocus: [{
      type: HostListener,
      args: ["focus", ["$event"]]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var TabPanel = class _TabPanel extends BaseComponent {
  pcTabs = inject(forwardRef(() => Tabs));
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0);
  id = computed(() => `${this.pcTabs.id()}_tabpanel_${this.value()}`);
  ariaLabelledby = computed(() => `${this.pcTabs.id()}_tab_${this.value()}`);
  active = computed(() => equals(this.pcTabs.value(), this.value()));
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTabPanel_BaseFactory;
    return function TabPanel_Factory(__ngFactoryType__) {
      return (ɵTabPanel_BaseFactory || (ɵTabPanel_BaseFactory = ɵɵgetInheritedFactory(_TabPanel)))(__ngFactoryType__ || _TabPanel);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _TabPanel,
    selectors: [["p-tabpanel"]],
    hostVars: 9,
    hostBindings: function TabPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-name", "tabpanel")("id", ctx.id())("role", "tabpanel")("aria-labelledby", ctx.ariaLabelledby())("data-p-active", ctx.active());
        ɵɵclassProp("p-tabpanel", true)("p-component", true);
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c7,
    decls: 1,
    vars: 1,
    template: function TabPanel_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, TabPanel_Conditional_0_Template, 1, 0);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.active() ? 0 : -1);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanel, [{
    type: Component,
    args: [{
      selector: "p-tabpanel",
      standalone: true,
      imports: [CommonModule],
      template: `@if (active()) {
        <ng-content></ng-content>
    }`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-tabpanel]": "true",
        "[class.p-component]": "true",
        "[attr.data-pc-name]": '"tabpanel"',
        "[attr.id]": "id()",
        "[attr.role]": '"tabpanel"',
        "[attr.aria-labelledby]": "ariaLabelledby()",
        "[attr.data-p-active]": "active()"
      }
    }]
  }], null, null);
})();
var TabPanels = class _TabPanels extends BaseComponent {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTabPanels_BaseFactory;
    return function TabPanels_Factory(__ngFactoryType__) {
      return (ɵTabPanels_BaseFactory || (ɵTabPanels_BaseFactory = ɵɵgetInheritedFactory(_TabPanels)))(__ngFactoryType__ || _TabPanels);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _TabPanels,
    selectors: [["p-tabpanels"]],
    hostVars: 6,
    hostBindings: function TabPanels_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-name", "tabpanels")("role", "presentation");
        ɵɵclassProp("p-tabpanels", true)("p-component", true);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c7,
    decls: 1,
    vars: 0,
    template: function TabPanels_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanels, [{
    type: Component,
    args: [{
      selector: "p-tabpanels",
      standalone: true,
      imports: [CommonModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-tabpanels]": "true",
        "[class.p-component]": "true",
        "[attr.data-pc-name]": '"tabpanels"',
        "[attr.role]": '"presentation"'
      }
    }]
  }], null, null);
})();
var Tabs = class _Tabs extends BaseComponent {
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0);
  /**
   * When specified, enables horizontal and/or vertical scrolling.
   * @type boolean
   * @defaultValue false
   * @group Props
   */
  scrollable = input(false, {
    transform: booleanAttribute
  });
  /**
   * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
   * @type boolean
   * @defaultValue false
   * @group Props
   */
  lazy = input(false, {
    transform: booleanAttribute
  });
  /**
   * When enabled, the focused tab is activated.
   * @type boolean
   * @defaultValue false
   * @group Props
   */
  selectOnFocus = input(false, {
    transform: booleanAttribute
  });
  /**
   * Whether to display navigation buttons in container when scrollable is enabled.
   * @type boolean
   * @defaultValue true
   * @group Props
   */
  showNavigators = input(true, {
    transform: booleanAttribute
  });
  /**
   * Tabindex of the tab buttons.
   * @type number
   * @defaultValue 0
   * @group Props
   */
  tabindex = input(0, {
    transform: numberAttribute
  });
  id = signal(uuid("pn_id_"));
  _componentStyle = inject(TabsStyle);
  updateValue(newValue) {
    this.value.update(() => newValue);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTabs_BaseFactory;
    return function Tabs_Factory(__ngFactoryType__) {
      return (ɵTabs_BaseFactory || (ɵTabs_BaseFactory = ɵɵgetInheritedFactory(_Tabs)))(__ngFactoryType__ || _Tabs);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Tabs,
    selectors: [["p-tabs"]],
    hostVars: 8,
    hostBindings: function Tabs_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-name", "tabs")("id", ctx.id());
        ɵɵclassProp("p-tabs", true)("p-tabs-scrollable", ctx.scrollable())("p-component", true);
      }
    },
    inputs: {
      value: [1, "value"],
      scrollable: [1, "scrollable"],
      lazy: [1, "lazy"],
      selectOnFocus: [1, "selectOnFocus"],
      showNavigators: [1, "showNavigators"],
      tabindex: [1, "tabindex"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [ɵɵProvidersFeature([TabsStyle]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c7,
    decls: 1,
    vars: 0,
    template: function Tabs_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tabs, [{
    type: Component,
    args: [{
      selector: "p-tabs",
      standalone: true,
      imports: [CommonModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TabsStyle],
      host: {
        "[class.p-tabs]": "true",
        "[class.p-tabs-scrollable]": "scrollable()",
        "[class.p-component]": "true",
        "[attr.data-pc-name]": '"tabs"',
        "[attr.id]": "id()"
      }
    }]
  }], null, null);
})();
var TabsModule = class _TabsModule {
  static ɵfac = function TabsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TabsModule,
    imports: [Tabs, TabPanels, TabPanel, TabList, Tab],
    exports: [Tabs, TabPanels, TabPanel, TabList, Tab]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Tabs, TabPanels, TabPanel, TabList, Tab]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsModule, [{
    type: NgModule,
    args: [{
      imports: [Tabs, TabPanels, TabPanel, TabList, Tab],
      exports: [Tabs, TabPanels, TabPanel, TabList, Tab]
    }]
  }], null, null);
})();
export {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsClasses,
  TabsModule,
  TabsStyle
};
//# sourceMappingURL=primeng_tabs.js.map
