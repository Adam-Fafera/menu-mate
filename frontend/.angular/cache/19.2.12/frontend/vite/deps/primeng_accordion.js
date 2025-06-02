import "./chunk-C7TCESGK.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-F5CXBDJW.js";
import {
  transformToBoolean
} from "./chunk-5H5CNZCN.js";
import {
  Ripple
} from "./chunk-7CASXX42.js";
import {
  ChevronDownIcon,
  ChevronUpIcon
} from "./chunk-6DDEEH6N.js";
import {
  BaseComponent
} from "./chunk-RHUCIING.js";
import {
  BaseStyle
} from "./chunk-PQ2U6TIQ.js";
import {
  Header,
  PrimeTemplate,
  SharedModule,
  findSingle,
  focus,
  getAttribute,
  uuid
} from "./chunk-RA2TSF4P.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-RBTQK5UD.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  computed,
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
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-TYWYC7CF.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-accordion.mjs
var _c0 = ["*"];
var _c1 = ["toggleicon"];
var _c2 = (a0) => ({
  active: a0
});
function AccordionHeader_Conditional_1_0_ng_template_0_Template(rf, ctx) {
}
function AccordionHeader_Conditional_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionHeader_Conditional_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AccordionHeader_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionHeader_Conditional_1_0_Template, 1, 0, null, 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.toggleicon)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r0.active()));
  }
}
function AccordionHeader_Conditional_2_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.pcAccordion.collapseIcon);
    ɵɵproperty("ngClass", ctx_r0.pcAccordion.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.pcAccordion.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AccordionHeader_Conditional_2_ng_container_0_span_1_Template, 1, 4, "span", 2)(2, AccordionHeader_Conditional_2_ng_container_0_ChevronDownIcon_2_Template, 1, 2, "ChevronDownIcon", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.pcAccordion.collapseIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.pcAccordion.collapseIcon);
  }
}
function AccordionHeader_Conditional_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.pcAccordion.expandIcon);
    ɵɵproperty("ngClass", ctx_r0.pcAccordion.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.pcAccordion.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AccordionHeader_Conditional_2_ng_container_1_span_1_Template, 1, 4, "span", 2)(2, AccordionHeader_Conditional_2_ng_container_1_ChevronUpIcon_2_Template, 1, 2, "ChevronUpIcon", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.pcAccordion.expandIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.pcAccordion.expandIcon);
  }
}
function AccordionHeader_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionHeader_Conditional_2_ng_container_0_Template, 3, 2, "ng-container", 1)(1, AccordionHeader_Conditional_2_ng_container_1_Template, 3, 2, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.active());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.active());
  }
}
var _c3 = (a0) => ({
  transitionParams: a0
});
var _c4 = (a0) => ({
  value: "visible",
  params: a0
});
var _c5 = (a0) => ({
  value: "hidden",
  params: a0
});
var _c6 = ["header"];
var _c7 = ["icon"];
var _c8 = ["content"];
var _c9 = ["*", [["p-header"]]];
var _c10 = ["*", "p-header"];
var _c11 = (a0) => ({
  $implicit: a0
});
function AccordionTab_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.header, " ");
  }
}
function AccordionTab_Conditional_2_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionTab_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionTab_Conditional_2_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate);
  }
}
function AccordionTab_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
function AccordionTab_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionTab_Conditional_2_Conditional_0_Template, 1, 1, "ng-container")(1, AccordionTab_Conditional_2_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.headerTemplate || ctx_r0._headerTemplate ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.headerFacet ? 1 : -1);
  }
}
function AccordionTab_Conditional_3_0_ng_template_0_Template(rf, ctx) {
}
function AccordionTab_Conditional_3_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionTab_Conditional_3_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AccordionTab_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionTab_Conditional_3_0_Template, 1, 0, null, 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c11, ctx_r0.selected));
  }
}
function AccordionTab_Conditional_4_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.accordion.collapseIcon);
    ɵɵproperty("ngClass", ctx_r0.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionTab_Conditional_4_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionTab_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AccordionTab_Conditional_4_ng_container_0_span_1_Template, 1, 4, "span", 6)(2, AccordionTab_Conditional_4_ng_container_0_ChevronDownIcon_2_Template, 1, 2, "ChevronDownIcon", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.accordion.collapseIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.accordion.collapseIcon);
  }
}
function AccordionTab_Conditional_4_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.accordion.expandIcon);
    ɵɵproperty("ngClass", ctx_r0.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionTab_Conditional_4_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionTab_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AccordionTab_Conditional_4_ng_container_1_span_1_Template, 1, 4, "span", 6)(2, AccordionTab_Conditional_4_ng_container_1_ChevronUpIcon_2_Template, 1, 2, "ChevronUpIcon", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.accordion.expandIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.accordion.expandIcon);
  }
}
function AccordionTab_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionTab_Conditional_4_ng_container_0_Template, 3, 2, "ng-container", 3)(1, AccordionTab_Conditional_4_ng_container_1_Template, 3, 2, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.selected);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.selected);
  }
}
function AccordionTab_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionTab_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AccordionTab_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate || ctx_r0._contentTemplate);
  }
}
var theme = ({
  dt
}) => `
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: ${dt("accordion.panel.border.width")};
    border-color: ${dt("accordion.panel.border.color")};
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${dt("accordion.header.padding")};
    color: ${dt("accordion.header.color")};
    background: ${dt("accordion.header.background")};
    border-style: solid;
    border-width: ${dt("accordion.header.border.width")};
    border-color: ${dt("accordion.header.border.color")};
    font-weight: ${dt("accordion.header.font.weight")};
    border-radius: ${dt("accordion.header.border.radius")};
    transition: background ${dt("accordion.transition.duration")}; color ${dt("accordion.transition.duration")}color ${dt("accordion.transition.duration")}, outline-color ${dt("accordion.transition.duration")}, box-shadow ${dt("accordion.transition.duration")};
    outline-color: transparent;
    position: relative;
    overflow: hidden;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: ${dt("accordion.header.first.border.width")};
    border-start-start-radius: ${dt("accordion.header.first.top.border.radius")};
    border-start-end-radius: ${dt("accordion.header.first.top.border.radius")};
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-end-start-radius: ${dt("accordion.header.last.bottom.border.radius")};
    border-end-end-radius: ${dt("accordion.header.last.bottom.border.radius")};
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-end-start-radius: ${dt("accordion.header.last.active.bottom.border.radius")};
    border-end-end-radius:${dt("accordion.header.last.active.bottom.border.radius")};
}

.p-accordionheader-toggle-icon {
    color: ${dt("accordion.header.toggle.icon.color")};
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: ${dt("accordion.header.focus.ring.shadow")};
    outline: ${dt("accordion.header.focus.ring.width")} ${dt("accordion.header.focus.ring.style")} ${dt("accordion.header.focus.ring.color")};
    outline-offset: ${dt("accordion.header.focus.ring.offset")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: ${dt("accordion.header.hover.background")};
    color: ${dt("accordion.header.hover.color")}
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${dt("accordion.header.toggle.icon.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: ${dt("accordion.header.active.background")};
    color: ${dt("accordion.header.active.color")}
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: ${dt("accordion.header.toggle.icon.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  {
    background: ${dt("accordion.header.active.hover.background")};
    color: ${dt("accordion.header.active.hover.color")}
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  .p-accordionheader-toggle-icon {
    color: ${dt("accordion.header.toggle.icon.active.hover.color")};
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: ${dt("accordion.content.border.width")};
    border-color: ${dt("accordion.content.border.color")};
    background-color: ${dt("accordion.content.background")};
    color: ${dt("accordion.content.color")};
    padding: ${dt("accordion.content.padding")}
}

/*For PrimeNG*/

.p-accordion .p-accordioncontent {
    overflow: hidden;
}

.p-accordionpanel.p-accordioncontent:not(.ng-animating) {
    overflow: inherit;
}

.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: ${dt("accordion.header.padding")};
}
`;
var classes = {
  root: "p-accordion p-component"
};
var AccordionStyle = class _AccordionStyle extends BaseStyle {
  name = "accordion";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAccordionStyle_BaseFactory;
    return function AccordionStyle_Factory(__ngFactoryType__) {
      return (ɵAccordionStyle_BaseFactory || (ɵAccordionStyle_BaseFactory = ɵɵgetInheritedFactory(_AccordionStyle)))(__ngFactoryType__ || _AccordionStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _AccordionStyle,
    factory: _AccordionStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionStyle, [{
    type: Injectable
  }], null, null);
})();
var AccordionClasses;
(function(AccordionClasses2) {
  AccordionClasses2["root"] = "p-accordion";
  AccordionClasses2["contentwrapper"] = "p-accordioncontent";
  AccordionClasses2["content"] = "p-accordioncontent-content";
  AccordionClasses2["header"] = "p-accordionheader";
  AccordionClasses2["toggleicon"] = "p-accordionheader-toggle-icon";
  AccordionClasses2["panel"] = "p-accordionpanel";
})(AccordionClasses || (AccordionClasses = {}));
var AccordionPanel = class _AccordionPanel extends BaseComponent {
  pcAccordion = inject(forwardRef(() => Accordion));
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0);
  /**
   * Disables the tab when enabled.
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, {
    transform: (v) => transformToBoolean(v)
  });
  active = computed(() => this.pcAccordion.multiple() ? this.valueEquals(this.pcAccordion.value(), this.value()) : this.pcAccordion.value() === this.value());
  valueEquals(currentValue, value) {
    if (Array.isArray(currentValue)) {
      return currentValue.includes(value);
    }
    return currentValue === value;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAccordionPanel_BaseFactory;
    return function AccordionPanel_Factory(__ngFactoryType__) {
      return (ɵAccordionPanel_BaseFactory || (ɵAccordionPanel_BaseFactory = ɵɵgetInheritedFactory(_AccordionPanel)))(__ngFactoryType__ || _AccordionPanel);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _AccordionPanel,
    selectors: [["p-accordion-panel"], ["p-accordionpanel"]],
    hostVars: 9,
    hostBindings: function AccordionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-name", "accordionpanel")("data-p-disabled", ctx.disabled())("data-p-active", ctx.active());
        ɵɵclassProp("p-accordionpanel", true)("p-accordionpanel-active", ctx.active())("p-disabled", ctx.disabled());
      }
    },
    inputs: {
      value: [1, "value"],
      disabled: [1, "disabled"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AccordionPanel_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionPanel, [{
    type: Component,
    args: [{
      selector: "p-accordion-panel, p-accordionpanel",
      imports: [CommonModule],
      standalone: true,
      template: `<ng-content />`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-accordionpanel]": "true",
        "[class.p-accordionpanel-active]": "active()",
        "[class.p-disabled]": "disabled()",
        "[attr.data-pc-name]": '"accordionpanel"',
        "[attr.data-p-disabled]": "disabled()",
        "[attr.data-p-active]": "active()"
      }
    }]
  }], null, null);
})();
var AccordionHeader = class _AccordionHeader extends BaseComponent {
  pcAccordion = inject(forwardRef(() => Accordion));
  pcAccordionPanel = inject(forwardRef(() => AccordionPanel));
  id = computed(() => `${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);
  active = computed(() => this.pcAccordionPanel.active());
  disabled = computed(() => this.pcAccordionPanel.disabled());
  ariaControls = computed(() => `${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);
  /**
   * Toggle icon template.
   * @type {TemplateRef<AccordionToggleIconTemplateContext>} context - Context of the template
   * @example
   * ```html
   * <ng-template #toggleicon let-active="active"> </ng-template>
   * ```
   * @see {@link AccordionToggleIconTemplateContext}
   * @group Templates
   */
  toggleicon;
  onClick(event) {
    const wasActive = this.active();
    this.changeActiveValue();
    const isActive = this.active();
    const index = this.pcAccordionPanel.value();
    if (!wasActive && isActive) {
      this.pcAccordion.onOpen.emit({
        originalEvent: event,
        index
      });
    } else if (wasActive && !isActive) {
      this.pcAccordion.onClose.emit({
        originalEvent: event,
        index
      });
    }
  }
  onFocus() {
    this.pcAccordion.selectOnFocus() && this.changeActiveValue();
  }
  onKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.arrowDownKey(event);
        break;
      case "ArrowUp":
        this.arrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
      case "Space":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      default:
        break;
    }
  }
  changeActiveValue() {
    this.pcAccordion.updateValue(this.pcAccordionPanel.value());
  }
  findPanel(headerElement) {
    return headerElement?.closest('[data-pc-name="accordionpanel"]');
  }
  findHeader(panelElement) {
    return findSingle(panelElement, '[data-pc-name="accordionheader"]');
  }
  findNextPanel(panelElement, selfCheck = false) {
    const element = selfCheck ? panelElement : panelElement.nextElementSibling;
    return element ? getAttribute(element, "data-p-disabled") ? this.findNextPanel(element) : this.findHeader(element) : null;
  }
  findPrevPanel(panelElement, selfCheck = false) {
    const element = selfCheck ? panelElement : panelElement.previousElementSibling;
    return element ? getAttribute(element, "data-p-disabled") ? this.findPrevPanel(element) : this.findHeader(element) : null;
  }
  findFirstPanel() {
    return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild, true);
  }
  findLastPanel() {
    return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild, true);
  }
  changeFocusedPanel(event, element) {
    focus(element);
  }
  arrowDownKey(event) {
    const nextPanel = this.findNextPanel(this.findPanel(event.currentTarget));
    nextPanel ? this.changeFocusedPanel(event, nextPanel) : this.onHomeKey(event);
    event.preventDefault();
  }
  arrowUpKey(event) {
    const prevPanel = this.findPrevPanel(this.findPanel(event.currentTarget));
    prevPanel ? this.changeFocusedPanel(event, prevPanel) : this.onEndKey(event);
    event.preventDefault();
  }
  onHomeKey(event) {
    const firstPanel = this.findFirstPanel();
    this.changeFocusedPanel(event, firstPanel);
    event.preventDefault();
  }
  onEndKey(event) {
    const lastPanel = this.findLastPanel();
    this.changeFocusedPanel(event, lastPanel);
    event.preventDefault();
  }
  onEnterKey(event) {
    this.changeActiveValue();
    event.preventDefault();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAccordionHeader_BaseFactory;
    return function AccordionHeader_Factory(__ngFactoryType__) {
      return (ɵAccordionHeader_BaseFactory || (ɵAccordionHeader_BaseFactory = ɵɵgetInheritedFactory(_AccordionHeader)))(__ngFactoryType__ || _AccordionHeader);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _AccordionHeader,
    selectors: [["p-accordion-header"], ["p-accordionheader"]],
    contentQueries: function AccordionHeader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toggleicon = _t.first);
      }
    },
    hostVars: 13,
    hostBindings: function AccordionHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function AccordionHeader_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("focus", function AccordionHeader_focus_HostBindingHandler($event) {
          return ctx.onFocus($event);
        })("keydown", function AccordionHeader_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("id", ctx.id())("aria-expanded", ctx.active())("aria-controls", ctx.ariaControls())("aria-disabled", ctx.disabled())("role", "button")("tabindex", ctx.disabled() ? "-1" : "0")("data-p-active", ctx.active())("data-p-disabled", ctx.disabled())("data-pc-name", "accordionheader");
        ɵɵstyleProp("user-select", "none");
        ɵɵclassProp("p-accordionheader", true);
      }
    },
    features: [ɵɵHostDirectivesFeature([Ripple]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 1,
    consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
    template: function AccordionHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵtemplate(1, AccordionHeader_Conditional_1_Template, 1, 4)(2, AccordionHeader_Conditional_2_Template, 2, 2);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.toggleicon ? 1 : 2);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, ChevronDownIcon, ChevronUpIcon],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionHeader, [{
    type: Component,
    args: [{
      selector: "p-accordion-header, p-accordionheader",
      imports: [CommonModule, ChevronDownIcon, ChevronUpIcon],
      standalone: true,
      template: `
        <ng-content />
        @if (toggleicon) {
            <ng-template *ngTemplateOutlet="toggleicon; context: { active: active() }"></ng-template>
        } @else {
            <ng-container *ngIf="active()">
                <span *ngIf="pcAccordion.collapseIcon" [class]="pcAccordion.collapseIcon" [ngClass]="pcAccordion.iconClass" [attr.aria-hidden]="true"></span>
                <ChevronDownIcon *ngIf="!pcAccordion.collapseIcon" [ngClass]="pcAccordion.iconClass" [attr.aria-hidden]="true" />
            </ng-container>
            <ng-container *ngIf="!active()">
                <span *ngIf="pcAccordion.expandIcon" [class]="pcAccordion.expandIcon" [ngClass]="pcAccordion.iconClass" [attr.aria-hidden]="true"></span>
                <ChevronUpIcon *ngIf="!pcAccordion.expandIcon" [ngClass]="pcAccordion.iconClass" [attr.aria-hidden]="true" />
            </ng-container>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-accordionheader]": "true",
        "[attr.id]": "id()",
        "[attr.aria-expanded]": "active()",
        "[attr.aria-controls]": "ariaControls()",
        "[attr.aria-disabled]": "disabled()",
        "[attr.role]": '"button"',
        "[attr.tabindex]": 'disabled()?"-1":"0"',
        "[attr.data-p-active]": "active()",
        "[attr.data-p-disabled]": "disabled()",
        "[attr.data-pc-name]": '"accordionheader"',
        "[style.user-select]": '"none"'
      },
      hostDirectives: [Ripple]
    }]
  }], null, {
    toggleicon: [{
      type: ContentChild,
      args: ["toggleicon"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus", ["$event"]]
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AccordionContent = class _AccordionContent extends BaseComponent {
  pcAccordion = inject(forwardRef(() => Accordion));
  pcAccordionPanel = inject(forwardRef(() => AccordionPanel));
  active = computed(() => this.pcAccordionPanel.active());
  ariaLabelledby = computed(() => `${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);
  id = computed(() => `${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAccordionContent_BaseFactory;
    return function AccordionContent_Factory(__ngFactoryType__) {
      return (ɵAccordionContent_BaseFactory || (ɵAccordionContent_BaseFactory = ɵɵgetInheritedFactory(_AccordionContent)))(__ngFactoryType__ || _AccordionContent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _AccordionContent,
    selectors: [["p-accordion-content"], ["p-accordioncontent"]],
    hostVars: 7,
    hostBindings: function AccordionContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("id", ctx.id())("role", "region")("data-pc-name", "accordioncontent")("data-p-active", ctx.active())("aria-labelledby", ctx.ariaLabelledby());
        ɵɵclassProp("p-accordioncontent", true);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 9,
    consts: [[1, "p-accordioncontent-content"]],
    template: function AccordionContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("@content", ctx.active() ? ɵɵpureFunction1(3, _c4, ɵɵpureFunction1(1, _c3, ctx.pcAccordion.transitionOptions)) : ɵɵpureFunction1(7, _c5, ɵɵpureFunction1(5, _c3, ctx.pcAccordion.transitionOptions)));
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    data: {
      animation: [trigger("content", [state("hidden", style({
        height: "0",
        paddingBottom: "0",
        visibility: "hidden"
      })), state("visible", style({
        height: "*",
        visibility: "visible"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionContent, [{
    type: Component,
    args: [{
      selector: "p-accordion-content, p-accordioncontent",
      imports: [CommonModule],
      standalone: true,
      template: ` <div [@content]="active() ? { value: 'visible', params: { transitionParams: pcAccordion.transitionOptions } } : { value: 'hidden', params: { transitionParams: pcAccordion.transitionOptions } }" class="p-accordioncontent-content">
        <ng-content />
    </div>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-accordioncontent]": "true",
        "[attr.id]": "id()",
        "[attr.role]": '"region"',
        "[attr.data-pc-name]": '"accordioncontent"',
        "[attr.data-p-active]": "active()",
        "[attr.aria-labelledby]": "ariaLabelledby()"
      },
      animations: [trigger("content", [state("hidden", style({
        height: "0",
        paddingBottom: "0",
        visibility: "hidden"
      })), state("visible", style({
        height: "*",
        visibility: "visible"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    }]
  }], null, null);
})();
var AccordionTab = class _AccordionTab extends BaseComponent {
  get hostClass() {
    return this.tabStyleClass;
  }
  get hostStyle() {
    return this.tabStyle;
  }
  /**
   * Current id state as a string.
   * @group Props
   */
  id = uuid("pn_id_");
  /**
   * Used to define the header of the tab.
   * @group Props
   */
  header;
  /**
   * Inline style of the tab header.
   * @group Props
   */
  headerStyle;
  /**
   * Inline style of the tab.
   * @group Props
   */
  tabStyle;
  /**
   * Inline style of the tab content.
   * @group Props
   */
  contentStyle;
  /**
   * Style class of the tab.
   * @group Props
   */
  tabStyleClass;
  /**
   * Style class of the tab header.
   * @group Props
   */
  headerStyleClass;
  /**
   * Style class of the tab content.
   * @group Props
   */
  contentStyleClass;
  /**
   * Whether the tab is disabled.
   * @group Props
   */
  disabled;
  /**
   * Whether a lazy loaded panel should avoid getting loaded again on reselection.
   * @group Props
   */
  cache = true;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "start";
  /**
   * The value that returns the selection.
   * @group Props
   */
  get selected() {
    return this._selected;
  }
  set selected(val) {
    this._selected = val;
    if (!this.loaded) {
      if (this._selected && this.cache) {
        this.loaded = true;
      }
      this.cd.detectChanges();
    }
  }
  /**
   * The aria-level that each accordion header will have. The default value is 2 as per W3C specifications
   * @group Props
   */
  headerAriaLevel = 2;
  /**
   * Event triggered by changing the choice.
   * @param {boolean} value - Boolean value indicates that the option is changed.
   * @group Emits
   */
  selectedChange = new EventEmitter();
  headerFacet;
  _selected = false;
  get iconClass() {
    if (this.iconPos === "end") {
      return "p-accordionheader-toggle-icon icon-end";
    } else {
      return "p-accordionheader-toggle-icon icon-start";
    }
  }
  /**
   * Content template for the content of the drawer.
   * @group Templates
   */
  headerTemplate;
  /**
   * Template for the header icon.
   * @group Templates
   */
  iconTemplate;
  /**
   * Content template for the footer of the drawer.
   * @group Templates
   */
  contentTemplate;
  templates;
  _headerTemplate;
  _iconTemplate;
  _contentTemplate;
  loaded = false;
  accordion = inject(forwardRef(() => Accordion));
  _componentStyle = inject(AccordionStyle);
  ngOnInit() {
    super.ngOnInit();
    console.log("AccordionTab is deprecated as of v18, please use the new structure instead.");
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  toggle(event) {
    if (this.disabled) {
      return false;
    }
    let index = this.findTabIndex();
    if (this.selected) {
      this.selected = false;
      this.accordion.onClose.emit({
        originalEvent: event,
        index
      });
    } else {
      if (!this.accordion.multiple()) {
        for (var i = 0; i < this.accordion.tabs.length; i++) {
          if (this.accordion.tabs[i].selected) {
            this.accordion.tabs[i].selected = false;
            this.accordion.tabs[i].selectedChange.emit(false);
            this.accordion.tabs[i].cd.markForCheck();
          }
        }
      }
      this.selected = true;
      this.loaded = true;
      this.accordion.onOpen.emit({
        originalEvent: event,
        index
      });
    }
    this.selectedChange.emit(this.selected);
    this.accordion.updateActiveIndex();
    this.cd.markForCheck();
    event?.preventDefault();
  }
  findTabIndex() {
    let index = -1;
    for (var i = 0; i < this.accordion.tabs.length; i++) {
      if (this.accordion.tabs[i] == this) {
        index = i;
        break;
      }
    }
    return index;
  }
  onKeydown(event) {
    switch (event.code) {
      case "Enter":
      case "Space":
        this.toggle(event);
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  getTabHeaderActionId(tabId) {
    return `${tabId}_header_action`;
  }
  getTabContentId(tabId) {
    return `${tabId}_content`;
  }
  ngOnDestroy() {
    this.accordion.tabs.splice(this.findTabIndex(), 1);
    super.ngOnDestroy();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAccordionTab_BaseFactory;
    return function AccordionTab_Factory(__ngFactoryType__) {
      return (ɵAccordionTab_BaseFactory || (ɵAccordionTab_BaseFactory = ɵɵgetInheritedFactory(_AccordionTab)))(__ngFactoryType__ || _AccordionTab);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _AccordionTab,
    selectors: [["p-accordionTab"], ["p-accordion-tab"], ["p-accordiontab"]],
    contentQueries: function AccordionTab_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, _c8, 4);
        ɵɵcontentQuery(dirIndex, Header, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerFacet = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 9,
    hostBindings: function AccordionTab_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-name", "accordiontab");
        ɵɵstyleMap(ctx.hostStyle);
        ɵɵclassMap(ctx.hostClass);
        ɵɵclassProp("p-accordionpanel", true)("p-accordionpanel-active", ctx.selected);
      }
    },
    inputs: {
      id: "id",
      header: "header",
      headerStyle: "headerStyle",
      tabStyle: "tabStyle",
      contentStyle: "contentStyle",
      tabStyleClass: "tabStyleClass",
      headerStyleClass: "headerStyleClass",
      contentStyleClass: "contentStyleClass",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      cache: [2, "cache", "cache", booleanAttribute],
      transitionOptions: "transitionOptions",
      iconPos: "iconPos",
      selected: "selected",
      headerAriaLevel: [2, "headerAriaLevel", "headerAriaLevel", numberAttribute]
    },
    outputs: {
      selectedChange: "selectedChange"
    },
    features: [ɵɵProvidersFeature([AccordionStyle]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c10,
    decls: 9,
    vars: 30,
    consts: [["type", "button", 1, "p-accordionheader", 3, "click", "keydown", "disabled", "ngClass", "ngStyle"], ["role", "region", 1, "p-accordioncontent"], [1, "p-accordioncontent-content", 3, "ngClass", "ngStyle"], [4, "ngIf"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
    template: function AccordionTab_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c9);
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function AccordionTab_Template_button_click_0_listener($event) {
          return ctx.toggle($event);
        })("keydown", function AccordionTab_Template_button_keydown_0_listener($event) {
          return ctx.onKeydown($event);
        });
        ɵɵtemplate(1, AccordionTab_Conditional_1_Template, 1, 1)(2, AccordionTab_Conditional_2_Template, 2, 2)(3, AccordionTab_Conditional_3_Template, 1, 4)(4, AccordionTab_Conditional_4_Template, 2, 2);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 1)(6, "div", 2);
        ɵɵprojection(7);
        ɵɵtemplate(8, AccordionTab_ng_container_8_Template, 2, 1, "ng-container", 3);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassProp("p-disabled", ctx.disabled);
        ɵɵproperty("disabled", ctx.disabled)("ngClass", ctx.headerStyleClass)("ngStyle", ctx.headerStyle);
        ɵɵattribute("aria-expanded", ctx.selected)("aria-level", ctx.headerAriaLevel)("data-p-disabled", ctx.disabled)("data-pc-section", "accordionheader")("tabindex", ctx.disabled ? null : 0)("id", ctx.getTabHeaderActionId(ctx.id))("aria-controls", ctx.getTabContentId(ctx.id));
        ɵɵadvance();
        ɵɵconditional(!ctx.headerTemplate && !ctx._headerTemplate ? 1 : 2);
        ɵɵadvance(2);
        ɵɵconditional(ctx.iconTemplate || ctx._iconTemplate ? 3 : 4);
        ɵɵadvance(2);
        ɵɵproperty("@tabContent", ctx.selected ? ɵɵpureFunction1(24, _c4, ɵɵpureFunction1(22, _c3, ctx.transitionOptions)) : ɵɵpureFunction1(28, _c5, ɵɵpureFunction1(26, _c3, ctx.transitionOptions)));
        ɵɵattribute("id", ctx.getTabContentId(ctx.id))("aria-hidden", !ctx.selected)("aria-labelledby", ctx.getTabHeaderActionId(ctx.id))("data-pc-section", "toggleablecontent");
        ɵɵadvance();
        ɵɵproperty("ngClass", ctx.contentStyleClass)("ngStyle", ctx.contentStyle);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", (ctx.contentTemplate || ctx._contentTemplate) && (ctx.cache ? ctx.loaded : ctx.selected));
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, ChevronDownIcon, ChevronUpIcon],
    encapsulation: 2,
    data: {
      animation: [trigger("tabContent", [state("hidden", style({
        height: "0",
        visibility: "hidden"
      })), state("visible", style({
        height: "*",
        visibility: "visible"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionTab, [{
    type: Component,
    args: [{
      selector: "p-accordionTab, p-accordion-tab, p-accordiontab",
      standalone: true,
      imports: [CommonModule, ChevronDownIcon, ChevronUpIcon],
      template: `
        <button
            class="p-accordionheader"
            type="button"
            [disabled]="disabled"
            [attr.aria-expanded]="selected"
            [attr.aria-level]="headerAriaLevel"
            [class.p-disabled]="disabled"
            [attr.data-p-disabled]="disabled"
            [attr.data-pc-section]="'accordionheader'"
            (click)="toggle($event)"
            (keydown)="onKeydown($event)"
            [ngClass]="headerStyleClass"
            [ngStyle]="headerStyle"
            [attr.tabindex]="disabled ? null : 0"
            [attr.id]="getTabHeaderActionId(id)"
            [attr.aria-controls]="getTabContentId(id)"
        >
            @if (!headerTemplate && !_headerTemplate) {
                {{ header }}
            } @else {
                @if (headerTemplate || _headerTemplate) {
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                }
                @if (headerFacet) {
                    <ng-content select="p-header" />
                }
            }
            @if (iconTemplate || _iconTemplate) {
                <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { $implicit: selected }"></ng-template>
            } @else {
                <ng-container *ngIf="selected">
                    <span *ngIf="accordion.collapseIcon" [class]="accordion.collapseIcon" [ngClass]="iconClass" [attr.aria-hidden]="true"></span>
                    <ChevronDownIcon *ngIf="!accordion.collapseIcon" [ngClass]="iconClass" [attr.aria-hidden]="true" />
                </ng-container>
                <ng-container *ngIf="!selected">
                    <span *ngIf="accordion.expandIcon" [class]="accordion.expandIcon" [ngClass]="iconClass" [attr.aria-hidden]="true"></span>
                    <ChevronUpIcon *ngIf="!accordion.expandIcon" [ngClass]="iconClass" [attr.aria-hidden]="true" />
                </ng-container>
            }
        </button>
        <div
            [attr.id]="getTabContentId(id)"
            class="p-accordioncontent"
            [@tabContent]="selected ? { value: 'visible', params: { transitionParams: transitionOptions } } : { value: 'hidden', params: { transitionParams: transitionOptions } }"
            role="region"
            [attr.aria-hidden]="!selected"
            [attr.aria-labelledby]="getTabHeaderActionId(id)"
            [attr.data-pc-section]="'toggleablecontent'"
        >
            <div class="p-accordioncontent-content" [ngClass]="contentStyleClass" [ngStyle]="contentStyle">
                <ng-content />
                <ng-container *ngIf="(contentTemplate || _contentTemplate) && (cache ? loaded : selected)">
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </ng-container>
            </div>
        </div>
    `,
      animations: [trigger("tabContent", [state("hidden", style({
        height: "0",
        visibility: "hidden"
      })), state("visible", style({
        height: "*",
        visibility: "visible"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      host: {
        "[class.p-accordionpanel]": "true",
        "[class.p-accordionpanel-active]": "selected",
        "[attr.data-pc-name]": '"accordiontab"'
      },
      providers: [AccordionStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }],
    id: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    headerStyle: [{
      type: Input
    }],
    tabStyle: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    tabStyleClass: [{
      type: Input
    }],
    headerStyleClass: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cache: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    headerAriaLevel: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectedChange: [{
      type: Output
    }],
    headerFacet: [{
      type: ContentChildren,
      args: [Header]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var Accordion = class _Accordion extends BaseComponent {
  get hostClass() {
    return this.styleClass;
  }
  get hostStyle() {
    return this.style;
  }
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0);
  /**
   * When enabled, multiple tabs can be activated at the same time.
   * @defaultValue false
   * @group Props
   */
  multiple = input(false, {
    transform: (v) => transformToBoolean(v)
  });
  /**
   * Inline style of the tab header and content.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Icon of a collapsed tab.
   * @group Props
   */
  expandIcon;
  /**
   * Icon of an expanded tab.
   * @group Props
   */
  collapseIcon;
  /**
   * When enabled, the focused tab is activated.
   * @defaultValue false
   * @group Props
   */
  selectOnFocus = input(false, {
    transform: (v) => transformToBoolean(v)
  });
  set activeIndex(val) {
    this._activeIndex = val;
    if (this.preventActiveIndexPropagation) {
      this.preventActiveIndexPropagation = false;
      return;
    }
    this.updateSelectionState();
  }
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Returns the active index.
   * @param {number | number[]} value - New index.
   * @deprecated use native valueChange emitter of the value model.
   * @group Emits
   */
  activeIndexChange = new EventEmitter();
  set headerAriaLevel(val) {
    if (typeof val === "number" && val > 0) {
      this._headerAriaLevel = val;
    } else if (this._headerAriaLevel !== 2) {
      this._headerAriaLevel = 2;
    }
  }
  /**
   * Callback to invoke when an active tab is collapsed by clicking on the header.
   * @param {AccordionTabCloseEvent} event - Custom tab close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke when a tab gets expanded.
   * @param {AccordionTabOpenEvent} event - Custom tab open event.
   * @group Emits
   */
  onOpen = new EventEmitter();
  id = signal(uuid("pn_id_"));
  tabList;
  tabListSubscription = null;
  _activeIndex;
  _headerAriaLevel = 2;
  preventActiveIndexPropagation = false;
  tabs = [];
  _componentStyle = inject(AccordionStyle);
  /**
   * Index of the active tab or an array of indexes in multiple mode.
   * @deprecated use value property with new architecture instead.
   * @group Props
   */
  get activeIndex() {
    return this._activeIndex;
  }
  /**
   * The aria-level that each accordion header will have. The default value is 2 as per W3C specifications
   * @deprecated use AccoridonHeader component and bind attribute to the host.
   * @group Props
   */
  get headerAriaLevel() {
    return this._headerAriaLevel;
  }
  onKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onTabArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onTabArrowUpKey(event);
        break;
      case "Home":
        if (!event.shiftKey) {
          this.onTabHomeKey(event);
        }
        break;
      case "End":
        if (!event.shiftKey) {
          this.onTabEndKey(event);
        }
        break;
    }
  }
  onTabArrowDownKey(event) {
    const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);
    nextHeaderAction ? this.changeFocusedTab(nextHeaderAction) : this.onTabHomeKey(event);
    event.preventDefault();
  }
  onTabArrowUpKey(event) {
    const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);
    prevHeaderAction ? this.changeFocusedTab(prevHeaderAction) : this.onTabEndKey(event);
    event.preventDefault();
  }
  onTabHomeKey(event) {
    const firstHeaderAction = this.findFirstHeaderAction();
    this.changeFocusedTab(firstHeaderAction);
    event.preventDefault();
  }
  changeFocusedTab(element) {
    if (element) {
      focus(element);
      if (this.selectOnFocus()) {
        this.tabs.forEach((tab, i) => {
          let selected = this.multiple() ? this._activeIndex.includes(i) : i === this._activeIndex;
          if (this.multiple()) {
            if (!this._activeIndex) {
              this._activeIndex = [];
            }
            if (tab.id == element.id) {
              tab.selected = !tab.selected;
              if (!this._activeIndex.includes(i)) {
                this._activeIndex.push(i);
              } else {
                this._activeIndex = this._activeIndex.filter((ind) => ind !== i);
              }
            }
          } else {
            if (tab.id == element.id) {
              tab.selected = !tab.selected;
              this._activeIndex = i;
            } else {
              tab.selected = false;
            }
          }
          tab.selectedChange.emit(selected);
          this.activeIndexChange.emit(this._activeIndex);
          tab.cd.markForCheck();
        });
      }
    }
  }
  findNextHeaderAction(tabElement, selfCheck = false) {
    const nextTabElement = selfCheck ? tabElement : tabElement.nextElementSibling;
    const headerElement = findSingle(nextTabElement, '[data-pc-section="accordionheader"]');
    return headerElement ? getAttribute(headerElement, "data-p-disabled") ? this.findNextHeaderAction(headerElement.parentElement) : findSingle(headerElement.parentElement, '[data-pc-section="accordionheader"]') : null;
  }
  findPrevHeaderAction(tabElement, selfCheck = false) {
    const prevTabElement = selfCheck ? tabElement : tabElement.previousElementSibling;
    const headerElement = findSingle(prevTabElement, '[data-pc-section="accordionheader"]');
    return headerElement ? getAttribute(headerElement, "data-p-disabled") ? this.findPrevHeaderAction(headerElement.parentElement) : findSingle(headerElement.parentElement, '[data-pc-section="accordionheader"]') : null;
  }
  findFirstHeaderAction() {
    const firstEl = this.el.nativeElement.firstElementChild;
    return this.findNextHeaderAction(firstEl, true);
  }
  findLastHeaderAction() {
    const lastEl = this.el.nativeElement.lastElementChild;
    return this.findPrevHeaderAction(lastEl, true);
  }
  onTabEndKey(event) {
    const lastHeaderAction = this.findLastHeaderAction();
    this.changeFocusedTab(lastHeaderAction);
    event.preventDefault();
  }
  ngAfterContentInit() {
    this.initTabs();
    this.tabListSubscription = this.tabList.changes.subscribe((_) => {
      this.initTabs();
    });
  }
  initTabs() {
    this.tabs = this.tabList.toArray();
    this.tabs.forEach((tab) => {
      tab.headerAriaLevel = this._headerAriaLevel;
    });
    this.updateSelectionState();
    this.cd.markForCheck();
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  updateSelectionState() {
    if (this.tabs && this.tabs.length && this._activeIndex != null) {
      for (let i = 0; i < this.tabs.length; i++) {
        let selected = this.multiple() ? this._activeIndex.includes(i) : i === this._activeIndex;
        let changed = selected !== this.tabs[i].selected;
        if (changed) {
          this.tabs[i].selected = selected;
          this.tabs[i].selectedChange.emit(selected);
          this.tabs[i].cd.markForCheck();
        }
      }
    }
  }
  isTabActive(index) {
    return this.multiple() ? this._activeIndex && this._activeIndex.includes(index) : this._activeIndex === index;
  }
  getTabProp(tab, name) {
    return tab.props ? tab.props[name] : void 0;
  }
  updateActiveIndex() {
    let index = this.multiple() ? [] : null;
    this.tabs.forEach((tab, i) => {
      if (tab.selected) {
        if (this.multiple()) {
          index.push(i);
        } else {
          index = i;
          return;
        }
      }
    });
    this.preventActiveIndexPropagation = true;
    this._activeIndex = index;
    this.activeIndexChange.emit(index);
  }
  updateValue(value) {
    const currentValue = this.value();
    if (this.multiple()) {
      const newValue = Array.isArray(currentValue) ? [...currentValue] : [];
      const index = newValue.indexOf(value);
      if (index !== -1) {
        newValue.splice(index, 1);
      } else {
        newValue.push(value);
      }
      this.value.set(newValue);
    } else {
      if (currentValue === value) {
        this.value.set(void 0);
      } else {
        this.value.set(value);
      }
    }
  }
  ngOnDestroy() {
    if (this.tabListSubscription) {
      this.tabListSubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAccordion_BaseFactory;
    return function Accordion_Factory(__ngFactoryType__) {
      return (ɵAccordion_BaseFactory || (ɵAccordion_BaseFactory = ɵɵgetInheritedFactory(_Accordion)))(__ngFactoryType__ || _Accordion);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Accordion,
    selectors: [["p-accordion"]],
    contentQueries: function Accordion_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, AccordionTab, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabList = _t);
      }
    },
    hostVars: 8,
    hostBindings: function Accordion_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function Accordion_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        });
      }
      if (rf & 2) {
        ɵɵstyleMap(ctx.hostStyle);
        ɵɵclassMap(ctx.hostClass);
        ɵɵclassProp("p-accordion", true)("p-component", true);
      }
    },
    inputs: {
      value: [1, "value"],
      multiple: [1, "multiple"],
      style: "style",
      styleClass: "styleClass",
      expandIcon: "expandIcon",
      collapseIcon: "collapseIcon",
      selectOnFocus: [1, "selectOnFocus"],
      transitionOptions: "transitionOptions",
      activeIndex: "activeIndex",
      headerAriaLevel: "headerAriaLevel"
    },
    outputs: {
      value: "valueChange",
      activeIndexChange: "activeIndexChange",
      onClose: "onClose",
      onOpen: "onOpen"
    },
    features: [ɵɵProvidersFeature([AccordionStyle]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Accordion_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Accordion, [{
    type: Component,
    args: [{
      selector: "p-accordion",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content /> `,
      host: {
        "[class.p-accordion]": "true",
        "[class.p-component]": "true"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [AccordionStyle]
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    activeIndexChange: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    onOpen: [{
      type: Output
    }],
    tabList: [{
      type: ContentChildren,
      args: [AccordionTab, {
        descendants: true
      }]
    }],
    activeIndex: [{
      type: Input
    }],
    headerAriaLevel: [{
      type: Input
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AccordionModule = class _AccordionModule {
  static ɵfac = function AccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AccordionModule,
    imports: [Accordion, AccordionTab, SharedModule, AccordionPanel, AccordionHeader, AccordionContent],
    exports: [Accordion, AccordionTab, SharedModule, AccordionPanel, AccordionHeader, AccordionContent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Accordion, AccordionTab, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionModule, [{
    type: NgModule,
    args: [{
      imports: [Accordion, AccordionTab, SharedModule, AccordionPanel, AccordionHeader, AccordionContent],
      exports: [Accordion, AccordionTab, SharedModule, AccordionPanel, AccordionHeader, AccordionContent]
    }]
  }], null, null);
})();
export {
  Accordion,
  AccordionClasses,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel,
  AccordionStyle,
  AccordionTab
};
//# sourceMappingURL=primeng_accordion.js.map
