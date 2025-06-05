import {
  BaseComponent
} from "./chunk-OW5WFU2K.js";
import {
  BaseStyle
} from "./chunk-DN2EO6DW.js";
import {
  SharedModule
} from "./chunk-YLBEBIJC.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-RPEKHEIL.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-Z5C32KRW.js";
import "./chunk-HM5YLMWO.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-avatar.mjs
var _c0 = ["*"];
function Avatar_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.label);
  }
}
function Avatar_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.icon);
    ɵɵproperty("ngClass", "p-avatar-icon");
  }
}
function Avatar_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Avatar_ng_template_2_span_0_Template, 1, 3, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const imageTemplate_r2 = ɵɵreference(5);
    ɵɵproperty("ngIf", ctx_r0.icon)("ngIfElse", imageTemplate_r2);
  }
}
function Avatar_ng_template_4_img_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 7);
    ɵɵlistener("error", function Avatar_ng_template_4_img_0_Template_img_error_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.imageError($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r0.image, ɵɵsanitizeUrl);
    ɵɵattribute("aria-label", ctx_r0.ariaLabel);
  }
}
function Avatar_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Avatar_ng_template_4_img_0_Template, 1, 2, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.image);
  }
}
var theme = ({
  dt
}) => `
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${dt("avatar.width")};
    height: ${dt("avatar.height")};
    font-size: ${dt("avatar.font.size")};
    color: ${dt("avatar.color")};
    background: ${dt("avatar.background")};
    border-radius: ${dt("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${dt("avatar.icon.size")};
    width: ${dt("avatar.icon.size")};
    height: ${dt("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${dt("avatar.lg.width")};
    height: ${dt("avatar.lg.width")};
    font-size: ${dt("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${dt("avatar.lg.icon.size")};
    width: ${dt("avatar.lg.icon.size")};
    height: ${dt("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${dt("avatar.xl.width")};
    height: ${dt("avatar.xl.width")};
    font-size: ${dt("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${dt("avatar.xl.font.size")};
    width: ${dt("avatar.xl.icon.size")};
    height: ${dt("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${dt("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${dt("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${dt("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${dt("avatar.xl.group.offset")};
}
`;
var classes = {
  root: ({
    props
  }) => ["p-avatar p-component", {
    "p-avatar-image": props.image != null,
    "p-avatar-circle": props.shape === "circle",
    "p-avatar-lg": props.size === "large",
    "p-avatar-xl": props.size === "xlarge"
  }],
  label: "p-avatar-label",
  icon: "p-avatar-icon"
};
var AvatarStyle = class _AvatarStyle extends BaseStyle {
  name = "avatar";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAvatarStyle_BaseFactory;
    return function AvatarStyle_Factory(__ngFactoryType__) {
      return (ɵAvatarStyle_BaseFactory || (ɵAvatarStyle_BaseFactory = ɵɵgetInheritedFactory(_AvatarStyle)))(__ngFactoryType__ || _AvatarStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _AvatarStyle,
    factory: _AvatarStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarStyle, [{
    type: Injectable
  }], null, null);
})();
var AvatarClasses;
(function(AvatarClasses2) {
  AvatarClasses2["root"] = "p-avatar";
  AvatarClasses2["label"] = "p-avatar-label";
  AvatarClasses2["icon"] = "p-avatar-icon";
})(AvatarClasses || (AvatarClasses = {}));
var Avatar = class _Avatar extends BaseComponent {
  /**
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Size of the element.
   * @group Props
   */
  size = "normal";
  /**
   * Shape of the element.
   * @group Props
   */
  shape = "square";
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Establishes a string value that labels the component.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  _componentStyle = inject(AvatarStyle);
  imageError(event) {
    this.onImageError.emit(event);
  }
  get hostClass() {
    return this.styleClass;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAvatar_BaseFactory;
    return function Avatar_Factory(__ngFactoryType__) {
      return (ɵAvatar_BaseFactory || (ɵAvatar_BaseFactory = ɵɵgetInheritedFactory(_Avatar)))(__ngFactoryType__ || _Avatar);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Avatar,
    selectors: [["p-avatar"]],
    hostVars: 19,
    hostBindings: function Avatar_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-name", "avatar")("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
        ɵɵstyleMap(ctx.style);
        ɵɵclassMap(ctx.hostClass);
        ɵɵclassProp("p-avatar", true)("p-component", true)("p-avatar-circle", ctx.shape === "circle")("p-avatar-lg", ctx.size === "large")("p-avatar-xl", ctx.size === "xlarge")("p-avatar-image", ctx.image != null);
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      size: "size",
      shape: "shape",
      style: "style",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onImageError: "onImageError"
    },
    features: [ɵɵProvidersFeature([AvatarStyle]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 6,
    vars: 2,
    consts: [["iconTemplate", ""], ["imageTemplate", ""], ["class", "p-avatar-text", 4, "ngIf", "ngIfElse"], [1, "p-avatar-text"], [3, "class", "ngClass", 4, "ngIf", "ngIfElse"], [3, "ngClass"], [3, "src", "error", 4, "ngIf"], [3, "error", "src"]],
    template: function Avatar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵtemplate(1, Avatar_span_1_Template, 2, 1, "span", 2)(2, Avatar_ng_template_2_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, Avatar_ng_template_4_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const iconTemplate_r4 = ɵɵreference(3);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.label)("ngIfElse", iconTemplate_r4);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Avatar, [{
    type: Component,
    args: [{
      selector: "p-avatar",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <span class="p-avatar-text" *ngIf="label; else iconTemplate">{{ label }}</span>
        <ng-template #iconTemplate><span [class]="icon" [ngClass]="'p-avatar-icon'" *ngIf="icon; else imageTemplate"></span></ng-template>
        <ng-template #imageTemplate> <img [src]="image" *ngIf="image" (error)="imageError($event)" [attr.aria-label]="ariaLabel" /></ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-avatar]": "true",
        "[class.p-component]": "true",
        "[class.p-avatar-circle]": 'shape === "circle"',
        "[class.p-avatar-lg]": 'size === "large"',
        "[class.p-avatar-xl]": 'size === "xlarge"',
        "[class.p-avatar-image]": "image != null",
        "[attr.data-pc-name]": '"avatar"',
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[style]": "style"
      },
      providers: [AvatarStyle]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onImageError: [{
      type: Output
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var AvatarModule = class _AvatarModule {
  static ɵfac = function AvatarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AvatarModule,
    imports: [Avatar, SharedModule],
    exports: [Avatar, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Avatar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarModule, [{
    type: NgModule,
    args: [{
      imports: [Avatar, SharedModule],
      exports: [Avatar, SharedModule]
    }]
  }], null, null);
})();
export {
  Avatar,
  AvatarClasses,
  AvatarModule,
  AvatarStyle
};
//# sourceMappingURL=primeng_avatar.js.map
