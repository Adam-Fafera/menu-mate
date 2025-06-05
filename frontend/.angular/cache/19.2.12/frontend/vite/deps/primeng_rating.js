import {
  NG_VALUE_ACCESSOR
} from "./chunk-L45ATF4A.js";
import {
  AutoFocus
} from "./chunk-5D5L7GIQ.js";
import "./chunk-5G7WYC4N.js";
import {
  StarFillIcon,
  StarIcon
} from "./chunk-QTASYSTT.js";
import {
  BaseComponent
} from "./chunk-OW5WFU2K.js";
import {
  BaseStyle
} from "./chunk-DN2EO6DW.js";
import {
  PrimeTemplate,
  SharedModule,
  focus,
  getFirstFocusableElement,
  uuid
} from "./chunk-YLBEBIJC.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-RPEKHEIL.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-Z5C32KRW.js";
import "./chunk-HM5YLMWO.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-rating.mjs
var _c0 = ["onicon"];
var _c1 = ["officon"];
var _c2 = ["cancelicon"];
var _c3 = (a0, a1) => ({
  "p-rating-option-active": a0,
  "p-focus-visible": a1
});
function Rating_ng_container_0_ng_template_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 9);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("ngStyle", ctx_r2.iconOffStyle)("ngClass", ctx_r2.iconOffClass);
    ɵɵattribute("data-pc-section", "offIcon");
  }
}
function Rating_ng_container_0_ng_template_1_ng_container_3_StarIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "StarIcon", 10);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("ngStyle", ctx_r2.iconOffStyle)("styleClass", "p-rating-icon");
    ɵɵattribute("data-pc-section", "offIcon");
  }
}
function Rating_ng_container_0_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Rating_ng_container_0_ng_template_1_ng_container_3_span_1_Template, 1, 3, "span", 7)(2, Rating_ng_container_0_ng_template_1_ng_container_3_StarIcon_2_Template, 1, 3, "StarIcon", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.iconOffClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.iconOffClass);
  }
}
function Rating_ng_container_0_ng_template_1_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("ngStyle", ctx_r2.iconOnStyle)("ngClass", ctx_r2.iconOnClass);
    ɵɵattribute("data-pc-section", "onIcon");
  }
}
function Rating_ng_container_0_ng_template_1_ng_container_4_StarFillIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "StarFillIcon", 10);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("ngStyle", ctx_r2.iconOnStyle)("styleClass", "p-rating-icon p-rating-icon-active");
    ɵɵattribute("data-pc-section", "onIcon");
  }
}
function Rating_ng_container_0_ng_template_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Rating_ng_container_0_ng_template_1_ng_container_4_span_1_Template, 1, 3, "span", 11)(2, Rating_ng_container_0_ng_template_1_ng_container_4_StarFillIcon_2_Template, 1, 3, "StarFillIcon", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.iconOnClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.iconOnClass);
  }
}
function Rating_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵlistener("click", function Rating_ng_container_0_ng_template_1_Template_div_click_0_listener($event) {
      const star_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onOptionClick($event, star_r2 + 1));
    });
    ɵɵelementStart(1, "span", 4)(2, "input", 5);
    ɵɵlistener("focus", function Rating_ng_container_0_ng_template_1_Template_input_focus_2_listener($event) {
      const star_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onInputFocus($event, star_r2 + 1));
    })("blur", function Rating_ng_container_0_ng_template_1_Template_input_blur_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onInputBlur($event));
    })("change", function Rating_ng_container_0_ng_template_1_Template_input_change_2_listener($event) {
      const star_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onChange($event, star_r2 + 1));
    });
    ɵɵelementEnd()();
    ɵɵtemplate(3, Rating_ng_container_0_ng_template_1_ng_container_3_Template, 3, 2, "ng-container", 6)(4, Rating_ng_container_0_ng_template_1_ng_container_4_Template, 3, 2, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const star_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(10, _c3, star_r2 + 1 <= ctx_r2.value, star_r2 + 1 === ctx_r2.focusedOptionIndex() && ctx_r2.isFocusVisibleItem));
    ɵɵadvance();
    ɵɵattribute("data-p-hidden-accessible", true);
    ɵɵadvance();
    ɵɵproperty("name", ctx_r2.nameattr)("checked", ctx_r2.value === 0)("disabled", ctx_r2.disabled)("readonly", ctx_r2.readonly)("pAutoFocus", ctx_r2.autofocus);
    ɵɵattribute("aria-label", ctx_r2.starAriaLabel(star_r2 + 1));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.value || i_r4 >= ctx_r2.value);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.value && i_r4 < ctx_r2.value);
  }
}
function Rating_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Rating_ng_container_0_ng_template_1_Template, 5, 13, "ng-template", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.starsArray);
  }
}
function Rating_ng_template_1_span_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Rating_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 14);
    ɵɵlistener("click", function Rating_ng_template_1_span_0_Template_span_click_0_listener($event) {
      const star_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onOptionClick($event, star_r6 + 1));
    });
    ɵɵtemplate(1, Rating_ng_template_1_span_0_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "onIcon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.getIconTemplate(i_r7));
  }
}
function Rating_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Rating_ng_template_1_span_0_Template, 2, 2, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r2.starsArray);
  }
}
var theme = ({
  dt
}) => `
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
    gap: ${dt("rating.gap")};
}

.p-rating-option {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-color: transparent;
    border-radius: 50%;
    transition: background ${dt("rating.transition.duration")}, color ${dt("rating.transition.duration")}, border-color ${dt("rating.transition.duration")}, outline-color ${dt("rating.transition.duration")}, box-shadow ${dt("rating.transition.duration")};
}

.p-rating-option.p-focus-visible {
    box-shadow: ${dt("rating.focus.ring.shadow")};
    outline: ${dt("rating.focus.ring.width")} ${dt("rating.focus.ring.style")} ${dt("rating.focus.ring.color")};
    outline-offset: ${dt("rating.focus.ring.offset")};
}

.p-rating-icon {
    color: ${dt("rating.icon.color")};
    transition: background ${dt("rating.transition.duration")}, color ${dt("rating.transition.duration")}, border-color ${dt("rating.transition.duration")}, outline-color ${dt("rating.transition.duration")}, box-shadow ${dt("rating.transition.duration")};
    font-size: ${dt("rating.icon.size")};
    width: ${dt("rating.icon.size")};
    height: ${dt("rating.icon.size")};
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
    color: ${dt("rating.icon.hover.color")};
}

.p-rating-option-active .p-rating-icon {
    color: ${dt("rating.icon.active.color")};
}

/* For PrimeNG */
p-rating.ng-invalid.ng-dirty > .p-rating > .p-rating-icon {
    stroke: ${dt("rating.invalid.icon.color")};
}`;
var classes = {
  root: ({
    props
  }) => ["p-rating", {
    "p-readonly": props.readonly,
    "p-disabled": props.disabled
  }],
  option: ({
    instance,
    props,
    value
  }) => ["p-rating-option", {
    "p-rating-option-active": value <= props.modelValue,
    "p-focus-visible": value === instance.focusedOptionIndex() && instance.isFocusVisibleItem
  }],
  onIcon: "p-rating-icon p-rating-on-icon",
  offIcon: "p-rating-icon p-rating-off-icon"
};
var RatingStyle = class _RatingStyle extends BaseStyle {
  name = "rating";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRatingStyle_BaseFactory;
    return function RatingStyle_Factory(__ngFactoryType__) {
      return (ɵRatingStyle_BaseFactory || (ɵRatingStyle_BaseFactory = ɵɵgetInheritedFactory(_RatingStyle)))(__ngFactoryType__ || _RatingStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _RatingStyle,
    factory: _RatingStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingStyle, [{
    type: Injectable
  }], null, null);
})();
var RatingClasses;
(function(RatingClasses2) {
  RatingClasses2["root"] = "p-rating";
  RatingClasses2["option"] = "p-rating-option";
  RatingClasses2["onIcon"] = "p-rating-on-icon";
  RatingClasses2["offIcon"] = "p-rating-off-icon";
})(RatingClasses || (RatingClasses = {}));
var RATING_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Rating),
  multi: true
};
var Rating = class _Rating extends BaseComponent {
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * When present, changing the value is not possible.
   * @group Props
   */
  readonly;
  /**
   * Number of stars.
   * @group Props
   */
  stars = 5;
  /**
   * Style class of the on icon.
   * @group Props
   */
  iconOnClass;
  /**
   * Inline style of the on icon.
   * @group Props
   */
  iconOnStyle;
  /**
   * Style class of the off icon.
   * @group Props
   */
  iconOffClass;
  /**
   * Inline style of the off icon.
   * @group Props
   */
  iconOffStyle;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Emitted on value change.
   * @param {RatingRateEvent} value - Custom rate event.
   * @group Emits
   */
  onRate = new EventEmitter();
  /**
   * Emitted when the rating is cancelled.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onCancel = new EventEmitter();
  /**
   * Emitted when the rating receives focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Emitted when the rating loses focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Custom on icon template.
   * @group Templates
   */
  onIconTemplate;
  /**
   * Custom off icon template.
   * @group Templates
   */
  offIconTemplate;
  /**
   * Custom cancel icon template.
   * @group Templates
   */
  cancelIconTemplate;
  templates;
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  starsArray;
  isFocusVisibleItem = true;
  focusedOptionIndex = signal(-1);
  nameattr;
  _componentStyle = inject(RatingStyle);
  _onIconTemplate;
  _offIconTemplate;
  _cancelIconTemplate;
  ngOnInit() {
    super.ngOnInit();
    this.nameattr = this.nameattr || uuid("pn_id_");
    this.starsArray = [];
    for (let i = 0; i < this.stars; i++) {
      this.starsArray[i] = i;
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "onicon":
          this._onIconTemplate = item.template;
          break;
        case "officon":
          this._offIconTemplate = item.template;
          break;
        case "cancelicon":
          this._cancelIconTemplate = item.template;
          break;
      }
    });
  }
  onOptionClick(event, value) {
    if (!this.readonly && !this.disabled) {
      this.onOptionSelect(event, value);
      this.isFocusVisibleItem = false;
      const firstFocusableEl = getFirstFocusableElement(event.currentTarget, "");
      firstFocusableEl && focus(firstFocusableEl);
    }
  }
  onOptionSelect(event, value) {
    if (!this.readonly && !this.disabled) {
      if (this.focusedOptionIndex() === value || value === this.value) {
        this.focusedOptionIndex.set(-1);
        this.updateModel(event, null);
      } else {
        this.focusedOptionIndex.set(value);
        this.updateModel(event, value || null);
      }
    }
  }
  onChange(event, value) {
    this.onOptionSelect(event, value);
    this.isFocusVisibleItem = true;
  }
  onInputBlur(event) {
    this.focusedOptionIndex.set(-1);
    this.onBlur.emit(event);
  }
  onInputFocus(event, value) {
    if (!this.readonly && !this.disabled) {
      this.focusedOptionIndex.set(value);
      this.onFocus.emit(event);
    }
  }
  updateModel(event, value) {
    this.value = value;
    this.onModelChange(this.value);
    this.onModelTouched();
    if (!value) {
      this.onCancel.emit();
    } else {
      this.onRate.emit({
        originalEvent: event,
        value
      });
    }
  }
  starAriaLabel(value) {
    return value === 1 ? this.config.translation.aria.star : this.config.translation.aria.stars.replace(/{star}/g, value);
  }
  getIconTemplate(i) {
    return !this.value || i >= this.value ? this.offIconTemplate || this._offIconTemplate : this.onIconTemplate || this.offIconTemplate;
  }
  writeValue(value) {
    this.value = value;
    this.cd.detectChanges();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  get isCustomIcon() {
    return !!(this.onIconTemplate || this._onIconTemplate || this.offIconTemplate || this._offIconTemplate || this.cancelIconTemplate || this._cancelIconTemplate);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRating_BaseFactory;
    return function Rating_Factory(__ngFactoryType__) {
      return (ɵRating_BaseFactory || (ɵRating_BaseFactory = ɵɵgetInheritedFactory(_Rating)))(__ngFactoryType__ || _Rating);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Rating,
    selectors: [["p-rating"]],
    contentQueries: function Rating_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, _c2, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.onIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.offIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cancelIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-rating"],
    hostVars: 6,
    hostBindings: function Rating_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-name", "rating")("data-pc-section", "root");
        ɵɵclassProp("p-readonly", ctx.readonly)("p-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      stars: [2, "stars", "stars", numberAttribute],
      iconOnClass: "iconOnClass",
      iconOnStyle: "iconOnStyle",
      iconOffClass: "iconOffClass",
      iconOffStyle: "iconOffStyle",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onRate: "onRate",
      onCancel: "onCancel",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([RATING_VALUE_ACCESSOR, RatingStyle]), ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 2,
    consts: [["customTemplate", ""], [4, "ngIf", "ngIfElse"], ["ngFor", "", 3, "ngForOf"], [1, "p-rating-option", 3, "click", "ngClass"], [1, "p-hidden-accessible"], ["type", "radio", "value", "0", 3, "focus", "blur", "change", "name", "checked", "disabled", "readonly", "pAutoFocus"], [4, "ngIf"], ["class", "p-rating-icon", 3, "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "styleClass", 4, "ngIf"], [1, "p-rating-icon", 3, "ngStyle", "ngClass"], [3, "ngStyle", "styleClass"], ["class", "p-rating-icon p-rating-icon-active", 3, "ngStyle", "ngClass", 4, "ngIf"], [1, "p-rating-icon", "p-rating-icon-active", 3, "ngStyle", "ngClass"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [4, "ngTemplateOutlet"]],
    template: function Rating_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Rating_ng_container_0_Template, 2, 1, "ng-container", 1)(1, Rating_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const customTemplate_r8 = ɵɵreference(2);
        ɵɵproperty("ngIf", !ctx.isCustomIcon)("ngIfElse", customTemplate_r8);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, AutoFocus, StarFillIcon, StarIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Rating, [{
    type: Component,
    args: [{
      selector: "p-rating",
      imports: [CommonModule, AutoFocus, StarFillIcon, StarIcon, SharedModule],
      standalone: true,
      template: `
        <ng-container *ngIf="!isCustomIcon; else customTemplate">
            <ng-template ngFor [ngForOf]="starsArray" let-star let-i="index">
                <div
                    class="p-rating-option"
                    [ngClass]="{
                        'p-rating-option-active': star + 1 <= value,
                        'p-focus-visible': star + 1 === focusedOptionIndex() && isFocusVisibleItem
                    }"
                    (click)="onOptionClick($event, star + 1)"
                >
                    <span class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                        <input
                            type="radio"
                            value="0"
                            [name]="nameattr"
                            [checked]="value === 0"
                            [disabled]="disabled"
                            [readonly]="readonly"
                            [attr.aria-label]="starAriaLabel(star + 1)"
                            (focus)="onInputFocus($event, star + 1)"
                            (blur)="onInputBlur($event)"
                            (change)="onChange($event, star + 1)"
                            [pAutoFocus]="autofocus"
                        />
                    </span>
                    <ng-container *ngIf="!value || i >= value">
                        <span class="p-rating-icon" *ngIf="iconOffClass" [ngStyle]="iconOffStyle" [ngClass]="iconOffClass" [attr.data-pc-section]="'offIcon'"></span>
                        <StarIcon *ngIf="!iconOffClass" [ngStyle]="iconOffStyle" [styleClass]="'p-rating-icon'" [attr.data-pc-section]="'offIcon'" />
                    </ng-container>
                    <ng-container *ngIf="value && i < value">
                        <span class="p-rating-icon p-rating-icon-active" *ngIf="iconOnClass" [ngStyle]="iconOnStyle" [ngClass]="iconOnClass" [attr.data-pc-section]="'onIcon'"></span>
                        <StarFillIcon *ngIf="!iconOnClass" [ngStyle]="iconOnStyle" [styleClass]="'p-rating-icon p-rating-icon-active'" [attr.data-pc-section]="'onIcon'" />
                    </ng-container>
                </div>
            </ng-template>
        </ng-container>
        <ng-template #customTemplate>
            <span *ngFor="let star of starsArray; let i = index" (click)="onOptionClick($event, star + 1)" [attr.data-pc-section]="'onIcon'">
                <ng-container *ngTemplateOutlet="getIconTemplate(i)"></ng-container>
            </span>
        </ng-template>
    `,
      providers: [RATING_VALUE_ACCESSOR, RatingStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "p-rating",
        "[attr.data-pc-name]": '"rating"',
        "[attr.data-pc-section]": '"root"',
        "[class.p-readonly]": "readonly",
        "[class.p-disabled]": "disabled"
      }
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stars: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    iconOnClass: [{
      type: Input
    }],
    iconOnStyle: [{
      type: Input
    }],
    iconOffClass: [{
      type: Input
    }],
    iconOffStyle: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onRate: [{
      type: Output
    }],
    onCancel: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onIconTemplate: [{
      type: ContentChild,
      args: ["onicon", {
        descendants: false
      }]
    }],
    offIconTemplate: [{
      type: ContentChild,
      args: ["officon", {
        descendants: false
      }]
    }],
    cancelIconTemplate: [{
      type: ContentChild,
      args: ["cancelicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var RatingModule = class _RatingModule {
  static ɵfac = function RatingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RatingModule,
    imports: [Rating, SharedModule],
    exports: [Rating, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Rating, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingModule, [{
    type: NgModule,
    args: [{
      imports: [Rating, SharedModule],
      exports: [Rating, SharedModule]
    }]
  }], null, null);
})();
export {
  RATING_VALUE_ACCESSOR,
  Rating,
  RatingClasses,
  RatingModule,
  RatingStyle
};
//# sourceMappingURL=primeng_rating.js.map
