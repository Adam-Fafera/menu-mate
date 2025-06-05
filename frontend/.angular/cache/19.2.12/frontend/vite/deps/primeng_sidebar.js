import {
  Button,
  ButtonModule
} from "./chunk-MHNOKUKP.js";
import "./chunk-5D5L7GIQ.js";
import "./chunk-5G7WYC4N.js";
import "./chunk-SNSIKKVG.js";
import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-F5CXBDJW.js";
import {
  zindexutils
} from "./chunk-5H5CNZCN.js";
import "./chunk-GEBZWMNR.js";
import {
  TimesIcon
} from "./chunk-QTASYSTT.js";
import "./chunk-RFZN6HGJ.js";
import {
  BaseComponent
} from "./chunk-OW5WFU2K.js";
import {
  BaseStyle
} from "./chunk-DN2EO6DW.js";
import {
  PrimeTemplate,
  SharedModule,
  appendChild,
  blockBodyScroll
} from "./chunk-YLBEBIJC.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-RPEKHEIL.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-Z5C32KRW.js";
import "./chunk-HM5YLMWO.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-sidebar.mjs
var _c0 = ["maskRef"];
var _c1 = ["container"];
var _c2 = ["closeButton"];
var _c3 = ["*"];
var _c4 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
var _c5 = (a0) => ({
  value: "visible",
  params: a0
});
function Sidebar_div_0_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Sidebar_div_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Sidebar_div_0_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate);
  }
}
function Sidebar_div_0_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Sidebar_div_0_Conditional_4_p_button_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "closeicon");
  }
}
function Sidebar_div_0_Conditional_4_p_button_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Sidebar_div_0_Conditional_4_p_button_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Sidebar_div_0_Conditional_4_p_button_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Sidebar_div_0_Conditional_4_p_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtemplate(1, Sidebar_div_0_Conditional_4_p_button_2_span_2_1_Template, 1, 0, null, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵattribute("data-pc-section", "closeicon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIconTemplate || ctx_r1._closeIconTemplate);
  }
}
function Sidebar_div_0_Conditional_4_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 8);
    ɵɵlistener("onClick", function Sidebar_div_0_Conditional_4_p_button_2_Template_p_button_onClick_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.close($event));
    })("keydown.enter", function Sidebar_div_0_Conditional_4_p_button_2_Template_p_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.close($event));
    });
    ɵɵtemplate(1, Sidebar_div_0_Conditional_4_p_button_2_TimesIcon_1_Template, 1, 1, "TimesIcon", 7)(2, Sidebar_div_0_Conditional_4_p_button_2_span_2_Template, 2, 2, "span", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r1.cx("closeButton"))("buttonProps", ctx_r1.closeButtonProps)("ariaLabel", ctx_r1.ariaCloseLabel);
    ɵɵattribute("data-pc-section", "closebutton")("data-pc-group-section", "iconcontainer");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.closeIconTemplate && !ctx_r1._closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.closeIconTemplate || ctx_r1._closeIconTemplate);
  }
}
function Sidebar_div_0_Conditional_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Sidebar_div_0_Conditional_4_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Sidebar_div_0_Conditional_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵtemplate(2, Sidebar_div_0_Conditional_4_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.cx("footer"));
    ɵɵattribute("data-pc-section", "footer");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function Sidebar_div_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, Sidebar_div_0_Conditional_4_ng_container_1_Template, 1, 0, "ng-container", 4)(2, Sidebar_div_0_Conditional_4_p_button_2_Template, 3, 7, "p-button", 6);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 5);
    ɵɵprojection(4);
    ɵɵtemplate(5, Sidebar_div_0_Conditional_4_ng_container_5_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵtemplate(6, Sidebar_div_0_Conditional_4_ng_container_6_Template, 3, 3, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.cx("header"));
    ɵɵattribute("data-pc-section", "header");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showCloseIcon);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.cx("content"));
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function Sidebar_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2, 0);
    ɵɵlistener("@panelState.start", function Sidebar_div_0_Template_div_animation_panelState_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@panelState.done", function Sidebar_div_0_Template_div_animation_panelState_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    })("click", function Sidebar_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.maskClickListener($event));
    });
    ɵɵelementStart(2, "div", 3);
    ɵɵlistener("keydown", function Sidebar_div_0_Template_div_keydown_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    });
    ɵɵtemplate(3, Sidebar_div_0_Conditional_3_Template, 1, 1, "ng-container")(4, Sidebar_div_0_Conditional_4_Template, 7, 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r1.maskStyle);
    ɵɵproperty("ngClass", ctx_r1.cx("mask"))("ngStyle", ctx_r1.sx("mask"))("@panelState", ɵɵpureFunction1(15, _c5, ɵɵpureFunction2(12, _c4, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    ɵɵattribute("data-pc-name", "mask")("data-pc-section", "mask");
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngClass", ctx_r1.cx("root"));
    ɵɵattribute("data-pc-section", "root");
    ɵɵadvance();
    ɵɵconditional(ctx_r1.headlessTemplate || ctx_r1._headlessTemplate ? 3 : 4);
  }
}
var theme = ({
  dt
}) => `

.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: ${dt("drawer.background")};
    color: ${dt("drawer.color")};
    border: 1px solid ${dt("drawer.border.color")};
    box-shadow: ${dt("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${dt("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${dt("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${dt("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${dt("drawer.title.font.weight")};
    font-size: ${dt("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

/* PrimeVue animations

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
*/

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {

    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}
`;
var inlineStyles = {
  mask: ({
    instance
  }) => ({
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: instance.position === "top" ? "flex-start" : instance.position === "bottom" ? "flex-end" : "center"
  })
};
var classes = {
  mask: ({
    instance
  }) => ({
    "p-drawer-mask": true,
    "p-overlay-mask p-overlay-mask-enter": instance.modal,
    "p-drawer-open": instance.containerVisible,
    "p-drawer-full": instance.fullScreen,
    [`p-drawer-${instance.position}`]: !!instance.position
  }),
  root: ({
    instance
  }) => ({
    "p-drawer p-component": true,
    "p-drawer-full": instance.fullScreen
  }),
  header: "p-drawer-header",
  title: "p-drawer-title",
  pcCloseButton: "p-drawer-close-button",
  content: "p-drawer-content",
  footer: "p-drawer-footer"
};
var DrawerStyle = class _DrawerStyle extends BaseStyle {
  name = "drawer";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵDrawerStyle_BaseFactory;
    return function DrawerStyle_Factory(__ngFactoryType__) {
      return (ɵDrawerStyle_BaseFactory || (ɵDrawerStyle_BaseFactory = ɵɵgetInheritedFactory(_DrawerStyle)))(__ngFactoryType__ || _DrawerStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _DrawerStyle,
    factory: _DrawerStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerStyle, [{
    type: Injectable
  }], null, null);
})();
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}")]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Sidebar = class _Sidebar extends BaseComponent {
  /**
   *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo = "body";
  /**
   * Whether to block scrolling of the document when sidebar is active.
   * @group Props
   */
  blockScroll = false;
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
   * Aria label of the close icon.
   * @group Props
   */
  ariaCloseLabel;
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
   * Whether an overlay mask is displayed behind the sidebar.
   * @group Props
   */
  modal = true;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  closeButtonProps;
  /**
   * Whether to dismiss sidebar on click of the mask.
   * @group Props
   */
  dismissible = true;
  /**
   * Whether to display the close icon.
   * @group Props
   */
  showCloseIcon = true;
  /**
   * Specifies if pressing escape key should hide the sidebar.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(val) {
    this._visible = val;
  }
  /**
   * Specifies the position of the sidebar, valid values are "left", "right", "bottom" and "top".
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
    }
  }
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  get fullScreen() {
    return this._fullScreen;
  }
  set fullScreen(value) {
    this._fullScreen = value;
    if (value) this.transformOptions = "none";
  }
  maskStyle;
  /**
   * Callback to invoke when dialog is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dialog is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when dialog visibility is changed.
   * @param {boolean} value - Visible value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  maskRef;
  containerViewChild;
  closeButtonViewChild;
  initialized;
  _visible;
  _position = "left";
  _fullScreen = false;
  container;
  transformOptions = "translate3d(-100%, 0px, 0px)";
  mask;
  documentEscapeListener;
  _componentStyle = inject(DrawerStyle);
  /**
   * Header template.
   * @group Props
   */
  headerTemplate;
  /**
   * Footer template.
   * @group Props
   */
  footerTemplate;
  /**
   *
   * Close icon template.
   * @group Props
   */
  closeIconTemplate;
  /**
   * Headless template.
   * @group Props
   */
  headlessTemplate;
  /**
   * Headless template.
   * @group Props
   */
  contentTemplate;
  templates;
  _headerTemplate;
  _footerTemplate;
  _contentTemplate;
  _closeIconTemplate;
  _headlessTemplate;
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.initialized = true;
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
    const key = Object.keys(changes).find((k) => k.includes("Template"));
    if (key) {
      this[`_${key}`] = changes[key].currentValue;
    }
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "closeicon":
          this._closeIconTemplate = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onKeyDown(event) {
    if (event.code === "Escape") {
      this.hide(false);
    }
  }
  show() {
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container, this.baseZIndex || this.config.zIndex.modal);
    }
    this.onShow.emit({});
    this.visibleChange.emit(true);
  }
  hide(emit = true) {
    if (emit) {
      this.onHide.emit({});
    }
  }
  close(event) {
    this.hide();
    this.visibleChange.emit(false);
    event.preventDefault();
  }
  maskClickListener(event) {
    if (this.dismissible) {
      this.close(event);
    }
    if (this.blockScroll) {
      blockBodyScroll();
    }
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.appendContainer();
        this.show();
        if (this.closeOnEscape) {
          this.bindDocumentEscapeListener();
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.hide(false);
        zindexutils.clear(this.container);
        this.unbindGlobalListeners();
        break;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      return this.appendTo === "body" ? this.renderer.appendChild(this.document.body, this.container) : appendChild(this.appendTo, this.container);
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.which == 27) {
        if (parseInt(this.container.style.zIndex) === zindexutils.get(this.container)) {
          this.close(event);
        }
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  unbindGlobalListeners() {
    this.unbindDocumentEscapeListener();
  }
  ngOnDestroy() {
    this.initialized = false;
    if (this.appendTo && this.container) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
    this.unbindGlobalListeners();
    super.ngOnDestroy();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSidebar_BaseFactory;
    return function Sidebar_Factory(__ngFactoryType__) {
      return (ɵSidebar_BaseFactory || (ɵSidebar_BaseFactory = ɵɵgetInheritedFactory(_Sidebar)))(__ngFactoryType__ || _Sidebar);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Sidebar,
    selectors: [["p-sidebar"]],
    contentQueries: function Sidebar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Sidebar_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.maskRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.closeButtonViewChild = _t.first);
      }
    },
    inputs: {
      appendTo: "appendTo",
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      ariaCloseLabel: "ariaCloseLabel",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      modal: [2, "modal", "modal", booleanAttribute],
      closeButtonProps: "closeButtonProps",
      dismissible: [2, "dismissible", "dismissible", booleanAttribute],
      showCloseIcon: [2, "showCloseIcon", "showCloseIcon", booleanAttribute],
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      transitionOptions: "transitionOptions",
      visible: "visible",
      position: "position",
      fullScreen: "fullScreen",
      maskStyle: "maskStyle",
      headerTemplate: "headerTemplate",
      footerTemplate: "footerTemplate",
      closeIconTemplate: "closeIconTemplate",
      headlessTemplate: "headlessTemplate",
      contentTemplate: "contentTemplate"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      visibleChange: "visibleChange"
    },
    features: [ɵɵProvidersFeature([DrawerStyle]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 1,
    vars: 1,
    consts: [["maskRef", ""], [3, "ngClass", "ngStyle", "style", "click", 4, "ngIf"], [3, "click", "ngClass", "ngStyle"], [3, "keydown", "ngClass"], [4, "ngTemplateOutlet"], [3, "ngClass"], [3, "ngClass", "buttonProps", "ariaLabel", "onClick", "keydown.enter", 4, "ngIf"], [4, "ngIf"], [3, "onClick", "keydown.enter", "ngClass", "buttonProps", "ariaLabel"], ["class", "p-sidebar-close-icon", 4, "ngIf"], [1, "p-sidebar-close-icon"]],
    template: function Sidebar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, Sidebar_div_0_Template, 5, 17, "div", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.visible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, SharedModule, TimesIcon, ButtonModule, Button],
    encapsulation: 2,
    data: {
      animation: [trigger("panelState", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{
      selector: "p-sidebar",
      standalone: true,
      imports: [CommonModule, SharedModule, TimesIcon, ButtonModule],
      template: `
        <div
            #maskRef
            *ngIf="visible"
            [ngClass]="cx('mask')"
            [ngStyle]="sx('mask')"
            [style]="maskStyle"
            [@panelState]="{ value: 'visible', params: { transform: transformOptions, transition: transitionOptions } }"
            (@panelState.start)="onAnimationStart($event)"
            (@panelState.done)="onAnimationEnd($event)"
            [attr.data-pc-name]="'mask'"
            [attr.data-pc-section]="'mask'"
            (click)="maskClickListener($event)"
        >
            <div [ngClass]="cx('root')" [class]="styleClass" [attr.data-pc-section]="'root'" (keydown)="onKeyDown($event)">
                @if (headlessTemplate || _headlessTemplate) {
                    <ng-container *ngTemplateOutlet="headlessTemplate || _headlessTemplate"></ng-container>
                } @else {
                    <div [ngClass]="cx('header')" [attr.data-pc-section]="'header'">
                        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                        <p-button
                            *ngIf="showCloseIcon"
                            [ngClass]="cx('closeButton')"
                            (onClick)="close($event)"
                            (keydown.enter)="close($event)"
                            [buttonProps]="closeButtonProps"
                            [ariaLabel]="ariaCloseLabel"
                            [attr.data-pc-section]="'closebutton'"
                            [attr.data-pc-group-section]="'iconcontainer'"
                        >
                            <TimesIcon *ngIf="!closeIconTemplate && !_closeIconTemplate" [attr.data-pc-section]="'closeicon'" />
                            <span *ngIf="closeIconTemplate || _closeIconTemplate" class="p-sidebar-close-icon" [attr.data-pc-section]="'closeicon'">
                                <ng-template *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-template>
                            </span>
                        </p-button>
                    </div>

                    <div [ngClass]="cx('content')" [attr.data-pc-section]="'content'">
                        <ng-content></ng-content>
                        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                    </div>

                    <ng-container *ngIf="footerTemplate || _footerTemplate">
                        <div [ngClass]="cx('footer')" [attr.data-pc-section]="'footer'">
                            <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                        </div>
                    </ng-container>
                }
            </div>
        </div>
    `,
      animations: [trigger("panelState", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [DrawerStyle]
    }]
  }], null, {
    appendTo: [{
      type: Input
    }],
    blockScroll: [{
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
    ariaCloseLabel: [{
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
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeButtonProps: [{
      type: Input
    }],
    dismissible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showCloseIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    fullScreen: [{
      type: Input
    }],
    maskStyle: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    maskRef: [{
      type: ViewChild,
      args: ["maskRef"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    closeButtonViewChild: [{
      type: ViewChild,
      args: ["closeButton"]
    }],
    headerTemplate: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    closeIconTemplate: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SidebarModule = class _SidebarModule {
  static ɵfac = function SidebarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SidebarModule,
    imports: [Sidebar, SharedModule],
    exports: [Sidebar, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Sidebar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarModule, [{
    type: NgModule,
    args: [{
      imports: [Sidebar, SharedModule],
      exports: [Sidebar, SharedModule]
    }]
  }], null, null);
})();
export {
  DrawerStyle,
  Sidebar,
  SidebarModule
};
//# sourceMappingURL=primeng_sidebar.js.map
