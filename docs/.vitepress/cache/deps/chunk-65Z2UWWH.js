import {
  require_MmlFactory
} from "./chunk-2XEIVJIQ.js";
import {
  require_mathjax,
  require_version
} from "./chunk-DFBPSGJ2.js";
import {
  require_mi
} from "./chunk-QEU4Y7BF.js";
import {
  require_MathItem
} from "./chunk-YTXGGFBK.js";
import {
  require_MmlNode,
  require_Node,
  require_Options
} from "./chunk-RTXZROXG.js";
import {
  __commonJS,
  __require
} from "./chunk-DLJ4GP37.js";

// node_modules/mathjax-full/js/components/global.js
var require_global = __commonJS({
  "node_modules/mathjax-full/js/components/global.js"(exports2) {
    "use strict";
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MathJax = exports2.combineWithMathJax = exports2.combineDefaults = exports2.combineConfig = exports2.isObject = void 0;
    var version_js_1 = require_version();
    function isObject(x) {
      return typeof x === "object" && x !== null;
    }
    exports2.isObject = isObject;
    function combineConfig(dst, src) {
      var e_1, _a;
      try {
        for (var _b = __values(Object.keys(src)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var id = _c.value;
          if (id === "__esModule")
            continue;
          if (isObject(dst[id]) && isObject(src[id]) && !(src[id] instanceof Promise)) {
            combineConfig(dst[id], src[id]);
          } else if (src[id] !== null && src[id] !== void 0) {
            dst[id] = src[id];
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return dst;
    }
    exports2.combineConfig = combineConfig;
    function combineDefaults(dst, name, src) {
      var e_2, _a;
      if (!dst[name]) {
        dst[name] = {};
      }
      dst = dst[name];
      try {
        for (var _b = __values(Object.keys(src)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var id = _c.value;
          if (isObject(dst[id]) && isObject(src[id])) {
            combineDefaults(dst, id, src[id]);
          } else if (dst[id] == null && src[id] != null) {
            dst[id] = src[id];
          }
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      return dst;
    }
    exports2.combineDefaults = combineDefaults;
    function combineWithMathJax(config) {
      return combineConfig(exports2.MathJax, config);
    }
    exports2.combineWithMathJax = combineWithMathJax;
    if (typeof global.MathJax === "undefined") {
      global.MathJax = {};
    }
    if (!global.MathJax.version) {
      global.MathJax = {
        version: version_js_1.VERSION,
        _: {},
        config: global.MathJax
      };
    }
    exports2.MathJax = global.MathJax;
  }
});

// node_modules/mj-context-menu/js/key_navigatable.js
var require_key_navigatable = __commonJS({
  "node_modules/mj-context-menu/js/key_navigatable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.KEY = void 0;
    var KEY;
    (function(KEY2) {
      KEY2[KEY2["RETURN"] = 13] = "RETURN";
      KEY2[KEY2["ESCAPE"] = 27] = "ESCAPE";
      KEY2[KEY2["SPACE"] = 32] = "SPACE";
      KEY2[KEY2["LEFT"] = 37] = "LEFT";
      KEY2[KEY2["UP"] = 38] = "UP";
      KEY2[KEY2["RIGHT"] = 39] = "RIGHT";
      KEY2[KEY2["DOWN"] = 40] = "DOWN";
    })(KEY = exports2.KEY || (exports2.KEY = {}));
  }
});

// node_modules/mj-context-menu/js/mouse_navigatable.js
var require_mouse_navigatable = __commonJS({
  "node_modules/mj-context-menu/js/mouse_navigatable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MOUSE = void 0;
    exports2.MOUSE = {
      CLICK: "click",
      DBLCLICK: "dblclick",
      DOWN: "mousedown",
      UP: "mouseup",
      OVER: "mouseover",
      OUT: "mouseout",
      MOVE: "mousemove",
      SELECTEND: "selectend",
      SELECTSTART: "selectstart"
    };
  }
});

// node_modules/mj-context-menu/js/abstract_navigatable.js
var require_abstract_navigatable = __commonJS({
  "node_modules/mj-context-menu/js/abstract_navigatable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractNavigatable = void 0;
    var key_navigatable_js_1 = require_key_navigatable();
    var mouse_navigatable_js_1 = require_mouse_navigatable();
    var AbstractNavigatable = function() {
      function AbstractNavigatable2() {
        this.bubble = false;
      }
      AbstractNavigatable2.prototype.bubbleKey = function() {
        this.bubble = true;
      };
      AbstractNavigatable2.prototype.keydown = function(event2) {
        switch (event2.keyCode) {
          case key_navigatable_js_1.KEY.ESCAPE:
            this.escape(event2);
            break;
          case key_navigatable_js_1.KEY.RIGHT:
            this.right(event2);
            break;
          case key_navigatable_js_1.KEY.LEFT:
            this.left(event2);
            break;
          case key_navigatable_js_1.KEY.UP:
            this.up(event2);
            break;
          case key_navigatable_js_1.KEY.DOWN:
            this.down(event2);
            break;
          case key_navigatable_js_1.KEY.RETURN:
          case key_navigatable_js_1.KEY.SPACE:
            this.space(event2);
            break;
          default:
            return;
        }
        this.bubble ? this.bubble = false : this.stop(event2);
      };
      AbstractNavigatable2.prototype.escape = function(_event) {
      };
      AbstractNavigatable2.prototype.space = function(_event) {
      };
      AbstractNavigatable2.prototype.left = function(_event) {
      };
      AbstractNavigatable2.prototype.right = function(_event) {
      };
      AbstractNavigatable2.prototype.up = function(_event) {
      };
      AbstractNavigatable2.prototype.down = function(_event) {
      };
      AbstractNavigatable2.prototype.stop = function(event2) {
        if (event2) {
          event2.stopPropagation();
          event2.preventDefault();
          event2.cancelBubble = true;
        }
      };
      AbstractNavigatable2.prototype.mousedown = function(event2) {
        return this.stop(event2);
      };
      AbstractNavigatable2.prototype.mouseup = function(event2) {
        return this.stop(event2);
      };
      AbstractNavigatable2.prototype.mouseover = function(event2) {
        return this.stop(event2);
      };
      AbstractNavigatable2.prototype.mouseout = function(event2) {
        return this.stop(event2);
      };
      AbstractNavigatable2.prototype.click = function(event2) {
        return this.stop(event2);
      };
      AbstractNavigatable2.prototype.addEvents = function(element) {
        element.addEventListener(mouse_navigatable_js_1.MOUSE.DOWN, this.mousedown.bind(this));
        element.addEventListener(mouse_navigatable_js_1.MOUSE.UP, this.mouseup.bind(this));
        element.addEventListener(mouse_navigatable_js_1.MOUSE.OVER, this.mouseover.bind(this));
        element.addEventListener(mouse_navigatable_js_1.MOUSE.OUT, this.mouseout.bind(this));
        element.addEventListener(mouse_navigatable_js_1.MOUSE.CLICK, this.click.bind(this));
        element.addEventListener("keydown", this.keydown.bind(this));
        element.addEventListener("dragstart", this.stop.bind(this));
        element.addEventListener(mouse_navigatable_js_1.MOUSE.SELECTSTART, this.stop.bind(this));
        element.addEventListener("contextmenu", this.stop.bind(this));
        element.addEventListener(mouse_navigatable_js_1.MOUSE.DBLCLICK, this.stop.bind(this));
      };
      return AbstractNavigatable2;
    }();
    exports2.AbstractNavigatable = AbstractNavigatable;
  }
});

// node_modules/mj-context-menu/js/menu_element.js
var require_menu_element = __commonJS({
  "node_modules/mj-context-menu/js/menu_element.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MenuElement = void 0;
    var abstract_navigatable_js_1 = require_abstract_navigatable();
    var MenuElement = function(_super) {
      __extends(MenuElement2, _super);
      function MenuElement2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      MenuElement2.prototype.addAttributes = function(attributes) {
        for (var attr in attributes) {
          this.html.setAttribute(attr, attributes[attr]);
        }
      };
      Object.defineProperty(MenuElement2.prototype, "html", {
        get: function() {
          if (!this._html) {
            this.generateHtml();
          }
          return this._html;
        },
        set: function(html) {
          this._html = html;
          this.addEvents(html);
        },
        enumerable: false,
        configurable: true
      });
      MenuElement2.prototype.generateHtml = function() {
        var html = document.createElement("div");
        html.classList.add(this.className);
        html.setAttribute("role", this.role);
        this.html = html;
      };
      MenuElement2.prototype.focus = function() {
        var html = this.html;
        html.setAttribute("tabindex", "0");
        html.focus();
      };
      MenuElement2.prototype.unfocus = function() {
        var html = this.html;
        if (html.hasAttribute("tabindex")) {
          html.setAttribute("tabindex", "-1");
        }
        try {
          html.blur();
        } catch (e) {
        }
        html.blur();
      };
      return MenuElement2;
    }(abstract_navigatable_js_1.AbstractNavigatable);
    exports2.MenuElement = MenuElement;
  }
});

// node_modules/mj-context-menu/js/abstract_postable.js
var require_abstract_postable = __commonJS({
  "node_modules/mj-context-menu/js/abstract_postable.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractPostable = void 0;
    var menu_element_js_1 = require_menu_element();
    var AbstractPostable = function(_super) {
      __extends(AbstractPostable2, _super);
      function AbstractPostable2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.posted = false;
        return _this;
      }
      AbstractPostable2.prototype.isPosted = function() {
        return this.posted;
      };
      AbstractPostable2.prototype.post = function(x, y) {
        if (this.posted) {
          return;
        }
        if (typeof x !== "undefined" && typeof y !== "undefined") {
          this.html.setAttribute("style", "left: " + x + "px; top: " + y + "px;");
        }
        this.display();
        this.posted = true;
      };
      AbstractPostable2.prototype.unpost = function() {
        if (!this.posted) {
          return;
        }
        var html = this.html;
        if (html.parentNode) {
          html.parentNode.removeChild(html);
        }
        this.posted = false;
      };
      return AbstractPostable2;
    }(menu_element_js_1.MenuElement);
    exports2.AbstractPostable = AbstractPostable;
  }
});

// node_modules/mj-context-menu/js/html_classes.js
var require_html_classes = __commonJS({
  "node_modules/mj-context-menu/js/html_classes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HtmlAttrs = exports2.HtmlClasses = void 0;
    var PREFIX = "CtxtMenu";
    function prefix_(name) {
      return PREFIX + "_" + name;
    }
    function prefixClass_(name) {
      return prefix_(name);
    }
    function prefixAttr_(name) {
      return prefix_(name);
    }
    exports2.HtmlClasses = {
      ATTACHED: prefixClass_("Attached"),
      CONTEXTMENU: prefixClass_("ContextMenu"),
      MENU: prefixClass_("Menu"),
      MENUARROW: prefixClass_("MenuArrow"),
      MENUACTIVE: prefixClass_("MenuActive"),
      MENUCHECK: prefixClass_("MenuCheck"),
      MENUCLOSE: prefixClass_("MenuClose"),
      MENUCOMBOBOX: prefixClass_("MenuComboBox"),
      MENUDISABLED: prefixClass_("MenuDisabled"),
      MENUFRAME: prefixClass_("MenuFrame"),
      MENUITEM: prefixClass_("MenuItem"),
      MENULABEL: prefixClass_("MenuLabel"),
      MENURADIOCHECK: prefixClass_("MenuRadioCheck"),
      MENUINPUTBOX: prefixClass_("MenuInputBox"),
      MENURULE: prefixClass_("MenuRule"),
      MENUSLIDER: prefixClass_("MenuSlider"),
      MOUSEPOST: prefixClass_("MousePost"),
      RTL: prefixClass_("RTL"),
      INFO: prefixClass_("Info"),
      INFOCLOSE: prefixClass_("InfoClose"),
      INFOCONTENT: prefixClass_("InfoContent"),
      INFOSIGNATURE: prefixClass_("InfoSignature"),
      INFOTITLE: prefixClass_("InfoTitle"),
      SLIDERVALUE: prefixClass_("SliderValue"),
      SLIDERBAR: prefixClass_("SliderBar"),
      SELECTION: prefixClass_("Selection"),
      SELECTIONBOX: prefixClass_("SelectionBox"),
      SELECTIONMENU: prefixClass_("SelectionMenu"),
      SELECTIONDIVIDER: prefixClass_("SelectionDivider"),
      SELECTIONITEM: prefixClass_("SelectionItem")
    };
    exports2.HtmlAttrs = {
      COUNTER: prefixAttr_("Counter"),
      KEYDOWNFUNC: prefixAttr_("keydownFunc"),
      CONTEXTMENUFUNC: prefixAttr_("contextmenuFunc"),
      OLDTAB: prefixAttr_("Oldtabindex"),
      TOUCHFUNC: prefixAttr_("TouchFunc")
    };
  }
});

// node_modules/mj-context-menu/js/abstract_entry.js
var require_abstract_entry = __commonJS({
  "node_modules/mj-context-menu/js/abstract_entry.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractEntry = void 0;
    var menu_element_js_1 = require_menu_element();
    var html_classes_js_1 = require_html_classes();
    var AbstractEntry = function(_super) {
      __extends(AbstractEntry2, _super);
      function AbstractEntry2(_menu, _type) {
        var _this = _super.call(this) || this;
        _this._menu = _menu;
        _this._type = _type;
        _this.className = html_classes_js_1.HtmlClasses["MENUITEM"];
        _this.role = "menuitem";
        _this.hidden = false;
        return _this;
      }
      Object.defineProperty(AbstractEntry2.prototype, "menu", {
        get: function() {
          return this._menu;
        },
        set: function(menu) {
          this._menu = menu;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractEntry2.prototype, "type", {
        get: function() {
          return this._type;
        },
        enumerable: false,
        configurable: true
      });
      AbstractEntry2.prototype.hide = function() {
        this.hidden = true;
        this.menu.generateMenu();
      };
      AbstractEntry2.prototype.show = function() {
        this.hidden = false;
        this.menu.generateMenu();
      };
      AbstractEntry2.prototype.isHidden = function() {
        return this.hidden;
      };
      return AbstractEntry2;
    }(menu_element_js_1.MenuElement);
    exports2.AbstractEntry = AbstractEntry;
  }
});

// node_modules/mj-context-menu/js/menu_util.js
var require_menu_util = __commonJS({
  "node_modules/mj-context-menu/js/menu_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MenuUtil = void 0;
    var MenuUtil;
    (function(MenuUtil2) {
      function close(item) {
        var menu = item.menu;
        if (menu.baseMenu) {
          menu.baseMenu.unpost();
        } else {
          menu.unpost();
        }
      }
      MenuUtil2.close = close;
      function getActiveElement(item) {
        var menu = item.menu;
        var baseMenu = menu.baseMenu ? menu.baseMenu : menu;
        return baseMenu.store.active;
      }
      MenuUtil2.getActiveElement = getActiveElement;
      function error(_error, msg) {
        console.error("ContextMenu Error: " + msg);
      }
      MenuUtil2.error = error;
      function counter() {
        return count++;
      }
      MenuUtil2.counter = counter;
      var count = 0;
    })(MenuUtil = exports2.MenuUtil || (exports2.MenuUtil = {}));
  }
});

// node_modules/mj-context-menu/js/abstract_item.js
var require_abstract_item = __commonJS({
  "node_modules/mj-context-menu/js/abstract_item.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractItem = void 0;
    var abstract_entry_js_1 = require_abstract_entry();
    var menu_util_js_1 = require_menu_util();
    var html_classes_js_1 = require_html_classes();
    var AbstractItem = function(_super) {
      __extends(AbstractItem2, _super);
      function AbstractItem2(menu, type, _content, id) {
        var _this = _super.call(this, menu, type) || this;
        _this._content = _content;
        _this.disabled = false;
        _this.callbacks = [];
        _this._id = id ? id : _content;
        return _this;
      }
      Object.defineProperty(AbstractItem2.prototype, "content", {
        get: function() {
          return this._content;
        },
        set: function(content) {
          this._content = content;
          this.generateHtml();
          if (this.menu) {
            this.menu.generateHtml();
          }
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractItem2.prototype, "id", {
        get: function() {
          return this._id;
        },
        enumerable: false,
        configurable: true
      });
      AbstractItem2.prototype.press = function() {
        if (!this.disabled) {
          this.executeAction();
          this.executeCallbacks_();
        }
      };
      AbstractItem2.prototype.executeAction = function() {
      };
      AbstractItem2.prototype.registerCallback = function(func) {
        if (this.callbacks.indexOf(func) === -1) {
          this.callbacks.push(func);
        }
      };
      AbstractItem2.prototype.unregisterCallback = function(func) {
        var index = this.callbacks.indexOf(func);
        if (index !== -1) {
          this.callbacks.splice(index, 1);
        }
      };
      AbstractItem2.prototype.mousedown = function(event2) {
        this.press();
        this.stop(event2);
      };
      AbstractItem2.prototype.mouseover = function(event2) {
        this.focus();
        this.stop(event2);
      };
      AbstractItem2.prototype.mouseout = function(event2) {
        this.deactivate();
        this.stop(event2);
      };
      AbstractItem2.prototype.generateHtml = function() {
        _super.prototype.generateHtml.call(this);
        var html = this.html;
        html.setAttribute("aria-disabled", "false");
        html.textContent = this.content;
      };
      AbstractItem2.prototype.activate = function() {
        if (!this.disabled) {
          this.html.classList.add(html_classes_js_1.HtmlClasses["MENUACTIVE"]);
        }
      };
      AbstractItem2.prototype.deactivate = function() {
        this.html.classList.remove(html_classes_js_1.HtmlClasses["MENUACTIVE"]);
      };
      AbstractItem2.prototype.focus = function() {
        this.menu.focused = this;
        _super.prototype.focus.call(this);
        this.activate();
      };
      AbstractItem2.prototype.unfocus = function() {
        this.deactivate();
        _super.prototype.unfocus.call(this);
      };
      AbstractItem2.prototype.escape = function(_event) {
        menu_util_js_1.MenuUtil.close(this);
      };
      AbstractItem2.prototype.up = function(event2) {
        this.menu.up(event2);
      };
      AbstractItem2.prototype.down = function(event2) {
        this.menu.down(event2);
      };
      AbstractItem2.prototype.left = function(event2) {
        this.menu.left(event2);
      };
      AbstractItem2.prototype.right = function(event2) {
        this.menu.right(event2);
      };
      AbstractItem2.prototype.space = function(_event) {
        this.press();
      };
      AbstractItem2.prototype.disable = function() {
        this.disabled = true;
        var html = this.html;
        html.classList.add(html_classes_js_1.HtmlClasses["MENUDISABLED"]);
        html.setAttribute("aria-disabled", "true");
      };
      AbstractItem2.prototype.enable = function() {
        this.disabled = false;
        var html = this.html;
        html.classList.remove(html_classes_js_1.HtmlClasses["MENUDISABLED"]);
        html.removeAttribute("aria-disabled");
      };
      AbstractItem2.prototype.executeCallbacks_ = function() {
        var e_1, _a;
        try {
          for (var _b = __values(this.callbacks), _c = _b.next(); !_c.done; _c = _b.next()) {
            var func = _c.value;
            try {
              func(this);
            } catch (e) {
              menu_util_js_1.MenuUtil.error(e, "Callback for menu entry " + this.id + " failed.");
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      };
      return AbstractItem2;
    }(abstract_entry_js_1.AbstractEntry);
    exports2.AbstractItem = AbstractItem;
  }
});

// node_modules/mj-context-menu/js/item_submenu.js
var require_item_submenu = __commonJS({
  "node_modules/mj-context-menu/js/item_submenu.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Submenu = void 0;
    var abstract_item_js_1 = require_abstract_item();
    var html_classes_js_1 = require_html_classes();
    var Submenu = function(_super) {
      __extends(Submenu2, _super);
      function Submenu2(menu, content, id) {
        var _this = _super.call(this, menu, "submenu", content, id) || this;
        _this._submenu = null;
        return _this;
      }
      Submenu2.fromJson = function(factory, _a, menu) {
        var content = _a.content, submenu = _a.menu, id = _a.id;
        var item = new this(menu, content, id);
        var sm = factory.get("subMenu")(factory, submenu, item);
        item.submenu = sm;
        return item;
      };
      Object.defineProperty(Submenu2.prototype, "submenu", {
        get: function() {
          return this._submenu;
        },
        set: function(menu) {
          this._submenu = menu;
        },
        enumerable: false,
        configurable: true
      });
      Submenu2.prototype.mouseover = function(event2) {
        this.focus();
        this.stop(event2);
      };
      Submenu2.prototype.mouseout = function(event2) {
        this.stop(event2);
      };
      Submenu2.prototype.unfocus = function() {
        if (!this.submenu.isPosted()) {
          _super.prototype.unfocus.call(this);
          return;
        }
        if (this.menu.focused !== this) {
          _super.prototype.unfocus.call(this);
          this.menu.unpostSubmenus();
          return;
        }
        this.html.setAttribute("tabindex", "-1");
        this.html.blur();
      };
      Submenu2.prototype.focus = function() {
        _super.prototype.focus.call(this);
        if (!this.submenu.isPosted() && !this.disabled) {
          this.submenu.post();
        }
      };
      Submenu2.prototype.executeAction = function() {
        this.submenu.isPosted() ? this.submenu.unpost() : this.submenu.post();
      };
      Submenu2.prototype.generateHtml = function() {
        _super.prototype.generateHtml.call(this);
        var html = this.html;
        this.span = document.createElement("span");
        this.span.textContent = "►";
        this.span.classList.add(html_classes_js_1.HtmlClasses["MENUARROW"]);
        html.appendChild(this.span);
        html.setAttribute("aria-haspopup", "true");
      };
      Submenu2.prototype.left = function(event2) {
        if (this.submenu.isPosted()) {
          this.submenu.unpost();
        } else {
          _super.prototype.left.call(this, event2);
        }
      };
      Submenu2.prototype.right = function(event2) {
        if (!this.submenu.isPosted()) {
          this.submenu.post();
        } else {
          this.submenu.down(event2);
        }
      };
      Submenu2.prototype.toJson = function() {
        return {
          type: ""
        };
      };
      return Submenu2;
    }(abstract_item_js_1.AbstractItem);
    exports2.Submenu = Submenu;
  }
});

// node_modules/mj-context-menu/js/abstract_menu.js
var require_abstract_menu = __commonJS({
  "node_modules/mj-context-menu/js/abstract_menu.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractMenu = void 0;
    var abstract_postable_js_1 = require_abstract_postable();
    var abstract_item_js_1 = require_abstract_item();
    var html_classes_js_1 = require_html_classes();
    var item_submenu_js_1 = require_item_submenu();
    var AbstractMenu = function(_super) {
      __extends(AbstractMenu2, _super);
      function AbstractMenu2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = html_classes_js_1.HtmlClasses["CONTEXTMENU"];
        _this.role = "menu";
        _this._items = [];
        _this._baseMenu = null;
        return _this;
      }
      Object.defineProperty(AbstractMenu2.prototype, "baseMenu", {
        get: function() {
          return this._baseMenu;
        },
        set: function(menu) {
          this._baseMenu = menu;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMenu2.prototype, "items", {
        get: function() {
          return this._items;
        },
        set: function(items) {
          this._items = items;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMenu2.prototype, "pool", {
        get: function() {
          return this.variablePool;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMenu2.prototype, "focused", {
        get: function() {
          return this._focused;
        },
        set: function(item) {
          if (this._focused === item) {
            return;
          }
          if (!this._focused) {
            this.unfocus();
          }
          var old = this._focused;
          this._focused = item;
          if (old) {
            old.unfocus();
          }
        },
        enumerable: false,
        configurable: true
      });
      AbstractMenu2.prototype.up = function(_event) {
        var items = this.items.filter(function(x) {
          return x instanceof abstract_item_js_1.AbstractItem && !x.isHidden();
        });
        if (items.length === 0) {
          return;
        }
        if (!this.focused) {
          items[items.length - 1].focus();
          return;
        }
        var index = items.indexOf(this.focused);
        if (index === -1) {
          return;
        }
        index = index ? --index : items.length - 1;
        items[index].focus();
      };
      AbstractMenu2.prototype.down = function(_event) {
        var items = this.items.filter(function(x) {
          return x instanceof abstract_item_js_1.AbstractItem && !x.isHidden();
        });
        if (items.length === 0) {
          return;
        }
        if (!this.focused) {
          items[0].focus();
          return;
        }
        var index = items.indexOf(this.focused);
        if (index === -1) {
          return;
        }
        index++;
        index = index === items.length ? 0 : index;
        items[index].focus();
      };
      AbstractMenu2.prototype.generateHtml = function() {
        _super.prototype.generateHtml.call(this);
        this.generateMenu();
      };
      AbstractMenu2.prototype.generateMenu = function() {
        var e_1, _a;
        var html = this.html;
        html.classList.add(html_classes_js_1.HtmlClasses["MENU"]);
        try {
          for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            if (!item.isHidden()) {
              html.appendChild(item.html);
              continue;
            }
            var itemHtml = item.html;
            if (itemHtml.parentNode) {
              itemHtml.parentNode.removeChild(itemHtml);
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      };
      AbstractMenu2.prototype.post = function(x, y) {
        this.variablePool.update();
        _super.prototype.post.call(this, x, y);
      };
      AbstractMenu2.prototype.unpostSubmenus = function() {
        var e_2, _a;
        var submenus = this.items.filter(function(x) {
          return x instanceof item_submenu_js_1.Submenu;
        });
        try {
          for (var submenus_1 = __values(submenus), submenus_1_1 = submenus_1.next(); !submenus_1_1.done; submenus_1_1 = submenus_1.next()) {
            var submenu = submenus_1_1.value;
            submenu.submenu.unpost();
            if (submenu !== this.focused) {
              submenu.unfocus();
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (submenus_1_1 && !submenus_1_1.done && (_a = submenus_1.return)) _a.call(submenus_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      };
      AbstractMenu2.prototype.unpost = function() {
        _super.prototype.unpost.call(this);
        this.unpostSubmenus();
        this.focused = null;
      };
      AbstractMenu2.prototype.find = function(id) {
        var e_3, _a;
        try {
          for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            if (item.type === "rule") {
              continue;
            }
            if (item.id === id) {
              return item;
            }
            if (item.type === "submenu") {
              var result = item.submenu.find(id);
              if (result) {
                return result;
              }
            }
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        return null;
      };
      return AbstractMenu2;
    }(abstract_postable_js_1.AbstractPostable);
    exports2.AbstractMenu = AbstractMenu;
  }
});

// node_modules/mj-context-menu/js/menu_store.js
var require_menu_store = __commonJS({
  "node_modules/mj-context-menu/js/menu_store.js"(exports2) {
    "use strict";
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MenuStore = void 0;
    var menu_util_js_1 = require_menu_util();
    var html_classes_js_1 = require_html_classes();
    var key_navigatable_js_1 = require_key_navigatable();
    var MenuStore = function() {
      function MenuStore2(menu) {
        this.menu = menu;
        this.store = [];
        this._active = null;
        this.counter = 0;
        this.attachedClass = html_classes_js_1.HtmlClasses["ATTACHED"] + "_" + menu_util_js_1.MenuUtil.counter();
        this.taborder = true;
        this.attrMap = {};
      }
      Object.defineProperty(MenuStore2.prototype, "active", {
        get: function() {
          return this._active;
        },
        set: function(element) {
          do {
            if (this.store.indexOf(element) !== -1) {
              this._active = element;
              break;
            }
            element = element.parentNode;
          } while (element);
        },
        enumerable: false,
        configurable: true
      });
      MenuStore2.prototype.next = function() {
        var length = this.store.length;
        if (length === 0) {
          this.active = null;
          return null;
        }
        var index = this.store.indexOf(this.active);
        index = index === -1 ? 0 : index < length - 1 ? index + 1 : 0;
        this.active = this.store[index];
        return this.active;
      };
      MenuStore2.prototype.previous = function() {
        var length = this.store.length;
        if (length === 0) {
          this.active = null;
          return null;
        }
        var last = length - 1;
        var index = this.store.indexOf(this.active);
        index = index === -1 ? last : index === 0 ? last : index - 1;
        this.active = this.store[index];
        return this.active;
      };
      MenuStore2.prototype.clear = function() {
        this.remove(this.store);
      };
      MenuStore2.prototype.insert = function(elementOrList) {
        var e_1, _a;
        var elements = elementOrList instanceof HTMLElement ? [elementOrList] : elementOrList;
        try {
          for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
            var element = elements_1_1.value;
            this.insertElement(element);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        this.sort();
      };
      MenuStore2.prototype.remove = function(elementOrList) {
        var e_2, _a;
        var elements = elementOrList instanceof HTMLElement ? [elementOrList] : elementOrList;
        try {
          for (var elements_2 = __values(elements), elements_2_1 = elements_2.next(); !elements_2_1.done; elements_2_1 = elements_2.next()) {
            var element = elements_2_1.value;
            this.removeElement(element);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (elements_2_1 && !elements_2_1.done && (_a = elements_2.return)) _a.call(elements_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        this.sort();
      };
      MenuStore2.prototype.inTaborder = function(flag) {
        if (this.taborder && !flag) {
          this.removeTaborder();
        }
        if (!this.taborder && flag) {
          this.insertTaborder();
        }
        this.taborder = flag;
      };
      MenuStore2.prototype.insertTaborder = function() {
        if (this.taborder) {
          this.insertTaborder_();
        }
      };
      MenuStore2.prototype.removeTaborder = function() {
        if (this.taborder) {
          this.removeTaborder_();
        }
      };
      MenuStore2.prototype.insertElement = function(element) {
        if (element.classList.contains(this.attachedClass)) {
          return;
        }
        element.classList.add(this.attachedClass);
        if (this.taborder) {
          this.addTabindex(element);
        }
        this.addEvents(element);
      };
      MenuStore2.prototype.removeElement = function(element) {
        if (!element.classList.contains(this.attachedClass)) {
          return;
        }
        element.classList.remove(this.attachedClass);
        if (this.taborder) {
          this.removeTabindex(element);
        }
        this.removeEvents(element);
      };
      MenuStore2.prototype.sort = function() {
        var nodes = document.getElementsByClassName(this.attachedClass);
        this.store = [].slice.call(nodes);
      };
      MenuStore2.prototype.insertTaborder_ = function() {
        this.store.forEach(function(x) {
          return x.setAttribute("tabindex", "0");
        });
      };
      MenuStore2.prototype.removeTaborder_ = function() {
        this.store.forEach(function(x) {
          return x.setAttribute("tabindex", "-1");
        });
      };
      MenuStore2.prototype.addTabindex = function(element) {
        if (element.hasAttribute("tabindex")) {
          element.setAttribute(html_classes_js_1.HtmlAttrs["OLDTAB"], element.getAttribute("tabindex"));
        }
        element.setAttribute("tabindex", "0");
      };
      MenuStore2.prototype.removeTabindex = function(element) {
        if (element.hasAttribute(html_classes_js_1.HtmlAttrs["OLDTAB"])) {
          element.setAttribute("tabindex", element.getAttribute(html_classes_js_1.HtmlAttrs["OLDTAB"]));
          element.removeAttribute(html_classes_js_1.HtmlAttrs["OLDTAB"]);
        } else {
          element.removeAttribute("tabindex");
        }
      };
      MenuStore2.prototype.addEvents = function(element) {
        if (element.hasAttribute(html_classes_js_1.HtmlAttrs["COUNTER"])) {
          return;
        }
        this.addEvent(element, "contextmenu", this.menu.post.bind(this.menu));
        this.addEvent(element, "keydown", this.keydown.bind(this));
        element.setAttribute(html_classes_js_1.HtmlAttrs["COUNTER"], this.counter.toString());
        this.counter++;
      };
      MenuStore2.prototype.addEvent = function(element, name, func) {
        var attrName = html_classes_js_1.HtmlAttrs[name.toUpperCase() + "FUNC"];
        this.attrMap[attrName + this.counter] = func;
        element.addEventListener(name, func);
      };
      MenuStore2.prototype.removeEvents = function(element) {
        if (!element.hasAttribute(html_classes_js_1.HtmlAttrs["COUNTER"])) {
          return;
        }
        var counter = element.getAttribute(html_classes_js_1.HtmlAttrs["COUNTER"]);
        this.removeEvent(element, "contextmenu", counter);
        this.removeEvent(element, "keydown", counter);
        element.removeAttribute(html_classes_js_1.HtmlAttrs["COUNTER"]);
      };
      MenuStore2.prototype.removeEvent = function(element, name, counter) {
        var attrName = html_classes_js_1.HtmlAttrs[name.toUpperCase() + "FUNC"];
        var menuFunc = this.attrMap[attrName + counter];
        element.removeEventListener(name, menuFunc);
      };
      MenuStore2.prototype.keydown = function(event2) {
        if (event2.keyCode === key_navigatable_js_1.KEY.SPACE) {
          this.menu.post(event2);
          event2.preventDefault();
          event2.stopImmediatePropagation();
        }
      };
      return MenuStore2;
    }();
    exports2.MenuStore = MenuStore;
  }
});

// node_modules/mj-context-menu/js/variable_pool.js
var require_variable_pool = __commonJS({
  "node_modules/mj-context-menu/js/variable_pool.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VariablePool = void 0;
    var VariablePool = function() {
      function VariablePool2() {
        this.pool = {};
      }
      VariablePool2.prototype.insert = function(variable) {
        this.pool[variable.name] = variable;
      };
      VariablePool2.prototype.lookup = function(name) {
        return this.pool[name];
      };
      VariablePool2.prototype.remove = function(name) {
        delete this.pool[name];
      };
      VariablePool2.prototype.update = function() {
        for (var variable in this.pool) {
          this.pool[variable].update();
        }
      };
      return VariablePool2;
    }();
    exports2.VariablePool = VariablePool;
  }
});

// node_modules/mj-context-menu/js/context_menu.js
var require_context_menu = __commonJS({
  "node_modules/mj-context-menu/js/context_menu.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ContextMenu = void 0;
    var abstract_menu_js_1 = require_abstract_menu();
    var html_classes_js_1 = require_html_classes();
    var menu_store_js_1 = require_menu_store();
    var variable_pool_js_1 = require_variable_pool();
    var ContextMenu = function(_super) {
      __extends(ContextMenu2, _super);
      function ContextMenu2(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.id = "";
        _this.moving = false;
        _this._store = new menu_store_js_1.MenuStore(_this);
        _this.widgets = [];
        _this.variablePool = new variable_pool_js_1.VariablePool();
        return _this;
      }
      ContextMenu2.fromJson = function(factory, _a) {
        var pool = _a.pool, items = _a.items, _b = _a.id, id = _b === void 0 ? "" : _b;
        var ctxtMenu = new this(factory);
        ctxtMenu.id = id;
        var varParser = factory.get("variable");
        pool.forEach(function(x) {
          return varParser(factory, x, ctxtMenu.pool);
        });
        var itemList = factory.get("items")(factory, items, ctxtMenu);
        ctxtMenu.items = itemList;
        return ctxtMenu;
      };
      ContextMenu2.prototype.generateHtml = function() {
        if (this.isPosted()) {
          this.unpost();
        }
        _super.prototype.generateHtml.call(this);
        this._frame = document.createElement("div");
        this._frame.classList.add(html_classes_js_1.HtmlClasses["MENUFRAME"]);
        var styleString = "left: 0px; top: 0px; z-index: 200; width: 100%; height: 100%; border: 0px; padding: 0px; margin: 0px;";
        this._frame.setAttribute("style", "position: absolute; " + styleString);
        var innerDiv = document.createElement("div");
        innerDiv.setAttribute("style", "position: fixed; " + styleString);
        this._frame.appendChild(innerDiv);
        innerDiv.addEventListener("mousedown", (function(event2) {
          this.unpost();
          this.unpostWidgets();
          this.stop(event2);
        }).bind(this));
      };
      ContextMenu2.prototype.display = function() {
        document.body.appendChild(this.frame);
        this.frame.appendChild(this.html);
        this.focus();
      };
      ContextMenu2.prototype.escape = function(_event) {
        this.unpost();
        this.unpostWidgets();
      };
      ContextMenu2.prototype.unpost = function() {
        _super.prototype.unpost.call(this);
        if (this.widgets.length > 0) {
          return;
        }
        this.frame.parentNode.removeChild(this.frame);
        var store = this.store;
        if (!this.moving) {
          store.insertTaborder();
        }
        store.active.focus();
      };
      ContextMenu2.prototype.left = function(_event) {
        this.move_(this.store.previous());
      };
      ContextMenu2.prototype.right = function(_event) {
        this.move_(this.store.next());
      };
      Object.defineProperty(ContextMenu2.prototype, "frame", {
        get: function() {
          return this._frame;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ContextMenu2.prototype, "store", {
        get: function() {
          return this._store;
        },
        enumerable: false,
        configurable: true
      });
      ContextMenu2.prototype.post = function(numberOrEvent, isY) {
        if (typeof isY !== "undefined") {
          if (!this.moving) {
            this.store.removeTaborder();
          }
          _super.prototype.post.call(this, numberOrEvent, isY);
          return;
        }
        var event2 = numberOrEvent;
        var node;
        if (event2 instanceof Event) {
          node = event2.target;
          this.stop(event2);
        } else {
          node = event2;
        }
        var x;
        var y;
        if (event2 instanceof MouseEvent) {
          x = event2.pageX, y = event2.pageY;
          if (!x && !y && event2.clientX) {
            x = event2.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = event2.clientY + document.body.scrollTop + document.documentElement.scrollTop;
          }
        }
        if (!x && !y && node) {
          var offsetX = window.pageXOffset || document.documentElement.scrollLeft;
          var offsetY = window.pageYOffset || document.documentElement.scrollTop;
          var rect = node.getBoundingClientRect();
          x = (rect.right + rect.left) / 2 + offsetX;
          y = (rect.bottom + rect.top) / 2 + offsetY;
        }
        this.store.active = node;
        this.anchor = this.store.active;
        var menu = this.html;
        var margin = 5;
        if (x + menu.offsetWidth > document.body.offsetWidth - margin) {
          x = document.body.offsetWidth - menu.offsetWidth - margin;
        }
        this.post(x, y);
      };
      ContextMenu2.prototype.registerWidget = function(widget) {
        this.widgets.push(widget);
      };
      ContextMenu2.prototype.unregisterWidget = function(widget) {
        var index = this.widgets.indexOf(widget);
        if (index > -1) {
          this.widgets.splice(index, 1);
        }
        if (this.widgets.length === 0) {
          this.unpost();
        }
      };
      ContextMenu2.prototype.unpostWidgets = function() {
        this.widgets.forEach(function(x) {
          return x.unpost();
        });
      };
      ContextMenu2.prototype.toJson = function() {
        return { type: "" };
      };
      ContextMenu2.prototype.move_ = function(next) {
        if (this.anchor && next !== this.anchor) {
          this.moving = true;
          this.unpost();
          this.post(next);
          this.moving = false;
        }
      };
      return ContextMenu2;
    }(abstract_menu_js_1.AbstractMenu);
    exports2.ContextMenu = ContextMenu;
  }
});

// node_modules/mathjax-full/js/ui/menu/MJContextMenu.js
var require_MJContextMenu = __commonJS({
  "node_modules/mathjax-full/js/ui/menu/MJContextMenu.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MJContextMenu = void 0;
    var context_menu_js_1 = require_context_menu();
    var item_submenu_js_1 = require_item_submenu();
    var MJContextMenu = function(_super) {
      __extends(MJContextMenu2, _super);
      function MJContextMenu2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mathItem = null;
        _this.annotation = "";
        _this.annotationTypes = {};
        return _this;
      }
      MJContextMenu2.prototype.post = function(x, y) {
        if (this.mathItem) {
          if (y !== void 0) {
            var input = this.mathItem.inputJax.name;
            var original = this.findID("Show", "Original");
            original.content = input === "MathML" ? "Original MathML" : input + " Commands";
            var clipboard = this.findID("Copy", "Original");
            clipboard.content = original.content;
            var semantics = this.findID("Settings", "semantics");
            input === "MathML" ? semantics.disable() : semantics.enable();
            this.getAnnotationMenu();
            this.dynamicSubmenus();
          }
          _super.prototype.post.call(this, x, y);
        }
      };
      MJContextMenu2.prototype.unpost = function() {
        _super.prototype.unpost.call(this);
        this.mathItem = null;
      };
      MJContextMenu2.prototype.findID = function() {
        var e_1, _a;
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          names[_i] = arguments[_i];
        }
        var menu = this;
        var item = null;
        try {
          for (var names_1 = __values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
            var name_1 = names_1_1.value;
            if (menu) {
              item = menu.find(name_1);
              menu = item instanceof item_submenu_js_1.Submenu ? item.submenu : null;
            } else {
              item = null;
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return item;
      };
      MJContextMenu2.prototype.getAnnotationMenu = function() {
        var _this = this;
        var annotations = this.getAnnotations(this.getSemanticNode());
        this.createAnnotationMenu("Show", annotations, function() {
          return _this.showAnnotation.post();
        });
        this.createAnnotationMenu("Copy", annotations, function() {
          return _this.copyAnnotation();
        });
      };
      MJContextMenu2.prototype.getSemanticNode = function() {
        var node = this.mathItem.root;
        while (node && !node.isKind("semantics")) {
          if (node.isToken || node.childNodes.length !== 1)
            return null;
          node = node.childNodes[0];
        }
        return node;
      };
      MJContextMenu2.prototype.getAnnotations = function(node) {
        var e_2, _a;
        var annotations = [];
        if (!node)
          return annotations;
        try {
          for (var _b = __values(node.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child.isKind("annotation")) {
              var match = this.annotationMatch(child);
              if (match) {
                var value = child.childNodes.reduce(function(text, chars) {
                  return text + chars.toString();
                }, "");
                annotations.push([match, value]);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        return annotations;
      };
      MJContextMenu2.prototype.annotationMatch = function(child) {
        var e_3, _a;
        var encoding = child.attributes.get("encoding");
        try {
          for (var _b = __values(Object.keys(this.annotationTypes)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var type = _c.value;
            if (this.annotationTypes[type].indexOf(encoding) >= 0) {
              return type;
            }
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        return null;
      };
      MJContextMenu2.prototype.createAnnotationMenu = function(id, annotations, action) {
        var _this = this;
        var menu = this.findID(id, "Annotation");
        menu.submenu = this.factory.get("subMenu")(this.factory, {
          items: annotations.map(function(_a) {
            var _b = __read(_a, 2), type = _b[0], value = _b[1];
            return {
              type: "command",
              id: type,
              content: type,
              action: function() {
                _this.annotation = value;
                action();
              }
            };
          }),
          id: "annotations"
        }, menu);
        if (annotations.length) {
          menu.enable();
        } else {
          menu.disable();
        }
      };
      MJContextMenu2.prototype.dynamicSubmenus = function() {
        var e_4, _a;
        try {
          for (var _b = __values(MJContextMenu2.DynamicSubmenus), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), id = _d[0], method = _d[1];
            var menu = this.find(id);
            if (!menu)
              continue;
            var sub = method(this, menu);
            menu.submenu = sub;
            if (sub.items.length) {
              menu.enable();
            } else {
              menu.disable();
            }
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
      };
      MJContextMenu2.DynamicSubmenus = /* @__PURE__ */ new Map();
      return MJContextMenu2;
    }(context_menu_js_1.ContextMenu);
    exports2.MJContextMenu = MJContextMenu;
  }
});

// node_modules/mathjax-full/js/core/Tree/Visitor.js
var require_Visitor = __commonJS({
  "node_modules/mathjax-full/js/core/Tree/Visitor.js"(exports2) {
    "use strict";
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractVisitor = void 0;
    var Node_js_1 = require_Node();
    var AbstractVisitor = function() {
      function AbstractVisitor2(factory) {
        var e_1, _a;
        this.nodeHandlers = /* @__PURE__ */ new Map();
        try {
          for (var _b = __values(factory.getKinds()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var kind = _c.value;
            var method = this[AbstractVisitor2.methodName(kind)];
            if (method) {
              this.nodeHandlers.set(kind, method);
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      AbstractVisitor2.methodName = function(kind) {
        return "visit" + (kind.charAt(0).toUpperCase() + kind.substr(1)).replace(/[^a-z0-9_]/ig, "_") + "Node";
      };
      AbstractVisitor2.prototype.visitTree = function(tree) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        return this.visitNode.apply(this, __spreadArray([tree], __read(args), false));
      };
      AbstractVisitor2.prototype.visitNode = function(node) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var handler = this.nodeHandlers.get(node.kind) || this.visitDefault;
        return handler.call.apply(handler, __spreadArray([this, node], __read(args), false));
      };
      AbstractVisitor2.prototype.visitDefault = function(node) {
        var e_2, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        if (node instanceof Node_js_1.AbstractNode) {
          try {
            for (var _b = __values(node.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              this.visitNode.apply(this, __spreadArray([child], __read(args), false));
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }
      };
      AbstractVisitor2.prototype.setNodeHandler = function(kind, handler) {
        this.nodeHandlers.set(kind, handler);
      };
      AbstractVisitor2.prototype.removeNodeHandler = function(kind) {
        this.nodeHandlers.delete(kind);
      };
      return AbstractVisitor2;
    }();
    exports2.AbstractVisitor = AbstractVisitor;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlVisitor.js
var require_MmlVisitor = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlVisitor.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MmlVisitor = void 0;
    var MmlFactory_js_1 = require_MmlFactory();
    var Visitor_js_1 = require_Visitor();
    var MmlVisitor = function(_super) {
      __extends(MmlVisitor2, _super);
      function MmlVisitor2(factory) {
        if (factory === void 0) {
          factory = null;
        }
        if (!factory) {
          factory = new MmlFactory_js_1.MmlFactory();
        }
        return _super.call(this, factory) || this;
      }
      MmlVisitor2.prototype.visitTextNode = function(_node) {
        var _args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          _args[_i - 1] = arguments[_i];
        }
      };
      MmlVisitor2.prototype.visitXMLNode = function(_node) {
        var _args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          _args[_i - 1] = arguments[_i];
        }
      };
      return MmlVisitor2;
    }(Visitor_js_1.AbstractVisitor);
    exports2.MmlVisitor = MmlVisitor;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/SerializedMmlVisitor.js
var require_SerializedMmlVisitor = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/SerializedMmlVisitor.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SerializedMmlVisitor = exports2.toEntity = exports2.DATAMJX = void 0;
    var MmlVisitor_js_1 = require_MmlVisitor();
    var MmlNode_js_1 = require_MmlNode();
    var mi_js_1 = require_mi();
    exports2.DATAMJX = "data-mjx-";
    var toEntity = function(c) {
      return "&#x" + c.codePointAt(0).toString(16).toUpperCase() + ";";
    };
    exports2.toEntity = toEntity;
    var SerializedMmlVisitor = function(_super) {
      __extends(SerializedMmlVisitor2, _super);
      function SerializedMmlVisitor2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      SerializedMmlVisitor2.prototype.visitTree = function(node) {
        return this.visitNode(node, "");
      };
      SerializedMmlVisitor2.prototype.visitTextNode = function(node, _space) {
        return this.quoteHTML(node.getText());
      };
      SerializedMmlVisitor2.prototype.visitXMLNode = function(node, space) {
        return space + node.getSerializedXML();
      };
      SerializedMmlVisitor2.prototype.visitInferredMrowNode = function(node, space) {
        var e_1, _a;
        var mml = [];
        try {
          for (var _b = __values(node.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            mml.push(this.visitNode(child, space));
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return mml.join("\n");
      };
      SerializedMmlVisitor2.prototype.visitTeXAtomNode = function(node, space) {
        var children = this.childNodeMml(node, space + "  ", "\n");
        var mml = space + "<mrow" + this.getAttributes(node) + ">" + (children.match(/\S/) ? "\n" + children + space : "") + "</mrow>";
        return mml;
      };
      SerializedMmlVisitor2.prototype.visitAnnotationNode = function(node, space) {
        return space + "<annotation" + this.getAttributes(node) + ">" + this.childNodeMml(node, "", "") + "</annotation>";
      };
      SerializedMmlVisitor2.prototype.visitDefault = function(node, space) {
        var kind = node.kind;
        var _a = __read(node.isToken || node.childNodes.length === 0 ? ["", ""] : ["\n", space], 2), nl = _a[0], endspace = _a[1];
        var children = this.childNodeMml(node, space + "  ", nl);
        return space + "<" + kind + this.getAttributes(node) + ">" + (children.match(/\S/) ? nl + children + endspace : "") + "</" + kind + ">";
      };
      SerializedMmlVisitor2.prototype.childNodeMml = function(node, space, nl) {
        var e_2, _a;
        var mml = "";
        try {
          for (var _b = __values(node.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            mml += this.visitNode(child, space) + nl;
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        return mml;
      };
      SerializedMmlVisitor2.prototype.getAttributes = function(node) {
        var e_3, _a;
        var attr = [];
        var defaults = this.constructor.defaultAttributes[node.kind] || {};
        var attributes = Object.assign({}, defaults, this.getDataAttributes(node), node.attributes.getAllAttributes());
        var variants = this.constructor.variants;
        if (attributes.hasOwnProperty("mathvariant") && variants.hasOwnProperty(attributes.mathvariant)) {
          attributes.mathvariant = variants[attributes.mathvariant];
        }
        try {
          for (var _b = __values(Object.keys(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var name_1 = _c.value;
            var value = String(attributes[name_1]);
            if (value === void 0)
              continue;
            attr.push(name_1 + '="' + this.quoteHTML(value) + '"');
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        return attr.length ? " " + attr.join(" ") : "";
      };
      SerializedMmlVisitor2.prototype.getDataAttributes = function(node) {
        var data = {};
        var variant = node.attributes.getExplicit("mathvariant");
        var variants = this.constructor.variants;
        variant && variants.hasOwnProperty(variant) && this.setDataAttribute(data, "variant", variant);
        node.getProperty("variantForm") && this.setDataAttribute(data, "alternate", "1");
        node.getProperty("pseudoscript") && this.setDataAttribute(data, "pseudoscript", "true");
        node.getProperty("autoOP") === false && this.setDataAttribute(data, "auto-op", "false");
        var scriptalign = node.getProperty("scriptalign");
        scriptalign && this.setDataAttribute(data, "script-align", scriptalign);
        var texclass = node.getProperty("texClass");
        if (texclass !== void 0) {
          var setclass = true;
          if (texclass === MmlNode_js_1.TEXCLASS.OP && node.isKind("mi")) {
            var name_2 = node.getText();
            setclass = !(name_2.length > 1 && name_2.match(mi_js_1.MmlMi.operatorName));
          }
          setclass && this.setDataAttribute(data, "texclass", texclass < 0 ? "NONE" : MmlNode_js_1.TEXCLASSNAMES[texclass]);
        }
        node.getProperty("scriptlevel") && node.getProperty("useHeight") === false && this.setDataAttribute(data, "smallmatrix", "true");
        return data;
      };
      SerializedMmlVisitor2.prototype.setDataAttribute = function(data, name, value) {
        data[exports2.DATAMJX + name] = value;
      };
      SerializedMmlVisitor2.prototype.quoteHTML = function(value) {
        return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/[\uD800-\uDBFF]./g, exports2.toEntity).replace(/[\u0080-\uD7FF\uE000-\uFFFF]/g, exports2.toEntity);
      };
      SerializedMmlVisitor2.variants = {
        "-tex-calligraphic": "script",
        "-tex-bold-calligraphic": "bold-script",
        "-tex-oldstyle": "normal",
        "-tex-bold-oldstyle": "bold",
        "-tex-mathit": "italic"
      };
      SerializedMmlVisitor2.defaultAttributes = {
        math: {
          xmlns: "http://www.w3.org/1998/Math/MathML"
        }
      };
      return SerializedMmlVisitor2;
    }(MmlVisitor_js_1.MmlVisitor);
    exports2.SerializedMmlVisitor = SerializedMmlVisitor;
  }
});

// node_modules/mathjax-full/js/ui/menu/MmlVisitor.js
var require_MmlVisitor2 = __commonJS({
  "node_modules/mathjax-full/js/ui/menu/MmlVisitor.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MmlVisitor = void 0;
    var SerializedMmlVisitor_js_1 = require_SerializedMmlVisitor();
    var Options_js_1 = require_Options();
    var MmlVisitor = function(_super) {
      __extends(MmlVisitor2, _super);
      function MmlVisitor2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = {
          texHints: true,
          semantics: false
        };
        _this.mathItem = null;
        return _this;
      }
      MmlVisitor2.prototype.visitTree = function(node, math, options) {
        if (math === void 0) {
          math = null;
        }
        if (options === void 0) {
          options = {};
        }
        this.mathItem = math;
        (0, Options_js_1.userOptions)(this.options, options);
        return this.visitNode(node, "");
      };
      MmlVisitor2.prototype.visitTeXAtomNode = function(node, space) {
        if (this.options.texHints) {
          return _super.prototype.visitTeXAtomNode.call(this, node, space);
        }
        if (node.childNodes[0] && node.childNodes[0].childNodes.length === 1) {
          return this.visitNode(node.childNodes[0], space);
        }
        return space + "<mrow" + this.getAttributes(node) + ">\n" + this.childNodeMml(node, space + "  ", "\n") + space + "</mrow>";
      };
      MmlVisitor2.prototype.visitMathNode = function(node, space) {
        if (!this.options.semantics || this.mathItem.inputJax.name !== "TeX") {
          return _super.prototype.visitDefault.call(this, node, space);
        }
        var addRow = node.childNodes.length && node.childNodes[0].childNodes.length > 1;
        return space + "<math" + this.getAttributes(node) + ">\n" + space + "  <semantics>\n" + (addRow ? space + "    <mrow>\n" : "") + this.childNodeMml(node, space + (addRow ? "      " : "    "), "\n") + (addRow ? space + "    </mrow>\n" : "") + space + '    <annotation encoding="application/x-tex">' + this.mathItem.math + "</annotation>\n" + space + "  </semantics>\n" + space + "</math>";
      };
      return MmlVisitor2;
    }(SerializedMmlVisitor_js_1.SerializedMmlVisitor);
    exports2.MmlVisitor = MmlVisitor;
  }
});

// node_modules/mj-context-menu/js/close_button.js
var require_close_button = __commonJS({
  "node_modules/mj-context-menu/js/close_button.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CloseButton = void 0;
    var abstract_postable_js_1 = require_abstract_postable();
    var html_classes_js_1 = require_html_classes();
    var CloseButton = function(_super) {
      __extends(CloseButton2, _super);
      function CloseButton2(element) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.className = html_classes_js_1.HtmlClasses["MENUCLOSE"];
        _this.role = "button";
        return _this;
      }
      CloseButton2.prototype.generateHtml = function() {
        var html = document.createElement("span");
        html.classList.add(this.className);
        html.setAttribute("role", this.role);
        html.setAttribute("tabindex", "0");
        var content = document.createElement("span");
        content.textContent = "×";
        html.appendChild(content);
        this.html = html;
      };
      CloseButton2.prototype.display = function() {
      };
      CloseButton2.prototype.unpost = function() {
        _super.prototype.unpost.call(this);
        this.element.unpost();
      };
      CloseButton2.prototype.keydown = function(event2) {
        this.bubbleKey();
        _super.prototype.keydown.call(this, event2);
      };
      CloseButton2.prototype.space = function(event2) {
        this.unpost();
        this.stop(event2);
      };
      CloseButton2.prototype.mousedown = function(event2) {
        this.unpost();
        this.stop(event2);
      };
      return CloseButton2;
    }(abstract_postable_js_1.AbstractPostable);
    exports2.CloseButton = CloseButton;
  }
});

// node_modules/mj-context-menu/js/info.js
var require_info = __commonJS({
  "node_modules/mj-context-menu/js/info.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Info = void 0;
    var close_button_js_1 = require_close_button();
    var html_classes_js_1 = require_html_classes();
    var abstract_postable_js_1 = require_abstract_postable();
    var Info = function(_super) {
      __extends(Info2, _super);
      function Info2(title, content, signature) {
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.signature = signature;
        _this.className = html_classes_js_1.HtmlClasses["INFO"];
        _this.role = "dialog";
        _this.contentDiv = _this.generateContent();
        _this.close = _this.generateClose();
        _this.content = content || function() {
          return "";
        };
        return _this;
      }
      Info2.prototype.attachMenu = function(menu) {
        this.menu = menu;
      };
      Info2.prototype.generateHtml = function() {
        _super.prototype.generateHtml.call(this);
        var html = this.html;
        html.appendChild(this.generateTitle());
        html.appendChild(this.contentDiv);
        html.appendChild(this.generateSignature());
        html.appendChild(this.close.html);
        html.setAttribute("tabindex", "0");
      };
      Info2.prototype.post = function() {
        _super.prototype.post.call(this);
        var doc = document.documentElement;
        var html = this.html;
        var H = window.innerHeight || doc.clientHeight || doc.scrollHeight || 0;
        var x = Math.floor(-html.offsetWidth / 2);
        var y = Math.floor((H - html.offsetHeight) / 3);
        html.setAttribute("style", "margin-left: " + x + "px; top: " + y + "px;");
        if (window.event instanceof MouseEvent) {
          html.classList.add(html_classes_js_1.HtmlClasses["MOUSEPOST"]);
        }
        html.focus();
      };
      Info2.prototype.display = function() {
        this.menu.registerWidget(this);
        this.contentDiv.innerHTML = this.content();
        var html = this.menu.html;
        if (html.parentNode) {
          html.parentNode.removeChild(html);
        }
        this.menu.frame.appendChild(this.html);
      };
      Info2.prototype.click = function(_event) {
      };
      Info2.prototype.keydown = function(event2) {
        this.bubbleKey();
        _super.prototype.keydown.call(this, event2);
      };
      Info2.prototype.escape = function(_event) {
        this.unpost();
      };
      Info2.prototype.unpost = function() {
        _super.prototype.unpost.call(this);
        this.html.classList.remove(html_classes_js_1.HtmlClasses["MOUSEPOST"]);
        this.menu.unregisterWidget(this);
      };
      Info2.prototype.generateClose = function() {
        var close = new close_button_js_1.CloseButton(this);
        var html = close.html;
        html.classList.add(html_classes_js_1.HtmlClasses["INFOCLOSE"]);
        html.setAttribute("aria-label", "Close Dialog Box");
        return close;
      };
      Info2.prototype.generateTitle = function() {
        var span = document.createElement("span");
        span.innerHTML = this.title;
        span.classList.add(html_classes_js_1.HtmlClasses["INFOTITLE"]);
        return span;
      };
      Info2.prototype.generateContent = function() {
        var div = document.createElement("div");
        div.classList.add(html_classes_js_1.HtmlClasses["INFOCONTENT"]);
        div.setAttribute("tabindex", "0");
        return div;
      };
      Info2.prototype.generateSignature = function() {
        var span = document.createElement("span");
        span.innerHTML = this.signature;
        span.classList.add(html_classes_js_1.HtmlClasses["INFOSIGNATURE"]);
        return span;
      };
      Info2.prototype.toJson = function() {
        return {
          type: ""
        };
      };
      return Info2;
    }(abstract_postable_js_1.AbstractPostable);
    exports2.Info = Info;
  }
});

// node_modules/mathjax-full/js/ui/menu/SelectableInfo.js
var require_SelectableInfo = __commonJS({
  "node_modules/mathjax-full/js/ui/menu/SelectableInfo.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SelectableInfo = void 0;
    var info_js_1 = require_info();
    var html_classes_js_1 = require_html_classes();
    var SelectableInfo = function(_super) {
      __extends(SelectableInfo2, _super);
      function SelectableInfo2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      SelectableInfo2.prototype.addEvents = function(element) {
        var _this = this;
        element.addEventListener("keypress", function(event2) {
          if (event2.key === "a" && (event2.ctrlKey || event2.metaKey)) {
            _this.selectAll();
            _this.stop(event2);
          }
        });
      };
      SelectableInfo2.prototype.selectAll = function() {
        var selection = document.getSelection();
        selection.selectAllChildren(this.html.querySelector("pre"));
      };
      SelectableInfo2.prototype.copyToClipboard = function() {
        this.selectAll();
        try {
          document.execCommand("copy");
        } catch (err) {
          alert("Can't copy to clipboard: " + err.message);
        }
        document.getSelection().removeAllRanges();
      };
      SelectableInfo2.prototype.generateHtml = function() {
        var _this = this;
        _super.prototype.generateHtml.call(this);
        var footer = this.html.querySelector("span." + html_classes_js_1.HtmlClasses["INFOSIGNATURE"]);
        var button = footer.appendChild(document.createElement("input"));
        button.type = "button";
        button.value = "Copy to Clipboard";
        button.addEventListener("click", function(_event) {
          return _this.copyToClipboard();
        });
      };
      return SelectableInfo2;
    }(info_js_1.Info);
    exports2.SelectableInfo = SelectableInfo;
  }
});

// node_modules/mj-context-menu/js/item_command.js
var require_item_command = __commonJS({
  "node_modules/mj-context-menu/js/item_command.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Command = void 0;
    var abstract_item_js_1 = require_abstract_item();
    var menu_util_js_1 = require_menu_util();
    var Command = function(_super) {
      __extends(Command2, _super);
      function Command2(menu, content, command, id) {
        var _this = _super.call(this, menu, "command", content, id) || this;
        _this.command = command;
        return _this;
      }
      Command2.fromJson = function(_factory, _a, menu) {
        var content = _a.content, action = _a.action, id = _a.id;
        return new this(menu, content, action, id);
      };
      Command2.prototype.executeAction = function() {
        try {
          this.command(menu_util_js_1.MenuUtil.getActiveElement(this));
        } catch (e) {
          menu_util_js_1.MenuUtil.error(e, "Illegal command callback.");
        }
        menu_util_js_1.MenuUtil.close(this);
      };
      Command2.prototype.toJson = function() {
        return {
          type: ""
        };
      };
      return Command2;
    }(abstract_item_js_1.AbstractItem);
    exports2.Command = Command;
  }
});

// node_modules/mj-context-menu/js/variable.js
var require_variable = __commonJS({
  "node_modules/mj-context-menu/js/variable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Variable = void 0;
    var menu_util_js_1 = require_menu_util();
    var Variable = function() {
      function Variable2(_name, getter, setter) {
        this._name = _name;
        this.getter = getter;
        this.setter = setter;
        this.items = [];
      }
      Variable2.fromJson = function(_factory, _a, pool) {
        var name = _a.name, getter = _a.getter, setter = _a.setter;
        var variable = new this(name, getter, setter);
        pool.insert(variable);
      };
      Object.defineProperty(Variable2.prototype, "name", {
        get: function() {
          return this._name;
        },
        enumerable: false,
        configurable: true
      });
      Variable2.prototype.getValue = function(node) {
        try {
          return this.getter(node);
        } catch (e) {
          menu_util_js_1.MenuUtil.error(e, "Command of variable " + this.name + " failed.");
          return null;
        }
      };
      Variable2.prototype.setValue = function(value, node) {
        try {
          this.setter(value, node);
        } catch (e) {
          menu_util_js_1.MenuUtil.error(e, "Command of variable " + this.name + " failed.");
        }
        this.update();
      };
      Variable2.prototype.register = function(item) {
        if (this.items.indexOf(item) === -1) {
          this.items.push(item);
        }
      };
      Variable2.prototype.unregister = function(item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      };
      Variable2.prototype.update = function() {
        this.items.forEach(function(x) {
          return x.update();
        });
      };
      Variable2.prototype.registerCallback = function(func) {
        this.items.forEach(function(x) {
          return x.registerCallback(func);
        });
      };
      Variable2.prototype.unregisterCallback = function(func) {
        this.items.forEach(function(x) {
          return x.unregisterCallback(func);
        });
      };
      Variable2.prototype.toJson = function() {
        return {
          type: "variable",
          name: this.name,
          getter: this.getter.toString(),
          setter: this.setter.toString()
        };
      };
      return Variable2;
    }();
    exports2.Variable = Variable;
  }
});

// node_modules/mj-context-menu/js/abstract_variable_item.js
var require_abstract_variable_item = __commonJS({
  "node_modules/mj-context-menu/js/abstract_variable_item.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractVariableItem = void 0;
    var abstract_item_js_1 = require_abstract_item();
    var AbstractVariableItem = function(_super) {
      __extends(AbstractVariableItem2, _super);
      function AbstractVariableItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AbstractVariableItem2.prototype.generateHtml = function() {
        _super.prototype.generateHtml.call(this);
        var html = this.html;
        if (!this.span) {
          this.generateSpan();
        }
        html.appendChild(this.span);
        this.update();
      };
      AbstractVariableItem2.prototype.register = function() {
        this.variable.register(this);
      };
      AbstractVariableItem2.prototype.unregister = function() {
        this.variable.unregister(this);
      };
      AbstractVariableItem2.prototype.update = function() {
        this.updateAria();
        if (this.span) {
          this.updateSpan();
        }
      };
      return AbstractVariableItem2;
    }(abstract_item_js_1.AbstractItem);
    exports2.AbstractVariableItem = AbstractVariableItem;
  }
});

// node_modules/mj-context-menu/js/item_checkbox.js
var require_item_checkbox = __commonJS({
  "node_modules/mj-context-menu/js/item_checkbox.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Checkbox = void 0;
    var abstract_variable_item_js_1 = require_abstract_variable_item();
    var menu_util_js_1 = require_menu_util();
    var html_classes_js_1 = require_html_classes();
    var Checkbox = function(_super) {
      __extends(Checkbox2, _super);
      function Checkbox2(menu, content, variable, id) {
        var _this = _super.call(this, menu, "checkbox", content, id) || this;
        _this.role = "menuitemcheckbox";
        _this.variable = menu.pool.lookup(variable);
        _this.register();
        return _this;
      }
      Checkbox2.fromJson = function(_factory, _a, menu) {
        var content = _a.content, variable = _a.variable, id = _a.id;
        return new this(menu, content, variable, id);
      };
      Checkbox2.prototype.executeAction = function() {
        this.variable.setValue(!this.variable.getValue());
        menu_util_js_1.MenuUtil.close(this);
      };
      Checkbox2.prototype.generateSpan = function() {
        this.span = document.createElement("span");
        this.span.textContent = "✓";
        this.span.classList.add(html_classes_js_1.HtmlClasses["MENUCHECK"]);
      };
      Checkbox2.prototype.updateAria = function() {
        this.html.setAttribute("aria-checked", this.variable.getValue() ? "true" : "false");
      };
      Checkbox2.prototype.updateSpan = function() {
        this.span.style.display = this.variable.getValue() ? "" : "none";
      };
      Checkbox2.prototype.toJson = function() {
        return {
          type: ""
        };
      };
      return Checkbox2;
    }(abstract_variable_item_js_1.AbstractVariableItem);
    exports2.Checkbox = Checkbox;
  }
});

// node_modules/mj-context-menu/js/item_combo.js
var require_item_combo = __commonJS({
  "node_modules/mj-context-menu/js/item_combo.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Combo = void 0;
    var abstract_variable_item_js_1 = require_abstract_variable_item();
    var menu_util_js_1 = require_menu_util();
    var html_classes_js_1 = require_html_classes();
    var key_navigatable_js_1 = require_key_navigatable();
    var Combo = function(_super) {
      __extends(Combo2, _super);
      function Combo2(menu, content, variable, id) {
        var _this = _super.call(this, menu, "combobox", content, id) || this;
        _this.role = "combobox";
        _this.inputEvent = false;
        _this.variable = menu.pool.lookup(variable);
        _this.register();
        return _this;
      }
      Combo2.fromJson = function(_factory, _a, menu) {
        var content = _a.content, variable = _a.variable, id = _a.id;
        return new this(menu, content, variable, id);
      };
      Combo2.prototype.executeAction = function() {
        this.variable.setValue(this.input.value, menu_util_js_1.MenuUtil.getActiveElement(this));
      };
      Combo2.prototype.space = function(event2) {
        _super.prototype.space.call(this, event2);
        menu_util_js_1.MenuUtil.close(this);
      };
      Combo2.prototype.focus = function() {
        _super.prototype.focus.call(this);
        this.input.focus();
      };
      Combo2.prototype.unfocus = function() {
        _super.prototype.unfocus.call(this);
        this.updateSpan();
      };
      Combo2.prototype.generateHtml = function() {
        _super.prototype.generateHtml.call(this);
        var html = this.html;
        html.classList.add(html_classes_js_1.HtmlClasses["MENUCOMBOBOX"]);
      };
      Combo2.prototype.generateSpan = function() {
        this.span = document.createElement("span");
        this.span.classList.add(html_classes_js_1.HtmlClasses["MENUINPUTBOX"]);
        this.input = document.createElement("input");
        this.input.addEventListener("keydown", this.inputKey.bind(this));
        this.input.setAttribute("size", "10em");
        this.input.setAttribute("type", "text");
        this.input.setAttribute("tabindex", "-1");
        this.span.appendChild(this.input);
      };
      Combo2.prototype.inputKey = function(_event) {
        this.bubbleKey();
        this.inputEvent = true;
      };
      Combo2.prototype.keydown = function(event2) {
        if (this.inputEvent && event2.keyCode !== key_navigatable_js_1.KEY.ESCAPE && event2.keyCode !== key_navigatable_js_1.KEY.RETURN) {
          this.inputEvent = false;
          event2.stopPropagation();
          return;
        }
        _super.prototype.keydown.call(this, event2);
        event2.stopPropagation();
      };
      Combo2.prototype.updateAria = function() {
      };
      Combo2.prototype.updateSpan = function() {
        var initValue;
        try {
          initValue = this.variable.getValue(menu_util_js_1.MenuUtil.getActiveElement(this));
        } catch (e) {
          initValue = "";
        }
        this.input.value = initValue;
      };
      Combo2.prototype.toJson = function() {
        return {
          type: ""
        };
      };
      return Combo2;
    }(abstract_variable_item_js_1.AbstractVariableItem);
    exports2.Combo = Combo;
  }
});

// node_modules/mj-context-menu/js/item_label.js
var require_item_label = __commonJS({
  "node_modules/mj-context-menu/js/item_label.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Label = void 0;
    var abstract_item_js_1 = require_abstract_item();
    var html_classes_js_1 = require_html_classes();
    var Label = function(_super) {
      __extends(Label2, _super);
      function Label2(menu, content, id) {
        return _super.call(this, menu, "label", content, id) || this;
      }
      Label2.fromJson = function(_factory, _a, menu) {
        var content = _a.content, id = _a.id;
        return new this(menu, content, id);
      };
      Label2.prototype.generateHtml = function() {
        _super.prototype.generateHtml.call(this);
        var html = this.html;
        html.classList.add(html_classes_js_1.HtmlClasses["MENULABEL"]);
      };
      Label2.prototype.toJson = function() {
        return {
          type: ""
        };
      };
      return Label2;
    }(abstract_item_js_1.AbstractItem);
    exports2.Label = Label;
  }
});

// node_modules/mj-context-menu/js/item_radio.js
var require_item_radio = __commonJS({
  "node_modules/mj-context-menu/js/item_radio.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Radio = void 0;
    var abstract_variable_item_js_1 = require_abstract_variable_item();
    var menu_util_js_1 = require_menu_util();
    var html_classes_js_1 = require_html_classes();
    var Radio = function(_super) {
      __extends(Radio2, _super);
      function Radio2(menu, content, variable, id) {
        var _this = _super.call(this, menu, "radio", content, id) || this;
        _this.role = "menuitemradio";
        _this.variable = menu.pool.lookup(variable);
        _this.register();
        return _this;
      }
      Radio2.fromJson = function(_factory, _a, menu) {
        var content = _a.content, variable = _a.variable, id = _a.id;
        return new this(menu, content, variable, id);
      };
      Radio2.prototype.executeAction = function() {
        this.variable.setValue(this.id);
        menu_util_js_1.MenuUtil.close(this);
      };
      Radio2.prototype.generateSpan = function() {
        this.span = document.createElement("span");
        this.span.textContent = "✓";
        this.span.classList.add(html_classes_js_1.HtmlClasses["MENURADIOCHECK"]);
      };
      Radio2.prototype.updateAria = function() {
        this.html.setAttribute("aria-checked", this.variable.getValue() === this.id ? "true" : "false");
      };
      Radio2.prototype.updateSpan = function() {
        this.span.style.display = this.variable.getValue() === this.id ? "" : "none";
      };
      Radio2.prototype.toJson = function() {
        return {
          type: ""
        };
      };
      return Radio2;
    }(abstract_variable_item_js_1.AbstractVariableItem);
    exports2.Radio = Radio;
  }
});

// node_modules/mj-context-menu/js/item_rule.js
var require_item_rule = __commonJS({
  "node_modules/mj-context-menu/js/item_rule.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Rule = void 0;
    var abstract_entry_js_1 = require_abstract_entry();
    var html_classes_js_1 = require_html_classes();
    var Rule = function(_super) {
      __extends(Rule2, _super);
      function Rule2(menu) {
        var _this = _super.call(this, menu, "rule") || this;
        _this.className = html_classes_js_1.HtmlClasses["MENUITEM"];
        _this.role = "separator";
        return _this;
      }
      Rule2.fromJson = function(_factory, _a, menu) {
        return new this(menu);
      };
      Rule2.prototype.generateHtml = function() {
        _super.prototype.generateHtml.call(this);
        var html = this.html;
        html.classList.add(html_classes_js_1.HtmlClasses["MENURULE"]);
        html.setAttribute("aria-orientation", "vertical");
      };
      Rule2.prototype.addEvents = function(_element) {
      };
      Rule2.prototype.toJson = function() {
        return { type: "rule" };
      };
      return Rule2;
    }(abstract_entry_js_1.AbstractEntry);
    exports2.Rule = Rule;
  }
});

// node_modules/mj-context-menu/js/item_slider.js
var require_item_slider = __commonJS({
  "node_modules/mj-context-menu/js/item_slider.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Slider = void 0;
    var abstract_variable_item_js_1 = require_abstract_variable_item();
    var menu_util_js_1 = require_menu_util();
    var html_classes_js_1 = require_html_classes();
    var key_navigatable_js_1 = require_key_navigatable();
    var Slider = function(_super) {
      __extends(Slider2, _super);
      function Slider2(menu, content, variable, id) {
        var _this = _super.call(this, menu, "slider", content, id) || this;
        _this.role = "slider";
        _this.labelId = "ctx_slideLabel" + menu_util_js_1.MenuUtil.counter();
        _this.valueId = "ctx_slideValue" + menu_util_js_1.MenuUtil.counter();
        _this.inputEvent = false;
        _this.variable = menu.pool.lookup(variable);
        _this.register();
        return _this;
      }
      Slider2.fromJson = function(_factory, _a, menu) {
        var content = _a.content, variable = _a.variable, id = _a.id;
        return new this(menu, content, variable, id);
      };
      Slider2.prototype.executeAction = function() {
        this.variable.setValue(this.input.value, menu_util_js_1.MenuUtil.getActiveElement(this));
        this.update();
      };
      Slider2.prototype.space = function(event2) {
        _super.prototype.space.call(this, event2);
        menu_util_js_1.MenuUtil.close(this);
      };
      Slider2.prototype.focus = function() {
        _super.prototype.focus.call(this);
        this.input.focus();
      };
      Slider2.prototype.unfocus = function() {
        _super.prototype.unfocus.call(this);
        this.updateSpan();
      };
      Slider2.prototype.generateHtml = function() {
        _super.prototype.generateHtml.call(this);
        var html = this.html;
        html.classList.add(html_classes_js_1.HtmlClasses["MENUSLIDER"]);
        this.valueSpan = document.createElement("span");
        this.valueSpan.setAttribute("id", this.valueId);
        this.valueSpan.classList.add(html_classes_js_1.HtmlClasses["SLIDERVALUE"]);
        this.html.appendChild(this.valueSpan);
      };
      Slider2.prototype.generateSpan = function() {
        this.span = document.createElement("span");
        this.labelSpan = document.createElement("span");
        this.labelSpan.setAttribute("id", this.labelId);
        this.labelSpan.appendChild(this.html.childNodes[0]);
        this.html.appendChild(this.labelSpan);
        this.input = document.createElement("input");
        this.input.setAttribute("type", "range");
        this.input.setAttribute("min", "0");
        this.input.setAttribute("max", "100");
        this.input.setAttribute("aria-valuemin", "0");
        this.input.setAttribute("aria-valuemax", "100");
        this.input.setAttribute("aria-labelledby", this.labelId);
        this.input.addEventListener("keydown", this.inputKey.bind(this));
        this.input.addEventListener("input", this.executeAction.bind(this));
        this.input.classList.add(html_classes_js_1.HtmlClasses["SLIDERBAR"]);
        this.span.appendChild(this.input);
      };
      Slider2.prototype.inputKey = function(_event) {
        this.inputEvent = true;
      };
      Slider2.prototype.mousedown = function(event2) {
        event2.stopPropagation();
      };
      Slider2.prototype.mouseup = function(_event) {
        event.stopPropagation();
      };
      Slider2.prototype.keydown = function(event2) {
        var code = event2.keyCode;
        if (code === key_navigatable_js_1.KEY.UP || code === key_navigatable_js_1.KEY.DOWN) {
          event2.preventDefault();
          _super.prototype.keydown.call(this, event2);
          return;
        }
        if (this.inputEvent && code !== key_navigatable_js_1.KEY.ESCAPE && code !== key_navigatable_js_1.KEY.RETURN) {
          this.inputEvent = false;
          event2.stopPropagation();
          return;
        }
        _super.prototype.keydown.call(this, event2);
        event2.stopPropagation();
      };
      Slider2.prototype.updateAria = function() {
        var value = this.variable.getValue();
        if (value && this.input) {
          this.input.setAttribute("aria-valuenow", value);
          this.input.setAttribute("aria-valuetext", value + "%");
        }
      };
      Slider2.prototype.updateSpan = function() {
        var initValue;
        try {
          initValue = this.variable.getValue(menu_util_js_1.MenuUtil.getActiveElement(this));
          this.valueSpan.innerHTML = initValue + "%";
        } catch (e) {
          initValue = "";
        }
        this.input.value = initValue;
      };
      Slider2.prototype.toJson = function() {
        return {
          type: ""
        };
      };
      return Slider2;
    }(abstract_variable_item_js_1.AbstractVariableItem);
    exports2.Slider = Slider;
  }
});

// node_modules/mj-context-menu/js/sub_menu.js
var require_sub_menu = __commonJS({
  "node_modules/mj-context-menu/js/sub_menu.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SubMenu = void 0;
    var abstract_menu_js_1 = require_abstract_menu();
    var SubMenu = function(_super) {
      __extends(SubMenu2, _super);
      function SubMenu2(_anchor) {
        var _this = _super.call(this) || this;
        _this._anchor = _anchor;
        _this.variablePool = _this.anchor.menu.pool;
        _this.setBaseMenu();
        return _this;
      }
      SubMenu2.fromJson = function(factory, _a, anchor) {
        var its = _a.items;
        var submenu = new this(anchor);
        var itemList = factory.get("items")(factory, its, submenu);
        submenu.items = itemList;
        return submenu;
      };
      Object.defineProperty(SubMenu2.prototype, "anchor", {
        get: function() {
          return this._anchor;
        },
        enumerable: false,
        configurable: true
      });
      SubMenu2.prototype.post = function() {
        if (!this.anchor.menu.isPosted()) {
          return;
        }
        var mobileFlag = false;
        var rtlFlag = false;
        var margin = 5;
        var parent = this.anchor.html;
        var menu = this.html;
        var base = this.baseMenu.frame;
        var mw = parent.offsetWidth;
        var x = mobileFlag ? 30 : mw - 2;
        var y = 0;
        while (parent && parent !== base) {
          x += parent.offsetLeft;
          y += parent.offsetTop;
          parent = parent.parentNode;
        }
        if (!mobileFlag) {
          if (rtlFlag && x - mw - menu.offsetWidth > margin || !rtlFlag && x + menu.offsetWidth > document.body.offsetWidth - margin) {
            x = Math.max(margin, x - mw - menu.offsetWidth + 6);
          }
        }
        _super.prototype.post.call(this, x, y);
      };
      SubMenu2.prototype.display = function() {
        this.baseMenu.frame.appendChild(this.html);
      };
      SubMenu2.prototype.setBaseMenu = function() {
        var menu = this;
        do {
          menu = menu.anchor.menu;
        } while (menu instanceof SubMenu2);
        this.baseMenu = menu;
      };
      SubMenu2.prototype.left = function(_event) {
        this.focused = null;
        this.anchor.focus();
      };
      SubMenu2.prototype.toJson = function() {
        return {
          type: ""
        };
      };
      return SubMenu2;
    }(abstract_menu_js_1.AbstractMenu);
    exports2.SubMenu = SubMenu;
  }
});

// node_modules/mj-context-menu/js/selection_box.js
var require_selection_box = __commonJS({
  "node_modules/mj-context-menu/js/selection_box.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SelectionBox = exports2.SelectionMenu = void 0;
    var menu_util_js_1 = require_menu_util();
    var html_classes_js_1 = require_html_classes();
    var abstract_menu_js_1 = require_abstract_menu();
    var info_js_1 = require_info();
    var SelectionMenu = function(_super) {
      __extends(SelectionMenu2, _super);
      function SelectionMenu2(anchor) {
        var _this = _super.call(this) || this;
        _this.anchor = anchor;
        _this.className = html_classes_js_1.HtmlClasses["SELECTIONMENU"];
        _this.variablePool = _this.anchor.menu.pool;
        _this.baseMenu = _this.anchor.menu;
        return _this;
      }
      SelectionMenu2.fromJson = function(factory, _a, sb) {
        var title = _a.title, values = _a.values, variable = _a.variable;
        var selection = new this(sb);
        var tit = factory.get("label")(factory, { content: title || "", id: title || "id" }, selection);
        var rul = factory.get("rule")(factory, {}, selection);
        var radios = values.map(function(x) {
          return factory.get("radio")(factory, { content: x, variable, id: x }, selection);
        });
        var items = [tit, rul].concat(radios);
        selection.items = items;
        return selection;
      };
      SelectionMenu2.prototype.generateHtml = function() {
        _super.prototype.generateHtml.call(this);
        this.items.forEach(function(item) {
          return item.html.classList.add(html_classes_js_1.HtmlClasses["SELECTIONITEM"]);
        });
      };
      SelectionMenu2.prototype.display = function() {
      };
      SelectionMenu2.prototype.right = function(event2) {
        this.anchor.right(event2);
      };
      SelectionMenu2.prototype.left = function(event2) {
        this.anchor.left(event2);
      };
      return SelectionMenu2;
    }(abstract_menu_js_1.AbstractMenu);
    exports2.SelectionMenu = SelectionMenu;
    var SelectionBox = function(_super) {
      __extends(SelectionBox2, _super);
      function SelectionBox2(title, signature, style, grid) {
        if (style === void 0) {
          style = "none";
        }
        if (grid === void 0) {
          grid = "vertical";
        }
        var _this = _super.call(this, title, null, signature) || this;
        _this.style = style;
        _this.grid = grid;
        _this._selections = [];
        _this.prefix = "ctxt-selection";
        _this._balanced = true;
        return _this;
      }
      SelectionBox2.fromJson = function(factory, _a, ctxt) {
        var title = _a.title, signature = _a.signature, selections = _a.selections, order = _a.order, grid = _a.grid;
        var sb = new this(title, signature, order, grid);
        sb.attachMenu(ctxt);
        var sels = selections.map(function(x) {
          return factory.get("selectionMenu")(factory, x, sb);
        });
        sb.selections = sels;
        return sb;
      };
      SelectionBox2.prototype.attachMenu = function(menu) {
        this.menu = menu;
      };
      Object.defineProperty(SelectionBox2.prototype, "selections", {
        get: function() {
          return this._selections;
        },
        set: function(selections) {
          var _this = this;
          this._selections = [];
          selections.forEach(function(x) {
            return _this.addSelection(x);
          });
        },
        enumerable: false,
        configurable: true
      });
      SelectionBox2.prototype.addSelection = function(selection) {
        selection.anchor = this;
        this._selections.push(selection);
      };
      SelectionBox2.prototype.rowDiv = function(sels) {
        var _this = this;
        var div = document.createElement("div");
        this.contentDiv.appendChild(div);
        var rects = sels.map(function(sel) {
          div.appendChild(sel.html);
          if (!sel.html.id) {
            sel.html.id = _this.prefix + menu_util_js_1.MenuUtil.counter();
          }
          return sel.html.getBoundingClientRect();
        });
        var column = rects.map(function(x) {
          return x.width;
        });
        var width = column.reduce(function(x, y) {
          return x + y;
        }, 0);
        var height = rects.reduce(function(x, y) {
          return Math.max(x, y.height);
        }, 0);
        div.classList.add(html_classes_js_1.HtmlClasses["SELECTIONDIVIDER"]);
        div.setAttribute("style", "height: " + height + "px;");
        return [div, width, height, column];
      };
      SelectionBox2.prototype.display = function() {
        _super.prototype.display.call(this);
        this.order();
        if (!this.selections.length) {
          return;
        }
        var outerDivs = [];
        var maxWidth = 0;
        var balancedColumn = [];
        var chunks = this.getChunkSize(this.selections.length);
        var _loop_1 = function(i2) {
          var sels = this_1.selections.slice(i2, i2 + chunks);
          var _a = __read(this_1.rowDiv(sels), 4), div = _a[0], width = _a[1], height = _a[2], column = _a[3];
          outerDivs.push(div);
          maxWidth = Math.max(maxWidth, width);
          sels.forEach(function(sel) {
            return sel.html.style.height = height + "px";
          });
          balancedColumn = this_1.combineColumn(balancedColumn, column);
        };
        var this_1 = this;
        for (var i = 0; i < this.selections.length; i += chunks) {
          _loop_1(i);
        }
        if (this._balanced) {
          this.balanceColumn(outerDivs, balancedColumn);
          maxWidth = balancedColumn.reduce(function(x, y) {
            return x + y;
          }, 20);
        }
        outerDivs.forEach(function(div) {
          return div.style.width = maxWidth + "px";
        });
      };
      SelectionBox2.prototype.getChunkSize = function(size) {
        switch (this.grid) {
          case "square":
            return Math.floor(Math.sqrt(size));
          case "horizontal":
            return Math.floor(size / SelectionBox2.chunkSize);
          case "vertical":
          default:
            return SelectionBox2.chunkSize;
        }
      };
      SelectionBox2.prototype.balanceColumn = function(divs, column) {
        divs.forEach(function(div) {
          var children = Array.from(div.children);
          for (var i = 0, child = void 0; child = children[i]; i++) {
            child.style.width = column[i] + "px";
          }
        });
      };
      SelectionBox2.prototype.combineColumn = function(col1, col2) {
        var result = [];
        var i = 0;
        while (col1[i] || col2[i]) {
          if (!col1[i]) {
            result = result.concat(col2.slice(i));
            break;
          }
          if (!col2[i]) {
            result = result.concat(col1.slice(i));
            break;
          }
          result.push(Math.max(col1[i], col2[i]));
          i++;
        }
        ;
        return result;
      };
      SelectionBox2.prototype.left = function(event2) {
        var _this = this;
        this.move(event2, function(index) {
          return (index === 0 ? _this.selections.length : index) - 1;
        });
      };
      SelectionBox2.prototype.right = function(event2) {
        var _this = this;
        this.move(event2, function(index) {
          return index === _this.selections.length - 1 ? 0 : index + 1;
        });
      };
      SelectionBox2.prototype.generateHtml = function() {
        _super.prototype.generateHtml.call(this);
        this.html.classList.add(html_classes_js_1.HtmlClasses["SELECTION"]);
      };
      SelectionBox2.prototype.generateContent = function() {
        var div = _super.prototype.generateContent.call(this);
        div.classList.add(html_classes_js_1.HtmlClasses["SELECTIONBOX"]);
        div.removeAttribute("tabindex");
        return div;
      };
      SelectionBox2.prototype.findSelection = function(event2) {
        var target = event2.target;
        var selection = null;
        if (target.id) {
          selection = this.selections.find(function(x) {
            return x.html.id === target.id;
          });
        }
        if (!selection) {
          var id_1 = target.parentElement.id;
          selection = this.selections.find(function(x) {
            return x.html.id === id_1;
          });
        }
        return selection;
      };
      SelectionBox2.prototype.move = function(event2, isNext) {
        var selection = this.findSelection(event2);
        if (selection.focused) {
          selection.focused.unfocus();
        }
        var index = this.selections.indexOf(selection);
        var next = isNext(index);
        this.selections[next].focus();
      };
      SelectionBox2.prototype.order = function() {
        this.selections.sort(SelectionBox2.orderMethod.get(this.style));
      };
      SelectionBox2.prototype.toJson = function() {
        return {
          type: ""
        };
      };
      SelectionBox2.chunkSize = 4;
      SelectionBox2.orderMethod = /* @__PURE__ */ new Map([
        ["alphabetical", function(x, y) {
          return x.items[0].content.localeCompare(y.items[0].content);
        }],
        ["none", function(_x, _y) {
          return 1;
        }],
        ["decreasing", function(x, y) {
          var xl = x.items.length;
          var yl = y.items.length;
          return xl < yl ? 1 : yl < xl ? -1 : 0;
        }],
        ["increasing", function(x, y) {
          var xl = x.items.length;
          var yl = y.items.length;
          return xl < yl ? -1 : yl < xl ? 1 : 0;
        }]
      ]);
      return SelectionBox2;
    }(info_js_1.Info);
    exports2.SelectionBox = SelectionBox;
  }
});

// node_modules/mj-context-menu/js/parser_factory.js
var require_parser_factory = __commonJS({
  "node_modules/mj-context-menu/js/parser_factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ParserFactory = void 0;
    var ParserFactory = function() {
      function ParserFactory2(init) {
        this._parser = new Map(init);
      }
      ParserFactory2.prototype.get = function(name) {
        return this._parser.get(name);
      };
      ParserFactory2.prototype.add = function(name, method) {
        this._parser.set(name, method);
      };
      return ParserFactory2;
    }();
    exports2.ParserFactory = ParserFactory;
  }
});

// node_modules/mj-context-menu/js/parse.js
var require_parse = __commonJS({
  "node_modules/mj-context-menu/js/parse.js"(exports2) {
    "use strict";
    var __rest = exports2 && exports2.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __spread = exports2 && exports2.__spread || function() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Parser = void 0;
    var item_command_js_1 = require_item_command();
    var context_menu_js_1 = require_context_menu();
    var variable_js_1 = require_variable();
    var item_checkbox_js_1 = require_item_checkbox();
    var item_combo_js_1 = require_item_combo();
    var item_label_js_1 = require_item_label();
    var item_radio_js_1 = require_item_radio();
    var item_submenu_js_1 = require_item_submenu();
    var item_rule_js_1 = require_item_rule();
    var item_slider_js_1 = require_item_slider();
    var sub_menu_js_1 = require_sub_menu();
    var selection_box_js_1 = require_selection_box();
    var parser_factory_js_1 = require_parser_factory();
    var Parser = function() {
      function Parser2(init) {
        var _this = this;
        if (init === void 0) {
          init = [];
        }
        this._initList = [
          ["command", item_command_js_1.Command.fromJson.bind(item_command_js_1.Command)],
          ["checkbox", item_checkbox_js_1.Checkbox.fromJson.bind(item_checkbox_js_1.Checkbox)],
          ["combo", item_combo_js_1.Combo.fromJson.bind(item_combo_js_1.Combo)],
          ["slider", item_slider_js_1.Slider.fromJson.bind(item_slider_js_1.Slider)],
          ["label", item_label_js_1.Label.fromJson.bind(item_label_js_1.Label)],
          ["radio", item_radio_js_1.Radio.fromJson.bind(item_radio_js_1.Radio)],
          ["rule", item_rule_js_1.Rule.fromJson.bind(item_rule_js_1.Rule)],
          ["submenu", item_submenu_js_1.Submenu.fromJson.bind(item_submenu_js_1.Submenu)],
          ["contextMenu", context_menu_js_1.ContextMenu.fromJson.bind(context_menu_js_1.ContextMenu)],
          ["subMenu", sub_menu_js_1.SubMenu.fromJson.bind(sub_menu_js_1.SubMenu)],
          ["variable", variable_js_1.Variable.fromJson.bind(variable_js_1.Variable)],
          ["items", this.items.bind(this)],
          ["selectionMenu", selection_box_js_1.SelectionMenu.fromJson.bind(selection_box_js_1.SelectionMenu)],
          ["selectionBox", selection_box_js_1.SelectionBox.fromJson.bind(selection_box_js_1.SelectionBox)]
        ];
        this._factory = new parser_factory_js_1.ParserFactory(this._initList);
        init.forEach(function(_a) {
          var _b = __read(_a, 2), x = _b[0], y = _b[1];
          return _this.factory.add(x, y);
        });
      }
      Object.defineProperty(Parser2.prototype, "factory", {
        get: function() {
          return this._factory;
        },
        enumerable: false,
        configurable: true
      });
      Parser2.prototype.items = function(_factory, its, ctxt) {
        var e_1, _a;
        var hidden = [];
        try {
          for (var its_1 = __values(its), its_1_1 = its_1.next(); !its_1_1.done; its_1_1 = its_1.next()) {
            var item = its_1_1.value;
            var entry = this.parse(item, ctxt);
            if (!entry) {
              continue;
            }
            ctxt.items.push(entry);
            if (item.disabled) {
              entry.disable();
            }
            if (item.hidden) {
              hidden.push(entry);
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (its_1_1 && !its_1_1.done && (_a = its_1.return)) _a.call(its_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        hidden.forEach(function(x) {
          return x.hide();
        });
        return ctxt.items;
      };
      Parser2.prototype.parse = function(_a) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          rest[_i - 1] = arguments[_i];
        }
        var kind = _a.type, json = __rest(_a, ["type"]);
        var func = this.factory.get(kind);
        return func ? func.apply(void 0, __spread([this.factory, json], rest)) : null;
      };
      return Parser2;
    }();
    exports2.Parser = Parser;
  }
});

// node_modules/mj-context-menu/js/css_util.js
var require_css_util = __commonJS({
  "node_modules/mj-context-menu/js/css_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CssStyles = void 0;
    var html_classes_js_1 = require_html_classes();
    var CssStyles;
    (function(CssStyles2) {
      function makeClass_(name) {
        return "." + (html_classes_js_1.HtmlClasses[name] || name);
      }
      var INFO_STYLES = {};
      INFO_STYLES[makeClass_("INFOCLOSE")] = "{  top:.2em; right:.2em;}", INFO_STYLES[makeClass_("INFOCONTENT")] = "{  overflow:auto; text-align:left; font-size:80%;  padding:.4em .6em; border:1px inset; margin:1em 0px;  max-height:20em; max-width:30em; background-color:#EEEEEE;  white-space:normal;}", INFO_STYLES[makeClass_("INFO") + makeClass_("MOUSEPOST")] = "{outline:none;}", INFO_STYLES[makeClass_("INFO")] = '{  position:fixed; left:50%; width:auto; text-align:center;  border:3px outset; padding:1em 2em; background-color:#DDDDDD;  color:black;  cursor:default; font-family:message-box; font-size:120%;  font-style:normal; text-indent:0; text-transform:none;  line-height:normal; letter-spacing:normal; word-spacing:normal;  word-wrap:normal; white-space:nowrap; float:none; z-index:201;  border-radius: 15px;                     /* Opera 10.5 and IE9 */  -webkit-border-radius:15px;               /* Safari and Chrome */  -moz-border-radius:15px;                  /* Firefox */  -khtml-border-radius:15px;                /* Konqueror */  box-shadow:0px 10px 20px #808080;         /* Opera 10.5 and IE9 */  -webkit-box-shadow:0px 10px 20px #808080; /* Safari 3 & Chrome */  -moz-box-shadow:0px 10px 20px #808080;    /* Forefox 3.5 */  -khtml-box-shadow:0px 10px 20px #808080;  /* Konqueror */  filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color="gray", Positive="true"); /* IE */}';
      var MENU_STYLES = {};
      MENU_STYLES[makeClass_("MENU")] = "{  position:absolute;  background-color:white;  color:black;  width:auto; padding:5px 0px;  border:1px solid #CCCCCC; margin:0; cursor:default;  font: menu; text-align:left; text-indent:0; text-transform:none;  line-height:normal; letter-spacing:normal; word-spacing:normal;  word-wrap:normal; white-space:nowrap; float:none; z-index:201;  border-radius: 5px;                     /* Opera 10.5 and IE9 */  -webkit-border-radius: 5px;             /* Safari and Chrome */  -moz-border-radius: 5px;                /* Firefox */  -khtml-border-radius: 5px;              /* Konqueror */  box-shadow:0px 10px 20px #808080;         /* Opera 10.5 and IE9 */  -webkit-box-shadow:0px 10px 20px #808080; /* Safari 3 & Chrome */  -moz-box-shadow:0px 10px 20px #808080;    /* Forefox 3.5 */  -khtml-box-shadow:0px 10px 20px #808080;  /* Konqueror */}", MENU_STYLES[makeClass_("MENUITEM")] = "{  padding: 1px 2em;  background:transparent;}", MENU_STYLES[makeClass_("MENUARROW")] = "{  position:absolute; right:.5em; padding-top:.25em; color:#666666;  font-family: null; font-size: .75em}", MENU_STYLES[makeClass_("MENUACTIVE") + " " + makeClass_("MENUARROW")] = "{color:white}", MENU_STYLES[makeClass_("MENUARROW") + makeClass_("RTL")] = "{left:.5em; right:auto}", MENU_STYLES[makeClass_("MENUCHECK")] = "{  position:absolute; left:.7em;  font-family: null}", MENU_STYLES[makeClass_("MENUCHECK") + makeClass_("RTL")] = "{ right:.7em; left:auto }", MENU_STYLES[makeClass_("MENURADIOCHECK")] = "{  position:absolute; left: .7em;}", MENU_STYLES[makeClass_("MENURADIOCHECK") + makeClass_("RTL")] = "{  right: .7em; left:auto}", MENU_STYLES[makeClass_("MENUINPUTBOX")] = "{  padding-left: 1em; right:.5em; color:#666666;  font-family: null;}", MENU_STYLES[makeClass_("MENUINPUTBOX") + makeClass_("RTL")] = "{  left: .1em;}", MENU_STYLES[makeClass_("MENUCOMBOBOX")] = "{  left:.1em; padding-bottom:.5em;}", MENU_STYLES[makeClass_("MENUSLIDER")] = "{  left: .1em;}", MENU_STYLES[makeClass_("SLIDERVALUE")] = "{  position:absolute; right:.1em; padding-top:.25em; color:#333333;  font-size: .75em}", MENU_STYLES[makeClass_("SLIDERBAR")] = "{  outline: none; background: #d3d3d3}", MENU_STYLES[makeClass_("MENULABEL")] = "{  padding: 1px 2em 3px 1.33em;  font-style:italic}", MENU_STYLES[makeClass_("MENURULE")] = "{  border-top: 1px solid #DDDDDD;  margin: 4px 3px;}", MENU_STYLES[makeClass_("MENUDISABLED")] = "{  color:GrayText}", MENU_STYLES[makeClass_("MENUACTIVE")] = "{  background-color: #606872;  color: white;}", MENU_STYLES[makeClass_("MENUDISABLED") + ":focus"] = "{  background-color: #E8E8E8}", MENU_STYLES[makeClass_("MENULABEL") + ":focus"] = "{  background-color: #E8E8E8}", MENU_STYLES[makeClass_("CONTEXTMENU") + ":focus"] = "{  outline:none}", MENU_STYLES[makeClass_("CONTEXTMENU") + " " + makeClass_("MENUITEM") + ":focus"] = "{  outline:none}", MENU_STYLES[makeClass_("SELECTIONMENU")] = "{  position:relative; float:left;  border-bottom: none; -webkit-box-shadow:none; -webkit-border-radius:0px; }", MENU_STYLES[makeClass_("SELECTIONITEM")] = "{  padding-right: 1em;}", MENU_STYLES[makeClass_("SELECTION")] = "{  right: 40%; width:50%; }", MENU_STYLES[makeClass_("SELECTIONBOX")] = "{  padding: 0em; max-height:20em; max-width: none;  background-color:#FFFFFF;}", MENU_STYLES[makeClass_("SELECTIONDIVIDER")] = "{  clear: both; border-top: 2px solid #000000;}", MENU_STYLES[makeClass_("MENU") + " " + makeClass_("MENUCLOSE")] = "{  top:-10px; left:-10px}";
      var CLOSE_ICON_STYLES = {};
      CLOSE_ICON_STYLES[makeClass_("MENUCLOSE")] = '{  position:absolute;  cursor:pointer;  display:inline-block;  border:2px solid #AAA;  border-radius:18px;  -webkit-border-radius: 18px;             /* Safari and Chrome */  -moz-border-radius: 18px;                /* Firefox */  -khtml-border-radius: 18px;              /* Konqueror */  font-family: "Courier New", Courier;  font-size:24px;  color:#F0F0F0}', CLOSE_ICON_STYLES[makeClass_("MENUCLOSE") + " span"] = "{  display:block; background-color:#AAA; border:1.5px solid;  border-radius:18px;  -webkit-border-radius: 18px;             /* Safari and Chrome */  -moz-border-radius: 18px;                /* Firefox */  -khtml-border-radius: 18px;              /* Konqueror */  line-height:0;  padding:8px 0 6px     /* may need to be browser-specific */}", CLOSE_ICON_STYLES[makeClass_("MENUCLOSE") + ":hover"] = "{  color:white!important;  border:2px solid #CCC!important}", CLOSE_ICON_STYLES[makeClass_("MENUCLOSE") + ":hover span"] = "{  background-color:#CCC!important}", CLOSE_ICON_STYLES[makeClass_("MENUCLOSE") + ":hover:focus"] = "{  outline:none}";
      var INFO_ADDED = false;
      var MENU_ADDED = false;
      var CLOSE_ICON_ADDED = false;
      function addMenuStyles(opt_document) {
        if (MENU_ADDED) {
          return;
        }
        addStyles_(MENU_STYLES, opt_document);
        MENU_ADDED = true;
        addCloseIconStyles_(opt_document);
      }
      CssStyles2.addMenuStyles = addMenuStyles;
      function addInfoStyles(opt_document) {
        if (INFO_ADDED) {
          return;
        }
        addStyles_(INFO_STYLES, opt_document);
        INFO_ADDED = true;
        addCloseIconStyles_(opt_document);
      }
      CssStyles2.addInfoStyles = addInfoStyles;
      function addCloseIconStyles_(opt_document) {
        if (CLOSE_ICON_ADDED) {
          return;
        }
        addStyles_(CLOSE_ICON_STYLES, opt_document);
        CLOSE_ICON_ADDED = true;
      }
      function addStyles_(styles, opt_document) {
        var doc = opt_document || document;
        var element = doc.createElement("style");
        element.type = "text/css";
        var inner = "";
        for (var style in styles) {
          inner += style;
          inner += " ";
          inner += styles[style];
          inner += "\n";
        }
        element.innerHTML = inner;
        doc.head.appendChild(element);
      }
    })(CssStyles = exports2.CssStyles || (exports2.CssStyles = {}));
  }
});

// node_modules/speech-rule-engine/js/rule_engine/dynamic_cstr.js
var require_dynamic_cstr = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/dynamic_cstr.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DefaultComparator = exports2.DynamicCstrParser = exports2.DynamicCstr = exports2.DynamicProperties = exports2.Axis = void 0;
    var Axis;
    (function(Axis2) {
      Axis2["DOMAIN"] = "domain";
      Axis2["STYLE"] = "style";
      Axis2["LOCALE"] = "locale";
      Axis2["TOPIC"] = "topic";
      Axis2["MODALITY"] = "modality";
    })(Axis || (exports2.Axis = Axis = {}));
    var DynamicProperties = class _DynamicProperties {
      static createProp(...cstrList) {
        const axes = DynamicCstr.DEFAULT_ORDER;
        const dynamicCstr = {};
        for (let i = 0, l = cstrList.length, k = axes.length; i < l && i < k; i++) {
          dynamicCstr[axes[i]] = cstrList[i];
        }
        return new _DynamicProperties(dynamicCstr);
      }
      constructor(properties, order = Object.keys(properties)) {
        this.properties = properties;
        this.order = order;
      }
      getProperties() {
        return this.properties;
      }
      getOrder() {
        return this.order;
      }
      getAxes() {
        return this.order;
      }
      getProperty(key) {
        return this.properties[key];
      }
      updateProperties(props) {
        this.properties = props;
      }
      allProperties() {
        const propLists = [];
        this.order.forEach((key) => propLists.push(this.getProperty(key).slice()));
        return propLists;
      }
      toString() {
        const cstrStrings = [];
        this.order.forEach((key) => cstrStrings.push(key + ": " + this.getProperty(key).toString()));
        return cstrStrings.join("\n");
      }
    };
    exports2.DynamicProperties = DynamicProperties;
    var DynamicCstr = class _DynamicCstr extends DynamicProperties {
      static createCstr(...cstrList) {
        const axes = _DynamicCstr.DEFAULT_ORDER;
        const dynamicCstr = {};
        for (let i = 0, l = cstrList.length, k = axes.length; i < l && i < k; i++) {
          dynamicCstr[axes[i]] = cstrList[i];
        }
        return new _DynamicCstr(dynamicCstr);
      }
      static defaultCstr() {
        return _DynamicCstr.createCstr.apply(null, _DynamicCstr.DEFAULT_ORDER.map(function(x) {
          return _DynamicCstr.DEFAULT_VALUES[x];
        }));
      }
      static validOrder(order) {
        const axes = _DynamicCstr.DEFAULT_ORDER.slice();
        return order.every((x) => {
          const index = axes.indexOf(x);
          return index !== -1 && axes.splice(index, 1);
        });
      }
      constructor(components_, order) {
        const properties = {};
        for (const [key, value] of Object.entries(components_)) {
          properties[key] = [value];
        }
        super(properties, order);
        this.components = components_;
      }
      getComponents() {
        return this.components;
      }
      getValue(key) {
        return this.components[key];
      }
      getValues() {
        return this.order.map((key) => this.getValue(key));
      }
      allProperties() {
        const propLists = super.allProperties();
        for (let i = 0, props, key; props = propLists[i], key = this.order[i]; i++) {
          const value = this.getValue(key);
          if (props.indexOf(value) === -1) {
            props.unshift(value);
          }
        }
        return propLists;
      }
      toString() {
        return this.getValues().join(".");
      }
      equal(cstr) {
        const keys1 = cstr.getAxes();
        if (this.order.length !== keys1.length) {
          return false;
        }
        for (let j = 0, key; key = keys1[j]; j++) {
          const comp2 = this.getValue(key);
          if (!comp2 || cstr.getValue(key) !== comp2) {
            return false;
          }
        }
        return true;
      }
    };
    exports2.DynamicCstr = DynamicCstr;
    DynamicCstr.DEFAULT_ORDER = [
      Axis.LOCALE,
      Axis.MODALITY,
      Axis.DOMAIN,
      Axis.STYLE,
      Axis.TOPIC
    ];
    DynamicCstr.BASE_LOCALE = "base";
    DynamicCstr.DEFAULT_VALUE = "default";
    DynamicCstr.DEFAULT_VALUES = {
      [Axis.LOCALE]: "en",
      [Axis.DOMAIN]: DynamicCstr.DEFAULT_VALUE,
      [Axis.STYLE]: DynamicCstr.DEFAULT_VALUE,
      [Axis.TOPIC]: DynamicCstr.DEFAULT_VALUE,
      [Axis.MODALITY]: "speech"
    };
    var DynamicCstrParser = class {
      constructor(order) {
        this.order = order;
      }
      parse(str) {
        const order = str.split(".");
        const cstr = {};
        if (order.length > this.order.length) {
          throw new Error("Invalid dynamic constraint: " + cstr);
        }
        let j = 0;
        for (let i = 0, key; key = this.order[i], order.length; i++, j++) {
          const value = order.shift();
          cstr[key] = value;
        }
        return new DynamicCstr(cstr, this.order.slice(0, j));
      }
    };
    exports2.DynamicCstrParser = DynamicCstrParser;
    var DefaultComparator = class {
      constructor(reference, fallback = new DynamicProperties(reference.getProperties(), reference.getOrder())) {
        this.reference = reference;
        this.fallback = fallback;
        this.order = this.reference.getOrder();
      }
      getReference() {
        return this.reference;
      }
      setReference(cstr, props) {
        this.reference = cstr;
        this.fallback = props || new DynamicProperties(cstr.getProperties(), cstr.getOrder());
        this.order = this.reference.getOrder();
      }
      match(cstr) {
        const keys1 = cstr.getAxes();
        return keys1.length === this.reference.getAxes().length && keys1.every((key) => {
          const value = cstr.getValue(key);
          return value === this.reference.getValue(key) || this.fallback.getProperty(key).indexOf(value) !== -1;
        });
      }
      compare(cstr1, cstr2) {
        let ignore = false;
        for (let i = 0, key; key = this.order[i]; i++) {
          const value1 = cstr1.getValue(key);
          const value2 = cstr2.getValue(key);
          if (!ignore) {
            const ref = this.reference.getValue(key);
            if (ref === value1 && ref !== value2) {
              return -1;
            }
            if (ref === value2 && ref !== value1) {
              return 1;
            }
            if (ref === value1 && ref === value2) {
              continue;
            }
            if (ref !== value1 && ref !== value2) {
              ignore = true;
            }
          }
          const prop = this.fallback.getProperty(key);
          const index1 = prop.indexOf(value1);
          const index2 = prop.indexOf(value2);
          if (index1 < index2) {
            return -1;
          }
          if (index2 < index1) {
            return 1;
          }
        }
        return 0;
      }
      toString() {
        return this.reference.toString() + "\n" + this.fallback.toString();
      }
    };
    exports2.DefaultComparator = DefaultComparator;
  }
});

// node_modules/speech-rule-engine/js/common/engine_const.js
var require_engine_const = __commonJS({
  "node_modules/speech-rule-engine/js/common/engine_const.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DOMAIN_TO_STYLES = exports2.Markup = exports2.Speech = exports2.personalityPropList = exports2.personalityProps = exports2.Mode = void 0;
    var Mode;
    (function(Mode2) {
      Mode2["SYNC"] = "sync";
      Mode2["ASYNC"] = "async";
      Mode2["HTTP"] = "http";
    })(Mode || (exports2.Mode = Mode = {}));
    var personalityProps;
    (function(personalityProps2) {
      personalityProps2["PITCH"] = "pitch";
      personalityProps2["RATE"] = "rate";
      personalityProps2["VOLUME"] = "volume";
      personalityProps2["PAUSE"] = "pause";
      personalityProps2["JOIN"] = "join";
      personalityProps2["LAYOUT"] = "layout";
    })(personalityProps || (exports2.personalityProps = personalityProps = {}));
    exports2.personalityPropList = [
      personalityProps.PITCH,
      personalityProps.RATE,
      personalityProps.VOLUME,
      personalityProps.PAUSE,
      personalityProps.JOIN
    ];
    var Speech;
    (function(Speech2) {
      Speech2["NONE"] = "none";
      Speech2["SHALLOW"] = "shallow";
      Speech2["DEEP"] = "deep";
    })(Speech || (exports2.Speech = Speech = {}));
    var Markup;
    (function(Markup2) {
      Markup2["NONE"] = "none";
      Markup2["LAYOUT"] = "layout";
      Markup2["COUNTING"] = "counting";
      Markup2["PUNCTUATION"] = "punctuation";
      Markup2["SSML"] = "ssml";
      Markup2["ACSS"] = "acss";
      Markup2["SABLE"] = "sable";
      Markup2["VOICEXML"] = "voicexml";
    })(Markup || (exports2.Markup = Markup = {}));
    exports2.DOMAIN_TO_STYLES = {
      mathspeak: "default",
      clearspeak: "default"
    };
  }
});

// node_modules/speech-rule-engine/js/common/variables.js
var require_variables = __commonJS({
  "node_modules/speech-rule-engine/js/common/variables.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Variables = void 0;
    var Variables = class _Variables {
      static ensureLocale(loc, def) {
        if (!_Variables.LOCALES.get(loc)) {
          console.error(`Locale ${loc} does not exist! Using ${_Variables.LOCALES.get(def)} instead.`);
          return def;
        }
        return loc;
      }
    };
    exports2.Variables = Variables;
    Variables.VERSION = "4.1.2";
    Variables.LOCALES = /* @__PURE__ */ new Map([
      ["af", "Africaans"],
      ["ca", "Catalan"],
      ["da", "Danish"],
      ["de", "German"],
      ["en", "English"],
      ["es", "Spanish"],
      ["euro", "Euro"],
      ["fr", "French"],
      ["hi", "Hindi"],
      ["it", "Italian"],
      ["ko", "Korean"],
      ["nb", "Bokmål"],
      ["nn", "Nynorsk"],
      ["sv", "Swedish"],
      ["nemeth", "Nemeth"]
    ]);
    Variables.mathjaxVersion = "4.0.0-beta.5";
    Variables.url = "https://cdn.jsdelivr.net/npm/speech-rule-engine@" + Variables.VERSION + "/lib/mathmaps";
    Variables.WGXpath = "https://cdn.jsdelivr.net/npm/wicked-good-xpath@1.3.0/dist/wgxpath.install.js";
  }
});

// node_modules/speech-rule-engine/js/common/system_external.js
var require_system_external = __commonJS({
  "node_modules/speech-rule-engine/js/common/system_external.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SystemExternal = void 0;
    var variables_js_1 = require_variables();
    var SystemExternal = class _SystemExternal {
      static nodeRequire() {
        return eval("require");
      }
      static extRequire(library) {
        if (typeof process !== "undefined" && typeof __require !== "undefined") {
          return _SystemExternal.nodeRequire()(library);
        }
        return null;
      }
    };
    exports.SystemExternal = SystemExternal;
    SystemExternal.windowSupported = /* @__PURE__ */ (() => !(typeof window === "undefined"))();
    SystemExternal.documentSupported = (() => SystemExternal.windowSupported && !(typeof window.document === "undefined"))();
    SystemExternal.xmldom = SystemExternal.documentSupported ? window : SystemExternal.extRequire("@xmldom/xmldom");
    SystemExternal.document = SystemExternal.documentSupported ? window.document : new SystemExternal.xmldom.DOMImplementation().createDocument("", "", 0);
    SystemExternal.xpath = SystemExternal.documentSupported ? document : function() {
      const window2 = { document: {}, XPathResult: {} };
      const wgx = SystemExternal.extRequire("wicked-good-xpath");
      wgx.install(window2);
      window2.document.XPathResult = window2.XPathResult;
      return window2.document;
    }();
    SystemExternal.mathmapsIePath = "https://cdn.jsdelivr.net/npm/sre-mathmaps-ie@" + variables_js_1.Variables.VERSION + "mathmaps_ie.js";
    SystemExternal.fs = SystemExternal.documentSupported ? null : SystemExternal.extRequire("fs");
    SystemExternal.url = variables_js_1.Variables.url;
    SystemExternal.jsonPath = function() {
      if (SystemExternal.documentSupported) {
        return SystemExternal.url;
      }
      if (process.env.SRE_JSON_PATH || global.SRE_JSON_PATH) {
        return process.env.SRE_JSON_PATH || global.SRE_JSON_PATH;
      }
      try {
        const path = SystemExternal.nodeRequire().resolve("speech-rule-engine");
        return path.replace(/sre\.js$/, "") + "mathmaps";
      } catch (_err) {
      }
      try {
        const path = SystemExternal.nodeRequire().resolve(".");
        return path.replace(/sre\.js$/, "") + "mathmaps";
      } catch (_err) {
      }
      return typeof __dirname !== "undefined" ? __dirname + (__dirname.match(/lib?$/) ? "/mathmaps" : "/lib/mathmaps") : process.cwd() + "/lib/mathmaps";
    }();
    SystemExternal.WGXpath = variables_js_1.Variables.WGXpath;
    SystemExternal.wgxpath = null;
    exports.default = SystemExternal;
  }
});

// node_modules/speech-rule-engine/js/common/debugger.js
var require_debugger = __commonJS({
  "node_modules/speech-rule-engine/js/common/debugger.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Debugger = void 0;
    var system_external_js_1 = require_system_external();
    var Debugger = class _Debugger {
      static getInstance() {
        _Debugger.instance = _Debugger.instance || new _Debugger();
        return _Debugger.instance;
      }
      init(opt_file) {
        if (opt_file) {
          this.startDebugFile_(opt_file);
        }
        this.isActive_ = true;
        return this.fileHandle;
      }
      output(...args) {
        if (this.isActive_) {
          this.output_(args);
        }
      }
      generateOutput(func) {
        if (this.isActive_) {
          this.output_(func.apply(func, []));
        }
      }
      exit(callback = () => {
      }) {
        this.fileHandle.then(() => {
          if (this.isActive_ && this.stream_) {
            this.stream_.end("", "", callback);
          }
        });
      }
      constructor() {
        this.isActive_ = false;
        this.outputFunction_ = console.info;
        this.fileHandle = Promise.resolve();
        this.stream_ = null;
      }
      startDebugFile_(filename) {
        this.fileHandle = system_external_js_1.SystemExternal.fs.promises.open(filename, "w");
        this.fileHandle = this.fileHandle.then((handle) => {
          this.stream_ = handle.createWriteStream(filename);
          this.outputFunction_ = (function(...args) {
            this.stream_.write(args.join(" "));
            this.stream_.write("\n");
          }).bind(this);
          this.stream_.on("error", (function(_error) {
            console.info("Invalid log file. Debug information sent to console.");
            this.outputFunction_ = console.info;
          }).bind(this));
          this.stream_.on("finish", function() {
            console.info("Finalizing debug file.");
          });
        });
      }
      output_(outputList) {
        if (console.info === this.outputFunction_) {
          this.outputFunction_.apply(console, ["Speech Rule Engine Debugger:"].concat(outputList));
          return;
        }
        this.fileHandle.then(() => this.outputFunction_.apply(this.outputFunction_, ["Speech Rule Engine Debugger:"].concat(outputList)));
      }
    };
    exports2.Debugger = Debugger;
  }
});

// node_modules/speech-rule-engine/js/common/engine.js
var require_engine = __commonJS({
  "node_modules/speech-rule-engine/js/common/engine.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EnginePromise = exports2.Engine = exports2.SREError = void 0;
    var Dcstr = require_dynamic_cstr();
    var EngineConst = require_engine_const();
    var debugger_js_1 = require_debugger();
    var variables_js_12 = require_variables();
    var SREError = class extends Error {
      constructor(message = "") {
        super();
        this.message = message;
        this.name = "SRE Error";
      }
    };
    exports2.SREError = SREError;
    var Engine = class _Engine {
      set defaultLocale(loc) {
        this._defaultLocale = variables_js_12.Variables.ensureLocale(loc, this._defaultLocale);
      }
      get defaultLocale() {
        return this._defaultLocale;
      }
      static getInstance() {
        _Engine.instance = _Engine.instance || new _Engine();
        return _Engine.instance;
      }
      static defaultEvaluator(str, _cstr) {
        return str;
      }
      static evaluateNode(node) {
        return _Engine.nodeEvaluator(node);
      }
      getRate() {
        const numeric = parseInt(this.rate, 10);
        return isNaN(numeric) ? 100 : numeric;
      }
      setDynamicCstr(opt_dynamic) {
        if (this.defaultLocale) {
          Dcstr.DynamicCstr.DEFAULT_VALUES[Dcstr.Axis.LOCALE] = this.defaultLocale;
        }
        if (opt_dynamic) {
          const keys = Object.keys(opt_dynamic);
          for (let i = 0; i < keys.length; i++) {
            const feature = keys[i];
            if (Dcstr.DynamicCstr.DEFAULT_ORDER.indexOf(feature) !== -1) {
              const value = opt_dynamic[feature];
              this[feature] = value;
            }
          }
        }
        EngineConst.DOMAIN_TO_STYLES[this.domain] = this.style;
        const dynamic = [this.locale, this.modality, this.domain, this.style].join(".");
        const fallback = Dcstr.DynamicProperties.createProp([Dcstr.DynamicCstr.DEFAULT_VALUES[Dcstr.Axis.LOCALE]], [Dcstr.DynamicCstr.DEFAULT_VALUES[Dcstr.Axis.MODALITY]], [Dcstr.DynamicCstr.DEFAULT_VALUES[Dcstr.Axis.DOMAIN]], [Dcstr.DynamicCstr.DEFAULT_VALUES[Dcstr.Axis.STYLE]]);
        const comparator = this.comparators[this.domain];
        const parser = this.parsers[this.domain];
        this.parser = parser ? parser : this.defaultParser;
        this.dynamicCstr = this.parser.parse(dynamic);
        this.dynamicCstr.updateProperties(fallback.getProperties());
        this.comparator = comparator ? comparator() : new Dcstr.DefaultComparator(this.dynamicCstr);
      }
      constructor() {
        this.customLoader = null;
        this.parsers = {};
        this.comparator = null;
        this.mode = EngineConst.Mode.SYNC;
        this.init = true;
        this.delay = false;
        this.comparators = {};
        this.domain = "mathspeak";
        this.style = Dcstr.DynamicCstr.DEFAULT_VALUES[Dcstr.Axis.STYLE];
        this._defaultLocale = Dcstr.DynamicCstr.DEFAULT_VALUES[Dcstr.Axis.LOCALE];
        this.locale = Dcstr.DynamicCstr.DEFAULT_VALUES[Dcstr.Axis.LOCALE];
        this.subiso = "";
        this.modality = Dcstr.DynamicCstr.DEFAULT_VALUES[Dcstr.Axis.MODALITY];
        this.speech = EngineConst.Speech.NONE;
        this.markup = EngineConst.Markup.NONE;
        this.mark = true;
        this.automark = false;
        this.character = true;
        this.cleanpause = true;
        this.cayleyshort = true;
        this.linebreaks = false;
        this.rate = "100";
        this.walker = "Table";
        this.structure = false;
        this.aria = false;
        this.ruleSets = [];
        this.strict = false;
        this.isIE = false;
        this.isEdge = false;
        this.pprint = false;
        this.config = false;
        this.rules = "";
        this.prune = "";
        this.locale = this.defaultLocale;
        this.evaluator = _Engine.defaultEvaluator;
        this.defaultParser = new Dcstr.DynamicCstrParser(Dcstr.DynamicCstr.DEFAULT_ORDER);
        this.parser = this.defaultParser;
        this.dynamicCstr = Dcstr.DynamicCstr.defaultCstr();
      }
      configurate(feature) {
        if (this.mode === EngineConst.Mode.HTTP && !this.config) {
          configBlocks(feature);
          this.config = true;
        }
        configFeature(feature);
      }
      setCustomLoader(fn) {
        if (fn) {
          this.customLoader = fn;
        }
      }
    };
    exports2.Engine = Engine;
    Engine.BINARY_FEATURES = [
      "automark",
      "mark",
      "character",
      "cleanpause",
      "strict",
      "structure",
      "aria",
      "pprint",
      "cayleyshort",
      "linebreaks"
    ];
    Engine.STRING_FEATURES = [
      "markup",
      "style",
      "domain",
      "speech",
      "walker",
      "defaultLocale",
      "locale",
      "delay",
      "modality",
      "rate",
      "rules",
      "subiso",
      "prune"
    ];
    Engine.nodeEvaluator = function(_node) {
      return [];
    };
    exports2.default = Engine;
    function configFeature(feature) {
      if (typeof SREfeature !== "undefined") {
        for (const [name, feat] of Object.entries(SREfeature)) {
          feature[name] = feat;
        }
      }
    }
    function configBlocks(feature) {
      const scripts = document.documentElement.querySelectorAll('script[type="text/x-sre-config"]');
      for (let i = 0, m = scripts.length; i < m; i++) {
        let inner;
        try {
          inner = scripts[i].innerHTML;
          const config = JSON.parse(inner);
          for (const [key, val] of Object.entries(config)) {
            feature[key] = val;
          }
        } catch (_err) {
          debugger_js_1.Debugger.getInstance().output("Illegal configuration ", inner);
        }
      }
    }
    var EnginePromise = class _EnginePromise {
      static get(locale = Engine.getInstance().locale) {
        return _EnginePromise.promises[locale] || Promise.resolve("");
      }
      static getall() {
        return Promise.all(Object.values(_EnginePromise.promises));
      }
    };
    exports2.EnginePromise = EnginePromise;
    EnginePromise.loaded = {};
    EnginePromise.promises = {};
  }
});

// node_modules/speech-rule-engine/js/common/xpath_util.js
var require_xpath_util = __commonJS({
  "node_modules/speech-rule-engine/js/common/xpath_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.xpath = void 0;
    exports2.resolveNameSpace = resolveNameSpace;
    exports2.evalXPath = evalXPath;
    exports2.evaluateBoolean = evaluateBoolean;
    exports2.evaluateString = evaluateString;
    exports2.updateEvaluator = updateEvaluator;
    var engine_js_1 = require_engine();
    var EngineConst = require_engine_const();
    var system_external_js_1 = require_system_external();
    function xpathSupported() {
      if (typeof XPathResult === "undefined") {
        return false;
      }
      return true;
    }
    exports2.xpath = {
      currentDocument: null,
      evaluate: xpathSupported() ? document.evaluate : system_external_js_1.SystemExternal.xpath.evaluate,
      result: xpathSupported() ? XPathResult : system_external_js_1.SystemExternal.xpath.XPathResult,
      createNSResolver: xpathSupported() ? document.createNSResolver : system_external_js_1.SystemExternal.xpath.createNSResolver
    };
    var nameSpaces = {
      xhtml: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      mml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg"
    };
    function resolveNameSpace(prefix) {
      return nameSpaces[prefix] || null;
    }
    var Resolver = class {
      constructor() {
        this.lookupNamespaceURI = resolveNameSpace;
      }
    };
    function evaluateXpath(expression, rootNode, type) {
      return engine_js_1.Engine.getInstance().mode === EngineConst.Mode.HTTP && !engine_js_1.Engine.getInstance().isIE && !engine_js_1.Engine.getInstance().isEdge ? exports2.xpath.currentDocument.evaluate(expression, rootNode, resolveNameSpace, type, null) : exports2.xpath.evaluate(expression, rootNode, new Resolver(), type, null);
    }
    function evalXPath(expression, rootNode) {
      let iterator;
      try {
        iterator = evaluateXpath(expression, rootNode, exports2.xpath.result.ORDERED_NODE_ITERATOR_TYPE);
      } catch (_err) {
        return [];
      }
      const results = [];
      for (let xpathNode = iterator.iterateNext(); xpathNode; xpathNode = iterator.iterateNext()) {
        results.push(xpathNode);
      }
      return results;
    }
    function evaluateBoolean(expression, rootNode) {
      let result;
      try {
        result = evaluateXpath(expression, rootNode, exports2.xpath.result.BOOLEAN_TYPE);
      } catch (_err) {
        return false;
      }
      return result.booleanValue;
    }
    function evaluateString(expression, rootNode) {
      let result;
      try {
        result = evaluateXpath(expression, rootNode, exports2.xpath.result.STRING_TYPE);
      } catch (_err) {
        return "";
      }
      return result.stringValue;
    }
    function updateEvaluator(node) {
      if (engine_js_1.Engine.getInstance().mode !== EngineConst.Mode.HTTP)
        return;
      let parent = node;
      while (parent && !parent.evaluate) {
        parent = parent.parentNode;
      }
      if (parent && parent.evaluate) {
        exports2.xpath.currentDocument = parent;
      } else if (node.ownerDocument) {
        exports2.xpath.currentDocument = node.ownerDocument;
      }
    }
  }
});

// node_modules/speech-rule-engine/js/common/dom_util.js
var require_dom_util = __commonJS({
  "node_modules/speech-rule-engine/js/common/dom_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NodeType = void 0;
    exports2.toArray = toArray;
    exports2.parseInput = parseInput;
    exports2.replaceNode = replaceNode;
    exports2.createElement = createElement;
    exports2.createElementNS = createElementNS;
    exports2.createTextNode = createTextNode;
    exports2.formatXml = formatXml;
    exports2.querySelectorAllByAttr = querySelectorAllByAttr;
    exports2.querySelectorAllByAttrValue = querySelectorAllByAttrValue;
    exports2.querySelectorAll = querySelectorAll;
    exports2.tagName = tagName;
    exports2.cloneNode = cloneNode;
    exports2.serializeXml = serializeXml;
    var engine_js_1 = require_engine();
    var EngineConst = require_engine_const();
    var system_external_js_1 = require_system_external();
    var XpathUtil = require_xpath_util();
    function toArray(nodeList) {
      const nodeArray = [];
      for (let i = 0, m = nodeList.length; i < m; i++) {
        nodeArray.push(nodeList[i]);
      }
      return nodeArray;
    }
    function trimInput(input) {
      input = input.replace(/&nbsp;/g, " ");
      return input.replace(/>[ \f\n\r\t\v\u200b]+</g, "><").trim();
    }
    function parseInput(input) {
      const dp = new system_external_js_1.SystemExternal.xmldom.DOMParser();
      const clean_input = trimInput(input);
      const allValues = clean_input.match(/&(?!lt|gt|amp|quot|apos)\w+;/g);
      const html = !!allValues;
      if (!clean_input) {
        throw new Error("Empty input!");
      }
      try {
        const doc = dp.parseFromString(clean_input, html ? "text/html" : "text/xml");
        if (engine_js_1.Engine.getInstance().mode === EngineConst.Mode.HTTP) {
          XpathUtil.xpath.currentDocument = doc;
          return html ? doc.body.childNodes[0] : doc.documentElement;
        }
        return doc.documentElement;
      } catch (err) {
        throw new engine_js_1.SREError("Illegal input: " + err.message);
      }
    }
    var NodeType;
    (function(NodeType2) {
      NodeType2[NodeType2["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
      NodeType2[NodeType2["ATTRIBUTE_NODE"] = 2] = "ATTRIBUTE_NODE";
      NodeType2[NodeType2["TEXT_NODE"] = 3] = "TEXT_NODE";
      NodeType2[NodeType2["CDATA_SECTION_NODE"] = 4] = "CDATA_SECTION_NODE";
      NodeType2[NodeType2["ENTITY_REFERENCE_NODE"] = 5] = "ENTITY_REFERENCE_NODE";
      NodeType2[NodeType2["ENTITY_NODE"] = 6] = "ENTITY_NODE";
      NodeType2[NodeType2["PROCESSING_INSTRUCTION_NODE"] = 7] = "PROCESSING_INSTRUCTION_NODE";
      NodeType2[NodeType2["COMMENT_NODE"] = 8] = "COMMENT_NODE";
      NodeType2[NodeType2["DOCUMENT_NODE"] = 9] = "DOCUMENT_NODE";
      NodeType2[NodeType2["DOCUMENT_TYPE_NODE"] = 10] = "DOCUMENT_TYPE_NODE";
      NodeType2[NodeType2["DOCUMENT_FRAGMENT_NODE"] = 11] = "DOCUMENT_FRAGMENT_NODE";
      NodeType2[NodeType2["NOTATION_NODE"] = 12] = "NOTATION_NODE";
    })(NodeType || (exports2.NodeType = NodeType = {}));
    function replaceNode(oldNode, newNode) {
      if (!oldNode.parentNode) {
        return;
      }
      oldNode.parentNode.insertBefore(newNode, oldNode);
      oldNode.parentNode.removeChild(oldNode);
    }
    function createElement(tag) {
      return system_external_js_1.SystemExternal.document.createElement(tag);
    }
    function createElementNS(url, tag) {
      return system_external_js_1.SystemExternal.document.createElementNS(url, tag);
    }
    function createTextNode(content) {
      return system_external_js_1.SystemExternal.document.createTextNode(content);
    }
    function formatXml(xml) {
      let formatted = "";
      let reg = /(>)(<)(\/*)/g;
      xml = xml.replace(reg, "$1\r\n$2$3");
      let pad = 0;
      let split = xml.split("\r\n");
      reg = /(\.)*(<)(\/*)/g;
      split = split.map((x) => x.replace(reg, "$1\r\n$2$3").split("\r\n")).reduce((x, y) => x.concat(y), []);
      while (split.length) {
        let node = split.shift();
        if (!node) {
          continue;
        }
        let indent = 0;
        if (node.match(/^<\w[^>/]*>[^>]+$/)) {
          const match = matchingStartEnd(node, split[0]);
          if (match[0]) {
            if (match[1]) {
              node = node + split.shift().slice(0, -match[1].length);
              if (match[1].trim()) {
                split.unshift(match[1]);
              }
            } else {
              node = node + split.shift();
            }
          } else {
            indent = 1;
          }
        } else if (node.match(/^<\/\w/)) {
          if (pad !== 0) {
            pad -= 1;
          }
        } else if (node.match(/^<\w[^>]*[^/]>.*$/)) {
          indent = 1;
        } else if (node.match(/^<\w[^>]*\/>.+$/)) {
          const position = node.indexOf(">") + 1;
          const rest = node.slice(position);
          if (rest.trim()) {
            split.unshift();
          }
          node = node.slice(0, position) + rest;
        } else {
          indent = 0;
        }
        formatted += new Array(pad + 1).join("  ") + node + "\r\n";
        pad += indent;
      }
      return formatted;
    }
    function matchingStartEnd(start, end) {
      if (!end) {
        return [false, ""];
      }
      const tag1 = start.match(/^<([^> ]+).*>/);
      const tag2 = end.match(/^<\/([^>]+)>(.*)/);
      return tag1 && tag2 && tag1[1] === tag2[1] ? [true, tag2[2]] : [false, ""];
    }
    function querySelectorAllByAttr(node, attr) {
      return node.querySelectorAll ? toArray(node.querySelectorAll(`[${attr}]`)) : XpathUtil.evalXPath(`.//*[@${attr}]`, node);
    }
    function querySelectorAllByAttrValue(node, attr, value) {
      return node.querySelectorAll ? toArray(node.querySelectorAll(`[${attr}="${value}"]`)) : XpathUtil.evalXPath(`.//*[@${attr}="${value}"]`, node);
    }
    function querySelectorAll(node, tag) {
      return node.querySelectorAll ? toArray(node.querySelectorAll(tag)) : XpathUtil.evalXPath(`.//${tag}`, node);
    }
    function tagName(node) {
      return node.tagName.toUpperCase();
    }
    function cloneNode(node) {
      return node.cloneNode(true);
    }
    function serializeXml(node) {
      const xmls = new system_external_js_1.SystemExternal.xmldom.XMLSerializer();
      return xmls.serializeToString(node);
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/alphabet.js
var require_alphabet = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/alphabet.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.INTERVALS = exports2.Base = exports2.Embellish = exports2.Font = void 0;
    exports2.makeInterval = makeInterval;
    exports2.makeMultiInterval = makeMultiInterval;
    exports2.makeCodeInterval = makeCodeInterval;
    exports2.alphabetName = alphabetName;
    var Font;
    (function(Font2) {
      Font2["BOLD"] = "bold";
      Font2["BOLDFRAKTUR"] = "bold-fraktur";
      Font2["BOLDITALIC"] = "bold-italic";
      Font2["BOLDSCRIPT"] = "bold-script";
      Font2["DOUBLESTRUCK"] = "double-struck";
      Font2["DOUBLESTRUCKITALIC"] = "double-struck-italic";
      Font2["FULLWIDTH"] = "fullwidth";
      Font2["FRAKTUR"] = "fraktur";
      Font2["ITALIC"] = "italic";
      Font2["MONOSPACE"] = "monospace";
      Font2["NORMAL"] = "normal";
      Font2["SCRIPT"] = "script";
      Font2["SANSSERIF"] = "sans-serif";
      Font2["SANSSERIFITALIC"] = "sans-serif-italic";
      Font2["SANSSERIFBOLD"] = "sans-serif-bold";
      Font2["SANSSERIFBOLDITALIC"] = "sans-serif-bold-italic";
    })(Font || (exports2.Font = Font = {}));
    var Embellish;
    (function(Embellish2) {
      Embellish2["SUPER"] = "super";
      Embellish2["SUB"] = "sub";
      Embellish2["CIRCLED"] = "circled";
      Embellish2["PARENTHESIZED"] = "parenthesized";
      Embellish2["PERIOD"] = "period";
      Embellish2["NEGATIVECIRCLED"] = "negative-circled";
      Embellish2["DOUBLECIRCLED"] = "double-circled";
      Embellish2["CIRCLEDSANSSERIF"] = "circled-sans-serif";
      Embellish2["NEGATIVECIRCLEDSANSSERIF"] = "negative-circled-sans-serif";
      Embellish2["COMMA"] = "comma";
      Embellish2["SQUARED"] = "squared";
      Embellish2["NEGATIVESQUARED"] = "negative-squared";
    })(Embellish || (exports2.Embellish = Embellish = {}));
    var Base;
    (function(Base2) {
      Base2["LATINCAP"] = "latinCap";
      Base2["LATINSMALL"] = "latinSmall";
      Base2["GREEKCAP"] = "greekCap";
      Base2["GREEKSMALL"] = "greekSmall";
      Base2["DIGIT"] = "digit";
    })(Base || (exports2.Base = Base = {}));
    function num2str(num) {
      const str = num.toString(16).toUpperCase();
      return str.length > 3 ? str : ("000" + str).slice(-4);
    }
    function makeInterval([a, b], subst) {
      const start = parseInt(a, 16);
      const end = parseInt(b, 16);
      const result = [];
      for (let i = start; i <= end; i++) {
        let key = num2str(i);
        const sub = subst[key];
        if (sub === false) {
          continue;
        }
        key = subst[key] || key;
        result.push(key);
      }
      return result;
    }
    function makeCharInterval(int, subst = {}) {
      return makeInterval(int, subst).map((x) => String.fromCodePoint(parseInt(x, 16)));
    }
    function makeMultiInterval(ints) {
      let result = [];
      for (const int of ints) {
        if (Array.isArray(int)) {
          result = result.concat(makeCharInterval(int));
          continue;
        }
        result.push(String.fromCodePoint(parseInt(int, 16)));
      }
      return result;
    }
    function makeCodeInterval(ints) {
      let result = [];
      for (const int of ints) {
        if (Array.isArray(int)) {
          result = result.concat(makeInterval(int, {}).map((x) => parseInt(x, 16)));
          continue;
        }
        result.push(parseInt(int, 16));
      }
      return result;
    }
    var PROTO_INTERVALS = [
      {
        interval: ["1D400", "1D419"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.BOLD
      },
      {
        interval: ["1D41A", "1D433"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.BOLD
      },
      {
        interval: ["1D56C", "1D585"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.BOLDFRAKTUR
      },
      {
        interval: ["1D586", "1D59F"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.BOLDFRAKTUR
      },
      {
        interval: ["1D468", "1D481"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.BOLDITALIC
      },
      {
        interval: ["1D482", "1D49B"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.BOLDITALIC
      },
      {
        interval: ["1D4D0", "1D4E9"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.BOLDSCRIPT
      },
      {
        interval: ["1D4EA", "1D503"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.BOLDSCRIPT
      },
      {
        interval: ["1D538", "1D551"],
        base: Base.LATINCAP,
        subst: {
          "1D53A": "2102",
          "1D53F": "210D",
          "1D545": "2115",
          "1D547": "2119",
          "1D548": "211A",
          "1D549": "211D",
          "1D551": "2124"
        },
        capital: true,
        category: "Lu",
        font: Font.DOUBLESTRUCK
      },
      {
        interval: ["1D552", "1D56B"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.DOUBLESTRUCK
      },
      {
        interval: ["1D504", "1D51D"],
        base: Base.LATINCAP,
        subst: {
          "1D506": "212D",
          "1D50B": "210C",
          "1D50C": "2111",
          "1D515": "211C",
          "1D51D": "2128"
        },
        capital: true,
        category: "Lu",
        font: Font.FRAKTUR
      },
      {
        interval: ["1D51E", "1D537"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.FRAKTUR
      },
      {
        interval: ["FF21", "FF3A"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.FULLWIDTH
      },
      {
        interval: ["FF41", "FF5A"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.FULLWIDTH
      },
      {
        interval: ["1D434", "1D44D"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.ITALIC
      },
      {
        interval: ["1D44E", "1D467"],
        base: Base.LATINSMALL,
        subst: { "1D455": "210E" },
        capital: false,
        category: "Ll",
        font: Font.ITALIC
      },
      {
        interval: ["1D670", "1D689"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.MONOSPACE
      },
      {
        interval: ["1D68A", "1D6A3"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.MONOSPACE
      },
      {
        interval: ["0041", "005A"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.NORMAL
      },
      {
        interval: ["0061", "007A"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.NORMAL
      },
      {
        interval: ["1D49C", "1D4B5"],
        base: Base.LATINCAP,
        subst: {
          "1D49D": "212C",
          "1D4A0": "2130",
          "1D4A1": "2131",
          "1D4A3": "210B",
          "1D4A4": "2110",
          "1D4A7": "2112",
          "1D4A8": "2133",
          "1D4AD": "211B"
        },
        capital: true,
        category: "Lu",
        font: Font.SCRIPT
      },
      {
        interval: ["1D4B6", "1D4CF"],
        base: Base.LATINSMALL,
        subst: { "1D4BA": "212F", "1D4BC": "210A", "1D4C4": "2134" },
        capital: false,
        category: "Ll",
        font: Font.SCRIPT
      },
      {
        interval: ["1D5A0", "1D5B9"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.SANSSERIF
      },
      {
        interval: ["1D5BA", "1D5D3"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.SANSSERIF
      },
      {
        interval: ["1D608", "1D621"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.SANSSERIFITALIC
      },
      {
        interval: ["1D622", "1D63B"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.SANSSERIFITALIC
      },
      {
        interval: ["1D5D4", "1D5ED"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.SANSSERIFBOLD
      },
      {
        interval: ["1D5EE", "1D607"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.SANSSERIFBOLD
      },
      {
        interval: ["1D63C", "1D655"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.SANSSERIFBOLDITALIC
      },
      {
        interval: ["1D656", "1D66F"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.SANSSERIFBOLDITALIC
      },
      {
        interval: ["0391", "03A9"],
        base: Base.GREEKCAP,
        subst: { "03A2": "03F4" },
        capital: true,
        category: "Lu",
        font: Font.NORMAL
      },
      {
        interval: ["03B0", "03D0"],
        base: Base.GREEKSMALL,
        subst: {
          "03B0": "2207",
          "03CA": "2202",
          "03CB": "03F5",
          "03CC": "03D1",
          "03CD": "03F0",
          "03CE": "03D5",
          "03CF": "03F1",
          "03D0": "03D6"
        },
        capital: false,
        category: "Ll",
        font: Font.NORMAL
      },
      {
        interval: ["1D6A8", "1D6C0"],
        base: Base.GREEKCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.BOLD
      },
      {
        interval: ["1D6C1", "1D6E1"],
        base: Base.GREEKSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.BOLD
      },
      {
        interval: ["1D6E2", "1D6FA"],
        base: Base.GREEKCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.ITALIC
      },
      {
        interval: ["1D6FB", "1D71B"],
        base: Base.GREEKSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.ITALIC
      },
      {
        interval: ["1D71C", "1D734"],
        base: Base.GREEKCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.BOLDITALIC
      },
      {
        interval: ["1D735", "1D755"],
        base: Base.GREEKSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.BOLDITALIC
      },
      {
        interval: ["1D756", "1D76E"],
        base: Base.GREEKCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.SANSSERIFBOLD
      },
      {
        interval: ["1D76F", "1D78F"],
        base: Base.GREEKSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.SANSSERIFBOLD
      },
      {
        interval: ["1D790", "1D7A8"],
        base: Base.GREEKCAP,
        subst: {},
        capital: true,
        category: "Lu",
        font: Font.SANSSERIFBOLDITALIC
      },
      {
        interval: ["1D7A9", "1D7C9"],
        base: Base.GREEKSMALL,
        subst: {},
        capital: false,
        category: "Ll",
        font: Font.SANSSERIFBOLDITALIC
      },
      {
        interval: ["0030", "0039"],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: "Nd",
        font: Font.NORMAL
      },
      {
        interval: ["2070", "2079"],
        base: Base.DIGIT,
        subst: { 2071: "00B9", 2072: "00B2", 2073: "00B3" },
        offset: 0,
        category: "No",
        font: Embellish.SUPER
      },
      {
        interval: ["2080", "2089"],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: "No",
        font: Embellish.SUB
      },
      {
        interval: ["245F", "2473"],
        base: Base.DIGIT,
        subst: { "245F": "24EA" },
        offset: 0,
        category: "No",
        font: Embellish.CIRCLED
      },
      {
        interval: ["3251", "325F"],
        base: Base.DIGIT,
        subst: {},
        offset: 21,
        category: "No",
        font: Embellish.CIRCLED
      },
      {
        interval: ["32B1", "32BF"],
        base: Base.DIGIT,
        subst: {},
        offset: 36,
        category: "No",
        font: Embellish.CIRCLED
      },
      {
        interval: ["2474", "2487"],
        base: Base.DIGIT,
        subst: {},
        offset: 1,
        category: "No",
        font: Embellish.PARENTHESIZED
      },
      {
        interval: ["2487", "249B"],
        base: Base.DIGIT,
        subst: { 2487: "1F100" },
        offset: 0,
        category: "No",
        font: Embellish.PERIOD
      },
      {
        interval: ["2775", "277F"],
        base: Base.DIGIT,
        subst: { 2775: "24FF" },
        offset: 0,
        category: "No",
        font: Embellish.NEGATIVECIRCLED
      },
      {
        interval: ["24EB", "24F4"],
        base: Base.DIGIT,
        subst: {},
        offset: 11,
        category: "No",
        font: Embellish.NEGATIVECIRCLED
      },
      {
        interval: ["24F5", "24FE"],
        base: Base.DIGIT,
        subst: {},
        offset: 1,
        category: "No",
        font: Embellish.DOUBLECIRCLED
      },
      {
        interval: ["277F", "2789"],
        base: Base.DIGIT,
        subst: { "277F": "1F10B" },
        offset: 0,
        category: "No",
        font: Embellish.CIRCLEDSANSSERIF
      },
      {
        interval: ["2789", "2793"],
        base: Base.DIGIT,
        subst: { 2789: "1F10C" },
        offset: 0,
        category: "No",
        font: Embellish.NEGATIVECIRCLEDSANSSERIF
      },
      {
        interval: ["FF10", "FF19"],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: "Nd",
        font: Font.FULLWIDTH
      },
      {
        interval: ["1D7CE", "1D7D7"],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: "Nd",
        font: Font.BOLD
      },
      {
        interval: ["1D7D8", "1D7E1"],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: "Nd",
        font: Font.DOUBLESTRUCK
      },
      {
        interval: ["1D7E2", "1D7EB"],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: "Nd",
        font: Font.SANSSERIF
      },
      {
        interval: ["1D7EC", "1D7F5"],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: "Nd",
        font: Font.SANSSERIFBOLD
      },
      {
        interval: ["1D7F6", "1D7FF"],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: "Nd",
        font: Font.MONOSPACE
      },
      {
        interval: ["1F101", "1F10A"],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: "No",
        font: Embellish.COMMA
      },
      {
        interval: ["24B6", "24CF"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "So",
        font: Embellish.CIRCLED
      },
      {
        interval: ["24D0", "24E9"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "So",
        font: Embellish.CIRCLED
      },
      {
        interval: ["1F110", "1F129"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "So",
        font: Embellish.PARENTHESIZED
      },
      {
        interval: ["249C", "24B5"],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: "So",
        font: Embellish.PARENTHESIZED
      },
      {
        interval: ["1F130", "1F149"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "So",
        font: Embellish.SQUARED
      },
      {
        interval: ["1F170", "1F189"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "So",
        font: Embellish.NEGATIVESQUARED
      },
      {
        interval: ["1F150", "1F169"],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: "So",
        font: Embellish.NEGATIVECIRCLED
      }
    ];
    exports2.INTERVALS = /* @__PURE__ */ new Map();
    function alphabetName(base, font) {
      const capFont = font.split("-").map((x) => x[0].toUpperCase() + x.slice(1)).join("");
      return base + capFont;
    }
    for (const proto of PROTO_INTERVALS) {
      const key = alphabetName(proto.base, proto.font);
      const interval = makeCharInterval(proto.interval, proto.subst);
      let alphabet = exports2.INTERVALS.get(key);
      if (alphabet) {
        alphabet.unicode = alphabet.unicode.concat(interval);
        continue;
      }
      alphabet = proto;
      alphabet.unicode = interval;
      exports2.INTERVALS.set(key, alphabet);
    }
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_meaning.js
var require_semantic_meaning = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_meaning.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticSecondary = exports2.SemanticFont = exports2.SemanticRole = exports2.SemanticType = void 0;
    var Alphabet = require_alphabet();
    var Types;
    (function(Types2) {
      Types2["PUNCTUATION"] = "punctuation";
      Types2["FENCE"] = "fence";
      Types2["NUMBER"] = "number";
      Types2["IDENTIFIER"] = "identifier";
      Types2["TEXT"] = "text";
      Types2["OPERATOR"] = "operator";
      Types2["RELATION"] = "relation";
      Types2["LARGEOP"] = "largeop";
      Types2["FUNCTION"] = "function";
      Types2["ACCENT"] = "accent";
      Types2["FENCED"] = "fenced";
      Types2["FRACTION"] = "fraction";
      Types2["PUNCTUATED"] = "punctuated";
      Types2["RELSEQ"] = "relseq";
      Types2["MULTIREL"] = "multirel";
      Types2["INFIXOP"] = "infixop";
      Types2["PREFIXOP"] = "prefixop";
      Types2["POSTFIXOP"] = "postfixop";
      Types2["APPL"] = "appl";
      Types2["INTEGRAL"] = "integral";
      Types2["BIGOP"] = "bigop";
      Types2["SQRT"] = "sqrt";
      Types2["ROOT"] = "root";
      Types2["LIMUPPER"] = "limupper";
      Types2["LIMLOWER"] = "limlower";
      Types2["LIMBOTH"] = "limboth";
      Types2["SUBSCRIPT"] = "subscript";
      Types2["SUPERSCRIPT"] = "superscript";
      Types2["UNDERSCORE"] = "underscore";
      Types2["OVERSCORE"] = "overscore";
      Types2["TENSOR"] = "tensor";
      Types2["TABLE"] = "table";
      Types2["MULTILINE"] = "multiline";
      Types2["MATRIX"] = "matrix";
      Types2["VECTOR"] = "vector";
      Types2["CASES"] = "cases";
      Types2["ROW"] = "row";
      Types2["LINE"] = "line";
      Types2["CELL"] = "cell";
      Types2["ENCLOSE"] = "enclose";
      Types2["INFERENCE"] = "inference";
      Types2["RULELABEL"] = "rulelabel";
      Types2["CONCLUSION"] = "conclusion";
      Types2["PREMISES"] = "premises";
      Types2["UNKNOWN"] = "unknown";
      Types2["EMPTY"] = "empty";
    })(Types || (Types = {}));
    exports2.SemanticType = Object.assign({}, Types);
    var Roles;
    (function(Roles2) {
      Roles2["COMMA"] = "comma";
      Roles2["SEMICOLON"] = "semicolon";
      Roles2["ELLIPSIS"] = "ellipsis";
      Roles2["FULLSTOP"] = "fullstop";
      Roles2["QUESTION"] = "question";
      Roles2["EXCLAMATION"] = "exclamation";
      Roles2["QUOTES"] = "quotes";
      Roles2["DASH"] = "dash";
      Roles2["TILDE"] = "tilde";
      Roles2["PRIME"] = "prime";
      Roles2["DEGREE"] = "degree";
      Roles2["VBAR"] = "vbar";
      Roles2["COLON"] = "colon";
      Roles2["OPENFENCE"] = "openfence";
      Roles2["CLOSEFENCE"] = "closefence";
      Roles2["APPLICATION"] = "application";
      Roles2["DUMMY"] = "dummy";
      Roles2["UNIT"] = "unit";
      Roles2["LABEL"] = "label";
      Roles2["OPEN"] = "open";
      Roles2["CLOSE"] = "close";
      Roles2["TOP"] = "top";
      Roles2["BOTTOM"] = "bottom";
      Roles2["NEUTRAL"] = "neutral";
      Roles2["METRIC"] = "metric";
      Roles2["LATINLETTER"] = "latinletter";
      Roles2["GREEKLETTER"] = "greekletter";
      Roles2["OTHERLETTER"] = "otherletter";
      Roles2["NUMBERSET"] = "numbersetletter";
      Roles2["INTEGER"] = "integer";
      Roles2["FLOAT"] = "float";
      Roles2["OTHERNUMBER"] = "othernumber";
      Roles2["INFTY"] = "infty";
      Roles2["MIXED"] = "mixed";
      Roles2["MULTIACCENT"] = "multiaccent";
      Roles2["OVERACCENT"] = "overaccent";
      Roles2["UNDERACCENT"] = "underaccent";
      Roles2["UNDEROVER"] = "underover";
      Roles2["SUBSUP"] = "subsup";
      Roles2["LEFTSUB"] = "leftsub";
      Roles2["LEFTSUPER"] = "leftsuper";
      Roles2["RIGHTSUB"] = "rightsub";
      Roles2["RIGHTSUPER"] = "rightsuper";
      Roles2["LEFTRIGHT"] = "leftright";
      Roles2["ABOVEBELOW"] = "abovebelow";
      Roles2["SETEMPTY"] = "set empty";
      Roles2["SETEXT"] = "set extended";
      Roles2["SETSINGLE"] = "set singleton";
      Roles2["SETCOLLECT"] = "set collection";
      Roles2["STRING"] = "string";
      Roles2["SPACE"] = "space";
      Roles2["ANNOTATION"] = "annotation";
      Roles2["TEXT"] = "text";
      Roles2["SEQUENCE"] = "sequence";
      Roles2["ENDPUNCT"] = "endpunct";
      Roles2["STARTPUNCT"] = "startpunct";
      Roles2["NEGATIVE"] = "negative";
      Roles2["POSITIVE"] = "positive";
      Roles2["NEGATION"] = "negation";
      Roles2["MULTIOP"] = "multiop";
      Roles2["PREFIXOP"] = "prefix operator";
      Roles2["POSTFIXOP"] = "postfix operator";
      Roles2["LIMFUNC"] = "limit function";
      Roles2["INFIXFUNC"] = "infix function";
      Roles2["PREFIXFUNC"] = "prefix function";
      Roles2["POSTFIXFUNC"] = "postfix function";
      Roles2["SIMPLEFUNC"] = "simple function";
      Roles2["COMPFUNC"] = "composed function";
      Roles2["SUM"] = "sum";
      Roles2["INTEGRAL"] = "integral";
      Roles2["GEOMETRY"] = "geometry";
      Roles2["BOX"] = "box";
      Roles2["BLOCK"] = "block";
      Roles2["ADDITION"] = "addition";
      Roles2["MULTIPLICATION"] = "multiplication";
      Roles2["SUBTRACTION"] = "subtraction";
      Roles2["IMPLICIT"] = "implicit";
      Roles2["DIVISION"] = "division";
      Roles2["VULGAR"] = "vulgar";
      Roles2["EQUALITY"] = "equality";
      Roles2["INEQUALITY"] = "inequality";
      Roles2["ARROW"] = "arrow";
      Roles2["ELEMENT"] = "element";
      Roles2["NONELEMENT"] = "nonelement";
      Roles2["REELEMENT"] = "reelement";
      Roles2["RENONELEMENT"] = "renonelement";
      Roles2["SET"] = "set";
      Roles2["DETERMINANT"] = "determinant";
      Roles2["ROWVECTOR"] = "rowvector";
      Roles2["BINOMIAL"] = "binomial";
      Roles2["SQUAREMATRIX"] = "squarematrix";
      Roles2["CYCLE"] = "cycle";
      Roles2["MULTILINE"] = "multiline";
      Roles2["MATRIX"] = "matrix";
      Roles2["VECTOR"] = "vector";
      Roles2["CASES"] = "cases";
      Roles2["TABLE"] = "table";
      Roles2["CAYLEY"] = "cayley";
      Roles2["PROOF"] = "proof";
      Roles2["LEFT"] = "left";
      Roles2["RIGHT"] = "right";
      Roles2["UP"] = "up";
      Roles2["DOWN"] = "down";
      Roles2["FINAL"] = "final";
      Roles2["SINGLE"] = "single";
      Roles2["HYP"] = "hyp";
      Roles2["AXIOM"] = "axiom";
      Roles2["LOGIC"] = "logic";
      Roles2["UNKNOWN"] = "unknown";
      Roles2["MGLYPH"] = "mglyph";
    })(Roles || (Roles = {}));
    exports2.SemanticRole = Object.assign({}, Roles);
    var ExtraFont;
    (function(ExtraFont2) {
      ExtraFont2["CALIGRAPHIC"] = "caligraphic";
      ExtraFont2["CALIGRAPHICBOLD"] = "caligraphic-bold";
      ExtraFont2["OLDSTYLE"] = "oldstyle";
      ExtraFont2["OLDSTYLEBOLD"] = "oldstyle-bold";
      ExtraFont2["UNKNOWN"] = "unknown";
    })(ExtraFont || (ExtraFont = {}));
    exports2.SemanticFont = Object.assign(Object.assign(Object.assign({}, Alphabet.Font), ExtraFont), Alphabet.Embellish);
    var SecondaryEnum;
    (function(SecondaryEnum2) {
      SecondaryEnum2["ALLLETTERS"] = "allLetters";
      SecondaryEnum2["D"] = "d";
      SecondaryEnum2["BAR"] = "bar";
      SecondaryEnum2["TILDE"] = "tilde";
    })(SecondaryEnum || (SecondaryEnum = {}));
    exports2.SemanticSecondary = Object.assign(Object.assign({}, Alphabet.Base), SecondaryEnum);
  }
});

// node_modules/speech-rule-engine/js/l10n/transformers.js
var require_transformers = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/transformers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Combiners = void 0;
    exports2.pluralCase = pluralCase;
    exports2.identityTransformer = identityTransformer;
    exports2.siCombiner = siCombiner;
    exports2.convertVulgarFraction = convertVulgarFraction;
    exports2.vulgarFractionSmall = vulgarFractionSmall;
    var semantic_meaning_js_1 = require_semantic_meaning();
    function pluralCase(num, _plural) {
      return num.toString();
    }
    function identityTransformer(input) {
      return input.toString();
    }
    function siCombiner(prefix, unit) {
      return prefix + unit.toLowerCase();
    }
    exports2.Combiners = {};
    exports2.Combiners.identityCombiner = function(a, b, c) {
      return a + b + c;
    };
    exports2.Combiners.prefixCombiner = function(letter, font, cap) {
      letter = cap ? cap + " " + letter : letter;
      return font ? font + " " + letter : letter;
    };
    exports2.Combiners.postfixCombiner = function(letter, font, cap) {
      letter = cap ? cap + " " + letter : letter;
      return font ? letter + " " + font : letter;
    };
    exports2.Combiners.romanceCombiner = function(letter, font, cap) {
      letter = cap ? letter + " " + cap : letter;
      return font ? letter + " " + font : letter;
    };
    function convertVulgarFraction(node, over = "") {
      if (!node.childNodes || !node.childNodes[0] || !node.childNodes[0].childNodes || node.childNodes[0].childNodes.length < 2 || node.childNodes[0].childNodes[0].tagName !== semantic_meaning_js_1.SemanticType.NUMBER || node.childNodes[0].childNodes[0].getAttribute("role") !== semantic_meaning_js_1.SemanticRole.INTEGER || node.childNodes[0].childNodes[1].tagName !== semantic_meaning_js_1.SemanticType.NUMBER || node.childNodes[0].childNodes[1].getAttribute("role") !== semantic_meaning_js_1.SemanticRole.INTEGER) {
        return { convertible: false, content: node.textContent };
      }
      const denStr = node.childNodes[0].childNodes[1].textContent;
      const enumStr = node.childNodes[0].childNodes[0].textContent;
      const denominator = Number(denStr);
      const enumerator = Number(enumStr);
      if (isNaN(denominator) || isNaN(enumerator)) {
        return {
          convertible: false,
          content: `${enumStr} ${over} ${denStr}`
        };
      }
      return {
        convertible: true,
        enumerator,
        denominator
      };
    }
    function vulgarFractionSmall(node, enumer, denom) {
      const conversion = convertVulgarFraction(node);
      if (conversion.convertible) {
        const enumerator = conversion.enumerator;
        const denominator = conversion.denominator;
        return enumerator > 0 && enumerator < enumer && denominator > 0 && denominator < denom;
      }
      return false;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/messages.js
var require_messages = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MESSAGES = MESSAGES;
    exports2.NUMBERS = NUMBERS;
    exports2.ALPHABETS = ALPHABETS;
    exports2.FUNCTIONS = FUNCTIONS;
    exports2.SUBISO = SUBISO;
    var tr = require_transformers();
    function MESSAGES() {
      return {
        MS: {},
        MSroots: {},
        font: {},
        embellish: {},
        role: {},
        enclose: {},
        navigate: {},
        regexp: {},
        unitTimes: ""
      };
    }
    function NUMBERS(numbers = {}) {
      return Object.assign({
        zero: "zero",
        ones: [],
        tens: [],
        large: [],
        special: {},
        wordOrdinal: tr.identityTransformer,
        numericOrdinal: tr.identityTransformer,
        numberToWords: tr.identityTransformer,
        numberToOrdinal: tr.pluralCase,
        vulgarSep: " ",
        numSep: " "
      }, numbers);
    }
    function ALPHABETS() {
      return {
        latinSmall: [],
        latinCap: [],
        greekSmall: [],
        greekCap: [],
        capPrefix: { default: "" },
        smallPrefix: { default: "" },
        digitPrefix: { default: "" },
        languagePrefix: {},
        digitTrans: {
          default: tr.identityTransformer,
          mathspeak: tr.identityTransformer,
          clearspeak: tr.identityTransformer
        },
        letterTrans: { default: tr.identityTransformer },
        combiner: (letter, _font, _cap) => {
          return letter;
        }
      };
    }
    function FUNCTIONS() {
      return {
        fracNestDepth: (n) => tr.vulgarFractionSmall(n, 10, 100),
        radicalNestDepth: (_count) => "",
        combineRootIndex: function(postfix, _index) {
          return postfix;
        },
        combineNestedFraction: tr.Combiners.identityCombiner,
        combineNestedRadical: tr.Combiners.identityCombiner,
        fontRegexp: function(font) {
          return new RegExp("^" + font.split(/ |-/).join("( |-)") + "( |-)");
        },
        si: tr.siCombiner,
        plural: tr.identityTransformer
      };
    }
    function SUBISO() {
      return {
        default: "",
        current: "",
        all: []
      };
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/locale.js
var require_locale = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locale.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LOCALE = void 0;
    exports2.createLocale = createLocale;
    var messages_js_1 = require_messages();
    exports2.LOCALE = createLocale();
    function createLocale() {
      return {
        FUNCTIONS: (0, messages_js_1.FUNCTIONS)(),
        MESSAGES: (0, messages_js_1.MESSAGES)(),
        ALPHABETS: (0, messages_js_1.ALPHABETS)(),
        NUMBERS: (0, messages_js_1.NUMBERS)(),
        COMBINERS: {},
        CORRECTIONS: {},
        SUBISO: (0, messages_js_1.SUBISO)()
      };
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/locale_util.js
var require_locale_util = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locale_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.nestingToString = nestingToString;
    exports2.combinePostfixIndex = combinePostfixIndex;
    exports2.localFont = localFont;
    exports2.localRole = localRole;
    exports2.localEnclose = localEnclose;
    exports2.localeFontCombiner = localeFontCombiner;
    var locale_js_1 = require_locale();
    var transformers_js_1 = require_transformers();
    function nestingToString(count) {
      switch (count) {
        case 1:
          return locale_js_1.LOCALE.MESSAGES.MS.ONCE || "";
        case 2:
          return locale_js_1.LOCALE.MESSAGES.MS.TWICE;
        default:
          return count.toString();
      }
    }
    function combinePostfixIndex(postfix, index) {
      return postfix === locale_js_1.LOCALE.MESSAGES.MS.ROOTINDEX || postfix === locale_js_1.LOCALE.MESSAGES.MS.INDEX ? postfix : postfix + " " + index;
    }
    function localFont(font) {
      return extractString(locale_js_1.LOCALE.MESSAGES.font[font], font);
    }
    function localRole(role) {
      return extractString(locale_js_1.LOCALE.MESSAGES.role[role], role);
    }
    function localEnclose(enclose) {
      return extractString(locale_js_1.LOCALE.MESSAGES.enclose[enclose], enclose);
    }
    function extractString(combiner, fallback) {
      if (combiner === void 0) {
        return fallback;
      }
      return typeof combiner === "string" ? combiner : combiner[0];
    }
    function localeFontCombiner(font) {
      return typeof font === "string" ? { font, combiner: locale_js_1.LOCALE.ALPHABETS.combiner } : {
        font: font[0],
        combiner: locale_js_1.LOCALE.COMBINERS[font[1]] || transformers_js_1.Combiners[font[1]] || locale_js_1.LOCALE.ALPHABETS.combiner
      };
    }
  }
});

// node_modules/speech-rule-engine/js/rule_engine/grammar.js
var require_grammar = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/grammar.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Grammar = exports2.ATTRIBUTE = void 0;
    exports2.correctFont = correctFont;
    var DomUtil = require_dom_util();
    var engine_js_1 = require_engine();
    var LocaleUtil = require_locale_util();
    var locale_js_1 = require_locale();
    exports2.ATTRIBUTE = "grammar";
    var Grammar = class _Grammar {
      static getInstance() {
        _Grammar.instance = _Grammar.instance || new _Grammar();
        return _Grammar.instance;
      }
      static parseInput(grammar) {
        const attributes = {};
        const components = grammar.split(":");
        for (const component of components) {
          const comp = component.split("=");
          const key = comp[0].trim();
          if (comp[1]) {
            attributes[key] = comp[1].trim();
            continue;
          }
          key.match(/^!/) ? attributes[key.slice(1)] = false : attributes[key] = true;
        }
        return attributes;
      }
      static parseState(stateStr) {
        const state = {};
        const corrections = stateStr.split(" ");
        for (const correction of corrections) {
          const corr = correction.split(":");
          const key = corr[0];
          const value = corr[1];
          state[key] = value ? value : true;
        }
        return state;
      }
      static translateString(text) {
        if (text.match(/:unit$/)) {
          return _Grammar.translateUnit(text);
        }
        const engine = engine_js_1.Engine.getInstance();
        let result = engine.evaluator(text, engine.dynamicCstr);
        result = result === null ? text : result;
        if (_Grammar.getInstance().getParameter("plural")) {
          result = locale_js_1.LOCALE.FUNCTIONS.plural(result);
        }
        return result;
      }
      static translateUnit(text) {
        text = _Grammar.prepareUnit(text);
        const engine = engine_js_1.Engine.getInstance();
        const plural = _Grammar.getInstance().getParameter("plural");
        const strict = engine.strict;
        const baseCstr = `${engine.locale}.${engine.modality}.default`;
        engine.strict = true;
        let cstr;
        let result;
        if (plural) {
          cstr = engine.defaultParser.parse(baseCstr + ".plural");
          result = engine.evaluator(text, cstr);
        }
        if (result) {
          engine.strict = strict;
          return result;
        }
        cstr = engine.defaultParser.parse(baseCstr + ".default");
        result = engine.evaluator(text, cstr);
        engine.strict = strict;
        if (!result) {
          return _Grammar.cleanUnit(text);
        }
        if (plural) {
          result = locale_js_1.LOCALE.FUNCTIONS.plural(result);
        }
        return result;
      }
      static prepareUnit(text) {
        const match = text.match(/:unit$/);
        return match ? text.slice(0, match.index).replace(/\s+/g, " ") + text.slice(match.index) : text;
      }
      static cleanUnit(text) {
        if (text.match(/:unit$/)) {
          return text.replace(/:unit$/, "");
        }
        return text;
      }
      clear() {
        this.parameters_ = {};
        this.stateStack_ = [];
      }
      setParameter(parameter, value) {
        const oldValue = this.parameters_[parameter];
        value ? this.parameters_[parameter] = value : delete this.parameters_[parameter];
        return oldValue;
      }
      getParameter(parameter) {
        return this.parameters_[parameter];
      }
      setCorrection(correction, func) {
        this.corrections_[correction] = func;
      }
      setPreprocessor(preprocessor, func) {
        this.preprocessors_[preprocessor] = func;
      }
      getCorrection(correction) {
        return this.corrections_[correction];
      }
      getState() {
        const pairs = [];
        for (const [key, val] of Object.entries(this.parameters_)) {
          pairs.push(typeof val === "string" ? key + ":" + val : key);
        }
        return pairs.join(" ");
      }
      processSingles() {
        const assignment = {};
        for (const single of this.singles) {
          assignment[single] = false;
        }
        this.singles = [];
        this.pushState(assignment);
      }
      pushState(assignment) {
        for (let [key, value] of Object.entries(assignment)) {
          if (key.match(/^\?/)) {
            delete assignment[key];
            key = key.slice(1);
            this.singles.push(key);
          }
          assignment[key] = this.setParameter(key, value);
        }
        this.stateStack_.push(assignment);
      }
      popState() {
        const assignment = this.stateStack_.pop();
        for (const [key, val] of Object.entries(assignment)) {
          this.setParameter(key, val);
        }
      }
      setAttribute(node) {
        if (node && node.nodeType === DomUtil.NodeType.ELEMENT_NODE) {
          const state = this.getState();
          if (state) {
            node.setAttribute(exports2.ATTRIBUTE, state);
          }
        }
      }
      preprocess(text) {
        return this.runProcessors(text, this.preprocessors_);
      }
      correct(text) {
        return this.runProcessors(text, this.corrections_);
      }
      apply(text, opt_flags) {
        this.currentFlags = opt_flags || {};
        text = this.currentFlags.adjust || this.currentFlags.preprocess ? _Grammar.getInstance().preprocess(text) : text;
        if (this.parameters_["translate"] || this.currentFlags.translate) {
          text = _Grammar.translateString(text);
        }
        text = this.currentFlags.adjust || this.currentFlags.correct ? _Grammar.getInstance().correct(text) : text;
        this.currentFlags = {};
        return text;
      }
      runProcessors(text, funcs) {
        for (const [key, val] of Object.entries(this.parameters_)) {
          const func = funcs[key];
          if (!func) {
            continue;
          }
          text = val === true ? func(text) : func(text, val);
        }
        return text;
      }
      constructor() {
        this.currentFlags = {};
        this.parameters_ = {};
        this.corrections_ = {};
        this.preprocessors_ = {};
        this.stateStack_ = [];
        this.singles = [];
      }
    };
    exports2.Grammar = Grammar;
    function correctFont(text, correction) {
      if (!correction || !text) {
        return text;
      }
      const regexp = locale_js_1.LOCALE.FUNCTIONS.fontRegexp(LocaleUtil.localFont(correction));
      return text.replace(regexp, "");
    }
    function correctCaps(text) {
      let cap = locale_js_1.LOCALE.ALPHABETS.capPrefix[engine_js_1.Engine.getInstance().domain];
      if (typeof cap === "undefined") {
        cap = locale_js_1.LOCALE.ALPHABETS.capPrefix["default"];
      }
      return correctFont(text, cap);
    }
    function addAnnotation(text, annotation) {
      return text + ":" + annotation;
    }
    function numbersToAlpha(text) {
      return text.match(/\d+/) ? locale_js_1.LOCALE.NUMBERS.numberToWords(parseInt(text, 10)) : text;
    }
    function noTranslateText(text) {
      if (text.match(new RegExp("^[" + locale_js_1.LOCALE.MESSAGES.regexp.TEXT + "]+$"))) {
        Grammar.getInstance().currentFlags["translate"] = false;
      }
      return text;
    }
    Grammar.getInstance().setCorrection("localFont", LocaleUtil.localFont);
    Grammar.getInstance().setCorrection("localRole", LocaleUtil.localRole);
    Grammar.getInstance().setCorrection("localEnclose", LocaleUtil.localEnclose);
    Grammar.getInstance().setCorrection("ignoreFont", correctFont);
    Grammar.getInstance().setPreprocessor("annotation", addAnnotation);
    Grammar.getInstance().setPreprocessor("noTranslateText", noTranslateText);
    Grammar.getInstance().setCorrection("ignoreCaps", correctCaps);
    Grammar.getInstance().setPreprocessor("numbers2alpha", numbersToAlpha);
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_af.js
var require_numbers_af = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_af.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var messages_js_1 = require_messages();
    function hundredsToWords_(num) {
      let n = num % 1e3;
      let str = "";
      let ones = exports2.NUMBERS.ones[Math.floor(n / 100)];
      str += ones ? ones + exports2.NUMBERS.numSep + "honderd" : "";
      n = n % 100;
      if (n) {
        str += str ? exports2.NUMBERS.numSep : "";
        ones = exports2.NUMBERS.ones[n];
        if (ones) {
          str += ones;
        } else {
          const tens = exports2.NUMBERS.tens[Math.floor(n / 10)];
          ones = exports2.NUMBERS.ones[n % 10];
          str += ones ? ones + "-en-" + tens : tens;
        }
      }
      return str;
    }
    function numberToWords(num) {
      if (num === 0) {
        return exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 36)) {
        return num.toString();
      }
      let pos = 0;
      let str = "";
      while (num > 0) {
        const hundreds = num % 1e3;
        if (hundreds) {
          const hund = hundredsToWords_(num % 1e3);
          if (pos) {
            const large = exports2.NUMBERS.large[pos];
            str = hund + exports2.NUMBERS.numSep + large + (str ? exports2.NUMBERS.numSep + str : "");
          } else {
            str = hund + (str ? exports2.NUMBERS.numSep + str : "");
          }
        }
        num = Math.floor(num / 1e3);
        pos++;
      }
      return str;
    }
    function numberToOrdinal(num, plural) {
      if (num === 1) {
        return "enkel";
      }
      if (num === 2) {
        return plural ? "helftes" : "helfte";
      }
      if (num === 4) {
        return plural ? "kwarte" : "kwart";
      }
      return wordOrdinal(num) + (plural ? "s" : "");
    }
    function wordOrdinal(num) {
      if (num === 1) {
        return "eerste";
      }
      if (num === 3) {
        return "derde";
      }
      if (num === 8) {
        return "agste";
      }
      if (num === 9) {
        return "negende";
      }
      const ordinal = numberToWords(num);
      return ordinal + (num < 19 ? "de" : "ste");
    }
    function numericOrdinal(num) {
      return num.toString() + ".";
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      wordOrdinal,
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_af.js
var require_locale_af = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_af.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.af = af;
    var grammar_js_1 = require_grammar();
    var locale_util_js_1 = require_locale_util();
    var locale_js_1 = require_locale();
    var numbers_af_js_1 = require_numbers_af();
    var tr = require_transformers();
    var germanPostfixCombiner = function(letter, font, cap) {
      letter = !cap ? letter : cap + " " + letter;
      return font ? letter + " " + font : letter;
    };
    var locale = null;
    function af() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_af_js_1.NUMBERS;
      loc.COMBINERS["germanPostfix"] = germanPostfixCombiner;
      loc.FUNCTIONS.radicalNestDepth = locale_util_js_1.nestingToString;
      loc.FUNCTIONS.plural = (unit) => {
        return /.*s$/.test(unit) ? unit : unit + "s";
      };
      loc.FUNCTIONS.fontRegexp = function(font) {
        return new RegExp("((^" + font + " )|( " + font + "$))");
      };
      loc.ALPHABETS.combiner = tr.Combiners.prefixCombiner;
      loc.ALPHABETS.digitTrans.default = numbers_af_js_1.NUMBERS.numberToWords;
      loc.CORRECTIONS.article = (name) => {
        return grammar_js_1.Grammar.getInstance().getParameter("noArticle") ? "" : name;
      };
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_ca.js
var require_numbers_ca = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_ca.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var grammar_js_1 = require_grammar();
    var messages_js_1 = require_messages();
    function tensToWords_(num) {
      const n = num % 100;
      if (n < 20) {
        return exports2.NUMBERS.ones[n];
      }
      const ten = Math.floor(n / 10);
      const tens = exports2.NUMBERS.tens[ten];
      const ones = exports2.NUMBERS.ones[n % 10];
      return tens && ones ? tens + (ten === 2 ? "-i-" : "-") + ones : tens || ones;
    }
    function hundredsToWords_(num) {
      const n = num % 1e3;
      const hundred = Math.floor(n / 100);
      const hundreds = hundred ? hundred === 1 ? "cent" : exports2.NUMBERS.ones[hundred] + "-cents" : "";
      const tens = tensToWords_(n % 100);
      return hundreds && tens ? hundreds + exports2.NUMBERS.numSep + tens : hundreds || tens;
    }
    function numberToWords(num) {
      if (num === 0) {
        return exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 36)) {
        return num.toString();
      }
      let pos = 0;
      let str = "";
      while (num > 0) {
        const hundreds = num % (pos > 1 ? 1e6 : 1e3);
        if (hundreds) {
          let large = exports2.NUMBERS.large[pos];
          if (!pos) {
            str = hundredsToWords_(hundreds);
          } else if (pos === 1) {
            str = (hundreds === 1 ? "" : hundredsToWords_(hundreds) + exports2.NUMBERS.numSep) + large + (str ? exports2.NUMBERS.numSep + str : "");
          } else {
            const thousands = numberToWords(hundreds);
            large = hundreds === 1 ? large : large.replace(/\u00f3$/, "ons");
            str = thousands + exports2.NUMBERS.numSep + large + (str ? exports2.NUMBERS.numSep + str : "");
          }
        }
        num = Math.floor(num / (pos > 1 ? 1e6 : 1e3));
        pos++;
      }
      return str;
    }
    function numberToOrdinal(num, _plural) {
      if (num > 1999) {
        return numericOrdinal(num);
      }
      if (num <= 10) {
        return exports2.NUMBERS.special.onesOrdinals[num - 1];
      }
      const result = numberToWords(num);
      if (result.match(/mil$/)) {
        return result.replace(/mil$/, "mil·lèsima");
      }
      if (result.match(/u$/)) {
        return result.replace(/u$/, "vena");
      }
      if (result.match(/a$/)) {
        return result.replace(/a$/, "ena");
      }
      return result + (result.match(/e$/) ? "na" : "ena");
    }
    function numericOrdinal(num) {
      const gender = grammar_js_1.Grammar.getInstance().getParameter("gender");
      return num.toString() + (gender === "f" ? "a" : "n");
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_ca.js
var require_locale_ca = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_ca.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ca = ca;
    var locale_js_1 = require_locale();
    var locale_util_js_1 = require_locale_util();
    var numbers_ca_js_1 = require_numbers_ca();
    var transformers_js_1 = require_transformers();
    var sansserifCombiner = function(letter, font, cap) {
      letter = "sans serif " + (cap ? cap + " " + letter : letter);
      return font ? letter + " " + font : letter;
    };
    var locale = null;
    function ca() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_ca_js_1.NUMBERS;
      loc.COMBINERS["sansserif"] = sansserifCombiner;
      loc.FUNCTIONS.fracNestDepth = (_node) => false;
      loc.FUNCTIONS.combineRootIndex = locale_util_js_1.combinePostfixIndex;
      loc.FUNCTIONS.combineNestedRadical = (a, _b, c) => a + c;
      loc.FUNCTIONS.fontRegexp = (font) => RegExp("^" + font + " ");
      loc.FUNCTIONS.plural = (unit) => {
        if (/.*os$/.test(unit)) {
          return unit + "sos";
        }
        if (/.*s$/.test(unit)) {
          return unit + "os";
        }
        if (/.*ga$/.test(unit)) {
          return unit.slice(0, -2) + "gues";
        }
        if (/.*ça$/.test(unit)) {
          return unit.slice(0, -2) + "ces";
        }
        if (/.*ca$/.test(unit)) {
          return unit.slice(0, -2) + "ques";
        }
        if (/.*ja$/.test(unit)) {
          return unit.slice(0, -2) + "ges";
        }
        if (/.*qua$/.test(unit)) {
          return unit.slice(0, -3) + "qües";
        }
        if (/.*a$/.test(unit)) {
          return unit.slice(0, -1) + "es";
        }
        if (/.*(e|i)$/.test(unit)) {
          return unit + "ns";
        }
        if (/.*í$/.test(unit)) {
          return unit.slice(0, -1) + "ins";
        }
        return unit + "s";
      };
      loc.FUNCTIONS.si = (prefix, unit) => {
        if (unit.match(/^metre/)) {
          prefix = prefix.replace(/a$/, "à").replace(/o$/, "ò").replace(/i$/, "í");
        }
        return prefix + unit;
      };
      loc.ALPHABETS.combiner = transformers_js_1.Combiners.prefixCombiner;
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_da.js
var require_numbers_da = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_da.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var messages_js_1 = require_messages();
    function onePrefix_(num, mill = false) {
      return num === exports2.NUMBERS.ones[1] ? mill ? "et" : "en" : num;
    }
    function hundredsToWords_(num, ordinal = false) {
      let n = num % 1e3;
      let str = "";
      let ones = exports2.NUMBERS.ones[Math.floor(n / 100)];
      str += ones ? onePrefix_(ones, true) + " hundrede" : "";
      n = n % 100;
      if (n) {
        str += str ? " og " : "";
        ones = ordinal ? exports2.NUMBERS.special.smallOrdinals[n] : exports2.NUMBERS.ones[n];
        if (ones) {
          str += ones;
        } else {
          const tens = ordinal ? exports2.NUMBERS.special.tensOrdinals[Math.floor(n / 10)] : exports2.NUMBERS.tens[Math.floor(n / 10)];
          ones = exports2.NUMBERS.ones[n % 10];
          str += ones ? onePrefix_(ones) + "og" + tens : tens;
        }
      }
      return str;
    }
    function numberToWords(num, ordinal = false) {
      if (num === 0) {
        return exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 36)) {
        return num.toString();
      }
      let pos = 0;
      let str = "";
      while (num > 0) {
        const hundreds = num % 1e3;
        if (hundreds) {
          const hund = hundredsToWords_(hundreds, ordinal && !pos);
          if (pos) {
            const large = exports2.NUMBERS.large[pos];
            const plural = hundreds > 1 ? "er" : "";
            str = onePrefix_(hund, pos <= 1) + " " + large + plural + (str ? " og " : "") + str;
          } else {
            str = onePrefix_(hund) + str;
          }
        }
        num = Math.floor(num / 1e3);
        pos++;
      }
      return str;
    }
    function numberToOrdinal(num, plural) {
      if (num === 1) {
        return plural ? "hel" : "hele";
      }
      if (num === 2) {
        return plural ? "halv" : "halve";
      }
      return wordOrdinal(num) + (plural ? "dele" : "del");
    }
    function wordOrdinal(num) {
      if (num % 100) {
        return numberToWords(num, true);
      }
      const ordinal = numberToWords(num);
      return ordinal.match(/e$/) ? ordinal : ordinal + "e";
    }
    function numericOrdinal(num) {
      return num.toString() + ".";
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      wordOrdinal,
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_da.js
var require_locale_da = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_da.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.da = da;
    var locale_js_1 = require_locale();
    var locale_util_js_1 = require_locale_util();
    var numbers_da_js_1 = require_numbers_da();
    var tr = require_transformers();
    var locale = null;
    function da() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_da_js_1.NUMBERS;
      loc.FUNCTIONS.radicalNestDepth = locale_util_js_1.nestingToString;
      loc.FUNCTIONS.fontRegexp = (font) => {
        return font === loc.ALPHABETS.capPrefix["default"] ? RegExp("^" + font + " ") : RegExp(" " + font + "$");
      };
      loc.ALPHABETS.combiner = tr.Combiners.postfixCombiner;
      loc.ALPHABETS.digitTrans.default = numbers_da_js_1.NUMBERS.numberToWords;
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_de.js
var require_numbers_de = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_de.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var messages_js_1 = require_messages();
    function onePrefix_(num, mill = false) {
      return num === exports2.NUMBERS.ones[1] ? mill ? "eine" : "ein" : num;
    }
    function hundredsToWords_(num) {
      let n = num % 1e3;
      let str = "";
      let ones = exports2.NUMBERS.ones[Math.floor(n / 100)];
      str += ones ? onePrefix_(ones) + "hundert" : "";
      n = n % 100;
      if (n) {
        str += str ? exports2.NUMBERS.numSep : "";
        ones = exports2.NUMBERS.ones[n];
        if (ones) {
          str += ones;
        } else {
          const tens = exports2.NUMBERS.tens[Math.floor(n / 10)];
          ones = exports2.NUMBERS.ones[n % 10];
          str += ones ? onePrefix_(ones) + "und" + tens : tens;
        }
      }
      return str;
    }
    function numberToWords(num) {
      if (num === 0) {
        return exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 36)) {
        return num.toString();
      }
      let pos = 0;
      let str = "";
      while (num > 0) {
        const hundreds = num % 1e3;
        if (hundreds) {
          const hund = hundredsToWords_(num % 1e3);
          if (pos) {
            const large = exports2.NUMBERS.large[pos];
            const plural = pos > 1 && hundreds > 1 ? large.match(/e$/) ? "n" : "en" : "";
            str = onePrefix_(hund, pos > 1) + large + plural + str;
          } else {
            str = onePrefix_(hund, pos > 1) + str;
          }
        }
        num = Math.floor(num / 1e3);
        pos++;
      }
      return str.replace(/ein$/, "eins");
    }
    function numberToOrdinal(num, plural) {
      if (num === 1) {
        return "eintel";
      }
      if (num === 2) {
        return plural ? "halbe" : "halb";
      }
      return wordOrdinal(num) + "l";
    }
    function wordOrdinal(num) {
      if (num === 1) {
        return "erste";
      }
      if (num === 3) {
        return "dritte";
      }
      if (num === 7) {
        return "siebte";
      }
      if (num === 8) {
        return "achte";
      }
      const ordinal = numberToWords(num);
      return ordinal + (num < 19 ? "te" : "ste");
    }
    function numericOrdinal(num) {
      return num.toString() + ".";
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      wordOrdinal,
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_de.js
var require_locale_de = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_de.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.de = de;
    var grammar_js_1 = require_grammar();
    var locale_util_js_1 = require_locale_util();
    var locale_js_1 = require_locale();
    var numbers_de_js_1 = require_numbers_de();
    var germanPrefixCombiner = function(letter, font, cap) {
      if (cap === "s") {
        font = font.split(" ").map(function(x) {
          return x.replace(/s$/, "");
        }).join(" ");
        cap = "";
      }
      letter = cap ? cap + " " + letter : letter;
      return font ? font + " " + letter : letter;
    };
    var germanPostfixCombiner = function(letter, font, cap) {
      letter = !cap || cap === "s" ? letter : cap + " " + letter;
      return font ? letter + " " + font : letter;
    };
    var locale = null;
    function de() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_de_js_1.NUMBERS;
      loc.COMBINERS["germanPostfix"] = germanPostfixCombiner;
      loc.ALPHABETS.combiner = germanPrefixCombiner;
      loc.FUNCTIONS.radicalNestDepth = (x) => {
        return x > 1 ? loc.NUMBERS.numberToWords(x) + "fach" : "";
      };
      loc.FUNCTIONS.combineRootIndex = (postfix, index) => {
        const root = index ? index + "wurzel" : "";
        return postfix.replace("Wurzel", root);
      };
      loc.FUNCTIONS.combineNestedRadical = (a, b, c) => {
        a = c.match(/exponent$/) ? a + "r" : a;
        const count = (b ? b + " " : "") + a;
        return c.match(/ /) ? c.replace(/ /, " " + count + " ") : count + " " + c;
      };
      loc.FUNCTIONS.fontRegexp = function(font) {
        font = font.split(" ").map(function(x) {
          return x.replace(/s$/, "(|s)");
        }).join(" ");
        return new RegExp("((^" + font + " )|( " + font + "$))");
      };
      loc.CORRECTIONS.correctOne = (num) => num.replace(/^eins$/, "ein");
      loc.CORRECTIONS.localFontNumber = (font) => {
        const realFont = (0, locale_util_js_1.localFont)(font);
        return realFont.split(" ").map(function(x) {
          return x.replace(/s$/, "");
        }).join(" ");
      };
      loc.CORRECTIONS.lowercase = (name) => name.toLowerCase();
      loc.CORRECTIONS.article = (name) => {
        const decl = grammar_js_1.Grammar.getInstance().getParameter("case");
        const plural = grammar_js_1.Grammar.getInstance().getParameter("plural");
        if (decl === "dative") {
          return { der: "dem", die: plural ? "den" : "der", das: "dem" }[name];
        }
        return name;
      };
      loc.CORRECTIONS.masculine = (name) => {
        const decl = grammar_js_1.Grammar.getInstance().getParameter("case");
        if (decl === "dative") {
          return name + "n";
        }
        return name;
      };
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_en.js
var require_numbers_en = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_en.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var messages_js_1 = require_messages();
    function hundredsToWords_(num) {
      let n = num % 1e3;
      let str = "";
      str += exports2.NUMBERS.ones[Math.floor(n / 100)] ? exports2.NUMBERS.ones[Math.floor(n / 100)] + exports2.NUMBERS.numSep + "hundred" : "";
      n = n % 100;
      if (n) {
        str += str ? exports2.NUMBERS.numSep : "";
        str += exports2.NUMBERS.ones[n] || exports2.NUMBERS.tens[Math.floor(n / 10)] + (n % 10 ? exports2.NUMBERS.numSep + exports2.NUMBERS.ones[n % 10] : "");
      }
      return str;
    }
    function numberToWords(num) {
      if (num === 0) {
        return exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 36)) {
        return num.toString();
      }
      let pos = 0;
      let str = "";
      while (num > 0) {
        const hundreds = num % 1e3;
        if (hundreds) {
          str = hundredsToWords_(num % 1e3) + (pos ? "-" + exports2.NUMBERS.large[pos] + "-" : "") + str;
        }
        num = Math.floor(num / 1e3);
        pos++;
      }
      return str.replace(/-$/, "");
    }
    function numberToOrdinal(num, plural) {
      if (num === 1) {
        return plural ? "oneths" : "oneth";
      }
      if (num === 2) {
        return plural ? "halves" : "half";
      }
      const ordinal = wordOrdinal(num);
      return plural ? ordinal + "s" : ordinal;
    }
    function wordOrdinal(num) {
      let ordinal = numberToWords(num);
      if (ordinal.match(/one$/)) {
        ordinal = ordinal.slice(0, -3) + "first";
      } else if (ordinal.match(/two$/)) {
        ordinal = ordinal.slice(0, -3) + "second";
      } else if (ordinal.match(/three$/)) {
        ordinal = ordinal.slice(0, -5) + "third";
      } else if (ordinal.match(/five$/)) {
        ordinal = ordinal.slice(0, -4) + "fifth";
      } else if (ordinal.match(/eight$/)) {
        ordinal = ordinal.slice(0, -5) + "eighth";
      } else if (ordinal.match(/nine$/)) {
        ordinal = ordinal.slice(0, -4) + "ninth";
      } else if (ordinal.match(/twelve$/)) {
        ordinal = ordinal.slice(0, -6) + "twelfth";
      } else if (ordinal.match(/ty$/)) {
        ordinal = ordinal.slice(0, -2) + "tieth";
      } else {
        ordinal = ordinal + "th";
      }
      return ordinal;
    }
    function numericOrdinal(num) {
      const tens = num % 100;
      const numStr = num.toString();
      if (tens > 10 && tens < 20) {
        return numStr + "th";
      }
      switch (num % 10) {
        case 1:
          return numStr + "st";
        case 2:
          return numStr + "nd";
        case 3:
          return numStr + "rd";
        default:
          return numStr + "th";
      }
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      wordOrdinal,
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_en.js
var require_locale_en = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_en.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.en = en;
    var grammar_js_1 = require_grammar();
    var locale_js_1 = require_locale();
    var locale_util_js_1 = require_locale_util();
    var numbers_en_js_1 = require_numbers_en();
    var tr = require_transformers();
    var locale = null;
    function en() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_en_js_1.NUMBERS;
      loc.FUNCTIONS.radicalNestDepth = locale_util_js_1.nestingToString;
      loc.FUNCTIONS.plural = (unit) => {
        return /.*s$/.test(unit) ? unit : unit + "s";
      };
      loc.ALPHABETS.combiner = tr.Combiners.prefixCombiner;
      loc.ALPHABETS.digitTrans.default = numbers_en_js_1.NUMBERS.numberToWords;
      loc.CORRECTIONS.article = (name) => {
        return grammar_js_1.Grammar.getInstance().getParameter("noArticle") ? "" : name;
      };
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_es.js
var require_numbers_es = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_es.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var grammar_js_1 = require_grammar();
    var messages_js_1 = require_messages();
    function tensToWords_(num) {
      const n = num % 100;
      if (n < 30) {
        return exports2.NUMBERS.ones[n];
      }
      const tens = exports2.NUMBERS.tens[Math.floor(n / 10)];
      const ones = exports2.NUMBERS.ones[n % 10];
      return tens && ones ? tens + " y " + ones : tens || ones;
    }
    function hundredsToWords_(num) {
      const n = num % 1e3;
      const hundred = Math.floor(n / 100);
      const hundreds = exports2.NUMBERS.special.hundreds[hundred];
      const tens = tensToWords_(n % 100);
      if (hundred === 1) {
        if (!tens) {
          return hundreds;
        }
        return hundreds + "to " + tens;
      }
      return hundreds && tens ? hundreds + " " + tens : hundreds || tens;
    }
    function numberToWords(num) {
      if (num === 0) {
        return exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 36)) {
        return num.toString();
      }
      let pos = 0;
      let str = "";
      while (num > 0) {
        const hundreds = num % 1e3;
        if (hundreds) {
          let large = exports2.NUMBERS.large[pos];
          const huns = hundredsToWords_(hundreds);
          if (!pos) {
            str = huns;
          } else if (hundreds === 1) {
            large = large.match("/^mil( |$)/") ? large : "un " + large;
            str = large + (str ? " " + str : "");
          } else {
            large = large.replace(/\u00f3n$/, "ones");
            str = hundredsToWords_(hundreds) + " " + large + (str ? " " + str : "");
          }
        }
        num = Math.floor(num / 1e3);
        pos++;
      }
      return str;
    }
    function numberToOrdinal(num, _plural) {
      if (num > 1999) {
        return num.toString() + "a";
      }
      if (num <= 12) {
        return exports2.NUMBERS.special.onesOrdinals[num - 1];
      }
      const result = [];
      if (num >= 1e3) {
        num = num - 1e3;
        result.push("milésima");
      }
      if (!num) {
        return result.join(" ");
      }
      let pos = 0;
      pos = Math.floor(num / 100);
      if (pos > 0) {
        result.push(exports2.NUMBERS.special.hundredsOrdinals[pos - 1]);
        num = num % 100;
      }
      if (num <= 12) {
        result.push(exports2.NUMBERS.special.onesOrdinals[num - 1]);
      } else {
        pos = Math.floor(num / 10);
        if (pos > 0) {
          result.push(exports2.NUMBERS.special.tensOrdinals[pos - 1]);
          num = num % 10;
        }
        if (num > 0) {
          result.push(exports2.NUMBERS.special.onesOrdinals[num - 1]);
        }
      }
      return result.join(" ");
    }
    function numericOrdinal(num) {
      const gender = grammar_js_1.Grammar.getInstance().getParameter("gender");
      return num.toString() + (gender === "f" ? "a" : "o");
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_es.js
var require_locale_es = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_es.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es = es;
    var locale_js_1 = require_locale();
    var locale_util_js_1 = require_locale_util();
    var numbers_es_js_1 = require_numbers_es();
    var transformers_js_1 = require_transformers();
    var sansserifCombiner = function(letter, font, cap) {
      letter = "sans serif " + (cap ? cap + " " + letter : letter);
      return font ? letter + " " + font : letter;
    };
    var locale = null;
    function es() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_es_js_1.NUMBERS;
      loc.COMBINERS["sansserif"] = sansserifCombiner;
      loc.FUNCTIONS.fracNestDepth = (_node) => false;
      loc.FUNCTIONS.combineRootIndex = locale_util_js_1.combinePostfixIndex;
      loc.FUNCTIONS.combineNestedRadical = (a, _b, c) => a + c;
      loc.FUNCTIONS.fontRegexp = (font) => RegExp("^" + font + " ");
      loc.FUNCTIONS.plural = (unit) => {
        if (/.*(a|e|i|o|u)$/.test(unit)) {
          return unit + "s";
        }
        if (/.*z$/.test(unit)) {
          return unit.slice(0, -1) + "ces";
        }
        if (/.*c$/.test(unit)) {
          return unit.slice(0, -1) + "ques";
        }
        if (/.*g$/.test(unit)) {
          return unit + "ues";
        }
        if (/.*\u00f3n$/.test(unit)) {
          return unit.slice(0, -2) + "ones";
        }
        return unit + "es";
      };
      loc.FUNCTIONS.si = (prefix, unit) => {
        if (unit.match(/^metro/)) {
          prefix = prefix.replace(/a$/, "á").replace(/o$/, "ó").replace(/i$/, "í");
        }
        return prefix + unit;
      };
      loc.ALPHABETS.combiner = transformers_js_1.Combiners.prefixCombiner;
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_euro.js
var require_locale_euro = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_euro.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.euro = euro;
    var locale_js_1 = require_locale();
    var locale = null;
    function euro() {
      if (!locale) {
        locale = (0, locale_js_1.createLocale)();
      }
      return locale;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_fr.js
var require_numbers_fr = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_fr.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var engine_js_1 = require_engine();
    var grammar_js_1 = require_grammar();
    var messages_js_1 = require_messages();
    function hundredsToWords_(num) {
      let n = num % 1e3;
      let str = "";
      str += exports2.NUMBERS.ones[Math.floor(n / 100)] ? exports2.NUMBERS.ones[Math.floor(n / 100)] + "-cent" : "";
      n = n % 100;
      if (n) {
        str += str ? "-" : "";
        let ones = exports2.NUMBERS.ones[n];
        if (ones) {
          str += ones;
        } else {
          const tens = exports2.NUMBERS.tens[Math.floor(n / 10)];
          if (tens.match(/-dix$/)) {
            ones = exports2.NUMBERS.ones[n % 10 + 10];
            str += tens.replace(/-dix$/, "") + "-" + ones;
          } else {
            str += tens + (n % 10 ? "-" + exports2.NUMBERS.ones[n % 10] : "");
          }
        }
      }
      const match = str.match(/s-\w+$/);
      return match ? str.replace(/s-\w+$/, match[0].slice(1)) : str.replace(/-un$/, "-et-un");
    }
    function numberToWords(num) {
      if (num === 0) {
        return exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 36)) {
        return num.toString();
      }
      if (exports2.NUMBERS.special["tens-" + engine_js_1.Engine.getInstance().subiso]) {
        exports2.NUMBERS.tens = exports2.NUMBERS.special["tens-" + engine_js_1.Engine.getInstance().subiso];
      }
      let pos = 0;
      let str = "";
      while (num > 0) {
        const hundreds = num % 1e3;
        if (hundreds) {
          let large = exports2.NUMBERS.large[pos];
          const huns = hundredsToWords_(hundreds);
          if (large && large.match(/^mille /)) {
            const rest = large.replace(/^mille /, "");
            if (str.match(RegExp(rest))) {
              str = huns + (pos ? "-mille-" : "") + str;
            } else if (str.match(RegExp(rest.replace(/s$/, "")))) {
              str = huns + (pos ? "-mille-" : "") + str.replace(rest.replace(/s$/, ""), rest);
            } else {
              str = huns + (pos ? "-" + large + "-" : "") + str;
            }
          } else {
            large = hundreds === 1 && large ? large.replace(/s$/, "") : large;
            str = huns + (pos ? "-" + large + "-" : "") + str;
          }
        }
        num = Math.floor(num / 1e3);
        pos++;
      }
      return str.replace(/-$/, "");
    }
    var SMALL_ORDINAL = {
      1: "unième",
      2: "demi",
      3: "tiers",
      4: "quart"
    };
    function numberToOrdinal(num, plural) {
      const ordinal = SMALL_ORDINAL[num] || wordOrdinal(num);
      return num === 3 ? ordinal : plural ? ordinal + "s" : ordinal;
    }
    function wordOrdinal(num) {
      if (num === 1) {
        return "première";
      }
      let ordinal = numberToWords(num);
      if (ordinal.match(/^neuf$/)) {
        ordinal = ordinal.slice(0, -1) + "v";
      } else if (ordinal.match(/cinq$/)) {
        ordinal = ordinal + "u";
      } else if (ordinal.match(/trois$/)) {
        ordinal = ordinal + "";
      } else if (ordinal.match(/e$/) || ordinal.match(/s$/)) {
        ordinal = ordinal.slice(0, -1);
      }
      ordinal = ordinal + "ième";
      return ordinal;
    }
    function numericOrdinal(num) {
      const gender = grammar_js_1.Grammar.getInstance().getParameter("gender");
      return num === 1 ? num.toString() + (gender === "m" ? "er" : "re") : num.toString() + "e";
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      wordOrdinal,
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_fr.js
var require_locale_fr = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_fr.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fr = fr;
    var grammar_js_1 = require_grammar();
    var locale_js_1 = require_locale();
    var locale_util_js_1 = require_locale_util();
    var numbers_fr_js_1 = require_numbers_fr();
    var transformers_js_1 = require_transformers();
    var locale = null;
    function fr() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_fr_js_1.NUMBERS;
      loc.FUNCTIONS.radicalNestDepth = locale_util_js_1.nestingToString;
      loc.FUNCTIONS.combineRootIndex = locale_util_js_1.combinePostfixIndex;
      loc.FUNCTIONS.combineNestedFraction = (a, b, c) => c.replace(/ $/g, "") + b + a;
      loc.FUNCTIONS.combineNestedRadical = (a, _b, c) => c + " " + a;
      loc.FUNCTIONS.fontRegexp = (font) => RegExp(" (en |)" + font + "$");
      loc.FUNCTIONS.plural = (unit) => {
        return /.*s$/.test(unit) ? unit : unit + "s";
      };
      loc.CORRECTIONS.article = (name) => {
        return grammar_js_1.Grammar.getInstance().getParameter("noArticle") ? "" : name;
      };
      loc.ALPHABETS.combiner = transformers_js_1.Combiners.romanceCombiner;
      loc.SUBISO = {
        default: "fr",
        current: "fr",
        all: ["fr", "be", "ch"]
      };
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_hi.js
var require_numbers_hi = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_hi.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var grammar_js_1 = require_grammar();
    var messages_js_1 = require_messages();
    function hundredsToWords_(num) {
      let n = num % 1e3;
      let str = "";
      str += exports2.NUMBERS.ones[Math.floor(n / 100)] ? exports2.NUMBERS.ones[Math.floor(n / 100)] + exports2.NUMBERS.numSep + exports2.NUMBERS.special.hundred : "";
      n = n % 100;
      if (n) {
        str += str ? exports2.NUMBERS.numSep : "";
        str += exports2.NUMBERS.ones[n];
      }
      return str;
    }
    function numberToWords(num) {
      if (num === 0) {
        return exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 32)) {
        return num.toString();
      }
      let pos = 0;
      let str = "";
      const hundreds = num % 1e3;
      const hundredsWords = hundredsToWords_(hundreds);
      num = Math.floor(num / 1e3);
      if (!num) {
        return hundredsWords;
      }
      while (num > 0) {
        const thousands = num % 100;
        if (thousands) {
          str = exports2.NUMBERS.ones[thousands] + exports2.NUMBERS.numSep + exports2.NUMBERS.large[pos] + (str ? exports2.NUMBERS.numSep + str : "");
        }
        num = Math.floor(num / 100);
        pos++;
      }
      return hundredsWords ? str + exports2.NUMBERS.numSep + hundredsWords : str;
    }
    function numberToOrdinal(num, _plural) {
      if (num <= 10) {
        return exports2.NUMBERS.special.smallDenominators[num];
      }
      return wordOrdinal(num) + " अंश";
    }
    function wordOrdinal(num) {
      const gender = grammar_js_1.Grammar.getInstance().getParameter("gender");
      if (num <= 0) {
        return num.toString();
      }
      if (num < 10) {
        return gender === "f" ? exports2.NUMBERS.special.ordinalsFeminine[num] : exports2.NUMBERS.special.ordinalsMasculine[num];
      }
      const ordinal = numberToWords(num);
      return ordinal + (gender === "f" ? "वीं" : "वाँ");
    }
    function numericOrdinal(num) {
      const gender = grammar_js_1.Grammar.getInstance().getParameter("gender");
      if (num > 0 && num < 10) {
        return gender === "f" ? exports2.NUMBERS.special.simpleSmallOrdinalsFeminine[num] : exports2.NUMBERS.special.simpleSmallOrdinalsMasculine[num];
      }
      const ordinal = num.toString().split("").map(function(x) {
        const num2 = parseInt(x, 10);
        return isNaN(num2) ? "" : exports2.NUMBERS.special.simpleNumbers[num2];
      }).join("");
      return ordinal + (gender === "f" ? "वीं" : "वाँ");
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      wordOrdinal,
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_hi.js
var require_locale_hi = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_hi.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.hi = hi;
    var locale_js_1 = require_locale();
    var numbers_hi_js_1 = require_numbers_hi();
    var transformers_js_1 = require_transformers();
    var locale_util_js_1 = require_locale_util();
    var locale = null;
    function hi() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_hi_js_1.NUMBERS;
      loc.ALPHABETS.combiner = transformers_js_1.Combiners.prefixCombiner;
      loc.FUNCTIONS.radicalNestDepth = locale_util_js_1.nestingToString;
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_ko.js
var require_numbers_ko = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_ko.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var messages_js_1 = require_messages();
    function thousandsToWords_(num) {
      let n = num % 1e4;
      let str = "";
      str += exports2.NUMBERS.ones[Math.floor(n / 1e3)] ? Math.floor(n / 1e3) === 1 ? "천" : exports2.NUMBERS.ones[Math.floor(n / 1e3)] + "천" : "";
      n = n % 1e3;
      if (n) {
        str += exports2.NUMBERS.ones[Math.floor(n / 100)] ? Math.floor(n / 100) === 1 ? "백" : exports2.NUMBERS.ones[Math.floor(n / 100)] + "백" : "";
        n = n % 100;
        str += exports2.NUMBERS.tens[Math.floor(n / 10)] + (n % 10 ? exports2.NUMBERS.ones[n % 10] : "");
      }
      return str;
    }
    function numberToWords(num) {
      if (num === 0)
        return exports2.NUMBERS.zero;
      if (num >= Math.pow(10, 36))
        return num.toString();
      let pos = 0;
      let str = "";
      while (num > 0) {
        const thousands = num % 1e4;
        if (thousands) {
          str = thousandsToWords_(num % 1e4) + (pos ? exports2.NUMBERS.large[pos] + exports2.NUMBERS.numSep : "") + str;
        }
        num = Math.floor(num / 1e4);
        pos++;
      }
      return str.replace(/ $/, "");
    }
    function numberToOrdinal(num, _plural) {
      if (num === 1)
        return "첫번째";
      return wordOrdinal(num) + "번째";
    }
    function wordOrdinal(num) {
      const ordinal = numberToWords(num);
      num %= 100;
      const label = numberToWords(num);
      if (!label || !num)
        return ordinal;
      const tens = num === 20 ? "스무" : exports2.NUMBERS.tens[10 + Math.floor(num / 10)];
      const ones = exports2.NUMBERS.ones[10 + Math.floor(num % 10)];
      return ordinal.slice(0, -label.length) + tens + ones;
    }
    function numericOrdinal(num) {
      return numberToOrdinal(num, false);
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      wordOrdinal,
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_ko.js
var require_locale_ko = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_ko.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ko = ko;
    var grammar_js_1 = require_grammar();
    var locale_js_1 = require_locale();
    var locale_util_js_1 = require_locale_util();
    var numbers_ko_js_1 = require_numbers_ko();
    var tr = require_transformers();
    var locale = null;
    function ko() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_ko_js_1.NUMBERS;
      loc.FUNCTIONS.radicalNestDepth = locale_util_js_1.nestingToString;
      loc.FUNCTIONS.plural = function(unit) {
        return unit;
      };
      loc.FUNCTIONS.si = (prefix, unit) => {
        return prefix + unit;
      };
      loc.FUNCTIONS.combineRootIndex = function(index, postfix) {
        return index + postfix;
      };
      loc.ALPHABETS.combiner = tr.Combiners.prefixCombiner;
      loc.ALPHABETS.digitTrans.default = numbers_ko_js_1.NUMBERS.numberToWords;
      loc.CORRECTIONS.postposition = (name) => {
        if (["같다", "는", "와", "를", "로"].includes(name))
          return name;
        const char = name.slice(-1);
        const value = (char.charCodeAt(0) - 44032) % 28;
        let final = value > 0 ? true : false;
        if (char.match(/[r,l,n,m,1,3,6,7,8,0]/i))
          final = true;
        grammar_js_1.Grammar.getInstance().setParameter("final", final);
        return name;
      };
      loc.CORRECTIONS.article = (name) => {
        const final = grammar_js_1.Grammar.getInstance().getParameter("final");
        if (final)
          grammar_js_1.Grammar.getInstance().setParameter("final", false);
        if (name === "같다")
          name = "는";
        const temp = { 는: "은", 와: "과", 를: "을", 로: "으로" }[name];
        return temp !== void 0 && final ? temp : name;
      };
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_it.js
var require_numbers_it = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_it.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var grammar_js_1 = require_grammar();
    var messages_js_1 = require_messages();
    function hundredsToWords_(num) {
      let n = num % 1e3;
      let str = "";
      str += exports2.NUMBERS.ones[Math.floor(n / 100)] ? exports2.NUMBERS.ones[Math.floor(n / 100)] + exports2.NUMBERS.numSep + "cento" : "";
      n = n % 100;
      if (n) {
        str += str ? exports2.NUMBERS.numSep : "";
        const ones = exports2.NUMBERS.ones[n];
        if (ones) {
          str += ones;
        } else {
          let tens = exports2.NUMBERS.tens[Math.floor(n / 10)];
          const rest = n % 10;
          if (rest === 1 || rest === 8) {
            tens = tens.slice(0, -1);
          }
          str += tens;
          str += rest ? exports2.NUMBERS.numSep + exports2.NUMBERS.ones[n % 10] : "";
        }
      }
      return str;
    }
    function numberToWords(num) {
      if (num === 0) {
        return exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 36)) {
        return num.toString();
      }
      if (num === 1 && grammar_js_1.Grammar.getInstance().getParameter("fraction")) {
        return "un";
      }
      let pos = 0;
      let str = "";
      while (num > 0) {
        const hundreds = num % 1e3;
        if (hundreds) {
          str = hundredsToWords_(num % 1e3) + (pos ? "-" + exports2.NUMBERS.large[pos] + "-" : "") + str;
        }
        num = Math.floor(num / 1e3);
        pos++;
      }
      return str.replace(/-$/, "");
    }
    function numberToOrdinal(num, plural) {
      if (num === 2) {
        return plural ? "mezzi" : "mezzo";
      }
      const ordinal = wordOrdinal(num);
      if (!plural) {
        return ordinal;
      }
      const gender = ordinal.match(/o$/) ? "i" : "e";
      return ordinal.slice(0, -1) + gender;
    }
    function wordOrdinal(num) {
      const gender = grammar_js_1.Grammar.getInstance().getParameter("gender");
      const postfix = gender === "m" ? "o" : "a";
      let ordinal = exports2.NUMBERS.special.onesOrdinals[num];
      if (ordinal) {
        return ordinal.slice(0, -1) + postfix;
      }
      ordinal = numberToWords(num);
      return ordinal.slice(0, -1) + "esim" + postfix;
    }
    function numericOrdinal(num) {
      const gender = grammar_js_1.Grammar.getInstance().getParameter("gender");
      return num.toString() + (gender === "m" ? "o" : "a");
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      wordOrdinal,
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_it.js
var require_locale_it = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_it.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.it = it;
    var locale_util_js_1 = require_locale_util();
    var locale_js_1 = require_locale();
    var numbers_it_js_1 = require_numbers_it();
    var transformers_js_1 = require_transformers();
    var italianPostfixCombiner = function(letter, font, cap) {
      if (letter.match(/^[a-zA-Z]$/)) {
        font = font.replace("cerchiato", "cerchiata");
      }
      letter = cap ? letter + " " + cap : letter;
      return font ? letter + " " + font : letter;
    };
    var locale = null;
    function it() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_it_js_1.NUMBERS;
      loc.COMBINERS["italianPostfix"] = italianPostfixCombiner;
      loc.FUNCTIONS.radicalNestDepth = locale_util_js_1.nestingToString;
      loc.FUNCTIONS.combineRootIndex = locale_util_js_1.combinePostfixIndex;
      loc.FUNCTIONS.combineNestedFraction = (a, b, c) => c.replace(/ $/g, "") + b + a;
      loc.FUNCTIONS.combineNestedRadical = (a, _b, c) => c + " " + a;
      loc.FUNCTIONS.fontRegexp = (font) => RegExp(" (en |)" + font + "$");
      loc.ALPHABETS.combiner = transformers_js_1.Combiners.romanceCombiner;
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_nn.js
var require_numbers_nn = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_nn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var engine_js_1 = require_engine();
    var messages_js_1 = require_messages();
    function hundredsToWordsRo_(num, ordinal = false) {
      let n = num % 1e3;
      let str = "";
      const count = Math.floor(n / 100);
      const ones = exports2.NUMBERS.ones[count];
      str += ones ? (count === 1 ? "" : ones) + "hundre" : "";
      n = n % 100;
      if (n) {
        str += str ? "og" : "";
        if (ordinal) {
          const ord = exports2.NUMBERS.special.smallOrdinals[n];
          if (ord) {
            return str + ord;
          }
          if (n % 10) {
            return str + exports2.NUMBERS.tens[Math.floor(n / 10)] + exports2.NUMBERS.special.smallOrdinals[n % 10];
          }
        }
        str += exports2.NUMBERS.ones[n] || exports2.NUMBERS.tens[Math.floor(n / 10)] + (n % 10 ? exports2.NUMBERS.ones[n % 10] : "");
      }
      return ordinal ? replaceOrdinal(str) : str;
    }
    function numberToWordsRo(num, ordinal = false) {
      if (num === 0) {
        return ordinal ? exports2.NUMBERS.special.smallOrdinals[0] : exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 36)) {
        return num.toString();
      }
      let pos = 0;
      let str = "";
      while (num > 0) {
        const hundreds = num % 1e3;
        if (hundreds) {
          const hund = hundredsToWordsRo_(num % 1e3, pos ? false : ordinal);
          if (!pos && ordinal) {
            ordinal = !ordinal;
          }
          str = hund + (pos ? " " + (exports2.NUMBERS.large[pos] + (pos > 1 && hundreds > 1 ? "er" : "")) + (str ? " " : "") : "") + str;
        }
        num = Math.floor(num / 1e3);
        pos++;
      }
      return ordinal ? str + (str.match(/tusen$/) ? "de" : "te") : str;
    }
    function numberToOrdinal(num, _plural) {
      return wordOrdinal(num);
    }
    function replaceOrdinal(str) {
      const letOne = exports2.NUMBERS.special.endOrdinal[0];
      if (letOne === "a" && str.match(/en$/)) {
        return str.slice(0, -2) + exports2.NUMBERS.special.endOrdinal;
      }
      if (str.match(/(d|n)$/) || str.match(/hundre$/)) {
        return str + "de";
      }
      if (str.match(/i$/)) {
        return str + exports2.NUMBERS.special.endOrdinal;
      }
      if (letOne === "a" && str.match(/e$/)) {
        return str.slice(0, -1) + exports2.NUMBERS.special.endOrdinal;
      }
      if (str.match(/e$/)) {
        return str + "nde";
      }
      return str + "nde";
    }
    function wordOrdinal(num) {
      const ordinal = numberToWords(num, true);
      return ordinal;
    }
    function numericOrdinal(num) {
      return num.toString() + ".";
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      wordOrdinal,
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
    function onePrefix_(num, thd = false) {
      const numOne = exports2.NUMBERS.ones[1];
      return num === numOne ? num === "ein" ? "eitt " : thd ? "et" : "ett" : num;
    }
    function hundredsToWordsGe_(num, ordinal = false) {
      let n = num % 1e3;
      let str = "";
      let ones = exports2.NUMBERS.ones[Math.floor(n / 100)];
      str += ones ? onePrefix_(ones) + "hundre" : "";
      n = n % 100;
      if (n) {
        str += str ? "og" : "";
        if (ordinal) {
          const ord = exports2.NUMBERS.special.smallOrdinals[n];
          if (ord) {
            return str += ord;
          }
        }
        ones = exports2.NUMBERS.ones[n];
        if (ones) {
          str += ones;
        } else {
          const tens = exports2.NUMBERS.tens[Math.floor(n / 10)];
          ones = exports2.NUMBERS.ones[n % 10];
          str += ones ? ones + "og" + tens : tens;
        }
      }
      return ordinal ? replaceOrdinal(str) : str;
    }
    function numberToWordsGe(num, ordinal = false) {
      if (num === 0) {
        return ordinal ? exports2.NUMBERS.special.smallOrdinals[0] : exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 36)) {
        return num.toString();
      }
      let pos = 0;
      let str = "";
      while (num > 0) {
        const hundreds = num % 1e3;
        if (hundreds) {
          const hund = hundredsToWordsGe_(num % 1e3, pos ? false : ordinal);
          if (!pos && ordinal) {
            ordinal = !ordinal;
          }
          str = (pos === 1 ? onePrefix_(hund, true) : hund) + (pos > 1 ? exports2.NUMBERS.numSep : "") + (pos ? exports2.NUMBERS.large[pos] + (pos > 1 && hundreds > 1 ? "er" : "") : "") + (pos > 1 && str ? exports2.NUMBERS.numSep : "") + str;
        }
        num = Math.floor(num / 1e3);
        pos++;
      }
      return ordinal ? str + (str.match(/tusen$/) ? "de" : "te") : str;
    }
    function numberToWords(num, ordinal = false) {
      const word = engine_js_1.Engine.getInstance().subiso === "alt" ? numberToWordsGe(num, ordinal) : numberToWordsRo(num, ordinal);
      return word;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_nb.js
var require_locale_nb = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_nb.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.nb = nb;
    var locale_js_1 = require_locale();
    var locale_util_js_1 = require_locale_util();
    var numbers_nn_js_1 = require_numbers_nn();
    var tr = require_transformers();
    var locale = null;
    function nb() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_nn_js_1.NUMBERS;
      loc.ALPHABETS.combiner = tr.Combiners.prefixCombiner;
      loc.ALPHABETS.digitTrans.default = numbers_nn_js_1.NUMBERS.numberToWords;
      loc.FUNCTIONS.radicalNestDepth = locale_util_js_1.nestingToString;
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_nemeth.js
var require_numbers_nemeth = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_nemeth.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var messages_js_1 = require_messages();
    function numberToWords(num) {
      const digits = num.toString().split("");
      return digits.map(function(digit) {
        return exports2.NUMBERS.ones[parseInt(digit, 10)];
      }).join("");
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      numberToWords,
      numberToOrdinal: numberToWords
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_nemeth.js
var require_locale_nemeth = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_nemeth.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.nemeth = nemeth;
    var locale_js_1 = require_locale();
    var numbers_nemeth_js_1 = require_numbers_nemeth();
    var transformers_js_1 = require_transformers();
    var simpleEnglish = function(letter) {
      return letter.match(RegExp("^" + locale.ALPHABETS.languagePrefix.english)) ? letter.slice(1) : letter;
    };
    var postfixCombiner = function(letter, font, _number) {
      letter = simpleEnglish(letter);
      return font ? letter + font : letter;
    };
    var germanCombiner = function(letter, font, _cap) {
      return font + simpleEnglish(letter);
    };
    var embellishCombiner = function(letter, font, num) {
      letter = simpleEnglish(letter);
      return font + (num ? num : "") + letter + "⠻";
    };
    var doubleEmbellishCombiner = function(letter, font, num) {
      letter = simpleEnglish(letter);
      return font + (num ? num : "") + letter + "⠻⠻";
    };
    var parensCombiner = function(letter, font, _number) {
      letter = simpleEnglish(letter);
      return font + letter + "⠾";
    };
    var locale = null;
    function nemeth() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_nemeth_js_1.NUMBERS;
      loc.COMBINERS = {
        postfixCombiner,
        germanCombiner,
        embellishCombiner,
        doubleEmbellishCombiner,
        parensCombiner
      };
      loc.FUNCTIONS.fracNestDepth = (_node) => false;
      loc.FUNCTIONS.fontRegexp = (font) => RegExp("^" + font);
      loc.FUNCTIONS.si = transformers_js_1.identityTransformer;
      loc.ALPHABETS.combiner = (letter, font, num) => {
        return font ? font + num + letter : simpleEnglish(letter);
      };
      loc.ALPHABETS.digitTrans = { default: numbers_nemeth_js_1.NUMBERS.numberToWords };
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_nn.js
var require_locale_nn = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_nn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.nn = nn;
    var locale_js_1 = require_locale();
    var locale_util_js_1 = require_locale_util();
    var numbers_nn_js_1 = require_numbers_nn();
    var tr = require_transformers();
    var locale = null;
    function nn() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_nn_js_1.NUMBERS;
      loc.ALPHABETS.combiner = tr.Combiners.prefixCombiner;
      loc.ALPHABETS.digitTrans.default = numbers_nn_js_1.NUMBERS.numberToWords;
      loc.FUNCTIONS.radicalNestDepth = locale_util_js_1.nestingToString;
      loc.SUBISO = {
        default: "",
        current: "",
        all: ["", "alt"]
      };
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/numbers/numbers_sv.js
var require_numbers_sv = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/numbers/numbers_sv.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERS = void 0;
    var messages_js_1 = require_messages();
    function hundredsToWords_(num) {
      let n = num % 1e3;
      let str = "";
      const hundreds = Math.floor(n / 100);
      str += exports2.NUMBERS.ones[hundreds] ? (hundreds === 1 ? "" : exports2.NUMBERS.ones[hundreds] + exports2.NUMBERS.numSep) + "hundra" : "";
      n = n % 100;
      if (n) {
        str += str ? exports2.NUMBERS.numSep : "";
        str += exports2.NUMBERS.ones[n] || exports2.NUMBERS.tens[Math.floor(n / 10)] + (n % 10 ? exports2.NUMBERS.numSep + exports2.NUMBERS.ones[n % 10] : "");
      }
      return str;
    }
    function numberToWords(num, ordinal = false) {
      if (num === 0) {
        return exports2.NUMBERS.zero;
      }
      if (num >= Math.pow(10, 36)) {
        return num.toString();
      }
      let pos = 0;
      let str = "";
      while (num > 0) {
        const hundreds = num % 1e3;
        if (hundreds) {
          const large = exports2.NUMBERS.large[pos];
          const plural = hundreds > 1 && pos > 1 && !ordinal ? "er" : "";
          str = (pos === 1 && hundreds === 1 ? "" : (pos > 1 && hundreds === 1 ? "en" : hundredsToWords_(num % 1e3)) + (pos > 1 ? " " : "")) + (pos ? large + plural + (pos > 1 ? " " : "") : "") + str;
        }
        num = Math.floor(num / 1e3);
        pos++;
      }
      return str.replace(/ $/, "");
    }
    function numberToOrdinal(num, plural) {
      if (num === 1) {
        return plural ? "hel" : "hel";
      }
      if (num === 2) {
        return plural ? "halva" : "halv";
      }
      let ordinal = wordOrdinal(num);
      ordinal = ordinal.match(/de$/) ? ordinal.replace(/de$/, "") : ordinal;
      return ordinal + (plural ? "delar" : "del");
    }
    function wordOrdinal(num) {
      let ordinal = numberToWords(num, true);
      if (ordinal.match(/^noll$/)) {
        ordinal = "nollte";
      } else if (ordinal.match(/ett$/)) {
        ordinal = ordinal.replace(/ett$/, "första");
      } else if (ordinal.match(/två$/)) {
        ordinal = ordinal.replace(/två$/, "andra");
      } else if (ordinal.match(/tre$/)) {
        ordinal = ordinal.replace(/tre$/, "tredje");
      } else if (ordinal.match(/fyra$/)) {
        ordinal = ordinal.replace(/fyra$/, "fjärde");
      } else if (ordinal.match(/fem$/)) {
        ordinal = ordinal.replace(/fem$/, "femte");
      } else if (ordinal.match(/sex$/)) {
        ordinal = ordinal.replace(/sex$/, "sjätte");
      } else if (ordinal.match(/sju$/)) {
        ordinal = ordinal.replace(/sju$/, "sjunde");
      } else if (ordinal.match(/åtta$/)) {
        ordinal = ordinal.replace(/åtta$/, "åttonde");
      } else if (ordinal.match(/nio$/)) {
        ordinal = ordinal.replace(/nio$/, "nionde");
      } else if (ordinal.match(/tio$/)) {
        ordinal = ordinal.replace(/tio$/, "tionde");
      } else if (ordinal.match(/elva$/)) {
        ordinal = ordinal.replace(/elva$/, "elfte");
      } else if (ordinal.match(/tolv$/)) {
        ordinal = ordinal.replace(/tolv$/, "tolfte");
      } else if (ordinal.match(/tusen$/)) {
        ordinal = ordinal.replace(/tusen$/, "tusonde");
      } else if (ordinal.match(/jard$/) || ordinal.match(/jon$/)) {
        ordinal = ordinal + "te";
      } else {
        ordinal = ordinal + "de";
      }
      return ordinal;
    }
    function numericOrdinal(num) {
      const str = num.toString();
      if (str.match(/11$|12$/)) {
        return str + ":e";
      }
      return str + (str.match(/1$|2$/) ? ":a" : ":e");
    }
    exports2.NUMBERS = (0, messages_js_1.NUMBERS)({
      wordOrdinal,
      numericOrdinal,
      numberToWords,
      numberToOrdinal
    });
  }
});

// node_modules/speech-rule-engine/js/l10n/locales/locale_sv.js
var require_locale_sv = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/locales/locale_sv.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sv = sv;
    var locale_js_1 = require_locale();
    var locale_util_js_1 = require_locale_util();
    var numbers_sv_js_1 = require_numbers_sv();
    var tr = require_transformers();
    var locale = null;
    function sv() {
      if (!locale) {
        locale = create();
      }
      return locale;
    }
    function create() {
      const loc = (0, locale_js_1.createLocale)();
      loc.NUMBERS = numbers_sv_js_1.NUMBERS;
      loc.FUNCTIONS.radicalNestDepth = locale_util_js_1.nestingToString;
      loc.FUNCTIONS.fontRegexp = function(font) {
        return new RegExp("((^" + font + " )|( " + font + "$))");
      };
      loc.ALPHABETS.combiner = tr.Combiners.prefixCombiner;
      loc.ALPHABETS.digitTrans.default = numbers_sv_js_1.NUMBERS.numberToWords;
      loc.CORRECTIONS.correctOne = (num) => num.replace(/^ett$/, "en");
      return loc;
    }
  }
});

// node_modules/speech-rule-engine/js/l10n/l10n.js
var require_l10n = __commonJS({
  "node_modules/speech-rule-engine/js/l10n/l10n.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.locales = void 0;
    exports2.setLocale = setLocale;
    exports2.completeLocale = completeLocale;
    var engine_js_1 = require_engine();
    var variables_js_12 = require_variables();
    var grammar_js_1 = require_grammar();
    var locale_af_js_1 = require_locale_af();
    var locale_ca_js_1 = require_locale_ca();
    var locale_da_js_1 = require_locale_da();
    var locale_de_js_1 = require_locale_de();
    var locale_en_js_1 = require_locale_en();
    var locale_es_js_1 = require_locale_es();
    var locale_euro_js_1 = require_locale_euro();
    var locale_fr_js_1 = require_locale_fr();
    var locale_hi_js_1 = require_locale_hi();
    var locale_ko_js_1 = require_locale_ko();
    var locale_it_js_1 = require_locale_it();
    var locale_nb_js_1 = require_locale_nb();
    var locale_nemeth_js_1 = require_locale_nemeth();
    var locale_nn_js_1 = require_locale_nn();
    var locale_sv_js_1 = require_locale_sv();
    var locale_js_1 = require_locale();
    exports2.locales = {
      af: locale_af_js_1.af,
      ca: locale_ca_js_1.ca,
      da: locale_da_js_1.da,
      de: locale_de_js_1.de,
      en: locale_en_js_1.en,
      es: locale_es_js_1.es,
      euro: locale_euro_js_1.euro,
      fr: locale_fr_js_1.fr,
      hi: locale_hi_js_1.hi,
      it: locale_it_js_1.it,
      ko: locale_ko_js_1.ko,
      nb: locale_nb_js_1.nb,
      nn: locale_nn_js_1.nn,
      sv: locale_sv_js_1.sv,
      nemeth: locale_nemeth_js_1.nemeth
    };
    function setLocale() {
      const msgs = getLocale();
      setSubiso(msgs);
      if (msgs) {
        for (const key of Object.getOwnPropertyNames(msgs)) {
          locale_js_1.LOCALE[key] = msgs[key];
        }
        for (const [key, func] of Object.entries(msgs.CORRECTIONS)) {
          grammar_js_1.Grammar.getInstance().setCorrection(key, func);
        }
      }
    }
    function setSubiso(msg) {
      const subiso = engine_js_1.Engine.getInstance().subiso;
      if (msg.SUBISO.all.indexOf(subiso) === -1) {
        engine_js_1.Engine.getInstance().subiso = msg.SUBISO.default;
      }
      msg.SUBISO.current = engine_js_1.Engine.getInstance().subiso;
    }
    function getLocale() {
      const locale = variables_js_12.Variables.ensureLocale(engine_js_1.Engine.getInstance().locale, engine_js_1.Engine.getInstance().defaultLocale);
      engine_js_1.Engine.getInstance().locale = locale;
      return exports2.locales[locale]();
    }
    function completeLocale(json) {
      const locale = exports2.locales[json.locale];
      if (!locale) {
        console.error("Locale " + json.locale + " does not exist!");
        return;
      }
      const kind = json.kind.toUpperCase();
      const messages = json.messages;
      if (!messages)
        return;
      const loc = locale();
      for (const [key, value] of Object.entries(messages)) {
        loc[kind][key] = value;
      }
    }
  }
});

// node_modules/speech-rule-engine/js/common/browser_util.js
var require_browser_util = __commonJS({
  "node_modules/speech-rule-engine/js/common/browser_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mapsForIE = void 0;
    exports2.detectIE = detectIE;
    exports2.detectEdge = detectEdge;
    var system_external_js_1 = require_system_external();
    var xpath_util_js_1 = require_xpath_util();
    function detectIE() {
      const isIE = typeof window !== "undefined" && "ActiveXObject" in window && "clipboardData" in window;
      if (!isIE) {
        return false;
      }
      loadMapsForIE();
      loadWGXpath();
      return true;
    }
    function detectEdge() {
      var _a;
      const isEdge = typeof window !== "undefined" && "MSGestureEvent" in window && ((_a = window.chrome) === null || _a === void 0 ? void 0 : _a.loadTimes) === null;
      if (!isEdge) {
        return false;
      }
      document.evaluate = null;
      loadWGXpath(true);
      return true;
    }
    exports2.mapsForIE = null;
    function loadWGXpath(opt_isEdge) {
      loadScript(system_external_js_1.SystemExternal.WGXpath);
      installWGXpath(opt_isEdge);
    }
    function installWGXpath(opt_isEdge, opt_count) {
      let count = opt_count || 1;
      if (typeof wgxpath === "undefined" && count < 10) {
        setTimeout(function() {
          installWGXpath(opt_isEdge, count++);
        }, 200);
        return;
      }
      if (count >= 10) {
        return;
      }
      system_external_js_1.SystemExternal.wgxpath = wgxpath;
      opt_isEdge ? system_external_js_1.SystemExternal.wgxpath.install({ document }) : system_external_js_1.SystemExternal.wgxpath.install();
      xpath_util_js_1.xpath.evaluate = document.evaluate;
      xpath_util_js_1.xpath.result = XPathResult;
      xpath_util_js_1.xpath.createNSResolver = document.createNSResolver;
    }
    function loadMapsForIE() {
      loadScript(system_external_js_1.SystemExternal.mathmapsIePath);
    }
    function loadScript(src) {
      const scr = system_external_js_1.SystemExternal.document.createElement("script");
      scr.type = "text/javascript";
      scr.src = src;
      system_external_js_1.SystemExternal.document.head ? system_external_js_1.SystemExternal.document.head.appendChild(scr) : system_external_js_1.SystemExternal.document.body.appendChild(scr);
    }
  }
});

// node_modules/speech-rule-engine/js/common/file_util.js
var require_file_util = __commonJS({
  "node_modules/speech-rule-engine/js/common/file_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.makePath = makePath;
    exports2.localePath = localePath;
    var system_external_js_1 = require_system_external();
    function makePath(path) {
      return path.match("/$") ? path : path + "/";
    }
    function localePath(locale, ext = "json") {
      return makePath(system_external_js_1.SystemExternal.jsonPath) + locale + (ext.match(/^\./) ? ext : "." + ext);
    }
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_attr.js
var require_semantic_attr = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_attr.js"(exports2) {
    "use strict";
    var __rest = exports2 && exports2.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticMap = exports2.NamedSymbol = void 0;
    exports2.addFunctionSemantic = addFunctionSemantic;
    exports2.equal = equal;
    exports2.isMatchingFence = isMatchingFence;
    var semantic_meaning_js_1 = require_semantic_meaning();
    var Alphabet = require_alphabet();
    exports2.NamedSymbol = {
      functionApplication: String.fromCodePoint(8289),
      invisibleTimes: String.fromCodePoint(8290),
      invisibleComma: String.fromCodePoint(8291),
      invisiblePlus: String.fromCodePoint(8292)
    };
    var meaningMap = class extends Map {
      get(symbol) {
        return super.get(symbol) || {
          role: semantic_meaning_js_1.SemanticRole.UNKNOWN,
          type: semantic_meaning_js_1.SemanticType.UNKNOWN,
          font: semantic_meaning_js_1.SemanticFont.UNKNOWN
        };
      }
    };
    var secondaryMap = class extends Map {
      set(char, kind, annotation = "") {
        super.set(this.secKey(kind, char), annotation || kind);
        return this;
      }
      has(char, kind) {
        return super.has(this.secKey(kind, char));
      }
      get(char, kind) {
        return super.get(this.secKey(kind, char));
      }
      secKey(kind, char) {
        return char ? `${kind} ${char}` : `${kind}`;
      }
    };
    exports2.SemanticMap = {
      Meaning: new meaningMap(),
      Secondary: new secondaryMap(),
      FencesHoriz: /* @__PURE__ */ new Map(),
      FencesVert: /* @__PURE__ */ new Map(),
      LatexCommands: /* @__PURE__ */ new Map()
    };
    function addMeaning(symbols, meaning) {
      for (const symbol of symbols) {
        exports2.SemanticMap.Meaning.set(symbol, {
          role: meaning.role || semantic_meaning_js_1.SemanticRole.UNKNOWN,
          type: meaning.type || semantic_meaning_js_1.SemanticType.UNKNOWN,
          font: meaning.font || semantic_meaning_js_1.SemanticFont.UNKNOWN
        });
        if (meaning.secondary) {
          exports2.SemanticMap.Secondary.set(symbol, meaning.secondary);
        }
      }
    }
    function initMeaning() {
      const sets = [
        {
          set: [
            "23",
            "26",
            "40",
            "5c",
            "a1",
            "a7",
            "b6",
            "bf",
            "2017",
            ["2022", "2025"],
            "2027",
            "203b",
            "203c",
            ["2041", "2043"],
            ["2047", "2049"],
            ["204b", "204d"],
            "2050",
            "2055",
            "2056",
            ["2058", "205e"],
            "2234",
            "2235",
            "fe45",
            "fe46",
            "fe5f",
            "fe60",
            "fe68",
            "fe6b",
            "ff03",
            "ff06",
            "ff0f",
            "ff20",
            "ff3c"
          ],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.UNKNOWN
        },
        {
          set: [
            "22",
            "ab",
            "bb",
            "2dd",
            ["2018", "201f"],
            "2039",
            "203a",
            ["301d", "301f"],
            "fe10",
            "ff02",
            "ff07"
          ],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.QUOTES
        },
        {
          set: ["3b", "204f", "2a1f", "2a3e", "fe14", "fe54", "ff1b"],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.SEMICOLON
        },
        {
          set: ["3f", "203d", "fe16", "fe56", "ff1f"],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.QUESTION
        },
        {
          set: ["21", "fe15", "fe57", "ff01"],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.EXCLAMATION
        },
        {
          set: [
            "5e",
            "60",
            "a8",
            "aa",
            "b4",
            "ba",
            "2c7",
            ["2d8", "2da"],
            "2040",
            "207a",
            "207d",
            "207e",
            "ff3e",
            "ff40"
          ],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.OVERACCENT
        },
        {
          set: ["b8", "2db", "2038", "203f", "2054", "208a", "208d", "208e"],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.UNDERACCENT
        },
        {
          set: ["3a", "2982", "fe13", "fe30", "fe55", "ff1a"],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.COLON
        },
        {
          set: ["2c", "2063", "fe50", "ff0c"],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.COMMA
        },
        {
          set: ["2026", ["22ee", "22f1"], "fe19"],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.ELLIPSIS
        },
        {
          set: ["2e", "fe52", "ff0e"],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.FULLSTOP
        },
        {
          set: ["2d", "207b", "208b", "2212", "2796", "fe63", "ff0d"],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.DASH,
          secondary: semantic_meaning_js_1.SemanticSecondary.BAR
        },
        {
          set: [
            "5f",
            "af",
            ["2010", "2015"],
            "203e",
            "208b",
            ["fe49", "fe4f"],
            "fe58",
            "ff3f",
            "ffe3"
          ],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.DASH,
          secondary: semantic_meaning_js_1.SemanticSecondary.BAR
        },
        {
          set: [
            "7e",
            "2dc",
            "2f7",
            "303",
            "330",
            "334",
            "2053",
            "223c",
            "223d",
            "301c",
            "ff5e"
          ],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.TILDE,
          secondary: semantic_meaning_js_1.SemanticSecondary.TILDE
        },
        {
          set: ["27", "2b9", "2ba", ["2032", "2037"], "2057"],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.PRIME
        },
        {
          set: ["b0"],
          type: semantic_meaning_js_1.SemanticType.PUNCTUATION,
          role: semantic_meaning_js_1.SemanticRole.DEGREE
        },
        {
          set: [
            "2b",
            "b1",
            "2064",
            "2213",
            "2214",
            "2228",
            "222a",
            ["228c", "228e"],
            "2294",
            "2295",
            "229d",
            "229e",
            "22bb",
            "22bd",
            "22c4",
            "22ce",
            "22d3",
            "2304",
            "271b",
            "271c",
            "2795",
            "27cf",
            "29fa",
            "29fb",
            "29fe",
            ["2a22", "2a28"],
            "2a2d",
            "2a2e",
            "2a39",
            "2a42",
            "2a45",
            "2a46",
            "2a48",
            "2a4a",
            "2a4c",
            "2a4f",
            "2a50",
            "2a52",
            "2a54",
            "2a56",
            "2a57",
            "2a59",
            "2a5b",
            "2a5d",
            ["2a61", "2a63"],
            "2adc",
            "2add",
            "fe62",
            "ff0b"
          ],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.ADDITION
        },
        {
          set: [
            "2a",
            "b7",
            "d7",
            "2020",
            "2021",
            "204e",
            "2051",
            "2062",
            ["2217", "2219"],
            "2227",
            "2229",
            "2240",
            "2293",
            "2297",
            ["2299", "229b"],
            "22a0",
            "22a1",
            "22b9",
            "22bc",
            ["22c5", "22cc"],
            "22cf",
            "22d2",
            "22d4",
            "2303",
            "2305",
            "2306",
            "25cb",
            "2715",
            "2716",
            "27ce",
            "27d1",
            ["29d1", "29d7"],
            "29e2",
            "2a1d",
            ["2a2f", "2a37"],
            ["2a3b", "2a3d"],
            "2a40",
            "2a43",
            "2a44",
            "2a47",
            "2a49",
            "2a4b",
            "2a4d",
            "2a4e",
            "2a51",
            "2a53",
            "2a55",
            "2a58",
            "2a5a",
            "2a5c",
            ["2a5e", "2a60"],
            "2ada",
            "2adb",
            "fe61",
            "ff0a"
          ],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.MULTIPLICATION
        },
        {
          set: [
            "2d",
            "af",
            "2010",
            "2011",
            "2052",
            "207b",
            "208b",
            "2212",
            "2216",
            "2238",
            "2242",
            "2296",
            "229f",
            "2796",
            "29ff",
            ["2a29", "2a2c"],
            "2a3a",
            "2a41",
            "fe63",
            "ff0d"
          ],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.SUBTRACTION
        },
        {
          set: [
            "2f",
            "f7",
            "2044",
            "2215",
            "2298",
            "2797",
            "27cc",
            "29bc",
            ["29f5", "29f9"],
            "2a38"
          ],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.DIVISION
        },
        {
          set: ["25", "2030", "2031", "ff05", "fe6a"],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.POSTFIXOP
        },
        {
          set: [
            "ac",
            "2200",
            "2201",
            "2203",
            "2204",
            "2206",
            ["221a", "221c"],
            "2310",
            "ffe2"
          ],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.PREFIXOP
        },
        {
          set: [
            "2320",
            "2321",
            "23aa",
            "23ae",
            "23af",
            "23b2",
            "23b3",
            "23b6",
            "23b7"
          ],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.PREFIXOP
        },
        {
          set: ["1d7ca", "1d7cb"],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.PREFIXOP,
          font: semantic_meaning_js_1.SemanticFont.BOLD
        },
        {
          set: [
            "3d",
            "7e",
            "207c",
            "208c",
            "221d",
            "2237",
            ["223a", "223f"],
            "2243",
            "2245",
            "2248",
            ["224a", "224e"],
            ["2251", "225f"],
            "2261",
            "2263",
            "229c",
            "22cd",
            "22d5",
            "29e4",
            "29e6",
            "2a66",
            "2a67",
            ["2a6a", "2a6c"],
            ["2a6c", "2a78"],
            "fe66",
            "ff1d"
          ],
          type: semantic_meaning_js_1.SemanticType.RELATION,
          role: semantic_meaning_js_1.SemanticRole.EQUALITY
        },
        {
          set: [
            "3c",
            "3e",
            "2241",
            "2242",
            "2244",
            "2246",
            "2247",
            "2249",
            "224f",
            "2250",
            "2260",
            "2262",
            ["2264", "2281"],
            "22b0",
            "22b1",
            ["22d6", "22e1"],
            ["22e6", "22e9"],
            ["2976", "2978"],
            "29c0",
            "29c1",
            "29e1",
            "29e3",
            "29e5",
            ["2a79", "2abc"],
            ["2af7", "2afa"],
            "fe64",
            "fe65",
            "ff1c",
            "ff1e"
          ],
          type: semantic_meaning_js_1.SemanticType.RELATION,
          role: semantic_meaning_js_1.SemanticRole.INEQUALITY
        },
        {
          set: [
            ["2282", "228b"],
            ["228f", "2292"],
            ["22b2", "22b8"],
            "22d0",
            "22d1",
            ["22e2", "22e5"],
            ["22ea", "22ed"],
            "27c3",
            "27c4",
            ["27c7", "27c9"],
            ["27d5", "27d7"],
            "27dc",
            ["2979", "297b"],
            "29df",
            ["2abd", "2ad8"]
          ],
          type: semantic_meaning_js_1.SemanticType.RELATION,
          role: semantic_meaning_js_1.SemanticRole.SET
        },
        {
          set: [
            "2236",
            ["27e0", "27e5"],
            "292b",
            "292c",
            ["29b5", "29bb"],
            "29be",
            "29bf",
            ["29c2", "29d0"]
          ],
          type: semantic_meaning_js_1.SemanticType.RELATION,
          role: semantic_meaning_js_1.SemanticRole.UNKNOWN
        },
        {
          set: ["2205", ["29b0", "29b4"]],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.SETEMPTY
        },
        {
          set: ["1ab2", "221e", ["29dc", "29de"]],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.INFTY
        },
        {
          set: [
            "22a2",
            "22a3",
            ["22a6", "22af"],
            "27da",
            "27db",
            "27dd",
            "27de",
            "2ade",
            ["2ae2", "2ae6"],
            "2aec",
            "2aed"
          ],
          type: semantic_meaning_js_1.SemanticType.RELATION,
          role: semantic_meaning_js_1.SemanticRole.LOGIC
        },
        {
          set: [
            "22a4",
            "22a5",
            "22ba",
            "27d8",
            "27d9",
            "27df",
            "2adf",
            "2ae0",
            ["2ae7", "2aeb"],
            "2af1"
          ],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.LOGIC
        },
        {
          set: [
            ["2190", "21ff"],
            "2301",
            "2324",
            "238b",
            "2794",
            ["2798", "27af"],
            ["27b1", "27be"],
            ["27f0", "27ff"],
            ["2900", "292a"],
            ["292d", "2975"],
            ["297c", "297f"],
            ["2b00", "2b11"],
            ["2b30", "2b4c"],
            ["ffe9", "ffec"]
          ],
          type: semantic_meaning_js_1.SemanticType.RELATION,
          role: semantic_meaning_js_1.SemanticRole.ARROW
        },
        {
          set: ["2208", "220a", ["22f2", "22f9"], "22ff", "27d2", "2ad9"],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.ELEMENT
        },
        {
          set: ["2209"],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.NONELEMENT
        },
        {
          set: ["220b", "220d", ["22fa", "22fe"]],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.REELEMENT
        },
        {
          set: ["220c"],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.RENONELEMENT
        },
        {
          set: [
            ["220f", "2211"],
            ["22c0", "22c3"],
            ["2a00", "2a0b"],
            "2a3f",
            "2afc",
            "2aff"
          ],
          type: semantic_meaning_js_1.SemanticType.LARGEOP,
          role: semantic_meaning_js_1.SemanticRole.SUM
        },
        {
          set: ["2140"],
          type: semantic_meaning_js_1.SemanticType.LARGEOP,
          role: semantic_meaning_js_1.SemanticRole.SUM,
          font: semantic_meaning_js_1.SemanticFont.DOUBLESTRUCK
        },
        {
          set: [
            ["222b", "2233"],
            ["2a0c", "2a17"],
            ["2a17", "2a1c"]
          ],
          type: semantic_meaning_js_1.SemanticType.LARGEOP,
          role: semantic_meaning_js_1.SemanticRole.INTEGRAL
        },
        {
          set: [["2500", "257F"]],
          type: semantic_meaning_js_1.SemanticType.RELATION,
          role: semantic_meaning_js_1.SemanticRole.BOX
        },
        {
          set: [["2580", "259F"]],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.BLOCK
        },
        {
          set: [
            ["25A0", "25FF"],
            ["2B12", "2B2F"],
            ["2B50", "2B59"]
          ],
          type: semantic_meaning_js_1.SemanticType.RELATION,
          role: semantic_meaning_js_1.SemanticRole.GEOMETRY
        },
        {
          set: [
            "220e",
            "2300",
            "2302",
            "2311",
            "29bd",
            "29e0",
            ["29e8", "29f3"],
            "2a1e",
            "2afe",
            "ffed",
            "ffee"
          ],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.GEOMETRY
        },
        {
          set: [
            ["221f", "2222"],
            "22be",
            "22bf",
            ["2312", "2314"],
            "237c",
            "27c0",
            ["299b", "29af"]
          ],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.GEOMETRY
        },
        {
          set: [
            "24",
            ["a2", "a5"],
            "b5",
            "2123",
            ["2125", "2127"],
            "212a",
            "212b",
            "fe69",
            "ff04",
            "ffe0",
            "ffe1",
            "ffe5",
            "ffe6"
          ],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.UNKNOWN
        },
        {
          set: [
            "a9",
            "ae",
            "210f",
            "2114",
            "2116",
            "2117",
            ["211e", "2122"],
            "212e",
            "2132",
            ["2139", "213b"],
            ["2141", "2144"],
            "214d",
            "214e",
            ["1f12a", "1f12c"],
            "1f18a"
          ],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.OTHERLETTER
        },
        {
          set: [
            "2224",
            "2226",
            "2239",
            "2307",
            "27b0",
            "27bf",
            "27c1",
            "27c2",
            "27ca",
            "27cb",
            "27cd",
            "27d0",
            "27d3",
            "27d4",
            "2981",
            "2999",
            "299a",
            "29e7",
            "29f4",
            "2a20",
            "2a21",
            "2a64",
            "2a65",
            "2a68",
            "2a69",
            "2ae1",
            ["2aee", "2af0"],
            "2af2",
            "2af3",
            "2af5",
            "2af6",
            "2afb",
            "2afd"
          ],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.UNKNOWN
        },
        {
          set: ["2605", "2606", "26aa", "26ab", ["2720", "274d"]],
          type: semantic_meaning_js_1.SemanticType.OPERATOR,
          role: semantic_meaning_js_1.SemanticRole.UNKNOWN
        },
        {
          set: [["2145", "2149"]],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.LATINLETTER,
          font: semantic_meaning_js_1.SemanticFont.DOUBLESTRUCKITALIC,
          secondary: semantic_meaning_js_1.SemanticSecondary.ALLLETTERS
        },
        {
          set: [["213c", "213f"]],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.GREEKLETTER,
          font: semantic_meaning_js_1.SemanticFont.DOUBLESTRUCK,
          secondary: semantic_meaning_js_1.SemanticSecondary.ALLLETTERS
        },
        {
          set: [
            "3d0",
            "3d7",
            "3f6",
            ["1d26", "1d2a"],
            "1d5e",
            "1d60",
            ["1d66", "1d6a"]
          ],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.GREEKLETTER,
          font: semantic_meaning_js_1.SemanticFont.NORMAL,
          secondary: semantic_meaning_js_1.SemanticSecondary.ALLLETTERS
        },
        {
          set: [["2135", "2138"]],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.OTHERLETTER,
          font: semantic_meaning_js_1.SemanticFont.NORMAL,
          secondary: semantic_meaning_js_1.SemanticSecondary.ALLLETTERS
        },
        {
          set: ["131", "237"],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.LATINLETTER,
          font: semantic_meaning_js_1.SemanticFont.NORMAL
        },
        {
          set: ["1d6a4", "1d6a5"],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.LATINLETTER,
          font: semantic_meaning_js_1.SemanticFont.ITALIC
        },
        {
          set: ["2113", "2118"],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.LATINLETTER,
          font: semantic_meaning_js_1.SemanticFont.SCRIPT
        },
        {
          set: [
            ["c0", "d6"],
            ["d8", "f6"],
            ["f8", "1bf"],
            ["1c4", "2af"],
            ["1d00", "1d25"],
            ["1d6b", "1d9a"],
            ["1e00", "1ef9"],
            ["363", "36f"],
            ["1dd3", "1de6"],
            ["1d62", "1d65"],
            "1dca",
            "2071",
            "207f",
            ["2090", "209c"],
            "2c7c"
          ],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.LATINLETTER,
          font: semantic_meaning_js_1.SemanticFont.NORMAL
        },
        {
          set: [["00bc", "00be"], ["2150", "215f"], "2189"],
          type: semantic_meaning_js_1.SemanticType.NUMBER,
          role: semantic_meaning_js_1.SemanticRole.FLOAT
        },
        {
          set: ["23E8", ["3248", "324f"]],
          type: semantic_meaning_js_1.SemanticType.NUMBER,
          role: semantic_meaning_js_1.SemanticRole.INTEGER
        },
        {
          set: [["214A", "214C"], "2705", "2713", "2714", "2717", "2718"],
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.UNKNOWN
        },
        {
          set: [
            "20",
            "a0",
            "ad",
            ["2000", "200f"],
            ["2028", "202f"],
            ["205f", "2060"],
            "206a",
            "206b",
            "206e",
            "206f",
            "feff",
            ["fff9", "fffb"]
          ],
          type: semantic_meaning_js_1.SemanticType.TEXT,
          role: semantic_meaning_js_1.SemanticRole.SPACE
        },
        {
          set: [
            "7c",
            "a6",
            "2223",
            "23b8",
            "23b9",
            "23d0",
            "2758",
            ["fe31", "fe34"],
            "ff5c",
            "ffe4",
            "ffe8"
          ],
          type: semantic_meaning_js_1.SemanticType.FENCE,
          role: semantic_meaning_js_1.SemanticRole.NEUTRAL
        },
        {
          set: ["2016", "2225", "2980", "2af4"],
          type: semantic_meaning_js_1.SemanticType.FENCE,
          role: semantic_meaning_js_1.SemanticRole.METRIC
        }
      ];
      sets.forEach((_a) => {
        var { set: s } = _a, m = __rest(_a, ["set"]);
        return addMeaning(Alphabet.makeMultiInterval(s), m);
      });
    }
    function addFences(map, ints, sep = 1) {
      const used = {};
      const codes = Alphabet.makeCodeInterval(ints);
      for (const code of codes) {
        if (used[code])
          continue;
        map.set(String.fromCodePoint(code), String.fromCodePoint(code + sep));
        used[code] = true;
        used[code + sep] = true;
      }
    }
    function initFences() {
      addFences(exports2.SemanticMap.FencesVert, [
        "23b4",
        ["23dc", "23e1"],
        ["fe35", "fe44"],
        "fe47"
      ]);
      addFences(exports2.SemanticMap.FencesHoriz, [
        "28",
        "2045",
        ["2308", "230f"],
        ["231c", "231f"],
        "2329",
        "23b0",
        ["2768", "2775"],
        "27c5",
        ["27e6", "27ef"],
        ["2983", "2998"],
        ["29d8", "29db"],
        "29fc",
        ["2e22", "2e29"],
        ["3008", "3011"],
        ["3014", "301b"],
        "fd3e",
        "fe17",
        ["fe59", "fe5e"],
        "ff08",
        "ff5f",
        "ff62"
      ]);
      addFences(exports2.SemanticMap.FencesHoriz, ["5b", "7b", "ff3b", "ff5b"], 2);
      addFences(exports2.SemanticMap.FencesHoriz, [["239b", "23a6"]], 3);
      addFences(exports2.SemanticMap.FencesHoriz, [["23a7", "23a9"]], 4);
      addMeaning([...exports2.SemanticMap.FencesHoriz.keys()], {
        type: semantic_meaning_js_1.SemanticType.FENCE,
        role: semantic_meaning_js_1.SemanticRole.OPEN
      });
      addMeaning([...exports2.SemanticMap.FencesHoriz.values()], {
        type: semantic_meaning_js_1.SemanticType.FENCE,
        role: semantic_meaning_js_1.SemanticRole.CLOSE
      });
      addMeaning([...exports2.SemanticMap.FencesVert.keys()], {
        type: semantic_meaning_js_1.SemanticType.FENCE,
        role: semantic_meaning_js_1.SemanticRole.TOP
      });
      addMeaning([...exports2.SemanticMap.FencesVert.values()], {
        type: semantic_meaning_js_1.SemanticType.FENCE,
        role: semantic_meaning_js_1.SemanticRole.BOTTOM
      });
    }
    var trigonometricFunctions = [
      "cos",
      "cot",
      "csc",
      "sec",
      "sin",
      "tan",
      "arccos",
      "arccot",
      "arccsc",
      "arcsec",
      "arcsin",
      "arctan"
    ];
    var hyperbolicFunctions = [
      "cosh",
      "coth",
      "csch",
      "sech",
      "sinh",
      "tanh",
      "arcosh",
      "arcoth",
      "arcsch",
      "arsech",
      "arsinh",
      "artanh"
    ];
    var algebraicFunctions = ["deg", "det", "dim", "hom", "ker", "Tr"];
    var elementaryFunctions = [
      "log",
      "ln",
      "lg",
      "exp",
      "gcd",
      "lcm",
      "arg",
      "im",
      "re",
      "Pr"
    ];
    var prefixFunctions = trigonometricFunctions.concat(hyperbolicFunctions, algebraicFunctions, elementaryFunctions);
    function initFunctions() {
      addMeaning([
        "inf",
        "lim",
        "liminf",
        "limsup",
        "max",
        "min",
        "sup",
        "injlim",
        "projlim"
      ], {
        type: semantic_meaning_js_1.SemanticType.FUNCTION,
        role: semantic_meaning_js_1.SemanticRole.LIMFUNC
      });
      addMeaning(prefixFunctions, {
        type: semantic_meaning_js_1.SemanticType.FUNCTION,
        role: semantic_meaning_js_1.SemanticRole.PREFIXFUNC
      });
      addMeaning(["mod", "rem"], {
        type: semantic_meaning_js_1.SemanticType.OPERATOR,
        role: semantic_meaning_js_1.SemanticRole.PREFIXFUNC
      });
    }
    function addFunctionSemantic(base, names) {
      const meaning = exports2.SemanticMap.Meaning.get(base) || {
        type: semantic_meaning_js_1.SemanticType.FUNCTION,
        role: semantic_meaning_js_1.SemanticRole.PREFIXFUNC
      };
      addMeaning(names, meaning);
    }
    function equal(meaning1, meaning2) {
      return meaning1.type === meaning2.type && meaning1.role === meaning2.role && meaning1.font === meaning2.font;
    }
    function isMatchingFence(open, close) {
      const meaning = exports2.SemanticMap.Meaning.get(open);
      if (meaning.type !== semantic_meaning_js_1.SemanticType.FENCE) {
        return false;
      }
      if (meaning.role === semantic_meaning_js_1.SemanticRole.NEUTRAL || meaning.role === semantic_meaning_js_1.SemanticRole.METRIC) {
        return open === close;
      }
      return exports2.SemanticMap.FencesHoriz.get(open) === close || exports2.SemanticMap.FencesVert.get(open) === close;
    }
    function changeSemantics(alphabet, change) {
      for (const [pos, meaning] of Object.entries(change)) {
        const character = alphabet[pos];
        if (character !== void 0) {
          exports2.SemanticMap.Meaning.set(character, meaning);
        }
      }
    }
    function addSecondaries(alphabet, change) {
      for (const [pos, meaning] of Object.entries(change)) {
        const character = alphabet[pos];
        if (character !== void 0) {
          exports2.SemanticMap.Secondary.set(character, meaning);
        }
      }
    }
    function singleAlphabet(alphabet, type, role, font, semfont, secondaries = [], change = {}, secondary = {}) {
      const interval = Alphabet.INTERVALS.get(Alphabet.alphabetName(alphabet, font));
      if (interval) {
        interval.unicode.forEach((x) => {
          exports2.SemanticMap.Meaning.set(x, {
            type,
            role,
            font: semfont
          });
          secondaries.forEach((sec) => exports2.SemanticMap.Secondary.set(x, sec));
        });
        changeSemantics(interval.unicode, change);
        addSecondaries(interval.unicode, secondary);
      }
    }
    function initAlphabets() {
      for (const [name, font] of Object.entries(semantic_meaning_js_1.SemanticFont)) {
        const emb = !!Alphabet.Embellish[name];
        const semfont = emb ? semantic_meaning_js_1.SemanticFont.UNKNOWN : font === semantic_meaning_js_1.SemanticFont.FULLWIDTH ? semantic_meaning_js_1.SemanticFont.NORMAL : font;
        singleAlphabet(Alphabet.Base.LATINCAP, semantic_meaning_js_1.SemanticType.IDENTIFIER, semantic_meaning_js_1.SemanticRole.LATINLETTER, font, semfont, [semantic_meaning_js_1.SemanticSecondary.ALLLETTERS]);
        singleAlphabet(Alphabet.Base.LATINSMALL, semantic_meaning_js_1.SemanticType.IDENTIFIER, semantic_meaning_js_1.SemanticRole.LATINLETTER, font, semfont, [semantic_meaning_js_1.SemanticSecondary.ALLLETTERS], {}, { 3: semantic_meaning_js_1.SemanticSecondary.D });
        singleAlphabet(Alphabet.Base.GREEKCAP, semantic_meaning_js_1.SemanticType.IDENTIFIER, semantic_meaning_js_1.SemanticRole.GREEKLETTER, font, semfont, [semantic_meaning_js_1.SemanticSecondary.ALLLETTERS]);
        singleAlphabet(Alphabet.Base.GREEKSMALL, semantic_meaning_js_1.SemanticType.IDENTIFIER, semantic_meaning_js_1.SemanticRole.GREEKLETTER, font, semfont, [semantic_meaning_js_1.SemanticSecondary.ALLLETTERS], {
          0: {
            type: semantic_meaning_js_1.SemanticType.OPERATOR,
            role: semantic_meaning_js_1.SemanticRole.PREFIXOP,
            font: semfont
          },
          26: {
            type: semantic_meaning_js_1.SemanticType.OPERATOR,
            role: semantic_meaning_js_1.SemanticRole.PREFIXOP,
            font: semfont
          }
        });
        singleAlphabet(Alphabet.Base.DIGIT, semantic_meaning_js_1.SemanticType.NUMBER, semantic_meaning_js_1.SemanticRole.INTEGER, font, semfont);
      }
    }
    initMeaning();
    initFences();
    initAlphabets();
    initFunctions();
  }
});

// node_modules/speech-rule-engine/js/rule_engine/math_simple_store.js
var require_math_simple_store = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/math_simple_store.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MathSimpleStore = void 0;
    var engine_js_1 = require_engine();
    var dynamic_cstr_js_1 = require_dynamic_cstr();
    var MathSimpleStore = class _MathSimpleStore {
      constructor() {
        this.rules = /* @__PURE__ */ new Map();
      }
      static parseUnicode(num) {
        const keyValue = parseInt(num, 16);
        return String.fromCodePoint(keyValue);
      }
      static testDynamicConstraints_(dynamic, rule) {
        if (engine_js_1.Engine.getInstance().strict) {
          return rule.cstr.equal(dynamic);
        }
        return engine_js_1.Engine.getInstance().comparator.match(rule.cstr);
      }
      defineRulesFromMappings(locale, modality, mapping) {
        for (const [domain, styles] of Object.entries(mapping)) {
          for (const [style, content] of Object.entries(styles)) {
            this.defineRuleFromStrings(locale, modality, domain, style, content);
          }
        }
      }
      getRules(key) {
        let store = this.rules.get(key);
        if (!store) {
          store = [];
          this.rules.set(key, store);
        }
        return store;
      }
      defineRuleFromStrings(locale, modality, domain, style, content) {
        let store = this.getRules(locale);
        const parser = engine_js_1.Engine.getInstance().parsers[domain] || engine_js_1.Engine.getInstance().defaultParser;
        const comp = engine_js_1.Engine.getInstance().comparators[domain];
        const cstr = `${locale}.${modality}.${domain}.${style}`;
        const dynamic = parser.parse(cstr);
        const comparator = comp ? comp() : engine_js_1.Engine.getInstance().comparator;
        const oldCstr = comparator.getReference();
        comparator.setReference(dynamic);
        const rule = { cstr: dynamic, action: content };
        store = store.filter((r) => !dynamic.equal(r.cstr));
        store.push(rule);
        this.rules.set(locale, store);
        comparator.setReference(oldCstr);
      }
      lookupRule(_node, dynamic) {
        let rules = this.getRules(dynamic.getValue(dynamic_cstr_js_1.Axis.LOCALE));
        rules = rules.filter(function(rule) {
          return _MathSimpleStore.testDynamicConstraints_(dynamic, rule);
        });
        if (rules.length === 1) {
          return rules[0];
        }
        return rules.length ? rules.sort((r1, r2) => engine_js_1.Engine.getInstance().comparator.compare(r1.cstr, r2.cstr))[0] : null;
      }
    };
    exports2.MathSimpleStore = MathSimpleStore;
  }
});

// node_modules/speech-rule-engine/js/rule_engine/math_compound_store.js
var require_math_compound_store = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/math_compound_store.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.addCharacterRules = exports2.baseStores = exports2.subStores = void 0;
    exports2.changeLocale = changeLocale;
    exports2.setSiPrefixes = setSiPrefixes;
    exports2.defineRules = defineRules;
    exports2.defineRule = defineRule;
    exports2.addSymbolRules = addSymbolRules;
    exports2.addFunctionRules = addFunctionRules;
    exports2.addUnitRules = addUnitRules;
    exports2.lookupRule = lookupRule;
    exports2.lookupCategory = lookupCategory;
    exports2.lookupString = lookupString;
    exports2.enumerate = enumerate;
    exports2.reset = reset;
    var engine_js_1 = require_engine();
    var l10n_js_1 = require_l10n();
    var semantic_attr_js_1 = require_semantic_attr();
    var math_simple_store_js_1 = require_math_simple_store();
    var dynamic_cstr_js_1 = require_dynamic_cstr();
    var locale = dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.LOCALE];
    var modality = dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.MODALITY];
    function changeLocale(json) {
      if (!json["locale"] && !json["modality"]) {
        return false;
      }
      locale = json["locale"] || locale;
      modality = json["modality"] || modality;
      return true;
    }
    var siPrefixes = {};
    function setSiPrefixes(prefixes) {
      siPrefixes = prefixes;
    }
    exports2.subStores = /* @__PURE__ */ new Map();
    exports2.baseStores = /* @__PURE__ */ new Map();
    function getSubStore(base, key) {
      let store = exports2.subStores.get(key);
      if (store) {
        return store;
      }
      store = new math_simple_store_js_1.MathSimpleStore();
      store.base = exports2.baseStores.get(base);
      exports2.subStores.set(key, store);
      return store;
    }
    function completeWithBase(json) {
      const base = exports2.baseStores.get(json.key);
      if (!base) {
        return;
      }
      const names = json.names;
      Object.assign(json, base);
      if (names && base.names) {
        json.names = json.names.concat(names);
      }
    }
    function defineRules(base, str, mappings) {
      const store = getSubStore(base, str);
      store.defineRulesFromMappings(locale, modality, mappings);
    }
    function defineRule(domain, style, str, content) {
      const store = getSubStore(str, str);
      store.defineRuleFromStrings(locale, modality, domain, style, content);
    }
    function addSymbolRules(json) {
      for (const rule of json) {
        if (changeLocale(rule)) {
          continue;
        }
        const key = math_simple_store_js_1.MathSimpleStore.parseUnicode(rule["key"]);
        if (locale === "base") {
          exports2.baseStores.set(key, rule);
          continue;
        }
        defineRules(key, key, rule["mappings"]);
      }
    }
    function addCharacterRule(json) {
      if (changeLocale(json)) {
        return;
      }
      for (const [key, value] of Object.entries(json)) {
        defineRule("default", "default", key, value);
      }
    }
    var addCharacterRules = (json) => json.forEach(addCharacterRule);
    exports2.addCharacterRules = addCharacterRules;
    function addFunctionRule(json) {
      for (let j = 0, name; name = json.names[j]; j++) {
        defineRules(json.key, name, json.mappings);
      }
    }
    function addFunctionRules(json) {
      for (const rule of json) {
        if (changeLocale(rule)) {
          continue;
        }
        (0, semantic_attr_js_1.addFunctionSemantic)(rule.key, rule.names || []);
        if (locale === "base") {
          exports2.baseStores.set(rule.key, rule);
          continue;
        }
        completeWithBase(rule);
        addFunctionRule(rule);
      }
    }
    function addUnitRules(json) {
      for (const rule of json) {
        if (changeLocale(rule)) {
          continue;
        }
        rule.key += ":unit";
        if (locale === "base") {
          exports2.baseStores.set(rule.key, rule);
          continue;
        }
        completeWithBase(rule);
        if (rule.names) {
          rule.names = rule.names.map(function(name) {
            return name + ":unit";
          });
        }
        if (rule.si) {
          addSiUnitRule(rule);
        }
        addFunctionRule(rule);
      }
    }
    function addSiUnitRule(json) {
      for (const key of Object.keys(siPrefixes)) {
        const newJson = Object.assign({}, json);
        newJson.mappings = {};
        const prefix = siPrefixes[key];
        newJson["names"] = newJson["names"].map(function(name) {
          return key + name;
        });
        for (const domain of Object.keys(json["mappings"])) {
          newJson.mappings[domain] = {};
          for (const style of Object.keys(json["mappings"][domain])) {
            newJson["mappings"][domain][style] = l10n_js_1.locales[locale]().FUNCTIONS.si(prefix, json["mappings"][domain][style]);
          }
        }
        addFunctionRule(newJson);
      }
    }
    function lookupRule(node, dynamic) {
      const store = exports2.subStores.get(node);
      return store ? store.lookupRule(null, dynamic) : null;
    }
    function lookupCategory(character) {
      const store = exports2.subStores.get(character);
      return (store === null || store === void 0 ? void 0 : store.base) ? store.base.category : "";
    }
    function lookupString(text, dynamic) {
      const rule = lookupRule(text, dynamic);
      if (!rule) {
        return null;
      }
      return rule.action;
    }
    engine_js_1.Engine.getInstance().evaluator = lookupString;
    function enumerate(info = {}) {
      for (const store of exports2.subStores.values()) {
        for (const [, rules] of store.rules.entries()) {
          for (const { cstr: dynamic } of rules) {
            info = enumerate_(dynamic.getValues(), info);
          }
        }
      }
      return info;
    }
    function enumerate_(dynamic, info) {
      info = info || {};
      if (!dynamic.length) {
        return info;
      }
      info[dynamic[0]] = enumerate_(dynamic.slice(1), info[dynamic[0]]);
      return info;
    }
    function reset() {
      locale = dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.LOCALE];
      modality = dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.MODALITY];
    }
  }
});

// node_modules/speech-rule-engine/js/audio/span.js
var require_span = __commonJS({
  "node_modules/speech-rule-engine/js/audio/span.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Span = void 0;
    var Span = class _Span {
      constructor(speech, attributes) {
        this.speech = speech;
        this.attributes = attributes;
      }
      static empty() {
        return new _Span("", {});
      }
      static stringEmpty(str) {
        return new _Span(str, {});
      }
      static stringAttr(str, attr) {
        return new _Span(str, attr);
      }
      static singleton(str, def = {}) {
        return [_Span.stringAttr(str, def)];
      }
      static node(str, node, def = {}) {
        const attr = _Span.getAttributes(node);
        Object.assign(attr, def);
        return new _Span(str, attr);
      }
      static getAttributes(node) {
        const attrs = {};
        for (const attr of _Span.attributeList) {
          if (node.hasAttribute(attr)) {
            attrs[attr] = node.getAttribute(attr);
          }
        }
        return attrs;
      }
    };
    exports2.Span = Span;
    Span.attributeList = ["id", "extid"];
  }
});

// node_modules/speech-rule-engine/js/audio/auditory_description.js
var require_auditory_description = __commonJS({
  "node_modules/speech-rule-engine/js/audio/auditory_description.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AuditoryDescription = exports2.AuditoryList = exports2.AuditoryItem = void 0;
    var grammar_js_1 = require_grammar();
    var span_js_1 = require_span();
    var AuditoryItem = class {
      constructor(data = null) {
        this.data = data;
        this.prev = null;
        this.next = null;
      }
    };
    exports2.AuditoryItem = AuditoryItem;
    var AuditoryList = class extends Set {
      constructor(descrs) {
        super();
        this.annotations = [];
        this.anchor = new AuditoryItem();
        this.anchor.next = this.anchor;
        this.anchor.prev = this.anchor;
        descrs.forEach((d) => {
          const item = new AuditoryItem(d);
          if (d.annotation) {
            this.annotations.push(item);
          }
          this.push(item);
        });
      }
      first() {
        return this.empty ? null : this.anchor.next;
      }
      last() {
        return this.empty ? null : this.anchor.prev;
      }
      push(item) {
        item.next = this.anchor;
        item.prev = this.anchor.prev;
        item.prev.next = item;
        this.anchor.prev = item;
        super.add(item);
      }
      pop() {
        const item = this.last();
        if (!item) {
          return null;
        }
        this.delete(item);
        return item;
      }
      delete(item) {
        if (!this.has(item)) {
          return false;
        }
        super.delete(item);
        item.prev.next = item.next;
        item.next = item.prev;
        return true;
      }
      insertAfter(descr, item) {
        this.insertBefore(descr, item.next);
      }
      insertBefore(descr, item) {
        const nitem = new AuditoryItem(descr);
        if (!item || !this.has(item)) {
          this.push(nitem);
          return;
        }
        item.prev.next = nitem;
        nitem.prev = item.prev;
        nitem.next = item;
        item.prev = nitem;
      }
      prevText(item) {
        do {
          item = item.prev;
        } while (item !== this.anchor && !item.data.text);
        return item === this.anchor ? null : item;
      }
      *[Symbol.iterator]() {
        let current = this.anchor.next;
        while (current !== this.anchor) {
          yield current;
          current = current.next;
        }
      }
      nextText(item) {
        while (item !== this.anchor && !item.data.text) {
          item = item.next;
        }
        return item;
      }
      clear() {
        this.anchor.next = this.anchor;
        this.anchor.prev = this.anchor;
        super.clear();
      }
      empty() {
        return this.anchor.prev === this.anchor && this.anchor === this.anchor.next;
      }
      toList() {
        const result = [];
        let item = this.anchor.next;
        while (item !== this.anchor) {
          result.push(item.data);
          item = item.next;
        }
        return result;
      }
    };
    exports2.AuditoryList = AuditoryList;
    var AuditoryDescription = class _AuditoryDescription {
      static create(args, flags = {}) {
        args.text = grammar_js_1.Grammar.getInstance().apply(args.text, flags);
        return new _AuditoryDescription(args);
      }
      constructor({ context, text, userValue, annotation, attributes, personality, layout }) {
        this.context = context || "";
        this.text = text || "";
        this.userValue = userValue || "";
        this.annotation = annotation || "";
        this.attributes = attributes || {};
        this.personality = personality || {};
        this.layout = layout || "";
      }
      isEmpty() {
        return this.context.length === 0 && this.text.length === 0 && this.userValue.length === 0 && this.annotation.length === 0;
      }
      clone() {
        let personality;
        if (this.personality) {
          personality = {};
          for (const [key, val] of Object.entries(this.personality)) {
            personality[key] = val;
          }
        }
        let attributes;
        if (this.attributes) {
          attributes = {};
          for (const [key, val] of Object.entries(this.attributes)) {
            attributes[key] = val;
          }
        }
        return new _AuditoryDescription({
          context: this.context,
          text: this.text,
          userValue: this.userValue,
          annotation: this.annotation,
          personality,
          attributes,
          layout: this.layout
        });
      }
      toString() {
        return 'AuditoryDescription(context="' + this.context + '"  text="' + this.text + '"  userValue="' + this.userValue + '"  annotation="' + this.annotation + '")';
      }
      descriptionString() {
        return this.context && this.text ? this.context + " " + this.text : this.context || this.text;
      }
      descriptionSpan() {
        return span_js_1.Span.stringAttr(this.descriptionString(), this.attributes);
      }
      equals(that) {
        return this.context === that.context && this.text === that.text && this.userValue === that.userValue && this.annotation === that.annotation;
      }
    };
    exports2.AuditoryDescription = AuditoryDescription;
  }
});

// node_modules/speech-rule-engine/js/speech_rules/speech_rules.js
var require_speech_rules = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/speech_rules.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.addStore = addStore;
    exports2.getStore = getStore;
    var dynamic_cstr_js_1 = require_dynamic_cstr();
    var funcStore = /* @__PURE__ */ new Map();
    function addStore(constr, inherit, store) {
      const values = {};
      if (inherit) {
        const inherits = funcStore.get(inherit) || {};
        Object.assign(values, inherits);
      }
      funcStore.set(constr, Object.assign(values, store));
    }
    function getStore(locale, modality, domain) {
      return funcStore.get([locale, modality, domain].join(".")) || funcStore.get([dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.LOCALE], modality, domain].join(".")) || funcStore.get([dynamic_cstr_js_1.DynamicCstr.BASE_LOCALE, modality, domain].join(".")) || {};
    }
  }
});

// node_modules/speech-rule-engine/js/rule_engine/store_util.js
var require_store_util = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/store_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.nodeCounter = nodeCounter;
    exports2.pauseSeparator = pauseSeparator;
    exports2.contentIterator = contentIterator;
    var auditory_description_js_1 = require_auditory_description();
    var XpathUtil = require_xpath_util();
    var engine_js_1 = require_engine();
    function nodeCounter(nodes, context) {
      const localLength = nodes.length;
      let localCounter = 0;
      let localContext = context;
      if (!context) {
        localContext = "";
      }
      return function() {
        if (localCounter < localLength) {
          localCounter += 1;
        }
        return localContext + " " + localCounter;
      };
    }
    function pauseSeparator(_nodes, context) {
      const numeral = parseFloat(context);
      const value = isNaN(numeral) ? context : numeral;
      return function() {
        return [
          auditory_description_js_1.AuditoryDescription.create({
            text: "",
            personality: { pause: value }
          })
        ];
      };
    }
    function contentIterator(nodes, context) {
      let contentNodes;
      if (nodes.length > 0) {
        contentNodes = XpathUtil.evalXPath("../../content/*", nodes[0]);
      } else {
        contentNodes = [];
      }
      return function() {
        const content = contentNodes.shift();
        const contextDescr = context ? [auditory_description_js_1.AuditoryDescription.create({ text: context }, { translate: true })] : [];
        if (!content) {
          return contextDescr;
        }
        const descrs = engine_js_1.Engine.evaluateNode(content);
        return contextDescr.concat(descrs);
      };
    }
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_annotator.js
var require_semantic_annotator = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_annotator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticVisitor = exports2.SemanticAnnotator = void 0;
    var SemanticAnnotator = class {
      constructor(domain, name, func) {
        this.domain = domain;
        this.name = name;
        this.func = func;
        this.active = false;
      }
      annotate(node) {
        node.childNodes.forEach(this.annotate.bind(this));
        node.contentNodes.forEach(this.annotate.bind(this));
        node.addAnnotation(this.domain, this.func(node));
      }
    };
    exports2.SemanticAnnotator = SemanticAnnotator;
    var SemanticVisitor = class {
      constructor(domain, name, func, def = {}) {
        this.domain = domain;
        this.name = name;
        this.func = func;
        this.def = def;
        this.active = false;
      }
      visit(node, info) {
        let result = this.func(node, info);
        node.addAnnotation(this.domain, result[0]);
        for (let i = 0, child; child = node.childNodes[i]; i++) {
          result = this.visit(child, result[1]);
        }
        for (let i = 0, content; content = node.contentNodes[i]; i++) {
          result = this.visit(content, result[1]);
        }
        return result;
      }
    };
    exports2.SemanticVisitor = SemanticVisitor;
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_annotations.js
var require_semantic_annotations = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_annotations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.visitors = exports2.annotators = void 0;
    exports2.register = register;
    exports2.activate = activate;
    exports2.deactivate = deactivate;
    exports2.annotate = annotate;
    var semantic_annotator_js_1 = require_semantic_annotator();
    exports2.annotators = /* @__PURE__ */ new Map();
    exports2.visitors = /* @__PURE__ */ new Map();
    function register(annotator) {
      const name = annotator.domain + ":" + annotator.name;
      annotator instanceof semantic_annotator_js_1.SemanticAnnotator ? exports2.annotators.set(name, annotator) : exports2.visitors.set(name, annotator);
    }
    function activate(domain, name) {
      const key = domain + ":" + name;
      const annotator = exports2.annotators.get(key) || exports2.visitors.get(key);
      if (annotator) {
        annotator.active = true;
      }
    }
    function deactivate(domain, name) {
      const key = domain + ":" + name;
      const annotator = exports2.annotators.get(key) || exports2.visitors.get(key);
      if (annotator) {
        annotator.active = false;
      }
    }
    function annotate(node) {
      for (const annotator of exports2.annotators.values()) {
        if (annotator.active) {
          annotator.annotate(node);
        }
      }
      for (const visitor of exports2.visitors.values()) {
        if (visitor.active) {
          visitor.visit(node, Object.assign({}, visitor.def));
        }
      }
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/clearspeak_util.js
var require_clearspeak_util = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/clearspeak_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.nodeCounter = nodeCounter;
    exports2.allCellsSimple = allCellsSimple;
    exports2.isSmallVulgarFraction = isSmallVulgarFraction;
    exports2.ordinalExponent = ordinalExponent;
    exports2.nestingDepth = nestingDepth;
    exports2.matchingFences = matchingFences;
    exports2.fencedArguments = fencedArguments;
    exports2.simpleArguments = simpleArguments;
    exports2.wordOrdinal = wordOrdinal;
    var span_js_1 = require_span();
    var DomUtil = require_dom_util();
    var engine_js_1 = require_engine();
    var XpathUtil = require_xpath_util();
    var locale_js_1 = require_locale();
    var transformers_js_1 = require_transformers();
    var grammar_js_1 = require_grammar();
    var StoreUtil = require_store_util();
    var semantic_annotations_js_1 = require_semantic_annotations();
    var semantic_annotator_js_1 = require_semantic_annotator();
    var semantic_attr_js_1 = require_semantic_attr();
    var semantic_meaning_js_1 = require_semantic_meaning();
    function nodeCounter(nodes, context) {
      const split = context.split("-");
      const func = StoreUtil.nodeCounter(nodes, split[0] || "");
      const sep = split[1] || "";
      const init = split[2] || "";
      let first = true;
      return function() {
        const result = func();
        if (first) {
          first = false;
          return init + result + sep;
        } else {
          return result + sep;
        }
      };
    }
    function isSimpleExpression(node) {
      return isSimpleNumber_(node) || isSimpleLetters_(node) || isSimpleDegree_(node) || isSimpleNegative_(node) || isSimpleFunction_(node);
    }
    function isSimpleFunction_(node) {
      return node.type === semantic_meaning_js_1.SemanticType.APPL && (node.childNodes[0].role === semantic_meaning_js_1.SemanticRole.PREFIXFUNC || node.childNodes[0].role === semantic_meaning_js_1.SemanticRole.SIMPLEFUNC) && (isSimple_(node.childNodes[1]) || node.childNodes[1].type === semantic_meaning_js_1.SemanticType.FENCED && isSimple_(node.childNodes[1].childNodes[0]));
    }
    function isSimpleNegative_(node) {
      return node.type === semantic_meaning_js_1.SemanticType.PREFIXOP && node.role === semantic_meaning_js_1.SemanticRole.NEGATIVE && isSimple_(node.childNodes[0]) && node.childNodes[0].type !== semantic_meaning_js_1.SemanticType.PREFIXOP && node.childNodes[0].type !== semantic_meaning_js_1.SemanticType.APPL && node.childNodes[0].type !== semantic_meaning_js_1.SemanticType.PUNCTUATED;
    }
    function isSimpleDegree_(node) {
      return node.type === semantic_meaning_js_1.SemanticType.PUNCTUATED && node.role === semantic_meaning_js_1.SemanticRole.ENDPUNCT && node.childNodes.length === 2 && node.childNodes[1].role === semantic_meaning_js_1.SemanticRole.DEGREE && (isLetter_(node.childNodes[0]) || isNumber_(node.childNodes[0]) || node.childNodes[0].type === semantic_meaning_js_1.SemanticType.PREFIXOP && node.childNodes[0].role === semantic_meaning_js_1.SemanticRole.NEGATIVE && (isLetter_(node.childNodes[0].childNodes[0]) || isNumber_(node.childNodes[0].childNodes[0])));
    }
    function isSimpleLetters_(node) {
      return isLetter_(node) || node.type === semantic_meaning_js_1.SemanticType.INFIXOP && node.role === semantic_meaning_js_1.SemanticRole.IMPLICIT && (node.childNodes.length === 2 && (isLetter_(node.childNodes[0]) || isSimpleNumber_(node.childNodes[0])) && isLetter_(node.childNodes[1]) || node.childNodes.length === 3 && isSimpleNumber_(node.childNodes[0]) && isLetter_(node.childNodes[1]) && isLetter_(node.childNodes[2]));
    }
    function isSimple_(node) {
      return node.hasAnnotation("clearspeak", "simple");
    }
    function isLetter_(node) {
      return node.type === semantic_meaning_js_1.SemanticType.IDENTIFIER && (node.role === semantic_meaning_js_1.SemanticRole.LATINLETTER || node.role === semantic_meaning_js_1.SemanticRole.GREEKLETTER || node.role === semantic_meaning_js_1.SemanticRole.OTHERLETTER || node.role === semantic_meaning_js_1.SemanticRole.SIMPLEFUNC);
    }
    function isNumber_(node) {
      return node.type === semantic_meaning_js_1.SemanticType.NUMBER && (node.role === semantic_meaning_js_1.SemanticRole.INTEGER || node.role === semantic_meaning_js_1.SemanticRole.FLOAT);
    }
    function isSimpleNumber_(node) {
      return isNumber_(node) || isSimpleFraction_(node);
    }
    function isSimpleFraction_(node) {
      if (hasPreference("Fraction_Over") || hasPreference("Fraction_FracOver")) {
        return false;
      }
      if (node.type !== semantic_meaning_js_1.SemanticType.FRACTION || node.role !== semantic_meaning_js_1.SemanticRole.VULGAR) {
        return false;
      }
      if (hasPreference("Fraction_Ordinal")) {
        return true;
      }
      const enumerator = parseInt(node.childNodes[0].textContent, 10);
      const denominator = parseInt(node.childNodes[1].textContent, 10);
      return enumerator > 0 && enumerator < 20 && denominator > 0 && denominator < 11;
    }
    function hasPreference(pref) {
      return engine_js_1.Engine.getInstance().style === pref;
    }
    (0, semantic_annotations_js_1.register)(new semantic_annotator_js_1.SemanticAnnotator("clearspeak", "simple", function(node) {
      return isSimpleExpression(node) ? "simple" : "";
    }));
    function simpleNode(node) {
      if (!node.hasAttribute("annotation")) {
        return false;
      }
      const annotation = node.getAttribute("annotation");
      return !!/clearspeak:simple$|clearspeak:simple;/.exec(annotation);
    }
    function simpleCell_(node) {
      if (simpleNode(node)) {
        return true;
      }
      if (node.tagName !== semantic_meaning_js_1.SemanticType.SUBSCRIPT) {
        return false;
      }
      const children = node.childNodes[0].childNodes;
      const index = children[1];
      return children[0].tagName === semantic_meaning_js_1.SemanticType.IDENTIFIER && (isInteger_(index) || index.tagName === semantic_meaning_js_1.SemanticType.INFIXOP && index.hasAttribute("role") && index.getAttribute("role") === semantic_meaning_js_1.SemanticRole.IMPLICIT && allIndices_(index));
    }
    function isInteger_(node) {
      return node.tagName === semantic_meaning_js_1.SemanticType.NUMBER && node.hasAttribute("role") && node.getAttribute("role") === semantic_meaning_js_1.SemanticRole.INTEGER;
    }
    function allIndices_(node) {
      const nodes = XpathUtil.evalXPath("children/*", node);
      return nodes.every((x) => isInteger_(x) || x.tagName === semantic_meaning_js_1.SemanticType.IDENTIFIER);
    }
    function allCellsSimple(node) {
      const xpath = node.tagName === semantic_meaning_js_1.SemanticType.MATRIX ? "children/row/children/cell/children/*" : "children/line/children/*";
      const nodes = XpathUtil.evalXPath(xpath, node);
      const result = nodes.every(simpleCell_);
      return result ? [node] : [];
    }
    function isSmallVulgarFraction(node) {
      return (0, transformers_js_1.vulgarFractionSmall)(node, 20, 11) ? [node] : [];
    }
    function isUnitExpression(node) {
      return node.type === semantic_meaning_js_1.SemanticType.TEXT && node.role !== semantic_meaning_js_1.SemanticRole.LABEL || node.type === semantic_meaning_js_1.SemanticType.PUNCTUATED && node.role === semantic_meaning_js_1.SemanticRole.TEXT && isNumber_(node.childNodes[0]) && allTextLastContent_(node.childNodes.slice(1)) || node.type === semantic_meaning_js_1.SemanticType.IDENTIFIER && node.role === semantic_meaning_js_1.SemanticRole.UNIT || node.type === semantic_meaning_js_1.SemanticType.INFIXOP && (node.role === semantic_meaning_js_1.SemanticRole.IMPLICIT || node.role === semantic_meaning_js_1.SemanticRole.UNIT);
    }
    function allTextLastContent_(nodes) {
      for (let i = 0; i < nodes.length - 1; i++) {
        if (!(nodes[i].type === semantic_meaning_js_1.SemanticType.TEXT && nodes[i].textContent === "")) {
          return false;
        }
      }
      return nodes[nodes.length - 1].type === semantic_meaning_js_1.SemanticType.TEXT;
    }
    (0, semantic_annotations_js_1.register)(new semantic_annotator_js_1.SemanticAnnotator("clearspeak", "unit", function(node) {
      return isUnitExpression(node) ? "unit" : "";
    }));
    function ordinalExponent(node) {
      const num = parseInt(node.textContent, 10);
      return [
        span_js_1.Span.stringEmpty(isNaN(num) ? node.textContent : num > 10 ? locale_js_1.LOCALE.NUMBERS.numericOrdinal(num) : locale_js_1.LOCALE.NUMBERS.wordOrdinal(num))
      ];
    }
    var NESTING_DEPTH = null;
    function nestingDepth(node) {
      let count = 0;
      const fence = node.textContent;
      const index = node.getAttribute("role") === "open" ? 0 : 1;
      let parent = node.parentNode;
      while (parent) {
        if (parent.tagName === semantic_meaning_js_1.SemanticType.FENCED && parent.childNodes[0].childNodes[index].textContent === fence) {
          count++;
        }
        parent = parent.parentNode;
      }
      NESTING_DEPTH = count > 1 ? locale_js_1.LOCALE.NUMBERS.wordOrdinal(count) : "";
      return [span_js_1.Span.stringEmpty(NESTING_DEPTH)];
    }
    function matchingFences(node) {
      const sibling = node.previousSibling;
      let left, right;
      if (sibling) {
        left = sibling;
        right = node;
      } else {
        left = node;
        right = node.nextSibling;
      }
      if (!right) {
        return [];
      }
      return (0, semantic_attr_js_1.isMatchingFence)(left.textContent, right.textContent) ? [node] : [];
    }
    function insertNesting(text, correction) {
      if (!correction || !text) {
        return text;
      }
      const start = text.match(/^(open|close) /);
      if (!start) {
        return correction + " " + text;
      }
      return start[0] + correction + " " + text.substring(start[0].length);
    }
    grammar_js_1.Grammar.getInstance().setCorrection("insertNesting", insertNesting);
    function fencedArguments(node) {
      const content = DomUtil.toArray(node.parentNode.childNodes);
      const children = XpathUtil.evalXPath("../../children/*", node);
      const index = content.indexOf(node);
      return fencedFactor_(children[index]) || fencedFactor_(children[index + 1]) ? [node] : [];
    }
    function simpleArguments(node) {
      const content = DomUtil.toArray(node.parentNode.childNodes);
      const children = XpathUtil.evalXPath("../../children/*", node);
      const index = content.indexOf(node);
      return simpleFactor_(children[index]) && children[index + 1] && (simpleFactor_(children[index + 1]) || children[index + 1].tagName === semantic_meaning_js_1.SemanticType.ROOT || children[index + 1].tagName === semantic_meaning_js_1.SemanticType.SQRT || children[index + 1].tagName === semantic_meaning_js_1.SemanticType.SUPERSCRIPT && children[index + 1].childNodes[0].childNodes[0] && (children[index + 1].childNodes[0].childNodes[0].tagName === semantic_meaning_js_1.SemanticType.NUMBER || children[index + 1].childNodes[0].childNodes[0].tagName === semantic_meaning_js_1.SemanticType.IDENTIFIER) && (children[index + 1].childNodes[0].childNodes[1].textContent === "2" || children[index + 1].childNodes[0].childNodes[1].textContent === "3")) ? [node] : [];
    }
    function simpleFactor_(node) {
      return !!node && (node.tagName === semantic_meaning_js_1.SemanticType.NUMBER || node.tagName === semantic_meaning_js_1.SemanticType.IDENTIFIER || node.tagName === semantic_meaning_js_1.SemanticType.FUNCTION || node.tagName === semantic_meaning_js_1.SemanticType.APPL || node.tagName === semantic_meaning_js_1.SemanticType.FRACTION);
    }
    function fencedFactor_(node) {
      return node && (node.tagName === semantic_meaning_js_1.SemanticType.FENCED || node.hasAttribute("role") && node.getAttribute("role") === semantic_meaning_js_1.SemanticRole.LEFTRIGHT || layoutFactor_(node));
    }
    function layoutFactor_(node) {
      return !!node && (node.tagName === semantic_meaning_js_1.SemanticType.MATRIX || node.tagName === semantic_meaning_js_1.SemanticType.VECTOR);
    }
    function wordOrdinal(node) {
      return [
        span_js_1.Span.stringEmpty(locale_js_1.LOCALE.NUMBERS.wordOrdinal(parseInt(node.textContent, 10)))
      ];
    }
  }
});

// node_modules/speech-rule-engine/js/common/base_util.js
var require_base_util = __commonJS({
  "node_modules/speech-rule-engine/js/common/base_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.removeEmpty = removeEmpty;
    exports2.interleaveLists = interleaveLists;
    exports2.setdifference = setdifference;
    function removeEmpty(strs) {
      return strs.filter((str) => str);
    }
    function interleaveLists(list1, list2) {
      const result = [];
      while (list1.length || list2.length) {
        if (list1.length) {
          result.push(list1.shift());
        }
        if (list2.length) {
          result.push(list2.shift());
        }
      }
      return result;
    }
    function setdifference(a, b) {
      if (!a) {
        return [];
      }
      if (!b) {
        return a;
      }
      return a.filter((x) => b.indexOf(x) < 0);
    }
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_heuristic_factory.js
var require_semantic_heuristic_factory = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_heuristic_factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticHeuristics = void 0;
    exports2.SemanticHeuristics = {
      factory: null,
      updateFactory: function(nodeFactory) {
        exports2.SemanticHeuristics.factory = nodeFactory;
      },
      heuristics: /* @__PURE__ */ new Map(),
      flags: {
        combine_juxtaposition: true,
        convert_juxtaposition: true,
        multioperator: true
      },
      blacklist: {},
      add: function(heuristic) {
        const name = heuristic.name;
        exports2.SemanticHeuristics.heuristics.set(name, heuristic);
        if (!exports2.SemanticHeuristics.flags[name]) {
          exports2.SemanticHeuristics.flags[name] = false;
        }
      },
      run: function(name, root, opt_alternative) {
        const heuristic = exports2.SemanticHeuristics.heuristics.get(name);
        return heuristic && !exports2.SemanticHeuristics.blacklist[name] && (exports2.SemanticHeuristics.flags[name] || heuristic.applicable(root)) ? heuristic.apply(root) : opt_alternative ? opt_alternative(root) : root;
      }
    };
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_ordering.js
var require_semantic_ordering = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_ordering.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.reduce = reduce;
    var semantic_meaning_js_1 = require_semantic_meaning();
    var comparators = [];
    function add(comparator) {
      comparators.push(comparator);
    }
    function apply(meaning1, meaning2) {
      for (let i = 0, comparator; comparator = comparators[i]; i++) {
        const result = comparator.compare(meaning1, meaning2);
        if (result !== 0) {
          return result;
        }
      }
      return 0;
    }
    function sort(meanings) {
      meanings.sort(apply);
    }
    function reduce(meanings) {
      if (meanings.length <= 1) {
        return meanings;
      }
      const copy = meanings.slice();
      sort(copy);
      const result = [];
      let last;
      do {
        last = copy.pop();
        result.push(last);
      } while (last && copy.length && apply(copy[copy.length - 1], last) === 0);
      return result;
    }
    var SemanticComparator = class {
      constructor(comparator, type = null) {
        this.comparator = comparator;
        this.type = type;
        add(this);
      }
      compare(meaning1, meaning2) {
        return this.type && this.type === meaning1.type && this.type === meaning2.type ? this.comparator(meaning1, meaning2) : 0;
      }
    };
    function simpleFunction(meaning1, meaning2) {
      if (meaning1.role === semantic_meaning_js_1.SemanticRole.SIMPLEFUNC) {
        return 1;
      }
      if (meaning2.role === semantic_meaning_js_1.SemanticRole.SIMPLEFUNC) {
        return -1;
      }
      return 0;
    }
    new SemanticComparator(simpleFunction, semantic_meaning_js_1.SemanticType.IDENTIFIER);
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_default.js
var require_semantic_default = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_default.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticMeaningCollator = exports2.SemanticNodeCollator = exports2.SemanticDefault = void 0;
    var SemanticAttr = require_semantic_attr();
    var semantic_ordering_js_1 = require_semantic_ordering();
    function key(symbol, font) {
      return symbol.match(/^.+:.+$/) || !font ? symbol : symbol + ":" + font;
    }
    var SemanticDefault = class extends Map {
      set(symbol, meaning) {
        super.set(key(symbol, meaning.font), meaning);
        return this;
      }
      setNode(node) {
        this.set(node.textContent, node.meaning());
      }
      get(symbol, font = null) {
        return super.get(key(symbol, font));
      }
      getNode(node) {
        return this.get(node.textContent, node.font);
      }
    };
    exports2.SemanticDefault = SemanticDefault;
    var SemanticCollator = class extends Map {
      add(symbol, entry) {
        const list = this.get(symbol);
        if (list) {
          list.push(entry);
        } else {
          super.set(symbol, [entry]);
        }
      }
      get(symbol, font = null) {
        return super.get(key(symbol, font));
      }
      getNode(node) {
        return this.get(node.textContent, node.font);
      }
      minimize() {
        for (const [key2, entry] of this) {
          if (entry.length === 1) {
            this.delete(key2);
          }
        }
      }
      isMultiValued() {
        for (const value of this.values()) {
          if (value.length > 1) {
            return true;
          }
        }
        return false;
      }
    };
    var SemanticNodeCollator = class extends SemanticCollator {
      add(symbol, entry) {
        super.add(key(symbol, entry.font), entry);
      }
      addNode(node) {
        this.add(node.textContent, node);
      }
      toString() {
        const outer = [];
        for (const [key2, nodes] of this) {
          const length = Array(key2.length + 3).join(" ");
          const inner = nodes.map((node) => node.toString()).join("\n" + length);
          outer.push(key2 + ": " + inner);
        }
        return outer.join("\n");
      }
      collateMeaning() {
        const collator = new SemanticMeaningCollator();
        for (const [key2, val] of this) {
          collator.set(key2, val.map((node) => node.meaning()));
        }
        return collator;
      }
    };
    exports2.SemanticNodeCollator = SemanticNodeCollator;
    var SemanticMeaningCollator = class extends SemanticCollator {
      add(symbol, entry) {
        const list = this.get(symbol, entry.font);
        if (!list || !list.find(function(x) {
          return SemanticAttr.equal(x, entry);
        })) {
          super.add(key(symbol, entry.font), entry);
        }
      }
      addNode(node) {
        this.add(node.textContent, node.meaning());
      }
      toString() {
        const outer = [];
        for (const [key2, nodes] of this) {
          const length = Array(key2.length + 3).join(" ");
          const inner = nodes.map((node) => `{type: ${node.type}, role: ${node.role}, font: ${node.font}}`).join("\n" + length);
          outer.push(key2 + ": " + inner);
        }
        return outer.join("\n");
      }
      reduce() {
        for (const [key2, val] of this) {
          if (val.length !== 1) {
            this.set(key2, (0, semantic_ordering_js_1.reduce)(val));
          }
        }
      }
      default() {
        const def = new SemanticDefault();
        for (const [key2, val] of this) {
          if (val.length === 1) {
            def.set(key2, val[0]);
          }
        }
        return def;
      }
      newDefault() {
        const oldDefault = this.default();
        this.reduce();
        const newDefault = this.default();
        return oldDefault.size !== newDefault.size ? newDefault : null;
      }
    };
    exports2.SemanticMeaningCollator = SemanticMeaningCollator;
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_util.js
var require_semantic_util = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MMLTAGS = void 0;
    exports2.hasMathTag = hasMathTag;
    exports2.hasIgnoreTag = hasIgnoreTag;
    exports2.hasEmptyTag = hasEmptyTag;
    exports2.hasDisplayTag = hasDisplayTag;
    exports2.isOrphanedGlyph = isOrphanedGlyph;
    exports2.purgeNodes = purgeNodes;
    exports2.isZeroLength = isZeroLength;
    exports2.addAttributes = addAttributes;
    exports2.getEmbellishedInner = getEmbellishedInner;
    exports2.sliceNodes = sliceNodes;
    exports2.partitionNodes = partitionNodes;
    var DomUtil = require_dom_util();
    var MMLTAGS;
    (function(MMLTAGS2) {
      MMLTAGS2["ANNOTATION"] = "ANNOTATION";
      MMLTAGS2["ANNOTATIONXML"] = "ANNOTATION-XML";
      MMLTAGS2["MACTION"] = "MACTION";
      MMLTAGS2["MALIGNGROUP"] = "MALIGNGROUP";
      MMLTAGS2["MALIGNMARK"] = "MALIGNMARK";
      MMLTAGS2["MATH"] = "MATH";
      MMLTAGS2["MENCLOSE"] = "MENCLOSE";
      MMLTAGS2["MERROR"] = "MERROR";
      MMLTAGS2["MFENCED"] = "MFENCED";
      MMLTAGS2["MFRAC"] = "MFRAC";
      MMLTAGS2["MGLYPH"] = "MGLYPH";
      MMLTAGS2["MI"] = "MI";
      MMLTAGS2["MLABELEDTR"] = "MLABELEDTR";
      MMLTAGS2["MMULTISCRIPTS"] = "MMULTISCRIPTS";
      MMLTAGS2["MN"] = "MN";
      MMLTAGS2["MO"] = "MO";
      MMLTAGS2["MOVER"] = "MOVER";
      MMLTAGS2["MPADDED"] = "MPADDED";
      MMLTAGS2["MPHANTOM"] = "MPHANTOM";
      MMLTAGS2["MPRESCRIPTS"] = "MPRESCRIPTS";
      MMLTAGS2["MROOT"] = "MROOT";
      MMLTAGS2["MROW"] = "MROW";
      MMLTAGS2["MS"] = "MS";
      MMLTAGS2["MSPACE"] = "MSPACE";
      MMLTAGS2["MSQRT"] = "MSQRT";
      MMLTAGS2["MSTYLE"] = "MSTYLE";
      MMLTAGS2["MSUB"] = "MSUB";
      MMLTAGS2["MSUBSUP"] = "MSUBSUP";
      MMLTAGS2["MSUP"] = "MSUP";
      MMLTAGS2["MTABLE"] = "MTABLE";
      MMLTAGS2["MTD"] = "MTD";
      MMLTAGS2["MTEXT"] = "MTEXT";
      MMLTAGS2["MTR"] = "MTR";
      MMLTAGS2["MUNDER"] = "MUNDER";
      MMLTAGS2["MUNDEROVER"] = "MUNDEROVER";
      MMLTAGS2["NONE"] = "NONE";
      MMLTAGS2["SEMANTICS"] = "SEMANTICS";
    })(MMLTAGS || (exports2.MMLTAGS = MMLTAGS = {}));
    var ALLTAGS = Object.values(MMLTAGS);
    var LEAFTAGS = [
      MMLTAGS.MO,
      MMLTAGS.MI,
      MMLTAGS.MN,
      MMLTAGS.MTEXT,
      MMLTAGS.MS,
      MMLTAGS.MSPACE
    ];
    var IGNORETAGS = [
      MMLTAGS.MERROR,
      MMLTAGS.MPHANTOM,
      MMLTAGS.MALIGNGROUP,
      MMLTAGS.MALIGNMARK,
      MMLTAGS.MPRESCRIPTS,
      MMLTAGS.ANNOTATION,
      MMLTAGS.ANNOTATIONXML
    ];
    var EMPTYTAGS = [
      MMLTAGS.MATH,
      MMLTAGS.MROW,
      MMLTAGS.MPADDED,
      MMLTAGS.MACTION,
      MMLTAGS.NONE,
      MMLTAGS.MSTYLE,
      MMLTAGS.SEMANTICS
    ];
    var DISPLAYTAGS = [MMLTAGS.MROOT, MMLTAGS.MSQRT];
    var directSpeechKeys = ["aria-label", "exact-speech", "alt"];
    function hasMathTag(node) {
      return !!node && DomUtil.tagName(node) === MMLTAGS.MATH;
    }
    function hasLeafTag(node) {
      return !!node && LEAFTAGS.includes(DomUtil.tagName(node));
    }
    function hasIgnoreTag(node) {
      return !!node && (IGNORETAGS.includes(DomUtil.tagName(node)) || !ALLTAGS.includes(DomUtil.tagName(node)));
    }
    function hasEmptyTag(node) {
      return !!node && EMPTYTAGS.includes(DomUtil.tagName(node));
    }
    function hasDisplayTag(node) {
      return !!node && DISPLAYTAGS.includes(DomUtil.tagName(node));
    }
    function isOrphanedGlyph(node) {
      return !!node && DomUtil.tagName(node) === MMLTAGS.MGLYPH && !hasLeafTag(node.parentNode);
    }
    function purgeNodes(nodes) {
      const nodeArray = [];
      for (let i = 0, node; node = nodes[i]; i++) {
        if (node.nodeType !== DomUtil.NodeType.ELEMENT_NODE) {
          continue;
        }
        const tagName = DomUtil.tagName(node);
        if (IGNORETAGS.includes(tagName)) {
          continue;
        }
        if (EMPTYTAGS.includes(tagName) && node.childNodes.length === 0) {
          continue;
        }
        nodeArray.push(node);
      }
      return nodeArray;
    }
    function isZeroLength(length) {
      if (!length) {
        return false;
      }
      const negativeNamedSpaces = [
        "negativeveryverythinmathspace",
        "negativeverythinmathspace",
        "negativethinmathspace",
        "negativemediummathspace",
        "negativethickmathspace",
        "negativeverythickmathspace",
        "negativeveryverythickmathspace"
      ];
      if (negativeNamedSpaces.includes(length)) {
        return true;
      }
      const value = length.match(/[0-9.]+/);
      if (!value) {
        return false;
      }
      return parseFloat(value[0]) === 0;
    }
    function addAttributes(to, from) {
      if (from.hasAttributes()) {
        const attrs = from.attributes;
        for (let i = attrs.length - 1; i >= 0; i--) {
          const key = attrs[i].name;
          if (key.match(/^ext/)) {
            to.attributes[key] = attrs[i].value;
            to.nobreaking = true;
          }
          if (directSpeechKeys.includes(key)) {
            to.attributes["ext-speech"] = attrs[i].value;
            to.nobreaking = true;
          }
          if (key.match(/texclass$/)) {
            to.attributes["texclass"] = attrs[i].value;
          }
          if (key.toLowerCase() === "data-latex") {
            to.attributes["latex"] = attrs[i].value;
          }
          if (key === "href") {
            to.attributes["href"] = attrs[i].value;
            to.nobreaking = true;
          }
        }
      }
    }
    function getEmbellishedInner(node) {
      if (node && node.embellished && node.childNodes.length > 0) {
        return getEmbellishedInner(node.childNodes[0]);
      }
      return node;
    }
    function sliceNodes(nodes, pred, opt_reverse) {
      if (opt_reverse) {
        nodes.reverse();
      }
      const head = [];
      for (let i = 0, node; node = nodes[i]; i++) {
        if (pred(node)) {
          if (opt_reverse) {
            return {
              head: nodes.slice(i + 1).reverse(),
              div: node,
              tail: head.reverse()
            };
          }
          return { head, div: node, tail: nodes.slice(i + 1) };
        }
        head.push(node);
      }
      if (opt_reverse) {
        return { head: [], div: null, tail: head.reverse() };
      }
      return { head, div: null, tail: [] };
    }
    function partitionNodes(nodes, pred) {
      let restNodes = nodes;
      const rel = [];
      const comp = [];
      let result = null;
      do {
        result = sliceNodes(restNodes, pred);
        comp.push(result.head);
        rel.push(result.div);
        restNodes = result.tail;
      } while (result.div);
      rel.pop();
      return { rel, comp };
    }
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_node.js
var require_semantic_node = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_node.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticNode = void 0;
    var DomUtil = require_dom_util();
    var semantic_attr_js_1 = require_semantic_attr();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var SemanticUtil = require_semantic_util();
    var SemanticNode = class _SemanticNode {
      static fromXml(xml) {
        const id = parseInt(xml.getAttribute("id"), 10);
        const node = new _SemanticNode(id);
        node.type = xml.tagName;
        _SemanticNode.setAttribute(node, xml, "role");
        _SemanticNode.setAttribute(node, xml, "font");
        _SemanticNode.setAttribute(node, xml, "embellished");
        _SemanticNode.setAttribute(node, xml, "fencepointer", "fencePointer");
        if (xml.getAttribute("annotation")) {
          node.parseAnnotation(xml.getAttribute("annotation"));
        }
        SemanticUtil.addAttributes(node, xml);
        _SemanticNode.processChildren(node, xml);
        return node;
      }
      static setAttribute(node, xml, attribute, opt_name) {
        opt_name = opt_name || attribute;
        const value = xml.getAttribute(attribute);
        if (value) {
          node[opt_name] = value;
        }
      }
      static processChildren(node, xml) {
        for (const child of DomUtil.toArray(xml.childNodes)) {
          if (child.nodeType === DomUtil.NodeType.TEXT_NODE) {
            node.textContent = child.textContent;
            continue;
          }
          const children = DomUtil.toArray(child.childNodes).map(_SemanticNode.fromXml);
          children.forEach((x) => x.parent = node);
          if (DomUtil.tagName(child) === "CONTENT") {
            node.contentNodes = children;
          } else {
            node.childNodes = children;
          }
        }
      }
      constructor(id) {
        this.id = id;
        this.mathml = [];
        this.parent = null;
        this.type = semantic_meaning_js_1.SemanticType.UNKNOWN;
        this.role = semantic_meaning_js_1.SemanticRole.UNKNOWN;
        this.font = semantic_meaning_js_1.SemanticFont.UNKNOWN;
        this.embellished = null;
        this.fencePointer = "";
        this.childNodes = [];
        this.textContent = "";
        this.mathmlTree = null;
        this.contentNodes = [];
        this.annotation = {};
        this.attributes = {};
        this.nobreaking = false;
      }
      querySelectorAll(pred) {
        let result = [];
        for (let i = 0, child; child = this.childNodes[i]; i++) {
          result = result.concat(child.querySelectorAll(pred));
        }
        for (let i = 0, content; content = this.contentNodes[i]; i++) {
          result = result.concat(content.querySelectorAll(pred));
        }
        if (pred(this)) {
          result.unshift(this);
        }
        return result;
      }
      xml(xml, brief) {
        const xmlNodeList = function(tag, nodes) {
          const xmlNodes = nodes.map(function(x) {
            return x.xml(xml, brief);
          });
          const tagNode = xml.createElementNS("", tag);
          for (let i = 0, child; child = xmlNodes[i]; i++) {
            tagNode.appendChild(child);
          }
          return tagNode;
        };
        const node = xml.createElementNS("", this.type);
        if (!brief) {
          this.xmlAttributes(node);
        }
        node.textContent = this.textContent;
        if (this.contentNodes.length > 0) {
          node.appendChild(xmlNodeList("content", this.contentNodes));
        }
        if (this.childNodes.length > 0) {
          node.appendChild(xmlNodeList("children", this.childNodes));
        }
        return node;
      }
      toString(brief = false) {
        const xml = DomUtil.parseInput("<snode/>");
        return DomUtil.serializeXml(this.xml(xml.ownerDocument, brief));
      }
      allAttributes() {
        const attributes = [];
        attributes.push(["role", this.role]);
        if (this.font !== semantic_meaning_js_1.SemanticFont.UNKNOWN) {
          attributes.push(["font", this.font]);
        }
        if (Object.keys(this.annotation).length) {
          attributes.push(["annotation", this.annotationXml()]);
        }
        if (this.embellished) {
          attributes.push(["embellished", this.embellished]);
        }
        if (this.fencePointer) {
          attributes.push(["fencepointer", this.fencePointer]);
        }
        attributes.push(["id", this.id.toString()]);
        return attributes;
      }
      annotationXml() {
        const result = [];
        for (const [key, val] of Object.entries(this.annotation)) {
          val.forEach((mean) => result.push(key + ":" + mean));
        }
        return result.join(";");
      }
      attributesXml() {
        const result = [];
        for (const [key, value] of Object.entries(this.attributes)) {
          result.push(key + ":" + _SemanticNode.escapeValue(value));
        }
        return result.join(";");
      }
      toJson() {
        const json = {};
        json["type"] = this.type;
        const attributes = this.allAttributes();
        for (let i = 0, attr; attr = attributes[i]; i++) {
          json[attr[0]] = attr[1].toString();
        }
        if (this.textContent) {
          json["$t"] = this.textContent;
        }
        if (this.childNodes.length) {
          json["children"] = this.childNodes.map(function(child) {
            return child.toJson();
          });
        }
        if (this.contentNodes.length) {
          json["content"] = this.contentNodes.map(function(child) {
            return child.toJson();
          });
        }
        return json;
      }
      updateContent(content, text) {
        const newContent = text ? content.replace(/^[ \f\n\r\t\v\u200b]*/, "").replace(/[ \f\n\r\t\v\u200b]*$/, "") : content.trim();
        content = content && !newContent ? content : newContent;
        if (this.textContent === content) {
          return;
        }
        const meaning = semantic_attr_js_1.SemanticMap.Meaning.get(content.replace(/\s/g, " "));
        this.textContent = content;
        this.role = meaning.role;
        this.type = meaning.type;
        this.font = meaning.font;
      }
      addMathmlNodes(mmlNodes) {
        for (let i = 0, mml; mml = mmlNodes[i]; i++) {
          if (this.mathml.indexOf(mml) === -1) {
            this.mathml.push(mml);
          }
        }
      }
      appendChild(child) {
        this.childNodes.push(child);
        this.addMathmlNodes(child.mathml);
        child.parent = this;
      }
      replaceChild(oldNode, newNode) {
        const index = this.childNodes.indexOf(oldNode);
        if (index === -1) {
          return;
        }
        oldNode.parent = null;
        newNode.parent = this;
        this.childNodes[index] = newNode;
        const removeMathml = oldNode.mathml.filter(function(x) {
          return newNode.mathml.indexOf(x) === -1;
        });
        const addMathml = newNode.mathml.filter(function(x) {
          return oldNode.mathml.indexOf(x) === -1;
        });
        this.removeMathmlNodes(removeMathml);
        this.addMathmlNodes(addMathml);
      }
      appendContentNode(node) {
        if (node) {
          this.contentNodes.push(node);
          this.addMathmlNodes(node.mathml);
          node.parent = this;
        }
      }
      removeContentNode(node) {
        if (node) {
          const index = this.contentNodes.indexOf(node);
          if (index !== -1) {
            this.contentNodes.slice(index, 1);
          }
        }
      }
      equals(node) {
        if (!node) {
          return false;
        }
        if (this.type !== node.type || this.role !== node.role || this.textContent !== node.textContent || this.childNodes.length !== node.childNodes.length || this.contentNodes.length !== node.contentNodes.length) {
          return false;
        }
        for (let i = 0, node1, node2; node1 = this.childNodes[i], node2 = node.childNodes[i]; i++) {
          if (!node1.equals(node2)) {
            return false;
          }
        }
        for (let i = 0, node1, node2; node1 = this.contentNodes[i], node2 = node.contentNodes[i]; i++) {
          if (!node1.equals(node2)) {
            return false;
          }
        }
        return true;
      }
      displayTree() {
        console.info(this.displayTree_(0));
      }
      addAnnotation(domain, annotation) {
        if (annotation) {
          this.addAnnotation_(domain, annotation);
        }
      }
      getAnnotation(domain) {
        const content = this.annotation[domain];
        return content ? content : [];
      }
      hasAnnotation(domain, annotation) {
        const content = this.annotation[domain];
        if (!content) {
          return false;
        }
        return content.indexOf(annotation) !== -1;
      }
      parseAnnotation(stateStr) {
        const annotations = stateStr.split(";");
        for (let i = 0, l = annotations.length; i < l; i++) {
          const annotation = annotations[i].split(":");
          this.addAnnotation(annotation[0], annotation[1]);
        }
      }
      meaning() {
        return { type: this.type, role: this.role, font: this.font };
      }
      xmlAttributes(node) {
        const attributes = this.allAttributes();
        for (let i = 0, attr; attr = attributes[i]; i++) {
          node.setAttribute(attr[0], attr[1]);
        }
        this.addExternalAttributes(node);
      }
      addExternalAttributes(node) {
        for (const [attr, val] of Object.entries(this.attributes)) {
          node.setAttribute(attr, val);
        }
      }
      static escapeValue(value) {
        return value.replace(/;/g, "\\0003B");
      }
      parseAttributes(stateStr) {
        if (!stateStr)
          return;
        const attributes = stateStr.split(";");
        for (let i = 0, l = attributes.length; i < l; i++) {
          const [key, ...values] = attributes[i].split(":");
          if (key) {
            this.attributes[key] = values.join("").replace(/\\0003B/g, ";");
          }
        }
      }
      removeMathmlNodes(mmlNodes) {
        const mmlList = this.mathml;
        for (let i = 0, mml; mml = mmlNodes[i]; i++) {
          const index = mmlList.indexOf(mml);
          if (index !== -1) {
            mmlList.splice(index, 1);
          }
        }
        this.mathml = mmlList;
      }
      displayTree_(depth) {
        depth++;
        const depthString = Array(depth).join("  ");
        let result = "";
        result += "\n" + depthString + this.toString();
        result += "\n" + depthString + "MathmlTree:";
        result += "\n" + depthString + this.mathmlTreeString();
        result += "\n" + depthString + "MathML:";
        for (let i = 0, mml; mml = this.mathml[i]; i++) {
          result += "\n" + depthString + mml.toString();
        }
        result += "\n" + depthString + "Begin Content";
        this.contentNodes.forEach(function(x) {
          result += x.displayTree_(depth);
        });
        result += "\n" + depthString + "End Content";
        result += "\n" + depthString + "Begin Children";
        this.childNodes.forEach(function(x) {
          result += x.displayTree_(depth);
        });
        result += "\n" + depthString + "End Children";
        return result;
      }
      mathmlTreeString() {
        return this.mathmlTree ? this.mathmlTree.toString() : "EMPTY";
      }
      addAnnotation_(domain, annotation) {
        const content = this.annotation[domain];
        if (content && !content.includes(annotation)) {
          content.push(annotation);
        } else {
          this.annotation[domain] = [annotation];
        }
      }
    };
    exports2.SemanticNode = SemanticNode;
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_node_factory.js
var require_semantic_node_factory = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_node_factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticNodeFactory = void 0;
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_default_js_1 = require_semantic_default();
    var semantic_default_js_2 = require_semantic_default();
    var semantic_node_js_1 = require_semantic_node();
    var SemanticNodeFactory = class {
      constructor() {
        this.leafMap = new semantic_default_js_2.SemanticNodeCollator();
        this.defaultMap = new semantic_default_js_1.SemanticDefault();
        this.idCounter_ = -1;
      }
      makeNode(id) {
        return this.createNode_(id);
      }
      makeUnprocessed(mml) {
        const node = this.createNode_();
        node.mathml = [mml];
        node.mathmlTree = mml;
        return node;
      }
      makeEmptyNode() {
        const node = this.createNode_();
        node.type = semantic_meaning_js_1.SemanticType.EMPTY;
        return node;
      }
      makeContentNode(content) {
        const node = this.createNode_();
        node.updateContent(content);
        return node;
      }
      makeMultipleContentNodes(num, content) {
        const nodes = [];
        for (let i = 0; i < num; i++) {
          nodes.push(this.makeContentNode(content));
        }
        return nodes;
      }
      makeLeafNode(content, font) {
        if (!content) {
          return this.makeEmptyNode();
        }
        const node = this.makeContentNode(content);
        node.font = font || node.font;
        const meaning = this.defaultMap.getNode(node);
        if (meaning) {
          node.type = meaning.type;
          node.role = meaning.role;
          node.font = meaning.font;
        }
        this.leafMap.addNode(node);
        return node;
      }
      makeBranchNode(type, children, contentNodes, opt_content) {
        const node = this.createNode_();
        if (opt_content) {
          node.updateContent(opt_content);
        }
        node.type = type;
        node.childNodes = children;
        node.contentNodes = contentNodes;
        children.concat(contentNodes).forEach(function(x) {
          x.parent = node;
          node.addMathmlNodes(x.mathml);
        });
        return node;
      }
      createNode_(id) {
        if (typeof id !== "undefined") {
          this.idCounter_ = Math.max(this.idCounter_, id);
        } else {
          id = ++this.idCounter_;
        }
        return new semantic_node_js_1.SemanticNode(id);
      }
    };
    exports2.SemanticNodeFactory = SemanticNodeFactory;
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_pred.js
var require_semantic_pred = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_pred.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isType = isType;
    exports2.isRole = isRole;
    exports2.isAccent = isAccent;
    exports2.isSimpleFunctionScope = isSimpleFunctionScope;
    exports2.isPrefixFunctionBoundary = isPrefixFunctionBoundary;
    exports2.isBigOpBoundary = isBigOpBoundary;
    exports2.isIntegralDxBoundary = isIntegralDxBoundary;
    exports2.isIntegralDxBoundarySingle = isIntegralDxBoundarySingle;
    exports2.isGeneralFunctionBoundary = isGeneralFunctionBoundary;
    exports2.isEmbellished = isEmbellished;
    exports2.isOperator = isOperator;
    exports2.isRelation = isRelation;
    exports2.isPunctuation = isPunctuation;
    exports2.isFence = isFence;
    exports2.isElligibleEmbellishedFence = isElligibleEmbellishedFence;
    exports2.isTableOrMultiline = isTableOrMultiline;
    exports2.tableIsMatrixOrVector = tableIsMatrixOrVector;
    exports2.isFencedElement = isFencedElement;
    exports2.tableIsCases = tableIsCases;
    exports2.tableIsMultiline = tableIsMultiline;
    exports2.lineIsLabelled = lineIsLabelled;
    exports2.isBinomial = isBinomial;
    exports2.isLimitBase = isLimitBase;
    exports2.isSimpleFunctionHead = isSimpleFunctionHead;
    exports2.singlePunctAtPosition = singlePunctAtPosition;
    exports2.isSimpleFunction = isSimpleFunction;
    exports2.isSetNode = isSetNode;
    exports2.isSingletonSetContent = isSingletonSetContent;
    exports2.isUnitCounter = isUnitCounter;
    exports2.isPureUnit = isPureUnit;
    exports2.isUnitProduct = isUnitProduct;
    exports2.isImplicit = isImplicit;
    exports2.isImplicitOp = isImplicitOp;
    exports2.isNeutralFence = isNeutralFence;
    exports2.compareNeutralFences = compareNeutralFences;
    exports2.elligibleLeftNeutral = elligibleLeftNeutral;
    exports2.elligibleRightNeutral = elligibleRightNeutral;
    exports2.isMembership = isMembership;
    var semantic_attr_js_1 = require_semantic_attr();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_util_js_1 = require_semantic_util();
    function isType(node, attr) {
      return node.type === attr;
    }
    function embellishedType(node, attr) {
      return node.embellished === attr;
    }
    function isRole(node, attr) {
      return node.role === attr;
    }
    function isAccent(node) {
      return isType(node, semantic_meaning_js_1.SemanticType.FENCE) || isType(node, semantic_meaning_js_1.SemanticType.PUNCTUATION) || isType(node, semantic_meaning_js_1.SemanticType.OPERATOR) || isType(node, semantic_meaning_js_1.SemanticType.RELATION);
    }
    function isSimpleFunctionScope(node) {
      const children = node.childNodes;
      if (children.length === 0) {
        return true;
      }
      if (children.length > 1) {
        return false;
      }
      const child = children[0];
      if (child.type === semantic_meaning_js_1.SemanticType.INFIXOP) {
        if (child.role !== semantic_meaning_js_1.SemanticRole.IMPLICIT) {
          return false;
        }
        if (child.childNodes.some((x) => isType(x, semantic_meaning_js_1.SemanticType.INFIXOP))) {
          return false;
        }
      }
      return true;
    }
    function isPrefixFunctionBoundary(node) {
      return isOperator(node) && !isRole(node, semantic_meaning_js_1.SemanticRole.DIVISION) || isType(node, semantic_meaning_js_1.SemanticType.APPL) || isGeneralFunctionBoundary(node);
    }
    function isBigOpBoundary(node) {
      return isOperator(node) || isGeneralFunctionBoundary(node);
    }
    function isIntegralDxBoundary(firstNode, secondNode) {
      return !!secondNode && isType(secondNode, semantic_meaning_js_1.SemanticType.IDENTIFIER) && semantic_attr_js_1.SemanticMap.Secondary.has(firstNode.textContent, semantic_meaning_js_1.SemanticSecondary.D);
    }
    function isIntegralDxBoundarySingle(node) {
      if (isType(node, semantic_meaning_js_1.SemanticType.IDENTIFIER)) {
        const firstChar = node.textContent[0];
        return firstChar && node.textContent[1] && semantic_attr_js_1.SemanticMap.Secondary.has(firstChar, semantic_meaning_js_1.SemanticSecondary.D);
      }
      return false;
    }
    function isGeneralFunctionBoundary(node) {
      return isRelation(node) || isPunctuation(node);
    }
    function isEmbellished(node) {
      if (node.embellished) {
        return node.embellished;
      }
      if (isEmbellishedType(node.type)) {
        return node.type;
      }
      return null;
    }
    function isEmbellishedType(type) {
      return type === semantic_meaning_js_1.SemanticType.OPERATOR || type === semantic_meaning_js_1.SemanticType.RELATION || type === semantic_meaning_js_1.SemanticType.FENCE || type === semantic_meaning_js_1.SemanticType.PUNCTUATION;
    }
    function isOperator(node) {
      return isType(node, semantic_meaning_js_1.SemanticType.OPERATOR) || embellishedType(node, semantic_meaning_js_1.SemanticType.OPERATOR);
    }
    function isRelation(node) {
      return isType(node, semantic_meaning_js_1.SemanticType.RELATION) || embellishedType(node, semantic_meaning_js_1.SemanticType.RELATION);
    }
    function isPunctuation(node) {
      return isType(node, semantic_meaning_js_1.SemanticType.PUNCTUATION) || embellishedType(node, semantic_meaning_js_1.SemanticType.PUNCTUATION);
    }
    function isFence(node) {
      return isType(node, semantic_meaning_js_1.SemanticType.FENCE) || embellishedType(node, semantic_meaning_js_1.SemanticType.FENCE);
    }
    function isElligibleEmbellishedFence(node) {
      if (!node || !isFence(node)) {
        return false;
      }
      if (!node.embellished) {
        return true;
      }
      return recurseBaseNode(node);
    }
    function bothSide(node) {
      return isType(node, semantic_meaning_js_1.SemanticType.TENSOR) && (!isType(node.childNodes[1], semantic_meaning_js_1.SemanticType.EMPTY) || !isType(node.childNodes[2], semantic_meaning_js_1.SemanticType.EMPTY)) && (!isType(node.childNodes[3], semantic_meaning_js_1.SemanticType.EMPTY) || !isType(node.childNodes[4], semantic_meaning_js_1.SemanticType.EMPTY));
    }
    function recurseBaseNode(node) {
      if (!node.embellished) {
        return true;
      }
      if (bothSide(node)) {
        return false;
      }
      if (isRole(node, semantic_meaning_js_1.SemanticRole.CLOSE) && isType(node, semantic_meaning_js_1.SemanticType.TENSOR)) {
        return false;
      }
      if (isRole(node, semantic_meaning_js_1.SemanticRole.OPEN) && (isType(node, semantic_meaning_js_1.SemanticType.SUBSCRIPT) || isType(node, semantic_meaning_js_1.SemanticType.SUPERSCRIPT))) {
        return false;
      }
      return recurseBaseNode(node.childNodes[0]);
    }
    function isTableOrMultiline(node) {
      return !!node && (isType(node, semantic_meaning_js_1.SemanticType.TABLE) || isType(node, semantic_meaning_js_1.SemanticType.MULTILINE));
    }
    function tableIsMatrixOrVector(node) {
      return !!node && isFencedElement(node) && isTableOrMultiline(node.childNodes[0]);
    }
    function isFencedElement(node) {
      return !!node && isType(node, semantic_meaning_js_1.SemanticType.FENCED) && (isRole(node, semantic_meaning_js_1.SemanticRole.LEFTRIGHT) || isNeutralFence(node)) && node.childNodes.length === 1;
    }
    function tableIsCases(_table, prevNodes) {
      return prevNodes.length > 0 && isRole(prevNodes[prevNodes.length - 1], semantic_meaning_js_1.SemanticRole.OPENFENCE);
    }
    function tableIsMultiline(table) {
      return table.childNodes.every(function(row) {
        const length = row.childNodes.length;
        return length <= 1;
      });
    }
    function lineIsLabelled(line) {
      return isType(line, semantic_meaning_js_1.SemanticType.LINE) && line.contentNodes.length && isRole(line.contentNodes[0], semantic_meaning_js_1.SemanticRole.LABEL);
    }
    function isBinomial(table) {
      return table.childNodes.length === 2;
    }
    function isLimitBase(node) {
      return isType(node, semantic_meaning_js_1.SemanticType.LARGEOP) || isType(node, semantic_meaning_js_1.SemanticType.LIMBOTH) || isType(node, semantic_meaning_js_1.SemanticType.LIMLOWER) || isType(node, semantic_meaning_js_1.SemanticType.LIMUPPER) || isType(node, semantic_meaning_js_1.SemanticType.FUNCTION) && isRole(node, semantic_meaning_js_1.SemanticRole.LIMFUNC) || (isType(node, semantic_meaning_js_1.SemanticType.OVERSCORE) || isType(node, semantic_meaning_js_1.SemanticType.UNDERSCORE)) && isLimitBase(node.childNodes[0]);
    }
    function isSimpleFunctionHead(node) {
      return node.type === semantic_meaning_js_1.SemanticType.IDENTIFIER || node.role === semantic_meaning_js_1.SemanticRole.LATINLETTER || node.role === semantic_meaning_js_1.SemanticRole.GREEKLETTER || node.role === semantic_meaning_js_1.SemanticRole.OTHERLETTER;
    }
    function singlePunctAtPosition(nodes, puncts, position) {
      return puncts.length === 1 && (nodes[position].type === semantic_meaning_js_1.SemanticType.PUNCTUATION || nodes[position].embellished === semantic_meaning_js_1.SemanticType.PUNCTUATION) && nodes[position] === puncts[0];
    }
    function isSimpleFunction(node) {
      return isType(node, semantic_meaning_js_1.SemanticType.IDENTIFIER) && isRole(node, semantic_meaning_js_1.SemanticRole.SIMPLEFUNC);
    }
    function isLeftBrace(node) {
      const leftBrace = ["{", "﹛", "｛"];
      return !!node && leftBrace.indexOf(node.textContent) !== -1;
    }
    function isRightBrace(node) {
      const rightBrace = ["}", "﹜", "｝"];
      return !!node && rightBrace.indexOf(node.textContent) !== -1;
    }
    function isSetNode(node) {
      return isLeftBrace(node.contentNodes[0]) && isRightBrace(node.contentNodes[1]);
    }
    var illegalSingleton = [
      semantic_meaning_js_1.SemanticType.PUNCTUATION,
      semantic_meaning_js_1.SemanticType.PUNCTUATED,
      semantic_meaning_js_1.SemanticType.RELSEQ,
      semantic_meaning_js_1.SemanticType.MULTIREL,
      semantic_meaning_js_1.SemanticType.TABLE,
      semantic_meaning_js_1.SemanticType.MULTILINE,
      semantic_meaning_js_1.SemanticType.CASES,
      semantic_meaning_js_1.SemanticType.INFERENCE
    ];
    var scriptedElement = [
      semantic_meaning_js_1.SemanticType.LIMUPPER,
      semantic_meaning_js_1.SemanticType.LIMLOWER,
      semantic_meaning_js_1.SemanticType.LIMBOTH,
      semantic_meaning_js_1.SemanticType.SUBSCRIPT,
      semantic_meaning_js_1.SemanticType.SUPERSCRIPT,
      semantic_meaning_js_1.SemanticType.UNDERSCORE,
      semantic_meaning_js_1.SemanticType.OVERSCORE,
      semantic_meaning_js_1.SemanticType.TENSOR
    ];
    function isSingletonSetContent(node) {
      const type = node.type;
      if (illegalSingleton.indexOf(type) !== -1 || type === semantic_meaning_js_1.SemanticType.INFIXOP && node.role !== semantic_meaning_js_1.SemanticRole.IMPLICIT) {
        return false;
      }
      if (type === semantic_meaning_js_1.SemanticType.FENCED) {
        return node.role === semantic_meaning_js_1.SemanticRole.LEFTRIGHT ? isSingletonSetContent(node.childNodes[0]) : true;
      }
      if (scriptedElement.indexOf(type) !== -1) {
        return isSingletonSetContent(node.childNodes[0]);
      }
      return true;
    }
    function isNumber(node) {
      return node.type === semantic_meaning_js_1.SemanticType.NUMBER && (node.role === semantic_meaning_js_1.SemanticRole.INTEGER || node.role === semantic_meaning_js_1.SemanticRole.FLOAT);
    }
    function isUnitCounter(node) {
      return isNumber(node) || node.role === semantic_meaning_js_1.SemanticRole.VULGAR || node.role === semantic_meaning_js_1.SemanticRole.MIXED;
    }
    function isPureUnit(node) {
      const children = node.childNodes;
      return node.role === semantic_meaning_js_1.SemanticRole.UNIT && (!children.length || children[0].role === semantic_meaning_js_1.SemanticRole.UNIT);
    }
    function isUnitProduct(node) {
      const children = node.childNodes;
      return node.type === semantic_meaning_js_1.SemanticType.INFIXOP && (node.role === semantic_meaning_js_1.SemanticRole.MULTIPLICATION || node.role === semantic_meaning_js_1.SemanticRole.IMPLICIT) && children.length && (isPureUnit(children[0]) || isUnitCounter(children[0])) && node.childNodes.slice(1).every(isPureUnit);
    }
    function isImplicit(node) {
      return node.type === semantic_meaning_js_1.SemanticType.INFIXOP && (node.role === semantic_meaning_js_1.SemanticRole.IMPLICIT || node.role === semantic_meaning_js_1.SemanticRole.UNIT && !!node.contentNodes.length && node.contentNodes[0].textContent === semantic_attr_js_1.NamedSymbol.invisibleTimes);
    }
    function isImplicitOp(node) {
      return node.type === semantic_meaning_js_1.SemanticType.INFIXOP && node.role === semantic_meaning_js_1.SemanticRole.IMPLICIT;
    }
    function isNeutralFence(fence) {
      return fence.role === semantic_meaning_js_1.SemanticRole.NEUTRAL || fence.role === semantic_meaning_js_1.SemanticRole.METRIC;
    }
    function compareNeutralFences(fence1, fence2) {
      return isNeutralFence(fence1) && isNeutralFence(fence2) && (0, semantic_util_js_1.getEmbellishedInner)(fence1).textContent === (0, semantic_util_js_1.getEmbellishedInner)(fence2).textContent;
    }
    function elligibleLeftNeutral(fence) {
      if (!isNeutralFence(fence)) {
        return false;
      }
      if (!fence.embellished) {
        return true;
      }
      if (fence.type === semantic_meaning_js_1.SemanticType.SUPERSCRIPT || fence.type === semantic_meaning_js_1.SemanticType.SUBSCRIPT) {
        return false;
      }
      if (fence.type === semantic_meaning_js_1.SemanticType.TENSOR && (fence.childNodes[3].type !== semantic_meaning_js_1.SemanticType.EMPTY || fence.childNodes[4].type !== semantic_meaning_js_1.SemanticType.EMPTY)) {
        return false;
      }
      return true;
    }
    function elligibleRightNeutral(fence) {
      if (!isNeutralFence(fence)) {
        return false;
      }
      if (!fence.embellished) {
        return true;
      }
      if (fence.type === semantic_meaning_js_1.SemanticType.TENSOR && (fence.childNodes[1].type !== semantic_meaning_js_1.SemanticType.EMPTY || fence.childNodes[2].type !== semantic_meaning_js_1.SemanticType.EMPTY)) {
        return false;
      }
      return true;
    }
    function isMembership(element) {
      return [
        semantic_meaning_js_1.SemanticRole.ELEMENT,
        semantic_meaning_js_1.SemanticRole.NONELEMENT,
        semantic_meaning_js_1.SemanticRole.REELEMENT,
        semantic_meaning_js_1.SemanticRole.RENONELEMENT
      ].includes(element.role);
    }
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_processor.js
var require_semantic_processor = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_processor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticProcessor = void 0;
    var DomUtil = require_dom_util();
    var semantic_attr_js_1 = require_semantic_attr();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_heuristic_factory_js_1 = require_semantic_heuristic_factory();
    var semantic_node_factory_js_1 = require_semantic_node_factory();
    var SemanticPred = require_semantic_pred();
    var SemanticUtil = require_semantic_util();
    var semantic_util_js_1 = require_semantic_util();
    var SemanticProcessor = class _SemanticProcessor {
      static getInstance() {
        _SemanticProcessor.instance = _SemanticProcessor.instance || new _SemanticProcessor();
        return _SemanticProcessor.instance;
      }
      static tableToMultiline(table) {
        if (!SemanticPred.tableIsMultiline(table)) {
          return semantic_heuristic_factory_js_1.SemanticHeuristics.run("rewrite_subcases", table, _SemanticProcessor.classifyTable);
        }
        table.type = semantic_meaning_js_1.SemanticType.MULTILINE;
        for (let i = 0, row; row = table.childNodes[i]; i++) {
          _SemanticProcessor.rowToLine_(row, semantic_meaning_js_1.SemanticRole.MULTILINE);
        }
        if (table.childNodes.length === 1 && !SemanticPred.lineIsLabelled(table.childNodes[0]) && SemanticPred.isFencedElement(table.childNodes[0].childNodes[0])) {
          _SemanticProcessor.tableToMatrixOrVector_(_SemanticProcessor.rewriteFencedLine_(table));
        }
        _SemanticProcessor.binomialForm_(table);
        _SemanticProcessor.classifyMultiline(table);
        return table;
      }
      static number(node) {
        if (node.type === semantic_meaning_js_1.SemanticType.UNKNOWN || node.type === semantic_meaning_js_1.SemanticType.IDENTIFIER) {
          node.type = semantic_meaning_js_1.SemanticType.NUMBER;
        }
        _SemanticProcessor.meaningFromContent(node, _SemanticProcessor.numberRole_);
        _SemanticProcessor.exprFont_(node);
      }
      static classifyMultiline(multiline) {
        let index = 0;
        const length = multiline.childNodes.length;
        let line;
        while (index < length && (!(line = multiline.childNodes[index]) || !line.childNodes.length)) {
          index++;
        }
        if (index >= length) {
          return;
        }
        const firstRole = line.childNodes[0].role;
        if (firstRole !== semantic_meaning_js_1.SemanticRole.UNKNOWN && multiline.childNodes.every(function(x) {
          const cell = x.childNodes[0];
          return !cell || cell.role === firstRole && (SemanticPred.isType(cell, semantic_meaning_js_1.SemanticType.RELATION) || SemanticPred.isType(cell, semantic_meaning_js_1.SemanticType.RELSEQ));
        })) {
          multiline.role = firstRole;
        }
      }
      static classifyTable(table) {
        const columns = _SemanticProcessor.computeColumns_(table);
        _SemanticProcessor.classifyByColumns_(table, columns, semantic_meaning_js_1.SemanticRole.EQUALITY) || _SemanticProcessor.classifyByColumns_(table, columns, semantic_meaning_js_1.SemanticRole.INEQUALITY, [semantic_meaning_js_1.SemanticRole.EQUALITY]) || _SemanticProcessor.classifyByColumns_(table, columns, semantic_meaning_js_1.SemanticRole.ARROW) || _SemanticProcessor.detectCaleyTable(table);
        return table;
      }
      static detectCaleyTable(table) {
        if (!table.mathmlTree) {
          return false;
        }
        const tree = table.mathmlTree;
        const cl = tree.getAttribute("columnlines");
        const rl = tree.getAttribute("rowlines");
        if (!cl || !rl) {
          return false;
        }
        if (_SemanticProcessor.cayleySpacing(cl) && _SemanticProcessor.cayleySpacing(rl)) {
          table.role = semantic_meaning_js_1.SemanticRole.CAYLEY;
          return true;
        }
        return false;
      }
      static cayleySpacing(lines) {
        const list = lines.split(" ");
        return (list[0] === "solid" || list[0] === "dashed") && list.slice(1).every((x) => x === "none");
      }
      static proof(node, semantics, parse) {
        const attrs = _SemanticProcessor.separateSemantics(semantics);
        return _SemanticProcessor.getInstance().proof(node, attrs, parse);
      }
      static findSemantics(node, attr, opt_value) {
        const value = opt_value == null ? null : opt_value;
        const semantics = _SemanticProcessor.getSemantics(node);
        if (!semantics) {
          return false;
        }
        if (!semantics[attr]) {
          return false;
        }
        return value == null ? true : semantics[attr] === value;
      }
      static getSemantics(node) {
        const semantics = node.getAttribute("semantics");
        if (!semantics) {
          return null;
        }
        return _SemanticProcessor.separateSemantics(semantics);
      }
      static removePrefix(name) {
        const [, ...rest] = name.split("_");
        return rest.join("_");
      }
      static separateSemantics(attr) {
        const result = {};
        attr.split(";").forEach(function(x) {
          const [name, value] = x.split(":");
          result[_SemanticProcessor.removePrefix(name)] = value;
        });
        return result;
      }
      static matchSpaces_(nodes, ops) {
        for (let i = 0, op; op = ops[i]; i++) {
          const node = nodes[i];
          const mt1 = node.mathmlTree;
          const mt2 = nodes[i + 1].mathmlTree;
          if (!mt1 || !mt2) {
            continue;
          }
          const sibling = mt1.nextSibling;
          if (!sibling || sibling === mt2) {
            continue;
          }
          const spacer = _SemanticProcessor.getSpacer_(sibling);
          if (spacer) {
            op.mathml.push(spacer);
            op.mathmlTree = spacer;
            op.role = semantic_meaning_js_1.SemanticRole.SPACE;
          }
        }
      }
      static getSpacer_(node) {
        if (DomUtil.tagName(node) === semantic_util_js_1.MMLTAGS.MSPACE) {
          return node;
        }
        while (SemanticUtil.hasEmptyTag(node) && node.childNodes.length === 1) {
          node = node.childNodes[0];
          if (DomUtil.tagName(node) === semantic_util_js_1.MMLTAGS.MSPACE) {
            return node;
          }
        }
        return null;
      }
      static fenceToPunct_(fence) {
        const newRole = _SemanticProcessor.FENCE_TO_PUNCT_[fence.role];
        if (!newRole) {
          return;
        }
        while (fence.embellished) {
          fence.embellished = semantic_meaning_js_1.SemanticType.PUNCTUATION;
          if (!(SemanticPred.isRole(fence, semantic_meaning_js_1.SemanticRole.SUBSUP) || SemanticPred.isRole(fence, semantic_meaning_js_1.SemanticRole.UNDEROVER))) {
            fence.role = newRole;
          }
          fence = fence.childNodes[0];
        }
        fence.type = semantic_meaning_js_1.SemanticType.PUNCTUATION;
        fence.role = newRole;
      }
      static classifyFunction_(funcNode, restNodes) {
        if (funcNode.type === semantic_meaning_js_1.SemanticType.APPL || funcNode.type === semantic_meaning_js_1.SemanticType.BIGOP || funcNode.type === semantic_meaning_js_1.SemanticType.INTEGRAL) {
          return "";
        }
        if (restNodes[0] && restNodes[0].textContent === semantic_attr_js_1.NamedSymbol.functionApplication) {
          _SemanticProcessor.getInstance().funcAppls[funcNode.id] = restNodes.shift();
          let role = semantic_meaning_js_1.SemanticRole.SIMPLEFUNC;
          semantic_heuristic_factory_js_1.SemanticHeuristics.run("simple2prefix", funcNode);
          if (funcNode.role === semantic_meaning_js_1.SemanticRole.PREFIXFUNC || funcNode.role === semantic_meaning_js_1.SemanticRole.LIMFUNC) {
            role = funcNode.role;
          }
          _SemanticProcessor.propagateFunctionRole_(funcNode, role);
          return "prefix";
        }
        const kind = _SemanticProcessor.CLASSIFY_FUNCTION_[funcNode.role];
        return kind ? kind : SemanticPred.isSimpleFunctionHead(funcNode) ? "simple" : "";
      }
      static propagateFunctionRole_(funcNode, tag) {
        if (funcNode) {
          if (funcNode.type === semantic_meaning_js_1.SemanticType.INFIXOP) {
            return;
          }
          if (!(SemanticPred.isRole(funcNode, semantic_meaning_js_1.SemanticRole.SUBSUP) || SemanticPred.isRole(funcNode, semantic_meaning_js_1.SemanticRole.UNDEROVER))) {
            funcNode.role = tag;
          }
          _SemanticProcessor.propagateFunctionRole_(funcNode.childNodes[0], tag);
        }
      }
      static getFunctionOp_(tree, pred) {
        if (pred(tree)) {
          return tree;
        }
        for (let i = 0, child; child = tree.childNodes[i]; i++) {
          const op = _SemanticProcessor.getFunctionOp_(child, pred);
          if (op) {
            return op;
          }
        }
        return null;
      }
      static tableToMatrixOrVector_(node) {
        const matrix = node.childNodes[0];
        SemanticPred.isType(matrix, semantic_meaning_js_1.SemanticType.MULTILINE) ? _SemanticProcessor.tableToVector_(node) : _SemanticProcessor.tableToMatrix_(node);
        node.contentNodes.forEach(matrix.appendContentNode.bind(matrix));
        for (let i = 0, row; row = matrix.childNodes[i]; i++) {
          _SemanticProcessor.assignRoleToRow_(row, _SemanticProcessor.getComponentRoles_(matrix));
        }
        matrix.parent = null;
        return matrix;
      }
      static tableToVector_(node) {
        const vector = node.childNodes[0];
        vector.type = semantic_meaning_js_1.SemanticType.VECTOR;
        if (vector.childNodes.length === 1) {
          _SemanticProcessor.tableToSquare_(node);
          return;
        }
        _SemanticProcessor.binomialForm_(vector);
      }
      static binomialForm_(node) {
        if (!SemanticPred.isRole(node, semantic_meaning_js_1.SemanticRole.UNKNOWN)) {
          return;
        }
        if (SemanticPred.isBinomial(node)) {
          node.role = semantic_meaning_js_1.SemanticRole.BINOMIAL;
          node.childNodes[0].role = semantic_meaning_js_1.SemanticRole.BINOMIAL;
          node.childNodes[1].role = semantic_meaning_js_1.SemanticRole.BINOMIAL;
        }
      }
      static tableToMatrix_(node) {
        const matrix = node.childNodes[0];
        matrix.type = semantic_meaning_js_1.SemanticType.MATRIX;
        if (matrix.childNodes && matrix.childNodes.length > 0 && matrix.childNodes[0].childNodes && matrix.childNodes.length === matrix.childNodes[0].childNodes.length) {
          _SemanticProcessor.tableToSquare_(node);
          return;
        }
        if (matrix.childNodes && matrix.childNodes.length === 1) {
          matrix.role = semantic_meaning_js_1.SemanticRole.ROWVECTOR;
        }
      }
      static tableToSquare_(node) {
        const matrix = node.childNodes[0];
        if (!SemanticPred.isRole(matrix, semantic_meaning_js_1.SemanticRole.UNKNOWN)) {
          return;
        }
        if (SemanticPred.isNeutralFence(node)) {
          matrix.role = semantic_meaning_js_1.SemanticRole.DETERMINANT;
          return;
        }
        matrix.role = semantic_meaning_js_1.SemanticRole.SQUAREMATRIX;
      }
      static getComponentRoles_(node) {
        const role = node.role;
        if (role && role !== semantic_meaning_js_1.SemanticRole.UNKNOWN) {
          return role;
        }
        return node.type.toLowerCase() || semantic_meaning_js_1.SemanticRole.UNKNOWN;
      }
      static tableToCases_(table, openFence) {
        for (let i = 0, row; row = table.childNodes[i]; i++) {
          _SemanticProcessor.assignRoleToRow_(row, semantic_meaning_js_1.SemanticRole.CASES);
        }
        table.type = semantic_meaning_js_1.SemanticType.CASES;
        table.appendContentNode(openFence);
        if (SemanticPred.tableIsMultiline(table)) {
          _SemanticProcessor.binomialForm_(table);
        }
        return table;
      }
      static rewriteFencedLine_(table) {
        const line = table.childNodes[0];
        const fenced = table.childNodes[0].childNodes[0];
        const element = table.childNodes[0].childNodes[0].childNodes[0];
        fenced.parent = table.parent;
        table.parent = fenced;
        element.parent = line;
        fenced.childNodes = [table];
        line.childNodes = [element];
        return fenced;
      }
      static rowToLine_(row, opt_role) {
        const role = opt_role || semantic_meaning_js_1.SemanticRole.UNKNOWN;
        if (SemanticPred.isType(row, semantic_meaning_js_1.SemanticType.ROW)) {
          row.type = semantic_meaning_js_1.SemanticType.LINE;
          row.role = role;
          if (row.childNodes.length === 1 && SemanticPred.isType(row.childNodes[0], semantic_meaning_js_1.SemanticType.CELL)) {
            row.childNodes = row.childNodes[0].childNodes;
            row.childNodes.forEach(function(x) {
              x.parent = row;
            });
          }
        }
      }
      static assignRoleToRow_(row, role) {
        if (SemanticPred.isType(row, semantic_meaning_js_1.SemanticType.LINE)) {
          row.role = role;
          return;
        }
        if (SemanticPred.isType(row, semantic_meaning_js_1.SemanticType.ROW)) {
          row.role = role;
          row.childNodes.forEach(function(cell) {
            if (SemanticPred.isType(cell, semantic_meaning_js_1.SemanticType.CELL)) {
              cell.role = role;
            }
          });
        }
      }
      static nextSeparatorFunction_(separators) {
        let sepList;
        if (separators) {
          if (separators.match(/^\s+$/)) {
            return null;
          } else {
            sepList = separators.replace(/\s/g, "").split("").filter(function(x) {
              return x;
            });
          }
        } else {
          sepList = [","];
        }
        return function() {
          if (sepList.length > 1) {
            return sepList.shift();
          }
          return sepList[0];
        };
      }
      static meaningFromContent(node, func) {
        const content = [...node.textContent].filter((x) => x.match(/[^\s]/));
        const meaning = content.map((x) => semantic_attr_js_1.SemanticMap.Meaning.get(x));
        func(node, content, meaning);
      }
      static numberRole_(node, content, meaning) {
        if (node.role !== semantic_meaning_js_1.SemanticRole.UNKNOWN) {
          return;
        }
        if (meaning.every(function(x) {
          return x.type === semantic_meaning_js_1.SemanticType.NUMBER && x.role === semantic_meaning_js_1.SemanticRole.INTEGER || x.type === semantic_meaning_js_1.SemanticType.PUNCTUATION && x.role === semantic_meaning_js_1.SemanticRole.COMMA;
        })) {
          node.role = semantic_meaning_js_1.SemanticRole.INTEGER;
          if (content[0] === "0") {
            node.addAnnotation("general", "basenumber");
          }
          return;
        }
        if (meaning.every(function(x) {
          return x.type === semantic_meaning_js_1.SemanticType.NUMBER && x.role === semantic_meaning_js_1.SemanticRole.INTEGER || x.type === semantic_meaning_js_1.SemanticType.PUNCTUATION;
        })) {
          node.role = semantic_meaning_js_1.SemanticRole.FLOAT;
          return;
        }
        node.role = semantic_meaning_js_1.SemanticRole.OTHERNUMBER;
      }
      static exprFont_(node) {
        if (node.font !== semantic_meaning_js_1.SemanticFont.UNKNOWN) {
          return;
        }
        _SemanticProcessor.compSemantics(node, "font", semantic_meaning_js_1.SemanticFont);
      }
      static compSemantics(node, field, sem) {
        const content = [...node.textContent];
        const meaning = content.map((x) => semantic_attr_js_1.SemanticMap.Meaning.get(x));
        const single = meaning.reduce(function(prev, curr) {
          if (!prev || !curr[field] || curr[field] === sem.UNKNOWN || curr[field] === prev) {
            return prev;
          }
          if (prev === sem.UNKNOWN) {
            return curr[field];
          }
          return null;
        }, sem.UNKNOWN);
        if (single) {
          node[field] = single;
        }
      }
      static purgeFences_(partition) {
        const rel = partition.rel;
        const comp = partition.comp;
        const newRel = [];
        const newComp = [];
        while (rel.length > 0) {
          const currentRel = rel.shift();
          let currentComp = comp.shift();
          if (SemanticPred.isElligibleEmbellishedFence(currentRel)) {
            newRel.push(currentRel);
            newComp.push(currentComp);
            continue;
          }
          _SemanticProcessor.fenceToPunct_(currentRel);
          currentComp.push(currentRel);
          currentComp = currentComp.concat(comp.shift());
          comp.unshift(currentComp);
        }
        newComp.push(comp.shift());
        return { rel: newRel, comp: newComp };
      }
      static rewriteFencedNode_(fenced) {
        const ofence = fenced.contentNodes[0];
        const cfence = fenced.contentNodes[1];
        let rewritten = _SemanticProcessor.rewriteFence_(fenced, ofence);
        fenced.contentNodes[0] = rewritten.fence;
        rewritten = _SemanticProcessor.rewriteFence_(rewritten.node, cfence);
        fenced.contentNodes[1] = rewritten.fence;
        fenced.contentNodes[0].parent = fenced;
        fenced.contentNodes[1].parent = fenced;
        rewritten.node.parent = null;
        return rewritten.node;
      }
      static rewriteFence_(node, fence) {
        if (!fence.embellished) {
          return { node, fence };
        }
        const newFence = fence.childNodes[0];
        const rewritten = _SemanticProcessor.rewriteFence_(node, newFence);
        if (SemanticPred.isType(fence, semantic_meaning_js_1.SemanticType.SUPERSCRIPT) || SemanticPred.isType(fence, semantic_meaning_js_1.SemanticType.SUBSCRIPT) || SemanticPred.isType(fence, semantic_meaning_js_1.SemanticType.TENSOR)) {
          if (!SemanticPred.isRole(fence, semantic_meaning_js_1.SemanticRole.SUBSUP)) {
            fence.role = node.role;
          }
          if (newFence !== rewritten.node) {
            fence.replaceChild(newFence, rewritten.node);
            newFence.parent = node;
          }
          _SemanticProcessor.propagateFencePointer_(fence, newFence);
          return { node: fence, fence: rewritten.fence };
        }
        fence.replaceChild(newFence, rewritten.fence);
        if (fence.mathmlTree && fence.mathml.indexOf(fence.mathmlTree) === -1) {
          fence.mathml.push(fence.mathmlTree);
        }
        return { node: rewritten.node, fence };
      }
      static propagateFencePointer_(oldNode, newNode) {
        oldNode.fencePointer = newNode.fencePointer || newNode.id.toString();
        oldNode.embellished = null;
      }
      static classifyByColumns_(table, columns, relation, alternatives = []) {
        const relations = [relation].concat(alternatives);
        const test1 = (x) => _SemanticProcessor.isPureRelation_(x, relations);
        const test2 = (x) => _SemanticProcessor.isEndRelation_(x, relations) || _SemanticProcessor.isPureRelation_(x, relations);
        const test3 = (x) => _SemanticProcessor.isEndRelation_(x, relations, true) || _SemanticProcessor.isPureRelation_(x, relations);
        if (columns.length === 3 && _SemanticProcessor.testColumns_(columns, 1, test1) || columns.length === 2 && (_SemanticProcessor.testColumns_(columns, 1, test2) || _SemanticProcessor.testColumns_(columns, 0, test3))) {
          table.role = relation;
          return true;
        }
        return false;
      }
      static isEndRelation_(node, relations, opt_right) {
        const position = opt_right ? node.childNodes.length - 1 : 0;
        return SemanticPred.isType(node, semantic_meaning_js_1.SemanticType.RELSEQ) && relations.some((relation) => SemanticPred.isRole(node, relation)) && SemanticPred.isType(node.childNodes[position], semantic_meaning_js_1.SemanticType.EMPTY);
      }
      static isPureRelation_(node, relations) {
        return SemanticPred.isType(node, semantic_meaning_js_1.SemanticType.RELATION) && relations.some((relation) => SemanticPred.isRole(node, relation));
      }
      static computeColumns_(table) {
        const columns = [];
        for (let i = 0, row; row = table.childNodes[i]; i++) {
          for (let j = 0, cell; cell = row.childNodes[j]; j++) {
            const column = columns[j];
            column ? columns[j].push(cell) : columns[j] = [cell];
          }
        }
        return columns;
      }
      static testColumns_(columns, index, pred) {
        const column = columns[index];
        return column ? column.some(function(cell) {
          return cell.childNodes.length && pred(cell.childNodes[0]);
        }) && column.every(function(cell) {
          return !cell.childNodes.length || pred(cell.childNodes[0]);
        }) : false;
      }
      setNodeFactory(factory) {
        _SemanticProcessor.getInstance().factory_ = factory;
        semantic_heuristic_factory_js_1.SemanticHeuristics.updateFactory(_SemanticProcessor.getInstance().factory_);
      }
      getNodeFactory() {
        return _SemanticProcessor.getInstance().factory_;
      }
      identifierNode(leaf, font, unit) {
        if (unit === "MathML-Unit") {
          leaf.type = semantic_meaning_js_1.SemanticType.IDENTIFIER;
          leaf.role = semantic_meaning_js_1.SemanticRole.UNIT;
        } else if (!font && leaf.textContent.length === 1 && (leaf.role === semantic_meaning_js_1.SemanticRole.INTEGER || leaf.role === semantic_meaning_js_1.SemanticRole.LATINLETTER || leaf.role === semantic_meaning_js_1.SemanticRole.GREEKLETTER) && leaf.font === semantic_meaning_js_1.SemanticFont.NORMAL) {
          leaf.font = semantic_meaning_js_1.SemanticFont.ITALIC;
          return semantic_heuristic_factory_js_1.SemanticHeuristics.run("simpleNamedFunction", leaf);
        }
        if (leaf.type === semantic_meaning_js_1.SemanticType.UNKNOWN) {
          leaf.type = semantic_meaning_js_1.SemanticType.IDENTIFIER;
        }
        _SemanticProcessor.exprFont_(leaf);
        return semantic_heuristic_factory_js_1.SemanticHeuristics.run("simpleNamedFunction", leaf);
      }
      implicitNode(nodes) {
        nodes = _SemanticProcessor.getInstance().getMixedNumbers_(nodes);
        nodes = _SemanticProcessor.getInstance().combineUnits_(nodes);
        if (nodes.length === 1) {
          return nodes[0];
        }
        const node = _SemanticProcessor.getInstance().implicitNode_(nodes);
        return semantic_heuristic_factory_js_1.SemanticHeuristics.run("combine_juxtaposition", node);
      }
      text(leaf, type) {
        _SemanticProcessor.exprFont_(leaf);
        leaf.type = semantic_meaning_js_1.SemanticType.TEXT;
        if (type === semantic_util_js_1.MMLTAGS.ANNOTATIONXML) {
          leaf.role = semantic_meaning_js_1.SemanticRole.ANNOTATION;
          return leaf;
        }
        if (type === semantic_util_js_1.MMLTAGS.MS) {
          leaf.role = semantic_meaning_js_1.SemanticRole.STRING;
          return leaf;
        }
        if (type === semantic_util_js_1.MMLTAGS.MSPACE || leaf.textContent.match(/^\s*$/)) {
          leaf.role = semantic_meaning_js_1.SemanticRole.SPACE;
          return leaf;
        }
        if (/\s/.exec(leaf.textContent)) {
          leaf.role = semantic_meaning_js_1.SemanticRole.TEXT;
          return leaf;
        }
        leaf.role = semantic_meaning_js_1.SemanticRole.UNKNOWN;
        return leaf;
      }
      row(nodes) {
        nodes = nodes.filter(function(x) {
          return !SemanticPred.isType(x, semantic_meaning_js_1.SemanticType.EMPTY);
        });
        if (nodes.length === 0) {
          return _SemanticProcessor.getInstance().factory_.makeEmptyNode();
        }
        nodes = _SemanticProcessor.getInstance().getFencesInRow_(nodes);
        nodes = _SemanticProcessor.getInstance().tablesInRow(nodes);
        nodes = _SemanticProcessor.getInstance().getPunctuationInRow_(nodes);
        nodes = _SemanticProcessor.getInstance().getTextInRow_(nodes);
        nodes = _SemanticProcessor.getInstance().getFunctionsInRow_(nodes);
        return _SemanticProcessor.getInstance().relationsInRow_(nodes);
      }
      limitNode(mmlTag, children) {
        if (!children.length) {
          return _SemanticProcessor.getInstance().factory_.makeEmptyNode();
        }
        let center = children[0];
        let type = semantic_meaning_js_1.SemanticType.UNKNOWN;
        if (!children[1]) {
          return center;
        }
        let result;
        semantic_heuristic_factory_js_1.SemanticHeuristics.run("op_with_limits", children);
        if (SemanticPred.isLimitBase(center)) {
          result = _SemanticProcessor.MML_TO_LIMIT_[mmlTag];
          const length = result.length;
          type = result.type;
          children = children.slice(0, result.length + 1);
          if (length === 1 && SemanticPred.isAccent(children[1]) || length === 2 && SemanticPred.isAccent(children[1]) && SemanticPred.isAccent(children[2])) {
            result = _SemanticProcessor.MML_TO_BOUNDS_[mmlTag];
            return _SemanticProcessor.getInstance().accentNode_(center, children, result.type, result.length, result.accent);
          }
          if (length === 2) {
            if (SemanticPred.isAccent(children[1])) {
              center = _SemanticProcessor.getInstance().accentNode_(center, [center, children[1]], {
                MSUBSUP: semantic_meaning_js_1.SemanticType.SUBSCRIPT,
                MUNDEROVER: semantic_meaning_js_1.SemanticType.UNDERSCORE
              }[mmlTag], 1, true);
              return !children[2] ? center : _SemanticProcessor.getInstance().makeLimitNode_(center, [center, children[2]], null, semantic_meaning_js_1.SemanticType.LIMUPPER);
            }
            if (children[2] && SemanticPred.isAccent(children[2])) {
              center = _SemanticProcessor.getInstance().accentNode_(center, [center, children[2]], {
                MSUBSUP: semantic_meaning_js_1.SemanticType.SUPERSCRIPT,
                MUNDEROVER: semantic_meaning_js_1.SemanticType.OVERSCORE
              }[mmlTag], 1, true);
              return _SemanticProcessor.getInstance().makeLimitNode_(center, [center, children[1]], null, semantic_meaning_js_1.SemanticType.LIMLOWER);
            }
            if (!children[length]) {
              type = semantic_meaning_js_1.SemanticType.LIMLOWER;
            }
          }
          return _SemanticProcessor.getInstance().makeLimitNode_(center, children, null, type);
        }
        result = _SemanticProcessor.MML_TO_BOUNDS_[mmlTag];
        return _SemanticProcessor.getInstance().accentNode_(center, children, result.type, result.length, result.accent);
      }
      tablesInRow(nodes) {
        let partition = SemanticUtil.partitionNodes(nodes, SemanticPred.tableIsMatrixOrVector);
        let result = [];
        for (let i = 0, matrix; matrix = partition.rel[i]; i++) {
          result = result.concat(partition.comp.shift());
          result.push(_SemanticProcessor.tableToMatrixOrVector_(matrix));
        }
        result = result.concat(partition.comp.shift());
        partition = SemanticUtil.partitionNodes(result, SemanticPred.isTableOrMultiline);
        result = [];
        for (let i = 0, table; table = partition.rel[i]; i++) {
          const prevNodes = partition.comp.shift();
          if (SemanticPred.tableIsCases(table, prevNodes)) {
            _SemanticProcessor.tableToCases_(table, prevNodes.pop());
          }
          result = result.concat(prevNodes);
          result.push(table);
        }
        return result.concat(partition.comp.shift());
      }
      mfenced(open, close, sepValue, children) {
        if (sepValue && children.length > 0) {
          const separators = _SemanticProcessor.nextSeparatorFunction_(sepValue);
          const newChildren = [children.shift()];
          children.forEach((child) => {
            newChildren.push(_SemanticProcessor.getInstance().factory_.makeContentNode(separators()));
            newChildren.push(child);
          });
          children = newChildren;
        }
        if (open && close) {
          return _SemanticProcessor.getInstance().horizontalFencedNode_(_SemanticProcessor.getInstance().factory_.makeContentNode(open), _SemanticProcessor.getInstance().factory_.makeContentNode(close), children);
        }
        if (open) {
          children.unshift(_SemanticProcessor.getInstance().factory_.makeContentNode(open));
        }
        if (close) {
          children.push(_SemanticProcessor.getInstance().factory_.makeContentNode(close));
        }
        return _SemanticProcessor.getInstance().row(children);
      }
      fractionLikeNode(denom, enume, linethickness, bevelled) {
        let node;
        if (!bevelled && SemanticUtil.isZeroLength(linethickness)) {
          const child0 = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.LINE, [denom], []);
          const child1 = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.LINE, [enume], []);
          node = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.MULTILINE, [child0, child1], []);
          _SemanticProcessor.binomialForm_(node);
          _SemanticProcessor.classifyMultiline(node);
          return node;
        } else {
          node = _SemanticProcessor.getInstance().fractionNode_(denom, enume);
          if (bevelled) {
            node.addAnnotation("general", "bevelled");
          }
          return node;
        }
      }
      tensor(base, lsub, lsup, rsub, rsup) {
        const newNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.TENSOR, [
          base,
          _SemanticProcessor.getInstance().scriptNode_(lsub, semantic_meaning_js_1.SemanticRole.LEFTSUB),
          _SemanticProcessor.getInstance().scriptNode_(lsup, semantic_meaning_js_1.SemanticRole.LEFTSUPER),
          _SemanticProcessor.getInstance().scriptNode_(rsub, semantic_meaning_js_1.SemanticRole.RIGHTSUB),
          _SemanticProcessor.getInstance().scriptNode_(rsup, semantic_meaning_js_1.SemanticRole.RIGHTSUPER)
        ], []);
        newNode.role = base.role;
        newNode.embellished = SemanticPred.isEmbellished(base);
        return newNode;
      }
      pseudoTensor(base, sub, sup) {
        const isEmpty = (x) => !SemanticPred.isType(x, semantic_meaning_js_1.SemanticType.EMPTY);
        const nonEmptySub = sub.filter(isEmpty).length;
        const nonEmptySup = sup.filter(isEmpty).length;
        if (!nonEmptySub && !nonEmptySup) {
          return base;
        }
        const mmlTag = nonEmptySub ? nonEmptySup ? semantic_util_js_1.MMLTAGS.MSUBSUP : semantic_util_js_1.MMLTAGS.MSUB : semantic_util_js_1.MMLTAGS.MSUP;
        const mmlchild = [base];
        if (nonEmptySub) {
          mmlchild.push(_SemanticProcessor.getInstance().scriptNode_(sub, semantic_meaning_js_1.SemanticRole.RIGHTSUB, true));
        }
        if (nonEmptySup) {
          mmlchild.push(_SemanticProcessor.getInstance().scriptNode_(sup, semantic_meaning_js_1.SemanticRole.RIGHTSUPER, true));
        }
        return _SemanticProcessor.getInstance().limitNode(mmlTag, mmlchild);
      }
      font(font) {
        const mathjaxFont = _SemanticProcessor.MATHJAX_FONTS[font];
        return mathjaxFont ? mathjaxFont : font;
      }
      proof(node, semantics, parse) {
        if (!semantics["inference"] && !semantics["axiom"]) {
          console.log("Noise");
        }
        if (semantics["axiom"]) {
          const cleaned = _SemanticProcessor.getInstance().cleanInference(node.childNodes);
          const axiom = cleaned.length ? _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.INFERENCE, parse(cleaned), []) : _SemanticProcessor.getInstance().factory_.makeEmptyNode();
          axiom.role = semantic_meaning_js_1.SemanticRole.AXIOM;
          axiom.mathmlTree = node;
          return axiom;
        }
        const inference = _SemanticProcessor.getInstance().inference(node, semantics, parse);
        if (semantics["proof"]) {
          inference.role = semantic_meaning_js_1.SemanticRole.PROOF;
          inference.childNodes[0].role = semantic_meaning_js_1.SemanticRole.FINAL;
        }
        return inference;
      }
      inference(node, semantics, parse) {
        if (semantics["inferenceRule"]) {
          const formulas2 = _SemanticProcessor.getInstance().getFormulas(node, [], parse);
          const inference2 = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.INFERENCE, [formulas2.conclusion, formulas2.premises], []);
          return inference2;
        }
        const label = semantics["labelledRule"];
        const children = DomUtil.toArray(node.childNodes);
        const content = [];
        if (label === "left" || label === "both") {
          content.push(_SemanticProcessor.getInstance().getLabel(node, children, parse, semantic_meaning_js_1.SemanticRole.LEFT));
        }
        if (label === "right" || label === "both") {
          content.push(_SemanticProcessor.getInstance().getLabel(node, children, parse, semantic_meaning_js_1.SemanticRole.RIGHT));
        }
        const formulas = _SemanticProcessor.getInstance().getFormulas(node, children, parse);
        const inference = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.INFERENCE, [formulas.conclusion, formulas.premises], content);
        inference.mathmlTree = node;
        return inference;
      }
      getLabel(_node, children, parse, side) {
        const label = _SemanticProcessor.getInstance().findNestedRow(children, "prooflabel", side);
        const sem = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.RULELABEL, parse(DomUtil.toArray(label.childNodes)), []);
        sem.role = side;
        sem.mathmlTree = label;
        return sem;
      }
      getFormulas(node, children, parse) {
        const inf = children.length ? _SemanticProcessor.getInstance().findNestedRow(children, "inferenceRule") : node;
        const up = _SemanticProcessor.getSemantics(inf)["inferenceRule"] === "up";
        const premRow = up ? inf.childNodes[1] : inf.childNodes[0];
        const concRow = up ? inf.childNodes[0] : inf.childNodes[1];
        const premTable = premRow.childNodes[0].childNodes[0];
        const topRow = DomUtil.toArray(premTable.childNodes[0].childNodes);
        const premNodes = [];
        let i = 1;
        for (const cell of topRow) {
          if (i % 2) {
            premNodes.push(cell.childNodes[0]);
          }
          i++;
        }
        const premises = parse(premNodes);
        const conclusion = parse(DomUtil.toArray(concRow.childNodes[0].childNodes))[0];
        const prem = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.PREMISES, premises, []);
        prem.mathmlTree = premTable;
        const conc = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.CONCLUSION, [conclusion], []);
        conc.mathmlTree = concRow.childNodes[0].childNodes[0];
        return { conclusion: conc, premises: prem };
      }
      findNestedRow(nodes, semantic, opt_value) {
        return _SemanticProcessor.getInstance().findNestedRow_(nodes, semantic, 0, opt_value);
      }
      cleanInference(nodes) {
        return DomUtil.toArray(nodes).filter(function(x) {
          return DomUtil.tagName(x) !== "MSPACE";
        });
      }
      operatorNode(node) {
        if (node.type === semantic_meaning_js_1.SemanticType.UNKNOWN) {
          node.type = semantic_meaning_js_1.SemanticType.OPERATOR;
        }
        return semantic_heuristic_factory_js_1.SemanticHeuristics.run("multioperator", node);
      }
      constructor() {
        this.funcAppls = {};
        this.splitRoles = /* @__PURE__ */ new Map([
          [semantic_meaning_js_1.SemanticRole.SUBTRACTION, semantic_meaning_js_1.SemanticRole.NEGATIVE],
          [semantic_meaning_js_1.SemanticRole.ADDITION, semantic_meaning_js_1.SemanticRole.POSITIVE]
        ]);
        this.splitOps = ["−", "-", "‐", "‑", "+"];
        this.factory_ = new semantic_node_factory_js_1.SemanticNodeFactory();
        semantic_heuristic_factory_js_1.SemanticHeuristics.updateFactory(this.factory_);
      }
      implicitNode_(nodes) {
        const operators = _SemanticProcessor.getInstance().factory_.makeMultipleContentNodes(nodes.length - 1, semantic_attr_js_1.NamedSymbol.invisibleTimes);
        _SemanticProcessor.matchSpaces_(nodes, operators);
        const newNode = _SemanticProcessor.getInstance().infixNode_(nodes, operators[0]);
        newNode.role = semantic_meaning_js_1.SemanticRole.IMPLICIT;
        operators.forEach(function(op) {
          op.parent = newNode;
        });
        newNode.contentNodes = operators;
        return newNode;
      }
      infixNode_(children, opNode) {
        const node = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.INFIXOP, children, [opNode], SemanticUtil.getEmbellishedInner(opNode).textContent);
        node.role = opNode.role;
        return semantic_heuristic_factory_js_1.SemanticHeuristics.run("propagateSimpleFunction", node);
      }
      explicitMixed_(nodes) {
        const partition = SemanticUtil.partitionNodes(nodes, function(x) {
          return x.textContent === semantic_attr_js_1.NamedSymbol.invisiblePlus;
        });
        if (!partition.rel.length) {
          return nodes;
        }
        let result = [];
        for (let i = 0, rel; rel = partition.rel[i]; i++) {
          const prev = partition.comp[i];
          const next = partition.comp[i + 1];
          const last = prev.length - 1;
          if (prev[last] && next[0] && SemanticPred.isType(prev[last], semantic_meaning_js_1.SemanticType.NUMBER) && !SemanticPred.isRole(prev[last], semantic_meaning_js_1.SemanticRole.MIXED) && SemanticPred.isType(next[0], semantic_meaning_js_1.SemanticType.FRACTION)) {
            const newNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.NUMBER, [prev[last], next[0]], []);
            newNode.role = semantic_meaning_js_1.SemanticRole.MIXED;
            result = result.concat(prev.slice(0, last));
            result.push(newNode);
            next.shift();
          } else {
            result = result.concat(prev);
            result.push(rel);
          }
        }
        return result.concat(partition.comp[partition.comp.length - 1]);
      }
      concatNode_(inner, nodeList, type) {
        if (nodeList.length === 0) {
          return inner;
        }
        const content = nodeList.map(function(x) {
          return SemanticUtil.getEmbellishedInner(x).textContent;
        }).join(" ");
        const newNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(type, [inner], nodeList, content);
        if (nodeList.length > 1) {
          newNode.role = semantic_meaning_js_1.SemanticRole.MULTIOP;
        }
        return newNode;
      }
      prefixNode_(node, prefixes) {
        const newPrefixes = this.splitSingles(prefixes);
        let newNode = node;
        while (newPrefixes.length > 0) {
          const op = newPrefixes.pop();
          newNode = _SemanticProcessor.getInstance().concatNode_(newNode, op, semantic_meaning_js_1.SemanticType.PREFIXOP);
          if (op.length === 1 && this.splitOps.indexOf(op[0].textContent) !== -1) {
            newNode.role = this.splitRoles.get(op[0].role);
          }
        }
        return newNode;
      }
      splitSingles(prefixes) {
        let lastOp = 0;
        const result = [];
        let i = 0;
        while (i < prefixes.length) {
          const op = prefixes[i];
          if (this.splitRoles.has(op.role) && (!prefixes[i - 1] || prefixes[i - 1].role !== op.role) && (!prefixes[i + 1] || prefixes[i + 1].role !== op.role) && this.splitOps.indexOf(op.textContent) !== -1) {
            result.push(prefixes.slice(lastOp, i));
            result.push(prefixes.slice(i, i + 1));
            lastOp = i + 1;
          }
          i++;
        }
        if (lastOp < i) {
          result.push(prefixes.slice(lastOp, i));
        }
        return result;
      }
      postfixNode_(node, postfixes) {
        if (!postfixes.length) {
          return node;
        }
        return _SemanticProcessor.getInstance().concatNode_(node, postfixes, semantic_meaning_js_1.SemanticType.POSTFIXOP);
      }
      combineUnits_(nodes) {
        const partition = SemanticUtil.partitionNodes(nodes, function(x) {
          return !SemanticPred.isRole(x, semantic_meaning_js_1.SemanticRole.UNIT);
        });
        if (nodes.length === partition.rel.length) {
          return partition.rel;
        }
        const result = [];
        let rel;
        let last;
        do {
          const comp = partition.comp.shift();
          rel = partition.rel.shift();
          let unitNode = null;
          last = result.pop();
          if (last) {
            if (!comp.length || !SemanticPred.isUnitCounter(last)) {
              result.push(last);
            } else {
              comp.unshift(last);
            }
          }
          if (comp.length === 1) {
            unitNode = comp.pop();
          }
          if (comp.length > 1) {
            unitNode = _SemanticProcessor.getInstance().implicitNode_(comp);
            unitNode.role = semantic_meaning_js_1.SemanticRole.UNIT;
          }
          if (unitNode) {
            result.push(unitNode);
          }
          if (rel) {
            result.push(rel);
          }
        } while (rel);
        return result;
      }
      getMixedNumbers_(nodes) {
        const partition = SemanticUtil.partitionNodes(nodes, function(x) {
          return SemanticPred.isType(x, semantic_meaning_js_1.SemanticType.FRACTION) && SemanticPred.isRole(x, semantic_meaning_js_1.SemanticRole.VULGAR);
        });
        if (!partition.rel.length) {
          return nodes;
        }
        let result = [];
        for (let i = 0, rel; rel = partition.rel[i]; i++) {
          const comp = partition.comp[i];
          const last = comp.length - 1;
          if (comp[last] && SemanticPred.isType(comp[last], semantic_meaning_js_1.SemanticType.NUMBER) && (SemanticPred.isRole(comp[last], semantic_meaning_js_1.SemanticRole.INTEGER) || SemanticPred.isRole(comp[last], semantic_meaning_js_1.SemanticRole.FLOAT))) {
            const newNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.NUMBER, [comp[last], rel], []);
            newNode.role = semantic_meaning_js_1.SemanticRole.MIXED;
            result = result.concat(comp.slice(0, last));
            result.push(newNode);
          } else {
            result = result.concat(comp);
            result.push(rel);
          }
        }
        return result.concat(partition.comp[partition.comp.length - 1]);
      }
      getTextInRow_(nodes) {
        if (nodes.length === 0) {
          return nodes;
        }
        if (nodes.length === 1) {
          if (nodes[0].type === semantic_meaning_js_1.SemanticType.TEXT && nodes[0].role === semantic_meaning_js_1.SemanticRole.UNKNOWN) {
            nodes[0].role = semantic_meaning_js_1.SemanticRole.ANNOTATION;
          }
          return nodes;
        }
        const { rel, comp } = SemanticUtil.partitionNodes(nodes, (x) => SemanticPred.isType(x, semantic_meaning_js_1.SemanticType.TEXT));
        if (rel.length === 0) {
          return nodes;
        }
        const result = [];
        let prevComp = comp.shift();
        while (rel.length > 0) {
          let currentRel = rel.shift();
          let nextComp = comp.shift();
          const text = [];
          while (!nextComp.length && rel.length && currentRel.role !== semantic_meaning_js_1.SemanticRole.SPACE && rel[0].role !== semantic_meaning_js_1.SemanticRole.SPACE) {
            text.push(currentRel);
            currentRel = rel.shift();
            nextComp = comp.shift();
          }
          if (text.length) {
            if (prevComp.length) {
              result.push(_SemanticProcessor.getInstance().row(prevComp));
            }
            text.push(currentRel);
            const dummy = _SemanticProcessor.getInstance().dummyNode_(text);
            result.push(dummy);
            prevComp = nextComp;
            continue;
          }
          if (currentRel.role !== semantic_meaning_js_1.SemanticRole.UNKNOWN) {
            if (prevComp.length) {
              result.push(_SemanticProcessor.getInstance().row(prevComp));
            }
            result.push(currentRel);
            prevComp = nextComp;
            continue;
          }
          const meaning = semantic_attr_js_1.SemanticMap.Meaning.get(currentRel.textContent);
          if (meaning.type === semantic_meaning_js_1.SemanticType.PUNCTUATION) {
            currentRel.role = meaning.role;
            currentRel.font = meaning.font;
            if (prevComp.length) {
              result.push(_SemanticProcessor.getInstance().row(prevComp));
            }
            result.push(currentRel);
            prevComp = nextComp;
            continue;
          }
          if (meaning.type !== semantic_meaning_js_1.SemanticType.UNKNOWN) {
            currentRel.type = meaning.type;
            currentRel.role = meaning.role;
            currentRel.font = meaning.font;
            currentRel.addAnnotation("general", "text");
            prevComp.push(currentRel);
            prevComp = prevComp.concat(nextComp);
            continue;
          }
          _SemanticProcessor.meaningFromContent(currentRel, (n, c, m) => {
            if (n.role !== semantic_meaning_js_1.SemanticRole.UNKNOWN) {
              return;
            }
            _SemanticProcessor.numberRole_(n, c, m);
            if (n.role !== semantic_meaning_js_1.SemanticRole.OTHERNUMBER) {
              n.type = semantic_meaning_js_1.SemanticType.NUMBER;
              return;
            }
            if (m.some((x) => x.type !== semantic_meaning_js_1.SemanticType.NUMBER && x.type !== semantic_meaning_js_1.SemanticType.IDENTIFIER)) {
              n.type = semantic_meaning_js_1.SemanticType.TEXT;
              n.role = semantic_meaning_js_1.SemanticRole.ANNOTATION;
              return;
            }
            n.role = semantic_meaning_js_1.SemanticRole.UNKNOWN;
          });
          if (currentRel.type === semantic_meaning_js_1.SemanticType.TEXT && currentRel.role !== semantic_meaning_js_1.SemanticRole.UNKNOWN) {
            if (prevComp.length) {
              result.push(_SemanticProcessor.getInstance().row(prevComp));
            }
            result.push(currentRel);
            prevComp = nextComp;
            continue;
          }
          if (currentRel.role === semantic_meaning_js_1.SemanticRole.UNKNOWN) {
            if (rel.length || nextComp.length) {
              if (nextComp.length && nextComp[0].type === semantic_meaning_js_1.SemanticType.FENCED) {
                currentRel.type = semantic_meaning_js_1.SemanticType.FUNCTION;
                currentRel.role = semantic_meaning_js_1.SemanticRole.PREFIXFUNC;
              } else {
                currentRel.role = semantic_meaning_js_1.SemanticRole.TEXT;
              }
            } else {
              currentRel.type = semantic_meaning_js_1.SemanticType.IDENTIFIER;
              currentRel.role = semantic_meaning_js_1.SemanticRole.UNIT;
            }
          }
          prevComp.push(currentRel);
          prevComp = prevComp.concat(nextComp);
        }
        if (prevComp.length > 0) {
          result.push(_SemanticProcessor.getInstance().row(prevComp));
        }
        return result.length > 1 ? [_SemanticProcessor.getInstance().dummyNode_(result)] : result;
      }
      relationsInRow_(nodes) {
        const partition = SemanticUtil.partitionNodes(nodes, SemanticPred.isRelation);
        const firstRel = partition.rel[0];
        if (!firstRel) {
          return _SemanticProcessor.getInstance().operationsInRow_(nodes);
        }
        if (nodes.length === 1) {
          return nodes[0];
        }
        const children = partition.comp.map(_SemanticProcessor.getInstance().operationsInRow_);
        let node;
        if (partition.rel.some(function(x) {
          return !x.equals(firstRel);
        })) {
          node = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.MULTIREL, children, partition.rel);
          if (partition.rel.every(function(x) {
            return x.role === firstRel.role;
          })) {
            node.role = firstRel.role;
          }
          return node;
        }
        node = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.RELSEQ, children, partition.rel, SemanticUtil.getEmbellishedInner(firstRel).textContent);
        node.role = firstRel.role;
        return node;
      }
      operationsInRow_(nodes) {
        if (nodes.length === 0) {
          return _SemanticProcessor.getInstance().factory_.makeEmptyNode();
        }
        nodes = _SemanticProcessor.getInstance().explicitMixed_(nodes);
        if (nodes.length === 1) {
          return nodes[0];
        }
        const prefix = [];
        while (nodes.length > 0 && SemanticPred.isOperator(nodes[0])) {
          prefix.push(nodes.shift());
        }
        if (nodes.length === 0) {
          return _SemanticProcessor.getInstance().prefixNode_(prefix.pop(), prefix);
        }
        if (nodes.length === 1) {
          return _SemanticProcessor.getInstance().prefixNode_(nodes[0], prefix);
        }
        nodes = semantic_heuristic_factory_js_1.SemanticHeuristics.run("convert_juxtaposition", nodes);
        const split = SemanticUtil.sliceNodes(nodes, SemanticPred.isOperator);
        const node = _SemanticProcessor.getInstance().wrapFactor(prefix, split);
        return _SemanticProcessor.getInstance().addFactor(node, split);
      }
      wrapPostfix(split) {
        var _a;
        if (((_a = split.div) === null || _a === void 0 ? void 0 : _a.role) === semantic_meaning_js_1.SemanticRole.POSTFIXOP) {
          if (!split.tail.length || split.tail[0].type === semantic_meaning_js_1.SemanticType.OPERATOR) {
            split.head = [
              _SemanticProcessor.getInstance().postfixNode_(_SemanticProcessor.getInstance().implicitNode(split.head), [split.div])
            ];
            split.div = split.tail.shift();
            _SemanticProcessor.getInstance().wrapPostfix(split);
          } else {
            split.div.role = semantic_meaning_js_1.SemanticRole.DIVISION;
          }
        }
      }
      wrapFactor(prefix, split) {
        _SemanticProcessor.getInstance().wrapPostfix(split);
        return _SemanticProcessor.getInstance().prefixNode_(_SemanticProcessor.getInstance().implicitNode(split.head), prefix);
      }
      addFactor(node, split) {
        if (!split.div) {
          if (SemanticPred.isUnitProduct(node)) {
            node.role = semantic_meaning_js_1.SemanticRole.UNIT;
          }
          return node;
        }
        return _SemanticProcessor.getInstance().operationsTree_(split.tail, node, split.div);
      }
      operationsTree_(nodes, root, lastop, prefix = []) {
        if (nodes.length === 0) {
          prefix.unshift(lastop);
          if (root.type === semantic_meaning_js_1.SemanticType.INFIXOP) {
            const node2 = _SemanticProcessor.getInstance().postfixNode_(root.childNodes.pop(), prefix);
            root.appendChild(node2);
            return root;
          }
          return _SemanticProcessor.getInstance().postfixNode_(root, prefix);
        }
        const split = SemanticUtil.sliceNodes(nodes, SemanticPred.isOperator);
        if (split.head.length === 0) {
          prefix.push(split.div);
          return _SemanticProcessor.getInstance().operationsTree_(split.tail, root, lastop, prefix);
        }
        const node = _SemanticProcessor.getInstance().wrapFactor(prefix, split);
        const newNode = _SemanticProcessor.getInstance().appendOperand_(root, lastop, node);
        return _SemanticProcessor.getInstance().addFactor(newNode, split);
      }
      appendOperand_(root, op, node) {
        if (root.type !== semantic_meaning_js_1.SemanticType.INFIXOP) {
          return _SemanticProcessor.getInstance().infixNode_([root, node], op);
        }
        const division = _SemanticProcessor.getInstance().appendDivisionOp_(root, op, node);
        if (division) {
          return division;
        }
        if (_SemanticProcessor.getInstance().appendExistingOperator_(root, op, node)) {
          return root;
        }
        return op.role === semantic_meaning_js_1.SemanticRole.MULTIPLICATION ? _SemanticProcessor.getInstance().appendMultiplicativeOp_(root, op, node) : _SemanticProcessor.getInstance().appendAdditiveOp_(root, op, node);
      }
      appendDivisionOp_(root, op, node) {
        if (op.role === semantic_meaning_js_1.SemanticRole.DIVISION) {
          if (SemanticPred.isImplicit(root)) {
            return _SemanticProcessor.getInstance().infixNode_([root, node], op);
          }
          return _SemanticProcessor.getInstance().appendLastOperand_(root, op, node);
        }
        return root.role === semantic_meaning_js_1.SemanticRole.DIVISION ? _SemanticProcessor.getInstance().infixNode_([root, node], op) : null;
      }
      appendLastOperand_(root, op, node) {
        let lastRoot = root;
        let lastChild = root.childNodes[root.childNodes.length - 1];
        while (lastChild && lastChild.type === semantic_meaning_js_1.SemanticType.INFIXOP && !SemanticPred.isImplicit(lastChild)) {
          lastRoot = lastChild;
          lastChild = lastRoot.childNodes[root.childNodes.length - 1];
        }
        const newNode = _SemanticProcessor.getInstance().infixNode_([lastRoot.childNodes.pop(), node], op);
        lastRoot.appendChild(newNode);
        return root;
      }
      appendMultiplicativeOp_(root, op, node) {
        if (SemanticPred.isImplicit(root)) {
          return _SemanticProcessor.getInstance().infixNode_([root, node], op);
        }
        let lastRoot = root;
        let lastChild = root.childNodes[root.childNodes.length - 1];
        while (lastChild && lastChild.type === semantic_meaning_js_1.SemanticType.INFIXOP && !SemanticPred.isImplicit(lastChild)) {
          lastRoot = lastChild;
          lastChild = lastRoot.childNodes[root.childNodes.length - 1];
        }
        const newNode = _SemanticProcessor.getInstance().infixNode_([lastRoot.childNodes.pop(), node], op);
        lastRoot.appendChild(newNode);
        return root;
      }
      appendAdditiveOp_(root, op, node) {
        return _SemanticProcessor.getInstance().infixNode_([root, node], op);
      }
      appendExistingOperator_(root, op, node) {
        if (!root || root.type !== semantic_meaning_js_1.SemanticType.INFIXOP || SemanticPred.isImplicit(root)) {
          return false;
        }
        if (root.contentNodes[0].equals(op)) {
          root.appendContentNode(op);
          root.appendChild(node);
          return true;
        }
        return _SemanticProcessor.getInstance().appendExistingOperator_(root.childNodes[root.childNodes.length - 1], op, node);
      }
      getFencesInRow_(nodes) {
        let partition = SemanticUtil.partitionNodes(nodes, SemanticPred.isFence);
        partition = _SemanticProcessor.purgeFences_(partition);
        const felem = partition.comp.shift();
        return _SemanticProcessor.getInstance().fences_(partition.rel, partition.comp, [], [felem]);
      }
      fences_(fences, content, openStack, contentStack) {
        if (fences.length === 0 && openStack.length === 0) {
          return contentStack[0];
        }
        const interval = semantic_heuristic_factory_js_1.SemanticHeuristics.run("bracketed_interval", [fences[0], fences[1], ...content[0] || []], () => null);
        if (interval) {
          fences.shift();
          fences.shift();
          content.shift();
          const stack = contentStack.pop() || [];
          contentStack.push([...stack, interval, ...content.shift()]);
          return _SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
        }
        const openPred = (x) => SemanticPred.isRole(x, semantic_meaning_js_1.SemanticRole.OPEN);
        if (fences.length === 0) {
          const result = contentStack.shift();
          while (openStack.length > 0) {
            if (openPred(openStack[0])) {
              const firstOpen = openStack.shift();
              _SemanticProcessor.fenceToPunct_(firstOpen);
              result.push(firstOpen);
            } else {
              const split = SemanticUtil.sliceNodes(openStack, openPred);
              const cutLength = split.head.length - 1;
              const innerNodes = _SemanticProcessor.getInstance().neutralFences_(split.head, contentStack.slice(0, cutLength));
              contentStack = contentStack.slice(cutLength);
              result.push(...innerNodes);
              if (split.div) {
                split.tail.unshift(split.div);
              }
              openStack = split.tail;
            }
            result.push(...contentStack.shift());
          }
          return result;
        }
        const lastOpen = openStack[openStack.length - 1];
        const firstRole = fences[0].role;
        if (firstRole === semantic_meaning_js_1.SemanticRole.OPEN || SemanticPred.isNeutralFence(fences[0]) && !(lastOpen && SemanticPred.compareNeutralFences(fences[0], lastOpen))) {
          openStack.push(fences.shift());
          const cont = content.shift();
          if (cont) {
            contentStack.push(cont);
          }
          return _SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
        }
        if (lastOpen && firstRole === semantic_meaning_js_1.SemanticRole.CLOSE && lastOpen.role === semantic_meaning_js_1.SemanticRole.OPEN) {
          const fenced2 = _SemanticProcessor.getInstance().horizontalFencedNode_(openStack.pop(), fences.shift(), contentStack.pop());
          contentStack.push(contentStack.pop().concat([fenced2], content.shift()));
          return _SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
        }
        if (lastOpen && SemanticPred.compareNeutralFences(fences[0], lastOpen)) {
          if (!SemanticPred.elligibleLeftNeutral(lastOpen) || !SemanticPred.elligibleRightNeutral(fences[0])) {
            openStack.push(fences.shift());
            const cont = content.shift();
            if (cont) {
              contentStack.push(cont);
            }
            return _SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
          }
          const fenced2 = _SemanticProcessor.getInstance().horizontalFencedNode_(openStack.pop(), fences.shift(), contentStack.pop());
          contentStack.push(contentStack.pop().concat([fenced2], content.shift()));
          return _SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
        }
        if (lastOpen && firstRole === semantic_meaning_js_1.SemanticRole.CLOSE && SemanticPred.isNeutralFence(lastOpen) && openStack.some(openPred)) {
          const split = SemanticUtil.sliceNodes(openStack, openPred, true);
          const rightContent = contentStack.pop();
          const cutLength = contentStack.length - split.tail.length + 1;
          const innerNodes = _SemanticProcessor.getInstance().neutralFences_(split.tail, contentStack.slice(cutLength));
          contentStack = contentStack.slice(0, cutLength);
          const fenced2 = _SemanticProcessor.getInstance().horizontalFencedNode_(split.div, fences.shift(), contentStack.pop().concat(innerNodes, rightContent));
          contentStack.push(contentStack.pop().concat([fenced2], content.shift()));
          return _SemanticProcessor.getInstance().fences_(fences, content, split.head, contentStack);
        }
        const fenced = fences.shift();
        _SemanticProcessor.fenceToPunct_(fenced);
        contentStack.push(contentStack.pop().concat([fenced], content.shift()));
        return _SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
      }
      neutralFences_(fences, content) {
        if (fences.length === 0) {
          return fences;
        }
        if (fences.length === 1) {
          _SemanticProcessor.fenceToPunct_(fences[0]);
          return fences;
        }
        const firstFence = fences.shift();
        if (!SemanticPred.elligibleLeftNeutral(firstFence)) {
          _SemanticProcessor.fenceToPunct_(firstFence);
          const restContent = content.shift();
          restContent.unshift(firstFence);
          return restContent.concat(_SemanticProcessor.getInstance().neutralFences_(fences, content));
        }
        const split = SemanticUtil.sliceNodes(fences, function(x) {
          return SemanticPred.compareNeutralFences(x, firstFence);
        });
        if (!split.div) {
          _SemanticProcessor.fenceToPunct_(firstFence);
          const restContent = content.shift();
          restContent.unshift(firstFence);
          return restContent.concat(_SemanticProcessor.getInstance().neutralFences_(fences, content));
        }
        if (!SemanticPred.elligibleRightNeutral(split.div)) {
          _SemanticProcessor.fenceToPunct_(split.div);
          fences.unshift(firstFence);
          return _SemanticProcessor.getInstance().neutralFences_(fences, content);
        }
        const newContent = _SemanticProcessor.getInstance().combineFencedContent_(firstFence, split.div, split.head, content);
        if (split.tail.length > 0) {
          const leftContent = newContent.shift();
          const result = _SemanticProcessor.getInstance().neutralFences_(split.tail, newContent);
          return leftContent.concat(result);
        }
        return newContent[0];
      }
      combineFencedContent_(leftFence, rightFence, midFences, content) {
        if (midFences.length === 0) {
          const fenced2 = _SemanticProcessor.getInstance().horizontalFencedNode_(leftFence, rightFence, content.shift());
          if (content.length > 0) {
            content[0].unshift(fenced2);
          } else {
            content = [[fenced2]];
          }
          return content;
        }
        const leftContent = content.shift();
        const cutLength = midFences.length - 1;
        const midContent = content.slice(0, cutLength);
        content = content.slice(cutLength);
        const rightContent = content.shift();
        const innerNodes = _SemanticProcessor.getInstance().neutralFences_(midFences, midContent);
        leftContent.push(...innerNodes);
        leftContent.push(...rightContent);
        const fenced = _SemanticProcessor.getInstance().horizontalFencedNode_(leftFence, rightFence, leftContent);
        if (content.length > 0) {
          content[0].unshift(fenced);
        } else {
          content = [[fenced]];
        }
        return content;
      }
      horizontalFencedNode_(ofence, cfence, content) {
        const childNode = _SemanticProcessor.getInstance().row(content);
        let newNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.FENCED, [childNode], [ofence, cfence]);
        if (ofence.role === semantic_meaning_js_1.SemanticRole.OPEN) {
          _SemanticProcessor.getInstance().classifyHorizontalFence_(newNode);
          newNode = semantic_heuristic_factory_js_1.SemanticHeuristics.run("propagateComposedFunction", newNode);
        } else {
          newNode.role = ofence.role;
        }
        newNode = semantic_heuristic_factory_js_1.SemanticHeuristics.run("detect_cycle", newNode);
        return _SemanticProcessor.rewriteFencedNode_(newNode);
      }
      classifyHorizontalFence_(node) {
        node.role = semantic_meaning_js_1.SemanticRole.LEFTRIGHT;
        const children = node.childNodes;
        if (!SemanticPred.isSetNode(node) || children.length > 1) {
          return;
        }
        if (children.length === 0 || children[0].type === semantic_meaning_js_1.SemanticType.EMPTY) {
          node.role = semantic_meaning_js_1.SemanticRole.SETEMPTY;
          return;
        }
        const type = children[0].type;
        if (children.length === 1 && SemanticPred.isSingletonSetContent(children[0])) {
          node.role = semantic_meaning_js_1.SemanticRole.SETSINGLE;
          return;
        }
        const role = children[0].role;
        if (type !== semantic_meaning_js_1.SemanticType.PUNCTUATED || role !== semantic_meaning_js_1.SemanticRole.SEQUENCE) {
          return;
        }
        if (children[0].contentNodes[0].role === semantic_meaning_js_1.SemanticRole.COMMA) {
          node.role = semantic_meaning_js_1.SemanticRole.SETCOLLECT;
          return;
        }
        if (children[0].contentNodes.length === 1 && (children[0].contentNodes[0].role === semantic_meaning_js_1.SemanticRole.VBAR || children[0].contentNodes[0].role === semantic_meaning_js_1.SemanticRole.COLON)) {
          node.role = semantic_meaning_js_1.SemanticRole.SETEXT;
          _SemanticProcessor.getInstance().setExtension_(node);
          return;
        }
      }
      setExtension_(set) {
        const extender = set.childNodes[0].childNodes[0];
        if (extender && extender.type === semantic_meaning_js_1.SemanticType.INFIXOP && extender.contentNodes.length === 1 && SemanticPred.isMembership(extender.contentNodes[0])) {
          extender.addAnnotation("set", "intensional");
          extender.contentNodes[0].addAnnotation("set", "intensional");
        }
      }
      getPunctuationInRow_(nodes) {
        if (nodes.length <= 1) {
          return nodes;
        }
        const allowedType = (x) => {
          const type = x.type;
          return type === "punctuation" || type === "text" || type === "operator" || type === "relation";
        };
        const partition = SemanticUtil.partitionNodes(nodes, function(x) {
          if (!SemanticPred.isPunctuation(x)) {
            return false;
          }
          if (SemanticPred.isPunctuation(x) && !SemanticPred.isRole(x, semantic_meaning_js_1.SemanticRole.ELLIPSIS)) {
            return true;
          }
          const index = nodes.indexOf(x);
          if (index === 0) {
            if (nodes[1] && allowedType(nodes[1])) {
              return false;
            }
            return true;
          }
          const prev = nodes[index - 1];
          if (index === nodes.length - 1) {
            if (allowedType(prev)) {
              return false;
            }
            return true;
          }
          const next = nodes[index + 1];
          if (allowedType(prev) && allowedType(next)) {
            return false;
          }
          return true;
        });
        if (partition.rel.length === 0) {
          return nodes;
        }
        let newNodes = [];
        let firstComp = partition.comp.shift();
        if (firstComp.length > 0) {
          newNodes.push(_SemanticProcessor.getInstance().row(firstComp));
        }
        let relCounter = 0;
        while (partition.comp.length > 0) {
          let puncts = [];
          const saveCount = relCounter;
          do {
            puncts.push(partition.rel[relCounter++]);
            firstComp = partition.comp.shift();
          } while (partition.rel[relCounter] && firstComp && firstComp.length === 0);
          puncts = semantic_heuristic_factory_js_1.SemanticHeuristics.run("ellipses", puncts);
          partition.rel.splice(saveCount, relCounter - saveCount, ...puncts);
          relCounter = saveCount + puncts.length;
          newNodes = newNodes.concat(puncts);
          if (firstComp && firstComp.length > 0) {
            newNodes.push(_SemanticProcessor.getInstance().row(firstComp));
          }
        }
        return newNodes.length === 1 && partition.rel.length === 1 ? newNodes : [
          _SemanticProcessor.getInstance().punctuatedNode_(newNodes, partition.rel)
        ];
      }
      punctuatedNode_(nodes, punctuations) {
        const newNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.PUNCTUATED, nodes, punctuations);
        if (punctuations.length === nodes.length) {
          const firstRole = punctuations[0].role;
          if (firstRole !== semantic_meaning_js_1.SemanticRole.UNKNOWN && punctuations.every(function(punct) {
            return punct.role === firstRole;
          })) {
            newNode.role = firstRole;
            return newNode;
          }
        }
        const fpunct = punctuations[0];
        if (SemanticPred.singlePunctAtPosition(nodes, punctuations, 0)) {
          newNode.role = fpunct.childNodes.length && !fpunct.embellished ? fpunct.role : semantic_meaning_js_1.SemanticRole.STARTPUNCT;
        } else if (SemanticPred.singlePunctAtPosition(nodes, punctuations, nodes.length - 1)) {
          newNode.role = fpunct.childNodes.length && !fpunct.embellished ? fpunct.role : semantic_meaning_js_1.SemanticRole.ENDPUNCT;
        } else if (punctuations.every((x) => SemanticPred.isRole(x, semantic_meaning_js_1.SemanticRole.DUMMY))) {
          newNode.role = semantic_meaning_js_1.SemanticRole.TEXT;
        } else if (punctuations.every((x) => SemanticPred.isRole(x, semantic_meaning_js_1.SemanticRole.SPACE))) {
          newNode.role = semantic_meaning_js_1.SemanticRole.SPACE;
        } else {
          newNode.role = semantic_meaning_js_1.SemanticRole.SEQUENCE;
        }
        return newNode;
      }
      dummyNode_(children) {
        const commata = _SemanticProcessor.getInstance().factory_.makeMultipleContentNodes(children.length - 1, semantic_attr_js_1.NamedSymbol.invisibleComma);
        commata.forEach(function(comma) {
          comma.role = semantic_meaning_js_1.SemanticRole.DUMMY;
        });
        return _SemanticProcessor.getInstance().punctuatedNode_(children, commata);
      }
      accentRole_(node, type) {
        if (!SemanticPred.isAccent(node)) {
          return false;
        }
        const content = node.textContent;
        const role = semantic_attr_js_1.SemanticMap.Secondary.get(content, semantic_meaning_js_1.SemanticSecondary.BAR) || semantic_attr_js_1.SemanticMap.Secondary.get(content, semantic_meaning_js_1.SemanticSecondary.TILDE) || node.role;
        node.role = type === semantic_meaning_js_1.SemanticType.UNDERSCORE ? semantic_meaning_js_1.SemanticRole.UNDERACCENT : semantic_meaning_js_1.SemanticRole.OVERACCENT;
        node.addAnnotation("accent", role);
        return true;
      }
      accentNode_(center, children, type, length, accent) {
        children = children.slice(0, length + 1);
        const child1 = children[1];
        const child2 = children[2];
        let innerNode;
        if (!accent && child2) {
          innerNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.SUBSCRIPT, [center, child1], []);
          innerNode.role = semantic_meaning_js_1.SemanticRole.SUBSUP;
          children = [innerNode, child2];
          type = semantic_meaning_js_1.SemanticType.SUPERSCRIPT;
        }
        if (accent) {
          const underAccent = _SemanticProcessor.getInstance().accentRole_(child1, type);
          if (child2) {
            const overAccent = _SemanticProcessor.getInstance().accentRole_(child2, semantic_meaning_js_1.SemanticType.OVERSCORE);
            if (overAccent && !underAccent) {
              innerNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.OVERSCORE, [center, child2], []);
              children = [innerNode, child1];
              type = semantic_meaning_js_1.SemanticType.UNDERSCORE;
            } else {
              innerNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.UNDERSCORE, [center, child1], []);
              children = [innerNode, child2];
              type = semantic_meaning_js_1.SemanticType.OVERSCORE;
            }
            innerNode.role = semantic_meaning_js_1.SemanticRole.UNDEROVER;
          }
        }
        return _SemanticProcessor.getInstance().makeLimitNode_(center, children, innerNode, type);
      }
      makeLimitNode_(center, children, innerNode, type) {
        if (type === semantic_meaning_js_1.SemanticType.LIMUPPER && center.type === semantic_meaning_js_1.SemanticType.LIMLOWER) {
          center.childNodes.push(children[1]);
          children[1].parent = center;
          center.type = semantic_meaning_js_1.SemanticType.LIMBOTH;
          return center;
        }
        if (type === semantic_meaning_js_1.SemanticType.LIMLOWER && center.type === semantic_meaning_js_1.SemanticType.LIMUPPER) {
          center.childNodes.splice(1, -1, children[1]);
          children[1].parent = center;
          center.type = semantic_meaning_js_1.SemanticType.LIMBOTH;
          return center;
        }
        const newNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(type, children, []);
        const embellished = SemanticPred.isEmbellished(center);
        if (innerNode) {
          innerNode.embellished = embellished;
        }
        newNode.embellished = embellished;
        newNode.role = center.role;
        return newNode;
      }
      getFunctionsInRow_(restNodes, opt_result) {
        const result = opt_result || [];
        if (restNodes.length === 0) {
          return result;
        }
        const firstNode = restNodes.shift();
        const heuristic = _SemanticProcessor.classifyFunction_(firstNode, restNodes);
        if (!heuristic) {
          result.push(firstNode);
          return _SemanticProcessor.getInstance().getFunctionsInRow_(restNodes, result);
        }
        const processedRest = _SemanticProcessor.getInstance().getFunctionsInRow_(restNodes, []);
        const newRest = _SemanticProcessor.getInstance().getFunctionArgs_(firstNode, processedRest, heuristic);
        return result.concat(newRest);
      }
      getFunctionArgs_(func, rest, heuristic) {
        let partition, arg, funcNode;
        switch (heuristic) {
          case "integral": {
            const components = _SemanticProcessor.getInstance().getIntegralArgs_(rest);
            if (!components.intvar && !components.integrand.length) {
              components.rest.unshift(func);
              return components.rest;
            }
            const integrand = _SemanticProcessor.getInstance().row(components.integrand);
            funcNode = _SemanticProcessor.getInstance().integralNode_(func, integrand, components.intvar);
            semantic_heuristic_factory_js_1.SemanticHeuristics.run("intvar_from_fraction", funcNode);
            components.rest.unshift(funcNode);
            return components.rest;
          }
          case "prefix": {
            if (rest[0] && rest[0].type === semantic_meaning_js_1.SemanticType.FENCED) {
              const arg2 = rest.shift();
              if (!SemanticPred.isNeutralFence(arg2)) {
                arg2.role = semantic_meaning_js_1.SemanticRole.LEFTRIGHT;
              }
              funcNode = _SemanticProcessor.getInstance().functionNode_(func, arg2);
              rest.unshift(funcNode);
              return rest;
            }
            partition = SemanticUtil.sliceNodes(rest, SemanticPred.isPrefixFunctionBoundary);
            if (!partition.head.length) {
              if (!partition.div || !SemanticPred.isType(partition.div, semantic_meaning_js_1.SemanticType.APPL)) {
                rest.unshift(func);
                return rest;
              }
              arg = partition.div;
            } else {
              arg = _SemanticProcessor.getInstance().row(partition.head);
              if (partition.div) {
                partition.tail.unshift(partition.div);
              }
            }
            funcNode = _SemanticProcessor.getInstance().functionNode_(func, arg);
            partition.tail.unshift(funcNode);
            return partition.tail;
          }
          case "bigop": {
            partition = SemanticUtil.sliceNodes(rest, SemanticPred.isBigOpBoundary);
            if (!partition.head.length) {
              rest.unshift(func);
              return rest;
            }
            arg = _SemanticProcessor.getInstance().row(partition.head);
            funcNode = _SemanticProcessor.getInstance().bigOpNode_(func, arg);
            if (partition.div) {
              partition.tail.unshift(partition.div);
            }
            partition.tail.unshift(funcNode);
            return partition.tail;
          }
          case "simple":
          default: {
            if (rest.length === 0) {
              return [func];
            }
            const firstArg = rest[0];
            if (firstArg.type === semantic_meaning_js_1.SemanticType.FENCED && !SemanticPred.isNeutralFence(firstArg) && SemanticPred.isSimpleFunctionScope(firstArg)) {
              firstArg.role = semantic_meaning_js_1.SemanticRole.LEFTRIGHT;
              _SemanticProcessor.propagateFunctionRole_(func, semantic_meaning_js_1.SemanticRole.SIMPLEFUNC);
              funcNode = _SemanticProcessor.getInstance().functionNode_(func, rest.shift());
              rest.unshift(funcNode);
              return rest;
            }
            rest.unshift(func);
            return rest;
          }
        }
      }
      getIntegralArgs_(nodes, args = []) {
        if (nodes.length === 0) {
          const partition = SemanticUtil.sliceNodes(args, SemanticPred.isBigOpBoundary);
          if (partition.div) {
            partition.tail.unshift(partition.div);
          }
          return { integrand: partition.head, intvar: null, rest: partition.tail };
        }
        semantic_heuristic_factory_js_1.SemanticHeuristics.run("intvar_from_implicit", nodes);
        const firstNode = nodes[0];
        if (SemanticPred.isGeneralFunctionBoundary(firstNode)) {
          const { integrand: args2, rest: rest2 } = _SemanticProcessor.getInstance().getIntegralArgs_(args);
          return { integrand: args2, intvar: null, rest: rest2.concat(nodes) };
        }
        if (SemanticPred.isIntegralDxBoundarySingle(firstNode)) {
          firstNode.role = semantic_meaning_js_1.SemanticRole.INTEGRAL;
          return { integrand: args, intvar: firstNode, rest: nodes.slice(1) };
        }
        if (nodes[1] && SemanticPred.isIntegralDxBoundary(firstNode, nodes[1])) {
          const intvar = _SemanticProcessor.getInstance().prefixNode_(nodes[1], [firstNode]);
          intvar.role = semantic_meaning_js_1.SemanticRole.INTEGRAL;
          return { integrand: args, intvar, rest: nodes.slice(2) };
        }
        args.push(nodes.shift());
        return _SemanticProcessor.getInstance().getIntegralArgs_(nodes, args);
      }
      functionNode_(func, arg) {
        const applNode = _SemanticProcessor.getInstance().factory_.makeContentNode(semantic_attr_js_1.NamedSymbol.functionApplication);
        const appl = _SemanticProcessor.getInstance().funcAppls[func.id];
        if (appl) {
          applNode.mathmlTree = appl.mathmlTree;
          applNode.mathml = appl.mathml;
          applNode.annotation = appl.annotation;
          applNode.attributes = appl.attributes;
          delete _SemanticProcessor.getInstance().funcAppls[func.id];
        }
        applNode.type = semantic_meaning_js_1.SemanticType.PUNCTUATION;
        applNode.role = semantic_meaning_js_1.SemanticRole.APPLICATION;
        const funcop = _SemanticProcessor.getFunctionOp_(func, function(node) {
          return SemanticPred.isType(node, semantic_meaning_js_1.SemanticType.FUNCTION) || SemanticPred.isType(node, semantic_meaning_js_1.SemanticType.IDENTIFIER) && SemanticPred.isRole(node, semantic_meaning_js_1.SemanticRole.SIMPLEFUNC);
        });
        return _SemanticProcessor.getInstance().functionalNode_(semantic_meaning_js_1.SemanticType.APPL, [func, arg], funcop, [applNode]);
      }
      bigOpNode_(bigOp, arg) {
        const largeop = _SemanticProcessor.getFunctionOp_(bigOp, (x) => SemanticPred.isType(x, semantic_meaning_js_1.SemanticType.LARGEOP));
        return _SemanticProcessor.getInstance().functionalNode_(semantic_meaning_js_1.SemanticType.BIGOP, [bigOp, arg], largeop, []);
      }
      integralNode_(integral, integrand, intvar) {
        integrand = integrand || _SemanticProcessor.getInstance().factory_.makeEmptyNode();
        intvar = intvar || _SemanticProcessor.getInstance().factory_.makeEmptyNode();
        const largeop = _SemanticProcessor.getFunctionOp_(integral, (x) => SemanticPred.isType(x, semantic_meaning_js_1.SemanticType.LARGEOP));
        return _SemanticProcessor.getInstance().functionalNode_(semantic_meaning_js_1.SemanticType.INTEGRAL, [integral, integrand, intvar], largeop, []);
      }
      functionalNode_(type, children, operator, content) {
        const funcop = children[0];
        let oldParent;
        if (operator) {
          oldParent = operator.parent;
          content.push(operator);
        }
        const newNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(type, children, content);
        newNode.role = funcop.role;
        if (oldParent) {
          operator.parent = oldParent;
        }
        return newNode;
      }
      fractionNode_(denom, enume) {
        const newNode = _SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_js_1.SemanticType.FRACTION, [denom, enume], []);
        newNode.role = newNode.childNodes.every(function(x) {
          return SemanticPred.isType(x, semantic_meaning_js_1.SemanticType.NUMBER) && SemanticPred.isRole(x, semantic_meaning_js_1.SemanticRole.INTEGER);
        }) ? semantic_meaning_js_1.SemanticRole.VULGAR : newNode.childNodes.every(SemanticPred.isPureUnit) ? semantic_meaning_js_1.SemanticRole.UNIT : semantic_meaning_js_1.SemanticRole.DIVISION;
        return semantic_heuristic_factory_js_1.SemanticHeuristics.run("propagateSimpleFunction", newNode);
      }
      scriptNode_(nodes, role, opt_noSingle) {
        let newNode;
        switch (nodes.length) {
          case 0:
            newNode = _SemanticProcessor.getInstance().factory_.makeEmptyNode();
            break;
          case 1:
            newNode = nodes[0];
            if (opt_noSingle) {
              return newNode;
            }
            break;
          default:
            newNode = _SemanticProcessor.getInstance().dummyNode_(nodes);
        }
        newNode.role = role;
        return newNode;
      }
      findNestedRow_(nodes, semantic, level, value) {
        if (level > 3) {
          return null;
        }
        for (let i = 0, node; node = nodes[i]; i++) {
          const tag = DomUtil.tagName(node);
          if (tag !== semantic_util_js_1.MMLTAGS.MSPACE) {
            if (tag === semantic_util_js_1.MMLTAGS.MROW) {
              return _SemanticProcessor.getInstance().findNestedRow_(DomUtil.toArray(node.childNodes), semantic, level + 1, value);
            }
            if (_SemanticProcessor.findSemantics(node, semantic, value)) {
              return node;
            }
          }
        }
        return null;
      }
    };
    exports2.SemanticProcessor = SemanticProcessor;
    SemanticProcessor.FENCE_TO_PUNCT_ = {
      [semantic_meaning_js_1.SemanticRole.METRIC]: semantic_meaning_js_1.SemanticRole.METRIC,
      [semantic_meaning_js_1.SemanticRole.NEUTRAL]: semantic_meaning_js_1.SemanticRole.VBAR,
      [semantic_meaning_js_1.SemanticRole.OPEN]: semantic_meaning_js_1.SemanticRole.OPENFENCE,
      [semantic_meaning_js_1.SemanticRole.CLOSE]: semantic_meaning_js_1.SemanticRole.CLOSEFENCE
    };
    SemanticProcessor.MML_TO_LIMIT_ = {
      [semantic_util_js_1.MMLTAGS.MSUB]: { type: semantic_meaning_js_1.SemanticType.LIMLOWER, length: 1 },
      [semantic_util_js_1.MMLTAGS.MUNDER]: { type: semantic_meaning_js_1.SemanticType.LIMLOWER, length: 1 },
      [semantic_util_js_1.MMLTAGS.MSUP]: { type: semantic_meaning_js_1.SemanticType.LIMUPPER, length: 1 },
      [semantic_util_js_1.MMLTAGS.MOVER]: { type: semantic_meaning_js_1.SemanticType.LIMUPPER, length: 1 },
      [semantic_util_js_1.MMLTAGS.MSUBSUP]: { type: semantic_meaning_js_1.SemanticType.LIMBOTH, length: 2 },
      [semantic_util_js_1.MMLTAGS.MUNDEROVER]: { type: semantic_meaning_js_1.SemanticType.LIMBOTH, length: 2 }
    };
    SemanticProcessor.MML_TO_BOUNDS_ = {
      [semantic_util_js_1.MMLTAGS.MSUB]: { type: semantic_meaning_js_1.SemanticType.SUBSCRIPT, length: 1, accent: false },
      [semantic_util_js_1.MMLTAGS.MSUP]: {
        type: semantic_meaning_js_1.SemanticType.SUPERSCRIPT,
        length: 1,
        accent: false
      },
      [semantic_util_js_1.MMLTAGS.MSUBSUP]: {
        type: semantic_meaning_js_1.SemanticType.SUBSCRIPT,
        length: 2,
        accent: false
      },
      [semantic_util_js_1.MMLTAGS.MUNDER]: {
        type: semantic_meaning_js_1.SemanticType.UNDERSCORE,
        length: 1,
        accent: true
      },
      [semantic_util_js_1.MMLTAGS.MOVER]: { type: semantic_meaning_js_1.SemanticType.OVERSCORE, length: 1, accent: true },
      [semantic_util_js_1.MMLTAGS.MUNDEROVER]: {
        type: semantic_meaning_js_1.SemanticType.UNDERSCORE,
        length: 2,
        accent: true
      }
    };
    SemanticProcessor.CLASSIFY_FUNCTION_ = {
      [semantic_meaning_js_1.SemanticRole.INTEGRAL]: "integral",
      [semantic_meaning_js_1.SemanticRole.SUM]: "bigop",
      [semantic_meaning_js_1.SemanticRole.PREFIXFUNC]: "prefix",
      [semantic_meaning_js_1.SemanticRole.LIMFUNC]: "prefix",
      [semantic_meaning_js_1.SemanticRole.SIMPLEFUNC]: "prefix",
      [semantic_meaning_js_1.SemanticRole.COMPFUNC]: "prefix"
    };
    SemanticProcessor.MATHJAX_FONTS = {
      "-tex-caligraphic": semantic_meaning_js_1.SemanticFont.CALIGRAPHIC,
      "-tex-caligraphic-bold": semantic_meaning_js_1.SemanticFont.CALIGRAPHICBOLD,
      "-tex-calligraphic": semantic_meaning_js_1.SemanticFont.CALIGRAPHIC,
      "-tex-calligraphic-bold": semantic_meaning_js_1.SemanticFont.CALIGRAPHICBOLD,
      "-tex-oldstyle": semantic_meaning_js_1.SemanticFont.OLDSTYLE,
      "-tex-oldstyle-bold": semantic_meaning_js_1.SemanticFont.OLDSTYLEBOLD,
      "-tex-mathit": semantic_meaning_js_1.SemanticFont.ITALIC
    };
  }
});

// node_modules/speech-rule-engine/js/speech_rules/mathspeak_util.js
var require_mathspeak_util = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/mathspeak_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.spaceoutText = spaceoutText;
    exports2.spaceoutNumber = spaceoutNumber;
    exports2.spaceoutIdentifier = spaceoutIdentifier;
    exports2.resetNestingDepth = resetNestingDepth;
    exports2.fractionNestingDepth = fractionNestingDepth;
    exports2.openingFractionVerbose = openingFractionVerbose;
    exports2.closingFractionVerbose = closingFractionVerbose;
    exports2.overFractionVerbose = overFractionVerbose;
    exports2.openingFractionBrief = openingFractionBrief;
    exports2.closingFractionBrief = closingFractionBrief;
    exports2.openingFractionSbrief = openingFractionSbrief;
    exports2.closingFractionSbrief = closingFractionSbrief;
    exports2.overFractionSbrief = overFractionSbrief;
    exports2.isSmallVulgarFraction = isSmallVulgarFraction;
    exports2.nestedSubSuper = nestedSubSuper;
    exports2.subscriptVerbose = subscriptVerbose;
    exports2.subscriptBrief = subscriptBrief;
    exports2.superscriptVerbose = superscriptVerbose;
    exports2.superscriptBrief = superscriptBrief;
    exports2.baselineVerbose = baselineVerbose;
    exports2.baselineBrief = baselineBrief;
    exports2.radicalNestingDepth = radicalNestingDepth;
    exports2.openingRadicalVerbose = openingRadicalVerbose;
    exports2.closingRadicalVerbose = closingRadicalVerbose;
    exports2.indexRadicalVerbose = indexRadicalVerbose;
    exports2.openingRadicalBrief = openingRadicalBrief;
    exports2.closingRadicalBrief = closingRadicalBrief;
    exports2.indexRadicalBrief = indexRadicalBrief;
    exports2.openingRadicalSbrief = openingRadicalSbrief;
    exports2.indexRadicalSbrief = indexRadicalSbrief;
    exports2.nestedUnderscript = nestedUnderscript;
    exports2.endscripts = endscripts;
    exports2.nestedOverscript = nestedOverscript;
    exports2.determinantIsSimple = determinantIsSimple;
    exports2.generateBaselineConstraint = generateBaselineConstraint;
    exports2.removeParens = removeParens;
    exports2.generateTensorRules = generateTensorRules;
    exports2.smallRoot = smallRoot;
    var span_js_1 = require_span();
    var BaseUtil = require_base_util();
    var DomUtil = require_dom_util();
    var XpathUtil = require_xpath_util();
    var locale_js_1 = require_locale();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_processor_js_1 = require_semantic_processor();
    var nestingDepth = {};
    function spaceoutText(node) {
      return Array.from(node.textContent).map(span_js_1.Span.stringEmpty);
    }
    function spaceoutNodes(node, correction) {
      const content = Array.from(node.textContent);
      const result = [];
      const processor = semantic_processor_js_1.SemanticProcessor.getInstance();
      const doc = node.ownerDocument;
      for (let i = 0, chr; chr = content[i]; i++) {
        const leaf = processor.getNodeFactory().makeLeafNode(chr, semantic_meaning_js_1.SemanticFont.UNKNOWN);
        const sn = processor.identifierNode(leaf, semantic_meaning_js_1.SemanticFont.UNKNOWN, "");
        correction(sn);
        result.push(sn.xml(doc));
      }
      return result;
    }
    function spaceoutNumber(node) {
      return spaceoutNodes(node, function(sn) {
        if (!sn.textContent.match(/\W/)) {
          sn.type = semantic_meaning_js_1.SemanticType.NUMBER;
        }
      });
    }
    function spaceoutIdentifier(node) {
      return spaceoutNodes(node, function(sn) {
        sn.font = semantic_meaning_js_1.SemanticFont.UNKNOWN;
        sn.type = semantic_meaning_js_1.SemanticType.IDENTIFIER;
      });
    }
    var nestingBarriers = [
      semantic_meaning_js_1.SemanticType.CASES,
      semantic_meaning_js_1.SemanticType.CELL,
      semantic_meaning_js_1.SemanticType.INTEGRAL,
      semantic_meaning_js_1.SemanticType.LINE,
      semantic_meaning_js_1.SemanticType.MATRIX,
      semantic_meaning_js_1.SemanticType.MULTILINE,
      semantic_meaning_js_1.SemanticType.OVERSCORE,
      semantic_meaning_js_1.SemanticType.ROOT,
      semantic_meaning_js_1.SemanticType.ROW,
      semantic_meaning_js_1.SemanticType.SQRT,
      semantic_meaning_js_1.SemanticType.SUBSCRIPT,
      semantic_meaning_js_1.SemanticType.SUPERSCRIPT,
      semantic_meaning_js_1.SemanticType.TABLE,
      semantic_meaning_js_1.SemanticType.UNDERSCORE,
      semantic_meaning_js_1.SemanticType.VECTOR
    ];
    function resetNestingDepth(node) {
      nestingDepth = {};
      return [node];
    }
    function getNestingDepth(type, node, tags, opt_barrierTags, opt_barrierAttrs, opt_func) {
      opt_barrierTags = opt_barrierTags || nestingBarriers;
      opt_barrierAttrs = opt_barrierAttrs || {};
      opt_func = opt_func || function(_node) {
        return false;
      };
      const xmlText = DomUtil.serializeXml(node);
      if (!nestingDepth[type]) {
        nestingDepth[type] = {};
      }
      if (nestingDepth[type][xmlText]) {
        return nestingDepth[type][xmlText];
      }
      if (opt_func(node) || tags.indexOf(node.tagName) < 0) {
        return 0;
      }
      const depth = computeNestingDepth_(node, tags, BaseUtil.setdifference(opt_barrierTags, tags), opt_barrierAttrs, opt_func, 0);
      nestingDepth[type][xmlText] = depth;
      return depth;
    }
    function containsAttr(node, attrs) {
      if (!node.attributes) {
        return false;
      }
      const attributes = DomUtil.toArray(node.attributes);
      for (let i = 0, attr; attr = attributes[i]; i++) {
        if (attrs[attr.nodeName] === attr.nodeValue) {
          return true;
        }
      }
      return false;
    }
    function computeNestingDepth_(node, tags, barriers, attrs, func, depth) {
      if (func(node) || barriers.indexOf(node.tagName) > -1 || containsAttr(node, attrs)) {
        return depth;
      }
      if (tags.indexOf(node.tagName) > -1) {
        depth++;
      }
      if (!node.childNodes || node.childNodes.length === 0) {
        return depth;
      }
      const children = DomUtil.toArray(node.childNodes);
      return Math.max.apply(null, children.map(function(subNode) {
        return computeNestingDepth_(subNode, tags, barriers, attrs, func, depth);
      }));
    }
    function fractionNestingDepth(node) {
      return getNestingDepth("fraction", node, ["fraction"], nestingBarriers, {}, locale_js_1.LOCALE.FUNCTIONS.fracNestDepth);
    }
    function nestedFraction(node, expr, opt_end) {
      const depth = fractionNestingDepth(node);
      const annotation = Array(depth).fill(expr);
      if (opt_end) {
        annotation.push(opt_end);
      }
      return annotation.join(locale_js_1.LOCALE.MESSAGES.regexp.JOINER_FRAC);
    }
    function openingFractionVerbose(node) {
      return span_js_1.Span.singleton(nestedFraction(node, locale_js_1.LOCALE.MESSAGES.MS.START, locale_js_1.LOCALE.MESSAGES.MS.FRAC_V));
    }
    function closingFractionVerbose(node) {
      return span_js_1.Span.singleton(nestedFraction(node, locale_js_1.LOCALE.MESSAGES.MS.END, locale_js_1.LOCALE.MESSAGES.MS.FRAC_V), { kind: "LAST" });
    }
    function overFractionVerbose(node) {
      return span_js_1.Span.singleton(nestedFraction(node, locale_js_1.LOCALE.MESSAGES.MS.FRAC_OVER), {});
    }
    function openingFractionBrief(node) {
      return span_js_1.Span.singleton(nestedFraction(node, locale_js_1.LOCALE.MESSAGES.MS.START, locale_js_1.LOCALE.MESSAGES.MS.FRAC_B));
    }
    function closingFractionBrief(node) {
      return span_js_1.Span.singleton(nestedFraction(node, locale_js_1.LOCALE.MESSAGES.MS.END, locale_js_1.LOCALE.MESSAGES.MS.FRAC_B), { kind: "LAST" });
    }
    function openingFractionSbrief(node) {
      const depth = fractionNestingDepth(node);
      return span_js_1.Span.singleton(depth === 1 ? locale_js_1.LOCALE.MESSAGES.MS.FRAC_S : locale_js_1.LOCALE.FUNCTIONS.combineNestedFraction(locale_js_1.LOCALE.MESSAGES.MS.NEST_FRAC, locale_js_1.LOCALE.FUNCTIONS.radicalNestDepth(depth - 1), locale_js_1.LOCALE.MESSAGES.MS.FRAC_S));
    }
    function closingFractionSbrief(node) {
      const depth = fractionNestingDepth(node);
      return span_js_1.Span.singleton(depth === 1 ? locale_js_1.LOCALE.MESSAGES.MS.ENDFRAC : locale_js_1.LOCALE.FUNCTIONS.combineNestedFraction(locale_js_1.LOCALE.MESSAGES.MS.NEST_FRAC, locale_js_1.LOCALE.FUNCTIONS.radicalNestDepth(depth - 1), locale_js_1.LOCALE.MESSAGES.MS.ENDFRAC), { kind: "LAST" });
    }
    function overFractionSbrief(node) {
      const depth = fractionNestingDepth(node);
      return span_js_1.Span.singleton(depth === 1 ? locale_js_1.LOCALE.MESSAGES.MS.FRAC_OVER : locale_js_1.LOCALE.FUNCTIONS.combineNestedFraction(locale_js_1.LOCALE.MESSAGES.MS.NEST_FRAC, locale_js_1.LOCALE.FUNCTIONS.radicalNestDepth(depth - 1), locale_js_1.LOCALE.MESSAGES.MS.FRAC_OVER));
    }
    function isSmallVulgarFraction(node) {
      return locale_js_1.LOCALE.FUNCTIONS.fracNestDepth(node) ? [node] : [];
    }
    function nestedSubSuper(node, init, replace) {
      while (node.parentNode) {
        const children = node.parentNode;
        const parent = children.parentNode;
        if (!parent) {
          break;
        }
        const nodeRole = node.getAttribute && node.getAttribute("role");
        if (parent.tagName === semantic_meaning_js_1.SemanticType.SUBSCRIPT && node === children.childNodes[1] || parent.tagName === semantic_meaning_js_1.SemanticType.TENSOR && nodeRole && (nodeRole === semantic_meaning_js_1.SemanticRole.LEFTSUB || nodeRole === semantic_meaning_js_1.SemanticRole.RIGHTSUB)) {
          init = replace.sub + locale_js_1.LOCALE.MESSAGES.regexp.JOINER_SUBSUPER + init;
        }
        if (parent.tagName === semantic_meaning_js_1.SemanticType.SUPERSCRIPT && node === children.childNodes[1] || parent.tagName === semantic_meaning_js_1.SemanticType.TENSOR && nodeRole && (nodeRole === semantic_meaning_js_1.SemanticRole.LEFTSUPER || nodeRole === semantic_meaning_js_1.SemanticRole.RIGHTSUPER)) {
          init = replace.sup + locale_js_1.LOCALE.MESSAGES.regexp.JOINER_SUBSUPER + init;
        }
        node = parent;
      }
      return init.trim();
    }
    function subscriptVerbose(node) {
      return span_js_1.Span.singleton(nestedSubSuper(node, locale_js_1.LOCALE.MESSAGES.MS.SUBSCRIPT, {
        sup: locale_js_1.LOCALE.MESSAGES.MS.SUPER,
        sub: locale_js_1.LOCALE.MESSAGES.MS.SUB
      }));
    }
    function subscriptBrief(node) {
      return span_js_1.Span.singleton(nestedSubSuper(node, locale_js_1.LOCALE.MESSAGES.MS.SUB, {
        sup: locale_js_1.LOCALE.MESSAGES.MS.SUP,
        sub: locale_js_1.LOCALE.MESSAGES.MS.SUB
      }));
    }
    function superscriptVerbose(node) {
      return span_js_1.Span.singleton(nestedSubSuper(node, locale_js_1.LOCALE.MESSAGES.MS.SUPERSCRIPT, {
        sup: locale_js_1.LOCALE.MESSAGES.MS.SUPER,
        sub: locale_js_1.LOCALE.MESSAGES.MS.SUB
      }));
    }
    function superscriptBrief(node) {
      return span_js_1.Span.singleton(nestedSubSuper(node, locale_js_1.LOCALE.MESSAGES.MS.SUP, {
        sup: locale_js_1.LOCALE.MESSAGES.MS.SUP,
        sub: locale_js_1.LOCALE.MESSAGES.MS.SUB
      }));
    }
    function baselineVerbose(node) {
      const baseline = nestedSubSuper(node, "", {
        sup: locale_js_1.LOCALE.MESSAGES.MS.SUPER,
        sub: locale_js_1.LOCALE.MESSAGES.MS.SUB
      });
      return span_js_1.Span.singleton(!baseline ? locale_js_1.LOCALE.MESSAGES.MS.BASELINE : baseline.replace(new RegExp(locale_js_1.LOCALE.MESSAGES.MS.SUB + "$"), locale_js_1.LOCALE.MESSAGES.MS.SUBSCRIPT).replace(new RegExp(locale_js_1.LOCALE.MESSAGES.MS.SUPER + "$"), locale_js_1.LOCALE.MESSAGES.MS.SUPERSCRIPT));
    }
    function baselineBrief(node) {
      const baseline = nestedSubSuper(node, "", {
        sup: locale_js_1.LOCALE.MESSAGES.MS.SUP,
        sub: locale_js_1.LOCALE.MESSAGES.MS.SUB
      });
      return span_js_1.Span.singleton(baseline || locale_js_1.LOCALE.MESSAGES.MS.BASE);
    }
    function radicalNestingDepth(node) {
      return getNestingDepth("radical", node, ["sqrt", "root"], nestingBarriers, {});
    }
    function nestedRadical(node, prefix, postfix) {
      const depth = radicalNestingDepth(node);
      const index = getRootIndex(node);
      postfix = index ? locale_js_1.LOCALE.FUNCTIONS.combineRootIndex(postfix, index) : postfix;
      return depth === 1 ? postfix : locale_js_1.LOCALE.FUNCTIONS.combineNestedRadical(prefix, locale_js_1.LOCALE.FUNCTIONS.radicalNestDepth(depth - 1), postfix);
    }
    function getRootIndex(node) {
      const content = node.tagName === "sqrt" ? "2" : XpathUtil.evalXPath("children/*[1]", node)[0].textContent.trim();
      return locale_js_1.LOCALE.MESSAGES.MSroots[content] || "";
    }
    function openingRadicalVerbose(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NESTED, locale_js_1.LOCALE.MESSAGES.MS.STARTROOT));
    }
    function closingRadicalVerbose(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NESTED, locale_js_1.LOCALE.MESSAGES.MS.ENDROOT));
    }
    function indexRadicalVerbose(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NESTED, locale_js_1.LOCALE.MESSAGES.MS.ROOTINDEX));
    }
    function openingRadicalBrief(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NEST_ROOT, locale_js_1.LOCALE.MESSAGES.MS.STARTROOT));
    }
    function closingRadicalBrief(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NEST_ROOT, locale_js_1.LOCALE.MESSAGES.MS.ENDROOT));
    }
    function indexRadicalBrief(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NEST_ROOT, locale_js_1.LOCALE.MESSAGES.MS.ROOTINDEX));
    }
    function openingRadicalSbrief(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NEST_ROOT, locale_js_1.LOCALE.MESSAGES.MS.ROOT));
    }
    function indexRadicalSbrief(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NEST_ROOT, locale_js_1.LOCALE.MESSAGES.MS.INDEX));
    }
    function underscoreNestingDepth(node) {
      return getNestingDepth("underscore", node, ["underscore"], nestingBarriers, {}, function(node2) {
        return node2.tagName && node2.tagName === semantic_meaning_js_1.SemanticType.UNDERSCORE && node2.childNodes[0].childNodes[1].getAttribute("role") === semantic_meaning_js_1.SemanticRole.UNDERACCENT;
      });
    }
    function nestedUnderscript(node) {
      const depth = underscoreNestingDepth(node);
      return span_js_1.Span.singleton(Array(depth).join(locale_js_1.LOCALE.MESSAGES.MS.UNDER) + locale_js_1.LOCALE.MESSAGES.MS.UNDERSCRIPT);
    }
    function overscoreNestingDepth(node) {
      return getNestingDepth("overscore", node, ["overscore"], nestingBarriers, {}, function(node2) {
        return node2.tagName && node2.tagName === semantic_meaning_js_1.SemanticType.OVERSCORE && node2.childNodes[0].childNodes[1].getAttribute("role") === semantic_meaning_js_1.SemanticRole.OVERACCENT;
      });
    }
    function endscripts(_node) {
      return span_js_1.Span.singleton(locale_js_1.LOCALE.MESSAGES.MS.ENDSCRIPTS);
    }
    function nestedOverscript(node) {
      const depth = overscoreNestingDepth(node);
      return span_js_1.Span.singleton(Array(depth).join(locale_js_1.LOCALE.MESSAGES.MS.OVER) + locale_js_1.LOCALE.MESSAGES.MS.OVERSCRIPT);
    }
    function determinantIsSimple(node) {
      if (node.tagName !== semantic_meaning_js_1.SemanticType.MATRIX || node.getAttribute("role") !== semantic_meaning_js_1.SemanticRole.DETERMINANT) {
        return [];
      }
      const cells = XpathUtil.evalXPath("children/row/children/cell/children/*", node);
      for (let i = 0, cell; cell = cells[i]; i++) {
        if (cell.tagName === semantic_meaning_js_1.SemanticType.NUMBER) {
          continue;
        }
        if (cell.tagName === semantic_meaning_js_1.SemanticType.IDENTIFIER) {
          const role = cell.getAttribute("role");
          if (role === semantic_meaning_js_1.SemanticRole.LATINLETTER || role === semantic_meaning_js_1.SemanticRole.GREEKLETTER || role === semantic_meaning_js_1.SemanticRole.OTHERLETTER) {
            continue;
          }
        }
        return [];
      }
      return [node];
    }
    function generateBaselineConstraint() {
      const ignoreElems = ["subscript", "superscript", "tensor"];
      const mainElems = ["relseq", "multrel"];
      const breakElems = ["fraction", "punctuation", "fenced", "sqrt", "root"];
      const ancestrify = (elemList) => elemList.map((elem) => "ancestor::" + elem);
      const notify = (elem) => "not(" + elem + ")";
      const prefix = "ancestor::*/following-sibling::*";
      const middle = notify(ancestrify(ignoreElems).join(" or "));
      const mainList = ancestrify(mainElems);
      const breakList = ancestrify(breakElems);
      let breakCstrs = [];
      for (let i = 0, brk; brk = breakList[i]; i++) {
        breakCstrs = breakCstrs.concat(mainList.map(function(elem) {
          return brk + "/" + elem;
        }));
      }
      const postfix = notify(breakCstrs.join(" | "));
      return [[prefix, middle, postfix].join(" and ")];
    }
    function removeParens(node) {
      if (!node.childNodes.length || !node.childNodes[0].childNodes.length || !node.childNodes[0].childNodes[0].childNodes.length) {
        return span_js_1.Span.singleton("");
      }
      const content = node.childNodes[0].childNodes[0].childNodes[0].textContent;
      return span_js_1.Span.singleton(content.match(/^\(.+\)$/) ? content.slice(1, -1) : content);
    }
    var componentString = /* @__PURE__ */ new Map([
      [3, "CSFleftsuperscript"],
      [4, "CSFleftsubscript"],
      [2, "CSFbaseline"],
      [1, "CSFrightsubscript"],
      [0, "CSFrightsuperscript"]
    ]);
    var childNumber = /* @__PURE__ */ new Map([
      [4, 2],
      [3, 3],
      [2, 1],
      [1, 4],
      [0, 5]
    ]);
    function generateTensorRuleStrings_(constellation) {
      const constraints = [];
      let verbString = "";
      let briefString = "";
      let constel = parseInt(constellation, 2);
      for (let i = 0; i < 5; i++) {
        const childString = "children/*[" + childNumber.get(i) + "]";
        if (constel & 1) {
          const compString = componentString.get(i % 5);
          verbString = "[t] " + compString + "Verbose; [n] " + childString + ";" + verbString;
          briefString = "[t] " + compString + "Brief; [n] " + childString + ";" + briefString;
        } else {
          constraints.unshift("name(" + childString + ')="empty"');
        }
        constel >>= 1;
      }
      return [constraints, verbString, briefString];
    }
    function generateTensorRules(store, brief = true) {
      const constellations = [
        "11111",
        "11110",
        "11101",
        "11100",
        "10111",
        "10110",
        "10101",
        "10100",
        "01111",
        "01110",
        "01101",
        "01100"
      ];
      for (const constel of constellations) {
        let name = "tensor" + constel;
        let [components, verbStr, briefStr] = generateTensorRuleStrings_(constel);
        store.defineRule(name, "default", verbStr, "self::tensor", ...components);
        if (brief) {
          store.defineRule(name, "brief", briefStr, "self::tensor", ...components);
          store.defineRule(name, "sbrief", briefStr, "self::tensor", ...components);
        }
        if (!(parseInt(constel, 2) & 3)) {
          continue;
        }
        const baselineStr = componentString.get(2);
        verbStr += "; [t]" + baselineStr + "Verbose";
        briefStr += "; [t]" + baselineStr + "Brief";
        name = name + "-baseline";
        const cstr = "((.//*[not(*)])[last()]/@id)!=(((.//ancestor::fraction|ancestor::root|ancestor::sqrt|ancestor::cell|ancestor::line|ancestor::stree)[1]//*[not(*)])[last()]/@id)";
        store.defineRule(name, "default", verbStr, "self::tensor", cstr, ...components);
        if (brief) {
          store.defineRule(name, "brief", briefStr, "self::tensor", cstr, ...components);
          store.defineRule(name, "sbrief", briefStr, "self::tensor", cstr, ...components);
        }
      }
    }
    function smallRoot(node) {
      let max = Object.keys(locale_js_1.LOCALE.MESSAGES.MSroots).length;
      if (!max) {
        return [];
      } else {
        max++;
      }
      if (!node.childNodes || node.childNodes.length === 0 || !node.childNodes[0].childNodes) {
        return [];
      }
      const index = node.childNodes[0].childNodes[0].textContent;
      if (!/^\d+$/.test(index)) {
        return [];
      }
      const num = parseInt(index, 10);
      return num > 1 && num <= max ? [node] : [];
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/numbers_util.js
var require_numbers_util = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/numbers_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ordinalCounter = ordinalCounter;
    exports2.wordCounter = wordCounter;
    exports2.vulgarFraction = vulgarFraction;
    exports2.ordinalPosition = ordinalPosition;
    var span_js_1 = require_span();
    var DomUtil = require_dom_util();
    var locale_js_1 = require_locale();
    var transformers_js_1 = require_transformers();
    function ordinalCounter(_node, context) {
      let counter = 0;
      return function() {
        return locale_js_1.LOCALE.NUMBERS.numericOrdinal(++counter) + " " + context;
      };
    }
    function wordCounter(_node, context) {
      let counter = 0;
      return function() {
        return locale_js_1.LOCALE.NUMBERS.numberToOrdinal(++counter, false) + " " + context;
      };
    }
    function vulgarFraction(node) {
      const conversion = (0, transformers_js_1.convertVulgarFraction)(node, locale_js_1.LOCALE.MESSAGES.MS.FRAC_OVER);
      if (conversion.convertible && conversion.enumerator && conversion.denominator) {
        return [
          span_js_1.Span.node(locale_js_1.LOCALE.NUMBERS.numberToWords(conversion.enumerator), node.childNodes[0].childNodes[0], { separator: "" }),
          span_js_1.Span.stringAttr(locale_js_1.LOCALE.NUMBERS.vulgarSep, { separator: "" }),
          span_js_1.Span.node(locale_js_1.LOCALE.NUMBERS.numberToOrdinal(conversion.denominator, conversion.enumerator !== 1), node.childNodes[0].childNodes[1])
        ];
      }
      return [span_js_1.Span.node(conversion.content || "", node)];
    }
    function ordinalPosition(node) {
      const children = DomUtil.toArray(node.parentNode.childNodes);
      return span_js_1.Span.singleton(locale_js_1.LOCALE.NUMBERS.numericOrdinal(children.indexOf(node) + 1).toString());
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/clearspeak_rules.js
var require_clearspeak_rules = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/clearspeak_rules.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClearspeakRules = ClearspeakRules;
    var dynamic_cstr_js_1 = require_dynamic_cstr();
    var StoreUtil = require_store_util();
    var ClearspeakUtil = require_clearspeak_util();
    var MathspeakUtil = require_mathspeak_util();
    var NumbersUtil = require_numbers_util();
    var SpeechRules = require_speech_rules();
    function ClearspeakRules() {
      SpeechRules.addStore(dynamic_cstr_js_1.DynamicCstr.BASE_LOCALE + ".speech.clearspeak", "", {
        CTFpauseSeparator: StoreUtil.pauseSeparator,
        CTFnodeCounter: ClearspeakUtil.nodeCounter,
        CTFcontentIterator: StoreUtil.contentIterator,
        CSFvulgarFraction: NumbersUtil.vulgarFraction,
        CQFvulgarFractionSmall: ClearspeakUtil.isSmallVulgarFraction,
        CQFcellsSimple: ClearspeakUtil.allCellsSimple,
        CSFordinalExponent: ClearspeakUtil.ordinalExponent,
        CSFwordOrdinal: ClearspeakUtil.wordOrdinal,
        CQFmatchingFences: ClearspeakUtil.matchingFences,
        CSFnestingDepth: ClearspeakUtil.nestingDepth,
        CQFfencedArguments: ClearspeakUtil.fencedArguments,
        CQFsimpleArguments: ClearspeakUtil.simpleArguments,
        CQFspaceoutNumber: MathspeakUtil.spaceoutNumber
      });
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/mathspeak_french_util.js
var require_mathspeak_french_util = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/mathspeak_french_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.baselineVerbose = baselineVerbose;
    exports2.baselineBrief = baselineBrief;
    exports2.leftSuperscriptVerbose = leftSuperscriptVerbose;
    exports2.leftSubscriptVerbose = leftSubscriptVerbose;
    exports2.leftSuperscriptBrief = leftSuperscriptBrief;
    exports2.leftSubscriptBrief = leftSubscriptBrief;
    var MathspeakUtil = require_mathspeak_util();
    function baselineVerbose(node) {
      const baseline = MathspeakUtil.baselineVerbose(node);
      baseline[0].speech = baseline[0].speech.replace(/-$/, "");
      return baseline;
    }
    function baselineBrief(node) {
      const baseline = MathspeakUtil.baselineBrief(node);
      baseline[0].speech = baseline[0].speech.replace(/-$/, "");
      return baseline;
    }
    function leftSuperscriptVerbose(node) {
      const leftIndex = MathspeakUtil.superscriptVerbose(node);
      leftIndex[0].speech = leftIndex[0].speech.replace(/^exposant/, "exposant gauche");
      return leftIndex;
    }
    function leftSubscriptVerbose(node) {
      const leftIndex = MathspeakUtil.subscriptVerbose(node);
      leftIndex[0].speech = leftIndex[0].speech.replace(/^indice/, "indice gauche");
      return leftIndex;
    }
    function leftSuperscriptBrief(node) {
      const leftIndex = MathspeakUtil.superscriptBrief(node);
      leftIndex[0].speech = leftIndex[0].speech.replace(/^sup/, "sup gauche");
      return leftIndex;
    }
    function leftSubscriptBrief(node) {
      const leftIndex = MathspeakUtil.subscriptBrief(node);
      leftIndex[0].speech = leftIndex[0].speech.replace(/^sub/, "sub gauche");
      return leftIndex;
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/mathspeak_korean_util.js
var require_mathspeak_korean_util = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/mathspeak_korean_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.nestedFraction = nestedFraction;
    exports2.openingFractionVerbose = openingFractionVerbose;
    exports2.closingFractionVerbose = closingFractionVerbose;
    exports2.openingFractionBrief = openingFractionBrief;
    exports2.closingFractionBrief = closingFractionBrief;
    exports2.openingFractionSbrief = openingFractionSbrief;
    exports2.closingFractionSbrief = closingFractionSbrief;
    exports2.overFractionSbrief = overFractionSbrief;
    exports2.isSimpleIndex = isSimpleIndex;
    exports2.nestedRadical = nestedRadical;
    exports2.openingRadicalVerbose = openingRadicalVerbose;
    exports2.closingRadicalVerbose = closingRadicalVerbose;
    exports2.openingRadicalBrief = openingRadicalBrief;
    exports2.closingRadicalBrief = closingRadicalBrief;
    exports2.openingRadicalSbrief = openingRadicalSbrief;
    exports2.getRootIndex = getRootIndex;
    exports2.indexRadical = indexRadical;
    exports2.indexRadicalVerbose = indexRadicalVerbose;
    exports2.indexRadicalBrief = indexRadicalBrief;
    exports2.indexRadicalSbrief = indexRadicalSbrief;
    exports2.ordinalConversion = ordinalConversion;
    exports2.decreasedOrdinalConversion = decreasedOrdinalConversion;
    exports2.listOrdinalConversion = listOrdinalConversion;
    exports2.checkDepth = checkDepth;
    exports2.getDepthValue = getDepthValue;
    var span_js_1 = require_span();
    var MathspeakUtil = require_mathspeak_util();
    var locale_js_1 = require_locale();
    var XpathUtil = require_xpath_util();
    function nestedFraction(node, expr, opt_end) {
      const depth = MathspeakUtil.fractionNestingDepth(node);
      const annotation = [...Array(depth)].map((_x) => expr);
      if (opt_end) {
        annotation.unshift(opt_end);
      }
      return annotation.join(locale_js_1.LOCALE.MESSAGES.regexp.JOINER_FRAC);
    }
    function openingFractionVerbose(node) {
      return span_js_1.Span.singleton(nestedFraction(node, locale_js_1.LOCALE.MESSAGES.MS.START, locale_js_1.LOCALE.MESSAGES.MS.FRAC_V));
    }
    function closingFractionVerbose(node) {
      return span_js_1.Span.singleton(nestedFraction(node, locale_js_1.LOCALE.MESSAGES.MS.END, locale_js_1.LOCALE.MESSAGES.MS.FRAC_V));
    }
    function openingFractionBrief(node) {
      return span_js_1.Span.singleton(nestedFraction(node, locale_js_1.LOCALE.MESSAGES.MS.START, locale_js_1.LOCALE.MESSAGES.MS.FRAC_B));
    }
    function closingFractionBrief(node) {
      return span_js_1.Span.singleton(nestedFraction(node, locale_js_1.LOCALE.MESSAGES.MS.END, locale_js_1.LOCALE.MESSAGES.MS.FRAC_B));
    }
    function openingFractionSbrief(node) {
      const depth = MathspeakUtil.fractionNestingDepth(node);
      if (depth === 1) {
        return span_js_1.Span.singleton(locale_js_1.LOCALE.MESSAGES.MS.FRAC_S);
      }
      return span_js_1.Span.singleton(locale_js_1.LOCALE.FUNCTIONS.combineNestedFraction(locale_js_1.LOCALE.FUNCTIONS.radicalNestDepth(depth - 1), locale_js_1.LOCALE.MESSAGES.MS.NEST_FRAC, locale_js_1.LOCALE.MESSAGES.MS.FRAC_S));
    }
    function closingFractionSbrief(node) {
      const depth = MathspeakUtil.fractionNestingDepth(node);
      if (depth === 1) {
        return span_js_1.Span.singleton(locale_js_1.LOCALE.MESSAGES.MS.ENDFRAC);
      }
      return span_js_1.Span.singleton(locale_js_1.LOCALE.FUNCTIONS.combineNestedFraction(locale_js_1.LOCALE.FUNCTIONS.radicalNestDepth(depth - 1), locale_js_1.LOCALE.MESSAGES.MS.NEST_FRAC, locale_js_1.LOCALE.MESSAGES.MS.ENDFRAC));
    }
    function overFractionSbrief(node) {
      const depth = MathspeakUtil.fractionNestingDepth(node);
      if (depth === 1) {
        return span_js_1.Span.singleton(locale_js_1.LOCALE.MESSAGES.MS.FRAC_OVER);
      }
      return span_js_1.Span.singleton(locale_js_1.LOCALE.FUNCTIONS.combineNestedFraction(locale_js_1.LOCALE.FUNCTIONS.radicalNestDepth(depth - 1), locale_js_1.LOCALE.MESSAGES.MS.NEST_FRAC, locale_js_1.LOCALE.MESSAGES.MS.FRAC_OVER));
    }
    function isSimpleIndex(node) {
      const index = XpathUtil.evalXPath("children/*[1]", node)[0].toString().match(/[^>⁢>]+<\/[^>]*>/g);
      return index.length === 1 ? [node] : [];
    }
    function nestedRadical(node, prefix, postfix) {
      const depth = MathspeakUtil.radicalNestingDepth(node);
      if (depth === 1)
        return postfix;
      return locale_js_1.LOCALE.FUNCTIONS.combineNestedRadical(locale_js_1.LOCALE.FUNCTIONS.radicalNestDepth(depth - 1), prefix, postfix);
    }
    function openingRadicalVerbose(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NESTED, locale_js_1.LOCALE.MESSAGES.MS.STARTROOT));
    }
    function closingRadicalVerbose(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NESTED, locale_js_1.LOCALE.MESSAGES.MS.ENDROOT));
    }
    function openingRadicalBrief(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NEST_ROOT, locale_js_1.LOCALE.MESSAGES.MS.STARTROOT));
    }
    function closingRadicalBrief(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NEST_ROOT, locale_js_1.LOCALE.MESSAGES.MS.ENDROOT));
    }
    function openingRadicalSbrief(node) {
      return span_js_1.Span.singleton(nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.NEST_ROOT, locale_js_1.LOCALE.MESSAGES.MS.ROOT));
    }
    function getRootIndex(node) {
      const content = XpathUtil.evalXPath("children/*[1]", node)[0].textContent.trim();
      return locale_js_1.LOCALE.MESSAGES.MSroots[content] || content + "제곱근";
    }
    function indexRadical(node, postfix) {
      const index = getRootIndex(node);
      return index ? index : postfix;
    }
    function indexRadicalVerbose(node) {
      return span_js_1.Span.singleton(indexRadical(node, locale_js_1.LOCALE.MESSAGES.MS.ROOTINDEX));
    }
    function indexRadicalBrief(node) {
      return span_js_1.Span.singleton(indexRadical(node, locale_js_1.LOCALE.MESSAGES.MS.ROOTINDEX));
    }
    function indexRadicalSbrief(node) {
      return span_js_1.Span.singleton(indexRadical(node, locale_js_1.LOCALE.MESSAGES.MS.INDEX));
    }
    function ordinalConversion(node) {
      const children = XpathUtil.evalXPath("children/*", node);
      return span_js_1.Span.singleton(locale_js_1.LOCALE.NUMBERS.wordOrdinal(children.length));
    }
    function decreasedOrdinalConversion(node) {
      const children = XpathUtil.evalXPath("children/*", node);
      return span_js_1.Span.singleton(locale_js_1.LOCALE.NUMBERS.wordOrdinal(children.length - 1));
    }
    function listOrdinalConversion(node) {
      const children = XpathUtil.evalXPath("children/*", node);
      const content = XpathUtil.evalXPath("content/*", node);
      return span_js_1.Span.singleton(locale_js_1.LOCALE.NUMBERS.wordOrdinal(children.length - content.length));
    }
    function checkDepth(node) {
      const roleList = [];
      const depth = getDepthValue(node, roleList);
      return depth > 3 ? [] : [node];
    }
    function getDepthValue(node, roleList) {
      const role = node.getAttribute("role");
      const index = roleList.indexOf(role) > -1;
      if (!index) {
        roleList.push(role);
      }
      const children = XpathUtil.evalXPath("children/*", node);
      let max = 0, cur = 0;
      if (children.length) {
        children.forEach((child) => {
          cur = getDepthValue(child, roleList);
          max = cur > max ? cur : max;
        });
        return max + 1;
      }
      return 0;
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/unit_util.js
var require_unit_util = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/unit_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.unitMultipliers = unitMultipliers;
    exports2.oneLeft = oneLeft;
    var auditory_description_js_1 = require_auditory_description();
    var XpathUtil = require_xpath_util();
    var locale_js_1 = require_locale();
    var semantic_meaning_js_1 = require_semantic_meaning();
    function unitMultipliers(nodes, _context) {
      const children = nodes;
      let counter = 0;
      return function() {
        const descr = auditory_description_js_1.AuditoryDescription.create({
          text: rightMostUnit(children[counter]) && leftMostUnit(children[counter + 1]) ? locale_js_1.LOCALE.MESSAGES.unitTimes : ""
        }, {});
        counter++;
        return [descr];
      };
    }
    var SCRIPT_ELEMENTS = [
      semantic_meaning_js_1.SemanticType.SUPERSCRIPT,
      semantic_meaning_js_1.SemanticType.SUBSCRIPT,
      semantic_meaning_js_1.SemanticType.OVERSCORE,
      semantic_meaning_js_1.SemanticType.UNDERSCORE
    ];
    function rightMostUnit(node) {
      while (node) {
        if (node.getAttribute("role") === "unit") {
          return true;
        }
        const tag = node.tagName;
        const children = XpathUtil.evalXPath("children/*", node);
        node = SCRIPT_ELEMENTS.indexOf(tag) !== -1 ? children[0] : children[children.length - 1];
      }
      return false;
    }
    function leftMostUnit(node) {
      while (node) {
        if (node.getAttribute("role") === "unit") {
          return true;
        }
        const children = XpathUtil.evalXPath("children/*", node);
        node = children[0];
      }
      return false;
    }
    function oneLeft(node) {
      while (node) {
        if (node.tagName === "number" && node.textContent === "1") {
          return [node];
        }
        if (node.tagName !== "infixop" || node.getAttribute("role") !== "multiplication" && node.getAttribute("role") !== "implicit") {
          return [];
        }
        node = XpathUtil.evalXPath("children/*", node)[0];
      }
      return [];
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/mathspeak_rules.js
var require_mathspeak_rules = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/mathspeak_rules.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MathspeakRules = MathspeakRules;
    var dynamic_cstr_js_1 = require_dynamic_cstr();
    var StoreUtil = require_store_util();
    var MathspeakFrenchUtil = require_mathspeak_french_util();
    var MathspeakKoreanUtil = require_mathspeak_korean_util();
    var MathspeakUtil = require_mathspeak_util();
    var NumbersUtil = require_numbers_util();
    var SpeechRules = require_speech_rules();
    var UnitUtil = require_unit_util();
    function MathspeakRules() {
      SpeechRules.addStore(dynamic_cstr_js_1.DynamicCstr.BASE_LOCALE + ".speech.mathspeak", "", {
        CQFspaceoutNumber: MathspeakUtil.spaceoutNumber,
        CQFspaceoutIdentifier: MathspeakUtil.spaceoutIdentifier,
        CSFspaceoutText: MathspeakUtil.spaceoutText,
        CSFopenFracVerbose: MathspeakUtil.openingFractionVerbose,
        CSFcloseFracVerbose: MathspeakUtil.closingFractionVerbose,
        CSFoverFracVerbose: MathspeakUtil.overFractionVerbose,
        CSFopenFracBrief: MathspeakUtil.openingFractionBrief,
        CSFcloseFracBrief: MathspeakUtil.closingFractionBrief,
        CSFopenFracSbrief: MathspeakUtil.openingFractionSbrief,
        CSFcloseFracSbrief: MathspeakUtil.closingFractionSbrief,
        CSFoverFracSbrief: MathspeakUtil.overFractionSbrief,
        CSFvulgarFraction: NumbersUtil.vulgarFraction,
        CQFvulgarFractionSmall: MathspeakUtil.isSmallVulgarFraction,
        CSFopenRadicalVerbose: MathspeakUtil.openingRadicalVerbose,
        CSFcloseRadicalVerbose: MathspeakUtil.closingRadicalVerbose,
        CSFindexRadicalVerbose: MathspeakUtil.indexRadicalVerbose,
        CSFopenRadicalBrief: MathspeakUtil.openingRadicalBrief,
        CSFcloseRadicalBrief: MathspeakUtil.closingRadicalBrief,
        CSFindexRadicalBrief: MathspeakUtil.indexRadicalBrief,
        CSFopenRadicalSbrief: MathspeakUtil.openingRadicalSbrief,
        CSFindexRadicalSbrief: MathspeakUtil.indexRadicalSbrief,
        CQFisSmallRoot: MathspeakUtil.smallRoot,
        CSFsuperscriptVerbose: MathspeakUtil.superscriptVerbose,
        CSFsuperscriptBrief: MathspeakUtil.superscriptBrief,
        CSFsubscriptVerbose: MathspeakUtil.subscriptVerbose,
        CSFsubscriptBrief: MathspeakUtil.subscriptBrief,
        CSFbaselineVerbose: MathspeakUtil.baselineVerbose,
        CSFbaselineBrief: MathspeakUtil.baselineBrief,
        CSFleftsuperscriptVerbose: MathspeakUtil.superscriptVerbose,
        CSFleftsubscriptVerbose: MathspeakUtil.subscriptVerbose,
        CSFrightsuperscriptVerbose: MathspeakUtil.superscriptVerbose,
        CSFrightsubscriptVerbose: MathspeakUtil.subscriptVerbose,
        CSFleftsuperscriptBrief: MathspeakUtil.superscriptBrief,
        CSFleftsubscriptBrief: MathspeakUtil.subscriptBrief,
        CSFrightsuperscriptBrief: MathspeakUtil.superscriptBrief,
        CSFrightsubscriptBrief: MathspeakUtil.subscriptBrief,
        CSFunderscript: MathspeakUtil.nestedUnderscript,
        CSFoverscript: MathspeakUtil.nestedOverscript,
        CSFendscripts: MathspeakUtil.endscripts,
        CTFordinalCounter: NumbersUtil.ordinalCounter,
        CTFwordCounter: NumbersUtil.wordCounter,
        CTFcontentIterator: StoreUtil.contentIterator,
        CQFdetIsSimple: MathspeakUtil.determinantIsSimple,
        CSFRemoveParens: MathspeakUtil.removeParens,
        CQFresetNesting: MathspeakUtil.resetNestingDepth,
        CGFbaselineConstraint: MathspeakUtil.generateBaselineConstraint,
        CGFtensorRules: MathspeakUtil.generateTensorRules
      });
      SpeechRules.addStore("es.speech.mathspeak", dynamic_cstr_js_1.DynamicCstr.BASE_LOCALE + ".speech.mathspeak", {
        CTFunitMultipliers: UnitUtil.unitMultipliers,
        CQFoneLeft: UnitUtil.oneLeft
      });
      SpeechRules.addStore("fr.speech.mathspeak", dynamic_cstr_js_1.DynamicCstr.BASE_LOCALE + ".speech.mathspeak", {
        CSFbaselineVerbose: MathspeakFrenchUtil.baselineVerbose,
        CSFbaselineBrief: MathspeakFrenchUtil.baselineBrief,
        CSFleftsuperscriptVerbose: MathspeakFrenchUtil.leftSuperscriptVerbose,
        CSFleftsubscriptVerbose: MathspeakFrenchUtil.leftSubscriptVerbose,
        CSFleftsuperscriptBrief: MathspeakFrenchUtil.leftSuperscriptBrief,
        CSFleftsubscriptBrief: MathspeakFrenchUtil.leftSubscriptBrief
      });
      SpeechRules.addStore("ko.speech.mathspeak", dynamic_cstr_js_1.DynamicCstr.BASE_LOCALE + ".speech.mathspeak", {
        CSFopenFracVerbose: MathspeakKoreanUtil.openingFractionVerbose,
        CSFcloseFracVerbose: MathspeakKoreanUtil.closingFractionVerbose,
        CSFopenFracBrief: MathspeakKoreanUtil.openingFractionBrief,
        CSFcloseFracBrief: MathspeakKoreanUtil.closingFractionBrief,
        CSFopenFracSbrief: MathspeakKoreanUtil.openingFractionSbrief,
        CSFoverFracSbrief: MathspeakKoreanUtil.overFractionSbrief,
        CSFcloseFracSbrief: MathspeakKoreanUtil.closingFractionSbrief,
        CQFisSimpleIndex: MathspeakKoreanUtil.isSimpleIndex,
        CSFindexRadicalVerbose: MathspeakKoreanUtil.indexRadicalVerbose,
        CSFindexRadicalBrief: MathspeakKoreanUtil.indexRadicalBrief,
        CSFindexRadicalSbrief: MathspeakKoreanUtil.indexRadicalSbrief,
        CSFopenRadicalVerbose: MathspeakKoreanUtil.openingRadicalVerbose,
        CSFcloseRadicalVerbose: MathspeakKoreanUtil.closingRadicalVerbose,
        CSFopenRadicalBrief: MathspeakKoreanUtil.openingRadicalBrief,
        CSFcloseRadicalBrief: MathspeakKoreanUtil.closingRadicalBrief,
        CSFopenRadicalSbrief: MathspeakKoreanUtil.openingRadicalSbrief
      });
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/nemeth_util.js
var require_nemeth_util = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/nemeth_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.openingFraction = openingFraction;
    exports2.closingFraction = closingFraction;
    exports2.overFraction = overFraction;
    exports2.overBevelledFraction = overBevelledFraction;
    exports2.hyperFractionBoundary = hyperFractionBoundary;
    exports2.openingRadical = openingRadical;
    exports2.closingRadical = closingRadical;
    exports2.indexRadical = indexRadical;
    exports2.relationIterator = relationIterator;
    exports2.implicitIterator = implicitIterator;
    exports2.contentIterator = contentIterator;
    var auditory_description_js_1 = require_auditory_description();
    var span_js_1 = require_span();
    var DomUtil = require_dom_util();
    var XpathUtil = require_xpath_util();
    var grammar_js_1 = require_grammar();
    var engine_js_1 = require_engine();
    var semantic_annotations_js_1 = require_semantic_annotations();
    var semantic_annotator_js_1 = require_semantic_annotator();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var locale_js_1 = require_locale();
    var MathspeakUtil = require_mathspeak_util();
    var store_util_js_1 = require_store_util();
    function openingFraction(node) {
      const depth = MathspeakUtil.fractionNestingDepth(node);
      return span_js_1.Span.singleton(new Array(depth).join(locale_js_1.LOCALE.MESSAGES.MS.FRACTION_REPEAT) + locale_js_1.LOCALE.MESSAGES.MS.FRACTION_START);
    }
    function closingFraction(node) {
      const depth = MathspeakUtil.fractionNestingDepth(node);
      return span_js_1.Span.singleton(new Array(depth).join(locale_js_1.LOCALE.MESSAGES.MS.FRACTION_REPEAT) + locale_js_1.LOCALE.MESSAGES.MS.FRACTION_END);
    }
    function overFraction(node) {
      const depth = MathspeakUtil.fractionNestingDepth(node);
      return span_js_1.Span.singleton(new Array(depth).join(locale_js_1.LOCALE.MESSAGES.MS.FRACTION_REPEAT) + locale_js_1.LOCALE.MESSAGES.MS.FRACTION_OVER);
    }
    function overBevelledFraction(node) {
      const depth = MathspeakUtil.fractionNestingDepth(node);
      return span_js_1.Span.singleton(new Array(depth).join(locale_js_1.LOCALE.MESSAGES.MS.FRACTION_REPEAT) + "⠸" + locale_js_1.LOCALE.MESSAGES.MS.FRACTION_OVER);
    }
    function hyperFractionBoundary(node) {
      return locale_js_1.LOCALE.MESSAGES.regexp.HYPER === MathspeakUtil.fractionNestingDepth(node).toString() ? [node] : [];
    }
    function nestedRadical(node, postfix) {
      const depth = radicalNestingDepth(node);
      return span_js_1.Span.singleton(depth === 1 ? postfix : new Array(depth).join(locale_js_1.LOCALE.MESSAGES.MS.NESTED) + postfix);
    }
    function radicalNestingDepth(node, opt_depth) {
      const depth = opt_depth || 0;
      if (!node.parentNode) {
        return depth;
      }
      return radicalNestingDepth(node.parentNode, node.tagName === "root" || node.tagName === "sqrt" ? depth + 1 : depth);
    }
    function openingRadical(node) {
      return nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.STARTROOT);
    }
    function closingRadical(node) {
      return nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.ENDROOT);
    }
    function indexRadical(node) {
      return nestedRadical(node, locale_js_1.LOCALE.MESSAGES.MS.ROOTINDEX);
    }
    function enlargeFence(text) {
      const start = "⠠";
      if (text.length === 1) {
        return start + text;
      }
      const neut = "⠳";
      const split = text.split("");
      if (split.every(function(x) {
        return x === neut;
      })) {
        return start + split.join(start);
      }
      return text.slice(0, -1) + start + text.slice(-1);
    }
    grammar_js_1.Grammar.getInstance().setCorrection("enlargeFence", enlargeFence);
    var NUMBER_PROPAGATORS = [
      semantic_meaning_js_1.SemanticType.MULTIREL,
      semantic_meaning_js_1.SemanticType.RELSEQ,
      semantic_meaning_js_1.SemanticType.APPL,
      semantic_meaning_js_1.SemanticType.ROW,
      semantic_meaning_js_1.SemanticType.LINE
    ];
    var NUMBER_INHIBITORS = [
      semantic_meaning_js_1.SemanticType.SUBSCRIPT,
      semantic_meaning_js_1.SemanticType.SUPERSCRIPT,
      semantic_meaning_js_1.SemanticType.OVERSCORE,
      semantic_meaning_js_1.SemanticType.UNDERSCORE
    ];
    function checkParent(node, info) {
      const parent = node.parent;
      if (!parent) {
        return false;
      }
      const type = parent.type;
      if (NUMBER_PROPAGATORS.indexOf(type) !== -1 || type === semantic_meaning_js_1.SemanticType.PREFIXOP && parent.role === semantic_meaning_js_1.SemanticRole.NEGATIVE && !info.script && !info.enclosed || type === semantic_meaning_js_1.SemanticType.PREFIXOP && parent.role === semantic_meaning_js_1.SemanticRole.GEOMETRY) {
        return true;
      }
      if (type === semantic_meaning_js_1.SemanticType.PUNCTUATED) {
        if (!info.enclosed || parent.role === semantic_meaning_js_1.SemanticRole.TEXT) {
          return true;
        }
      }
      return false;
    }
    function propagateNumber(node, info) {
      if (!node.childNodes.length) {
        if (checkParent(node, info)) {
          info.number = true;
          info.script = false;
          info.enclosed = false;
        }
        return [
          info["number"] ? "number" : "",
          { number: false, enclosed: info.enclosed, script: info.script }
        ];
      }
      if (NUMBER_INHIBITORS.indexOf(node.type) !== -1) {
        info.script = true;
      }
      if (node.type === semantic_meaning_js_1.SemanticType.FENCED) {
        info.number = false;
        info.enclosed = true;
        return ["", info];
      }
      if (node.type === semantic_meaning_js_1.SemanticType.PREFIXOP && node.role !== semantic_meaning_js_1.SemanticRole.GEOMETRY && node.role !== semantic_meaning_js_1.SemanticRole.NEGATIVE) {
        info.number = false;
        return ["", info];
      }
      if (checkParent(node, info)) {
        info.number = true;
        info.enclosed = false;
      }
      return ["", info];
    }
    (0, semantic_annotations_js_1.register)(new semantic_annotator_js_1.SemanticVisitor("nemeth", "number", propagateNumber, { number: true }));
    function annotateDepth(node) {
      if (!node.parent) {
        return [1];
      }
      const depth = parseInt(node.parent.annotation["depth"][0]);
      return [depth + 1];
    }
    (0, semantic_annotations_js_1.register)(new semantic_annotator_js_1.SemanticVisitor("depth", "depth", annotateDepth));
    (0, semantic_annotations_js_1.activate)("depth", "depth");
    function relationIterator(nodes, context) {
      var _a;
      const childNodes = nodes.slice(0);
      let first = true;
      const parentNode = nodes[0].parentNode.parentNode;
      const match = (_a = parentNode.getAttribute("annotation")) === null || _a === void 0 ? void 0 : _a.match(/depth:(\d+)/);
      const depth = match ? match[1] : "";
      let contentNodes;
      if (nodes.length > 0) {
        contentNodes = XpathUtil.evalXPath("./content/*", parentNode);
      } else {
        contentNodes = [];
      }
      return function() {
        const content = contentNodes.shift();
        const leftChild = childNodes.shift();
        const rightChild = childNodes[0];
        const contextDescr = context ? [auditory_description_js_1.AuditoryDescription.create({ text: context }, { translate: true })] : [];
        if (!content) {
          return contextDescr;
        }
        const base = leftChild ? MathspeakUtil.nestedSubSuper(leftChild, "", {
          sup: locale_js_1.LOCALE.MESSAGES.MS.SUPER,
          sub: locale_js_1.LOCALE.MESSAGES.MS.SUB
        }) : "";
        const left = leftChild && DomUtil.tagName(leftChild) !== "EMPTY" || first && parentNode && parentNode.previousSibling ? [
          auditory_description_js_1.AuditoryDescription.create({ text: locale_js_1.LOCALE.MESSAGES.regexp.SPACE + base }, {})
        ] : [];
        const right = rightChild && DomUtil.tagName(rightChild) !== "EMPTY" || !contentNodes.length && parentNode && parentNode.nextSibling ? [
          auditory_description_js_1.AuditoryDescription.create({ text: locale_js_1.LOCALE.MESSAGES.regexp.SPACE }, {})
        ] : [];
        const descrs = engine_js_1.Engine.evaluateNode(content);
        descrs.unshift(new auditory_description_js_1.AuditoryDescription({ text: "", layout: `beginrel${depth}` }));
        descrs.push(new auditory_description_js_1.AuditoryDescription({ text: "", layout: `endrel${depth}` }));
        first = false;
        return contextDescr.concat(left, descrs, right);
      };
    }
    function implicitIterator(nodes, context) {
      const childNodes = nodes.slice(0);
      let contentNodes;
      if (nodes.length > 0) {
        contentNodes = XpathUtil.evalXPath("../../content/*", nodes[0]);
      } else {
        contentNodes = [];
      }
      return function() {
        const leftChild = childNodes.shift();
        const rightChild = childNodes[0];
        const content = contentNodes.shift();
        const contextDescr = context ? [auditory_description_js_1.AuditoryDescription.create({ text: context }, { translate: true })] : [];
        if (!content) {
          return contextDescr;
        }
        const left = leftChild && DomUtil.tagName(leftChild) === "NUMBER";
        const right = rightChild && DomUtil.tagName(rightChild) === "NUMBER";
        return contextDescr.concat(left && right && content.getAttribute("role") === semantic_meaning_js_1.SemanticRole.SPACE ? [
          auditory_description_js_1.AuditoryDescription.create({ text: locale_js_1.LOCALE.MESSAGES.regexp.SPACE }, {})
        ] : []);
      };
    }
    function ignoreEnglish(text) {
      return (0, grammar_js_1.correctFont)(text, locale_js_1.LOCALE.ALPHABETS.languagePrefix.english);
    }
    grammar_js_1.Grammar.getInstance().setCorrection("ignoreEnglish", ignoreEnglish);
    function contentIterator(nodes, context) {
      var _a;
      const func = (0, store_util_js_1.contentIterator)(nodes, context);
      const parentNode = nodes[0].parentNode.parentNode;
      const match = (_a = parentNode.getAttribute("annotation")) === null || _a === void 0 ? void 0 : _a.match(/depth:(\d+)/);
      const depth = match ? match[1] : "";
      return function() {
        const descrs = func();
        descrs.unshift(new auditory_description_js_1.AuditoryDescription({ text: "", layout: `beginrel${depth}` }));
        descrs.push(new auditory_description_js_1.AuditoryDescription({ text: "", layout: `endrel${depth}` }));
        return descrs;
      };
    }
    function literal(text) {
      const evalStr = (e) => engine_js_1.Engine.getInstance().evaluator(e, engine_js_1.Engine.getInstance().dynamicCstr);
      return Array.from(text).map(evalStr).join("");
    }
    grammar_js_1.Grammar.getInstance().setCorrection("literal", literal);
  }
});

// node_modules/speech-rule-engine/js/speech_rules/other_rules.js
var require_other_rules = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/other_rules.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PrefixRules = PrefixRules;
    exports2.OtherRules = OtherRules;
    exports2.BrailleRules = BrailleRules;
    var dynamic_cstr_js_1 = require_dynamic_cstr();
    var StoreUtil = require_store_util();
    var MathspeakKoreanUtil = require_mathspeak_korean_util();
    var MathspeakUtil = require_mathspeak_util();
    var NemethUtil = require_nemeth_util();
    var NumbersUtil = require_numbers_util();
    var SpeechRules = require_speech_rules();
    function PrefixRules() {
      SpeechRules.addStore("en.prefix.default", "", {
        CSFordinalPosition: NumbersUtil.ordinalPosition
      });
    }
    function OtherRules() {
      SpeechRules.addStore("en.speech.chromevox", "", {
        CTFnodeCounter: StoreUtil.nodeCounter,
        CTFcontentIterator: StoreUtil.contentIterator
      });
      SpeechRules.addStore("en.speech.emacspeak", "en.speech.chromevox", {
        CQFvulgarFractionSmall: MathspeakUtil.isSmallVulgarFraction,
        CSFvulgarFraction: NumbersUtil.vulgarFraction
      });
      SpeechRules.addStore("ko.summary.", "ko.speech.mathspeak", {
        CSFordinalConversion: MathspeakKoreanUtil.ordinalConversion,
        CSFdecreasedOrdinalConversion: MathspeakKoreanUtil.decreasedOrdinalConversion,
        CSFlistOrdinalConversion: MathspeakKoreanUtil.listOrdinalConversion
      });
    }
    function BrailleRules() {
      SpeechRules.addStore("nemeth.braille.default", dynamic_cstr_js_1.DynamicCstr.BASE_LOCALE + ".speech.mathspeak", {
        CSFopenFraction: NemethUtil.openingFraction,
        CSFcloseFraction: NemethUtil.closingFraction,
        CSFoverFraction: NemethUtil.overFraction,
        CSFoverBevFraction: NemethUtil.overBevelledFraction,
        CQFhyperFraction: NemethUtil.hyperFractionBoundary,
        CSFopenRadical: NemethUtil.openingRadical,
        CSFcloseRadical: NemethUtil.closingRadical,
        CSFindexRadical: NemethUtil.indexRadical,
        CSFsubscript: MathspeakUtil.subscriptVerbose,
        CSFsuperscript: MathspeakUtil.superscriptVerbose,
        CSFbaseline: MathspeakUtil.baselineVerbose,
        CGFtensorRules: (st) => MathspeakUtil.generateTensorRules(st, false),
        CTFcontentIterator: NemethUtil.contentIterator,
        CTFrelationIterator: NemethUtil.relationIterator,
        CTFimplicitIterator: NemethUtil.implicitIterator
      });
      SpeechRules.addStore("euro.braille.default", "nemeth.braille.default", {});
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/speech_rule_stores.js
var require_speech_rule_stores = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/speech_rule_stores.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.init = init;
    var clearspeak_rules_js_1 = require_clearspeak_rules();
    var mathspeak_rules_js_1 = require_mathspeak_rules();
    var other_rules_js_1 = require_other_rules();
    var INIT = false;
    function init() {
      if (INIT) {
        return;
      }
      (0, mathspeak_rules_js_1.MathspeakRules)();
      (0, clearspeak_rules_js_1.ClearspeakRules)();
      (0, other_rules_js_1.PrefixRules)();
      (0, other_rules_js_1.OtherRules)();
      (0, other_rules_js_1.BrailleRules)();
      INIT = true;
    }
  }
});

// node_modules/speech-rule-engine/js/rule_engine/speech_rule.js
var require_speech_rule = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/speech_rule.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OutputError = exports2.Precondition = exports2.Action = exports2.Component = exports2.ActionType = exports2.SpeechRule = void 0;
    var engine_js_1 = require_engine();
    var Grammar = require_grammar();
    var SpeechRule = class {
      constructor(name, dynamicCstr, precondition, action) {
        this.name = name;
        this.dynamicCstr = dynamicCstr;
        this.precondition = precondition;
        this.action = action;
        this.context = null;
      }
      toString() {
        return this.name + " | " + this.dynamicCstr.toString() + " | " + this.precondition.toString() + " ==> " + this.action.toString();
      }
    };
    exports2.SpeechRule = SpeechRule;
    var ActionType;
    (function(ActionType2) {
      ActionType2["NODE"] = "NODE";
      ActionType2["MULTI"] = "MULTI";
      ActionType2["TEXT"] = "TEXT";
      ActionType2["PERSONALITY"] = "PERSONALITY";
    })(ActionType || (exports2.ActionType = ActionType = {}));
    function actionFromString(str) {
      switch (str) {
        case "[n]":
          return ActionType.NODE;
        case "[m]":
          return ActionType.MULTI;
        case "[t]":
          return ActionType.TEXT;
        case "[p]":
          return ActionType.PERSONALITY;
        default:
          throw "Parse error: " + str;
      }
    }
    function actionToString(speechType) {
      switch (speechType) {
        case ActionType.NODE:
          return "[n]";
        case ActionType.MULTI:
          return "[m]";
        case ActionType.TEXT:
          return "[t]";
        case ActionType.PERSONALITY:
          return "[p]";
        default:
          throw "Unknown type error: " + speechType;
      }
    }
    var Component = class _Component {
      static grammarFromString(grammar) {
        return Grammar.Grammar.parseInput(grammar);
      }
      static fromString(input) {
        const output = {
          type: actionFromString(input.substring(0, 3))
        };
        let rest = input.slice(3).trim();
        if (!rest) {
          throw new OutputError("Missing content.");
        }
        switch (output.type) {
          case ActionType.TEXT:
            if (rest[0] === '"') {
              const quotedString = splitString(rest, "\\(")[0].trim();
              if (quotedString.slice(-1) !== '"') {
                throw new OutputError("Invalid string syntax.");
              }
              output.content = quotedString;
              rest = rest.slice(quotedString.length).trim();
              if (rest.indexOf("(") === -1) {
                rest = "";
              }
              break;
            }
          case ActionType.NODE:
          case ActionType.MULTI:
            {
              const bracket = rest.indexOf(" (");
              if (bracket === -1) {
                output.content = rest.trim();
                rest = "";
                break;
              }
              output.content = rest.substring(0, bracket).trim();
              rest = rest.slice(bracket).trim();
            }
            break;
        }
        if (rest) {
          const attributes = _Component.attributesFromString(rest);
          if (attributes.grammar) {
            output.grammar = attributes.grammar;
            delete attributes.grammar;
          }
          if (Object.keys(attributes).length) {
            output.attributes = attributes;
          }
        }
        return new _Component(output);
      }
      static attributesFromString(attrs) {
        if (attrs[0] !== "(" || attrs.slice(-1) !== ")") {
          throw new OutputError("Invalid attribute expression: " + attrs);
        }
        const attributes = {};
        const attribs = splitString(attrs.slice(1, -1), ",");
        for (const attr of attribs) {
          const colon = attr.indexOf(":");
          if (colon === -1) {
            attributes[attr.trim()] = "true";
          } else {
            const key = attr.substring(0, colon).trim();
            const value = attr.slice(colon + 1).trim();
            attributes[key] = key === Grammar.ATTRIBUTE ? _Component.grammarFromString(value) : value;
          }
        }
        return attributes;
      }
      constructor({ type, content, attributes, grammar }) {
        this.type = type;
        this.content = content;
        this.attributes = attributes;
        this.grammar = grammar;
      }
      toString() {
        let strs = "";
        strs += actionToString(this.type);
        strs += this.content ? " " + this.content : "";
        const attrs = this.attributesToString();
        strs += attrs ? " " + attrs : "";
        return strs;
      }
      grammarToString() {
        return this.getGrammar().join(":");
      }
      getGrammar() {
        if (!this.grammar) {
          return [];
        }
        const attribs = [];
        for (const [key, val] of Object.entries(this.grammar)) {
          attribs.push(val === true ? key : val === false ? `!${key}` : `${key}=${val}`);
        }
        return attribs;
      }
      attributesToString() {
        const attribs = this.getAttributes();
        const grammar = this.grammarToString();
        if (grammar) {
          attribs.push("grammar:" + grammar);
        }
        return attribs.length > 0 ? "(" + attribs.join(", ") + ")" : "";
      }
      getAttributes() {
        if (!this.attributes) {
          return [];
        }
        const attribs = [];
        for (const [key, val] of Object.entries(this.attributes)) {
          attribs.push(val === "true" ? key : `${key}:${val}`);
        }
        return attribs;
      }
    };
    exports2.Component = Component;
    var Action = class _Action {
      static fromString(input) {
        const comps = splitString(input, ";").filter(function(x) {
          return x.match(/\S/);
        }).map(function(x) {
          return x.trim();
        });
        const newComps = [];
        for (let i = 0, m = comps.length; i < m; i++) {
          const comp = Component.fromString(comps[i]);
          if (comp) {
            newComps.push(comp);
          }
        }
        _Action.naiveSpan(newComps);
        return new _Action(newComps);
      }
      static naiveSpan(comps) {
        var _a;
        let first = false;
        for (let i = 0, comp; comp = comps[i]; i++) {
          if (first && (comp.type !== ActionType.TEXT || comp.content[0] !== '"' && !comp.content.match(/^CSF/)))
            continue;
          if (!first && comp.type === ActionType.PERSONALITY)
            continue;
          if (!first) {
            first = true;
            continue;
          }
          if ((_a = comp.attributes) === null || _a === void 0 ? void 0 : _a.span)
            continue;
          const next = comps[i + 1];
          if (next && next.type !== ActionType.NODE)
            continue;
          _Action.addNaiveSpan(comp, next ? next.content : "LAST");
        }
      }
      static addNaiveSpan(comp, span) {
        if (!comp.attributes) {
          comp.attributes = {};
        }
        comp.attributes["span"] = span;
      }
      constructor(components) {
        this.components = components;
      }
      toString() {
        const comps = this.components.map(function(c) {
          return c.toString();
        });
        return comps.join("; ");
      }
    };
    exports2.Action = Action;
    var Precondition = class _Precondition {
      static constraintValue(constr, priorities) {
        for (let i = 0, regexp; regexp = priorities[i]; i++) {
          if (constr.match(regexp)) {
            return ++i;
          }
        }
        return 0;
      }
      toString() {
        const constrs = this.constraints.join(", ");
        return `${this.query}, ${constrs} (${this.priority}, ${this.rank})`;
      }
      constructor(query, ...cstr) {
        this.query = query;
        this.constraints = cstr;
        const [exists, user] = this.presetPriority();
        this.priority = exists ? user : this.calculatePriority();
      }
      calculatePriority() {
        const query = _Precondition.constraintValue(this.query, _Precondition.queryPriorities);
        if (!query) {
          return 0;
        }
        const match = this.query.match(/^self::.+\[(.+)\]/);
        let attr = 0;
        if ((match === null || match === void 0 ? void 0 : match.length) && match[1]) {
          const inner = match[1];
          attr = _Precondition.constraintValue(inner, _Precondition.attributePriorities);
        }
        return query * 100 + attr * 10;
      }
      presetPriority() {
        if (!this.constraints.length) {
          return [false, 0];
        }
        const last = this.constraints[this.constraints.length - 1].match(/^priority=(.*$)/);
        if (!last) {
          return [false, 0];
        }
        this.constraints.pop();
        const numb = parseFloat(last[1]);
        return [true, isNaN(numb) ? 0 : numb];
      }
    };
    exports2.Precondition = Precondition;
    Precondition.queryPriorities = [
      /^self::\*$/,
      /^self::[\w-]+$/,
      /^self::\*\[.+\]$/,
      /^self::[\w-]+\[.+\]$/
    ];
    Precondition.attributePriorities = [
      /^@[\w-]+$/,
      /^@[\w-]+!=".+"$/,
      /^not\(contains\(@[\w-]+,\s*".+"\)\)$/,
      /^contains\(@[\w-]+,".+"\)$/,
      /^@[\w-]+=".+"$/
    ];
    var OutputError = class extends engine_js_1.SREError {
      constructor(msg) {
        super(msg);
        this.name = "RuleError";
      }
    };
    exports2.OutputError = OutputError;
    function splitString(str, sep) {
      const strList = [];
      let prefix = "";
      while (str !== "") {
        const sepPos = str.search(sep);
        if (sepPos === -1) {
          if ((str.match(/"/g) || []).length % 2 !== 0) {
            throw new OutputError("Invalid string in expression: " + str);
          }
          strList.push(prefix + str);
          prefix = "";
          str = "";
        } else if ((str.substring(0, sepPos).match(/"/g) || []).length % 2 === 0) {
          strList.push(prefix + str.substring(0, sepPos));
          prefix = "";
          str = str.substring(sepPos + 1);
        } else {
          const nextQuot = str.substring(sepPos).search('"');
          if (nextQuot === -1) {
            throw new OutputError("Invalid string in expression: " + str);
          } else {
            prefix = prefix + str.substring(0, sepPos + nextQuot + 1);
            str = str.substring(sepPos + nextQuot + 1);
          }
        }
      }
      if (prefix) {
        strList.push(prefix);
      }
      return strList;
    }
  }
});

// node_modules/speech-rule-engine/js/rule_engine/speech_rule_functions.js
var require_speech_rule_functions = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/speech_rule_functions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CustomGenerators = exports2.ContextFunctions = exports2.CustomStrings = exports2.CustomQueries = void 0;
    var FunctionsStore = class {
      constructor(prefix, store) {
        this.prefix = prefix;
        this.store = store;
      }
      add(name, func) {
        if (this.checkCustomFunctionSyntax_(name)) {
          this.store[name] = func;
        }
      }
      addStore(store) {
        const keys = Object.keys(store.store);
        for (let i = 0, key; key = keys[i]; i++) {
          this.add(key, store.store[key]);
        }
      }
      lookup(name) {
        return this.store[name];
      }
      checkCustomFunctionSyntax_(name) {
        const reg = new RegExp("^" + this.prefix);
        if (!name.match(reg)) {
          console.error("FunctionError: Invalid function name. Expected prefix " + this.prefix);
          return false;
        }
        return true;
      }
    };
    var CustomQueries = class extends FunctionsStore {
      constructor() {
        const store = {};
        super("CQF", store);
      }
    };
    exports2.CustomQueries = CustomQueries;
    var CustomStrings = class extends FunctionsStore {
      constructor() {
        const store = {};
        super("CSF", store);
      }
    };
    exports2.CustomStrings = CustomStrings;
    var ContextFunctions = class extends FunctionsStore {
      constructor() {
        const store = {};
        super("CTF", store);
      }
    };
    exports2.ContextFunctions = ContextFunctions;
    var CustomGenerators = class extends FunctionsStore {
      constructor() {
        const store = {};
        super("CGF", store);
      }
    };
    exports2.CustomGenerators = CustomGenerators;
  }
});

// node_modules/speech-rule-engine/js/rule_engine/speech_rule_context.js
var require_speech_rule_context = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/speech_rule_context.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SpeechRuleContext = void 0;
    var span_js_1 = require_span();
    var XpathUtil = require_xpath_util();
    var srf = require_speech_rule_functions();
    var SpeechRuleContext = class {
      constructor() {
        this.customQueries = new srf.CustomQueries();
        this.customStrings = new srf.CustomStrings();
        this.contextFunctions = new srf.ContextFunctions();
        this.customGenerators = new srf.CustomGenerators();
      }
      applyCustomQuery(node, funcName) {
        const func = this.customQueries.lookup(funcName);
        return func ? func(node) : null;
      }
      applySelector(node, expr) {
        const result = this.applyCustomQuery(node, expr);
        return result || XpathUtil.evalXPath(expr, node);
      }
      applyQuery(node, expr) {
        const results = this.applySelector(node, expr);
        if (results.length > 0) {
          return results[0];
        }
        return null;
      }
      applyConstraint(node, expr) {
        const result = this.applyQuery(node, expr);
        return !!result || XpathUtil.evaluateBoolean(expr, node);
      }
      constructString(node, expr) {
        const result = this.constructString_(node, expr);
        return Array.isArray(result) ? result.map((x) => x.speech).join("") : result;
      }
      constructSpan(node, expr, def) {
        const result = this.constructString_(node, expr);
        if (Array.isArray(result)) {
          const last = result[result.length - 1];
          last.attributes = Object.assign({}, def, last.attributes);
          return result;
        } else {
          return [span_js_1.Span.node(result, node, def)];
        }
      }
      constructString_(node, expr) {
        if (!expr) {
          return "";
        }
        if (expr.charAt(0) === '"') {
          return expr.slice(1, -1);
        }
        const func = this.customStrings.lookup(expr);
        if (func) {
          return func(node);
        }
        return XpathUtil.evaluateString(expr, node);
      }
      parse(functions) {
        const functs = Array.isArray(functions) ? functions : Object.entries(functions);
        for (const func of functs) {
          const kind = func[0].slice(0, 3);
          switch (kind) {
            case "CQF":
              this.customQueries.add(func[0], func[1]);
              break;
            case "CSF":
              this.customStrings.add(func[0], func[1]);
              break;
            case "CTF":
              this.contextFunctions.add(func[0], func[1]);
              break;
            case "CGF":
              this.customGenerators.add(func[0], func[1]);
              break;
            default:
              console.error("FunctionError: Invalid function name " + func[0]);
          }
        }
      }
    };
    exports2.SpeechRuleContext = SpeechRuleContext;
  }
});

// node_modules/speech-rule-engine/js/rule_engine/base_rule_store.js
var require_base_rule_store = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/base_rule_store.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BaseRuleStore = void 0;
    var auditory_description_js_1 = require_auditory_description();
    var dynamic_cstr_js_1 = require_dynamic_cstr();
    var speech_rule_js_1 = require_speech_rule();
    var speech_rule_context_js_1 = require_speech_rule_context();
    var BaseRuleStore = class _BaseRuleStore {
      static compareStaticConstraints_(cstr1, cstr2) {
        if (cstr1.length !== cstr2.length) {
          return false;
        }
        for (let i = 0, cstr; cstr = cstr1[i]; i++) {
          if (cstr2.indexOf(cstr) === -1) {
            return false;
          }
        }
        return true;
      }
      static comparePreconditions_(rule1, rule2) {
        const prec1 = rule1.precondition;
        const prec2 = rule2.precondition;
        if (prec1.query !== prec2.query) {
          return false;
        }
        return _BaseRuleStore.compareStaticConstraints_(prec1.constraints, prec2.constraints);
      }
      constructor() {
        this.context = new speech_rule_context_js_1.SpeechRuleContext();
        this.parseOrder = dynamic_cstr_js_1.DynamicCstr.DEFAULT_ORDER;
        this.parser = new dynamic_cstr_js_1.DynamicCstrParser(this.parseOrder);
        this.locale = dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.LOCALE];
        this.modality = dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.MODALITY];
        this.domain = "";
        this.initialized = false;
        this.inherits = null;
        this.kind = "standard";
        this.customTranscriptions = {};
        this.preconditions = /* @__PURE__ */ new Map();
        this.speechRules_ = [];
        this.rank = 0;
        this.parseMethods = {
          Rule: this.defineRule,
          Generator: this.generateRules,
          Action: this.defineAction,
          Precondition: this.definePrecondition,
          Ignore: this.ignoreRules
        };
      }
      defineRule(name, dynamic, action, prec, ...args) {
        const postc = this.parseAction(action);
        const fullPrec = this.parsePrecondition(prec, args);
        const dynamicCstr = this.parseCstr(dynamic);
        if (!(postc && fullPrec && dynamicCstr)) {
          console.error(`Rule Error: ${prec}, (${dynamic}): ${action}`);
          return null;
        }
        const rule = new speech_rule_js_1.SpeechRule(name, dynamicCstr, fullPrec, postc);
        rule.precondition.rank = this.rank++;
        this.addRule(rule);
        return rule;
      }
      addRule(rule) {
        rule.context = this.context;
        this.speechRules_.unshift(rule);
      }
      deleteRule(rule) {
        const index = this.speechRules_.indexOf(rule);
        if (index !== -1) {
          this.speechRules_.splice(index, 1);
        }
      }
      findRule(pred) {
        for (let i = 0, rule; rule = this.speechRules_[i]; i++) {
          if (pred(rule)) {
            return rule;
          }
        }
        return null;
      }
      findAllRules(pred) {
        return this.speechRules_.filter(pred);
      }
      evaluateDefault(node) {
        const rest = node.textContent.slice(0);
        if (rest.match(/^\s+$/)) {
          return this.evaluateWhitespace(rest);
        }
        return this.evaluateString(rest);
      }
      evaluateWhitespace(_str) {
        return [];
      }
      evaluateCustom(str) {
        const trans = this.customTranscriptions[str];
        return trans !== void 0 ? auditory_description_js_1.AuditoryDescription.create({ text: trans }, { adjust: true, translate: false }) : null;
      }
      evaluateCharacter(str) {
        return this.evaluateCustom(str) || auditory_description_js_1.AuditoryDescription.create({ text: str }, { adjust: true, translate: true });
      }
      removeDuplicates(rule) {
        for (let i = this.speechRules_.length - 1, oldRule; oldRule = this.speechRules_[i]; i--) {
          if (oldRule !== rule && rule.dynamicCstr.equal(oldRule.dynamicCstr) && _BaseRuleStore.comparePreconditions_(oldRule, rule)) {
            this.speechRules_.splice(i, 1);
          }
        }
      }
      getSpeechRules() {
        return this.speechRules_;
      }
      setSpeechRules(rules) {
        this.speechRules_ = rules;
      }
      getPreconditions() {
        return this.preconditions;
      }
      parseCstr(cstr) {
        try {
          return this.parser.parse(this.locale + "." + this.modality + (this.domain ? "." + this.domain : "") + "." + cstr);
        } catch (err) {
          if (err.name === "RuleError") {
            console.error("Rule Error ", `Illegal Dynamic Constraint: ${cstr}.`, err.message);
            return null;
          } else {
            throw err;
          }
        }
      }
      parsePrecondition(query, rest) {
        try {
          const queryCstr = this.parsePrecondition_(query);
          query = queryCstr[0];
          let restCstr = queryCstr.slice(1);
          for (const cstr of rest) {
            restCstr = restCstr.concat(this.parsePrecondition_(cstr));
          }
          return new speech_rule_js_1.Precondition(query, ...restCstr);
        } catch (err) {
          if (err.name === "RuleError") {
            console.error("Rule Error ", `Illegal preconditions: ${query}, ${rest}.`, err.message);
            return null;
          } else {
            throw err;
          }
        }
      }
      parseAction(action) {
        try {
          return speech_rule_js_1.Action.fromString(action);
        } catch (err) {
          if (err.name === "RuleError") {
            console.error("Rule Error ", `Illegal action: ${action}.`, err.message);
            return null;
          } else {
            throw err;
          }
        }
      }
      parse(ruleSet) {
        this.modality = ruleSet.modality || this.modality;
        this.locale = ruleSet.locale || this.locale;
        this.domain = ruleSet.domain || this.domain;
        this.context.parse(ruleSet.functions || []);
        if (ruleSet.kind !== "actions") {
          this.kind = ruleSet.kind || this.kind;
          this.inheritRules();
        }
        this.parseRules(ruleSet.rules || []);
      }
      parseRules(rules) {
        for (let i = 0, rule; rule = rules[i]; i++) {
          const type = rule[0];
          const method = this.parseMethods[type];
          if (type && method) {
            method.apply(this, rule.slice(1));
          }
        }
      }
      generateRules(generator) {
        const method = this.context.customGenerators.lookup(generator);
        if (method) {
          method(this);
        }
      }
      defineAction(name, action) {
        let postc;
        try {
          postc = speech_rule_js_1.Action.fromString(action);
        } catch (err) {
          if (err.name === "RuleError") {
            console.error("Action Error ", action, err.message);
            return;
          } else {
            throw err;
          }
        }
        const prec = this.getFullPreconditions(name);
        if (!prec) {
          console.error(`Action Error: No precondition for action ${name}`);
          return;
        }
        this.ignoreRules(name);
        const regexp = new RegExp("^\\w+\\.\\w+\\." + (this.domain ? "\\w+\\." : ""));
        prec.conditions.forEach(([dynamic, prec2]) => {
          const newDynamic = this.parseCstr(dynamic.toString().replace(regexp, ""));
          this.addRule(new speech_rule_js_1.SpeechRule(name, newDynamic, prec2, postc));
        });
      }
      getFullPreconditions(name) {
        const prec = this.preconditions.get(name);
        if (prec || !this.inherits) {
          return prec;
        }
        return this.inherits.getFullPreconditions(name);
      }
      definePrecondition(name, dynamic, prec, ...args) {
        const fullPrec = this.parsePrecondition(prec, args);
        const dynamicCstr = this.parseCstr(dynamic);
        if (!(fullPrec && dynamicCstr)) {
          console.error(`Precondition Error: ${prec}, (${dynamic})`);
          return;
        }
        fullPrec.rank = this.rank++;
        this.preconditions.set(name, new Condition(dynamicCstr, fullPrec));
      }
      inheritRules() {
        if (!this.inherits || !this.inherits.getSpeechRules().length) {
          return;
        }
        const regexp = new RegExp("^\\w+\\.\\w+\\." + (this.domain ? "\\w+\\." : ""));
        this.inherits.getSpeechRules().forEach((rule) => {
          const newDynamic = this.parseCstr(rule.dynamicCstr.toString().replace(regexp, ""));
          this.addRule(new speech_rule_js_1.SpeechRule(rule.name, newDynamic, rule.precondition, rule.action));
        });
      }
      ignoreRules(name, ...cstrs) {
        let rules = this.findAllRules((r) => r.name === name);
        if (!cstrs.length) {
          rules.forEach(this.deleteRule.bind(this));
          return;
        }
        let rest = [];
        for (const cstr of cstrs) {
          const dynamic = this.parseCstr(cstr);
          for (const rule of rules) {
            if (dynamic.equal(rule.dynamicCstr)) {
              this.deleteRule(rule);
            } else {
              rest.push(rule);
            }
          }
          rules = rest;
          rest = [];
        }
      }
      parsePrecondition_(cstr) {
        const generator = this.context.customGenerators.lookup(cstr);
        return generator ? generator() : [cstr];
      }
    };
    exports2.BaseRuleStore = BaseRuleStore;
    var Condition = class {
      constructor(base, condition) {
        this.base = base;
        this._conditions = [];
        this.constraints = [];
        this.allCstr = {};
        this.constraints.push(base);
        this.addCondition(base, condition);
      }
      get conditions() {
        return this._conditions;
      }
      addConstraint(dynamic) {
        if (this.constraints.filter((cstr) => cstr.equal(dynamic)).length) {
          return;
        }
        this.constraints.push(dynamic);
        const newConds = [];
        for (const [dyn, pre] of this.conditions) {
          if (this.base.equal(dyn)) {
            newConds.push([dynamic, pre]);
          }
        }
        this._conditions = this._conditions.concat(newConds);
      }
      addBaseCondition(cond) {
        this.addCondition(this.base, cond);
      }
      addFullCondition(cond) {
        this.constraints.forEach((cstr) => this.addCondition(cstr, cond));
      }
      addCondition(dynamic, cond) {
        const condStr = dynamic.toString() + " " + cond.toString();
        if (this.allCstr.condStr) {
          return;
        }
        this.allCstr[condStr] = true;
        this._conditions.push([dynamic, cond]);
      }
    };
  }
});

// node_modules/speech-rule-engine/js/rule_engine/math_store.js
var require_math_store = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/math_store.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MathStore = void 0;
    var BaseUtil = require_base_util();
    var locale_js_1 = require_locale();
    var semantic_annotations_js_1 = require_semantic_annotations();
    var base_rule_store_js_1 = require_base_rule_store();
    var speech_rule_js_1 = require_speech_rule();
    var MathStore = class _MathStore extends base_rule_store_js_1.BaseRuleStore {
      constructor() {
        super();
        this.annotators = [];
        this.parseMethods["Alias"] = this.defineAlias;
        this.parseMethods["SpecializedRule"] = this.defineSpecializedRule;
        this.parseMethods["Specialized"] = this.defineSpecialized;
      }
      initialize() {
        if (this.initialized) {
          return;
        }
        this.annotations();
        this.initialized = true;
      }
      annotations() {
        for (let i = 0, annotator; annotator = this.annotators[i]; i++) {
          (0, semantic_annotations_js_1.activate)(this.domain, annotator);
        }
      }
      defineAlias(name, prec, ...args) {
        const fullPrec = this.parsePrecondition(prec, args);
        if (!fullPrec) {
          console.error(`Precondition Error: ${prec} ${args}`);
          return;
        }
        const condition = this.preconditions.get(name);
        if (!condition) {
          console.error(`Alias Error: No precondition by the name of ${name}`);
          return;
        }
        condition.addFullCondition(fullPrec);
      }
      defineRulesAlias(name, query, ...args) {
        const rules = this.findAllRules(function(rule) {
          return rule.name === name;
        });
        if (rules.length === 0) {
          throw new speech_rule_js_1.OutputError("Rule with name " + name + " does not exist.");
        }
        const keep = [];
        const findKeep = (rule) => {
          const cstr = rule.dynamicCstr.toString();
          const action = rule.action.toString();
          for (let i = 0, k; k = keep[i]; i++) {
            if (k.action === action && k.cstr === cstr) {
              return false;
            }
          }
          keep.push({ cstr, action });
          return true;
        };
        rules.forEach((rule) => {
          if (findKeep(rule)) {
            this.addAlias_(rule, query, args);
          }
        });
      }
      defineSpecializedRule(name, oldDynamic, newDynamic, opt_action) {
        const dynamicCstr = this.parseCstr(oldDynamic);
        const rule = this.findRule((rule2) => rule2.name === name && dynamicCstr.equal(rule2.dynamicCstr));
        const newCstr = this.parseCstr(newDynamic);
        if (!rule && opt_action) {
          throw new speech_rule_js_1.OutputError("Rule named " + name + " with style " + oldDynamic + " does not exist.");
        }
        const action = opt_action ? speech_rule_js_1.Action.fromString(opt_action) : rule.action;
        const newRule = new speech_rule_js_1.SpeechRule(rule.name, newCstr, rule.precondition, action);
        this.addRule(newRule);
      }
      defineSpecialized(name, _old, dynamic) {
        const cstr = this.parseCstr(dynamic);
        if (!cstr) {
          console.error(`Dynamic Constraint Error: ${dynamic}`);
          return;
        }
        const condition = this.preconditions.get(name);
        if (!condition) {
          console.error(`Alias Error: No precondition by the name of ${name}`);
          return;
        }
        condition.addConstraint(cstr);
      }
      evaluateString(str) {
        const descs = [];
        if (str.match(/^\s+$/)) {
          return descs;
        }
        let num = this.matchNumber(str);
        if (num && num.length === str.length) {
          descs.push(this.evaluateCharacter(num.number));
          return descs;
        }
        const split = BaseUtil.removeEmpty(str.replace(/\s/g, " ").split(" "));
        for (let i = 0, s; s = split[i]; i++) {
          if (s.length === 1) {
            descs.push(this.evaluateCharacter(s));
          } else if (s.match(new RegExp("^[" + locale_js_1.LOCALE.MESSAGES.regexp.TEXT + "]+$"))) {
            descs.push(this.evaluateCharacter(s));
          } else {
            let rest = s;
            while (rest) {
              num = this.matchNumber(rest);
              const alpha = rest.match(new RegExp("^[" + locale_js_1.LOCALE.MESSAGES.regexp.TEXT + "]+"));
              if (num) {
                descs.push(this.evaluateCharacter(num.number));
                rest = rest.substring(num.length);
              } else if (alpha) {
                descs.push(this.evaluateCharacter(alpha[0]));
                rest = rest.substring(alpha[0].length);
              } else {
                const chars = Array.from(rest);
                const chr = chars[0];
                descs.push(this.evaluateCharacter(chr));
                rest = chars.slice(1).join("");
              }
            }
          }
        }
        return descs;
      }
      parse(ruleSet) {
        super.parse(ruleSet);
        this.annotators = ruleSet["annotators"] || [];
      }
      addAlias_(rule, query, cstrList) {
        const prec = this.parsePrecondition(query, cstrList);
        const newRule = new speech_rule_js_1.SpeechRule(rule.name, rule.dynamicCstr, prec, rule.action);
        newRule.name = rule.name;
        this.addRule(newRule);
      }
      matchNumber(str) {
        const locNum = str.match(new RegExp("^" + locale_js_1.LOCALE.MESSAGES.regexp.NUMBER));
        const enNum = str.match(new RegExp("^" + _MathStore.regexp.NUMBER));
        if (!locNum && !enNum) {
          return null;
        }
        const isEn = enNum && enNum[0] === str;
        const isLoc = locNum && locNum[0] === str || !isEn;
        if (isLoc) {
          return locNum ? { number: locNum[0], length: locNum[0].length } : null;
        }
        const num = enNum[0].replace(new RegExp(_MathStore.regexp.DIGIT_GROUP, "g"), "X").replace(new RegExp(_MathStore.regexp.DECIMAL_MARK, "g"), locale_js_1.LOCALE.MESSAGES.regexp.DECIMAL_MARK).replace(/X/g, locale_js_1.LOCALE.MESSAGES.regexp.DIGIT_GROUP.replace(/\\/g, ""));
        return { number: num, length: enNum[0].length };
      }
    };
    exports2.MathStore = MathStore;
    MathStore.regexp = {
      NUMBER: "((\\d{1,3})(?=(,| ))((,| )\\d{3})*(\\.\\d+)?)|^\\d*\\.\\d+|^\\d+",
      DECIMAL_MARK: "\\.",
      DIGIT_GROUP: ","
    };
  }
});

// node_modules/speech-rule-engine/js/rule_engine/braille_store.js
var require_braille_store = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/braille_store.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EuroStore = exports2.BrailleStore = void 0;
    var math_store_js_1 = require_math_store();
    var semantic_annotations_js_1 = require_semantic_annotations();
    var semantic_attr_js_1 = require_semantic_attr();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var BrailleStore = class extends math_store_js_1.MathStore {
      constructor() {
        super(...arguments);
        this.modality = "braille";
        this.customTranscriptions = {
          "⋊": "⠈⠡⠳"
        };
      }
      evaluateString(str) {
        const descs = [];
        const text = Array.from(str);
        for (let i = 0; i < text.length; i++) {
          descs.push(this.evaluateCharacter(text[i]));
        }
        return descs;
      }
      annotations() {
        for (let i = 0, annotator; annotator = this.annotators[i]; i++) {
          (0, semantic_annotations_js_1.activate)(this.locale, annotator);
        }
      }
    };
    exports2.BrailleStore = BrailleStore;
    var EuroStore = class extends BrailleStore {
      constructor() {
        super(...arguments);
        this.locale = "euro";
        this.customTranscriptions = {};
        this.customCommands = {
          "\\cdot": "*",
          "\\lt": "<",
          "\\gt": ">"
        };
        this.lastSpecial = false;
        this.specialChars = ["^", "_", "{", "}"];
      }
      evaluateString(str) {
        const regexp = /(\\[a-z]+|\\{|\\}|\\\\)/i;
        const split = str.split(regexp);
        const cleaned = this.cleanup(split);
        return super.evaluateString(cleaned);
      }
      cleanup(commands) {
        const cleaned = [];
        let intext = false;
        let lastcom = null;
        for (let command of commands) {
          if (command.match(/^\\/)) {
            if (command === "\\text") {
              intext = true;
            }
            if (this.addSpace(semantic_attr_js_1.SemanticMap.LatexCommands.get(command))) {
              cleaned.push(" ");
            }
            command = this.customCommands[command] || command;
            const newcom = command.match(/^\\/);
            if (newcom && command.match(/^\\[a-zA-Z]+$/) && lastcom) {
              cleaned.push(" ");
            }
            lastcom = newcom ? command : null;
            cleaned.push(command);
            continue;
          }
          const rest = command.split("");
          for (const char of rest) {
            if (intext) {
              cleaned.push(char);
              intext = char !== "}";
              lastcom = null;
              continue;
            }
            if (char.match(/[a-z]/i) && lastcom) {
              lastcom = null;
              cleaned.push(" ");
              cleaned.push(char);
              continue;
            }
            if (char.match(/\s/))
              continue;
            if (this.addSpace(char)) {
              cleaned.push(" ");
            }
            cleaned.push(char);
            lastcom = null;
          }
        }
        return cleaned.join("");
      }
      addSpace(char) {
        if (!char)
          return false;
        if (this.specialChars.indexOf(char) !== -1) {
          this.lastSpecial = true;
          return false;
        }
        if (this.lastSpecial) {
          this.lastSpecial = false;
          return false;
        }
        const meaning = semantic_attr_js_1.SemanticMap.Meaning.get(char);
        return meaning.type === semantic_meaning_js_1.SemanticType.OPERATOR || meaning.type === semantic_meaning_js_1.SemanticType.RELATION || meaning.type === semantic_meaning_js_1.SemanticType.PUNCTUATION && meaning.role === semantic_meaning_js_1.SemanticRole.COLON;
      }
    };
    exports2.EuroStore = EuroStore;
  }
});

// node_modules/speech-rule-engine/js/indexing/trie_node.js
var require_trie_node = __commonJS({
  "node_modules/speech-rule-engine/js/indexing/trie_node.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TrieNodeKind = void 0;
    var TrieNodeKind;
    (function(TrieNodeKind2) {
      TrieNodeKind2["ROOT"] = "root";
      TrieNodeKind2["DYNAMIC"] = "dynamic";
      TrieNodeKind2["QUERY"] = "query";
      TrieNodeKind2["BOOLEAN"] = "boolean";
      TrieNodeKind2["STATIC"] = "static";
    })(TrieNodeKind || (exports2.TrieNodeKind = TrieNodeKind = {}));
  }
});

// node_modules/speech-rule-engine/js/indexing/abstract_trie_node.js
var require_abstract_trie_node = __commonJS({
  "node_modules/speech-rule-engine/js/indexing/abstract_trie_node.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StaticTrieNode = exports2.AbstractTrieNode = void 0;
    var debugger_js_1 = require_debugger();
    var trie_node_js_1 = require_trie_node();
    var AbstractTrieNode = class {
      constructor(constraint, test) {
        this.constraint = constraint;
        this.test = test;
        this.children_ = {};
        this.kind = trie_node_js_1.TrieNodeKind.ROOT;
      }
      getConstraint() {
        return this.constraint;
      }
      getKind() {
        return this.kind;
      }
      applyTest(object) {
        return this.test(object);
      }
      addChild(node) {
        const constraint = node.getConstraint();
        const child = this.children_[constraint];
        this.children_[constraint] = node;
        return child;
      }
      getChild(constraint) {
        return this.children_[constraint];
      }
      getChildren() {
        const children = [];
        for (const val of Object.values(this.children_)) {
          children.push(val);
        }
        return children;
      }
      findChildren(object) {
        const children = [];
        for (const val of Object.values(this.children_)) {
          if (val.applyTest(object)) {
            children.push(val);
          }
        }
        return children;
      }
      removeChild(constraint) {
        delete this.children_[constraint];
      }
      toString() {
        return this.constraint;
      }
    };
    exports2.AbstractTrieNode = AbstractTrieNode;
    var StaticTrieNode = class extends AbstractTrieNode {
      constructor(constraint, test) {
        super(constraint, test);
        this.rule_ = null;
        this.kind = trie_node_js_1.TrieNodeKind.STATIC;
      }
      getRule() {
        return this.rule_;
      }
      setRule(rule) {
        if (this.rule_) {
          debugger_js_1.Debugger.getInstance().output("Replacing rule " + this.rule_ + " with " + rule);
        }
        this.rule_ = rule;
      }
      toString() {
        const rule = this.getRule();
        return rule ? this.constraint + "\n==> " + this.getRule().action : this.constraint;
      }
    };
    exports2.StaticTrieNode = StaticTrieNode;
  }
});

// node_modules/speech-rule-engine/js/indexing/trie_node_factory.js
var require_trie_node_factory = __commonJS({
  "node_modules/speech-rule-engine/js/indexing/trie_node_factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getNode = getNode;
    var DomUtil = require_dom_util();
    var XpathUtil = require_xpath_util();
    var grammar_js_1 = require_grammar();
    var MathCompoundStore = require_math_compound_store();
    var abstract_trie_node_js_1 = require_abstract_trie_node();
    var abstract_trie_node_js_2 = require_abstract_trie_node();
    var trie_node_js_1 = require_trie_node();
    function getNode(kind, constraint, context) {
      switch (kind) {
        case trie_node_js_1.TrieNodeKind.ROOT:
          return new RootTrieNode();
        case trie_node_js_1.TrieNodeKind.DYNAMIC:
          return new DynamicTrieNode(constraint);
        case trie_node_js_1.TrieNodeKind.QUERY:
          return new QueryTrieNode(constraint, context);
        case trie_node_js_1.TrieNodeKind.BOOLEAN:
          return new BooleanTrieNode(constraint, context);
        default:
          return null;
      }
    }
    var RootTrieNode = class extends abstract_trie_node_js_1.AbstractTrieNode {
      constructor() {
        super("", () => true);
        this.kind = trie_node_js_1.TrieNodeKind.ROOT;
      }
    };
    var DynamicTrieNode = class extends abstract_trie_node_js_1.AbstractTrieNode {
      constructor(constraint) {
        super(constraint, (axis) => axis === constraint);
        this.kind = trie_node_js_1.TrieNodeKind.DYNAMIC;
      }
    };
    var comparator = {
      "=": (x, y) => x === y,
      "!=": (x, y) => x !== y,
      "<": (x, y) => x < y,
      ">": (x, y) => x > y,
      "<=": (x, y) => x <= y,
      ">=": (x, y) => x >= y
    };
    function constraintTest(constraint) {
      if (constraint.match(/^self::\*$/)) {
        return (_node) => true;
      }
      if (constraint.match(/^self::\w+$/)) {
        const tag = constraint.slice(6).toUpperCase();
        return (node) => node.tagName && DomUtil.tagName(node) === tag;
      }
      if (constraint.match(/^self::\w+:\w+$/)) {
        const inter = constraint.split(":");
        const namespace = XpathUtil.resolveNameSpace(inter[2]);
        if (!namespace) {
          return null;
        }
        const tag = inter[3].toUpperCase();
        return (node) => node.localName && node.localName.toUpperCase() === tag && node.namespaceURI === namespace;
      }
      if (constraint.match(/^@\w+$/)) {
        const attr = constraint.slice(1);
        return (node) => node.hasAttribute && node.hasAttribute(attr);
      }
      if (constraint.match(/^@\w+="[\w\d ]+"$/)) {
        const split = constraint.split("=");
        const attr = split[0].slice(1);
        const value = split[1].slice(1, -1);
        return (node) => node.hasAttribute && node.hasAttribute(attr) && node.getAttribute(attr) === value;
      }
      if (constraint.match(/^@\w+!="[\w\d ]+"$/)) {
        const split = constraint.split("!=");
        const attr = split[0].slice(1);
        const value = split[1].slice(1, -1);
        return (node) => !node.hasAttribute || !node.hasAttribute(attr) || node.getAttribute(attr) !== value;
      }
      if (constraint.match(/^contains\(\s*@grammar\s*,\s*"[\w\d ]+"\s*\)$/)) {
        const split = constraint.split('"');
        const value = split[1];
        return (_node) => !!grammar_js_1.Grammar.getInstance().getParameter(value);
      }
      if (constraint.match(/^not\(\s*contains\(\s*@grammar\s*,\s*"[\w\d ]+"\s*\)\s*\)$/)) {
        const split = constraint.split('"');
        const value = split[1];
        return (_node) => !grammar_js_1.Grammar.getInstance().getParameter(value);
      }
      if (constraint.match(/^name\(\.\.\/\.\.\)="\w+"$/)) {
        const split = constraint.split('"');
        const tag = split[1].toUpperCase();
        return (node) => {
          var _a, _b;
          return ((_b = (_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.tagName) && DomUtil.tagName(node.parentNode.parentNode) === tag;
        };
      }
      if (constraint.match(/^count\(preceding-sibling::\*\)=\d+$/)) {
        const split = constraint.split("=");
        const num = parseInt(split[1], 10);
        return (node) => {
          var _a;
          return ((_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.childNodes[num]) === node;
        };
      }
      if (constraint.match(/^.+\[@category!?=".+"\]$/)) {
        let [, query, equality, category] = constraint.match(/^(.+)\[@category(!?=)"(.+)"\]$/);
        const unit = category.match(/^unit:(.+)$/);
        let add = "";
        if (unit) {
          category = unit[1];
          add = ":unit";
        }
        return (node) => {
          const xpath = XpathUtil.evalXPath(query, node)[0];
          if (xpath) {
            const result = MathCompoundStore.lookupCategory(xpath.textContent + add);
            return equality === "=" ? result === category : result !== category;
          }
          return false;
        };
      }
      if (constraint.match(/^string-length\(.+\)\W+\d+/)) {
        const [, select, comp, count] = constraint.match(/^string-length\((.+)\)(\W+)(\d+)/);
        const func = comparator[comp] || comparator["="];
        const numb = parseInt(count, 10);
        return (node) => {
          const xpath = XpathUtil.evalXPath(select, node)[0];
          if (!xpath) {
            return false;
          }
          return func(Array.from(xpath.textContent).length, numb);
        };
      }
      return null;
    }
    var QueryTrieNode = class extends abstract_trie_node_js_2.StaticTrieNode {
      constructor(constraint, context) {
        super(constraint, constraintTest(constraint));
        this.context = context;
        this.kind = trie_node_js_1.TrieNodeKind.QUERY;
      }
      applyTest(object) {
        return this.test ? this.test(object) : this.context.applyQuery(object, this.constraint) === object;
      }
    };
    var BooleanTrieNode = class extends abstract_trie_node_js_2.StaticTrieNode {
      constructor(constraint, context) {
        super(constraint, constraintTest(constraint));
        this.context = context;
        this.kind = trie_node_js_1.TrieNodeKind.BOOLEAN;
      }
      applyTest(object) {
        return this.test ? this.test(object) : this.context.applyConstraint(object, this.constraint);
      }
    };
  }
});

// node_modules/speech-rule-engine/js/indexing/trie.js
var require_trie = __commonJS({
  "node_modules/speech-rule-engine/js/indexing/trie.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Trie = void 0;
    var trie_node_js_1 = require_trie_node();
    var trie_node_factory_js_1 = require_trie_node_factory();
    var Trie = class _Trie {
      static collectRules_(root) {
        const rules = [];
        let explore = [root];
        while (explore.length) {
          const node = explore.shift();
          if (node.getKind() === trie_node_js_1.TrieNodeKind.QUERY || node.getKind() === trie_node_js_1.TrieNodeKind.BOOLEAN) {
            const rule = node.getRule();
            if (rule) {
              rules.unshift(rule);
            }
          }
          explore = explore.concat(node.getChildren());
        }
        return rules;
      }
      static printWithDepth_(node, depth, str) {
        const prefix = new Array(depth + 2).join(depth.toString()) + ": ";
        str += prefix + node.toString() + "\n";
        const children = node.getChildren();
        for (let i = 0, child; child = children[i]; i++) {
          str = _Trie.printWithDepth_(child, depth + 1, str);
        }
        return str;
      }
      static order_(node) {
        const children = node.getChildren();
        if (!children.length) {
          return 0;
        }
        const max = Math.max.apply(null, children.map(_Trie.order_));
        return Math.max(children.length, max);
      }
      constructor() {
        this.root = (0, trie_node_factory_js_1.getNode)(trie_node_js_1.TrieNodeKind.ROOT, "", null);
      }
      addRule(rule) {
        let node = this.root;
        const context = rule.context;
        const dynamicCstr = rule.dynamicCstr.getValues();
        for (let i = 0, l = dynamicCstr.length; i < l; i++) {
          node = this.addNode_(node, dynamicCstr[i], trie_node_js_1.TrieNodeKind.DYNAMIC, context);
        }
        node = this.addNode_(node, rule.precondition.query, trie_node_js_1.TrieNodeKind.QUERY, context);
        const booleans = rule.precondition.constraints;
        for (let i = 0, l = booleans.length; i < l; i++) {
          node = this.addNode_(node, booleans[i], trie_node_js_1.TrieNodeKind.BOOLEAN, context);
        }
        node.setRule(rule);
      }
      lookupRules(xml, dynamic) {
        let nodes = [this.root];
        const rules = [];
        while (dynamic.length) {
          const dynamicSet = dynamic.shift();
          const newNodes = [];
          while (nodes.length) {
            const node = nodes.shift();
            const children = node.getChildren();
            children.forEach((child) => {
              if (child.getKind() !== trie_node_js_1.TrieNodeKind.DYNAMIC || dynamicSet.indexOf(child.getConstraint()) !== -1) {
                newNodes.push(child);
              }
            });
          }
          nodes = newNodes.slice();
        }
        while (nodes.length) {
          const node = nodes.shift();
          if (node.getRule) {
            const rule = node.getRule();
            if (rule) {
              rules.push(rule);
            }
          }
          const children = node.findChildren(xml);
          nodes = nodes.concat(children);
        }
        return rules;
      }
      hasSubtrie(cstrs) {
        let subtrie = this.root;
        for (let i = 0, l = cstrs.length; i < l; i++) {
          const cstr = cstrs[i];
          subtrie = subtrie.getChild(cstr);
          if (!subtrie) {
            return false;
          }
        }
        return true;
      }
      toString() {
        return _Trie.printWithDepth_(this.root, 0, "");
      }
      collectRules(root = this.root) {
        return _Trie.collectRules_(root);
      }
      order() {
        return _Trie.order_(this.root);
      }
      enumerate(opt_info) {
        return this.enumerate_(this.root, opt_info);
      }
      byConstraint(constraint) {
        let node = this.root;
        while (constraint.length && node) {
          const cstr = constraint.shift();
          node = node.getChild(cstr);
        }
        return node || null;
      }
      enumerate_(node, info) {
        info = info || {};
        const children = node.getChildren();
        for (let i = 0, child; child = children[i]; i++) {
          if (child.kind !== trie_node_js_1.TrieNodeKind.DYNAMIC) {
            continue;
          }
          info[child.getConstraint()] = this.enumerate_(child, info[child.getConstraint()]);
        }
        return info;
      }
      addNode_(node, constraint, kind, context) {
        let nextNode = node.getChild(constraint);
        if (!nextNode) {
          nextNode = (0, trie_node_factory_js_1.getNode)(kind, constraint, context);
          node.addChild(nextNode);
        }
        return nextNode;
      }
    };
    exports2.Trie = Trie;
  }
});

// node_modules/speech-rule-engine/js/rule_engine/speech_rule_engine.js
var require_speech_rule_engine = __commonJS({
  "node_modules/speech-rule-engine/js/rule_engine/speech_rule_engine.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SpeechRuleEngine = void 0;
    var auditory_description_js_1 = require_auditory_description();
    var span_js_1 = require_span();
    var debugger_js_1 = require_debugger();
    var DomUtil = require_dom_util();
    var engine_js_1 = require_engine();
    var EngineConst = require_engine_const();
    var xpath_util_js_1 = require_xpath_util();
    var SpeechRules = require_speech_rules();
    var SpeechRuleStores = require_speech_rule_stores();
    var braille_store_js_1 = require_braille_store();
    var dynamic_cstr_js_1 = require_dynamic_cstr();
    var grammar_js_1 = require_grammar();
    var math_store_js_1 = require_math_store();
    var speech_rule_js_1 = require_speech_rule();
    var trie_js_1 = require_trie();
    var SpeechRuleEngine = class _SpeechRuleEngine {
      static getInstance() {
        _SpeechRuleEngine.instance = _SpeechRuleEngine.instance || new _SpeechRuleEngine();
        return _SpeechRuleEngine.instance;
      }
      static debugSpeechRule(rule, node) {
        const prec = rule.precondition;
        const queryResult = rule.context.applyQuery(node, prec.query);
        debugger_js_1.Debugger.getInstance().output(prec.query, queryResult ? queryResult.toString() : queryResult);
        prec.constraints.forEach((cstr) => debugger_js_1.Debugger.getInstance().output(cstr, rule.context.applyConstraint(node, cstr)));
      }
      static debugNamedSpeechRule(name, node) {
        const rules = _SpeechRuleEngine.getInstance().trie.collectRules();
        const allRules = rules.filter((rule) => rule.name == name);
        for (let i = 0, rule; rule = allRules[i]; i++) {
          debugger_js_1.Debugger.getInstance().output("Rule", name, "DynamicCstr:", rule.dynamicCstr.toString(), "number", i);
          _SpeechRuleEngine.debugSpeechRule(rule, node);
        }
      }
      evaluateNode(node) {
        (0, xpath_util_js_1.updateEvaluator)(node);
        const timeIn = (/* @__PURE__ */ new Date()).getTime();
        let result = [];
        try {
          result = this.evaluateNode_(node);
        } catch (err) {
          console.log(err);
          console.error("Something went wrong computing speech.");
          debugger_js_1.Debugger.getInstance().output(err);
        }
        const timeOut = (/* @__PURE__ */ new Date()).getTime();
        debugger_js_1.Debugger.getInstance().output("Time:", timeOut - timeIn);
        return result;
      }
      toString() {
        const allRules = this.trie.collectRules();
        return allRules.map((rule) => rule.toString()).join("\n");
      }
      runInSetting(settings, callback) {
        const engine = engine_js_1.Engine.getInstance();
        const save = {};
        for (const [key, val] of Object.entries(settings)) {
          save[key] = engine[key];
          engine[key] = val;
        }
        engine.setDynamicCstr();
        const result = callback();
        for (const [key, val] of Object.entries(save)) {
          engine[key] = val;
        }
        engine.setDynamicCstr();
        return result;
      }
      static addStore(set) {
        const store = storeFactory(set);
        if (store.kind !== "abstract") {
          store.getSpeechRules().forEach((x) => _SpeechRuleEngine.getInstance().trie.addRule(x));
        }
        _SpeechRuleEngine.getInstance().addEvaluator(store);
      }
      processGrammar(context, node, grammar) {
        const assignment = {};
        for (const [key, val] of Object.entries(grammar)) {
          assignment[key] = typeof val === "string" ? context.constructString(node, val) : val;
        }
        grammar_js_1.Grammar.getInstance().pushState(assignment);
      }
      addEvaluator(store) {
        const fun = store.evaluateDefault.bind(store);
        const loc = this.evaluators_[store.locale];
        if (loc) {
          loc[store.modality] = fun;
          return;
        }
        const mod = {};
        mod[store.modality] = fun;
        this.evaluators_[store.locale] = mod;
      }
      getEvaluator(locale, modality) {
        const loc = this.evaluators_[locale] || this.evaluators_[dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.LOCALE]];
        return loc[modality] || loc[dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.MODALITY]];
      }
      enumerate(opt_info) {
        return this.trie.enumerate(opt_info);
      }
      constructor() {
        this.trie = null;
        this.evaluators_ = {};
        this.trie = new trie_js_1.Trie();
      }
      evaluateNode_(node) {
        if (!node) {
          return [];
        }
        this.updateConstraint_();
        let result = this.evaluateTree_(node);
        result = processAnnotations(result);
        return result;
      }
      evaluateTree_(node) {
        const engine = engine_js_1.Engine.getInstance();
        let result;
        debugger_js_1.Debugger.getInstance().output(engine.mode !== EngineConst.Mode.HTTP ? node.toString() : node);
        grammar_js_1.Grammar.getInstance().setAttribute(node);
        const rule = this.lookupRule(node, engine.dynamicCstr);
        if (!rule) {
          if (engine.strict) {
            return [];
          }
          result = this.getEvaluator(engine.locale, engine.modality)(node);
          if (node.attributes) {
            this.addPersonality_(result, {}, false, node);
          }
          return result;
        }
        debugger_js_1.Debugger.getInstance().generateOutput(() => [
          "Apply Rule:",
          rule.name,
          rule.dynamicCstr.toString(),
          engine.mode === EngineConst.Mode.HTTP ? DomUtil.serializeXml(node) : node.toString()
        ]);
        grammar_js_1.Grammar.getInstance().processSingles();
        const context = rule.context;
        const components = rule.action.components;
        result = [];
        for (let i = 0, component; component = components[i]; i++) {
          let descrs = [];
          const content = component.content || "";
          const attributes = component.attributes || {};
          let multi = false;
          if (component.grammar) {
            this.processGrammar(context, node, component.grammar);
          }
          let saveEngine = null;
          if (attributes.engine) {
            saveEngine = engine_js_1.Engine.getInstance().dynamicCstr.getComponents();
            const features = Object.assign({}, saveEngine, grammar_js_1.Grammar.parseInput(attributes.engine));
            engine_js_1.Engine.getInstance().setDynamicCstr(features);
            this.updateConstraint_();
          }
          switch (component.type) {
            case speech_rule_js_1.ActionType.NODE:
              {
                const selected = context.applyQuery(node, content);
                if (selected) {
                  descrs = this.evaluateTree_(selected);
                }
              }
              break;
            case speech_rule_js_1.ActionType.MULTI:
              {
                multi = true;
                const selects = context.applySelector(node, content);
                if (selects.length > 0) {
                  descrs = this.evaluateNodeList_(context, selects, attributes["sepFunc"], context.constructString(node, attributes["separator"]), attributes["ctxtFunc"], context.constructString(node, attributes["context"]));
                }
              }
              break;
            case speech_rule_js_1.ActionType.TEXT:
              {
                const xpath = attributes["span"];
                let attrs = {};
                if (xpath) {
                  const nodes = (0, xpath_util_js_1.evalXPath)(xpath, node);
                  attrs = nodes.length ? span_js_1.Span.getAttributes(nodes[0]) : { kind: xpath };
                }
                const str = context.constructSpan(node, content, attrs);
                descrs = str.map(function(span) {
                  return auditory_description_js_1.AuditoryDescription.create({ text: span.speech, attributes: span.attributes }, { adjust: true });
                });
              }
              break;
            case speech_rule_js_1.ActionType.PERSONALITY:
            default:
              descrs = [auditory_description_js_1.AuditoryDescription.create({ text: content })];
          }
          if (descrs[0] && !multi) {
            if (attributes["context"]) {
              descrs[0]["context"] = context.constructString(node, attributes["context"]) + (descrs[0]["context"] || "");
            }
            if (attributes["annotation"]) {
              descrs[0]["annotation"] = attributes["annotation"];
            }
          }
          this.addLayout(descrs, attributes, multi);
          if (component.grammar) {
            grammar_js_1.Grammar.getInstance().popState();
          }
          result = result.concat(this.addPersonality_(descrs, attributes, multi, node));
          if (saveEngine) {
            engine_js_1.Engine.getInstance().setDynamicCstr(saveEngine);
            this.updateConstraint_();
          }
        }
        grammar_js_1.Grammar.getInstance().popState();
        return result;
      }
      evaluateNodeList_(context, nodes, sepFunc, sepStr, ctxtFunc, ctxtStr) {
        if (!nodes.length) {
          return [];
        }
        const sep = sepStr || "";
        const cont = ctxtStr || "";
        const cFunc = context.contextFunctions.lookup(ctxtFunc);
        const ctxtClosure = cFunc ? cFunc(nodes, cont) : function() {
          return cont;
        };
        const sFunc = context.contextFunctions.lookup(sepFunc);
        const sepClosure = sFunc ? sFunc(nodes, sep) : function() {
          return [
            auditory_description_js_1.AuditoryDescription.create({ text: sep }, { translate: true })
          ];
        };
        let result = [];
        for (let i = 0, node; node = nodes[i]; i++) {
          const descrs = this.evaluateTree_(node);
          if (descrs.length > 0) {
            descrs[0]["context"] = ctxtClosure() + (descrs[0]["context"] || "");
            result = result.concat(descrs);
            if (i < nodes.length - 1) {
              const text = sepClosure();
              result = result.concat(text);
            }
          }
        }
        return result;
      }
      addLayout(descrs, props, _multi) {
        const layout = props.layout;
        if (!layout) {
          return;
        }
        if (layout.match(/^begin/)) {
          descrs.unshift(new auditory_description_js_1.AuditoryDescription({ text: "", layout }));
          return;
        }
        if (layout.match(/^end/)) {
          descrs.push(new auditory_description_js_1.AuditoryDescription({ text: "", layout }));
          return;
        }
        descrs.unshift(new auditory_description_js_1.AuditoryDescription({ text: "", layout: `begin${layout}` }));
        descrs.push(new auditory_description_js_1.AuditoryDescription({ text: "", layout: `end${layout}` }));
      }
      addPersonality_(descrs, props, multi, node) {
        const personality = {};
        let pause = null;
        for (const key of EngineConst.personalityPropList) {
          const value = props[key];
          if (typeof value === "undefined") {
            continue;
          }
          const numeral = parseFloat(value);
          const realValue = isNaN(numeral) ? value.charAt(0) === '"' ? value.slice(1, -1) : value : numeral;
          if (key === EngineConst.personalityProps.PAUSE) {
            pause = realValue;
          } else {
            personality[key] = realValue;
          }
        }
        for (let i = 0, descr; descr = descrs[i]; i++) {
          this.addRelativePersonality_(descr, personality);
          this.addExternalAttributes_(descr, node);
        }
        if (multi && descrs.length) {
          delete descrs[descrs.length - 1].personality[EngineConst.personalityProps.JOIN];
        }
        if (pause && descrs.length) {
          const last = descrs[descrs.length - 1];
          if (last.text || Object.keys(last.personality).length) {
            descrs.push(auditory_description_js_1.AuditoryDescription.create({
              text: "",
              personality: { pause }
            }));
          } else {
            last.personality[EngineConst.personalityProps.PAUSE] = pause;
          }
        }
        return descrs;
      }
      addExternalAttributes_(descr, node) {
        if (descr.attributes["id"] === void 0) {
          descr.attributes["id"] = node.getAttribute("id");
        }
        if (node.hasAttributes()) {
          const attrs = node.attributes;
          for (let i = attrs.length - 1; i >= 0; i--) {
            const key = attrs[i].name;
            if (!descr.attributes[key] && key.match(/^ext/)) {
              descr.attributes[key] = attrs[i].value;
            }
          }
        }
      }
      addRelativePersonality_(descr, personality) {
        if (!descr["personality"]) {
          descr["personality"] = personality;
          return descr;
        }
        const descrPersonality = descr["personality"];
        for (const [key, val] of Object.entries(personality)) {
          if (descrPersonality[key] && typeof descrPersonality[key] == "number" && typeof val == "number") {
            descrPersonality[key] = (descrPersonality[key] + val).toString();
          } else if (!descrPersonality[key]) {
            descrPersonality[key] = val;
          }
        }
        return descr;
      }
      updateConstraint_() {
        const dynamic = engine_js_1.Engine.getInstance().dynamicCstr;
        const strict = engine_js_1.Engine.getInstance().strict;
        const trie = this.trie;
        const props = {};
        let locale = dynamic.getValue(dynamic_cstr_js_1.Axis.LOCALE);
        let modality = dynamic.getValue(dynamic_cstr_js_1.Axis.MODALITY);
        let domain = dynamic.getValue(dynamic_cstr_js_1.Axis.DOMAIN);
        if (!trie.hasSubtrie([locale, modality, domain])) {
          domain = dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.DOMAIN];
          if (!trie.hasSubtrie([locale, modality, domain])) {
            modality = dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.MODALITY];
            if (!trie.hasSubtrie([locale, modality, domain])) {
              locale = dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.LOCALE];
            }
          }
        }
        props[dynamic_cstr_js_1.Axis.LOCALE] = [locale];
        props[dynamic_cstr_js_1.Axis.MODALITY] = [
          modality !== "summary" ? modality : dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.MODALITY]
        ];
        props[dynamic_cstr_js_1.Axis.DOMAIN] = [
          modality !== "speech" ? dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_1.Axis.DOMAIN] : domain
        ];
        const order = dynamic.getOrder();
        for (let i = 0, axis; axis = order[i]; i++) {
          if (!props[axis]) {
            const value = dynamic.getValue(axis);
            const valueSet = this.makeSet_(value, dynamic.preference);
            const def = dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[axis];
            if (!strict && value !== def) {
              valueSet.push(def);
            }
            props[axis] = valueSet;
          }
        }
        dynamic.updateProperties(props);
      }
      makeSet_(value, preferences) {
        if (!preferences || !Object.keys(preferences).length) {
          return [value];
        }
        return value.split(":");
      }
      lookupRule(node, dynamic) {
        if (!node || node.nodeType !== DomUtil.NodeType.ELEMENT_NODE && node.nodeType !== DomUtil.NodeType.TEXT_NODE) {
          return null;
        }
        const matchingRules = this.lookupRules(node, dynamic);
        return matchingRules.length > 0 ? this.pickMostConstraint_(dynamic, matchingRules) : null;
      }
      lookupRules(node, dynamic) {
        return this.trie.lookupRules(node, dynamic.allProperties());
      }
      pickMostConstraint_(_dynamic, rules) {
        const comparator = engine_js_1.Engine.getInstance().comparator;
        rules.sort(function(r1, r2) {
          return comparator.compare(r1.dynamicCstr, r2.dynamicCstr) || r2.precondition.priority - r1.precondition.priority || r2.precondition.constraints.length - r1.precondition.constraints.length || r2.precondition.rank - r1.precondition.rank;
        });
        debugger_js_1.Debugger.getInstance().generateOutput((() => {
          return rules.map((x) => x.name + "(" + x.dynamicCstr.toString() + ")");
        }).bind(this));
        return rules[0];
      }
    };
    exports2.SpeechRuleEngine = SpeechRuleEngine;
    var stores = /* @__PURE__ */ new Map();
    function getStore(locale, modality) {
      if (modality === "braille" && locale === "euro") {
        return new braille_store_js_1.EuroStore();
      }
      if (modality === "braille") {
        return new braille_store_js_1.BrailleStore();
      }
      return new math_store_js_1.MathStore();
    }
    function storeFactory(set) {
      const name = `${set.locale}.${set.modality}.${set.domain}`;
      if (set.kind === "actions") {
        const store2 = stores.get(name);
        store2.parse(set);
        return store2;
      }
      SpeechRuleStores.init();
      if (set && !set.functions) {
        set.functions = SpeechRules.getStore(set.locale, set.modality, set.domain);
      }
      const store = getStore(set.locale, set.modality);
      stores.set(name, store);
      if (set.inherits) {
        store.inherits = stores.get(`${set.inherits}.${set.modality}.${set.domain}`);
      }
      store.parse(set);
      store.initialize();
      return store;
    }
    engine_js_1.Engine.nodeEvaluator = SpeechRuleEngine.getInstance().evaluateNode.bind(SpeechRuleEngine.getInstance());
    var punctuationMarks = ["⠆", "⠒", "⠲", "⠦", "⠴", "⠄"];
    function processAnnotations(descrs) {
      const alist = new auditory_description_js_1.AuditoryList(descrs);
      for (const item of alist.annotations) {
        const descr = item.data;
        if (descr.annotation === "punctuation") {
          const prev = alist.prevText(item);
          if (!prev)
            continue;
          const last = prev.data;
          if (last.annotation !== "punctuation" && last.text !== "⠀" && descr.text.length === 1 && punctuationMarks.indexOf(descr.text) !== -1) {
            descr.text = "⠸" + descr.text;
          }
        }
      }
      return alist.toList();
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/alphabet_generator.js
var require_alphabet_generator = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/alphabet_generator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generateBase = generateBase;
    exports2.generate = generate;
    var Alphabet = require_alphabet();
    var engine_js_1 = require_engine();
    var L10n = require_l10n();
    var locale_js_1 = require_locale();
    var locale_util_js_1 = require_locale_util();
    var MathCompoundStore = require_math_compound_store();
    var Domains = {
      small: ["default"],
      capital: ["default"],
      digit: ["default"]
    };
    function makeDomains() {
      const alph = locale_js_1.LOCALE.ALPHABETS;
      const combineKeys = (obj1, obj2) => {
        const result = {};
        Object.keys(obj1).forEach((k) => result[k] = true);
        Object.keys(obj2).forEach((k) => result[k] = true);
        return Object.keys(result);
      };
      Domains.small = combineKeys(alph.smallPrefix, alph.letterTrans);
      Domains.capital = combineKeys(alph.capPrefix, alph.letterTrans);
      Domains.digit = combineKeys(alph.digitPrefix, alph.digitTrans);
    }
    function generateBase() {
      for (const int of Alphabet.INTERVALS.values()) {
        const letters = int.unicode;
        for (const letter of letters) {
          MathCompoundStore.baseStores.set(letter, {
            key: letter,
            category: int.category
          });
        }
      }
    }
    function generate(locale) {
      const oldLocale = engine_js_1.Engine.getInstance().locale;
      engine_js_1.Engine.getInstance().locale = locale;
      L10n.setLocale();
      MathCompoundStore.changeLocale({ locale });
      makeDomains();
      for (const int of Alphabet.INTERVALS.values()) {
        const letters = int.unicode;
        if ("offset" in int) {
          numberRules(letters, int.font, int.offset || 0);
        } else {
          const alphabet = locale_js_1.LOCALE.ALPHABETS[int.base];
          alphabetRules(letters, alphabet, int.font, !!int.capital);
        }
      }
      engine_js_1.Engine.getInstance().locale = oldLocale;
      L10n.setLocale();
    }
    function getFont(font) {
      const realFont = font === "normal" || font === "fullwidth" ? "" : locale_js_1.LOCALE.MESSAGES.font[font] || locale_js_1.LOCALE.MESSAGES.embellish[font] || "";
      return (0, locale_util_js_1.localeFontCombiner)(realFont);
    }
    function alphabetRules(unicodes, letters, font, cap) {
      const realFont = getFont(font);
      for (let i = 0, unicode, letter; unicode = unicodes[i], letter = letters[i]; i++) {
        const prefixes = cap ? locale_js_1.LOCALE.ALPHABETS.capPrefix : locale_js_1.LOCALE.ALPHABETS.smallPrefix;
        const domains = cap ? Domains.capital : Domains.small;
        makeLetter(realFont.combiner, unicode, letter, realFont.font, prefixes, locale_js_1.LOCALE.ALPHABETS.letterTrans, domains);
      }
    }
    function numberRules(unicodes, font, offset) {
      const realFont = getFont(font);
      for (let i = 0, unicode; unicode = unicodes[i]; i++) {
        const prefixes = locale_js_1.LOCALE.ALPHABETS.digitPrefix;
        const num = i + offset;
        makeLetter(realFont.combiner, unicode, num, realFont.font, prefixes, locale_js_1.LOCALE.ALPHABETS.digitTrans, Domains.digit);
      }
    }
    function makeLetter(combiner, unicode, letter, font, prefixes, transformers, domains) {
      for (let i = 0, domain; domain = domains[i]; i++) {
        const transformer = domain in transformers ? transformers[domain] : transformers["default"];
        const prefix = domain in prefixes ? prefixes[domain] : prefixes["default"];
        MathCompoundStore.defineRule(domain, "default", unicode, combiner(transformer(letter), font, prefix));
      }
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/math_map.js
var require_math_map = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/math_map.js"(exports2) {
    "use strict";
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadLocale = loadLocale;
    exports2.standardLoader = standardLoader;
    var BrowserUtil = require_browser_util();
    var engine_js_1 = require_engine();
    var EngineConst = require_engine_const();
    var FileUtil = require_file_util();
    var system_external_js_1 = require_system_external();
    var dynamic_cstr_js_1 = require_dynamic_cstr();
    var MathCompoundStore = require_math_compound_store();
    var speech_rule_engine_js_1 = require_speech_rule_engine();
    var l10n_js_1 = require_l10n();
    var AlphabetGenerator = require_alphabet_generator();
    var addSymbols = {
      functions: MathCompoundStore.addFunctionRules,
      symbols: MathCompoundStore.addSymbolRules,
      units: MathCompoundStore.addUnitRules,
      si: (x) => x.forEach(MathCompoundStore.setSiPrefixes),
      messages: l10n_js_1.completeLocale,
      rules: speech_rule_engine_js_1.SpeechRuleEngine.addStore,
      characters: MathCompoundStore.addCharacterRules
    };
    var _init = false;
    function loadLocale() {
      return __awaiter(this, arguments, void 0, function* (locale = engine_js_1.Engine.getInstance().locale) {
        if (!_init) {
          AlphabetGenerator.generateBase();
          _loadLocale(dynamic_cstr_js_1.DynamicCstr.BASE_LOCALE);
          _init = true;
        }
        return engine_js_1.EnginePromise.promises[dynamic_cstr_js_1.DynamicCstr.BASE_LOCALE].then(() => __awaiter(this, void 0, void 0, function* () {
          const defLoc = engine_js_1.Engine.getInstance().defaultLocale;
          if (defLoc) {
            _loadLocale(defLoc);
            return engine_js_1.EnginePromise.promises[defLoc].then(() => __awaiter(this, void 0, void 0, function* () {
              _loadLocale(locale);
              return engine_js_1.EnginePromise.promises[locale];
            }));
          }
          _loadLocale(locale);
          return engine_js_1.EnginePromise.promises[locale];
        }));
      });
    }
    function _loadLocale(locale = engine_js_1.Engine.getInstance().locale) {
      if (!engine_js_1.EnginePromise.loaded[locale]) {
        engine_js_1.EnginePromise.loaded[locale] = [false, false];
        MathCompoundStore.reset();
        retrieveMaps(locale);
      }
    }
    function loadMethod() {
      if (engine_js_1.Engine.getInstance().customLoader) {
        return engine_js_1.Engine.getInstance().customLoader;
      }
      return standardLoader();
    }
    function standardLoader() {
      switch (engine_js_1.Engine.getInstance().mode) {
        case EngineConst.Mode.ASYNC:
          return loadFile;
        case EngineConst.Mode.HTTP:
          return loadAjax;
        case EngineConst.Mode.SYNC:
        default:
          return loadFileSync;
      }
    }
    function retrieveFiles(locale) {
      const loader = loadMethod();
      const promise = new Promise((res) => {
        const inner = loader(locale);
        inner.then((str) => {
          parseMaps(str);
          engine_js_1.EnginePromise.loaded[locale] = [true, true];
          res(locale);
        }, (_err) => {
          engine_js_1.EnginePromise.loaded[locale] = [true, false];
          console.error(`Unable to load locale: ${locale}`);
          engine_js_1.Engine.getInstance().locale = engine_js_1.Engine.getInstance().defaultLocale;
          res(locale);
        });
      });
      engine_js_1.EnginePromise.promises[locale] = promise;
    }
    function parseMaps(json) {
      const js = typeof json === "string" ? JSON.parse(json) : json;
      addMaps(js);
    }
    function addMaps(json, opt_locale) {
      let generate = true;
      for (let i = 0, key; key = Object.keys(json)[i]; i++) {
        const info = key.split("/");
        if (opt_locale && opt_locale !== info[0]) {
          continue;
        }
        if (generate && info[1] === "symbols" && info[0] !== "base") {
          AlphabetGenerator.generate(info[0]);
          generate = false;
        }
        addSymbols[info[1]](json[key]);
      }
    }
    function retrieveMaps(locale) {
      if (engine_js_1.Engine.getInstance().isIE && engine_js_1.Engine.getInstance().mode === EngineConst.Mode.HTTP) {
        getJsonIE_(locale);
        return;
      }
      retrieveFiles(locale);
    }
    function getJsonIE_(locale, opt_count) {
      let count = opt_count || 1;
      if (!BrowserUtil.mapsForIE) {
        if (count <= 5) {
          setTimeout((() => getJsonIE_(locale, count++)).bind(this), 300);
        }
        return;
      }
      addMaps(BrowserUtil.mapsForIE, locale);
    }
    function loadFile(locale) {
      const file = FileUtil.localePath(locale);
      return new Promise((res, rej) => {
        system_external_js_1.SystemExternal.fs.readFile(file, "utf8", (err, json) => {
          if (err) {
            return rej(err);
          }
          res(json);
        });
      });
    }
    function loadFileSync(locale) {
      const file = FileUtil.localePath(locale);
      return new Promise((res, rej) => {
        let str = "{}";
        try {
          str = system_external_js_1.SystemExternal.fs.readFileSync(file, "utf8");
        } catch (err) {
          return rej(err);
        }
        res(str);
      });
    }
    function loadAjax(locale) {
      const file = FileUtil.localePath(locale);
      const httpRequest = new XMLHttpRequest();
      return new Promise((res, rej) => {
        httpRequest.onreadystatechange = function() {
          if (httpRequest.readyState === 4) {
            const status = httpRequest.status;
            if (status === 0 || status >= 200 && status < 400) {
              res(httpRequest.responseText);
            } else {
              rej(status);
            }
          }
        };
        httpRequest.open("GET", file, true);
        httpRequest.send();
      });
    }
  }
});

// node_modules/speech-rule-engine/js/common/engine_setup.js
var require_engine_setup = __commonJS({
  "node_modules/speech-rule-engine/js/common/engine_setup.js"(exports2) {
    "use strict";
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = setup;
    var L10n = require_l10n();
    var MathMap = require_math_map();
    var BrowserUtil = require_browser_util();
    var debugger_js_1 = require_debugger();
    var engine_js_1 = require_engine();
    var FileUtil = require_file_util();
    var system_external_js_1 = require_system_external();
    var MATHSPEAK_ONLY = ["ca", "da", "es"];
    var EN_RULES = [
      "chromevox",
      "clearspeak",
      "mathspeak",
      "emacspeak",
      "html"
    ];
    function ensureDomain(feature) {
      if (feature.modality && feature.modality !== "speech" || !feature.modality && engine_js_1.Engine.getInstance().modality !== "speech") {
        return;
      }
      if (!feature.domain) {
        return;
      }
      if (feature.domain === "default") {
        feature.domain = "mathspeak";
        return;
      }
      const locale = feature.locale || engine_js_1.Engine.getInstance().locale;
      const domain = feature.domain;
      if (MATHSPEAK_ONLY.indexOf(locale) !== -1) {
        if (domain !== "mathspeak") {
          feature.domain = "mathspeak";
        }
        return;
      }
      if (locale === "en") {
        if (EN_RULES.indexOf(domain) === -1) {
          feature.domain = "mathspeak";
        }
        return;
      }
      if (domain !== "mathspeak" && domain !== "clearspeak") {
        feature.domain = "mathspeak";
      }
    }
    function setup(feature) {
      return __awaiter(this, void 0, void 0, function* () {
        ensureDomain(feature);
        const engine = engine_js_1.Engine.getInstance();
        const setIf = (feat) => {
          if (typeof feature[feat] !== "undefined") {
            engine[feat] = !!feature[feat];
          }
        };
        const setMulti = (feat) => {
          if (typeof feature[feat] !== "undefined") {
            engine[feat] = feature[feat];
          }
        };
        setMulti("mode");
        engine.configurate(feature);
        engine_js_1.Engine.BINARY_FEATURES.forEach(setIf);
        engine_js_1.Engine.STRING_FEATURES.forEach(setMulti);
        if (feature.debug) {
          debugger_js_1.Debugger.getInstance().init();
        }
        if (feature.json) {
          system_external_js_1.SystemExternal.jsonPath = FileUtil.makePath(feature.json);
        }
        if (feature.xpath) {
          system_external_js_1.SystemExternal.WGXpath = feature.xpath;
        }
        engine.setCustomLoader(feature.custom);
        setupBrowsers(engine);
        L10n.setLocale();
        engine.setDynamicCstr();
        if (engine.init) {
          engine_js_1.EnginePromise.promises["init"] = new Promise((res, _rej) => {
            setTimeout(() => {
              res("init");
            }, 10);
          });
          engine.init = false;
          return engine_js_1.EnginePromise.get();
        }
        if (engine.delay) {
          engine.delay = false;
          return engine_js_1.EnginePromise.get();
        }
        return MathMap.loadLocale();
      });
    }
    function setupBrowsers(engine) {
      engine.isIE = BrowserUtil.detectIE();
      engine.isEdge = BrowserUtil.detectEdge();
    }
  }
});

// node_modules/speech-rule-engine/js/common/event_util.js
var require_event_util = __commonJS({
  "node_modules/speech-rule-engine/js/common/event_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Event = exports2.Move = exports2.KeyCode = void 0;
    var KeyCode;
    (function(KeyCode2) {
      KeyCode2[KeyCode2["ENTER"] = 13] = "ENTER";
      KeyCode2[KeyCode2["ESC"] = 27] = "ESC";
      KeyCode2[KeyCode2["SPACE"] = 32] = "SPACE";
      KeyCode2[KeyCode2["PAGE_UP"] = 33] = "PAGE_UP";
      KeyCode2[KeyCode2["PAGE_DOWN"] = 34] = "PAGE_DOWN";
      KeyCode2[KeyCode2["END"] = 35] = "END";
      KeyCode2[KeyCode2["HOME"] = 36] = "HOME";
      KeyCode2[KeyCode2["LEFT"] = 37] = "LEFT";
      KeyCode2[KeyCode2["UP"] = 38] = "UP";
      KeyCode2[KeyCode2["RIGHT"] = 39] = "RIGHT";
      KeyCode2[KeyCode2["DOWN"] = 40] = "DOWN";
      KeyCode2[KeyCode2["TAB"] = 9] = "TAB";
      KeyCode2[KeyCode2["LESS"] = 188] = "LESS";
      KeyCode2[KeyCode2["GREATER"] = 190] = "GREATER";
      KeyCode2[KeyCode2["DASH"] = 189] = "DASH";
      KeyCode2[KeyCode2["ZERO"] = 48] = "ZERO";
      KeyCode2[KeyCode2["ONE"] = 49] = "ONE";
      KeyCode2[KeyCode2["TWO"] = 50] = "TWO";
      KeyCode2[KeyCode2["THREE"] = 51] = "THREE";
      KeyCode2[KeyCode2["FOUR"] = 52] = "FOUR";
      KeyCode2[KeyCode2["FIVE"] = 53] = "FIVE";
      KeyCode2[KeyCode2["SIX"] = 54] = "SIX";
      KeyCode2[KeyCode2["SEVEN"] = 55] = "SEVEN";
      KeyCode2[KeyCode2["EIGHT"] = 56] = "EIGHT";
      KeyCode2[KeyCode2["NINE"] = 57] = "NINE";
      KeyCode2[KeyCode2["A"] = 65] = "A";
      KeyCode2[KeyCode2["B"] = 66] = "B";
      KeyCode2[KeyCode2["C"] = 67] = "C";
      KeyCode2[KeyCode2["D"] = 68] = "D";
      KeyCode2[KeyCode2["E"] = 69] = "E";
      KeyCode2[KeyCode2["F"] = 70] = "F";
      KeyCode2[KeyCode2["G"] = 71] = "G";
      KeyCode2[KeyCode2["H"] = 72] = "H";
      KeyCode2[KeyCode2["I"] = 73] = "I";
      KeyCode2[KeyCode2["J"] = 74] = "J";
      KeyCode2[KeyCode2["K"] = 75] = "K";
      KeyCode2[KeyCode2["L"] = 76] = "L";
      KeyCode2[KeyCode2["M"] = 77] = "M";
      KeyCode2[KeyCode2["N"] = 78] = "N";
      KeyCode2[KeyCode2["O"] = 79] = "O";
      KeyCode2[KeyCode2["P"] = 80] = "P";
      KeyCode2[KeyCode2["Q"] = 81] = "Q";
      KeyCode2[KeyCode2["R"] = 82] = "R";
      KeyCode2[KeyCode2["S"] = 83] = "S";
      KeyCode2[KeyCode2["T"] = 84] = "T";
      KeyCode2[KeyCode2["U"] = 85] = "U";
      KeyCode2[KeyCode2["V"] = 86] = "V";
      KeyCode2[KeyCode2["W"] = 87] = "W";
      KeyCode2[KeyCode2["X"] = 88] = "X";
      KeyCode2[KeyCode2["Y"] = 89] = "Y";
      KeyCode2[KeyCode2["Z"] = 90] = "Z";
    })(KeyCode || (exports2.KeyCode = KeyCode = {}));
    exports2.Move = /* @__PURE__ */ new Map([
      [13, "ENTER"],
      [27, "ESC"],
      [32, "SPACE"],
      [33, "PAGE_UP"],
      [34, "PAGE_DOWN"],
      [35, "END"],
      [36, "HOME"],
      [37, "LEFT"],
      [38, "UP"],
      [39, "RIGHT"],
      [40, "DOWN"],
      [9, "TAB"],
      [188, "LESS"],
      [190, "GREATER"],
      [189, "DASH"],
      [48, "ZERO"],
      [49, "ONE"],
      [50, "TWO"],
      [51, "THREE"],
      [52, "FOUR"],
      [53, "FIVE"],
      [54, "SIX"],
      [55, "SEVEN"],
      [56, "EIGHT"],
      [57, "NINE"],
      [65, "A"],
      [66, "B"],
      [67, "C"],
      [68, "D"],
      [69, "E"],
      [70, "F"],
      [71, "G"],
      [72, "H"],
      [73, "I"],
      [74, "J"],
      [75, "K"],
      [76, "L"],
      [77, "M"],
      [78, "N"],
      [79, "O"],
      [80, "P"],
      [81, "Q"],
      [82, "R"],
      [83, "S"],
      [84, "T"],
      [85, "U"],
      [86, "V"],
      [87, "W"],
      [88, "X"],
      [89, "Y"],
      [90, "Z"]
    ]);
    var EventType;
    (function(EventType2) {
      EventType2["CLICK"] = "click";
      EventType2["DBLCLICK"] = "dblclick";
      EventType2["MOUSEDOWN"] = "mousedown";
      EventType2["MOUSEUP"] = "mouseup";
      EventType2["MOUSEOVER"] = "mouseover";
      EventType2["MOUSEOUT"] = "mouseout";
      EventType2["MOUSEMOVE"] = "mousemove";
      EventType2["SELECTSTART"] = "selectstart";
      EventType2["KEYPRESS"] = "keypress";
      EventType2["KEYDOWN"] = "keydown";
      EventType2["KEYUP"] = "keyup";
      EventType2["TOUCHSTART"] = "touchstart";
      EventType2["TOUCHMOVE"] = "touchmove";
      EventType2["TOUCHEND"] = "touchend";
      EventType2["TOUCHCANCEL"] = "touchcancel";
    })(EventType || (EventType = {}));
    var Event2 = class {
      constructor(src, type, callback) {
        this.src = src;
        this.type = type;
        this.callback = callback;
      }
      add() {
        this.src.addEventListener(this.type, this.callback);
      }
      remove() {
        this.src.removeEventListener(this.type, this.callback);
      }
    };
    exports2.Event = Event2;
  }
});

// node_modules/speech-rule-engine/js/audio/audio_util.js
var require_audio_util = __commonJS({
  "node_modules/speech-rule-engine/js/audio/audio_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mergePause = mergePause;
    exports2.mergeMarkup = mergeMarkup;
    exports2.sortClose = sortClose;
    exports2.personalityMarkup = personalityMarkup;
    exports2.isMarkupElement = isMarkupElement;
    exports2.isPauseElement = isPauseElement;
    var base_util_js_1 = require_base_util();
    var EngineConst = require_engine_const();
    var engine_js_1 = require_engine();
    var span_js_1 = require_span();
    function mergePause(oldPause, newPause, opt_merge) {
      if (!oldPause) {
        return newPause;
      }
      return { pause: mergePause_(oldPause.pause, newPause.pause, opt_merge) };
    }
    function mergePause_(oldPause, newPause, opt_merge) {
      const merge = opt_merge || function(x, y) {
        if (typeof x === "number" && typeof y === "number") {
          return x + y;
        }
        if (typeof x === "number") {
          return y;
        }
        if (typeof y === "number") {
          return x;
        }
        return [oldPause, newPause].sort()[0];
      };
      return merge.call(null, oldPause, newPause);
    }
    function mergeMarkup(oldPers, newPers) {
      delete oldPers.open;
      newPers.close.forEach((x) => delete oldPers[x]);
      newPers.open.forEach((x) => oldPers[x] = newPers[x]);
      const keys = Object.keys(oldPers);
      oldPers.open = keys;
    }
    function sortClose(open, descrs) {
      if (open.length <= 1) {
        return open;
      }
      const result = [];
      for (let i = 0, descr; descr = descrs[i], open.length; i++) {
        if (!descr.close || !descr.close.length) {
          continue;
        }
        descr.close.forEach(function(x) {
          const index = open.indexOf(x);
          if (index !== -1) {
            result.unshift(x);
            open.splice(index, 1);
          }
        });
      }
      return result;
    }
    var PersonalityRanges_ = {};
    var LastOpen_ = [];
    function personalityMarkup(descrs) {
      PersonalityRanges_ = {};
      LastOpen_ = [];
      let result = [];
      const currentPers = {};
      for (let i = 0, descr; descr = descrs[i]; i++) {
        let pause = null;
        const span = descr.descriptionSpan();
        const pers = descr.personality;
        const join = pers[EngineConst.personalityProps.JOIN];
        delete pers[EngineConst.personalityProps.JOIN];
        if (typeof pers[EngineConst.personalityProps.PAUSE] !== "undefined") {
          pause = {
            [EngineConst.personalityProps.PAUSE]: pers[EngineConst.personalityProps.PAUSE]
          };
          delete pers[EngineConst.personalityProps.PAUSE];
        }
        const diff = personalityDiff_(pers, currentPers);
        appendMarkup_(result, span, diff, join, pause, true);
      }
      result = result.concat(finaliseMarkup_());
      result = simplifyMarkup_(result);
      result = engine_js_1.Engine.getInstance().cleanpause ? cleanPause(result) : result;
      return result;
    }
    function cleanPause(markup) {
      while (isPauseElement(markup[0])) {
        markup.shift();
      }
      while (isPauseElement(markup[markup.length - 1])) {
        markup.pop();
      }
      return markup;
    }
    function appendElement_(markup, element) {
      const last = markup[markup.length - 1];
      if (!last) {
        markup.push(element);
        return;
      }
      if (isSpanElement(element) && isSpanElement(last)) {
        if (typeof last.join === "undefined") {
          last.span = last.span.concat(element.span);
          return;
        }
        const lstr = last["span"].pop();
        const fstr = element["span"].shift();
        last["span"].push(lstr + last.join + fstr);
        last["span"] = last["span"].concat(element.span);
        last.join = element.join;
        return;
      }
      if (isPauseElement(element) && isPauseElement(last)) {
        last.pause = mergePause_(last.pause, element.pause);
        return;
      }
      markup.push(element);
    }
    function simplifyMarkup_(markup) {
      const lastPers = {};
      const result = [];
      for (let i = 0, element; element = markup[i]; i++) {
        if (!isMarkupElement(element)) {
          appendElement_(result, element);
          continue;
        }
        if (!element.close || element.close.length !== 1 || element.open.length) {
          copyValues_(element, lastPers);
          result.push(element);
          continue;
        }
        let nextElement = markup[i + 1];
        if (!nextElement || isSpanElement(nextElement)) {
          copyValues_(element, lastPers);
          result.push(element);
          continue;
        }
        const pauseElement = isPauseElement(nextElement) ? nextElement : null;
        if (pauseElement) {
          nextElement = markup[i + 2];
        }
        if (nextElement && isMarkupElement(nextElement) && nextElement.open[0] === element.close[0] && !nextElement.close.length && nextElement[nextElement.open[0]] === lastPers[nextElement.open[0]]) {
          if (pauseElement) {
            appendElement_(result, pauseElement);
            i = i + 2;
          } else {
            i = i + 1;
          }
        } else {
          copyValues_(element, lastPers);
          result.push(element);
        }
      }
      return result;
    }
    function copyValues_(from, to) {
      if (from["rate"]) {
        to["rate"] = from["rate"];
      }
      if (from["pitch"]) {
        to["pitch"] = from["pitch"];
      }
      if (from["volume"]) {
        to["volume"] = from["volume"];
      }
    }
    function finaliseMarkup_() {
      const final = [];
      for (let i = LastOpen_.length - 1; i >= 0; i--) {
        const pers = LastOpen_[i];
        if (pers.length) {
          const markup = { open: [], close: [] };
          for (let j = 0; j < pers.length; j++) {
            const per = pers[j];
            markup.close.push(per);
            markup[per] = 0;
          }
          final.push(markup);
        }
      }
      return final;
    }
    function isMarkupElement(element) {
      return typeof element === "object" && element.open;
    }
    function isPauseElement(element) {
      return typeof element === "object" && Object.keys(element).length === 1 && Object.keys(element)[0] === EngineConst.personalityProps.PAUSE;
    }
    function isSpanElement(element) {
      const keys = Object.keys(element);
      return typeof element === "object" && (keys.length === 1 && keys[0] === "span" || keys.length === 2 && (keys[0] === "span" && keys[1] === "join" || keys[1] === "span" && keys[0] === "join"));
    }
    function appendMarkup_(markup, span, pers, join, pause, merge = false) {
      if (merge) {
        const last = markup[markup.length - 1];
        let oldJoin;
        if (last) {
          oldJoin = last[EngineConst.personalityProps.JOIN];
        }
        if (last && !span.speech && pause && isPauseElement(last)) {
          const pauseProp = EngineConst.personalityProps.PAUSE;
          last[pauseProp] = mergePause_(last[pauseProp], pause[pauseProp]);
          pause = null;
        }
        if (last && span.speech && Object.keys(pers).length === 0 && isSpanElement(last)) {
          if (typeof oldJoin !== "undefined") {
            const lastSpan = last["span"].pop();
            span = span_js_1.Span.stringAttr(lastSpan.speech + oldJoin + span.speech, lastSpan.attributes);
          }
          last["span"].push(span);
          span = span_js_1.Span.empty();
          last[EngineConst.personalityProps.JOIN] = join;
        }
      }
      if (Object.keys(pers).length !== 0) {
        markup.push(pers);
      }
      if (span.speech) {
        markup.push({ span: [span], join });
      }
      if (pause) {
        markup.push(pause);
      }
    }
    function personalityDiff_(current, old) {
      if (!old) {
        return current;
      }
      const result = {};
      for (const prop of EngineConst.personalityPropList) {
        const currentValue = current[prop];
        const oldValue = old[prop];
        if (!currentValue && !oldValue || currentValue && oldValue && currentValue === oldValue) {
          continue;
        }
        const value = currentValue || 0;
        if (!isMarkupElement(result)) {
          result.open = [];
          result.close = [];
        }
        if (!currentValue) {
          result.close.push(prop);
        }
        if (!oldValue) {
          result.open.push(prop);
        }
        if (oldValue && currentValue) {
          result.close.push(prop);
          result.open.push(prop);
        }
        old[prop] = value;
        result[prop] = value;
        PersonalityRanges_[prop] ? PersonalityRanges_[prop].push(value) : PersonalityRanges_[prop] = [value];
      }
      if (isMarkupElement(result)) {
        let c = result.close.slice();
        while (c.length > 0) {
          let lo = LastOpen_.pop();
          const loNew = (0, base_util_js_1.setdifference)(lo, c);
          c = (0, base_util_js_1.setdifference)(c, lo);
          lo = loNew;
          if (c.length === 0) {
            if (lo.length !== 0) {
              LastOpen_.push(lo);
            }
            continue;
          }
          if (lo.length === 0) {
            continue;
          }
          result.close = result.close.concat(lo);
          result.open = result.open.concat(lo);
          for (let i = 0, open; open = lo[i]; i++) {
            result[open] = old[open];
          }
        }
        LastOpen_.push(result.open);
      }
      return result;
    }
  }
});

// node_modules/speech-rule-engine/js/audio/abstract_audio_renderer.js
var require_abstract_audio_renderer = __commonJS({
  "node_modules/speech-rule-engine/js/audio/abstract_audio_renderer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractAudioRenderer = void 0;
    var engine_js_1 = require_engine();
    var AbstractAudioRenderer = class {
      constructor() {
        this.separator_ = " ";
      }
      set separator(sep) {
        this.separator_ = sep;
      }
      get separator() {
        return engine_js_1.Engine.getInstance().modality === "braille" ? "" : this.separator_;
      }
      error(_key) {
        return null;
      }
      merge(spans) {
        let str = "";
        const len = spans.length - 1;
        for (let i = 0, span; span = spans[i]; i++) {
          str += span.speech;
          if (i < len) {
            const sep = span.attributes["separator"];
            str += sep !== void 0 ? sep : this.separator;
          }
        }
        return str;
      }
      finalize(str) {
        return str;
      }
      pauseValue(value) {
        let numeric;
        switch (value) {
          case "long":
            numeric = 750;
            break;
          case "medium":
            numeric = 500;
            break;
          case "short":
            numeric = 250;
            break;
          default:
            numeric = parseInt(value, 10);
        }
        return Math.floor(numeric * engine_js_1.Engine.getInstance().getRate() / 100);
      }
    };
    exports2.AbstractAudioRenderer = AbstractAudioRenderer;
  }
});

// node_modules/speech-rule-engine/js/audio/markup_renderer.js
var require_markup_renderer = __commonJS({
  "node_modules/speech-rule-engine/js/audio/markup_renderer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MarkupRenderer = void 0;
    var EngineConst = require_engine_const();
    var abstract_audio_renderer_js_1 = require_abstract_audio_renderer();
    var MarkupRenderer = class extends abstract_audio_renderer_js_1.AbstractAudioRenderer {
      constructor() {
        super(...arguments);
        this.ignoreElements = [EngineConst.personalityProps.LAYOUT];
        this.scaleFunction = null;
      }
      setScaleFunction(a, b, c, d, decimals = 0) {
        this.scaleFunction = (x) => {
          const delta = (x - a) / (b - a);
          const num = c * (1 - delta) + d * delta;
          return +(Math.round(num + "e+" + decimals) + "e-" + decimals);
        };
      }
      applyScaleFunction(value) {
        return this.scaleFunction ? this.scaleFunction(value) : value;
      }
      ignoreElement(key) {
        return this.ignoreElements.indexOf(key) !== -1;
      }
    };
    exports2.MarkupRenderer = MarkupRenderer;
  }
});

// node_modules/speech-rule-engine/js/audio/acss_renderer.js
var require_acss_renderer = __commonJS({
  "node_modules/speech-rule-engine/js/audio/acss_renderer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AcssRenderer = void 0;
    var EngineConst = require_engine_const();
    var EventUtil = require_event_util();
    var AudioUtil = require_audio_util();
    var markup_renderer_js_1 = require_markup_renderer();
    var AcssRenderer = class extends markup_renderer_js_1.MarkupRenderer {
      markup(descrs) {
        this.setScaleFunction(-2, 2, 0, 10, 0);
        const markup = AudioUtil.personalityMarkup(descrs);
        const result = [];
        const currentPers = { open: [] };
        let pause = null;
        let isString = false;
        for (let i = 0, descr; descr = markup[i]; i++) {
          if (AudioUtil.isMarkupElement(descr)) {
            AudioUtil.mergeMarkup(currentPers, descr);
            continue;
          }
          if (AudioUtil.isPauseElement(descr)) {
            if (isString) {
              pause = AudioUtil.mergePause(pause, descr, Math.max);
            }
            continue;
          }
          const str = '"' + this.merge(descr.span) + '"';
          isString = true;
          if (pause) {
            result.push(this.pause(pause));
            pause = null;
          }
          const prosody = this.prosody_(currentPers);
          result.push(prosody ? "(text (" + prosody + ") " + str + ")" : str);
        }
        return "(exp " + result.join(" ") + ")";
      }
      error(key) {
        return '(error "' + EventUtil.Move.get(key) + '")';
      }
      prosodyElement(key, value) {
        value = this.applyScaleFunction(value);
        switch (key) {
          case EngineConst.personalityProps.RATE:
            return "(richness . " + value + ")";
          case EngineConst.personalityProps.PITCH:
            return "(average-pitch . " + value + ")";
          case EngineConst.personalityProps.VOLUME:
            return "(stress . " + value + ")";
        }
        return "(value . " + value + ")";
      }
      pause(pause) {
        return "(pause . " + this.pauseValue(pause[EngineConst.personalityProps.PAUSE]) + ")";
      }
      prosody_(pros) {
        const keys = pros.open;
        const result = [];
        for (let i = 0, key; key = keys[i]; i++) {
          result.push(this.prosodyElement(key, pros[key]));
        }
        return result.join(" ");
      }
    };
    exports2.AcssRenderer = AcssRenderer;
  }
});

// node_modules/speech-rule-engine/js/audio/xml_renderer.js
var require_xml_renderer = __commonJS({
  "node_modules/speech-rule-engine/js/audio/xml_renderer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.XmlRenderer = void 0;
    var engine_js_1 = require_engine();
    var AudioUtil = require_audio_util();
    var markup_renderer_js_1 = require_markup_renderer();
    var XmlRenderer = class extends markup_renderer_js_1.MarkupRenderer {
      markup(descrs) {
        this.setScaleFunction(-2, 2, -100, 100, 2);
        const markup = AudioUtil.personalityMarkup(descrs);
        const result = [];
        const currentOpen = [];
        for (let i = 0, descr; descr = markup[i]; i++) {
          if (descr.span) {
            result.push(this.merge(descr.span));
            continue;
          }
          if (AudioUtil.isPauseElement(descr)) {
            result.push(this.pause(descr));
            continue;
          }
          if (descr.close.length) {
            for (let j = 0; j < descr.close.length; j++) {
              const last = currentOpen.pop();
              if (descr.close.indexOf(last) === -1) {
                throw new engine_js_1.SREError("Unknown closing markup element: " + last);
              }
              result.push(this.closeTag(last));
            }
          }
          if (descr.open.length) {
            const open = AudioUtil.sortClose(descr.open.slice(), markup.slice(i + 1));
            open.forEach((o) => {
              result.push(this.prosodyElement(o, descr[o]));
              currentOpen.push(o);
            });
          }
        }
        return result.join(" ");
      }
    };
    exports2.XmlRenderer = XmlRenderer;
  }
});

// node_modules/speech-rule-engine/js/audio/layout_renderer.js
var require_layout_renderer = __commonJS({
  "node_modules/speech-rule-engine/js/audio/layout_renderer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LayoutRenderer = void 0;
    var debugger_js_1 = require_debugger();
    var DomUtil = require_dom_util();
    var EngineConst = require_engine_const();
    var engine_js_1 = require_engine();
    var AudioUtil = require_audio_util();
    var xml_renderer_js_1 = require_xml_renderer();
    var LayoutRenderer = class extends xml_renderer_js_1.XmlRenderer {
      constructor() {
        super(...arguments);
        this.values = /* @__PURE__ */ new Map();
      }
      finalize(str) {
        setRelValues(this.values.get("rel"));
        return setTwoDim(str);
      }
      pause(_pause) {
        return "";
      }
      prosodyElement(attr, value) {
        return attr === EngineConst.personalityProps.LAYOUT ? `<${value}>` : "";
      }
      closeTag(tag) {
        return `</${tag}>`;
      }
      markup(descrs) {
        this.values.clear();
        const result = [];
        let content = [];
        for (const descr of descrs) {
          if (!descr.layout) {
            content.push(descr);
            continue;
          }
          result.push(this.processContent(content));
          content = [];
          const [pref, layout, value] = this.layoutValue(descr.layout);
          if (pref === "begin") {
            result.push("<" + layout + (value ? ` value="${value}"` : "") + ">");
            continue;
          }
          if (pref === "end") {
            result.push("</" + layout + ">");
            continue;
          }
          console.warn("Something went wrong with layout markup: " + layout);
        }
        result.push(this.processContent(content));
        return result.join("");
      }
      processContent(content) {
        const result = [];
        const markup = AudioUtil.personalityMarkup(content);
        for (let i = 0, descr; descr = markup[i]; i++) {
          if (descr.span) {
            result.push(this.merge(descr.span));
            continue;
          }
          if (AudioUtil.isPauseElement(descr)) {
            continue;
          }
        }
        return result.join("");
      }
      layoutValue(layout) {
        const match = layout.match(/^(begin|end|)(.*\D)(\d*)$/);
        const value = match[3];
        if (!value) {
          return [match[1], match[2], ""];
        }
        layout = match[2];
        if (!this.values.has(layout)) {
          this.values.set(layout, {});
        }
        this.values.get(layout)[value] = true;
        return [match[1], layout, value];
      }
    };
    exports2.LayoutRenderer = LayoutRenderer;
    LayoutRenderer.options = {
      cayleyshort: engine_js_1.Engine.getInstance().cayleyshort,
      linebreaks: engine_js_1.Engine.getInstance().linebreaks
    };
    var twodExpr = "";
    var handlers = {
      TABLE: handleTable,
      CASES: handleCases,
      CAYLEY: handleCayley,
      MATRIX: handleMatrix,
      CELL: recurseTree,
      FENCE: recurseTree,
      ROW: recurseTree,
      FRACTION: handleFraction,
      NUMERATOR: handleFractionPart,
      DENOMINATOR: handleFractionPart,
      REL: handleRelation,
      OP: handleRelation
    };
    function applyHandler(element) {
      const tag = DomUtil.tagName(element);
      const handler = handlers[tag];
      return handler ? handler(element) : element.textContent;
    }
    var relValues = /* @__PURE__ */ new Map();
    function setRelValues(values) {
      relValues.clear();
      if (!values)
        return;
      const keys = Object.keys(values).map((x) => parseInt(x)).sort();
      for (let i = 0, key; key = keys[i]; i++) {
        relValues.set(key, i + 1);
      }
    }
    function setTwoDim(str) {
      twodExpr = "";
      const dom = DomUtil.parseInput(`<all>${str}</all>`);
      debugger_js_1.Debugger.getInstance().output(DomUtil.formatXml(dom.toString()));
      twodExpr = recurseTree(dom);
      return twodExpr;
    }
    function combineContent(str1, str2) {
      if (!str1 || !str2) {
        return str1 + str2;
      }
      const height1 = strHeight(str1);
      const height2 = strHeight(str2);
      const diff = height1 - height2;
      str1 = diff < 0 ? padCell(str1, height2, strWidth(str1)) : str1;
      str2 = diff > 0 ? padCell(str2, height1, strWidth(str2)) : str2;
      const lines1 = str1.split(/\r\n|\r|\n/);
      const lines2 = str2.split(/\r\n|\r|\n/);
      const result = [];
      for (let i = 0; i < lines1.length; i++) {
        result.push(lines1[i] + lines2[i]);
      }
      return result.join("\n");
    }
    function recurseTree(dom) {
      let result = "";
      for (const child of Array.from(dom.childNodes)) {
        if (child.nodeType === DomUtil.NodeType.TEXT_NODE) {
          result = combineContent(result, child.textContent);
          continue;
        }
        result = combineContent(result, applyHandler(child));
      }
      return result;
    }
    function strHeight(str) {
      return str.split(/\r\n|\r|\n/).length;
    }
    function strWidth(str) {
      return str.split(/\r\n|\r|\n/).reduce((max, x) => Math.max(x.length, max), 0);
    }
    function padHeight(str, height) {
      const padding = height - strHeight(str);
      return str + (padding > 0 ? new Array(padding + 1).join("\n") : "");
    }
    function padWidth(str, width) {
      const lines = str.split(/\r\n|\r|\n/);
      const result = [];
      for (const line of lines) {
        const padding = width - line.length;
        result.push(line + (padding > 0 ? new Array(padding + 1).join("⠀") : ""));
      }
      return result.join("\n");
    }
    function padCell(str, height, width) {
      str = padHeight(str, height);
      return padWidth(str, width);
    }
    function assembleRows(matrix) {
      const children = Array.from(matrix.childNodes);
      const mat = [];
      for (const row of children) {
        if (row.nodeType !== DomUtil.NodeType.ELEMENT_NODE) {
          continue;
        }
        mat.push(handleRow(row));
      }
      return mat;
    }
    function getMaxParameters(mat) {
      const maxHeight = mat.reduce((max, x) => Math.max(x.height, max), 0);
      const maxWidth = [];
      for (let i = 0; i < mat[0].width.length; i++) {
        maxWidth.push(mat.map((x) => x.width[i]).reduce((max, x) => Math.max(max, x), 0));
      }
      return [maxHeight, maxWidth];
    }
    function combineCells(mat, maxWidth) {
      const newMat = [];
      for (const row of mat) {
        if (row.height === 0) {
          continue;
        }
        const newCells = [];
        for (let i = 0; i < row.cells.length; i++) {
          newCells.push(padCell(row.cells[i], row.height, maxWidth[i]));
        }
        row.cells = newCells;
        newMat.push(row);
      }
      return newMat;
    }
    function combineRows(mat, maxHeight) {
      if (maxHeight === 1) {
        return mat.map((row) => row.lfence + row.cells.join(row.sep) + row.rfence).join("\n");
      }
      const result = [];
      for (const row of mat) {
        const sep = verticalArrange(row.sep, row.height);
        let str = row.cells.shift();
        while (row.cells.length) {
          str = combineContent(str, sep);
          str = combineContent(str, row.cells.shift());
        }
        str = combineContent(verticalArrange(row.lfence, row.height), str);
        str = combineContent(str, verticalArrange(row.rfence, row.height));
        result.push(str);
        result.push(row.lfence + new Array(strWidth(str) - 3).join(row.sep) + row.rfence);
      }
      return result.slice(0, -1).join("\n");
    }
    function verticalArrange(char, height) {
      let str = "";
      while (height) {
        str += char + "\n";
        height--;
      }
      return str.slice(0, -1);
    }
    function getFence(node) {
      if (node.nodeType === DomUtil.NodeType.ELEMENT_NODE && DomUtil.tagName(node) === "FENCE") {
        return applyHandler(node);
      }
      return "";
    }
    function handleMatrix(matrix) {
      let mat = assembleRows(matrix);
      const [maxHeight, maxWidth] = getMaxParameters(mat);
      mat = combineCells(mat, maxWidth);
      return combineRows(mat, maxHeight);
    }
    function handleTable(table) {
      let mat = assembleRows(table);
      mat.forEach((row) => {
        row.cells = row.cells.slice(1).slice(0, -1);
        row.width = row.width.slice(1).slice(0, -1);
      });
      const [maxHeight, maxWidth] = getMaxParameters(mat);
      mat = combineCells(mat, maxWidth);
      return combineRows(mat, maxHeight);
    }
    function handleCases(cases) {
      let mat = assembleRows(cases);
      mat.forEach((row) => {
        row.cells = row.cells.slice(0, -1);
        row.width = row.width.slice(0, -1);
      });
      const [maxHeight, maxWidth] = getMaxParameters(mat);
      mat = combineCells(mat, maxWidth);
      return combineRows(mat, maxHeight);
    }
    function handleCayley(cayley) {
      let mat = assembleRows(cayley);
      mat.forEach((row) => {
        row.cells = row.cells.slice(1).slice(0, -1);
        row.width = row.width.slice(1).slice(0, -1);
        row.sep = row.sep + row.sep;
      });
      const [maxHeight, maxWidth] = getMaxParameters(mat);
      const bar = {
        lfence: "",
        rfence: "",
        cells: maxWidth.map((x) => "⠐" + new Array(x).join("⠒")),
        width: maxWidth,
        height: 1,
        sep: mat[0].sep
      };
      if (engine_js_1.Engine.getInstance().cayleyshort && mat[0].cells[0] === "⠀") {
        bar.cells[0] = "⠀";
      }
      mat.splice(1, 0, bar);
      mat = combineCells(mat, maxWidth);
      return combineRows(mat, maxHeight);
    }
    function handleRow(row) {
      const children = Array.from(row.childNodes);
      const lfence = getFence(children[0]);
      const rfence = getFence(children[children.length - 1]);
      if (lfence) {
        children.shift();
      }
      if (rfence) {
        children.pop();
      }
      let sep = "";
      const cells = [];
      for (const child of children) {
        if (child.nodeType === DomUtil.NodeType.TEXT_NODE) {
          sep = child.textContent;
          continue;
        }
        const result = applyHandler(child);
        cells.push(result);
      }
      return {
        lfence,
        rfence,
        sep,
        cells,
        height: cells.reduce((max, x) => Math.max(strHeight(x), max), 0),
        width: cells.map(strWidth)
      };
    }
    function centerCell(cell, width) {
      const cw = strWidth(cell);
      const center = (width - cw) / 2;
      const [lpad, rpad] = Math.floor(center) === center ? [center, center] : [Math.floor(center), Math.ceil(center)];
      const lines = cell.split(/\r\n|\r|\n/);
      const result = [];
      const [lstr, rstr] = [
        new Array(lpad + 1).join("⠀"),
        new Array(rpad + 1).join("⠀")
      ];
      for (const line of lines) {
        result.push(lstr + line + rstr);
      }
      return result.join("\n");
    }
    function handleFraction(frac) {
      const [open, num, , den, close] = Array.from(frac.childNodes);
      const numerator = applyHandler(num);
      const denominator = applyHandler(den);
      const nwidth = strWidth(numerator);
      const dwidth = strWidth(denominator);
      let maxWidth = Math.max(nwidth, dwidth);
      const bar = open + new Array(maxWidth + 1).join("⠒") + close;
      maxWidth = bar.length;
      return `${centerCell(numerator, maxWidth)}
${bar}
${centerCell(denominator, maxWidth)}`;
    }
    function handleFractionPart(prt) {
      const fchild = prt.firstChild;
      const content = recurseTree(prt);
      if (fchild && fchild.nodeType === DomUtil.NodeType.ELEMENT_NODE) {
        if (DomUtil.tagName(fchild) === "ENGLISH") {
          return "⠰" + content;
        }
        if (DomUtil.tagName(fchild) === "NUMBER") {
          return "⠼" + content;
        }
      }
      return content;
    }
    function handleRelation(rel) {
      if (!engine_js_1.Engine.getInstance().linebreaks) {
        return recurseTree(rel);
      }
      const value = relValues.get(parseInt(rel.getAttribute("value")));
      return (value ? `<br value="${value}"/>` : "") + recurseTree(rel);
    }
  }
});

// node_modules/speech-rule-engine/js/audio/punctuation_renderer.js
var require_punctuation_renderer = __commonJS({
  "node_modules/speech-rule-engine/js/audio/punctuation_renderer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PunctuationRenderer = void 0;
    var EngineConst = require_engine_const();
    var abstract_audio_renderer_js_1 = require_abstract_audio_renderer();
    var AudioUtil = require_audio_util();
    var PunctuationRenderer = class _PunctuationRenderer extends abstract_audio_renderer_js_1.AbstractAudioRenderer {
      markup(descrs) {
        const markup = AudioUtil.personalityMarkup(descrs);
        let str = "";
        let pause = null;
        let span = false;
        for (let i = 0, descr; descr = markup[i]; i++) {
          if (AudioUtil.isMarkupElement(descr)) {
            continue;
          }
          if (AudioUtil.isPauseElement(descr)) {
            pause = descr;
            continue;
          }
          if (pause) {
            str += this.pause(pause[EngineConst.personalityProps.PAUSE]);
            pause = null;
          }
          str += (span ? this.separator : "") + this.merge(descr.span);
          span = true;
        }
        return str;
      }
      pause(pause) {
        let newPause;
        if (typeof pause === "number") {
          if (pause <= 250) {
            newPause = "short";
          } else if (pause <= 500) {
            newPause = "medium";
          } else {
            newPause = "long";
          }
        } else {
          newPause = pause;
        }
        return _PunctuationRenderer.PAUSE_PUNCTUATION.get(newPause) || "";
      }
    };
    exports2.PunctuationRenderer = PunctuationRenderer;
    PunctuationRenderer.PAUSE_PUNCTUATION = /* @__PURE__ */ new Map([
      ["short", ","],
      ["medium", ";"],
      ["long", "."]
    ]);
  }
});

// node_modules/speech-rule-engine/js/audio/sable_renderer.js
var require_sable_renderer = __commonJS({
  "node_modules/speech-rule-engine/js/audio/sable_renderer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SableRenderer = void 0;
    var EngineConst = require_engine_const();
    var xml_renderer_js_1 = require_xml_renderer();
    var SableRenderer = class extends xml_renderer_js_1.XmlRenderer {
      finalize(str) {
        return '<?xml version="1.0"?><!DOCTYPE SABLE PUBLIC "-//SABLE//DTD SABLE speech mark up//EN" "Sable.v0_2.dtd" []><SABLE>' + this.separator + str + this.separator + "</SABLE>";
      }
      pause(pause) {
        return '<BREAK MSEC="' + this.pauseValue(pause[EngineConst.personalityProps.PAUSE]) + '"/>';
      }
      prosodyElement(tag, value) {
        value = this.applyScaleFunction(value);
        switch (tag) {
          case EngineConst.personalityProps.PITCH:
            return '<PITCH RANGE="' + value + '%">';
          case EngineConst.personalityProps.RATE:
            return '<RATE SPEED="' + value + '%">';
          case EngineConst.personalityProps.VOLUME:
            return '<VOLUME LEVEL="' + value + '%">';
          default:
            return "<" + tag.toUpperCase() + ' VALUE="' + value + '">';
        }
      }
      closeTag(tag) {
        return "</" + tag.toUpperCase() + ">";
      }
    };
    exports2.SableRenderer = SableRenderer;
  }
});

// node_modules/speech-rule-engine/js/audio/ssml_renderer.js
var require_ssml_renderer = __commonJS({
  "node_modules/speech-rule-engine/js/audio/ssml_renderer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SsmlRenderer = void 0;
    var engine_js_1 = require_engine();
    var EngineConst = require_engine_const();
    var xml_renderer_js_1 = require_xml_renderer();
    var SsmlRenderer = class _SsmlRenderer extends xml_renderer_js_1.XmlRenderer {
      finalize(str) {
        return `<?xml version="1.0"?><speak version="1.1" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${engine_js_1.Engine.getInstance().locale}"><prosody rate="` + engine_js_1.Engine.getInstance().getRate() + '%">' + this.separator + str + this.separator + "</prosody></speak>";
      }
      pause(pause) {
        return '<break time="' + this.pauseValue(pause[EngineConst.personalityProps.PAUSE]) + 'ms"/>';
      }
      prosodyElement(attr, value) {
        value = Math.floor(this.applyScaleFunction(value));
        const valueStr = value < 0 ? value.toString() : "+" + value.toString();
        return "<prosody " + attr.toLowerCase() + '="' + valueStr + (attr === EngineConst.personalityProps.VOLUME ? ">" : '%">');
      }
      closeTag(_tag) {
        return "</prosody>";
      }
      markup(descrs) {
        _SsmlRenderer.MARKS = {};
        return super.markup(descrs);
      }
      merge(spans) {
        const result = [];
        let lastMark = "";
        for (let i = 0; i < spans.length; i++) {
          const span = spans[i];
          if (this.isEmptySpan(span))
            continue;
          const kind = _SsmlRenderer.MARK_KIND ? span.attributes["kind"] : "";
          const id = engine_js_1.Engine.getInstance().automark ? span.attributes["id"] : engine_js_1.Engine.getInstance().mark ? span.attributes["extid"] : "";
          if (id && id !== lastMark && !(_SsmlRenderer.MARK_ONCE && _SsmlRenderer.MARKS[id])) {
            result.push(kind ? `<mark name="${id}" kind="${kind}"/>` : `<mark name="${id}"/>`);
            lastMark = id;
            _SsmlRenderer.MARKS[id] = true;
          }
          if (engine_js_1.Engine.getInstance().character && span.speech.length === 1 && span.speech.match(/[a-zA-Z]/)) {
            result.push('<say-as interpret-as="' + _SsmlRenderer.CHARACTER_ATTR + '">' + span.speech + "</say-as>");
          } else {
            result.push(span.speech);
          }
        }
        return result.join(this.separator);
      }
      isEmptySpan(span) {
        const sep = span.attributes["separator"];
        return span.speech.match(/^\s*$/) && (!sep || sep.match(/^\s*$/));
      }
    };
    exports2.SsmlRenderer = SsmlRenderer;
    SsmlRenderer.MARK_ONCE = false;
    SsmlRenderer.MARK_KIND = true;
    SsmlRenderer.CHARACTER_ATTR = "character";
    SsmlRenderer.MARKS = {};
  }
});

// node_modules/speech-rule-engine/js/audio/string_renderer.js
var require_string_renderer = __commonJS({
  "node_modules/speech-rule-engine/js/audio/string_renderer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CountingRenderer = exports2.StringRenderer = void 0;
    var engine_js_1 = require_engine();
    var abstract_audio_renderer_js_1 = require_abstract_audio_renderer();
    var audio_util_js_1 = require_audio_util();
    var StringRenderer = class extends abstract_audio_renderer_js_1.AbstractAudioRenderer {
      markup(descrs) {
        let str = "";
        const markup = (0, audio_util_js_1.personalityMarkup)(descrs);
        const clean = markup.filter((x) => x.span);
        if (!clean.length) {
          return str;
        }
        const len = clean.length - 1;
        for (let i = 0, descr; descr = clean[i]; i++) {
          if (descr.span) {
            str += this.merge(descr.span);
          }
          if (i >= len) {
            continue;
          }
          const join = descr.join;
          str += typeof join === "undefined" ? this.separator : join;
        }
        return str;
      }
    };
    exports2.StringRenderer = StringRenderer;
    var CountingRenderer = class extends StringRenderer {
      finalize(str) {
        const output = super.finalize(str);
        const count = engine_js_1.Engine.getInstance().modality === "braille" ? "⣿⠀⣿⠀⣿⠀⣿⠀⣿⠀" : "0123456789";
        let second = new Array(Math.trunc(output.length / 10) + 1).join(count);
        second += count.slice(0, output.length % 10);
        return output + "\n" + second;
      }
    };
    exports2.CountingRenderer = CountingRenderer;
  }
});

// node_modules/speech-rule-engine/js/audio/aural_rendering.js
var require_aural_rendering = __commonJS({
  "node_modules/speech-rule-engine/js/audio/aural_rendering.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setSeparator = setSeparator;
    exports2.getSeparator = getSeparator;
    exports2.markup = markup;
    exports2.merge = merge;
    exports2.finalize = finalize;
    exports2.error = error;
    exports2.registerRenderer = registerRenderer;
    exports2.isXml = isXml;
    var engine_js_1 = require_engine();
    var EngineConst = require_engine_const();
    var acss_renderer_js_1 = require_acss_renderer();
    var layout_renderer_js_1 = require_layout_renderer();
    var punctuation_renderer_js_1 = require_punctuation_renderer();
    var sable_renderer_js_1 = require_sable_renderer();
    var span_js_1 = require_span();
    var ssml_renderer_js_1 = require_ssml_renderer();
    var string_renderer_js_1 = require_string_renderer();
    var xml_renderer_js_1 = require_xml_renderer();
    var xmlInstance = new ssml_renderer_js_1.SsmlRenderer();
    var renderers = /* @__PURE__ */ new Map([
      [EngineConst.Markup.NONE, new string_renderer_js_1.StringRenderer()],
      [EngineConst.Markup.COUNTING, new string_renderer_js_1.CountingRenderer()],
      [EngineConst.Markup.PUNCTUATION, new punctuation_renderer_js_1.PunctuationRenderer()],
      [EngineConst.Markup.LAYOUT, new layout_renderer_js_1.LayoutRenderer()],
      [EngineConst.Markup.ACSS, new acss_renderer_js_1.AcssRenderer()],
      [EngineConst.Markup.SABLE, new sable_renderer_js_1.SableRenderer()],
      [EngineConst.Markup.VOICEXML, xmlInstance],
      [EngineConst.Markup.SSML, xmlInstance]
    ]);
    function setSeparator(sep) {
      const renderer = renderers.get(engine_js_1.Engine.getInstance().markup);
      if (renderer) {
        renderer.separator = sep;
      }
    }
    function getSeparator() {
      const renderer = renderers.get(engine_js_1.Engine.getInstance().markup);
      return renderer ? renderer.separator : "";
    }
    function markup(descrs) {
      const renderer = renderers.get(engine_js_1.Engine.getInstance().markup);
      if (!renderer) {
        return "";
      }
      return renderer.markup(descrs);
    }
    function merge(strs) {
      const span = strs.map((s) => {
        return typeof s === "string" ? span_js_1.Span.stringEmpty(s) : s;
      });
      const renderer = renderers.get(engine_js_1.Engine.getInstance().markup);
      if (!renderer) {
        return strs.join();
      }
      return renderer.merge(span);
    }
    function finalize(str) {
      const renderer = renderers.get(engine_js_1.Engine.getInstance().markup);
      if (!renderer) {
        return str;
      }
      return renderer.finalize(str);
    }
    function error(key) {
      const renderer = renderers.get(engine_js_1.Engine.getInstance().markup);
      if (!renderer) {
        return "";
      }
      return renderer.error(key);
    }
    function registerRenderer(type, renderer) {
      renderers.set(type, renderer);
    }
    function isXml() {
      return renderers.get(engine_js_1.Engine.getInstance().markup) instanceof xml_renderer_js_1.XmlRenderer;
    }
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_parser.js
var require_semantic_parser = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_parser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticAbstractParser = void 0;
    var semantic_node_factory_js_1 = require_semantic_node_factory();
    var SemanticAbstractParser = class {
      constructor(type) {
        this.type = type;
        this.factory_ = new semantic_node_factory_js_1.SemanticNodeFactory();
      }
      getFactory() {
        return this.factory_;
      }
      setFactory(factory) {
        this.factory_ = factory;
      }
      getType() {
        return this.type;
      }
      parseList(list) {
        const result = [];
        for (let i = 0, element; element = list[i]; i++) {
          result.push(this.parse(element));
        }
        return result;
      }
    };
    exports2.SemanticAbstractParser = SemanticAbstractParser;
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_mathml.js
var require_semantic_mathml = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_mathml.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticMathml = void 0;
    var DomUtil = require_dom_util();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_attr_js_1 = require_semantic_attr();
    var semantic_parser_js_1 = require_semantic_parser();
    var SemanticPred = require_semantic_pred();
    var semantic_processor_js_1 = require_semantic_processor();
    var SemanticUtil = require_semantic_util();
    var semantic_util_js_1 = require_semantic_util();
    var semantic_heuristic_factory_js_1 = require_semantic_heuristic_factory();
    var SemanticMathml = class _SemanticMathml extends semantic_parser_js_1.SemanticAbstractParser {
      static getAttribute_(node, attr, def) {
        if (!node.hasAttribute(attr)) {
          return def;
        }
        const value = node.getAttribute(attr);
        if (value.match(/^\s*$/)) {
          return null;
        }
        return value;
      }
      constructor() {
        super("MathML");
        this.parseMap_ = /* @__PURE__ */ new Map([
          [semantic_util_js_1.MMLTAGS.SEMANTICS, this.semantics_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MATH, this.rows_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MROW, this.rows_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MPADDED, this.rows_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MSTYLE, this.rows_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MFRAC, this.fraction_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MSUB, this.limits_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MSUP, this.limits_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MSUBSUP, this.limits_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MOVER, this.limits_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MUNDER, this.limits_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MUNDEROVER, this.limits_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MROOT, this.root_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MSQRT, this.sqrt_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MTABLE, this.table_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MLABELEDTR, this.tableLabeledRow_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MTR, this.tableRow_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MTD, this.tableCell_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MS, this.text_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MTEXT, this.text_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MSPACE, this.space_.bind(this)],
          [semantic_util_js_1.MMLTAGS.ANNOTATIONXML, this.text_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MI, this.identifier_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MN, this.number_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MO, this.operator_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MFENCED, this.fenced_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MENCLOSE, this.enclosed_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MMULTISCRIPTS, this.multiscripts_.bind(this)],
          [semantic_util_js_1.MMLTAGS.ANNOTATION, this.empty_.bind(this)],
          [semantic_util_js_1.MMLTAGS.NONE, this.empty_.bind(this)],
          [semantic_util_js_1.MMLTAGS.MACTION, this.action_.bind(this)]
        ]);
        const meaning = {
          type: semantic_meaning_js_1.SemanticType.IDENTIFIER,
          role: semantic_meaning_js_1.SemanticRole.NUMBERSET,
          font: semantic_meaning_js_1.SemanticFont.DOUBLESTRUCK
        };
        [
          "C",
          "H",
          "N",
          "P",
          "Q",
          "R",
          "Z",
          "ℂ",
          "ℍ",
          "ℕ",
          "ℙ",
          "ℚ",
          "ℝ",
          "ℤ"
        ].forEach(((x) => this.getFactory().defaultMap.set(x, meaning)).bind(this));
      }
      parse(mml) {
        semantic_processor_js_1.SemanticProcessor.getInstance().setNodeFactory(this.getFactory());
        const children = DomUtil.toArray(mml.childNodes);
        const tag = DomUtil.tagName(mml);
        const func = this.parseMap_.get(tag);
        const newNode = (func ? func : this.dummy_.bind(this))(mml, children);
        SemanticUtil.addAttributes(newNode, mml);
        if ([
          semantic_util_js_1.MMLTAGS.MATH,
          semantic_util_js_1.MMLTAGS.MROW,
          semantic_util_js_1.MMLTAGS.MPADDED,
          semantic_util_js_1.MMLTAGS.MSTYLE,
          semantic_util_js_1.MMLTAGS.SEMANTICS,
          semantic_util_js_1.MMLTAGS.MACTION
        ].indexOf(tag) !== -1) {
          return newNode;
        }
        newNode.mathml.unshift(mml);
        newNode.mathmlTree = mml;
        return newNode;
      }
      semantics_(_node, children) {
        return children.length ? this.parse(children[0]) : this.getFactory().makeEmptyNode();
      }
      rows_(node, children) {
        const semantics = node.getAttribute("semantics");
        if (semantics && semantics.match("bspr_")) {
          return semantic_processor_js_1.SemanticProcessor.proof(node, semantics, this.parseList.bind(this));
        }
        children = SemanticUtil.purgeNodes(children);
        let newNode;
        if (children.length === 1) {
          newNode = this.parse(children[0]);
          if (newNode.type === semantic_meaning_js_1.SemanticType.EMPTY && !newNode.mathmlTree) {
            newNode.mathmlTree = node;
          }
        } else {
          const snode = semantic_heuristic_factory_js_1.SemanticHeuristics.run("function_from_identifiers", node);
          newNode = snode && snode !== node ? snode : semantic_processor_js_1.SemanticProcessor.getInstance().row(this.parseList(children));
        }
        newNode.mathml.unshift(node);
        return newNode;
      }
      fraction_(node, children) {
        if (!children.length) {
          return this.getFactory().makeEmptyNode();
        }
        const upper = this.parse(children[0]);
        const lower = children[1] ? this.parse(children[1]) : this.getFactory().makeEmptyNode();
        const sem = semantic_processor_js_1.SemanticProcessor.getInstance().fractionLikeNode(upper, lower, node.getAttribute("linethickness"), node.getAttribute("bevelled") === "true");
        return sem;
      }
      limits_(node, children) {
        return semantic_processor_js_1.SemanticProcessor.getInstance().limitNode(DomUtil.tagName(node), this.parseList(children));
      }
      root_(node, children) {
        if (!children[1]) {
          return this.sqrt_(node, children);
        }
        return this.getFactory().makeBranchNode(semantic_meaning_js_1.SemanticType.ROOT, [this.parse(children[1]), this.parse(children[0])], []);
      }
      sqrt_(_node, children) {
        const semNodes = this.parseList(SemanticUtil.purgeNodes(children));
        return this.getFactory().makeBranchNode(semantic_meaning_js_1.SemanticType.SQRT, [semantic_processor_js_1.SemanticProcessor.getInstance().row(semNodes)], []);
      }
      table_(node, children) {
        const semantics = node.getAttribute("semantics");
        if (semantics && semantics.match("bspr_")) {
          return semantic_processor_js_1.SemanticProcessor.proof(node, semantics, this.parseList.bind(this));
        }
        const newNode = this.getFactory().makeBranchNode(semantic_meaning_js_1.SemanticType.TABLE, this.parseList(children), []);
        newNode.mathmlTree = node;
        return semantic_processor_js_1.SemanticProcessor.tableToMultiline(newNode);
      }
      tableRow_(_node, children) {
        const newNode = this.getFactory().makeBranchNode(semantic_meaning_js_1.SemanticType.ROW, this.parseList(children), []);
        newNode.role = semantic_meaning_js_1.SemanticRole.TABLE;
        return newNode;
      }
      tableLabeledRow_(node, children) {
        var _a;
        if (!children.length) {
          return this.tableRow_(node, children);
        }
        const label = this.parse(children[0]);
        label.role = semantic_meaning_js_1.SemanticRole.LABEL;
        if (((_a = label.childNodes[0]) === null || _a === void 0 ? void 0 : _a.type) === semantic_meaning_js_1.SemanticType.TEXT) {
          label.childNodes[0].role = semantic_meaning_js_1.SemanticRole.LABEL;
        }
        const newNode = this.getFactory().makeBranchNode(semantic_meaning_js_1.SemanticType.ROW, this.parseList(children.slice(1)), [label]);
        newNode.role = semantic_meaning_js_1.SemanticRole.TABLE;
        return newNode;
      }
      tableCell_(_node, children) {
        const semNodes = this.parseList(SemanticUtil.purgeNodes(children));
        let childNodes;
        if (!semNodes.length) {
          childNodes = [];
        } else if (semNodes.length === 1 && SemanticPred.isType(semNodes[0], semantic_meaning_js_1.SemanticType.EMPTY)) {
          childNodes = semNodes;
        } else {
          childNodes = [semantic_processor_js_1.SemanticProcessor.getInstance().row(semNodes)];
        }
        const newNode = this.getFactory().makeBranchNode(semantic_meaning_js_1.SemanticType.CELL, childNodes, []);
        newNode.role = semantic_meaning_js_1.SemanticRole.TABLE;
        return newNode;
      }
      space_(node, children) {
        const width = node.getAttribute("width");
        const match = width && width.match(/[a-z]*$/);
        if (!match) {
          return this.empty_(node, children);
        }
        const sizes = {
          cm: 0.4,
          pc: 0.5,
          em: 0.5,
          ex: 1,
          in: 0.15,
          pt: 5,
          mm: 5
        };
        const unit = match[0];
        const measure = parseFloat(width.slice(0, match.index));
        const size = sizes[unit];
        if (!size || isNaN(measure) || measure < size) {
          return this.empty_(node, children);
        }
        const newNode = this.getFactory().makeUnprocessed(node);
        return semantic_processor_js_1.SemanticProcessor.getInstance().text(newNode, DomUtil.tagName(node));
      }
      text_(node, children) {
        const newNode = this.leaf_(node, children);
        if (!node.textContent) {
          return newNode;
        }
        newNode.updateContent(node.textContent, true);
        return semantic_processor_js_1.SemanticProcessor.getInstance().text(newNode, DomUtil.tagName(node));
      }
      identifier_(node, children) {
        const newNode = this.leaf_(node, children);
        return semantic_processor_js_1.SemanticProcessor.getInstance().identifierNode(newNode, semantic_processor_js_1.SemanticProcessor.getInstance().font(node.getAttribute("mathvariant")), node.getAttribute("class"));
      }
      number_(node, children) {
        const newNode = this.leaf_(node, children);
        semantic_processor_js_1.SemanticProcessor.number(newNode);
        return newNode;
      }
      operator_(node, children) {
        const newNode = this.leaf_(node, children);
        semantic_processor_js_1.SemanticProcessor.getInstance().operatorNode(newNode);
        return newNode;
      }
      fenced_(node, children) {
        const semNodes = this.parseList(SemanticUtil.purgeNodes(children));
        const sepValue = _SemanticMathml.getAttribute_(node, "separators", ",");
        const open = _SemanticMathml.getAttribute_(node, "open", "(");
        const close = _SemanticMathml.getAttribute_(node, "close", ")");
        const newNode = semantic_processor_js_1.SemanticProcessor.getInstance().mfenced(open, close, sepValue, semNodes);
        const nodes = semantic_processor_js_1.SemanticProcessor.getInstance().tablesInRow([newNode]);
        return nodes[0];
      }
      enclosed_(node, children) {
        const semNodes = this.parseList(SemanticUtil.purgeNodes(children));
        const newNode = this.getFactory().makeBranchNode(semantic_meaning_js_1.SemanticType.ENCLOSE, [semantic_processor_js_1.SemanticProcessor.getInstance().row(semNodes)], []);
        newNode.role = node.getAttribute("notation") || semantic_meaning_js_1.SemanticRole.UNKNOWN;
        return newNode;
      }
      multiscripts_(_node, children) {
        if (!children.length) {
          return this.getFactory().makeEmptyNode();
        }
        const base = this.parse(children.shift());
        if (!children.length) {
          return base;
        }
        const lsup = [];
        const lsub = [];
        const rsup = [];
        const rsub = [];
        let prescripts = false;
        let scriptcount = 0;
        for (let i = 0, child; child = children[i]; i++) {
          if (DomUtil.tagName(child) === semantic_util_js_1.MMLTAGS.MPRESCRIPTS) {
            prescripts = true;
            scriptcount = 0;
            continue;
          }
          prescripts ? scriptcount & 1 ? lsup.push(child) : lsub.push(child) : scriptcount & 1 ? rsup.push(child) : rsub.push(child);
          scriptcount++;
        }
        if (!SemanticUtil.purgeNodes(lsup).length && !SemanticUtil.purgeNodes(lsub).length) {
          return semantic_processor_js_1.SemanticProcessor.getInstance().pseudoTensor(base, this.parseList(rsub), this.parseList(rsup));
        }
        return semantic_processor_js_1.SemanticProcessor.getInstance().tensor(base, this.parseList(lsub), this.parseList(lsup), this.parseList(rsub), this.parseList(rsup));
      }
      empty_(_node, _children) {
        return this.getFactory().makeEmptyNode();
      }
      action_(node, children) {
        const selection = children[node.hasAttribute("selection") ? parseInt(node.getAttribute("selection"), 10) - 1 : 0];
        const stree = this.parse(selection);
        stree.mathmlTree = selection;
        return stree;
      }
      dummy_(node, _children) {
        const unknown = this.getFactory().makeUnprocessed(node);
        unknown.role = node.tagName;
        unknown.textContent = node.textContent;
        return unknown;
      }
      leaf_(mml, children) {
        if (children.length === 1 && children[0].nodeType !== DomUtil.NodeType.TEXT_NODE) {
          const node2 = this.getFactory().makeUnprocessed(mml);
          node2.role = children[0].tagName;
          SemanticUtil.addAttributes(node2, children[0]);
          return node2;
        }
        const node = this.getFactory().makeLeafNode(mml.textContent, semantic_processor_js_1.SemanticProcessor.getInstance().font(mml.getAttribute("mathvariant")));
        if (mml.hasAttribute("data-latex")) {
          semantic_attr_js_1.SemanticMap.LatexCommands.set(mml.getAttribute("data-latex"), mml.textContent);
        }
        return node;
      }
    };
    exports2.SemanticMathml = SemanticMathml;
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_heuristic.js
var require_semantic_heuristic = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_heuristic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticMmlHeuristic = exports2.SemanticMultiHeuristic = exports2.SemanticTreeHeuristic = void 0;
    var SemanticAbstractHeuristic = class {
      constructor(name, method, predicate = (_x) => false) {
        this.name = name;
        this.apply = method;
        this.applicable = predicate;
      }
    };
    var SemanticTreeHeuristic = class extends SemanticAbstractHeuristic {
    };
    exports2.SemanticTreeHeuristic = SemanticTreeHeuristic;
    var SemanticMultiHeuristic = class extends SemanticAbstractHeuristic {
    };
    exports2.SemanticMultiHeuristic = SemanticMultiHeuristic;
    var SemanticMmlHeuristic = class extends SemanticAbstractHeuristic {
    };
    exports2.SemanticMmlHeuristic = SemanticMmlHeuristic;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/enrich_attr.js
var require_enrich_attr = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/enrich_attr.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EnrichAttributes = exports2.Attribute = void 0;
    exports2.makeIdList = makeIdList;
    exports2.setAttributes = setAttributes;
    exports2.removeAttributePrefix = removeAttributePrefix;
    exports2.addPrefix = addPrefix;
    exports2.addMrow = addMrow;
    var DomUtil = require_dom_util();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var Prefix = "data-semantic-";
    var Attribute;
    (function(Attribute2) {
      Attribute2["ADDED"] = "data-semantic-added";
      Attribute2["ALTERNATIVE"] = "data-semantic-alternative";
      Attribute2["CHILDREN"] = "data-semantic-children";
      Attribute2["COLLAPSED"] = "data-semantic-collapsed";
      Attribute2["CONTENT"] = "data-semantic-content";
      Attribute2["EMBELLISHED"] = "data-semantic-embellished";
      Attribute2["FENCEPOINTER"] = "data-semantic-fencepointer";
      Attribute2["FONT"] = "data-semantic-font";
      Attribute2["ID"] = "data-semantic-id";
      Attribute2["ANNOTATION"] = "data-semantic-annotation";
      Attribute2["ATTRIBUTES"] = "data-semantic-attributes";
      Attribute2["OPERATOR"] = "data-semantic-operator";
      Attribute2["OWNS"] = "data-semantic-owns";
      Attribute2["PARENT"] = "data-semantic-parent";
      Attribute2["POSTFIX"] = "data-semantic-postfix";
      Attribute2["PREFIX"] = "data-semantic-prefix";
      Attribute2["ROLE"] = "data-semantic-role";
      Attribute2["SPEECH"] = "data-semantic-speech";
      Attribute2["STRUCTURE"] = "data-semantic-structure";
      Attribute2["SUMMARY"] = "data-semantic-summary";
      Attribute2["TYPE"] = "data-semantic-type";
    })(Attribute || (exports2.Attribute = Attribute = {}));
    exports2.EnrichAttributes = [
      Attribute.ADDED,
      Attribute.ALTERNATIVE,
      Attribute.CHILDREN,
      Attribute.COLLAPSED,
      Attribute.CONTENT,
      Attribute.EMBELLISHED,
      Attribute.FENCEPOINTER,
      Attribute.FONT,
      Attribute.ID,
      Attribute.ANNOTATION,
      Attribute.ATTRIBUTES,
      Attribute.OPERATOR,
      Attribute.OWNS,
      Attribute.PARENT,
      Attribute.POSTFIX,
      Attribute.PREFIX,
      Attribute.ROLE,
      Attribute.SPEECH,
      Attribute.STRUCTURE,
      Attribute.SUMMARY,
      Attribute.TYPE
    ];
    function makeIdList(nodes) {
      return nodes.map(function(node) {
        return node.id;
      }).join(",");
    }
    function setAttributes(mml, semantic) {
      mml.setAttribute(Attribute.TYPE, semantic.type);
      const attributes = semantic.allAttributes();
      for (let i = 0, attr; attr = attributes[i]; i++) {
        mml.setAttribute(Prefix + attr[0].toLowerCase(), attr[1]);
      }
      if (semantic.childNodes.length) {
        mml.setAttribute(Attribute.CHILDREN, makeIdList(semantic.childNodes));
      }
      if (semantic.contentNodes.length) {
        mml.setAttribute(Attribute.CONTENT, makeIdList(semantic.contentNodes));
      }
      if (semantic.parent) {
        mml.setAttribute(Attribute.PARENT, semantic.parent.id.toString());
      }
      const external = semantic.attributesXml();
      if (external) {
        mml.setAttribute(Attribute.ATTRIBUTES, external);
      }
      setPostfix(mml, semantic);
    }
    function setPostfix(mml, semantic) {
      const postfix = [];
      if (semantic.role === semantic_meaning_js_1.SemanticRole.MGLYPH) {
        postfix.push("image");
      }
      if (semantic.attributes["href"]) {
        postfix.push("link");
      }
      if (postfix.length) {
        mml.setAttribute(Attribute.POSTFIX, postfix.join(" "));
      }
    }
    function removeAttributePrefix(mml) {
      return mml.toString().replace(new RegExp(Prefix, "g"), "");
    }
    function addPrefix(attr) {
      return Prefix + attr;
    }
    function addMrow() {
      const mrow = DomUtil.createElement("mrow");
      mrow.setAttribute(Attribute.ADDED, "true");
      return mrow;
    }
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_skeleton.js
var require_semantic_skeleton = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_skeleton.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticSkeleton = void 0;
    var BaseUtil = require_base_util();
    var engine_js_1 = require_engine();
    var XpathUtil = require_xpath_util();
    var enrich_attr_js_1 = require_enrich_attr();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var Options = {
      tree: false
    };
    var SemanticSkeleton = class _SemanticSkeleton {
      static fromTree(tree) {
        return _SemanticSkeleton.fromNode(tree.root);
      }
      static fromNode(node) {
        return new _SemanticSkeleton(_SemanticSkeleton.fromNode_(node));
      }
      static fromString(skel) {
        return new _SemanticSkeleton(_SemanticSkeleton.fromString_(skel));
      }
      static simpleCollapseStructure(strct) {
        return typeof strct === "number";
      }
      static contentCollapseStructure(strct) {
        return !!strct && !_SemanticSkeleton.simpleCollapseStructure(strct) && strct[0] === "c";
      }
      static interleaveIds(first, second) {
        return BaseUtil.interleaveLists(_SemanticSkeleton.collapsedLeafs(first), _SemanticSkeleton.collapsedLeafs(second));
      }
      static collapsedLeafs(...args) {
        const collapseStructure = (coll) => {
          if (_SemanticSkeleton.simpleCollapseStructure(coll)) {
            return [coll];
          }
          coll = coll;
          return _SemanticSkeleton.contentCollapseStructure(coll[1]) ? coll.slice(2) : coll.slice(1);
        };
        return args.reduce((x, y) => x.concat(collapseStructure(y)), []);
      }
      static fromStructure(mml, tree) {
        return new _SemanticSkeleton(_SemanticSkeleton.tree_(mml, tree.root));
      }
      static combineContentChildren(type, _role, content, children) {
        switch (type) {
          case semantic_meaning_js_1.SemanticType.RELSEQ:
          case semantic_meaning_js_1.SemanticType.INFIXOP:
          case semantic_meaning_js_1.SemanticType.MULTIREL:
            return BaseUtil.interleaveLists(children, content);
          case semantic_meaning_js_1.SemanticType.PREFIXOP:
            return content.concat(children);
          case semantic_meaning_js_1.SemanticType.POSTFIXOP:
            return children.concat(content);
          case semantic_meaning_js_1.SemanticType.MATRIX:
          case semantic_meaning_js_1.SemanticType.VECTOR:
          case semantic_meaning_js_1.SemanticType.FENCED:
            children.unshift(content[0]);
            children.push(content[1]);
            return children;
          case semantic_meaning_js_1.SemanticType.CASES:
            children.unshift(content[0]);
            return children;
          case semantic_meaning_js_1.SemanticType.APPL:
            return [children[0], content[0], children[1]];
          case semantic_meaning_js_1.SemanticType.ROOT:
            return [children[0], children[1]];
          case semantic_meaning_js_1.SemanticType.ROW:
          case semantic_meaning_js_1.SemanticType.LINE:
            if (content.length) {
              children.unshift(content[0]);
            }
            return children;
          default:
            return children;
        }
      }
      static makeSexp_(struct) {
        if (_SemanticSkeleton.simpleCollapseStructure(struct)) {
          return struct.toString();
        }
        if (_SemanticSkeleton.contentCollapseStructure(struct)) {
          return "(c " + struct.slice(1).map(_SemanticSkeleton.makeSexp_).join(" ") + ")";
        }
        return "(" + struct.map(_SemanticSkeleton.makeSexp_).join(" ") + ")";
      }
      static fromString_(skeleton) {
        let str = skeleton.replace(/\(/g, "[");
        str = str.replace(/\)/g, "]");
        str = str.replace(/ /g, ",");
        str = str.replace(/c/g, '"c"');
        return JSON.parse(str);
      }
      static fromNode_(node) {
        if (!node) {
          return [];
        }
        const content = node.contentNodes;
        let contentStructure;
        if (content.length) {
          contentStructure = content.map(_SemanticSkeleton.fromNode_);
          contentStructure.unshift("c");
        }
        const children = node.childNodes;
        if (!children.length) {
          return content.length ? [node.id, contentStructure] : node.id;
        }
        const structure = children.map(_SemanticSkeleton.fromNode_);
        if (content.length) {
          structure.unshift(contentStructure);
        }
        structure.unshift(node.id);
        return structure;
      }
      static tree_(mml, node, level = 0, posinset = 1, setsize = 1) {
        if (!node) {
          return [];
        }
        const id = node.id;
        const skeleton = [id];
        XpathUtil.updateEvaluator(mml);
        const mmlChild = XpathUtil.evalXPath(`.//self::*[@${enrich_attr_js_1.Attribute.ID}=${id}]`, mml)[0];
        if (!node.childNodes.length) {
          _SemanticSkeleton.addAria(mmlChild, level, posinset, setsize);
          return node.id;
        }
        const children = _SemanticSkeleton.combineContentChildren(node.type, node.role, node.contentNodes.map(function(x) {
          return x;
        }), node.childNodes.map(function(x) {
          return x;
        }));
        if (mmlChild) {
          _SemanticSkeleton.addOwns_(mmlChild, children);
        }
        for (let i = 0, l = children.length, child; child = children[i]; i++) {
          skeleton.push(_SemanticSkeleton.tree_(mml, child, level + 1, i + 1, l));
        }
        _SemanticSkeleton.addAria(mmlChild, level, posinset, setsize, !Options.tree ? "treeitem" : level ? "group" : "tree");
        return skeleton;
      }
      static addAria(node, level, posinset, setsize, role = !Options.tree ? "treeitem" : level ? "treeitem" : "tree") {
        if (!engine_js_1.Engine.getInstance().aria || !node) {
          return;
        }
        node.setAttribute("aria-level", level.toString());
        node.setAttribute("aria-posinset", posinset.toString());
        node.setAttribute("aria-setsize", setsize.toString());
        node.setAttribute("role", role);
        if (node.hasAttribute(enrich_attr_js_1.Attribute.OWNS)) {
          node.setAttribute("aria-owns", node.getAttribute(enrich_attr_js_1.Attribute.OWNS));
        }
      }
      static addOwns_(node, children) {
        const collapsed = node.getAttribute(enrich_attr_js_1.Attribute.COLLAPSED);
        const leafs = collapsed ? _SemanticSkeleton.realLeafs_(_SemanticSkeleton.fromString(collapsed).array) : children.map((x) => x.id);
        node.setAttribute(enrich_attr_js_1.Attribute.OWNS, leafs.join(" "));
      }
      static realLeafs_(sexp) {
        if (_SemanticSkeleton.simpleCollapseStructure(sexp)) {
          return [sexp];
        }
        if (_SemanticSkeleton.contentCollapseStructure(sexp)) {
          return [];
        }
        sexp = sexp;
        let result = [];
        for (let i = 1; i < sexp.length; i++) {
          result = result.concat(_SemanticSkeleton.realLeafs_(sexp[i]));
        }
        return result;
      }
      constructor(skeleton) {
        this.parents = null;
        this.levelsMap = null;
        skeleton = skeleton === 0 ? skeleton : skeleton || [];
        this.array = skeleton;
      }
      populate() {
        if (this.parents && this.levelsMap) {
          return;
        }
        this.parents = {};
        this.levelsMap = {};
        this.populate_(this.array, this.array, []);
      }
      toString() {
        return _SemanticSkeleton.makeSexp_(this.array);
      }
      populate_(element, layer, parents) {
        if (_SemanticSkeleton.simpleCollapseStructure(element)) {
          element = element;
          this.levelsMap[element] = layer;
          this.parents[element] = element === parents[0] ? parents.slice(1) : parents;
          return;
        }
        const newElement = _SemanticSkeleton.contentCollapseStructure(element) ? element.slice(1) : element;
        const newParents = [newElement[0]].concat(parents);
        for (let i = 0, l = newElement.length; i < l; i++) {
          const current = newElement[i];
          this.populate_(current, element, newParents);
        }
      }
      isRoot(id) {
        const level = this.levelsMap[id];
        return id === level[0];
      }
      directChildren(id) {
        if (!this.isRoot(id)) {
          return [];
        }
        const level = this.levelsMap[id];
        return level.slice(1).map((child) => {
          if (_SemanticSkeleton.simpleCollapseStructure(child)) {
            return child;
          }
          if (_SemanticSkeleton.contentCollapseStructure(child)) {
            return child[1];
          }
          return child[0];
        });
      }
      subtreeNodes(id) {
        if (!this.isRoot(id)) {
          return [];
        }
        const subtreeNodes_ = (tree, nodes) => {
          if (_SemanticSkeleton.simpleCollapseStructure(tree)) {
            nodes.push(tree);
            return;
          }
          tree = tree;
          if (_SemanticSkeleton.contentCollapseStructure(tree)) {
            tree = tree.slice(1);
          }
          tree.forEach((x) => subtreeNodes_(x, nodes));
        };
        const level = this.levelsMap[id];
        const subtree = [];
        subtreeNodes_(level.slice(1), subtree);
        return subtree;
      }
    };
    exports2.SemanticSkeleton = SemanticSkeleton;
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_heuristics.js
var require_semantic_heuristics = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_heuristics.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var debugger_js_1 = require_debugger();
    var engine_js_1 = require_engine();
    var semantic_attr_js_1 = require_semantic_attr();
    var semantic_heuristic_factory_js_1 = require_semantic_heuristic_factory();
    var semantic_heuristic_js_1 = require_semantic_heuristic();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var SemanticPred = require_semantic_pred();
    var semantic_processor_js_1 = require_semantic_processor();
    var SemanticUtil = require_semantic_util();
    var semantic_skeleton_js_1 = require_semantic_skeleton();
    var semantic_util_js_1 = require_semantic_util();
    var DomUtil = require_dom_util();
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticTreeHeuristic("combine_juxtaposition", combineJuxtaposition));
    function combineJuxtaposition(root) {
      for (let i = root.childNodes.length - 1, child; child = root.childNodes[i]; i--) {
        if (!SemanticPred.isImplicitOp(child) || child.nobreaking) {
          continue;
        }
        root.childNodes.splice(i, 1, ...child.childNodes);
        root.contentNodes.splice(i, 0, ...child.contentNodes);
        child.childNodes.concat(child.contentNodes).forEach(function(x) {
          x.parent = root;
        });
        root.addMathmlNodes(child.mathml);
      }
      return root;
    }
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticTreeHeuristic("propagateSimpleFunction", (node) => {
      if ((node.type === semantic_meaning_js_1.SemanticType.INFIXOP || node.type === semantic_meaning_js_1.SemanticType.FRACTION) && node.childNodes.every(SemanticPred.isSimpleFunction)) {
        node.role = semantic_meaning_js_1.SemanticRole.COMPFUNC;
      }
      return node;
    }, (_node) => engine_js_1.Engine.getInstance().domain === "clearspeak"));
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticTreeHeuristic("simpleNamedFunction", (node) => {
      const specialFunctions = ["f", "g", "h", "F", "G", "H"];
      if (node.role !== semantic_meaning_js_1.SemanticRole.UNIT && specialFunctions.indexOf(node.textContent) !== -1) {
        node.role = semantic_meaning_js_1.SemanticRole.SIMPLEFUNC;
      }
      return node;
    }, (_node) => engine_js_1.Engine.getInstance().domain === "clearspeak"));
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticTreeHeuristic("propagateComposedFunction", (node) => {
      if (node.type === semantic_meaning_js_1.SemanticType.FENCED && node.childNodes[0].role === semantic_meaning_js_1.SemanticRole.COMPFUNC) {
        node.role = semantic_meaning_js_1.SemanticRole.COMPFUNC;
      }
      return node;
    }, (_node) => engine_js_1.Engine.getInstance().domain === "clearspeak"));
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticTreeHeuristic("multioperator", (node) => {
      if (node.role !== semantic_meaning_js_1.SemanticRole.UNKNOWN || node.textContent.length <= 1) {
        return;
      }
      semantic_processor_js_1.SemanticProcessor.compSemantics(node, "role", semantic_meaning_js_1.SemanticRole);
      semantic_processor_js_1.SemanticProcessor.compSemantics(node, "type", semantic_meaning_js_1.SemanticType);
    }));
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticMultiHeuristic("convert_juxtaposition", (nodes) => {
      let partition = SemanticUtil.partitionNodes(nodes, function(x) {
        return x.textContent === semantic_attr_js_1.NamedSymbol.invisibleTimes && x.type === semantic_meaning_js_1.SemanticType.OPERATOR;
      });
      partition = partition.rel.length ? juxtapositionPrePost(partition) : partition;
      nodes = partition.comp[0];
      for (let i = 1, c, r; c = partition.comp[i], r = partition.rel[i - 1]; i++) {
        nodes.push(r);
        nodes = nodes.concat(c);
      }
      partition = SemanticUtil.partitionNodes(nodes, function(x) {
        return x.textContent === semantic_attr_js_1.NamedSymbol.invisibleTimes && (x.type === semantic_meaning_js_1.SemanticType.OPERATOR || x.type === semantic_meaning_js_1.SemanticType.INFIXOP);
      });
      if (!partition.rel.length) {
        return nodes;
      }
      return recurseJuxtaposition(partition.comp.shift(), partition.rel, partition.comp);
    }));
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticTreeHeuristic("simple2prefix", (node) => {
      if (node.textContent.length > 1 && !node.textContent[0].match(/[A-Z]/)) {
        node.role = semantic_meaning_js_1.SemanticRole.PREFIXFUNC;
      }
      return node;
    }, (node) => engine_js_1.Engine.getInstance().modality === "braille" && node.type === semantic_meaning_js_1.SemanticType.IDENTIFIER));
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticTreeHeuristic("detect_cycle", (node) => {
      node.type = semantic_meaning_js_1.SemanticType.MATRIX;
      node.role = semantic_meaning_js_1.SemanticRole.CYCLE;
      const row = node.childNodes[0];
      row.type = semantic_meaning_js_1.SemanticType.ROW;
      row.role = semantic_meaning_js_1.SemanticRole.CYCLE;
      row.textContent = "";
      row.contentNodes = [];
      return node;
    }, (node) => node.type === semantic_meaning_js_1.SemanticType.FENCED && node.childNodes[0].type === semantic_meaning_js_1.SemanticType.INFIXOP && node.childNodes[0].role === semantic_meaning_js_1.SemanticRole.IMPLICIT && node.childNodes[0].childNodes.every(function(x) {
      return x.type === semantic_meaning_js_1.SemanticType.NUMBER;
    }) && node.childNodes[0].contentNodes.every(function(x) {
      return x.role === semantic_meaning_js_1.SemanticRole.SPACE;
    })));
    function juxtapositionPrePost(partition) {
      const rels = [];
      const comps = [];
      let next = partition.comp.shift();
      let rel = null;
      let collect = [];
      while (partition.comp.length) {
        collect = [];
        if (next.length) {
          if (rel) {
            rels.push(rel);
          }
          comps.push(next);
          rel = partition.rel.shift();
          next = partition.comp.shift();
          continue;
        }
        if (rel) {
          collect.push(rel);
        }
        while (!next.length && partition.comp.length) {
          next = partition.comp.shift();
          collect.push(partition.rel.shift());
        }
        rel = convertPrePost(collect, next, comps);
      }
      if (!collect.length && !next.length) {
        collect.push(rel);
        convertPrePost(collect, next, comps);
      } else {
        rels.push(rel);
        comps.push(next);
      }
      return { rel: rels, comp: comps };
    }
    function convertPrePost(collect, next, comps) {
      let rel = null;
      if (!collect.length) {
        return rel;
      }
      const prev = comps[comps.length - 1];
      const prevExists = prev && prev.length;
      const nextExists = next && next.length;
      const processor = semantic_processor_js_1.SemanticProcessor.getInstance();
      if (prevExists && nextExists) {
        if (next[0].type === semantic_meaning_js_1.SemanticType.INFIXOP && next[0].role === semantic_meaning_js_1.SemanticRole.IMPLICIT) {
          rel = collect.pop();
          prev.push(processor["postfixNode_"](prev.pop(), collect));
          return rel;
        }
        rel = collect.shift();
        const result = processor["prefixNode_"](next.shift(), collect);
        next.unshift(result);
        return rel;
      }
      if (prevExists) {
        prev.push(processor["postfixNode_"](prev.pop(), collect));
        return rel;
      }
      if (nextExists) {
        next.unshift(processor["prefixNode_"](next.shift(), collect));
      }
      return rel;
    }
    function recurseJuxtaposition(acc, ops, elements) {
      if (!ops.length) {
        return acc;
      }
      const left = acc.pop();
      const op = ops.shift();
      const first = elements.shift();
      if (op.type === semantic_meaning_js_1.SemanticType.INFIXOP && (op.role === semantic_meaning_js_1.SemanticRole.IMPLICIT || op.role === semantic_meaning_js_1.SemanticRole.UNIT)) {
        debugger_js_1.Debugger.getInstance().output("Juxta Heuristic Case 2");
        const right2 = (left ? [left, op] : [op]).concat(first);
        return recurseJuxtaposition(acc.concat(right2), ops, elements);
      }
      if (!left) {
        debugger_js_1.Debugger.getInstance().output("Juxta Heuristic Case 3");
        return recurseJuxtaposition([op].concat(first), ops, elements);
      }
      const right = first.shift();
      if (!right) {
        debugger_js_1.Debugger.getInstance().output("Juxta Heuristic Case 9");
        const newOp = semantic_heuristic_factory_js_1.SemanticHeuristics.factory.makeBranchNode(semantic_meaning_js_1.SemanticType.INFIXOP, [left, ops.shift()], [op], op.textContent);
        newOp.role = semantic_meaning_js_1.SemanticRole.IMPLICIT;
        semantic_heuristic_factory_js_1.SemanticHeuristics.run("combine_juxtaposition", newOp);
        ops.unshift(newOp);
        return recurseJuxtaposition(acc, ops, elements);
      }
      if (SemanticPred.isOperator(left) || SemanticPred.isOperator(right)) {
        debugger_js_1.Debugger.getInstance().output("Juxta Heuristic Case 4");
        return recurseJuxtaposition(acc.concat([left, op, right]).concat(first), ops, elements);
      }
      let result = null;
      if (SemanticPred.isImplicitOp(left) && SemanticPred.isImplicitOp(right)) {
        debugger_js_1.Debugger.getInstance().output("Juxta Heuristic Case 5");
        left.contentNodes.push(op);
        left.contentNodes = left.contentNodes.concat(right.contentNodes);
        left.childNodes.push(right);
        left.childNodes = left.childNodes.concat(right.childNodes);
        right.childNodes.forEach((x) => x.parent = left);
        op.parent = left;
        left.addMathmlNodes(op.mathml);
        left.addMathmlNodes(right.mathml);
        result = left;
      } else if (SemanticPred.isImplicitOp(left)) {
        debugger_js_1.Debugger.getInstance().output("Juxta Heuristic Case 6");
        left.contentNodes.push(op);
        left.childNodes.push(right);
        right.parent = left;
        op.parent = left;
        left.addMathmlNodes(op.mathml);
        left.addMathmlNodes(right.mathml);
        result = left;
      } else if (SemanticPred.isImplicitOp(right)) {
        debugger_js_1.Debugger.getInstance().output("Juxta Heuristic Case 7");
        right.contentNodes.unshift(op);
        right.childNodes.unshift(left);
        left.parent = right;
        op.parent = right;
        right.addMathmlNodes(op.mathml);
        right.addMathmlNodes(left.mathml);
        result = right;
      } else {
        debugger_js_1.Debugger.getInstance().output("Juxta Heuristic Case 8");
        result = semantic_heuristic_factory_js_1.SemanticHeuristics.factory.makeBranchNode(semantic_meaning_js_1.SemanticType.INFIXOP, [left, right], [op], op.textContent);
        result.role = semantic_meaning_js_1.SemanticRole.IMPLICIT;
      }
      acc.push(result);
      return recurseJuxtaposition(acc.concat(first), ops, elements);
    }
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticMultiHeuristic("intvar_from_implicit", implicitUnpack, (nodes) => nodes[0] && SemanticPred.isImplicit(nodes[0])));
    function implicitUnpack(nodes) {
      const children = nodes[0].childNodes;
      nodes.splice(0, 1, ...children);
    }
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticTreeHeuristic("intvar_from_fraction", integralFractionArg, (node) => {
      if (node.type !== semantic_meaning_js_1.SemanticType.INTEGRAL)
        return false;
      const [, integrand, intvar] = node.childNodes;
      return intvar.type === semantic_meaning_js_1.SemanticType.EMPTY && integrand.type === semantic_meaning_js_1.SemanticType.FRACTION;
    }));
    function integralFractionArg(node) {
      const integrand = node.childNodes[1];
      const enumerator = integrand.childNodes[0];
      if (SemanticPred.isIntegralDxBoundarySingle(enumerator)) {
        enumerator.role = semantic_meaning_js_1.SemanticRole.INTEGRAL;
        return;
      }
      if (!SemanticPred.isImplicit(enumerator))
        return;
      const length = enumerator.childNodes.length;
      const first = enumerator.childNodes[length - 2];
      const second = enumerator.childNodes[length - 1];
      if (SemanticPred.isIntegralDxBoundarySingle(second)) {
        second.role = semantic_meaning_js_1.SemanticRole.INTEGRAL;
        return;
      }
      if (SemanticPred.isIntegralDxBoundary(first, second)) {
        const prefix = semantic_processor_js_1.SemanticProcessor.getInstance()["prefixNode_"](second, [
          first
        ]);
        prefix.role = semantic_meaning_js_1.SemanticRole.INTEGRAL;
        if (length === 2) {
          integrand.childNodes[0] = prefix;
        } else {
          enumerator.childNodes.pop();
          enumerator.contentNodes.pop();
          enumerator.childNodes[length - 2] = prefix;
          prefix.parent = enumerator;
        }
      }
    }
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticTreeHeuristic("rewrite_subcases", rewriteSubcasesTable, (table) => {
      let left = true;
      let right = true;
      const topLeft = table.childNodes[0].childNodes[0];
      if (!eligibleNode(topLeft.mathmlTree)) {
        left = false;
      } else {
        for (let i = 1, row; row = table.childNodes[i]; i++) {
          if (row.childNodes[0].childNodes.length) {
            left = false;
            break;
          }
        }
      }
      if (left) {
        table.addAnnotation("Emph", "left");
      }
      const topRight = table.childNodes[0].childNodes[table.childNodes[0].childNodes.length - 1];
      if (!eligibleNode(topRight.mathmlTree)) {
        right = false;
      } else {
        const firstRow = table.childNodes[0].childNodes.length;
        for (let i = 1, row; row = table.childNodes[i]; i++) {
          if (row.childNodes.length >= firstRow) {
            right = false;
            break;
          }
        }
      }
      if (right) {
        table.addAnnotation("Emph", "right");
      }
      return left || right;
    }));
    function eligibleNode(node) {
      return node.childNodes[0] && node.childNodes[0].childNodes[0] && DomUtil.tagName(node.childNodes[0]) === semantic_util_js_1.MMLTAGS.MPADDED && DomUtil.tagName(node.childNodes[0].childNodes[0]) === semantic_util_js_1.MMLTAGS.MPADDED && DomUtil.tagName(node.childNodes[0].childNodes[node.childNodes[0].childNodes.length - 1]) === semantic_util_js_1.MMLTAGS.MPHANTOM;
    }
    var rewritable = [
      semantic_meaning_js_1.SemanticType.PUNCTUATED,
      semantic_meaning_js_1.SemanticType.RELSEQ,
      semantic_meaning_js_1.SemanticType.MULTIREL,
      semantic_meaning_js_1.SemanticType.INFIXOP,
      semantic_meaning_js_1.SemanticType.PREFIXOP,
      semantic_meaning_js_1.SemanticType.POSTFIXOP
    ];
    function rewriteSubcasesTable(table) {
      table.addAnnotation("Emph", "top");
      let row = [];
      if (table.hasAnnotation("Emph", "left")) {
        const topLeft = table.childNodes[0].childNodes[0].childNodes[0];
        const cells = rewriteCell(topLeft, true);
        cells.forEach((x) => x.addAnnotation("Emph", "left"));
        row = row.concat(cells);
        for (let i = 0, line; line = table.childNodes[i]; i++) {
          line.childNodes.shift();
        }
      }
      row.push(table);
      if (table.hasAnnotation("Emph", "right")) {
        const topRight = table.childNodes[0].childNodes[table.childNodes[0].childNodes.length - 1].childNodes[0];
        const cells = rewriteCell(topRight);
        cells.forEach((x) => x.addAnnotation("Emph", "left"));
        row = row.concat(cells);
        table.childNodes[0].childNodes.pop();
      }
      semantic_processor_js_1.SemanticProcessor.tableToMultiline(table);
      const newNode = semantic_processor_js_1.SemanticProcessor.getInstance().row(row);
      const annotation = table.annotation["Emph"];
      table.annotation["Emph"] = ["table"];
      annotation.forEach((x) => newNode.addAnnotation("Emph", x));
      return newNode;
    }
    function rewriteCell(cell, left) {
      if (!cell.childNodes.length) {
        rewriteFence(cell);
        return [cell];
      }
      let fence = null;
      if (cell.type === semantic_meaning_js_1.SemanticType.PUNCTUATED && (left ? cell.role === semantic_meaning_js_1.SemanticRole.ENDPUNCT : cell.role === semantic_meaning_js_1.SemanticRole.STARTPUNCT)) {
        const children = cell.childNodes;
        if (rewriteFence(children[left ? children.length - 1 : 0])) {
          cell = children[left ? 0 : children.length - 1];
          fence = children[left ? children.length - 1 : 0];
        }
      }
      if (rewritable.indexOf(cell.type) !== -1) {
        const children = cell.childNodes;
        rewriteFence(children[left ? children.length - 1 : 0]);
        const newNodes = semantic_skeleton_js_1.SemanticSkeleton.combineContentChildren(cell.type, cell.role, cell.contentNodes, cell.childNodes);
        if (fence) {
          if (left) {
            newNodes.push(fence);
          } else {
            newNodes.unshift(fence);
          }
        }
        return newNodes;
      }
      return fence ? left ? [cell, fence] : [fence, cell] : [cell];
    }
    var PUNCT_TO_FENCE_ = {
      [semantic_meaning_js_1.SemanticRole.METRIC]: semantic_meaning_js_1.SemanticRole.METRIC,
      [semantic_meaning_js_1.SemanticRole.VBAR]: semantic_meaning_js_1.SemanticRole.NEUTRAL,
      [semantic_meaning_js_1.SemanticRole.OPENFENCE]: semantic_meaning_js_1.SemanticRole.OPEN,
      [semantic_meaning_js_1.SemanticRole.CLOSEFENCE]: semantic_meaning_js_1.SemanticRole.CLOSE
    };
    function rewriteFence(fence) {
      if (fence.type !== semantic_meaning_js_1.SemanticType.PUNCTUATION) {
        return false;
      }
      const role = PUNCT_TO_FENCE_[fence.role];
      if (!role) {
        return false;
      }
      fence.role = role;
      fence.type = semantic_meaning_js_1.SemanticType.FENCE;
      fence.addAnnotation("Emph", "fence");
      return true;
    }
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticMultiHeuristic("ellipses", (nodes) => {
      const newNodes = [];
      let current = nodes.shift();
      while (current) {
        [current, nodes] = combineNodes(current, nodes, semantic_meaning_js_1.SemanticRole.FULLSTOP, semantic_meaning_js_1.SemanticRole.ELLIPSIS);
        [current, nodes] = combineNodes(current, nodes, semantic_meaning_js_1.SemanticRole.DASH);
        newNodes.push(current);
        current = nodes.shift();
      }
      return newNodes;
    }, (nodes) => nodes.length > 1));
    function combineNodes(current, nodes, src, target = src) {
      const collect = [];
      while (current && current.role === src) {
        collect.push(current);
        current = nodes.shift();
      }
      if (!collect.length) {
        return [current, nodes];
      }
      if (current) {
        nodes.unshift(current);
      }
      return [
        collect.length === 1 ? collect[0] : combinedNodes(collect, target),
        nodes
      ];
    }
    function combinedNodes(nodes, role) {
      const node = semantic_heuristic_factory_js_1.SemanticHeuristics.factory.makeBranchNode(semantic_meaning_js_1.SemanticType.PUNCTUATION, nodes, []);
      node.role = role;
      return node;
    }
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticMultiHeuristic("op_with_limits", (nodes) => {
      const center = nodes[0];
      center.type = semantic_meaning_js_1.SemanticType.LARGEOP;
      center.role = semantic_meaning_js_1.SemanticRole.SUM;
      return nodes;
    }, (nodes) => {
      return nodes[0].type === semantic_meaning_js_1.SemanticType.OPERATOR && nodes.slice(1).some((node) => node.type === semantic_meaning_js_1.SemanticType.RELSEQ || node.type === semantic_meaning_js_1.SemanticType.MULTIREL || node.type === semantic_meaning_js_1.SemanticType.INFIXOP && node.role === semantic_meaning_js_1.SemanticRole.ELEMENT || node.type === semantic_meaning_js_1.SemanticType.PUNCTUATED && node.role === semantic_meaning_js_1.SemanticRole.SEQUENCE);
    }));
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticMultiHeuristic("bracketed_interval", (nodes) => {
      const leftFence = nodes[0];
      const rightFence = nodes[1];
      const content = nodes.slice(2);
      const childNode = semantic_processor_js_1.SemanticProcessor.getInstance().row(content);
      const fenced = semantic_heuristic_factory_js_1.SemanticHeuristics.factory.makeBranchNode(semantic_meaning_js_1.SemanticType.FENCED, [childNode], [leftFence, rightFence]);
      fenced.role = semantic_meaning_js_1.SemanticRole.LEFTRIGHT;
      return fenced;
    }, (nodes) => {
      const leftFence = nodes[0];
      const rightFence = nodes[1];
      const content = nodes.slice(2);
      if (!(leftFence && (leftFence.textContent === "]" || leftFence.textContent === "[") && rightFence && (rightFence.textContent === "]" || rightFence.textContent === "["))) {
        return false;
      }
      const partition = SemanticUtil.partitionNodes(content, SemanticPred.isPunctuation);
      return !!(partition.rel.length === 1 && partition.comp[0].length && partition.comp[1].length);
    }));
    semantic_heuristic_factory_js_1.SemanticHeuristics.add(new semantic_heuristic_js_1.SemanticMmlHeuristic("function_from_identifiers", (node) => {
      const expr = DomUtil.toArray(node.childNodes).map((x) => x.textContent.trim()).join("");
      const meaning = semantic_attr_js_1.SemanticMap.Meaning.get(expr);
      if (meaning.type === semantic_meaning_js_1.SemanticType.UNKNOWN) {
        return node;
      }
      const snode = semantic_heuristic_factory_js_1.SemanticHeuristics.factory.makeLeafNode(expr, semantic_processor_js_1.SemanticProcessor.getInstance().font(node.getAttribute("mathvariant")));
      snode.mathmlTree = node;
      return snode;
    }, (node) => {
      const children = DomUtil.toArray(node.childNodes);
      if (children.length < 2) {
        return false;
      }
      return children.every((child) => DomUtil.tagName(child) === semantic_util_js_1.MMLTAGS.MI && semantic_attr_js_1.SemanticMap.Meaning.get(child.textContent.trim()).role === semantic_meaning_js_1.SemanticRole.LATINLETTER);
    }));
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic_tree.js
var require_semantic_tree = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic_tree.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTree = void 0;
    var DomUtil = require_dom_util();
    var semantic_annotations_js_1 = require_semantic_annotations();
    var semantic_annotator_js_1 = require_semantic_annotator();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_mathml_js_1 = require_semantic_mathml();
    var semantic_node_js_1 = require_semantic_node();
    var SemanticPred = require_semantic_pred();
    require_semantic_heuristics();
    var SemanticTree = class _SemanticTree {
      static empty() {
        const empty = DomUtil.parseInput("<math/>");
        const stree = new _SemanticTree(empty);
        stree.mathml = empty;
        return stree;
      }
      static fromNode(semantic, opt_mathml) {
        const stree = _SemanticTree.empty();
        stree.root = semantic;
        if (opt_mathml) {
          stree.mathml = opt_mathml;
        }
        return stree;
      }
      static fromRoot(semantic, opt_mathml) {
        let root = semantic;
        while (root.parent) {
          root = root.parent;
        }
        const stree = _SemanticTree.fromNode(root);
        if (opt_mathml) {
          stree.mathml = opt_mathml;
        }
        return stree;
      }
      static fromXml(xml) {
        const stree = _SemanticTree.empty();
        if (xml.childNodes[0]) {
          stree.root = semantic_node_js_1.SemanticNode.fromXml(xml.childNodes[0]);
        }
        return stree;
      }
      constructor(mathml) {
        this.mathml = mathml;
        this.parser = new semantic_mathml_js_1.SemanticMathml();
        this.root = this.parser.parse(mathml);
        this.collator = this.parser.getFactory().leafMap.collateMeaning();
        const newDefault = this.collator.newDefault();
        if (newDefault) {
          this.parser = new semantic_mathml_js_1.SemanticMathml();
          this.parser.getFactory().defaultMap = newDefault;
          this.root = this.parser.parse(mathml);
        }
        unitVisitor.visit(this.root, {});
        (0, semantic_annotations_js_1.annotate)(this.root);
      }
      xml(opt_brief) {
        const xml = DomUtil.parseInput("<stree></stree>");
        const xmlRoot = this.root.xml(xml.ownerDocument, opt_brief);
        xml.appendChild(xmlRoot);
        return xml;
      }
      toString(opt_brief) {
        return DomUtil.serializeXml(this.xml(opt_brief));
      }
      formatXml(opt_brief) {
        const xml = this.toString(opt_brief);
        return DomUtil.formatXml(xml);
      }
      displayTree() {
        this.root.displayTree();
      }
      replaceNode(oldNode, newNode) {
        const parent = oldNode.parent;
        if (!parent) {
          this.root = newNode;
          return;
        }
        parent.replaceChild(oldNode, newNode);
      }
      toJson() {
        const json = {};
        json["stree"] = this.root.toJson();
        return json;
      }
    };
    exports2.SemanticTree = SemanticTree;
    var unitVisitor = new semantic_annotator_js_1.SemanticVisitor("general", "unit", (node, _info) => {
      if (SemanticPred.isUnitProduct(node)) {
        node.role = semantic_meaning_js_1.SemanticRole.UNIT;
      }
      return false;
    });
  }
});

// node_modules/speech-rule-engine/js/semantic_tree/semantic.js
var require_semantic = __commonJS({
  "node_modules/speech-rule-engine/js/semantic_tree/semantic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.xmlTree = xmlTree;
    exports2.getTree = getTree;
    exports2.getTreeFromString = getTreeFromString;
    var DomUtil = require_dom_util();
    var semantic_tree_js_1 = require_semantic_tree();
    function xmlTree(mml) {
      return getTree(mml).xml();
    }
    function getTree(mml) {
      return new semantic_tree_js_1.SemanticTree(mml);
    }
    function getTreeFromString(expr) {
      const mml = DomUtil.parseInput(expr);
      return getTree(mml);
    }
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/enrich_case.js
var require_enrich_case = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/enrich_case.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.factory = void 0;
    exports2.getCase = getCase;
    function getCase(node) {
      for (let i = 0, enrich; enrich = exports2.factory[i]; i++) {
        if (enrich.test(node)) {
          return enrich.constr(node);
        }
      }
      return null;
    }
    exports2.factory = [];
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/enrich_mathml.js
var require_enrich_mathml = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/enrich_mathml.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.enrich = enrich;
    exports2.walkTree = walkTree;
    exports2.introduceNewLayer = introduceNewLayer;
    exports2.ascendNewNode = ascendNewNode;
    exports2.addCollapsedAttribute = addCollapsedAttribute;
    exports2.cloneContentNode = cloneContentNode;
    exports2.rewriteMfenced = rewriteMfenced;
    exports2.setOperatorAttribute = setOperatorAttribute;
    exports2.getInnerNode = getInnerNode;
    exports2.collapsePunctuated = collapsePunctuated;
    var debugger_js_1 = require_debugger();
    var DomUtil = require_dom_util();
    var engine_js_1 = require_engine();
    var semantic_attr_js_1 = require_semantic_attr();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_heuristic_factory_js_1 = require_semantic_heuristic_factory();
    var semantic_skeleton_js_1 = require_semantic_skeleton();
    var SemanticUtil = require_semantic_util();
    var semantic_util_js_1 = require_semantic_util();
    var EnrichAttr = require_enrich_attr();
    var enrich_case_js_1 = require_enrich_case();
    var SETTINGS = {
      collapsed: true,
      implicit: true,
      wiki: true
    };
    var IDS = /* @__PURE__ */ new Map();
    function enrich(mml, semantic) {
      IDS.clear();
      const oldMml = DomUtil.cloneNode(mml);
      walkTree(semantic.root);
      if (engine_js_1.Engine.getInstance().structure) {
        mml.setAttribute(EnrichAttr.Attribute.STRUCTURE, semantic_skeleton_js_1.SemanticSkeleton.fromStructure(mml, semantic).toString());
      }
      debugger_js_1.Debugger.getInstance().generateOutput(() => [
        formattedOutput(oldMml, "Original MathML", SETTINGS.wiki),
        formattedOutput(semantic, "Semantic Tree", SETTINGS.wiki),
        formattedOutput(mml, "Semantically enriched MathML", SETTINGS.wiki)
      ]);
      return mml;
    }
    function walkTree(semantic) {
      debugger_js_1.Debugger.getInstance().output("WALKING START: " + semantic.toString());
      const specialCase = (0, enrich_case_js_1.getCase)(semantic);
      let newNode;
      if (specialCase) {
        newNode = specialCase.getMathml();
        debugger_js_1.Debugger.getInstance().output("WALKING END: " + semantic.toString());
        return ascendNewNode(newNode);
      }
      if (semantic.mathml.length === 1) {
        debugger_js_1.Debugger.getInstance().output("Walktree Case 0");
        if (!semantic.childNodes.length) {
          debugger_js_1.Debugger.getInstance().output("Walktree Case 0.1");
          newNode = semantic.mathml[0];
          EnrichAttr.setAttributes(newNode, semantic);
          debugger_js_1.Debugger.getInstance().output("WALKING END: " + semantic.toString());
          return ascendNewNode(newNode);
        }
        const fchild = semantic.childNodes[0];
        if (semantic.childNodes.length === 1 && fchild.type === semantic_meaning_js_1.SemanticType.EMPTY) {
          debugger_js_1.Debugger.getInstance().output("Walktree Case 0.2");
          newNode = semantic.mathml[0];
          EnrichAttr.setAttributes(newNode, semantic);
          newNode.appendChild(walkTree(fchild));
          debugger_js_1.Debugger.getInstance().output("WALKING END: " + semantic.toString());
          return ascendNewNode(newNode);
        }
        semantic.childNodes.forEach((child) => {
          if (!child.mathml.length) {
            child.mathml = [createInvisibleOperator(child)];
          }
        });
      }
      const newContent = semantic.contentNodes.map(cloneContentNode);
      setOperatorAttribute(semantic, newContent);
      const newChildren = semantic.childNodes.map(walkTree);
      const childrenList = semantic_skeleton_js_1.SemanticSkeleton.combineContentChildren(semantic.type, semantic.role, newContent, newChildren);
      newNode = semantic.mathmlTree;
      if (newNode === null) {
        debugger_js_1.Debugger.getInstance().output("Walktree Case 1");
        newNode = introduceNewLayer(childrenList, semantic);
      } else {
        const attached = attachedElement(childrenList);
        debugger_js_1.Debugger.getInstance().output("Walktree Case 2");
        if (attached) {
          debugger_js_1.Debugger.getInstance().output("Walktree Case 2.1");
          newNode = parentNode(attached);
        } else {
          debugger_js_1.Debugger.getInstance().output("Walktree Case 2.2");
          newNode = getInnerNode(newNode);
        }
      }
      newNode = rewriteMfenced(newNode);
      mergeChildren(newNode, childrenList, semantic);
      if (!IDS.has(semantic.id)) {
        IDS.set(semantic.id, true);
        EnrichAttr.setAttributes(newNode, semantic);
      }
      debugger_js_1.Debugger.getInstance().output("WALKING END: " + semantic.toString());
      return ascendNewNode(newNode);
    }
    function introduceNewLayer(children, semantic) {
      const lca = mathmlLca(children);
      let newNode = lca.node;
      const info = lca.type;
      if (info !== lcaType.VALID || !SemanticUtil.hasEmptyTag(newNode) || !newNode.parentNode && semantic.parent) {
        debugger_js_1.Debugger.getInstance().output("Walktree Case 1.1");
        newNode = EnrichAttr.addMrow();
        if (info === lcaType.PRUNED) {
          debugger_js_1.Debugger.getInstance().output("Walktree Case 1.1.0");
          newNode = introduceLayerAboveLca(newNode, lca.node, children);
        } else if (children[0]) {
          debugger_js_1.Debugger.getInstance().output("Walktree Case 1.1.1");
          const node = attachedElement(children);
          if (node) {
            const oldChildren = childrenSubset(parentNode(node), children);
            DomUtil.replaceNode(node, newNode);
            oldChildren.forEach(function(x) {
              newNode.appendChild(x);
            });
          } else {
            moveSemanticAttributes(newNode, children[0]);
            newNode = children[0];
          }
        }
      }
      if (!semantic.mathmlTree) {
        semantic.mathmlTree = newNode;
      }
      return newNode;
    }
    function introduceLayerAboveLca(mrow, lca, children) {
      let innerNode = descendNode(lca);
      if (SemanticUtil.hasMathTag(innerNode)) {
        debugger_js_1.Debugger.getInstance().output("Walktree Case 1.1.0.0");
        moveSemanticAttributes(innerNode, mrow);
        DomUtil.toArray(innerNode.childNodes).forEach(function(x) {
          mrow.appendChild(x);
        });
        const auxNode = mrow;
        mrow = innerNode;
        innerNode = auxNode;
      }
      const index = children.indexOf(lca);
      children[index] = innerNode;
      DomUtil.replaceNode(innerNode, mrow);
      mrow.appendChild(innerNode);
      children.forEach(function(x) {
        mrow.appendChild(x);
      });
      return mrow;
    }
    function moveSemanticAttributes(oldNode, newNode) {
      for (const attr of EnrichAttr.EnrichAttributes) {
        if (oldNode.hasAttribute(attr)) {
          newNode.setAttribute(attr, oldNode.getAttribute(attr));
          oldNode.removeAttribute(attr);
        }
      }
    }
    function childrenSubset(node, newChildren) {
      const oldChildren = DomUtil.toArray(node.childNodes);
      let leftIndex = Infinity;
      let rightIndex = -Infinity;
      newChildren.forEach(function(child) {
        const index = oldChildren.indexOf(child);
        if (index !== -1) {
          leftIndex = Math.min(leftIndex, index);
          rightIndex = Math.max(rightIndex, index);
        }
      });
      return oldChildren.slice(leftIndex, rightIndex + 1);
    }
    function collateChildNodes(node, children, semantic) {
      const oldChildren = [];
      let newChildren = DomUtil.toArray(node.childNodes);
      let notFirst = false;
      while (newChildren.length) {
        const child = newChildren.shift();
        if (child.hasAttribute(EnrichAttr.Attribute.TYPE)) {
          oldChildren.push(child);
          continue;
        }
        const collect = collectChildNodes(child, children);
        if (collect.length === 0) {
          continue;
        }
        if (collect.length === 1) {
          oldChildren.push(child);
          continue;
        }
        if (notFirst) {
          child.setAttribute("AuxiliaryImplicit", true);
        } else {
          notFirst = true;
        }
        newChildren = collect.concat(newChildren);
      }
      const rear = [];
      const semChildren = semantic.childNodes.map(function(x) {
        return x.mathmlTree;
      });
      while (semChildren.length) {
        const schild = semChildren.pop();
        if (!schild) {
          continue;
        }
        if (oldChildren.indexOf(schild) !== -1) {
          break;
        }
        if (children.indexOf(schild) !== -1) {
          rear.unshift(schild);
        }
      }
      return oldChildren.concat(rear);
    }
    function collectChildNodes(node, children) {
      const collect = [];
      let newChildren = DomUtil.toArray(node.childNodes);
      while (newChildren.length) {
        const child = newChildren.shift();
        if (child.nodeType !== DomUtil.NodeType.ELEMENT_NODE) {
          continue;
        }
        if (child.hasAttribute(EnrichAttr.Attribute.TYPE) || children.indexOf(child) !== -1) {
          collect.push(child);
          continue;
        }
        newChildren = DomUtil.toArray(child.childNodes).concat(newChildren);
      }
      return collect;
    }
    function mergeChildren(node, newChildren, semantic) {
      if (!newChildren.length)
        return;
      if (newChildren.length === 1 && node === newChildren[0])
        return;
      const oldChildren = semantic.role === semantic_meaning_js_1.SemanticRole.IMPLICIT && semantic_heuristic_factory_js_1.SemanticHeuristics.flags.combine_juxtaposition ? collateChildNodes(node, newChildren, semantic) : DomUtil.toArray(node.childNodes);
      if (!oldChildren.length) {
        newChildren.forEach(function(x) {
          node.appendChild(x);
        });
        return;
      }
      let oldCounter = 0;
      while (newChildren.length) {
        const newChild = newChildren[0];
        if (oldChildren[oldCounter] === newChild || functionApplication(oldChildren[oldCounter], newChild)) {
          newChildren.shift();
          oldCounter++;
          continue;
        }
        if (oldChildren[oldCounter] && newChildren.indexOf(oldChildren[oldCounter]) === -1) {
          oldCounter++;
          continue;
        }
        if (isDescendant(newChild, node)) {
          newChildren.shift();
          continue;
        }
        const oldChild = oldChildren[oldCounter];
        if (!oldChild) {
          if (newChild.parentNode) {
            node = parentNode(newChild);
            newChildren.shift();
            continue;
          }
          const nextChild = newChildren[1];
          if (nextChild && nextChild.parentNode) {
            node = parentNode(nextChild);
            node.insertBefore(newChild, nextChild);
            newChildren.shift();
            newChildren.shift();
            continue;
          }
          node.insertBefore(newChild, null);
          newChildren.shift();
          continue;
        }
        insertNewChild(node, oldChild, newChild);
        newChildren.shift();
      }
    }
    function insertNewChild(node, oldChild, newChild) {
      let parent = oldChild;
      let next = parentNode(parent);
      while (next && next.firstChild === parent && !parent.hasAttribute("AuxiliaryImplicit") && next !== node) {
        parent = next;
        next = parentNode(parent);
      }
      if (next) {
        next.insertBefore(newChild, parent);
        parent.removeAttribute("AuxiliaryImplicit");
      }
    }
    function isDescendant(child, node) {
      if (!child) {
        return false;
      }
      do {
        child = parentNode(child);
        if (child === node) {
          return true;
        }
      } while (child);
      return false;
    }
    function functionApplication(oldNode, newNode) {
      const appl = semantic_attr_js_1.NamedSymbol.functionApplication;
      if (oldNode && newNode && oldNode.textContent && newNode.textContent && oldNode.textContent === appl && newNode.textContent === appl && newNode.getAttribute(EnrichAttr.Attribute.ADDED) === "true") {
        for (let i = 0, attr; attr = oldNode.attributes[i]; i++) {
          if (!newNode.hasAttribute(attr.nodeName)) {
            newNode.setAttribute(attr.nodeName, attr.nodeValue);
          }
        }
        DomUtil.replaceNode(oldNode, newNode);
        return true;
      }
      return false;
    }
    var lcaType;
    (function(lcaType2) {
      lcaType2["VALID"] = "valid";
      lcaType2["INVALID"] = "invalid";
      lcaType2["PRUNED"] = "pruned";
    })(lcaType || (lcaType = {}));
    function mathmlLca(children) {
      const leftMost = attachedElement(children);
      if (!leftMost) {
        return { type: lcaType.INVALID, node: null };
      }
      const rightMost = attachedElement(children.slice().reverse());
      if (leftMost === rightMost) {
        return { type: lcaType.VALID, node: leftMost };
      }
      const leftPath = pathToRoot(leftMost);
      const newLeftPath = prunePath(leftPath, children);
      const rightPath = pathToRoot(rightMost, function(x) {
        return newLeftPath.indexOf(x) !== -1;
      });
      const lca = rightPath[0];
      const lIndex = newLeftPath.indexOf(lca);
      if (lIndex === -1) {
        return { type: lcaType.INVALID, node: null };
      }
      return {
        type: newLeftPath.length !== leftPath.length ? lcaType.PRUNED : validLca(newLeftPath[lIndex + 1], rightPath[1]) ? lcaType.VALID : lcaType.INVALID,
        node: lca
      };
    }
    function prunePath(path, children) {
      let i = 0;
      while (path[i] && children.indexOf(path[i]) === -1) {
        i++;
      }
      return path.slice(0, i + 1);
    }
    function attachedElement(nodes) {
      let count = 0;
      let attached = null;
      while (!attached && count < nodes.length) {
        if (nodes[count].parentNode) {
          attached = nodes[count];
        }
        count++;
      }
      return attached;
    }
    function pathToRoot(node, opt_test) {
      const test = opt_test || ((_x) => false);
      const path = [node];
      while (!test(node) && !SemanticUtil.hasMathTag(node) && node.parentNode) {
        node = parentNode(node);
        path.unshift(node);
      }
      return path;
    }
    function validLca(left, right) {
      return !!(left && right && !left.previousSibling && !right.nextSibling);
    }
    function ascendNewNode(newNode) {
      while (!SemanticUtil.hasMathTag(newNode) && unitChild(newNode)) {
        newNode = parentNode(newNode);
      }
      return newNode;
    }
    function descendNode(node) {
      const children = DomUtil.toArray(node.childNodes);
      if (!children) {
        return node;
      }
      const remainder = children.filter(function(child) {
        return child.nodeType === DomUtil.NodeType.ELEMENT_NODE && !SemanticUtil.hasIgnoreTag(child);
      });
      if (remainder.length === 1 && SemanticUtil.hasEmptyTag(remainder[0]) && !remainder[0].hasAttribute(EnrichAttr.Attribute.TYPE)) {
        return descendNode(remainder[0]);
      }
      return node;
    }
    function unitChild(node) {
      const parent = parentNode(node);
      if (!parent || !SemanticUtil.hasEmptyTag(parent)) {
        return false;
      }
      return DomUtil.toArray(parent.childNodes).every(function(child) {
        return child === node || isIgnorable(child);
      });
    }
    function isIgnorable(node) {
      if (node.nodeType !== DomUtil.NodeType.ELEMENT_NODE) {
        return true;
      }
      if (!node || SemanticUtil.hasIgnoreTag(node)) {
        return true;
      }
      const children = DomUtil.toArray(node.childNodes);
      if (!SemanticUtil.hasEmptyTag(node) && children.length || SemanticUtil.hasDisplayTag(node) || node.hasAttribute(EnrichAttr.Attribute.TYPE) || SemanticUtil.isOrphanedGlyph(node)) {
        return false;
      }
      return DomUtil.toArray(node.childNodes).every(isIgnorable);
    }
    function parentNode(element) {
      return element.parentNode;
    }
    function addCollapsedAttribute(node, collapsed) {
      const skeleton = new semantic_skeleton_js_1.SemanticSkeleton(collapsed);
      node.setAttribute(EnrichAttr.Attribute.COLLAPSED, skeleton.toString());
    }
    function cloneContentNode(content) {
      if (content.mathml.length) {
        return walkTree(content);
      }
      const clone = SETTINGS.implicit ? createInvisibleOperator(content) : EnrichAttr.addMrow();
      content.mathml = [clone];
      return clone;
    }
    function rewriteMfenced(mml) {
      if (DomUtil.tagName(mml) !== semantic_util_js_1.MMLTAGS.MFENCED) {
        return mml;
      }
      const newNode = EnrichAttr.addMrow();
      for (let i = 0, attr; attr = mml.attributes[i]; i++) {
        if (["open", "close", "separators"].indexOf(attr.name) === -1) {
          newNode.setAttribute(attr.name, attr.value);
        }
      }
      DomUtil.toArray(mml.childNodes).forEach(function(x) {
        newNode.appendChild(x);
      });
      DomUtil.replaceNode(mml, newNode);
      return newNode;
    }
    function createInvisibleOperator(operator) {
      const moNode = DomUtil.createElement("mo");
      const text = DomUtil.createTextNode(operator.textContent);
      moNode.appendChild(text);
      EnrichAttr.setAttributes(moNode, operator);
      moNode.setAttribute(EnrichAttr.Attribute.ADDED, "true");
      return moNode;
    }
    function setOperatorAttribute(semantic, content) {
      const operator = semantic.type + (semantic.textContent ? "," + semantic.textContent : "");
      content.forEach(function(c) {
        getInnerNode(c).setAttribute(EnrichAttr.Attribute.OPERATOR, operator);
      });
    }
    function getInnerNode(node) {
      const children = DomUtil.toArray(node.childNodes);
      if (!children) {
        return node;
      }
      const remainder = children.filter(function(child) {
        return !isIgnorable(child);
      });
      const result = [];
      for (let i = 0, remain; remain = remainder[i]; i++) {
        if (SemanticUtil.hasEmptyTag(remain) && remain.getAttribute(EnrichAttr.Attribute.TYPE) !== semantic_meaning_js_1.SemanticType.PUNCTUATION) {
          const nextInner = getInnerNode(remain);
          if (nextInner && nextInner !== remain) {
            result.push(nextInner);
          }
        } else {
          result.push(remain);
        }
      }
      if (result.length === 1) {
        return result[0];
      }
      return node;
    }
    function formattedOutput(element, name, wiki = false) {
      const output = EnrichAttr.removeAttributePrefix(DomUtil.formatXml(element.toString()));
      return wiki ? name + ":\n```html\n" + output + "\n```\n" : output;
    }
    function collapsePunctuated(semantic, opt_children) {
      const optional = !!opt_children;
      const children = opt_children || [];
      const parent = semantic.parent;
      const contentIds = semantic.contentNodes.map(function(x) {
        return x.id;
      });
      contentIds.unshift("c");
      const childIds = [semantic.id, contentIds];
      for (let i = 0, child; child = semantic.childNodes[i]; i++) {
        const mmlChild = walkTree(child);
        children.push(mmlChild);
        const innerNode = getInnerNode(mmlChild);
        if (parent && !optional) {
          innerNode.setAttribute(EnrichAttr.Attribute.PARENT, parent.id.toString());
        }
        childIds.push(child.id);
      }
      return childIds;
    }
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/abstract_enrich_case.js
var require_abstract_enrich_case = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/abstract_enrich_case.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractEnrichCase = void 0;
    var AbstractEnrichCase = class {
      constructor(semantic) {
        this.semantic = semantic;
      }
    };
    exports2.AbstractEnrichCase = AbstractEnrichCase;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_binomial.js
var require_case_binomial = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_binomial.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseBinomial = void 0;
    var DomUtil = require_dom_util();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var abstract_enrich_case_js_1 = require_abstract_enrich_case();
    var enrich_mathml_js_1 = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var CaseBinomial = class extends abstract_enrich_case_js_1.AbstractEnrichCase {
      static test(semantic) {
        return !semantic.mathmlTree && semantic.type === semantic_meaning_js_1.SemanticType.LINE && semantic.role === semantic_meaning_js_1.SemanticRole.BINOMIAL;
      }
      constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
      }
      getMathml() {
        if (!this.semantic.childNodes.length) {
          return this.mml;
        }
        const child = this.semantic.childNodes[0];
        this.mml = (0, enrich_mathml_js_1.walkTree)(child);
        if (this.mml.hasAttribute(enrich_attr_js_1.Attribute.TYPE)) {
          const mrow = (0, enrich_attr_js_1.addMrow)();
          DomUtil.replaceNode(this.mml, mrow);
          mrow.appendChild(this.mml);
          this.mml = mrow;
        }
        (0, enrich_attr_js_1.setAttributes)(this.mml, this.semantic);
        return this.mml;
      }
    };
    exports2.CaseBinomial = CaseBinomial;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_double_script.js
var require_case_double_script = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_double_script.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseDoubleScript = void 0;
    var DomUtil = require_dom_util();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_util_js_1 = require_semantic_util();
    var abstract_enrich_case_js_1 = require_abstract_enrich_case();
    var EnrichMathml = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var CaseDoubleScript = class extends abstract_enrich_case_js_1.AbstractEnrichCase {
      static test(semantic) {
        if (!semantic.mathmlTree || !semantic.childNodes.length) {
          return false;
        }
        const mmlTag = DomUtil.tagName(semantic.mathmlTree);
        const role = semantic.childNodes[0].role;
        return mmlTag === semantic_util_js_1.MMLTAGS.MSUBSUP && role === semantic_meaning_js_1.SemanticRole.SUBSUP || mmlTag === semantic_util_js_1.MMLTAGS.MUNDEROVER && role === semantic_meaning_js_1.SemanticRole.UNDEROVER;
      }
      constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
      }
      getMathml() {
        const ignore = this.semantic.childNodes[0];
        const baseSem = ignore.childNodes[0];
        const supSem = this.semantic.childNodes[1];
        const subSem = ignore.childNodes[1];
        const supMml = EnrichMathml.walkTree(supSem);
        const baseMml = EnrichMathml.walkTree(baseSem);
        const subMml = EnrichMathml.walkTree(subSem);
        (0, enrich_attr_js_1.setAttributes)(this.mml, this.semantic);
        this.mml.setAttribute(enrich_attr_js_1.Attribute.CHILDREN, (0, enrich_attr_js_1.makeIdList)([baseSem, subSem, supSem]));
        [baseMml, subMml, supMml].forEach((child) => EnrichMathml.getInnerNode(child).setAttribute(enrich_attr_js_1.Attribute.PARENT, this.mml.getAttribute(enrich_attr_js_1.Attribute.ID)));
        this.mml.setAttribute(enrich_attr_js_1.Attribute.TYPE, ignore.role);
        EnrichMathml.addCollapsedAttribute(this.mml, [
          this.semantic.id,
          [ignore.id, baseSem.id, subSem.id],
          supSem.id
        ]);
        return this.mml;
      }
    };
    exports2.CaseDoubleScript = CaseDoubleScript;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_multiindex.js
var require_case_multiindex = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_multiindex.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseMultiindex = void 0;
    var DomUtil = require_dom_util();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_util_js_1 = require_semantic_util();
    var abstract_enrich_case_js_1 = require_abstract_enrich_case();
    var EnrichMathml = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var CaseMultiindex = class _CaseMultiindex extends abstract_enrich_case_js_1.AbstractEnrichCase {
      static multiscriptIndex(index) {
        if (index.type === semantic_meaning_js_1.SemanticType.PUNCTUATED && index.contentNodes[0].role === semantic_meaning_js_1.SemanticRole.DUMMY) {
          return EnrichMathml.collapsePunctuated(index);
        }
        EnrichMathml.walkTree(index);
        return index.id;
      }
      static createNone_(semantic) {
        const newNode = DomUtil.createElement("none");
        if (semantic) {
          (0, enrich_attr_js_1.setAttributes)(newNode, semantic);
        }
        newNode.setAttribute(enrich_attr_js_1.Attribute.ADDED, "true");
        return newNode;
      }
      constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
      }
      completeMultiscript(rightIndices, leftIndices) {
        const children = DomUtil.toArray(this.mml.childNodes).slice(1);
        let childCounter = 0;
        const completeIndices = (indices) => {
          for (const index of indices) {
            const child = children[childCounter];
            if (child && index === parseInt(child.getAttribute(enrich_attr_js_1.Attribute.ID))) {
              child.setAttribute(enrich_attr_js_1.Attribute.PARENT, this.semantic.id.toString());
              childCounter++;
            } else if (!child || index !== parseInt(EnrichMathml.getInnerNode(child).getAttribute(enrich_attr_js_1.Attribute.ID))) {
              const query = this.semantic.querySelectorAll((x) => x.id === index);
              this.mml.insertBefore(_CaseMultiindex.createNone_(query[0]), child || null);
            } else {
              EnrichMathml.getInnerNode(child).setAttribute(enrich_attr_js_1.Attribute.PARENT, this.semantic.id.toString());
              childCounter++;
            }
          }
        };
        completeIndices(rightIndices);
        if (children[childCounter] && DomUtil.tagName(children[childCounter]) !== semantic_util_js_1.MMLTAGS.MPRESCRIPTS) {
          this.mml.insertBefore(children[childCounter], DomUtil.createElement("mprescripts"));
        } else {
          childCounter++;
        }
        completeIndices(leftIndices);
      }
    };
    exports2.CaseMultiindex = CaseMultiindex;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_multiscripts.js
var require_case_multiscripts = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_multiscripts.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseMultiscripts = void 0;
    var DomUtil = require_dom_util();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_skeleton_js_1 = require_semantic_skeleton();
    var semantic_util_js_1 = require_semantic_util();
    var case_multiindex_js_1 = require_case_multiindex();
    var EnrichMathml = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var CaseMultiscripts = class extends case_multiindex_js_1.CaseMultiindex {
      static test(semantic) {
        if (!semantic.mathmlTree) {
          return false;
        }
        const mmlTag = DomUtil.tagName(semantic.mathmlTree);
        return mmlTag === semantic_util_js_1.MMLTAGS.MMULTISCRIPTS && (semantic.type === semantic_meaning_js_1.SemanticType.SUPERSCRIPT || semantic.type === semantic_meaning_js_1.SemanticType.SUBSCRIPT);
      }
      constructor(semantic) {
        super(semantic);
      }
      getMathml() {
        (0, enrich_attr_js_1.setAttributes)(this.mml, this.semantic);
        let baseSem, rsup, rsub;
        if (this.semantic.childNodes[0] && this.semantic.childNodes[0].role === semantic_meaning_js_1.SemanticRole.SUBSUP) {
          const ignore = this.semantic.childNodes[0];
          baseSem = ignore.childNodes[0];
          rsup = case_multiindex_js_1.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1]);
          rsub = case_multiindex_js_1.CaseMultiindex.multiscriptIndex(ignore.childNodes[1]);
          const collapsed = [this.semantic.id, [ignore.id, baseSem.id, rsub], rsup];
          EnrichMathml.addCollapsedAttribute(this.mml, collapsed);
          this.mml.setAttribute(enrich_attr_js_1.Attribute.TYPE, ignore.role);
          this.completeMultiscript(semantic_skeleton_js_1.SemanticSkeleton.interleaveIds(rsub, rsup), []);
        } else {
          baseSem = this.semantic.childNodes[0];
          rsup = case_multiindex_js_1.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1]);
          const collapsed = [this.semantic.id, baseSem.id, rsup];
          EnrichMathml.addCollapsedAttribute(this.mml, collapsed);
        }
        const childIds = semantic_skeleton_js_1.SemanticSkeleton.collapsedLeafs(rsub || [], rsup);
        const base = EnrichMathml.walkTree(baseSem);
        EnrichMathml.getInnerNode(base).setAttribute(enrich_attr_js_1.Attribute.PARENT, this.semantic.id.toString());
        childIds.unshift(baseSem.id);
        this.mml.setAttribute(enrich_attr_js_1.Attribute.CHILDREN, childIds.join(","));
        return this.mml;
      }
    };
    exports2.CaseMultiscripts = CaseMultiscripts;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_tensor.js
var require_case_tensor = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_tensor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseTensor = void 0;
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_skeleton_js_1 = require_semantic_skeleton();
    var case_multiindex_js_1 = require_case_multiindex();
    var EnrichMathml = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var CaseTensor = class extends case_multiindex_js_1.CaseMultiindex {
      static test(semantic) {
        return !!semantic.mathmlTree && semantic.type === semantic_meaning_js_1.SemanticType.TENSOR;
      }
      constructor(semantic) {
        super(semantic);
      }
      getMathml() {
        EnrichMathml.walkTree(this.semantic.childNodes[0]);
        const lsub = case_multiindex_js_1.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1]);
        const lsup = case_multiindex_js_1.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[2]);
        const rsub = case_multiindex_js_1.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[3]);
        const rsup = case_multiindex_js_1.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[4]);
        (0, enrich_attr_js_1.setAttributes)(this.mml, this.semantic);
        const collapsed = [
          this.semantic.id,
          this.semantic.childNodes[0].id,
          lsub,
          lsup,
          rsub,
          rsup
        ];
        EnrichMathml.addCollapsedAttribute(this.mml, collapsed);
        const childIds = semantic_skeleton_js_1.SemanticSkeleton.collapsedLeafs(lsub, lsup, rsub, rsup);
        childIds.unshift(this.semantic.childNodes[0].id);
        this.mml.setAttribute(enrich_attr_js_1.Attribute.CHILDREN, childIds.join(","));
        this.completeMultiscript(semantic_skeleton_js_1.SemanticSkeleton.interleaveIds(rsub, rsup), semantic_skeleton_js_1.SemanticSkeleton.interleaveIds(lsub, lsup));
        return this.mml;
      }
    };
    exports2.CaseTensor = CaseTensor;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_embellished.js
var require_case_embellished = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_embellished.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseEmbellished = void 0;
    var DomUtil = require_dom_util();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_node_js_1 = require_semantic_node();
    var semantic_util_js_1 = require_semantic_util();
    var abstract_enrich_case_js_1 = require_abstract_enrich_case();
    var case_double_script_js_1 = require_case_double_script();
    var case_multiscripts_js_1 = require_case_multiscripts();
    var case_tensor_js_1 = require_case_tensor();
    var EnrichMathml = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var CaseEmbellished = class _CaseEmbellished extends abstract_enrich_case_js_1.AbstractEnrichCase {
      static test(semantic) {
        return !!(semantic.mathmlTree && semantic.fencePointer && !semantic.mathmlTree.getAttribute("data-semantic-type"));
      }
      static makeEmptyNode_(id) {
        const mrow = (0, enrich_attr_js_1.addMrow)();
        const empty = new semantic_node_js_1.SemanticNode(id);
        empty.type = semantic_meaning_js_1.SemanticType.EMPTY;
        empty.mathmlTree = mrow;
        return empty;
      }
      static fencedMap_(fence, ids) {
        ids[fence.id] = fence.mathmlTree;
        if (!fence.embellished) {
          return;
        }
        _CaseEmbellished.fencedMap_(fence.childNodes[0], ids);
      }
      constructor(semantic) {
        super(semantic);
        this.fenced = null;
        this.fencedMml = null;
        this.fencedMmlNodes = [];
        this.ofence = null;
        this.ofenceMml = null;
        this.ofenceMap = {};
        this.cfence = null;
        this.cfenceMml = null;
        this.cfenceMap = {};
        this.parentCleanup = [];
      }
      getMathml() {
        this.getFenced_();
        this.fencedMml = EnrichMathml.walkTree(this.fenced);
        this.getFencesMml_();
        if (this.fenced.type === semantic_meaning_js_1.SemanticType.EMPTY && !this.fencedMml.parentNode) {
          this.fencedMml.setAttribute(enrich_attr_js_1.Attribute.ADDED, "true");
          this.cfenceMml.parentNode.insertBefore(this.fencedMml, this.cfenceMml);
        }
        this.getFencedMml_();
        const rewrite = this.rewrite_();
        return rewrite;
      }
      fencedElement(node) {
        return node.type === semantic_meaning_js_1.SemanticType.FENCED || node.type === semantic_meaning_js_1.SemanticType.MATRIX || node.type === semantic_meaning_js_1.SemanticType.VECTOR;
      }
      getFenced_() {
        let currentNode = this.semantic;
        while (!this.fencedElement(currentNode)) {
          currentNode = currentNode.childNodes[0];
        }
        this.fenced = currentNode.childNodes[0];
        this.ofence = currentNode.contentNodes[0];
        this.cfence = currentNode.contentNodes[1];
        _CaseEmbellished.fencedMap_(this.ofence, this.ofenceMap);
        _CaseEmbellished.fencedMap_(this.cfence, this.cfenceMap);
      }
      getFencedMml_() {
        let sibling = this.ofenceMml.nextSibling;
        sibling = sibling === this.fencedMml ? sibling : this.fencedMml;
        while (sibling && sibling !== this.cfenceMml) {
          this.fencedMmlNodes.push(sibling);
          sibling = sibling.nextSibling;
        }
      }
      getFencesMml_() {
        let currentNode = this.semantic;
        const ofenceIds = Object.keys(this.ofenceMap);
        const cfenceIds = Object.keys(this.cfenceMap);
        while ((!this.ofenceMml || !this.cfenceMml) && currentNode !== this.fenced) {
          if (ofenceIds.indexOf(currentNode.fencePointer) !== -1 && !this.ofenceMml) {
            this.ofenceMml = currentNode.mathmlTree;
          }
          if (cfenceIds.indexOf(currentNode.fencePointer) !== -1 && !this.cfenceMml) {
            this.cfenceMml = currentNode.mathmlTree;
          }
          currentNode = currentNode.childNodes[0];
        }
        if (!this.ofenceMml) {
          this.ofenceMml = this.ofence.mathmlTree;
        }
        if (!this.cfenceMml) {
          this.cfenceMml = this.cfence.mathmlTree;
        }
        if (this.ofenceMml) {
          this.ofenceMml = EnrichMathml.ascendNewNode(this.ofenceMml);
        }
        if (this.cfenceMml) {
          this.cfenceMml = EnrichMathml.ascendNewNode(this.cfenceMml);
        }
      }
      rewrite_() {
        let currentNode = this.semantic;
        let result = null;
        const newNode = this.introduceNewLayer_();
        (0, enrich_attr_js_1.setAttributes)(newNode, this.fenced.parent);
        while (!this.fencedElement(currentNode)) {
          const mml = currentNode.mathmlTree;
          const specialCase = this.specialCase_(currentNode, mml);
          if (specialCase) {
            currentNode = specialCase;
          } else {
            (0, enrich_attr_js_1.setAttributes)(mml, currentNode);
            const mmlChildren = [];
            for (let i = 1, child; child = currentNode.childNodes[i]; i++) {
              mmlChildren.push(EnrichMathml.walkTree(child));
            }
            currentNode = currentNode.childNodes[0];
          }
          const dummy = DomUtil.createElement("dummy");
          const saveChild = mml.childNodes[0];
          DomUtil.replaceNode(mml, dummy);
          DomUtil.replaceNode(newNode, mml);
          DomUtil.replaceNode(mml.childNodes[0], newNode);
          DomUtil.replaceNode(dummy, saveChild);
          if (!result) {
            result = mml;
          }
        }
        EnrichMathml.walkTree(this.ofence);
        EnrichMathml.walkTree(this.cfence);
        this.cleanupParents_();
        return result || newNode;
      }
      specialCase_(semantic, mml) {
        const mmlTag = DomUtil.tagName(mml);
        let parent = null;
        let caller;
        if (mmlTag === semantic_util_js_1.MMLTAGS.MSUBSUP) {
          parent = semantic.childNodes[0];
          caller = case_double_script_js_1.CaseDoubleScript;
        } else if (mmlTag === semantic_util_js_1.MMLTAGS.MMULTISCRIPTS) {
          if (semantic.type === semantic_meaning_js_1.SemanticType.SUPERSCRIPT || semantic.type === semantic_meaning_js_1.SemanticType.SUBSCRIPT) {
            caller = case_multiscripts_js_1.CaseMultiscripts;
          } else if (semantic.type === semantic_meaning_js_1.SemanticType.TENSOR) {
            caller = case_tensor_js_1.CaseTensor;
          }
          if (caller && semantic.childNodes[0] && semantic.childNodes[0].role === semantic_meaning_js_1.SemanticRole.SUBSUP) {
            parent = semantic.childNodes[0];
          } else {
            parent = semantic;
          }
        }
        if (!parent) {
          return null;
        }
        const base = parent.childNodes[0];
        const empty = _CaseEmbellished.makeEmptyNode_(base.id);
        parent.childNodes[0] = empty;
        mml = new caller(semantic).getMathml();
        parent.childNodes[0] = base;
        this.parentCleanup.push(mml);
        return parent.childNodes[0];
      }
      introduceNewLayer_() {
        const fullOfence = this.fullFence(this.ofenceMml);
        const fullCfence = this.fullFence(this.cfenceMml);
        let newNode = (0, enrich_attr_js_1.addMrow)();
        DomUtil.replaceNode(this.fencedMml, newNode);
        this.fencedMmlNodes.forEach((node) => newNode.appendChild(node));
        newNode.insertBefore(fullOfence, this.fencedMml);
        newNode.appendChild(fullCfence);
        if (!newNode.parentNode) {
          const mrow = (0, enrich_attr_js_1.addMrow)();
          while (newNode.childNodes.length > 0) {
            mrow.appendChild(newNode.childNodes[0]);
          }
          newNode.appendChild(mrow);
          newNode = mrow;
        }
        return newNode;
      }
      fullFence(fence) {
        const parent = this.fencedMml.parentNode;
        let currentFence = fence;
        while (currentFence.parentNode && currentFence.parentNode !== parent) {
          currentFence = currentFence.parentNode;
        }
        return currentFence;
      }
      cleanupParents_() {
        this.parentCleanup.forEach(function(x) {
          const parent = x.childNodes[1].getAttribute(enrich_attr_js_1.Attribute.PARENT);
          x.childNodes[0].setAttribute(enrich_attr_js_1.Attribute.PARENT, parent);
        });
      }
    };
    exports2.CaseEmbellished = CaseEmbellished;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_empheq.js
var require_case_empheq = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_empheq.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseEmpheq = void 0;
    var semantic_util_js_1 = require_semantic_util();
    var abstract_enrich_case_js_1 = require_abstract_enrich_case();
    var EnrichMathml = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var DomUtil = require_dom_util();
    var CaseEmpheq = class extends abstract_enrich_case_js_1.AbstractEnrichCase {
      static test(semantic) {
        return !!semantic.mathmlTree && semantic.hasAnnotation("Emph", "top");
      }
      constructor(semantic) {
        super(semantic);
        this.mrows = [];
        this.mml = semantic.mathmlTree;
      }
      getMathml() {
        this.recurseToTable(this.semantic);
        if (this.mrows.length) {
          const newRow = (0, enrich_attr_js_1.addMrow)();
          const parent = this.mml.parentNode;
          parent.insertBefore(newRow, this.mml);
          for (const mrow of this.mrows) {
            newRow.appendChild(mrow);
          }
          newRow.appendChild(this.mml);
        }
        return this.mml;
      }
      recurseToTable(node) {
        var _a, _b;
        if (!(node.hasAnnotation("Emph", "top") || node.hasAnnotation("Emph", "fence")) && (node.hasAnnotation("Emph", "left") || node.hasAnnotation("Emph", "right"))) {
          EnrichMathml.walkTree(node);
          return;
        }
        if (!node.mathmlTree || DomUtil.tagName(node.mathmlTree) === semantic_util_js_1.MMLTAGS.MTABLE && ((_a = node.annotation["Emph"]) === null || _a === void 0 ? void 0 : _a.length) && node.annotation["Emph"][0] !== "table") {
          const newNode = (0, enrich_attr_js_1.addMrow)();
          (0, enrich_attr_js_1.setAttributes)(newNode, node);
          this.mrows.unshift(newNode);
        } else {
          if (DomUtil.tagName(node.mathmlTree) === semantic_util_js_1.MMLTAGS.MTABLE && ((_b = node.annotation["Emph"]) === null || _b === void 0 ? void 0 : _b.length) && node.annotation["Emph"][0] === "table") {
            this.finalizeTable(node);
            return;
          }
          (0, enrich_attr_js_1.setAttributes)(node.mathmlTree, node);
        }
        node.childNodes.forEach(this.recurseToTable.bind(this));
        if (node.textContent || node.type === "punctuated") {
          const newContent = node.contentNodes.map((x) => {
            const newNode = EnrichMathml.cloneContentNode(x);
            if (newNode.hasAttribute("data-semantic-added")) {
              this.mrows.unshift(newNode);
            } else {
              this.recurseToTable(x);
            }
            return newNode;
          });
          EnrichMathml.setOperatorAttribute(node, newContent);
          return;
        }
        node.contentNodes.forEach(this.recurseToTable.bind(this));
      }
      finalizeTable(node) {
        (0, enrich_attr_js_1.setAttributes)(node.mathmlTree, node);
        node.contentNodes.forEach((x) => {
          EnrichMathml.walkTree(x);
        });
        node.childNodes.forEach((x) => {
          EnrichMathml.walkTree(x);
        });
      }
    };
    exports2.CaseEmpheq = CaseEmpheq;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_limit.js
var require_case_limit = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_limit.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseLimit = void 0;
    var DomUtil = require_dom_util();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_util_js_1 = require_semantic_util();
    var abstract_enrich_case_js_1 = require_abstract_enrich_case();
    var EnrichMathml = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var CaseLimit = class _CaseLimit extends abstract_enrich_case_js_1.AbstractEnrichCase {
      static test(semantic) {
        if (!semantic.mathmlTree || !semantic.childNodes.length) {
          return false;
        }
        const mmlTag = DomUtil.tagName(semantic.mathmlTree);
        const type = semantic.type;
        return (type === semantic_meaning_js_1.SemanticType.LIMUPPER || type === semantic_meaning_js_1.SemanticType.LIMLOWER) && (mmlTag === semantic_util_js_1.MMLTAGS.MSUBSUP || mmlTag === semantic_util_js_1.MMLTAGS.MUNDEROVER) || type === semantic_meaning_js_1.SemanticType.LIMBOTH && (mmlTag === semantic_util_js_1.MMLTAGS.MSUB || mmlTag === semantic_util_js_1.MMLTAGS.MUNDER || mmlTag === semantic_util_js_1.MMLTAGS.MSUP || mmlTag === semantic_util_js_1.MMLTAGS.MOVER);
      }
      static walkTree_(node) {
        if (node) {
          EnrichMathml.walkTree(node);
        }
      }
      constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
      }
      getMathml() {
        const children = this.semantic.childNodes;
        if (this.semantic.type !== semantic_meaning_js_1.SemanticType.LIMBOTH && this.mml.childNodes.length >= 3) {
          this.mml = EnrichMathml.introduceNewLayer([this.mml], this.semantic);
        }
        (0, enrich_attr_js_1.setAttributes)(this.mml, this.semantic);
        if (!children[0].mathmlTree) {
          children[0].mathmlTree = this.semantic.mathmlTree;
        }
        children.forEach(_CaseLimit.walkTree_);
        return this.mml;
      }
    };
    exports2.CaseLimit = CaseLimit;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_line.js
var require_case_line = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_line.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseLine = void 0;
    var semantic_meaning_js_1 = require_semantic_meaning();
    var abstract_enrich_case_js_1 = require_abstract_enrich_case();
    var EnrichMathml = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var CaseLine = class extends abstract_enrich_case_js_1.AbstractEnrichCase {
      static test(semantic) {
        return !!semantic.mathmlTree && semantic.type === semantic_meaning_js_1.SemanticType.LINE;
      }
      constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
      }
      getMathml() {
        if (this.semantic.contentNodes.length) {
          EnrichMathml.walkTree(this.semantic.contentNodes[0]);
        }
        if (this.semantic.childNodes.length) {
          EnrichMathml.walkTree(this.semantic.childNodes[0]);
        }
        (0, enrich_attr_js_1.setAttributes)(this.mml, this.semantic);
        return this.mml;
      }
    };
    exports2.CaseLine = CaseLine;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_proof.js
var require_case_proof = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_proof.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseProof = void 0;
    var semantic_meaning_js_1 = require_semantic_meaning();
    var abstract_enrich_case_js_1 = require_abstract_enrich_case();
    var EnrichMathml = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var CaseProof = class extends abstract_enrich_case_js_1.AbstractEnrichCase {
      static test(semantic) {
        return !!semantic.mathmlTree && (semantic.type === semantic_meaning_js_1.SemanticType.INFERENCE || semantic.type === semantic_meaning_js_1.SemanticType.PREMISES);
      }
      constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
      }
      getMathml() {
        if (!this.semantic.childNodes.length) {
          return this.mml;
        }
        this.semantic.contentNodes.forEach(function(x) {
          EnrichMathml.walkTree(x);
          (0, enrich_attr_js_1.setAttributes)(x.mathmlTree, x);
        });
        this.semantic.childNodes.forEach(function(x) {
          EnrichMathml.walkTree(x);
        });
        (0, enrich_attr_js_1.setAttributes)(this.mml, this.semantic);
        if (this.mml.getAttribute("data-semantic-id") === this.mml.getAttribute("data-semantic-parent")) {
          this.mml.removeAttribute("data-semantic-parent");
        }
        return this.mml;
      }
    };
    exports2.CaseProof = CaseProof;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_table.js
var require_case_table = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_table.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseTable = void 0;
    var DomUtil = require_dom_util();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_util_js_1 = require_semantic_util();
    var abstract_enrich_case_js_1 = require_abstract_enrich_case();
    var EnrichMathml = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var CaseTable = class extends abstract_enrich_case_js_1.AbstractEnrichCase {
      static test(semantic) {
        return semantic.type === semantic_meaning_js_1.SemanticType.MATRIX || semantic.type === semantic_meaning_js_1.SemanticType.VECTOR || semantic.type === semantic_meaning_js_1.SemanticType.CASES;
      }
      constructor(semantic) {
        super(semantic);
        this.inner = [];
        this.mml = semantic.mathmlTree;
      }
      getMathml() {
        const lfence = EnrichMathml.cloneContentNode(this.semantic.contentNodes[0]);
        const rfence = this.semantic.contentNodes[1] ? EnrichMathml.cloneContentNode(this.semantic.contentNodes[1]) : null;
        this.inner = this.semantic.childNodes.map(EnrichMathml.walkTree);
        if (!this.mml) {
          this.mml = EnrichMathml.introduceNewLayer([lfence].concat(this.inner, [rfence]), this.semantic);
        } else if (DomUtil.tagName(this.mml) === semantic_util_js_1.MMLTAGS.MFENCED) {
          const children = this.mml.childNodes;
          this.mml.insertBefore(lfence, children[0] || null);
          if (rfence) {
            this.mml.appendChild(rfence);
          }
          this.mml = EnrichMathml.rewriteMfenced(this.mml);
        } else {
          const newChildren = [lfence, this.mml];
          if (rfence) {
            newChildren.push(rfence);
          }
          this.mml = EnrichMathml.introduceNewLayer(newChildren, this.semantic);
        }
        (0, enrich_attr_js_1.setAttributes)(this.mml, this.semantic);
        return this.mml;
      }
    };
    exports2.CaseTable = CaseTable;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/case_text.js
var require_case_text = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/case_text.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CaseText = void 0;
    var semantic_meaning_js_1 = require_semantic_meaning();
    var abstract_enrich_case_js_1 = require_abstract_enrich_case();
    var EnrichMathml = require_enrich_mathml();
    var enrich_attr_js_1 = require_enrich_attr();
    var CaseText = class extends abstract_enrich_case_js_1.AbstractEnrichCase {
      static test(semantic) {
        return semantic.type === semantic_meaning_js_1.SemanticType.PUNCTUATED && (semantic.role === semantic_meaning_js_1.SemanticRole.TEXT || semantic.contentNodes.every((x) => x.role === semantic_meaning_js_1.SemanticRole.DUMMY));
      }
      constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
      }
      getMathml() {
        const children = [];
        const collapsed = EnrichMathml.collapsePunctuated(this.semantic, children);
        this.mml = EnrichMathml.introduceNewLayer(children, this.semantic);
        (0, enrich_attr_js_1.setAttributes)(this.mml, this.semantic);
        this.mml.removeAttribute(enrich_attr_js_1.Attribute.CONTENT);
        EnrichMathml.addCollapsedAttribute(this.mml, collapsed);
        return this.mml;
      }
    };
    exports2.CaseText = CaseText;
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/enrich_case_factory.js
var require_enrich_case_factory = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/enrich_case_factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var case_binomial_js_1 = require_case_binomial();
    var case_double_script_js_1 = require_case_double_script();
    var case_embellished_js_1 = require_case_embellished();
    var case_empheq_js_1 = require_case_empheq();
    var case_limit_js_1 = require_case_limit();
    var case_line_js_1 = require_case_line();
    var case_multiscripts_js_1 = require_case_multiscripts();
    var case_proof_js_1 = require_case_proof();
    var case_table_js_1 = require_case_table();
    var case_tensor_js_1 = require_case_tensor();
    var case_text_js_1 = require_case_text();
    var enrich_case_js_1 = require_enrich_case();
    enrich_case_js_1.factory.push(...[
      {
        test: case_limit_js_1.CaseLimit.test,
        constr: (node) => new case_limit_js_1.CaseLimit(node)
      },
      {
        test: case_embellished_js_1.CaseEmbellished.test,
        constr: (node) => new case_embellished_js_1.CaseEmbellished(node)
      },
      {
        test: case_double_script_js_1.CaseDoubleScript.test,
        constr: (node) => new case_double_script_js_1.CaseDoubleScript(node)
      },
      {
        test: case_tensor_js_1.CaseTensor.test,
        constr: (node) => new case_tensor_js_1.CaseTensor(node)
      },
      {
        test: case_multiscripts_js_1.CaseMultiscripts.test,
        constr: (node) => new case_multiscripts_js_1.CaseMultiscripts(node)
      },
      { test: case_line_js_1.CaseLine.test, constr: (node) => new case_line_js_1.CaseLine(node) },
      {
        test: case_binomial_js_1.CaseBinomial.test,
        constr: (node) => new case_binomial_js_1.CaseBinomial(node)
      },
      {
        test: case_proof_js_1.CaseProof.test,
        constr: (node) => new case_proof_js_1.CaseProof(node)
      },
      {
        test: case_empheq_js_1.CaseEmpheq.test,
        constr: (node) => new case_empheq_js_1.CaseEmpheq(node)
      },
      {
        test: case_table_js_1.CaseTable.test,
        constr: (node) => new case_table_js_1.CaseTable(node)
      },
      { test: case_text_js_1.CaseText.test, constr: (node) => new case_text_js_1.CaseText(node) }
    ]);
  }
});

// node_modules/speech-rule-engine/js/enrich_mathml/enrich.js
var require_enrich = __commonJS({
  "node_modules/speech-rule-engine/js/enrich_mathml/enrich.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.semanticMathmlNode = semanticMathmlNode;
    exports2.semanticMathmlSync = semanticMathmlSync;
    exports2.semanticMathml = semanticMathml;
    exports2.testTranslation = testTranslation;
    exports2.prepareMmlString = prepareMmlString;
    var debugger_js_1 = require_debugger();
    var DomUtil = require_dom_util();
    var engine_js_1 = require_engine();
    var Semantic = require_semantic();
    var EnrichMathml = require_enrich_mathml();
    require_enrich_case_factory();
    function semanticMathmlNode(mml) {
      const clone = DomUtil.cloneNode(mml);
      const tree = Semantic.getTree(clone);
      return EnrichMathml.enrich(clone, tree);
    }
    function semanticMathmlSync(expr) {
      const mml = DomUtil.parseInput(expr);
      return semanticMathmlNode(mml);
    }
    function semanticMathml(expr, callback) {
      engine_js_1.EnginePromise.getall().then(() => {
        const mml = DomUtil.parseInput(expr);
        callback(semanticMathmlNode(mml));
      });
    }
    function testTranslation(expr) {
      debugger_js_1.Debugger.getInstance().init();
      const mml = semanticMathmlSync(prepareMmlString(expr));
      debugger_js_1.Debugger.getInstance().exit();
      return mml;
    }
    function prepareMmlString(expr) {
      if (!expr.match(/^<math/)) {
        expr = "<math>" + expr;
      }
      if (!expr.match(/\/math>$/)) {
        expr += "</math>";
      }
      return expr;
    }
  }
});

// node_modules/speech-rule-engine/js/highlighter/abstract_highlighter.js
var require_abstract_highlighter = __commonJS({
  "node_modules/speech-rule-engine/js/highlighter/abstract_highlighter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractHighlighter = void 0;
    var XpathUtil = require_xpath_util();
    var enrich_attr_js_1 = require_enrich_attr();
    var counter = 0;
    var AbstractHighlighter = class {
      constructor() {
        this.counter = counter++;
        this.ATTR = "sre-highlight-" + this.counter.toString();
        this.color = null;
        this.mactionName = "";
        this.currentHighlights = [];
      }
      highlight(nodes) {
        this.currentHighlights.push(nodes.map((node) => {
          const info = this.highlightNode(node);
          this.setHighlighted(node);
          return info;
        }));
      }
      highlightAll(node) {
        const mactions = this.getMactionNodes(node);
        for (let i = 0, maction; maction = mactions[i]; i++) {
          this.highlight([maction]);
        }
      }
      unhighlight() {
        const nodes = this.currentHighlights.pop();
        if (!nodes) {
          return;
        }
        nodes.forEach((highlight) => {
          if (this.isHighlighted(highlight.node)) {
            this.unhighlightNode(highlight);
            this.unsetHighlighted(highlight.node);
          }
        });
      }
      unhighlightAll() {
        while (this.currentHighlights.length > 0) {
          this.unhighlight();
        }
      }
      setColor(color) {
        this.color = color;
      }
      colorString() {
        return this.color.rgba();
      }
      addEvents(node, events) {
        const mactions = this.getMactionNodes(node);
        for (let i = 0, maction; maction = mactions[i]; i++) {
          for (const [key, event2] of Object.entries(events)) {
            maction.addEventListener(key, event2);
          }
        }
      }
      getMactionNodes(node) {
        return Array.from(node.getElementsByClassName(this.mactionName));
      }
      isMactionNode(node) {
        const className = node.className || node.getAttribute("class");
        return className ? !!className.match(new RegExp(this.mactionName)) : false;
      }
      isHighlighted(node) {
        return node.hasAttribute(this.ATTR);
      }
      setHighlighted(node) {
        node.setAttribute(this.ATTR, "true");
      }
      unsetHighlighted(node) {
        node.removeAttribute(this.ATTR);
      }
      colorizeAll(node) {
        XpathUtil.updateEvaluator(node);
        const allNodes = XpathUtil.evalXPath(`.//*[@${enrich_attr_js_1.Attribute.ID}]`, node);
        allNodes.forEach((x) => this.colorize(x));
      }
      uncolorizeAll(node) {
        const allNodes = XpathUtil.evalXPath(`.//*[@${enrich_attr_js_1.Attribute.ID}]`, node);
        allNodes.forEach((x) => this.uncolorize(x));
      }
      colorize(node) {
        const fore = (0, enrich_attr_js_1.addPrefix)("foreground");
        if (node.hasAttribute(fore)) {
          node.setAttribute(fore + "-old", node.style.color);
          node.style.color = node.getAttribute(fore);
        }
      }
      uncolorize(node) {
        const fore = (0, enrich_attr_js_1.addPrefix)("foreground") + "-old";
        if (node.hasAttribute(fore)) {
          node.style.color = node.getAttribute(fore);
        }
      }
    };
    exports2.AbstractHighlighter = AbstractHighlighter;
  }
});

// node_modules/speech-rule-engine/js/highlighter/css_highlighter.js
var require_css_highlighter = __commonJS({
  "node_modules/speech-rule-engine/js/highlighter/css_highlighter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CssHighlighter = void 0;
    var abstract_highlighter_js_1 = require_abstract_highlighter();
    var CssHighlighter = class extends abstract_highlighter_js_1.AbstractHighlighter {
      constructor() {
        super();
        this.mactionName = "mjx-maction";
      }
      highlightNode(node) {
        const info = {
          node,
          background: node.style.backgroundColor,
          foreground: node.style.color
        };
        if (!this.isHighlighted(node)) {
          const color = this.colorString();
          node.style.backgroundColor = color.background;
          node.style.color = color.foreground;
        }
        return info;
      }
      unhighlightNode(info) {
        info.node.style.backgroundColor = info.background;
        info.node.style.color = info.foreground;
      }
    };
    exports2.CssHighlighter = CssHighlighter;
  }
});

// node_modules/speech-rule-engine/js/highlighter/chtml_highlighter.js
var require_chtml_highlighter = __commonJS({
  "node_modules/speech-rule-engine/js/highlighter/chtml_highlighter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChtmlHighlighter = void 0;
    var css_highlighter_js_1 = require_css_highlighter();
    var ChtmlHighlighter = class extends css_highlighter_js_1.CssHighlighter {
      constructor() {
        super();
      }
      isMactionNode(node) {
        var _a;
        return ((_a = node.tagName) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === this.mactionName.toUpperCase();
      }
      getMactionNodes(node) {
        return Array.from(node.getElementsByTagName(this.mactionName));
      }
    };
    exports2.ChtmlHighlighter = ChtmlHighlighter;
  }
});

// node_modules/speech-rule-engine/js/highlighter/color_picker.js
var require_color_picker = __commonJS({
  "node_modules/speech-rule-engine/js/highlighter/color_picker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ContrastPicker = exports2.ColorPicker = void 0;
    var namedColors = {
      red: { red: 255, green: 0, blue: 0 },
      green: { red: 0, green: 255, blue: 0 },
      blue: { red: 0, green: 0, blue: 255 },
      yellow: { red: 255, green: 255, blue: 0 },
      cyan: { red: 0, green: 255, blue: 255 },
      magenta: { red: 255, green: 0, blue: 255 },
      white: { red: 255, green: 255, blue: 255 },
      black: { red: 0, green: 0, blue: 0 }
    };
    function getChannelColor(color, deflt) {
      const col = color || { color: deflt };
      let channel = Object.prototype.hasOwnProperty.call(col, "color") ? namedColors[col.color] : col;
      if (!channel) {
        channel = namedColors[deflt];
      }
      channel.alpha = Object.prototype.hasOwnProperty.call(col, "alpha") ? col.alpha : 1;
      return normalizeColor(channel);
    }
    function normalizeColor(color) {
      const normalizeCol = (col) => {
        col = Math.max(col, 0);
        col = Math.min(255, col);
        return Math.round(col);
      };
      color.red = normalizeCol(color.red);
      color.green = normalizeCol(color.green);
      color.blue = normalizeCol(color.blue);
      color.alpha = Math.max(color.alpha, 0);
      color.alpha = Math.min(1, color.alpha);
      return color;
    }
    var ColorPicker = class _ColorPicker {
      static toHex(num) {
        const hex = num.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
      constructor(background, foreground) {
        this.foreground = getChannelColor(foreground, _ColorPicker.DEFAULT_FOREGROUND_);
        this.background = getChannelColor(background, _ColorPicker.DEFAULT_BACKGROUND_);
      }
      rgba() {
        const rgba = function(col) {
          return "rgba(" + col.red + "," + col.green + "," + col.blue + "," + col.alpha + ")";
        };
        return {
          background: rgba(this.background),
          foreground: rgba(this.foreground)
        };
      }
      rgb() {
        const rgb = function(col) {
          return "rgb(" + col.red + "," + col.green + "," + col.blue + ")";
        };
        return {
          background: rgb(this.background),
          alphaback: this.background.alpha.toString(),
          foreground: rgb(this.foreground),
          alphafore: this.foreground.alpha.toString()
        };
      }
      hex() {
        const hex = function(col) {
          return "#" + _ColorPicker.toHex(col.red) + _ColorPicker.toHex(col.green) + _ColorPicker.toHex(col.blue);
        };
        return {
          background: hex(this.background),
          alphaback: this.background.alpha.toString(),
          foreground: hex(this.foreground),
          alphafore: this.foreground.alpha.toString()
        };
      }
    };
    exports2.ColorPicker = ColorPicker;
    ColorPicker.DEFAULT_BACKGROUND_ = "blue";
    ColorPicker.DEFAULT_FOREGROUND_ = "black";
    function hsl2rgb(h, s, l) {
      s = s > 1 ? s / 100 : s;
      l = l > 1 ? l / 100 : l;
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs(h / 60 % 2 - 1));
      const m = l - c / 2;
      let r = 0, g = 0, b = 0;
      if (0 <= h && h < 60) {
        [r, g, b] = [c, x, 0];
      } else if (60 <= h && h < 120) {
        [r, g, b] = [x, c, 0];
      } else if (120 <= h && h < 180) {
        [r, g, b] = [0, c, x];
      } else if (180 <= h && h < 240) {
        [r, g, b] = [0, x, c];
      } else if (240 <= h && h < 300) {
        [r, g, b] = [x, 0, c];
      } else if (300 <= h && h < 360) {
        [r, g, b] = [c, 0, x];
      }
      return { red: r + m, green: g + m, blue: b + m };
    }
    function rgb2RGB(rgb) {
      return {
        red: Math.round(255 * rgb.red),
        green: Math.round(255 * rgb.green),
        blue: Math.round(255 * rgb.blue)
      };
    }
    function RGB2hex(col) {
      return "rgb(" + col.red + "," + col.green + "," + col.blue + ")";
    }
    var ContrastPicker = class {
      constructor() {
        this.hue = 10;
        this.sat = 100;
        this.light = 50;
        this.incr = 50;
      }
      generate() {
        return RGB2hex(rgb2RGB(hsl2rgb(this.hue, this.sat, this.light)));
      }
      increment() {
        this.hue = (this.hue + this.incr) % 360;
      }
    };
    exports2.ContrastPicker = ContrastPicker;
  }
});

// node_modules/speech-rule-engine/js/highlighter/html_highlighter.js
var require_html_highlighter = __commonJS({
  "node_modules/speech-rule-engine/js/highlighter/html_highlighter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HtmlHighlighter = void 0;
    var DomUtil = require_dom_util();
    var abstract_highlighter_js_1 = require_abstract_highlighter();
    var HtmlHighlighter = class extends abstract_highlighter_js_1.AbstractHighlighter {
      constructor() {
        super();
        this.mactionName = "maction";
      }
      highlightNode(node) {
        const info = {
          node,
          foreground: node.style.color,
          position: node.style.position
        };
        const color = this.color.rgb();
        node.style.color = color.foreground;
        node.style.position = "relative";
        const bbox = node.bbox;
        if (bbox && bbox.w) {
          const vpad = 0.05;
          const hpad = 0;
          const span = DomUtil.createElement("span");
          const left = parseFloat(node.style.paddingLeft || "0");
          span.style.backgroundColor = color.background;
          span.style.opacity = color.alphaback.toString();
          span.style.display = "inline-block";
          span.style.height = bbox.h + bbox.d + 2 * vpad + "em";
          span.style.verticalAlign = -bbox.d + "em";
          span.style.marginTop = span.style.marginBottom = -vpad + "em";
          span.style.width = bbox.w + 2 * hpad + "em";
          span.style.marginLeft = left - hpad + "em";
          span.style.marginRight = -bbox.w - hpad - left + "em";
          node.parentNode.insertBefore(span, node);
          info.box = span;
        }
        return info;
      }
      unhighlightNode(info) {
        const node = info.node;
        node.style.color = info.foreground;
        node.style.position = info.position;
        if (info.box) {
          info.box.parentNode.removeChild(info.box);
        }
      }
    };
    exports2.HtmlHighlighter = HtmlHighlighter;
  }
});

// node_modules/speech-rule-engine/js/highlighter/mml_css_highlighter.js
var require_mml_css_highlighter = __commonJS({
  "node_modules/speech-rule-engine/js/highlighter/mml_css_highlighter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MmlCssHighlighter = void 0;
    var css_highlighter_js_1 = require_css_highlighter();
    var MmlCssHighlighter = class extends css_highlighter_js_1.CssHighlighter {
      constructor() {
        super();
        this.mactionName = "maction";
      }
      getMactionNodes(node) {
        return Array.from(node.getElementsByTagName(this.mactionName));
      }
      isMactionNode(node) {
        return node.tagName === this.mactionName;
      }
    };
    exports2.MmlCssHighlighter = MmlCssHighlighter;
  }
});

// node_modules/speech-rule-engine/js/highlighter/mml_highlighter.js
var require_mml_highlighter = __commonJS({
  "node_modules/speech-rule-engine/js/highlighter/mml_highlighter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MmlHighlighter = void 0;
    var abstract_highlighter_js_1 = require_abstract_highlighter();
    var MmlHighlighter = class extends abstract_highlighter_js_1.AbstractHighlighter {
      constructor() {
        super();
        this.mactionName = "maction";
      }
      highlightNode(node) {
        let style = node.getAttribute("style");
        style += ";background-color: " + this.colorString().background;
        style += ";color: " + this.colorString().foreground;
        node.setAttribute("style", style);
        return { node };
      }
      unhighlightNode(info) {
        let style = info.node.getAttribute("style");
        style = style.replace(";background-color: " + this.colorString().background, "");
        style = style.replace(";color: " + this.colorString().foreground, "");
        info.node.setAttribute("style", style);
      }
      colorString() {
        return this.color.rgba();
      }
      getMactionNodes(node) {
        return Array.from(node.getElementsByTagName(this.mactionName));
      }
      isMactionNode(node) {
        return node.tagName === this.mactionName;
      }
    };
    exports2.MmlHighlighter = MmlHighlighter;
  }
});

// node_modules/speech-rule-engine/js/highlighter/svg_highlighter.js
var require_svg_highlighter = __commonJS({
  "node_modules/speech-rule-engine/js/highlighter/svg_highlighter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SvgHighlighter = void 0;
    var DomUtil = require_dom_util();
    var abstract_highlighter_js_1 = require_abstract_highlighter();
    var SvgHighlighter = class extends abstract_highlighter_js_1.AbstractHighlighter {
      constructor() {
        super();
        this.mactionName = "mjx-svg-maction";
      }
      highlightNode(node) {
        let info;
        if (this.isHighlighted(node)) {
          info = {
            node: node.previousSibling || node,
            background: node.style.backgroundColor,
            foreground: node.style.color
          };
          return info;
        }
        if (node.tagName === "svg") {
          const info2 = {
            node,
            background: node.style.backgroundColor,
            foreground: node.style.color
          };
          node.style.backgroundColor = this.colorString().background;
          node.style.color = this.colorString().foreground;
          return info2;
        }
        const rect = DomUtil.createElementNS("http://www.w3.org/2000/svg", "rect");
        const padding = 40;
        let bbox;
        if (node.nodeName === "use") {
          const g = DomUtil.createElementNS("http://www.w3.org/2000/svg", "g");
          node.parentNode.insertBefore(g, node);
          g.appendChild(node);
          bbox = g.getBBox();
          g.parentNode.replaceChild(node, g);
        } else {
          bbox = node.getBBox();
        }
        rect.setAttribute("x", (bbox.x - padding).toString());
        rect.setAttribute("y", (bbox.y - padding).toString());
        rect.setAttribute("width", (bbox.width + 2 * padding).toString());
        rect.setAttribute("height", (bbox.height + 2 * padding).toString());
        const transform = node.getAttribute("transform");
        if (transform) {
          rect.setAttribute("transform", transform);
        }
        rect.setAttribute("fill", this.colorString().background);
        rect.setAttribute(this.ATTR, "true");
        node.parentNode.insertBefore(rect, node);
        info = { node: rect, foreground: node.getAttribute("fill") };
        node.setAttribute("fill", this.colorString().foreground);
        return info;
      }
      setHighlighted(node) {
        if (node.tagName === "svg") {
          super.setHighlighted(node);
        }
      }
      unhighlightNode(info) {
        if ("background" in info) {
          info.node.style.backgroundColor = info.background;
          info.node.style.color = info.foreground;
          return;
        }
        info.foreground ? info.node.nextSibling.setAttribute("fill", info.foreground) : info.node.nextSibling.removeAttribute("fill");
        info.node.parentNode.removeChild(info.node);
      }
      isMactionNode(node) {
        let className = node.className || node.getAttribute("class");
        if (!className) {
          return false;
        }
        className = className.baseVal !== void 0 ? className.baseVal : className;
        return className ? !!className.match(new RegExp(this.mactionName)) : false;
      }
    };
    exports2.SvgHighlighter = SvgHighlighter;
  }
});

// node_modules/speech-rule-engine/js/highlighter/svg_v3_highlighter.js
var require_svg_v3_highlighter = __commonJS({
  "node_modules/speech-rule-engine/js/highlighter/svg_v3_highlighter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SvgV3Highlighter = void 0;
    var DomUtil = require_dom_util();
    var XpathUtil = require_xpath_util();
    var color_picker_js_1 = require_color_picker();
    var svg_highlighter_js_1 = require_svg_highlighter();
    var SvgV3Highlighter = class extends svg_highlighter_js_1.SvgHighlighter {
      constructor() {
        super();
        this.mactionName = "maction";
      }
      highlightNode(node) {
        let info;
        if (this.isHighlighted(node)) {
          info = {
            node,
            background: this.colorString().background,
            foreground: this.colorString().foreground
          };
          return info;
        }
        if (node.tagName === "svg" || node.tagName === "MJX-CONTAINER") {
          info = {
            node,
            background: node.style.backgroundColor,
            foreground: node.style.color
          };
          node.style.backgroundColor = this.colorString().background;
          node.style.color = this.colorString().foreground;
          return info;
        }
        const rect = DomUtil.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("sre-highlighter-added", "true");
        const padding = 40;
        const bbox = node.getBBox();
        rect.setAttribute("x", (bbox.x - padding).toString());
        rect.setAttribute("y", (bbox.y - padding).toString());
        rect.setAttribute("width", (bbox.width + 2 * padding).toString());
        rect.setAttribute("height", (bbox.height + 2 * padding).toString());
        const transform = node.getAttribute("transform");
        if (transform) {
          rect.setAttribute("transform", transform);
        }
        rect.setAttribute("fill", this.colorString().background);
        node.setAttribute(this.ATTR, "true");
        node.parentNode.insertBefore(rect, node);
        info = { node, foreground: node.getAttribute("fill") };
        if (node.nodeName === "rect") {
          const picker = new color_picker_js_1.ColorPicker({ alpha: 0, color: "black" });
          node.setAttribute("fill", picker.rgba().foreground);
        } else {
          node.setAttribute("fill", this.colorString().foreground);
        }
        return info;
      }
      unhighlightNode(info) {
        const previous = info.node.previousSibling;
        if (previous && previous.hasAttribute("sre-highlighter-added")) {
          info.foreground ? info.node.setAttribute("fill", info.foreground) : info.node.removeAttribute("fill");
          info.node.parentNode.removeChild(previous);
          return;
        }
        info.node.style.backgroundColor = info.background;
        info.node.style.color = info.foreground;
      }
      isMactionNode(node) {
        return node.getAttribute("data-mml-node") === this.mactionName;
      }
      getMactionNodes(node) {
        return Array.from(XpathUtil.evalXPath(`.//*[@data-mml-node="${this.mactionName}"]`, node));
      }
    };
    exports2.SvgV3Highlighter = SvgV3Highlighter;
  }
});

// node_modules/speech-rule-engine/js/highlighter/highlighter_factory.js
var require_highlighter_factory = __commonJS({
  "node_modules/speech-rule-engine/js/highlighter/highlighter_factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.highlighter = highlighter;
    exports2.update = update;
    exports2.addEvents = addEvents;
    var chtml_highlighter_js_1 = require_chtml_highlighter();
    var color_picker_js_1 = require_color_picker();
    var css_highlighter_js_1 = require_css_highlighter();
    var html_highlighter_js_1 = require_html_highlighter();
    var mml_css_highlighter_js_1 = require_mml_css_highlighter();
    var mml_highlighter_js_1 = require_mml_highlighter();
    var svg_highlighter_js_1 = require_svg_highlighter();
    var svg_v3_highlighter_js_1 = require_svg_v3_highlighter();
    function highlighter(back, fore, rendererInfo) {
      const colorPicker = new color_picker_js_1.ColorPicker(back, fore);
      const renderer = rendererInfo.renderer === "NativeMML" && rendererInfo.browser === "Safari" ? "MML-CSS" : rendererInfo.renderer === "SVG" && rendererInfo.browser === "v3" ? "SVG-V3" : rendererInfo.renderer;
      const highlighter2 = new (highlighterMapping[renderer] || highlighterMapping["NativeMML"])();
      highlighter2.setColor(colorPicker);
      return highlighter2;
    }
    function update(back, fore, highlighter2) {
      const colorPicker = new color_picker_js_1.ColorPicker(back, fore);
      highlighter2.setColor(colorPicker);
    }
    function addEvents(node, events, rendererInfo) {
      const highlight = highlighterMapping[rendererInfo.renderer];
      if (highlight) {
        new highlight().addEvents(node, events);
      }
    }
    var highlighterMapping = {
      SVG: svg_highlighter_js_1.SvgHighlighter,
      "SVG-V3": svg_v3_highlighter_js_1.SvgV3Highlighter,
      NativeMML: mml_highlighter_js_1.MmlHighlighter,
      "HTML-CSS": html_highlighter_js_1.HtmlHighlighter,
      "MML-CSS": mml_css_highlighter_js_1.MmlCssHighlighter,
      CommonHTML: css_highlighter_js_1.CssHighlighter,
      CHTML: chtml_highlighter_js_1.ChtmlHighlighter
    };
  }
});

// node_modules/speech-rule-engine/js/walker/walker_util.js
var require_walker_util = __commonJS({
  "node_modules/speech-rule-engine/js/walker/walker_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.splitAttribute = splitAttribute;
    exports2.getAttribute = getAttribute;
    exports2.getSemanticRoot = getSemanticRoot;
    exports2.getBySemanticId = getBySemanticId;
    exports2.getAllBySemanticId = getAllBySemanticId;
    var DomUtil = require_dom_util();
    var enrich_attr_js_1 = require_enrich_attr();
    function splitAttribute(attr) {
      return !attr ? [] : attr.split(/,/);
    }
    function getAttribute(node, attr) {
      return node.getAttribute(attr);
    }
    function getSemanticRoot(node) {
      if (node.hasAttribute(enrich_attr_js_1.Attribute.TYPE) && !node.hasAttribute(enrich_attr_js_1.Attribute.PARENT)) {
        return node;
      }
      const semanticNodes = DomUtil.querySelectorAllByAttr(node, enrich_attr_js_1.Attribute.TYPE);
      for (let i = 0, semanticNode; semanticNode = semanticNodes[i]; i++) {
        if (!semanticNode.hasAttribute(enrich_attr_js_1.Attribute.PARENT)) {
          return semanticNode;
        }
      }
      return node;
    }
    function getBySemanticId(root, id) {
      if (root.getAttribute(enrich_attr_js_1.Attribute.ID) === id) {
        return root;
      }
      return DomUtil.querySelectorAllByAttrValue(root, enrich_attr_js_1.Attribute.ID, id)[0];
    }
    function getAllBySemanticId(root, id) {
      if (root.getAttribute(enrich_attr_js_1.Attribute.ID) === id) {
        return [root];
      }
      return DomUtil.querySelectorAllByAttrValue(root, enrich_attr_js_1.Attribute.ID, id);
    }
  }
});

// node_modules/speech-rule-engine/js/walker/rebuild_stree.js
var require_rebuild_stree = __commonJS({
  "node_modules/speech-rule-engine/js/walker/rebuild_stree.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RebuildStree = void 0;
    var enrich_attr_js_1 = require_enrich_attr();
    var semantic_attr_js_1 = require_semantic_attr();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var semantic_node_factory_js_1 = require_semantic_node_factory();
    var semantic_skeleton_js_1 = require_semantic_skeleton();
    var semantic_tree_js_1 = require_semantic_tree();
    var WalkerUtil = require_walker_util();
    var RebuildStree = class _RebuildStree {
      static textContent(snode, node, ignore) {
        if (!ignore && node.textContent) {
          snode.textContent = node.textContent;
          return;
        }
        const operator = WalkerUtil.splitAttribute(WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.OPERATOR));
        if (operator.length > 1) {
          snode.textContent = operator[1];
        }
      }
      static isPunctuated(collapsed) {
        return !semantic_skeleton_js_1.SemanticSkeleton.simpleCollapseStructure(collapsed) && collapsed[1] && semantic_skeleton_js_1.SemanticSkeleton.contentCollapseStructure(collapsed[1]);
      }
      constructor(mathml) {
        this.mathml = mathml;
        this.factory = new semantic_node_factory_js_1.SemanticNodeFactory();
        this.nodeDict = {};
        this.mmlRoot = WalkerUtil.getSemanticRoot(mathml);
        this.streeRoot = this.assembleTree(this.mmlRoot);
        this.stree = semantic_tree_js_1.SemanticTree.fromNode(this.streeRoot, this.mathml);
        this.xml = this.stree.xml();
      }
      getTree() {
        return this.stree;
      }
      assembleTree(node) {
        const snode = this.makeNode(node);
        const children = WalkerUtil.splitAttribute(WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.CHILDREN));
        const content = WalkerUtil.splitAttribute(WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.CONTENT));
        if (content.length === 0 && children.length === 0) {
          _RebuildStree.textContent(snode, node);
          return snode;
        }
        if (content.length > 0) {
          const fcontent = WalkerUtil.getBySemanticId(this.mathml, content[0]);
          if (fcontent) {
            _RebuildStree.textContent(snode, fcontent, true);
          }
        }
        snode.contentNodes = content.map((id) => this.setParent(id, snode));
        snode.childNodes = children.map((id) => this.setParent(id, snode));
        const collapsed = WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.COLLAPSED);
        return collapsed ? this.postProcess(snode, collapsed) : snode;
      }
      makeNode(node) {
        const type = WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.TYPE);
        const role = WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.ROLE);
        const font = WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.FONT);
        const annotation = WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.ANNOTATION) || "";
        const attributes = WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.ATTRIBUTES) || "";
        const id = WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.ID);
        const embellished = WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.EMBELLISHED);
        const fencepointer = WalkerUtil.getAttribute(node, enrich_attr_js_1.Attribute.FENCEPOINTER);
        const snode = this.createNode(parseInt(id, 10));
        snode.type = type;
        snode.role = role;
        snode.font = font ? font : semantic_meaning_js_1.SemanticFont.UNKNOWN;
        snode.parseAnnotation(annotation);
        snode.parseAttributes(attributes);
        if (fencepointer) {
          snode.fencePointer = fencepointer;
        }
        if (embellished) {
          snode.embellished = embellished;
        }
        return snode;
      }
      makePunctuation(id) {
        const node = this.createNode(id);
        node.updateContent(semantic_attr_js_1.NamedSymbol.invisibleComma);
        node.role = semantic_meaning_js_1.SemanticRole.DUMMY;
        return node;
      }
      makePunctuated(snode, collapsed, role) {
        const punctuated = this.createNode(collapsed[0]);
        punctuated.type = semantic_meaning_js_1.SemanticType.PUNCTUATED;
        punctuated.embellished = snode.embellished;
        punctuated.fencePointer = snode.fencePointer;
        punctuated.role = role;
        const cont = collapsed.splice(1, 1)[0].slice(1);
        punctuated.contentNodes = cont.map(this.makePunctuation.bind(this));
        this.collapsedChildren_(collapsed);
      }
      makeEmpty(snode, collapsed, role) {
        const empty = this.createNode(collapsed);
        empty.type = semantic_meaning_js_1.SemanticType.EMPTY;
        empty.embellished = snode.embellished;
        empty.fencePointer = snode.fencePointer;
        empty.role = role;
      }
      makeIndex(snode, collapsed, role) {
        if (_RebuildStree.isPunctuated(collapsed)) {
          this.makePunctuated(snode, collapsed, role);
          collapsed = collapsed[0];
          return;
        }
        if (semantic_skeleton_js_1.SemanticSkeleton.simpleCollapseStructure(collapsed) && !this.nodeDict[collapsed.toString()]) {
          this.makeEmpty(snode, collapsed, role);
        }
      }
      postProcess(snode, collapsed) {
        const array = semantic_skeleton_js_1.SemanticSkeleton.fromString(collapsed).array;
        if (snode.type === semantic_meaning_js_1.SemanticRole.SUBSUP) {
          const subscript = this.createNode(array[1][0]);
          subscript.type = semantic_meaning_js_1.SemanticType.SUBSCRIPT;
          subscript.role = semantic_meaning_js_1.SemanticRole.SUBSUP;
          snode.type = semantic_meaning_js_1.SemanticType.SUPERSCRIPT;
          subscript.embellished = snode.embellished;
          subscript.fencePointer = snode.fencePointer;
          this.makeIndex(snode, array[1][2], semantic_meaning_js_1.SemanticRole.RIGHTSUB);
          this.makeIndex(snode, array[2], semantic_meaning_js_1.SemanticRole.RIGHTSUPER);
          this.collapsedChildren_(array);
          return snode;
        }
        if (snode.type === semantic_meaning_js_1.SemanticType.SUBSCRIPT) {
          this.makeIndex(snode, array[2], semantic_meaning_js_1.SemanticRole.RIGHTSUB);
          this.collapsedChildren_(array);
          return snode;
        }
        if (snode.type === semantic_meaning_js_1.SemanticType.SUPERSCRIPT) {
          this.makeIndex(snode, array[2], semantic_meaning_js_1.SemanticRole.RIGHTSUPER);
          this.collapsedChildren_(array);
          return snode;
        }
        if (snode.type === semantic_meaning_js_1.SemanticType.TENSOR) {
          this.makeIndex(snode, array[2], semantic_meaning_js_1.SemanticRole.LEFTSUB);
          this.makeIndex(snode, array[3], semantic_meaning_js_1.SemanticRole.LEFTSUPER);
          this.makeIndex(snode, array[4], semantic_meaning_js_1.SemanticRole.RIGHTSUB);
          this.makeIndex(snode, array[5], semantic_meaning_js_1.SemanticRole.RIGHTSUPER);
          this.collapsedChildren_(array);
          return snode;
        }
        if (snode.type === semantic_meaning_js_1.SemanticType.PUNCTUATED) {
          if (_RebuildStree.isPunctuated(array)) {
            const cont = array.splice(1, 1)[0].slice(1);
            snode.contentNodes = cont.map(this.makePunctuation.bind(this));
          }
          return snode;
        }
        if (snode.type === semantic_meaning_js_1.SemanticRole.UNDEROVER) {
          const score = this.createNode(array[1][0]);
          if (snode.childNodes[1].role === semantic_meaning_js_1.SemanticRole.OVERACCENT) {
            score.type = semantic_meaning_js_1.SemanticType.OVERSCORE;
            snode.type = semantic_meaning_js_1.SemanticType.UNDERSCORE;
          } else {
            score.type = semantic_meaning_js_1.SemanticType.UNDERSCORE;
            snode.type = semantic_meaning_js_1.SemanticType.OVERSCORE;
          }
          score.role = semantic_meaning_js_1.SemanticRole.UNDEROVER;
          score.embellished = snode.embellished;
          score.fencePointer = snode.fencePointer;
          this.collapsedChildren_(array);
          return snode;
        }
        return snode;
      }
      createNode(id) {
        const node = this.factory.makeNode(id);
        this.nodeDict[id.toString()] = node;
        return node;
      }
      collapsedChildren_(collapsed) {
        const recurseCollapsed = (coll) => {
          const parent = this.nodeDict[coll[0]];
          parent.childNodes = [];
          for (let j = 1, l = coll.length; j < l; j++) {
            const id = coll[j];
            parent.childNodes.push(semantic_skeleton_js_1.SemanticSkeleton.simpleCollapseStructure(id) ? this.nodeDict[id] : recurseCollapsed(id));
          }
          return parent;
        };
        recurseCollapsed(collapsed);
      }
      setParent(id, snode) {
        const mml = WalkerUtil.getBySemanticId(this.mathml, id);
        const sn = this.assembleTree(mml);
        sn.parent = snode;
        return sn;
      }
    };
    exports2.RebuildStree = RebuildStree;
  }
});

// node_modules/speech-rule-engine/js/speech_generator/speech_generator_util.js
var require_speech_generator_util = __commonJS({
  "node_modules/speech-rule-engine/js/speech_generator/speech_generator_util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.computeSpeech = computeSpeech;
    exports2.computeMarkup = computeMarkup;
    exports2.recomputeMarkup = recomputeMarkup;
    exports2.addSpeech = addSpeech;
    exports2.addModality = addModality;
    exports2.addPrefix = addPrefix;
    exports2.retrievePrefix = retrievePrefix;
    exports2.connectMactions = connectMactions;
    exports2.connectAllMactions = connectAllMactions;
    exports2.retrieveSummary = retrieveSummary;
    var AuralRendering = require_aural_rendering();
    var DomUtil = require_dom_util();
    var XpathUtil = require_xpath_util();
    var enrich_attr_js_1 = require_enrich_attr();
    var speech_rule_engine_js_1 = require_speech_rule_engine();
    var semantic_tree_js_1 = require_semantic_tree();
    var WalkerUtil = require_walker_util();
    function computeSpeech(xml) {
      return speech_rule_engine_js_1.SpeechRuleEngine.getInstance().evaluateNode(xml);
    }
    function recomputeSpeech(semantic) {
      const tree = semantic_tree_js_1.SemanticTree.fromNode(semantic);
      return computeSpeech(tree.xml());
    }
    function computeMarkup(tree) {
      const descrs = computeSpeech(tree);
      return AuralRendering.markup(descrs);
    }
    function recomputeMarkup(semantic) {
      const descrs = recomputeSpeech(semantic);
      return AuralRendering.markup(descrs);
    }
    function addSpeech(mml, semantic, snode) {
      const sxml = DomUtil.querySelectorAllByAttrValue(snode, "id", semantic.id.toString())[0];
      const speech = sxml ? AuralRendering.markup(computeSpeech(sxml)) : recomputeMarkup(semantic);
      mml.setAttribute(enrich_attr_js_1.Attribute.SPEECH, speech);
    }
    function addModality(mml, semantic, modality) {
      const markup = recomputeMarkup(semantic);
      mml.setAttribute(modality, markup);
    }
    function addPrefix(mml, semantic) {
      const speech = retrievePrefix(semantic);
      if (speech) {
        mml.setAttribute(enrich_attr_js_1.Attribute.PREFIX, speech);
      }
    }
    function retrievePrefix(semantic) {
      const descrs = computePrefix(semantic);
      return AuralRendering.markup(descrs);
    }
    function computePrefix(semantic) {
      const tree = semantic_tree_js_1.SemanticTree.fromRoot(semantic);
      const nodes = XpathUtil.evalXPath('.//*[@id="' + semantic.id + '"]', tree.xml());
      let node = nodes[0];
      if (nodes.length > 1) {
        node = nodeAtPosition(semantic, nodes) || node;
      }
      return node ? speech_rule_engine_js_1.SpeechRuleEngine.getInstance().runInSetting({
        modality: "prefix",
        domain: "default",
        style: "default",
        strict: true,
        speech: true
      }, function() {
        return speech_rule_engine_js_1.SpeechRuleEngine.getInstance().evaluateNode(node);
      }) : [];
    }
    function nodeAtPosition(semantic, nodes) {
      const node = nodes[0];
      if (!semantic.parent) {
        return node;
      }
      const path = [];
      while (semantic) {
        path.push(semantic.id);
        semantic = semantic.parent;
      }
      const pathEquals = function(xml, path2) {
        while (path2.length && path2.shift().toString() === xml.getAttribute("id") && xml.parentNode && xml.parentNode.parentNode) {
          xml = xml.parentNode.parentNode;
        }
        return !path2.length;
      };
      for (let i = 0, xml; xml = nodes[i]; i++) {
        if (pathEquals(xml, path.slice())) {
          return xml;
        }
      }
      return node;
    }
    function connectMactions(node, mml, stree) {
      const mactions = DomUtil.querySelectorAll(mml, "maction");
      for (let i = 0, maction; maction = mactions[i]; i++) {
        const aid = maction.getAttribute("id");
        const span = DomUtil.querySelectorAllByAttrValue(node, "id", aid)[0];
        if (!span) {
          continue;
        }
        const lchild = maction.childNodes[1];
        const mid = lchild.getAttribute(enrich_attr_js_1.Attribute.ID);
        let cspan = WalkerUtil.getBySemanticId(node, mid);
        if (cspan && cspan.getAttribute(enrich_attr_js_1.Attribute.TYPE) !== "dummy") {
          continue;
        }
        cspan = span.childNodes[0];
        if (cspan.getAttribute("sre-highlighter-added")) {
          continue;
        }
        const pid = lchild.getAttribute(enrich_attr_js_1.Attribute.PARENT);
        if (pid) {
          cspan.setAttribute(enrich_attr_js_1.Attribute.PARENT, pid);
        }
        cspan.setAttribute(enrich_attr_js_1.Attribute.TYPE, "dummy");
        cspan.setAttribute(enrich_attr_js_1.Attribute.ID, mid);
        cspan.setAttribute("role", "treeitem");
        cspan.setAttribute("aria-level", lchild.getAttribute("aria-level"));
        const cst = DomUtil.querySelectorAllByAttrValue(stree, "id", mid)[0];
        cst.setAttribute("alternative", mid);
      }
    }
    function connectAllMactions(mml, stree) {
      const mactions = DomUtil.querySelectorAll(mml, "maction");
      for (let i = 0, maction; maction = mactions[i]; i++) {
        const lchild = maction.childNodes[1];
        const mid = lchild.getAttribute(enrich_attr_js_1.Attribute.ID);
        const cst = DomUtil.querySelectorAllByAttrValue(stree, "id", mid)[0];
        cst.setAttribute("alternative", mid);
      }
    }
    function retrieveSummary(node, options = {}) {
      const descrs = computeSummary(node, options);
      return AuralRendering.markup(descrs);
    }
    function computeSummary(node, options = {}) {
      const preOption = options.locale ? { locale: options.locale } : {};
      return node ? speech_rule_engine_js_1.SpeechRuleEngine.getInstance().runInSetting(Object.assign(preOption, {
        modality: "summary",
        strict: false,
        speech: true
      }), function() {
        return speech_rule_engine_js_1.SpeechRuleEngine.getInstance().evaluateNode(node);
      }) : [];
    }
  }
});

// node_modules/speech-rule-engine/js/speech_rules/clearspeak_preferences.js
var require_clearspeak_preferences = __commonJS({
  "node_modules/speech-rule-engine/js/speech_rules/clearspeak_preferences.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClearspeakPreferences = void 0;
    var engine_js_1 = require_engine();
    var EngineConst = require_engine_const();
    var dynamic_cstr_js_1 = require_dynamic_cstr();
    var dynamic_cstr_js_2 = require_dynamic_cstr();
    var MathCompoundStore = require_math_compound_store();
    var speech_rule_engine_js_1 = require_speech_rule_engine();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var ClearspeakPreferences = class _ClearspeakPreferences extends dynamic_cstr_js_1.DynamicCstr {
      static comparator() {
        return new Comparator(engine_js_1.Engine.getInstance().dynamicCstr, dynamic_cstr_js_2.DynamicProperties.createProp([dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_2.Axis.LOCALE]], [dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_2.Axis.MODALITY]], [dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_2.Axis.DOMAIN]], [dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUES[dynamic_cstr_js_2.Axis.STYLE]]));
      }
      static fromPreference(pref) {
        const pairs = pref.split(":");
        const preferences = {};
        const properties = PREFERENCES.getProperties();
        const validKeys = Object.keys(properties);
        for (let i = 0, key; key = pairs[i]; i++) {
          const pair = key.split("_");
          if (validKeys.indexOf(pair[0]) === -1) {
            continue;
          }
          const value = pair[1];
          if (value && value !== _ClearspeakPreferences.AUTO && properties[pair[0]].indexOf(value) !== -1) {
            preferences[pair[0]] = pair[1];
          }
        }
        return preferences;
      }
      static toPreference(pref) {
        const keys = Object.keys(pref);
        const str = [];
        for (let i = 0; i < keys.length; i++) {
          str.push(keys[i] + "_" + pref[keys[i]]);
        }
        return str.length ? str.join(":") : dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUE;
      }
      static getLocalePreferences(opt_dynamic) {
        const dynamic = opt_dynamic || MathCompoundStore.enumerate(speech_rule_engine_js_1.SpeechRuleEngine.getInstance().enumerate());
        return _ClearspeakPreferences.getLocalePreferences_(dynamic);
      }
      static currentPreference() {
        return EngineConst.DOMAIN_TO_STYLES["clearspeak"];
      }
      static relevantPreferences(node) {
        const roles = SEMANTIC_MAPPING_[node.type];
        if (!roles) {
          return "ImpliedTimes";
        }
        return roles[node.role] || roles[""] || "ImpliedTimes";
      }
      static findPreference(prefs, kind) {
        if (prefs === "default") {
          return _ClearspeakPreferences.AUTO;
        }
        const parsed = _ClearspeakPreferences.fromPreference(prefs);
        return parsed[kind] || _ClearspeakPreferences.AUTO;
      }
      static addPreference(prefs, kind, value) {
        if (prefs === "default") {
          return kind + "_" + value;
        }
        const parsed = _ClearspeakPreferences.fromPreference(prefs);
        parsed[kind] = value;
        return _ClearspeakPreferences.toPreference(parsed);
      }
      static getLocalePreferences_(dynamic) {
        const result = {};
        for (const locale of Object.keys(dynamic)) {
          if (!dynamic[locale]["speech"] || !dynamic[locale]["speech"]["clearspeak"]) {
            continue;
          }
          const locPrefs = Object.keys(dynamic[locale]["speech"]["clearspeak"]);
          if (locPrefs.length < 3)
            continue;
          const prefs = result[locale] = {};
          for (const axis in PREFERENCES.getProperties()) {
            const allSty = PREFERENCES.getProperties()[axis];
            const values = [axis + "_Auto"];
            if (allSty) {
              for (const sty of allSty) {
                if (locPrefs.indexOf(axis + "_" + sty) !== -1) {
                  values.push(axis + "_" + sty);
                }
              }
            }
            prefs[axis] = values;
          }
        }
        return result;
      }
      constructor(cstr, preference) {
        super(cstr);
        this.preference = preference;
      }
      equal(cstr) {
        const top = super.equal(cstr);
        if (!top) {
          return false;
        }
        const keys = Object.keys(this.preference);
        const preference = cstr.preference;
        if (keys.length !== Object.keys(preference).length) {
          return false;
        }
        for (let i = 0, key; key = keys[i]; i++) {
          if (this.preference[key] !== preference[key]) {
            return false;
          }
        }
        return true;
      }
    };
    exports2.ClearspeakPreferences = ClearspeakPreferences;
    ClearspeakPreferences.AUTO = "Auto";
    var PREFERENCES = new dynamic_cstr_js_2.DynamicProperties({
      AbsoluteValue: ["Auto", "AbsEnd", "Cardinality", "Determinant"],
      Bar: ["Auto", "Conjugate"],
      Caps: ["Auto", "SayCaps"],
      CombinationPermutation: ["Auto", "ChoosePermute"],
      Currency: ["Auto", "Position", "Prefix"],
      Ellipses: ["Auto", "AndSoOn"],
      Enclosed: ["Auto", "EndEnclose"],
      Exponent: [
        "Auto",
        "AfterPower",
        "Ordinal",
        "OrdinalPower",
        "Exponent"
      ],
      Fraction: [
        "Auto",
        "EndFrac",
        "FracOver",
        "General",
        "GeneralEndFrac",
        "Ordinal",
        "Over",
        "OverEndFrac",
        "Per"
      ],
      Functions: [
        "Auto",
        "None",
        "Reciprocal"
      ],
      ImpliedTimes: ["Auto", "MoreImpliedTimes", "None"],
      Log: ["Auto", "LnAsNaturalLog"],
      Matrix: [
        "Auto",
        "Combinatoric",
        "EndMatrix",
        "EndVector",
        "SilentColNum",
        "SpeakColNum",
        "Vector"
      ],
      MultiLineLabel: [
        "Auto",
        "Case",
        "Constraint",
        "Equation",
        "Line",
        "None",
        "Row",
        "Step"
      ],
      MultiLineOverview: ["Auto", "None"],
      MultiLinePausesBetweenColumns: ["Auto", "Long", "Short"],
      MultsymbolDot: ["Auto", "Dot"],
      MultsymbolX: ["Auto", "By", "Cross"],
      Paren: [
        "Auto",
        "CoordPoint",
        "Interval",
        "Silent",
        "Speak",
        "SpeakNestingLevel"
      ],
      Prime: ["Auto", "Angle", "Length"],
      Roots: ["Auto", "PosNegSqRoot", "PosNegSqRootEnd", "RootEnd"],
      SetMemberSymbol: ["Auto", "Belongs", "Element", "Member", "In"],
      Sets: ["Auto", "SilentBracket", "woAll"],
      TriangleSymbol: ["Auto", "Delta"],
      Trig: [
        "Auto",
        "ArcTrig",
        "TrigInverse",
        "Reciprocal"
      ],
      VerticalLine: ["Auto", "Divides", "Given", "SuchThat"]
    });
    var Comparator = class extends dynamic_cstr_js_2.DefaultComparator {
      constructor(cstr, props) {
        super(cstr, props);
        this.preference = cstr instanceof ClearspeakPreferences ? cstr.preference : {};
      }
      match(cstr) {
        if (!(cstr instanceof ClearspeakPreferences)) {
          return super.match(cstr);
        }
        if (cstr.getComponents()[dynamic_cstr_js_2.Axis.STYLE] === "default") {
          return true;
        }
        const keys = Object.keys(cstr.preference);
        for (let i = 0, key; key = keys[i]; i++) {
          if (this.preference[key] !== cstr.preference[key]) {
            return false;
          }
        }
        return true;
      }
      compare(cstr1, cstr2) {
        const top = super.compare(cstr1, cstr2);
        if (top !== 0) {
          return top;
        }
        const pref1 = cstr1 instanceof ClearspeakPreferences;
        const pref2 = cstr2 instanceof ClearspeakPreferences;
        if (!pref1 && pref2) {
          return 1;
        }
        if (pref1 && !pref2) {
          return -1;
        }
        if (!pref1 && !pref2) {
          return 0;
        }
        const length1 = Object.keys(cstr1.preference).length;
        const length2 = Object.keys(cstr2.preference).length;
        return length1 > length2 ? -1 : length1 < length2 ? 1 : 0;
      }
    };
    var Parser = class extends dynamic_cstr_js_2.DynamicCstrParser {
      constructor() {
        super([dynamic_cstr_js_2.Axis.LOCALE, dynamic_cstr_js_2.Axis.MODALITY, dynamic_cstr_js_2.Axis.DOMAIN, dynamic_cstr_js_2.Axis.STYLE]);
      }
      parse(str) {
        const initial = super.parse(str);
        let style = initial.getValue(dynamic_cstr_js_2.Axis.STYLE);
        const locale = initial.getValue(dynamic_cstr_js_2.Axis.LOCALE);
        const modality = initial.getValue(dynamic_cstr_js_2.Axis.MODALITY);
        let pref = {};
        if (style !== dynamic_cstr_js_1.DynamicCstr.DEFAULT_VALUE) {
          pref = this.fromPreference(style);
          style = this.toPreference(pref);
        }
        return new ClearspeakPreferences({
          locale,
          modality,
          domain: "clearspeak",
          style
        }, pref);
      }
      fromPreference(pref) {
        return ClearspeakPreferences.fromPreference(pref);
      }
      toPreference(pref) {
        return ClearspeakPreferences.toPreference(pref);
      }
    };
    var REVERSE_MAPPING = [
      [
        "AbsoluteValue",
        semantic_meaning_js_1.SemanticType.FENCED,
        semantic_meaning_js_1.SemanticRole.NEUTRAL,
        semantic_meaning_js_1.SemanticRole.METRIC
      ],
      ["Bar", semantic_meaning_js_1.SemanticType.OVERSCORE, semantic_meaning_js_1.SemanticRole.OVERACCENT],
      ["Caps", semantic_meaning_js_1.SemanticType.IDENTIFIER, semantic_meaning_js_1.SemanticRole.LATINLETTER],
      ["CombinationPermutation", semantic_meaning_js_1.SemanticType.APPL, semantic_meaning_js_1.SemanticRole.UNKNOWN],
      ["Ellipses", semantic_meaning_js_1.SemanticType.PUNCTUATION, semantic_meaning_js_1.SemanticRole.ELLIPSIS],
      ["Exponent", semantic_meaning_js_1.SemanticType.SUPERSCRIPT, ""],
      ["Fraction", semantic_meaning_js_1.SemanticType.FRACTION, ""],
      ["Functions", semantic_meaning_js_1.SemanticType.APPL, semantic_meaning_js_1.SemanticRole.SIMPLEFUNC],
      ["ImpliedTimes", semantic_meaning_js_1.SemanticType.OPERATOR, semantic_meaning_js_1.SemanticRole.IMPLICIT],
      ["Log", semantic_meaning_js_1.SemanticType.APPL, semantic_meaning_js_1.SemanticRole.PREFIXFUNC],
      ["Matrix", semantic_meaning_js_1.SemanticType.MATRIX, ""],
      ["Matrix", semantic_meaning_js_1.SemanticType.VECTOR, ""],
      ["MultiLineLabel", semantic_meaning_js_1.SemanticType.MULTILINE, semantic_meaning_js_1.SemanticRole.LABEL],
      ["MultiLineOverview", semantic_meaning_js_1.SemanticType.MULTILINE, semantic_meaning_js_1.SemanticRole.TABLE],
      ["MultiLinePausesBetweenColumns", semantic_meaning_js_1.SemanticType.MULTILINE, semantic_meaning_js_1.SemanticRole.TABLE],
      ["MultiLineLabel", semantic_meaning_js_1.SemanticType.TABLE, semantic_meaning_js_1.SemanticRole.LABEL],
      ["MultiLineOverview", semantic_meaning_js_1.SemanticType.TABLE, semantic_meaning_js_1.SemanticRole.TABLE],
      ["MultiLinePausesBetweenColumns", semantic_meaning_js_1.SemanticType.TABLE, semantic_meaning_js_1.SemanticRole.TABLE],
      ["MultiLineLabel", semantic_meaning_js_1.SemanticType.CASES, semantic_meaning_js_1.SemanticRole.LABEL],
      ["MultiLineOverview", semantic_meaning_js_1.SemanticType.CASES, semantic_meaning_js_1.SemanticRole.TABLE],
      ["MultiLinePausesBetweenColumns", semantic_meaning_js_1.SemanticType.CASES, semantic_meaning_js_1.SemanticRole.TABLE],
      ["MultsymbolDot", semantic_meaning_js_1.SemanticType.OPERATOR, semantic_meaning_js_1.SemanticRole.MULTIPLICATION],
      ["MultsymbolX", semantic_meaning_js_1.SemanticType.OPERATOR, semantic_meaning_js_1.SemanticRole.MULTIPLICATION],
      ["Paren", semantic_meaning_js_1.SemanticType.FENCED, semantic_meaning_js_1.SemanticRole.LEFTRIGHT],
      ["Prime", semantic_meaning_js_1.SemanticType.SUPERSCRIPT, semantic_meaning_js_1.SemanticRole.PRIME],
      ["Roots", semantic_meaning_js_1.SemanticType.ROOT, ""],
      ["Roots", semantic_meaning_js_1.SemanticType.SQRT, ""],
      ["SetMemberSymbol", semantic_meaning_js_1.SemanticType.RELATION, semantic_meaning_js_1.SemanticRole.ELEMENT],
      ["Sets", semantic_meaning_js_1.SemanticType.FENCED, semantic_meaning_js_1.SemanticRole.SETEXT],
      ["TriangleSymbol", semantic_meaning_js_1.SemanticType.IDENTIFIER, semantic_meaning_js_1.SemanticRole.GREEKLETTER],
      ["Trig", semantic_meaning_js_1.SemanticType.APPL, semantic_meaning_js_1.SemanticRole.PREFIXFUNC],
      ["VerticalLine", semantic_meaning_js_1.SemanticType.PUNCTUATED, semantic_meaning_js_1.SemanticRole.VBAR]
    ];
    var SEMANTIC_MAPPING_ = function() {
      const result = {};
      for (let i = 0, triple; triple = REVERSE_MAPPING[i]; i++) {
        const pref = triple[0];
        let role = result[triple[1]];
        if (!role) {
          role = {};
          result[triple[1]] = role;
        }
        role[triple[2]] = pref;
      }
      return result;
    }();
    engine_js_1.Engine.getInstance().comparators["clearspeak"] = ClearspeakPreferences.comparator;
    engine_js_1.Engine.getInstance().parsers["clearspeak"] = new Parser();
  }
});

// node_modules/speech-rule-engine/js/speech_generator/abstract_speech_generator.js
var require_abstract_speech_generator = __commonJS({
  "node_modules/speech-rule-engine/js/speech_generator/abstract_speech_generator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractSpeechGenerator = void 0;
    var engine_setup_js_1 = require_engine_setup();
    var EnrichAttr = require_enrich_attr();
    var rebuild_stree_js_1 = require_rebuild_stree();
    var SpeechGeneratorUtil = require_speech_generator_util();
    var EngineConst = require_engine_const();
    var locale_js_1 = require_locale();
    var clearspeak_preferences_js_1 = require_clearspeak_preferences();
    var AbstractSpeechGenerator = class {
      constructor() {
        this.modality = EnrichAttr.addPrefix("speech");
        this.rebuilt_ = null;
        this.options_ = {};
      }
      getRebuilt() {
        return this.rebuilt_;
      }
      setRebuilt(rebuilt) {
        this.rebuilt_ = rebuilt;
      }
      computeRebuilt(xml, force = false) {
        if (!this.rebuilt_ || force) {
          this.rebuilt_ = new rebuild_stree_js_1.RebuildStree(xml);
        }
        return this.rebuilt_;
      }
      setOptions(options) {
        this.options_ = options || {};
        this.modality = EnrichAttr.addPrefix(this.options_.modality || "speech");
      }
      setOption(key, value) {
        const options = this.getOptions();
        options[key] = value;
        this.setOptions(options);
      }
      getOptions() {
        return this.options_;
      }
      generateSpeech(_node, xml) {
        if (!this.rebuilt_) {
          this.rebuilt_ = new rebuild_stree_js_1.RebuildStree(xml);
        }
        (0, engine_setup_js_1.setup)(this.options_);
        return SpeechGeneratorUtil.computeMarkup(this.getRebuilt().xml);
      }
      nextRules() {
        const options = this.getOptions();
        if (options.modality !== "speech") {
          return;
        }
        const prefs = clearspeak_preferences_js_1.ClearspeakPreferences.getLocalePreferences();
        if (!prefs[options.locale]) {
          return;
        }
        EngineConst.DOMAIN_TO_STYLES[options.domain] = options.style;
        options.domain = options.domain === "mathspeak" ? "clearspeak" : "mathspeak";
        options.style = EngineConst.DOMAIN_TO_STYLES[options.domain];
        this.setOptions(options);
      }
      nextStyle(id) {
        this.setOption("style", this.nextStyle_(this.getRebuilt().nodeDict[id]));
      }
      nextStyle_(node) {
        const { modality, domain, style } = this.getOptions();
        if (modality !== "speech") {
          return style;
        }
        if (domain === "mathspeak") {
          const styles = ["default", "brief", "sbrief"];
          const index = styles.indexOf(style);
          if (index === -1) {
            return style;
          }
          return index >= styles.length - 1 ? styles[0] : styles[index + 1];
        }
        if (domain === "clearspeak") {
          const prefs = clearspeak_preferences_js_1.ClearspeakPreferences.getLocalePreferences();
          const loc = prefs["en"];
          if (!loc) {
            return "default";
          }
          const smart = clearspeak_preferences_js_1.ClearspeakPreferences.relevantPreferences(node);
          const current = clearspeak_preferences_js_1.ClearspeakPreferences.findPreference(style, smart);
          const options = loc[smart].map(function(x) {
            return x.split("_")[1];
          });
          const index = options.indexOf(current);
          if (index === -1) {
            return style;
          }
          const next = index >= options.length - 1 ? options[0] : options[index + 1];
          const result = clearspeak_preferences_js_1.ClearspeakPreferences.addPreference(style, smart, next);
          return result;
        }
        return style;
      }
      getLevel(depth) {
        return locale_js_1.LOCALE.MESSAGES.navigate.LEVEL + " " + depth;
      }
      getActionable(actionable) {
        return actionable ? actionable < 0 ? locale_js_1.LOCALE.MESSAGES.navigate.EXPANDABLE : locale_js_1.LOCALE.MESSAGES.navigate.COLLAPSIBLE : "";
      }
    };
    exports2.AbstractSpeechGenerator = AbstractSpeechGenerator;
  }
});

// node_modules/speech-rule-engine/js/speech_generator/adhoc_speech_generator.js
var require_adhoc_speech_generator = __commonJS({
  "node_modules/speech-rule-engine/js/speech_generator/adhoc_speech_generator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AdhocSpeechGenerator = void 0;
    var abstract_speech_generator_js_1 = require_abstract_speech_generator();
    var AdhocSpeechGenerator = class extends abstract_speech_generator_js_1.AbstractSpeechGenerator {
      getSpeech(node, xml) {
        const speech = this.generateSpeech(node, xml);
        node.setAttribute(this.modality, speech);
        return speech;
      }
    };
    exports2.AdhocSpeechGenerator = AdhocSpeechGenerator;
  }
});

// node_modules/speech-rule-engine/js/speech_generator/color_generator.js
var require_color_generator = __commonJS({
  "node_modules/speech-rule-engine/js/speech_generator/color_generator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ColorGenerator = void 0;
    var DomUtil = require_dom_util();
    var enrich_attr_js_1 = require_enrich_attr();
    var color_picker_js_1 = require_color_picker();
    var rebuild_stree_js_1 = require_rebuild_stree();
    var WalkerUtil = require_walker_util();
    var abstract_speech_generator_js_1 = require_abstract_speech_generator();
    var ColorGenerator = class _ColorGenerator extends abstract_speech_generator_js_1.AbstractSpeechGenerator {
      constructor() {
        super(...arguments);
        this.modality = (0, enrich_attr_js_1.addPrefix)("foreground");
        this.contrast = new color_picker_js_1.ContrastPicker();
      }
      static visitStree_(tree, leaves, ignore) {
        if (!tree.childNodes.length) {
          if (!ignore[tree.id]) {
            leaves.push(tree.id);
          }
          return;
        }
        if (tree.contentNodes.length) {
          if (tree.type === "punctuated") {
            tree.contentNodes.forEach((x) => ignore[x.id] = true);
          }
          if (tree.role !== "implicit") {
            leaves.push(tree.contentNodes.map((x) => x.id));
          }
        }
        if (tree.childNodes.length) {
          if (tree.role === "implicit") {
            const factors = [];
            let rest = [];
            for (const child of tree.childNodes) {
              const tt = [];
              _ColorGenerator.visitStree_(child, tt, ignore);
              if (tt.length <= 2) {
                factors.push(tt.shift());
              }
              rest = rest.concat(tt);
            }
            leaves.push(factors);
            rest.forEach((x) => leaves.push(x));
            return;
          }
          tree.childNodes.forEach((x) => _ColorGenerator.visitStree_(x, leaves, ignore));
        }
      }
      getSpeech(node, _xml) {
        return WalkerUtil.getAttribute(node, this.modality);
      }
      generateSpeech(node, xml) {
        if (!this.getRebuilt()) {
          this.setRebuilt(new rebuild_stree_js_1.RebuildStree(DomUtil.parseInput(xml)));
        }
        this.colorLeaves_(node);
        return WalkerUtil.getAttribute(node, this.modality);
      }
      colorLeaves_(node) {
        const leaves = [];
        _ColorGenerator.visitStree_(this.getRebuilt().streeRoot, leaves, {});
        for (const id of leaves) {
          const color = this.contrast.generate();
          let success = false;
          if (Array.isArray(id)) {
            success = id.map((x) => this.colorLeave_(node, x, color)).reduce((x, y) => x || y, false);
          } else {
            success = this.colorLeave_(node, id.toString(), color);
          }
          if (success) {
            this.contrast.increment();
          }
        }
      }
      colorLeave_(node, id, color) {
        const aux = WalkerUtil.getBySemanticId(node, id);
        if (aux) {
          aux.setAttribute(this.modality, color);
          return true;
        }
        return false;
      }
    };
    exports2.ColorGenerator = ColorGenerator;
  }
});

// node_modules/speech-rule-engine/js/speech_generator/direct_speech_generator.js
var require_direct_speech_generator = __commonJS({
  "node_modules/speech-rule-engine/js/speech_generator/direct_speech_generator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DirectSpeechGenerator = void 0;
    var WalkerUtil = require_walker_util();
    var abstract_speech_generator_js_1 = require_abstract_speech_generator();
    var DirectSpeechGenerator = class extends abstract_speech_generator_js_1.AbstractSpeechGenerator {
      getSpeech(node, _xml) {
        return WalkerUtil.getAttribute(node, this.modality);
      }
    };
    exports2.DirectSpeechGenerator = DirectSpeechGenerator;
  }
});

// node_modules/speech-rule-engine/js/speech_generator/dummy_speech_generator.js
var require_dummy_speech_generator = __commonJS({
  "node_modules/speech-rule-engine/js/speech_generator/dummy_speech_generator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DummySpeechGenerator = void 0;
    var abstract_speech_generator_js_1 = require_abstract_speech_generator();
    var DummySpeechGenerator = class extends abstract_speech_generator_js_1.AbstractSpeechGenerator {
      getSpeech(_node, _xml) {
        return "";
      }
    };
    exports2.DummySpeechGenerator = DummySpeechGenerator;
  }
});

// node_modules/speech-rule-engine/js/speech_generator/tree_speech_generator.js
var require_tree_speech_generator = __commonJS({
  "node_modules/speech-rule-engine/js/speech_generator/tree_speech_generator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TreeSpeechGenerator = void 0;
    var enrich_attr_js_1 = require_enrich_attr();
    var WalkerUtil = require_walker_util();
    var abstract_speech_generator_js_1 = require_abstract_speech_generator();
    var SpeechGeneratorUtil = require_speech_generator_util();
    var TreeSpeechGenerator = class extends abstract_speech_generator_js_1.AbstractSpeechGenerator {
      getSpeech(node, xml, root = null) {
        if (this.getRebuilt()) {
          SpeechGeneratorUtil.connectMactions(node, xml, this.getRebuilt().xml);
        }
        const speech = this.generateSpeech(node, xml);
        const nodes = this.getRebuilt().nodeDict;
        for (const [key, snode] of Object.entries(nodes)) {
          const innerMml = WalkerUtil.getBySemanticId(xml, key);
          const innerNode = WalkerUtil.getBySemanticId(node, key) || root && WalkerUtil.getBySemanticId(root, key);
          if (!innerMml || !innerNode) {
            continue;
          }
          if (!this.modality || this.modality === enrich_attr_js_1.Attribute.SPEECH) {
            SpeechGeneratorUtil.addSpeech(innerNode, snode, this.getRebuilt().xml);
          } else {
            SpeechGeneratorUtil.addModality(innerNode, snode, this.modality);
          }
          if (this.modality === enrich_attr_js_1.Attribute.SPEECH) {
            SpeechGeneratorUtil.addPrefix(innerNode, snode);
          }
        }
        return speech;
      }
    };
    exports2.TreeSpeechGenerator = TreeSpeechGenerator;
  }
});

// node_modules/speech-rule-engine/js/speech_generator/node_speech_generator.js
var require_node_speech_generator = __commonJS({
  "node_modules/speech-rule-engine/js/speech_generator/node_speech_generator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NodeSpeechGenerator = void 0;
    var WalkerUtil = require_walker_util();
    var tree_speech_generator_js_1 = require_tree_speech_generator();
    var NodeSpeechGenerator = class extends tree_speech_generator_js_1.TreeSpeechGenerator {
      getSpeech(node, _xml) {
        super.getSpeech(node, _xml);
        return WalkerUtil.getAttribute(node, this.modality);
      }
    };
    exports2.NodeSpeechGenerator = NodeSpeechGenerator;
  }
});

// node_modules/speech-rule-engine/js/speech_generator/summary_speech_generator.js
var require_summary_speech_generator = __commonJS({
  "node_modules/speech-rule-engine/js/speech_generator/summary_speech_generator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SummarySpeechGenerator = void 0;
    var abstract_speech_generator_js_1 = require_abstract_speech_generator();
    var SpeechGeneratorUtil = require_speech_generator_util();
    var engine_setup_js_1 = require_engine_setup();
    var enrich_attr_js_1 = require_enrich_attr();
    var SummarySpeechGenerator = class extends abstract_speech_generator_js_1.AbstractSpeechGenerator {
      getSpeech(node, _xml) {
        (0, engine_setup_js_1.setup)(this.getOptions());
        const id = node.getAttribute(enrich_attr_js_1.Attribute.ID);
        const snode = this.getRebuilt().streeRoot.querySelectorAll((x) => x.id.toString() === id)[0];
        SpeechGeneratorUtil.addModality(node, snode, this.modality);
        const speech = node.getAttribute(enrich_attr_js_1.Attribute.SUMMARY);
        return speech;
      }
    };
    exports2.SummarySpeechGenerator = SummarySpeechGenerator;
  }
});

// node_modules/speech-rule-engine/js/speech_generator/speech_generator_factory.js
var require_speech_generator_factory = __commonJS({
  "node_modules/speech-rule-engine/js/speech_generator/speech_generator_factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generator = generator;
    var adhoc_speech_generator_js_1 = require_adhoc_speech_generator();
    var color_generator_js_1 = require_color_generator();
    var direct_speech_generator_js_1 = require_direct_speech_generator();
    var dummy_speech_generator_js_1 = require_dummy_speech_generator();
    var node_speech_generator_js_1 = require_node_speech_generator();
    var summary_speech_generator_js_1 = require_summary_speech_generator();
    var tree_speech_generator_js_1 = require_tree_speech_generator();
    function generator(type) {
      const constructor = generatorMapping[type] || generatorMapping.Direct;
      return constructor();
    }
    var generatorMapping = {
      Adhoc: () => new adhoc_speech_generator_js_1.AdhocSpeechGenerator(),
      Color: () => new color_generator_js_1.ColorGenerator(),
      Direct: () => new direct_speech_generator_js_1.DirectSpeechGenerator(),
      Dummy: () => new dummy_speech_generator_js_1.DummySpeechGenerator(),
      Node: () => new node_speech_generator_js_1.NodeSpeechGenerator(),
      Summary: () => new summary_speech_generator_js_1.SummarySpeechGenerator(),
      Tree: () => new tree_speech_generator_js_1.TreeSpeechGenerator()
    };
  }
});

// node_modules/speech-rule-engine/js/walker/focus.js
var require_focus = __commonJS({
  "node_modules/speech-rule-engine/js/walker/focus.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Focus = void 0;
    var WalkerUtil = require_walker_util();
    var Focus = class _Focus {
      static factory(primaryId, nodeIds, rebuilt, dom) {
        const idFunc = (id) => WalkerUtil.getBySemanticId(dom, id);
        const dict = rebuilt.nodeDict;
        const node = idFunc(primaryId);
        const nodes = nodeIds.map(idFunc);
        const snodes = nodeIds.map(function(primaryId2) {
          return dict[primaryId2];
        });
        const focus = new _Focus(snodes, dict[primaryId]);
        focus.domNodes = nodes;
        focus.domPrimary_ = node;
        focus.allNodes = _Focus.generateAllVisibleNodes_(nodeIds, nodes, dict, dom);
        return focus;
      }
      static generateAllVisibleNodes_(ids, nodes, dict, domNode) {
        let result = [];
        for (let i = 0, l = ids.length; i < l; i++) {
          if (nodes[i]) {
            const allNodes = _Focus.getAllVisibleNodes([ids[i]], domNode);
            if (allNodes.length) {
              result = result.concat(allNodes);
            } else {
              result.push(nodes[i]);
            }
            continue;
          }
          const virtual = dict[ids[i]];
          if (!virtual) {
            continue;
          }
          const childIds = virtual.childNodes.map((x) => x.id.toString());
          const children = _Focus.getAllVisibleNodes(childIds, domNode);
          result = result.concat(_Focus.generateAllVisibleNodes_(childIds, children, dict, domNode));
        }
        return result;
      }
      static getAllVisibleNodes(ids, domNode) {
        let result = [];
        for (const id of ids) {
          result = result.concat(WalkerUtil.getAllBySemanticId(domNode, id));
        }
        return result;
      }
      constructor(nodes, primary) {
        this.nodes = nodes;
        this.primary = primary;
        this.domNodes = [];
        this.domPrimary_ = null;
        this.allNodes = [];
      }
      getSemanticPrimary() {
        return this.primary;
      }
      getSemanticNodes() {
        return this.nodes;
      }
      getNodes() {
        return this.allNodes;
      }
      getDomNodes() {
        return this.domNodes;
      }
      getDomPrimary() {
        return this.domPrimary_;
      }
      toString() {
        return "Primary:" + this.domPrimary_ + " Nodes:" + this.domNodes;
      }
      clone() {
        const focus = new _Focus(this.nodes, this.primary);
        focus.domNodes = this.domNodes;
        focus.domPrimary_ = this.domPrimary_;
        focus.allNodes = this.allNodes;
        return focus;
      }
    };
    exports2.Focus = Focus;
  }
});

// node_modules/speech-rule-engine/js/walker/walker.js
var require_walker = __commonJS({
  "node_modules/speech-rule-engine/js/walker/walker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WalkerState = exports2.WalkerMoves = void 0;
    var WalkerMoves;
    (function(WalkerMoves2) {
      WalkerMoves2["UP"] = "up";
      WalkerMoves2["DOWN"] = "down";
      WalkerMoves2["LEFT"] = "left";
      WalkerMoves2["RIGHT"] = "right";
      WalkerMoves2["REPEAT"] = "repeat";
      WalkerMoves2["DEPTH"] = "depth";
      WalkerMoves2["ENTER"] = "enter";
      WalkerMoves2["EXPAND"] = "expand";
      WalkerMoves2["HOME"] = "home";
      WalkerMoves2["SUMMARY"] = "summary";
      WalkerMoves2["DETAIL"] = "detail";
      WalkerMoves2["ROW"] = "row";
      WalkerMoves2["CELL"] = "cell";
    })(WalkerMoves || (exports2.WalkerMoves = WalkerMoves = {}));
    var WalkerState = class _WalkerState {
      static resetState(id) {
        delete _WalkerState.STATE[id];
      }
      static setState(id, value) {
        _WalkerState.STATE[id] = value;
      }
      static getState(id) {
        return _WalkerState.STATE[id];
      }
    };
    exports2.WalkerState = WalkerState;
    WalkerState.STATE = {};
  }
});

// node_modules/speech-rule-engine/js/walker/abstract_walker.js
var require_abstract_walker = __commonJS({
  "node_modules/speech-rule-engine/js/walker/abstract_walker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractWalker = void 0;
    var auditory_description_js_1 = require_auditory_description();
    var AuralRendering = require_aural_rendering();
    var DomUtil = require_dom_util();
    var engine_setup_js_1 = require_engine_setup();
    var event_util_js_1 = require_event_util();
    var enrich_attr_js_1 = require_enrich_attr();
    var locale_js_1 = require_locale();
    var grammar_js_1 = require_grammar();
    var semantic_skeleton_js_1 = require_semantic_skeleton();
    var SpeechGeneratorFactory = require_speech_generator_factory();
    var SpeechGeneratorUtil = require_speech_generator_util();
    var focus_js_1 = require_focus();
    var rebuild_stree_js_1 = require_rebuild_stree();
    var walker_js_1 = require_walker();
    var WalkerUtil = require_walker_util();
    var XpathUtil = require_xpath_util();
    var AbstractWalker = class _AbstractWalker {
      constructor(node, generator, highlighter, xml) {
        this.node = node;
        this.generator = generator;
        this.highlighter = highlighter;
        this.modifier = false;
        this.keyMapping = /* @__PURE__ */ new Map([
          [event_util_js_1.KeyCode.UP, this.up.bind(this)],
          [event_util_js_1.KeyCode.DOWN, this.down.bind(this)],
          [event_util_js_1.KeyCode.RIGHT, this.right.bind(this)],
          [event_util_js_1.KeyCode.LEFT, this.left.bind(this)],
          [event_util_js_1.KeyCode.TAB, this.repeat.bind(this)],
          [event_util_js_1.KeyCode.DASH, this.expand.bind(this)],
          [event_util_js_1.KeyCode.SPACE, this.depth.bind(this)],
          [event_util_js_1.KeyCode.HOME, this.home.bind(this)],
          [event_util_js_1.KeyCode.X, this.summary.bind(this)],
          [event_util_js_1.KeyCode.Z, this.detail.bind(this)],
          [event_util_js_1.KeyCode.V, this.virtualize.bind(this)],
          [event_util_js_1.KeyCode.P, this.previous.bind(this)],
          [event_util_js_1.KeyCode.U, this.undo.bind(this)],
          [event_util_js_1.KeyCode.LESS, this.previousRules.bind(this)],
          [event_util_js_1.KeyCode.GREATER, this.nextRules.bind(this)]
        ]);
        this.cursors = [];
        this.xml_ = null;
        this.rebuilt_ = null;
        this.focus_ = null;
        this.active_ = false;
        if (this.node.id) {
          this.id = this.node.id;
        } else if (this.node.hasAttribute(_AbstractWalker.SRE_ID_ATTR)) {
          this.id = this.node.getAttribute(_AbstractWalker.SRE_ID_ATTR);
        } else {
          this.node.setAttribute(_AbstractWalker.SRE_ID_ATTR, _AbstractWalker.ID_COUNTER.toString());
          this.id = _AbstractWalker.ID_COUNTER++;
        }
        this.rootNode = WalkerUtil.getSemanticRoot(node);
        this.rootId = this.rootNode.getAttribute(enrich_attr_js_1.Attribute.ID);
        this.xmlString_ = xml;
        this.moved = walker_js_1.WalkerMoves.ENTER;
      }
      getXml() {
        if (!this.xml_) {
          this.xml_ = DomUtil.parseInput(this.xmlString_);
        }
        return this.xml_;
      }
      getRebuilt() {
        if (!this.rebuilt_) {
          this.rebuildStree();
        }
        return this.rebuilt_;
      }
      isActive() {
        return this.active_;
      }
      activate() {
        if (this.isActive()) {
          return;
        }
        this.toggleActive_();
      }
      deactivate() {
        if (!this.isActive()) {
          return;
        }
        walker_js_1.WalkerState.setState(this.id, this.primaryId());
        this.toggleActive_();
      }
      getFocus(update = false) {
        if (this.rootId === null) {
          this.getRebuilt();
        }
        if (!this.focus_) {
          this.focus_ = this.singletonFocus(this.rootId);
        }
        if (update) {
          this.updateFocus();
        }
        return this.focus_;
      }
      setFocus(focus) {
        this.focus_ = focus;
      }
      getDepth() {
        return this.levels.depth() - 1;
      }
      isSpeech() {
        return this.generator.modality === enrich_attr_js_1.Attribute.SPEECH;
      }
      focusDomNodes() {
        return this.getFocus().getDomNodes();
      }
      focusSemanticNodes() {
        return this.getFocus().getSemanticNodes();
      }
      speech() {
        const nodes = this.focusDomNodes();
        if (!nodes.length) {
          return "";
        }
        const special = this.specialMove();
        if (special !== null) {
          return special;
        }
        switch (this.moved) {
          case walker_js_1.WalkerMoves.DEPTH:
            return this.depth_();
          case walker_js_1.WalkerMoves.SUMMARY:
            return this.summary_();
          case walker_js_1.WalkerMoves.DETAIL:
            return this.detail_();
          default: {
            const speech = [];
            const snodes = this.focusSemanticNodes();
            for (let i = 0, l = nodes.length; i < l; i++) {
              const node = nodes[i];
              const snode = snodes[i];
              speech.push(node ? this.generator.getSpeech(node, this.getXml(), this.node) : SpeechGeneratorUtil.recomputeMarkup(snode));
            }
            return this.mergePrefix_(speech);
          }
        }
      }
      move(key) {
        const direction = this.keyMapping.get(key);
        if (!direction) {
          return null;
        }
        const focus = direction();
        if (!focus || focus === this.getFocus()) {
          return false;
        }
        this.setFocus(focus);
        if (this.moved === walker_js_1.WalkerMoves.HOME) {
          this.levels = this.initLevels();
        }
        return true;
      }
      up() {
        this.moved = walker_js_1.WalkerMoves.UP;
        return this.getFocus();
      }
      down() {
        this.moved = walker_js_1.WalkerMoves.DOWN;
        return this.getFocus();
      }
      left() {
        this.moved = walker_js_1.WalkerMoves.LEFT;
        return this.getFocus();
      }
      right() {
        this.moved = walker_js_1.WalkerMoves.RIGHT;
        return this.getFocus();
      }
      repeat() {
        this.moved = walker_js_1.WalkerMoves.REPEAT;
        return this.getFocus().clone();
      }
      depth() {
        this.moved = this.isSpeech() ? walker_js_1.WalkerMoves.DEPTH : walker_js_1.WalkerMoves.REPEAT;
        return this.getFocus().clone();
      }
      home() {
        this.moved = walker_js_1.WalkerMoves.HOME;
        const focus = this.singletonFocus(this.rootId);
        return focus;
      }
      getBySemanticId(id) {
        return WalkerUtil.getBySemanticId(this.node, id);
      }
      primaryId() {
        return this.getFocus().getSemanticPrimary().id.toString();
      }
      expand() {
        const primary = this.getFocus().getDomPrimary();
        const expandable = this.actionable_(primary);
        if (!expandable) {
          return this.getFocus();
        }
        this.moved = walker_js_1.WalkerMoves.EXPAND;
        expandable.dispatchEvent(new Event("click"));
        return this.getFocus().clone();
      }
      expandable(node) {
        const parent = !!this.actionable_(node);
        return parent && node.childNodes.length === 0;
      }
      collapsible(node) {
        const parent = !!this.actionable_(node);
        return parent && node.childNodes.length > 0;
      }
      restoreState() {
        if (!this.highlighter) {
          return;
        }
        const state = walker_js_1.WalkerState.getState(this.id);
        if (!state) {
          return;
        }
        let node = this.getRebuilt().nodeDict[state];
        const path = [];
        while (node) {
          path.push(node.id);
          node = node.parent;
        }
        path.pop();
        while (path.length > 0) {
          this.down();
          const id = path.pop();
          const focus = this.findFocusOnLevel(id);
          if (!focus) {
            break;
          }
          this.setFocus(focus);
        }
        this.moved = walker_js_1.WalkerMoves.ENTER;
      }
      updateFocus() {
        this.setFocus(focus_js_1.Focus.factory(this.getFocus().getSemanticPrimary().id.toString(), this.getFocus().getSemanticNodes().map((x) => x.id.toString()), this.getRebuilt(), this.node));
      }
      rebuildStree() {
        this.rebuilt_ = new rebuild_stree_js_1.RebuildStree(this.getXml());
        this.rootId = this.rebuilt_.stree.root.id.toString();
        this.generator.setRebuilt(this.rebuilt_);
        this.skeleton = semantic_skeleton_js_1.SemanticSkeleton.fromTree(this.rebuilt_.stree);
        this.skeleton.populate();
        this.focus_ = this.singletonFocus(this.rootId);
        this.levels = this.initLevels();
        SpeechGeneratorUtil.connectMactions(this.node, this.getXml(), this.rebuilt_.xml);
      }
      previousLevel() {
        const dnode = this.getFocus().getDomPrimary();
        return dnode ? WalkerUtil.getAttribute(dnode, enrich_attr_js_1.Attribute.PARENT) : this.getFocus().getSemanticPrimary().parent.id.toString();
      }
      nextLevel() {
        const dnode = this.getFocus().getDomPrimary();
        let children;
        let content;
        if (dnode) {
          children = WalkerUtil.splitAttribute(WalkerUtil.getAttribute(dnode, enrich_attr_js_1.Attribute.CHILDREN));
          content = WalkerUtil.splitAttribute(WalkerUtil.getAttribute(dnode, enrich_attr_js_1.Attribute.CONTENT));
          const type = WalkerUtil.getAttribute(dnode, enrich_attr_js_1.Attribute.TYPE);
          const role = WalkerUtil.getAttribute(dnode, enrich_attr_js_1.Attribute.ROLE);
          return this.combineContentChildren(type, role, content, children);
        }
        const toIds = (x) => x.id.toString();
        const snode = this.getRebuilt().nodeDict[this.primaryId()];
        children = snode.childNodes.map(toIds);
        content = snode.contentNodes.map(toIds);
        if (children.length === 0) {
          return [];
        }
        return this.combineContentChildren(snode.type, snode.role, content, children);
      }
      singletonFocus(id) {
        this.getRebuilt();
        const ids = this.retrieveVisuals(id);
        return this.focusFromId(id, ids);
      }
      retrieveVisuals(id) {
        if (!this.skeleton) {
          return [id];
        }
        const num = parseInt(id, 10);
        const semStree = this.skeleton.subtreeNodes(num);
        if (!semStree.length) {
          return [id];
        }
        semStree.unshift(num);
        const mmlStree = {};
        const result = [];
        XpathUtil.updateEvaluator(this.getXml());
        for (const child of semStree) {
          if (mmlStree[child]) {
            continue;
          }
          result.push(child.toString());
          mmlStree[child] = true;
          this.subtreeIds(child, mmlStree);
        }
        return result;
      }
      subtreeIds(id, nodes) {
        const xmlRoot = XpathUtil.evalXPath(`//*[@data-semantic-id="${id}"]`, this.getXml());
        const xpath = XpathUtil.evalXPath("*//@data-semantic-id", xmlRoot[0]);
        xpath.forEach((x) => nodes[parseInt(x.textContent, 10)] = true);
      }
      focusFromId(id, ids) {
        return focus_js_1.Focus.factory(id, ids, this.getRebuilt(), this.node);
      }
      summary() {
        this.moved = this.isSpeech() ? walker_js_1.WalkerMoves.SUMMARY : walker_js_1.WalkerMoves.REPEAT;
        return this.getFocus().clone();
      }
      detail() {
        this.moved = this.isSpeech() ? walker_js_1.WalkerMoves.DETAIL : walker_js_1.WalkerMoves.REPEAT;
        return this.getFocus().clone();
      }
      specialMove() {
        return null;
      }
      virtualize(opt_undo) {
        this.cursors.push({
          focus: this.getFocus(),
          levels: this.levels,
          undo: opt_undo || !this.cursors.length
        });
        this.levels = this.levels.clone();
        return this.getFocus().clone();
      }
      previous() {
        const previous = this.cursors.pop();
        if (!previous) {
          return this.getFocus();
        }
        this.levels = previous.levels;
        return previous.focus;
      }
      undo() {
        let previous;
        do {
          previous = this.cursors.pop();
        } while (previous && !previous.undo);
        if (!previous) {
          return this.getFocus();
        }
        this.levels = previous.levels;
        return previous.focus;
      }
      update(options) {
        (0, engine_setup_js_1.setup)(options).then(() => SpeechGeneratorFactory.generator("Tree").getSpeech(this.node, this.getXml()));
      }
      nextRules() {
        this.generator.nextRules();
        const options = this.generator.getOptions();
        if (options.modality !== "speech") {
          return this.getFocus();
        }
        this.update(options);
        this.moved = walker_js_1.WalkerMoves.REPEAT;
        return this.getFocus().clone();
      }
      previousRules() {
        var _a;
        this.generator.nextStyle((_a = this.getFocus().getSemanticPrimary()) === null || _a === void 0 ? void 0 : _a.id.toString());
        const options = this.generator.getOptions();
        if (options.modality !== "speech") {
          return this.getFocus();
        }
        this.update(options);
        this.moved = walker_js_1.WalkerMoves.REPEAT;
        return this.getFocus().clone();
      }
      refocus() {
        let focus = this.getFocus();
        let last;
        while (!focus.getNodes().length) {
          last = this.levels.peek();
          const up = this.up();
          if (!up) {
            break;
          }
          this.setFocus(up);
          focus = this.getFocus(true);
        }
        this.levels.push(last);
        this.setFocus(focus);
      }
      toggleActive_() {
        this.active_ = !this.active_;
      }
      mergePrefix_(speech, pre = []) {
        const prefix = this.isSpeech() ? this.prefix_() : "";
        if (prefix) {
          speech.unshift(prefix);
        }
        const postfix = this.isSpeech() ? this.postfix_() : "";
        if (postfix) {
          speech.push(postfix);
        }
        return AuralRendering.finalize(AuralRendering.merge(pre.concat(speech)));
      }
      prefix_() {
        const nodes = this.getFocus().getDomNodes();
        const snodes = this.getFocus().getSemanticNodes();
        return nodes[0] ? WalkerUtil.getAttribute(nodes[0], enrich_attr_js_1.Attribute.PREFIX) : SpeechGeneratorUtil.retrievePrefix(snodes[0]);
      }
      postfix_() {
        const nodes = this.getFocus().getDomNodes();
        return nodes[0] ? WalkerUtil.getAttribute(nodes[0], enrich_attr_js_1.Attribute.POSTFIX) : "";
      }
      depth_() {
        const oldDepth = grammar_js_1.Grammar.getInstance().getParameter("depth");
        grammar_js_1.Grammar.getInstance().setParameter("depth", true);
        const primary = this.getFocus().getDomPrimary();
        const expand = this.expandable(primary) ? locale_js_1.LOCALE.MESSAGES.navigate.EXPANDABLE : this.collapsible(primary) ? locale_js_1.LOCALE.MESSAGES.navigate.COLLAPSIBLE : "";
        const level = locale_js_1.LOCALE.MESSAGES.navigate.LEVEL + " " + this.getDepth();
        const snodes = this.getFocus().getSemanticNodes();
        const prefix = SpeechGeneratorUtil.retrievePrefix(snodes[0]);
        const audio = [
          new auditory_description_js_1.AuditoryDescription({ text: level, personality: {} }),
          new auditory_description_js_1.AuditoryDescription({ text: prefix, personality: {} }),
          new auditory_description_js_1.AuditoryDescription({ text: expand, personality: {} })
        ];
        grammar_js_1.Grammar.getInstance().setParameter("depth", oldDepth);
        return AuralRendering.finalize(AuralRendering.markup(audio));
      }
      actionable_(node) {
        const parent = node === null || node === void 0 ? void 0 : node.parentNode;
        return parent && this.highlighter.isMactionNode(parent) ? parent : null;
      }
      summary_() {
        const sprimary = this.getFocus().getSemanticPrimary();
        const sid = sprimary.id.toString();
        const snode = this.getRebuilt().xml.getAttribute("id") === sid ? this.getRebuilt().xml : DomUtil.querySelectorAllByAttrValue(this.getRebuilt().xml, "id", sid)[0];
        const summary = SpeechGeneratorUtil.retrieveSummary(snode);
        const speech = this.mergePrefix_([summary]);
        return speech;
      }
      detail_() {
        const sprimary = this.getFocus().getSemanticPrimary();
        const sid = sprimary.id.toString();
        const snode = this.getRebuilt().xml.getAttribute("id") === sid ? this.getRebuilt().xml : DomUtil.querySelectorAllByAttrValue(this.getRebuilt().xml, "id", sid)[0];
        const oldAlt = snode.getAttribute("alternative");
        snode.removeAttribute("alternative");
        const detail = SpeechGeneratorUtil.computeMarkup(snode);
        const speech = this.mergePrefix_([detail]);
        snode.setAttribute("alternative", oldAlt);
        return speech;
      }
    };
    exports2.AbstractWalker = AbstractWalker;
    AbstractWalker.ID_COUNTER = 0;
    AbstractWalker.SRE_ID_ATTR = "sre-explorer-id";
  }
});

// node_modules/speech-rule-engine/js/walker/dummy_walker.js
var require_dummy_walker = __commonJS({
  "node_modules/speech-rule-engine/js/walker/dummy_walker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DummyWalker = void 0;
    var abstract_walker_js_1 = require_abstract_walker();
    var DummyWalker = class extends abstract_walker_js_1.AbstractWalker {
      up() {
        return null;
      }
      down() {
        return null;
      }
      left() {
        return null;
      }
      right() {
        return null;
      }
      repeat() {
        return null;
      }
      depth() {
        return null;
      }
      home() {
        return null;
      }
      getDepth() {
        return 0;
      }
      initLevels() {
        return null;
      }
      combineContentChildren(_type, _role, _content, _children) {
        return [];
      }
      findFocusOnLevel(_id) {
        return null;
      }
    };
    exports2.DummyWalker = DummyWalker;
  }
});

// node_modules/speech-rule-engine/js/walker/levels.js
var require_levels = __commonJS({
  "node_modules/speech-rule-engine/js/walker/levels.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Levels = void 0;
    var Levels = class _Levels {
      constructor() {
        this.level_ = [];
      }
      push(level) {
        this.level_.push(level);
      }
      pop() {
        return this.level_.pop();
      }
      peek() {
        return this.level_[this.level_.length - 1] || null;
      }
      indexOf(element) {
        const last = this.peek();
        return !last ? null : last.indexOf(element);
      }
      find(pred) {
        const last = this.peek();
        if (!last) {
          return null;
        }
        for (let i = 0, l = last.length; i < l; i++) {
          if (pred(last[i])) {
            return last[i];
          }
        }
        return null;
      }
      get(index) {
        const last = this.peek();
        return !last || index < 0 || index >= last.length ? null : last[index];
      }
      depth() {
        return this.level_.length;
      }
      clone() {
        const levels = new _Levels();
        levels.level_ = this.level_.slice(0);
        return levels;
      }
      toString() {
        let str = "";
        for (let i = 0, level; level = this.level_[i]; i++) {
          str += "\n" + level.map(function(x) {
            return x.toString();
          });
        }
        return str;
      }
    };
    exports2.Levels = Levels;
  }
});

// node_modules/speech-rule-engine/js/walker/semantic_walker.js
var require_semantic_walker = __commonJS({
  "node_modules/speech-rule-engine/js/walker/semantic_walker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticWalker = void 0;
    var semantic_meaning_js_1 = require_semantic_meaning();
    var abstract_walker_js_1 = require_abstract_walker();
    var levels_js_1 = require_levels();
    var SemanticWalker = class extends abstract_walker_js_1.AbstractWalker {
      constructor(node, generator, highlighter, xml) {
        super(node, generator, highlighter, xml);
        this.node = node;
        this.generator = generator;
        this.highlighter = highlighter;
        this.levels = null;
        this.restoreState();
      }
      initLevels() {
        const levels = new levels_js_1.Levels();
        levels.push([this.getFocus()]);
        return levels;
      }
      up() {
        super.up();
        const parent = this.previousLevel();
        if (!parent) {
          return null;
        }
        this.levels.pop();
        const found = this.levels.find(function(focus) {
          return focus.getSemanticNodes().some(function(node) {
            return node.id.toString() === parent;
          });
        });
        return found;
      }
      down() {
        super.down();
        const children = this.nextLevel();
        if (children.length === 0) {
          return null;
        }
        this.levels.push(children);
        return children[0];
      }
      combineContentChildren(type, role, content, children) {
        switch (type) {
          case semantic_meaning_js_1.SemanticType.RELSEQ:
          case semantic_meaning_js_1.SemanticType.INFIXOP:
          case semantic_meaning_js_1.SemanticType.MULTIREL:
            return this.makePairList(children, content);
          case semantic_meaning_js_1.SemanticType.PREFIXOP:
            return [this.focusFromId(children[0], content.concat(children))];
          case semantic_meaning_js_1.SemanticType.POSTFIXOP:
            return [this.focusFromId(children[0], children.concat(content))];
          case semantic_meaning_js_1.SemanticType.MATRIX:
          case semantic_meaning_js_1.SemanticType.VECTOR:
          case semantic_meaning_js_1.SemanticType.FENCED:
            return [
              this.focusFromId(children[0], [content[0], children[0], content[1]])
            ];
          case semantic_meaning_js_1.SemanticType.CASES:
            return [this.focusFromId(children[0], [content[0], children[0]])];
          case semantic_meaning_js_1.SemanticType.PUNCTUATED:
            if (role === semantic_meaning_js_1.SemanticRole.TEXT) {
              return children.map(this.singletonFocus.bind(this));
            }
            if (children.length === content.length) {
              return content.map(this.singletonFocus.bind(this));
            }
            return this.combinePunctuations(children, content, [], []);
          case semantic_meaning_js_1.SemanticType.APPL:
            return [
              this.focusFromId(children[0], [children[0], content[0]]),
              this.singletonFocus(children[1])
            ];
          case semantic_meaning_js_1.SemanticType.ROOT:
            return [
              this.singletonFocus(children[0]),
              this.singletonFocus(children[1])
            ];
          default:
            return children.map(this.singletonFocus.bind(this));
        }
      }
      combinePunctuations(children, content, prepunct, acc) {
        if (children.length === 0) {
          return acc;
        }
        const child = children.shift();
        const cont = content.shift();
        if (child === cont) {
          prepunct.push(cont);
          return this.combinePunctuations(children, content, prepunct, acc);
        } else {
          content.unshift(cont);
          prepunct.push(child);
          if (children.length === content.length) {
            acc.push(this.focusFromId(child, prepunct.concat(content)));
            return acc;
          } else {
            acc.push(this.focusFromId(child, prepunct));
            return this.combinePunctuations(children, content, [], acc);
          }
        }
      }
      makePairList(children, content) {
        if (children.length === 0) {
          return [];
        }
        if (children.length === 1) {
          return [this.singletonFocus(children[0])];
        }
        const result = [this.singletonFocus(children.shift())];
        for (let i = 0, l = children.length; i < l; i++) {
          result.push(this.focusFromId(children[i], [content[i], children[i]]));
        }
        return result;
      }
      left() {
        super.left();
        const index = this.levels.indexOf(this.getFocus());
        if (index === null) {
          return null;
        }
        const ids = this.levels.get(index - 1);
        return ids ? ids : null;
      }
      right() {
        super.right();
        const index = this.levels.indexOf(this.getFocus());
        if (index === null) {
          return null;
        }
        const ids = this.levels.get(index + 1);
        return ids ? ids : null;
      }
      findFocusOnLevel(id) {
        const focus = this.levels.find((x) => {
          const pid = x.getSemanticPrimary().id;
          return pid === id;
        });
        return focus;
      }
    };
    exports2.SemanticWalker = SemanticWalker;
  }
});

// node_modules/speech-rule-engine/js/walker/syntax_walker.js
var require_syntax_walker = __commonJS({
  "node_modules/speech-rule-engine/js/walker/syntax_walker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SyntaxWalker = void 0;
    var base_util_js_1 = require_base_util();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var abstract_walker_js_1 = require_abstract_walker();
    var levels_js_1 = require_levels();
    var SyntaxWalker = class extends abstract_walker_js_1.AbstractWalker {
      constructor(node, generator, highlighter, xml) {
        super(node, generator, highlighter, xml);
        this.node = node;
        this.generator = generator;
        this.highlighter = highlighter;
        this.levels = null;
        this.restoreState();
      }
      initLevels() {
        const levels = new levels_js_1.Levels();
        levels.push([this.primaryId()]);
        return levels;
      }
      up() {
        super.up();
        const parent = this.previousLevel();
        if (!parent) {
          return null;
        }
        this.levels.pop();
        return this.singletonFocus(parent);
      }
      down() {
        super.down();
        const children = this.nextLevel();
        if (children.length === 0) {
          return null;
        }
        const focus = this.singletonFocus(children[0]);
        if (focus) {
          this.levels.push(children);
        }
        return focus;
      }
      combineContentChildren(type, role, content, children) {
        switch (type) {
          case semantic_meaning_js_1.SemanticType.RELSEQ:
          case semantic_meaning_js_1.SemanticType.INFIXOP:
          case semantic_meaning_js_1.SemanticType.MULTIREL:
            return (0, base_util_js_1.interleaveLists)(children, content);
          case semantic_meaning_js_1.SemanticType.PREFIXOP:
            return content.concat(children);
          case semantic_meaning_js_1.SemanticType.POSTFIXOP:
            return children.concat(content);
          case semantic_meaning_js_1.SemanticType.MATRIX:
          case semantic_meaning_js_1.SemanticType.VECTOR:
          case semantic_meaning_js_1.SemanticType.FENCED:
            children.unshift(content[0]);
            children.push(content[1]);
            return children;
          case semantic_meaning_js_1.SemanticType.CASES:
            children.unshift(content[0]);
            return children;
          case semantic_meaning_js_1.SemanticType.PUNCTUATED:
            if (role === semantic_meaning_js_1.SemanticRole.TEXT) {
              return (0, base_util_js_1.interleaveLists)(children, content);
            }
            return children;
          case semantic_meaning_js_1.SemanticType.APPL:
            return [children[0], content[0], children[1]];
          case semantic_meaning_js_1.SemanticType.ROOT:
            return [children[0], children[1]];
          default:
            return children;
        }
      }
      left() {
        super.left();
        const index = this.levels.indexOf(this.primaryId());
        if (index === null) {
          return null;
        }
        const id = this.levels.get(index - 1);
        return id ? this.singletonFocus(id) : null;
      }
      right() {
        super.right();
        const index = this.levels.indexOf(this.primaryId());
        if (index === null) {
          return null;
        }
        const id = this.levels.get(index + 1);
        return id ? this.singletonFocus(id) : null;
      }
      findFocusOnLevel(id) {
        return this.singletonFocus(id.toString());
      }
      focusDomNodes() {
        return [this.getFocus().getDomPrimary()];
      }
      focusSemanticNodes() {
        return [this.getFocus().getSemanticPrimary()];
      }
    };
    exports2.SyntaxWalker = SyntaxWalker;
  }
});

// node_modules/speech-rule-engine/js/walker/table_walker.js
var require_table_walker = __commonJS({
  "node_modules/speech-rule-engine/js/walker/table_walker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TableWalker = void 0;
    var DomUtil = require_dom_util();
    var event_util_js_1 = require_event_util();
    var semantic_meaning_js_1 = require_semantic_meaning();
    var syntax_walker_js_1 = require_syntax_walker();
    var walker_js_1 = require_walker();
    var TableWalker = class _TableWalker extends syntax_walker_js_1.SyntaxWalker {
      constructor(node, generator, highlighter, xml) {
        super(node, generator, highlighter, xml);
        this.node = node;
        this.generator = generator;
        this.highlighter = highlighter;
        this.firstJump = null;
        this.key_ = null;
        this.row_ = 0;
        this.currentTable_ = null;
        this.keyMapping.set(event_util_js_1.KeyCode.ZERO, this.jumpCell.bind(this));
        this.keyMapping.set(event_util_js_1.KeyCode.ONE, this.jumpCell.bind(this));
        this.keyMapping.set(event_util_js_1.KeyCode.TWO, this.jumpCell.bind(this));
        this.keyMapping.set(event_util_js_1.KeyCode.THREE, this.jumpCell.bind(this));
        this.keyMapping.set(event_util_js_1.KeyCode.FOUR, this.jumpCell.bind(this));
        this.keyMapping.set(event_util_js_1.KeyCode.FIVE, this.jumpCell.bind(this));
        this.keyMapping.set(event_util_js_1.KeyCode.SIX, this.jumpCell.bind(this));
        this.keyMapping.set(event_util_js_1.KeyCode.SEVEN, this.jumpCell.bind(this));
        this.keyMapping.set(event_util_js_1.KeyCode.EIGHT, this.jumpCell.bind(this));
        this.keyMapping.set(event_util_js_1.KeyCode.NINE, this.jumpCell.bind(this));
      }
      move(key) {
        this.key_ = key;
        const result = super.move(key);
        this.modifier = false;
        return result;
      }
      up() {
        this.moved = walker_js_1.WalkerMoves.UP;
        return this.eligibleCell_() ? this.verticalMove_(false) : super.up();
      }
      down() {
        this.moved = walker_js_1.WalkerMoves.DOWN;
        return this.eligibleCell_() ? this.verticalMove_(true) : super.down();
      }
      jumpCell() {
        if (!this.isInTable_() || this.key_ === null) {
          return this.getFocus();
        }
        if (this.moved === walker_js_1.WalkerMoves.ROW) {
          this.moved = walker_js_1.WalkerMoves.CELL;
          const column = this.key_ - event_util_js_1.KeyCode.ZERO;
          if (!this.isLegalJump_(this.row_, column)) {
            return this.getFocus();
          }
          return this.jumpCell_(this.row_, column);
        }
        const row = this.key_ - event_util_js_1.KeyCode.ZERO;
        if (row > this.currentTable_.childNodes.length) {
          return this.getFocus();
        }
        this.row_ = row;
        this.moved = walker_js_1.WalkerMoves.ROW;
        return this.getFocus().clone();
      }
      undo() {
        const focus = super.undo();
        if (focus === this.firstJump) {
          this.firstJump = null;
        }
        return focus;
      }
      eligibleCell_() {
        const primary = this.getFocus().getSemanticPrimary();
        return this.modifier && primary.type === semantic_meaning_js_1.SemanticType.CELL && _TableWalker.ELIGIBLE_CELL_ROLES.indexOf(primary.role) !== -1;
      }
      verticalMove_(direction) {
        const parent = this.previousLevel();
        if (!parent) {
          return null;
        }
        const origFocus = this.getFocus();
        const origIndex = this.levels.indexOf(this.primaryId());
        const origLevel = this.levels.pop();
        const parentIndex = this.levels.indexOf(parent);
        const row = this.levels.get(direction ? parentIndex + 1 : parentIndex - 1);
        if (!row) {
          this.levels.push(origLevel);
          return null;
        }
        this.setFocus(this.singletonFocus(row));
        const children = this.nextLevel();
        const newNode = children[origIndex];
        if (!newNode) {
          this.setFocus(origFocus);
          this.levels.push(origLevel);
          return null;
        }
        this.levels.push(children);
        return this.singletonFocus(children[origIndex]);
      }
      jumpCell_(row, column) {
        if (!this.firstJump) {
          this.firstJump = this.getFocus();
          this.virtualize(true);
        } else {
          this.virtualize(false);
        }
        const id = this.currentTable_.id.toString();
        let level;
        do {
          level = this.levels.pop();
        } while (level.indexOf(id) === -1);
        this.levels.push(level);
        this.setFocus(this.singletonFocus(id));
        this.levels.push(this.nextLevel());
        const semRow = this.currentTable_.childNodes[row - 1];
        this.setFocus(this.singletonFocus(semRow.id.toString()));
        this.levels.push(this.nextLevel());
        return this.singletonFocus(semRow.childNodes[column - 1].id.toString());
      }
      isLegalJump_(row, column) {
        const xmlTable = DomUtil.querySelectorAllByAttrValue(this.getRebuilt().xml, "id", this.currentTable_.id.toString())[0];
        if (!xmlTable || xmlTable.hasAttribute("alternative")) {
          return false;
        }
        const rowNode = this.currentTable_.childNodes[row - 1];
        if (!rowNode) {
          return false;
        }
        const xmlRow = DomUtil.querySelectorAllByAttrValue(xmlTable, "id", rowNode.id.toString())[0];
        if (!xmlRow || xmlRow.hasAttribute("alternative")) {
          return false;
        }
        return !!(rowNode && rowNode.childNodes[column - 1]);
      }
      isInTable_() {
        let snode = this.getFocus().getSemanticPrimary();
        while (snode) {
          if (_TableWalker.ELIGIBLE_TABLE_TYPES.indexOf(snode.type) !== -1) {
            this.currentTable_ = snode;
            return true;
          }
          snode = snode.parent;
        }
        return false;
      }
    };
    exports2.TableWalker = TableWalker;
    TableWalker.ELIGIBLE_CELL_ROLES = [
      semantic_meaning_js_1.SemanticRole.DETERMINANT,
      semantic_meaning_js_1.SemanticRole.ROWVECTOR,
      semantic_meaning_js_1.SemanticRole.BINOMIAL,
      semantic_meaning_js_1.SemanticRole.SQUAREMATRIX,
      semantic_meaning_js_1.SemanticRole.MULTILINE,
      semantic_meaning_js_1.SemanticRole.MATRIX,
      semantic_meaning_js_1.SemanticRole.VECTOR,
      semantic_meaning_js_1.SemanticRole.CASES,
      semantic_meaning_js_1.SemanticRole.TABLE
    ];
    TableWalker.ELIGIBLE_TABLE_TYPES = [
      semantic_meaning_js_1.SemanticType.MULTILINE,
      semantic_meaning_js_1.SemanticType.MATRIX,
      semantic_meaning_js_1.SemanticType.VECTOR,
      semantic_meaning_js_1.SemanticType.CASES,
      semantic_meaning_js_1.SemanticType.TABLE
    ];
  }
});

// node_modules/speech-rule-engine/js/walker/walker_factory.js
var require_walker_factory = __commonJS({
  "node_modules/speech-rule-engine/js/walker/walker_factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.walker = walker;
    var dummy_walker_js_1 = require_dummy_walker();
    var semantic_walker_js_1 = require_semantic_walker();
    var syntax_walker_js_1 = require_syntax_walker();
    var table_walker_js_1 = require_table_walker();
    function walker(type, node, generator, highlighter, xml) {
      const constructor = walkerMapping[type.toLowerCase()] || walkerMapping["dummy"];
      return constructor(node, generator, highlighter, xml);
    }
    var walkerMapping = {
      dummy: (p1, p2, p3, p4) => new dummy_walker_js_1.DummyWalker(p1, p2, p3, p4),
      semantic: (p1, p2, p3, p4) => new semantic_walker_js_1.SemanticWalker(p1, p2, p3, p4),
      syntax: (p1, p2, p3, p4) => new syntax_walker_js_1.SyntaxWalker(p1, p2, p3, p4),
      table: (p1, p2, p3, p4) => new table_walker_js_1.TableWalker(p1, p2, p3, p4)
    };
  }
});

// node_modules/speech-rule-engine/js/common/processor.js
var require_processor = __commonJS({
  "node_modules/speech-rule-engine/js/common/processor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.KeyProcessor = exports2.Processor = void 0;
    var event_util_js_1 = require_event_util();
    var Processor = class _Processor {
      static stringify_(x) {
        return x ? x.toString() : x;
      }
      constructor(name, methods) {
        this.name = name;
        this.process = methods.processor;
        this.postprocess = methods.postprocessor || ((x, _y) => x);
        this.processor = this.postprocess ? function(x) {
          return this.postprocess(this.process(x), x);
        } : this.process;
        this.print = methods.print || _Processor.stringify_;
        this.pprint = methods.pprint || this.print;
      }
    };
    exports2.Processor = Processor;
    Processor.LocalState = { walker: null, speechGenerator: null, highlighter: null };
    var KeyProcessor = class _KeyProcessor extends Processor {
      static getKey_(key) {
        return typeof key === "string" ? event_util_js_1.KeyCode[key.toUpperCase()] : key;
      }
      constructor(name, methods) {
        super(name, methods);
        this.key = methods.key || _KeyProcessor.getKey_;
      }
    };
    exports2.KeyProcessor = KeyProcessor;
  }
});

// node_modules/speech-rule-engine/js/common/processor_factory.js
var require_processor_factory = __commonJS({
  "node_modules/speech-rule-engine/js/common/processor_factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.process = process2;
    exports2.output = output;
    exports2.keypress = keypress;
    var AuralRendering = require_aural_rendering();
    var Enrich = require_enrich();
    var HighlighterFactory = require_highlighter_factory();
    var locale_js_1 = require_locale();
    var Semantic = require_semantic();
    var SpeechGeneratorFactory = require_speech_generator_factory();
    var SpeechGeneratorUtil = require_speech_generator_util();
    var WalkerFactory = require_walker_factory();
    var WalkerUtil = require_walker_util();
    var rebuild_stree_js_1 = require_rebuild_stree();
    var DomUtil = require_dom_util();
    var engine_js_1 = require_engine();
    var EngineConst = require_engine_const();
    var processor_js_1 = require_processor();
    var XpathUtil = require_xpath_util();
    var PROCESSORS = /* @__PURE__ */ new Map();
    function set(processor) {
      PROCESSORS.set(processor.name, processor);
    }
    function get(name) {
      const processor = PROCESSORS.get(name);
      if (!processor) {
        throw new engine_js_1.SREError("Unknown processor " + name);
      }
      return processor;
    }
    function process2(name, expr) {
      const processor = get(name);
      try {
        return processor.processor(expr);
      } catch (_e) {
        throw new engine_js_1.SREError("Processing error for expression " + expr);
      }
    }
    function print(name, data) {
      const processor = get(name);
      return engine_js_1.Engine.getInstance().pprint ? processor.pprint(data) : processor.print(data);
    }
    function output(name, expr) {
      const processor = get(name);
      try {
        const data = processor.processor(expr);
        return engine_js_1.Engine.getInstance().pprint ? processor.pprint(data) : processor.print(data);
      } catch (_e) {
        console.log(_e);
        throw new engine_js_1.SREError("Processing error for expression " + expr);
      }
    }
    function keypress(name, expr) {
      const processor = get(name);
      const key = processor instanceof processor_js_1.KeyProcessor ? processor.key(expr) : expr;
      const data = processor.processor(key);
      return engine_js_1.Engine.getInstance().pprint ? processor.pprint(data) : processor.print(data);
    }
    set(new processor_js_1.Processor("semantic", {
      processor: function(expr) {
        const mml = DomUtil.parseInput(expr);
        return Semantic.xmlTree(mml);
      },
      postprocessor: function(xml, _expr) {
        const setting = engine_js_1.Engine.getInstance().speech;
        if (setting === EngineConst.Speech.NONE) {
          return xml;
        }
        const clone = DomUtil.cloneNode(xml);
        let speech = SpeechGeneratorUtil.computeMarkup(clone);
        if (setting === EngineConst.Speech.SHALLOW) {
          xml.setAttribute("speech", AuralRendering.finalize(speech));
          return xml;
        }
        const nodesXml = XpathUtil.evalXPath(".//*[@id]", xml);
        const nodesClone = XpathUtil.evalXPath(".//*[@id]", clone);
        for (let i = 0, orig, node; orig = nodesXml[i], node = nodesClone[i]; i++) {
          speech = SpeechGeneratorUtil.computeMarkup(node);
          orig.setAttribute("speech", AuralRendering.finalize(speech));
        }
        return xml;
      },
      pprint: function(tree) {
        return DomUtil.formatXml(tree.toString());
      }
    }));
    set(new processor_js_1.Processor("speech", {
      processor: function(expr) {
        const mml = DomUtil.parseInput(expr);
        const xml = Semantic.xmlTree(mml);
        const descrs = SpeechGeneratorUtil.computeSpeech(xml);
        return AuralRendering.finalize(AuralRendering.markup(descrs));
      },
      pprint: function(speech) {
        const str = speech.toString();
        return AuralRendering.isXml() ? DomUtil.formatXml(str) : str;
      }
    }));
    set(new processor_js_1.Processor("json", {
      processor: function(expr) {
        const mml = DomUtil.parseInput(expr);
        const stree = Semantic.getTree(mml);
        return stree.toJson();
      },
      postprocessor: function(json, expr) {
        const setting = engine_js_1.Engine.getInstance().speech;
        if (setting === EngineConst.Speech.NONE) {
          return json;
        }
        const mml = DomUtil.parseInput(expr);
        const xml = Semantic.xmlTree(mml);
        const speech = SpeechGeneratorUtil.computeMarkup(xml);
        if (setting === EngineConst.Speech.SHALLOW) {
          json.stree.speech = AuralRendering.finalize(speech);
          return json;
        }
        const addRec = (json2) => {
          const node = XpathUtil.evalXPath(`.//*[@id=${json2.id}]`, xml)[0];
          const speech2 = SpeechGeneratorUtil.computeMarkup(node);
          json2.speech = AuralRendering.finalize(speech2);
          if (json2.children) {
            json2.children.forEach(addRec);
          }
        };
        addRec(json.stree);
        return json;
      },
      print: function(json) {
        return JSON.stringify(json);
      },
      pprint: function(json) {
        return JSON.stringify(json, null, 2);
      }
    }));
    set(new processor_js_1.Processor("description", {
      processor: function(expr) {
        const mml = DomUtil.parseInput(expr);
        const xml = Semantic.xmlTree(mml);
        const descrs = SpeechGeneratorUtil.computeSpeech(xml);
        return descrs;
      },
      print: function(descrs) {
        return JSON.stringify(descrs);
      },
      pprint: function(descrs) {
        return JSON.stringify(descrs, null, 2);
      }
    }));
    set(new processor_js_1.Processor("enriched", {
      processor: function(expr) {
        return Enrich.semanticMathmlSync(expr);
      },
      postprocessor: function(enr, _expr) {
        const root = WalkerUtil.getSemanticRoot(enr);
        let generator;
        switch (engine_js_1.Engine.getInstance().speech) {
          case EngineConst.Speech.NONE:
            break;
          case EngineConst.Speech.SHALLOW:
            generator = SpeechGeneratorFactory.generator("Adhoc");
            generator.getSpeech(root, enr);
            break;
          case EngineConst.Speech.DEEP:
            generator = SpeechGeneratorFactory.generator("Tree");
            generator.getSpeech(enr, enr);
            break;
          default:
            break;
        }
        return enr;
      },
      pprint: function(tree) {
        return DomUtil.formatXml(tree.toString());
      }
    }));
    set(new processor_js_1.Processor("rebuild", {
      processor: function(expr) {
        const rebuilt = new rebuild_stree_js_1.RebuildStree(DomUtil.parseInput(expr));
        return rebuilt.stree.xml();
      },
      pprint: function(tree) {
        return DomUtil.formatXml(tree.toString());
      }
    }));
    set(new processor_js_1.Processor("walker", {
      processor: function(expr) {
        const generator = SpeechGeneratorFactory.generator("Node");
        processor_js_1.Processor.LocalState.speechGenerator = generator;
        generator.setOptions({
          modality: engine_js_1.Engine.getInstance().modality,
          locale: engine_js_1.Engine.getInstance().locale,
          domain: engine_js_1.Engine.getInstance().domain,
          style: engine_js_1.Engine.getInstance().style
        });
        processor_js_1.Processor.LocalState.highlighter = HighlighterFactory.highlighter({ color: "black" }, { color: "white" }, { renderer: "NativeMML" });
        const node = process2("enriched", expr);
        const eml = print("enriched", node);
        processor_js_1.Processor.LocalState.walker = WalkerFactory.walker(engine_js_1.Engine.getInstance().walker, node, generator, processor_js_1.Processor.LocalState.highlighter, eml);
        return processor_js_1.Processor.LocalState.walker;
      },
      print: function(_walker) {
        return processor_js_1.Processor.LocalState.walker.speech();
      }
    }));
    set(new processor_js_1.KeyProcessor("move", {
      processor: function(direction) {
        if (!processor_js_1.Processor.LocalState.walker) {
          return null;
        }
        const move = processor_js_1.Processor.LocalState.walker.move(direction);
        return move === false ? AuralRendering.error(direction) : processor_js_1.Processor.LocalState.walker.speech();
      }
    }));
    set(new processor_js_1.Processor("number", {
      processor: function(numb) {
        const num = parseInt(numb, 10);
        return isNaN(num) ? "" : locale_js_1.LOCALE.NUMBERS.numberToWords(num);
      }
    }));
    set(new processor_js_1.Processor("ordinal", {
      processor: function(numb) {
        const num = parseInt(numb, 10);
        return isNaN(num) ? "" : locale_js_1.LOCALE.NUMBERS.wordOrdinal(num);
      }
    }));
    set(new processor_js_1.Processor("numericOrdinal", {
      processor: function(numb) {
        const num = parseInt(numb, 10);
        return isNaN(num) ? "" : locale_js_1.LOCALE.NUMBERS.numericOrdinal(num);
      }
    }));
    set(new processor_js_1.Processor("vulgar", {
      processor: function(numb) {
        const [en, den] = numb.split("/").map((x) => parseInt(x, 10));
        return isNaN(en) || isNaN(den) ? "" : process2("speech", `<mfrac><mn>${en}</mn><mn>${den}</mn></mfrac>`);
      }
    }));
    set(new processor_js_1.Processor("latex", {
      processor: function(ltx) {
        if (engine_js_1.Engine.getInstance().modality !== "braille" || engine_js_1.Engine.getInstance().locale !== "euro") {
          console.info("LaTeX input currently only works for Euro Braille output. Please use the latex-to-speech package from npm for general LaTeX input to SRE.");
        }
        return process2("speech", `<math data-latex="${ltx}"></math>`);
      }
    }));
  }
});

// node_modules/speech-rule-engine/js/common/system.js
var require_system = __commonJS({
  "node_modules/speech-rule-engine/js/common/system.js"(exports2) {
    "use strict";
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.localePath = exports2.file = exports2.localeLoader = exports2.version = void 0;
    exports2.setupEngine = setupEngine;
    exports2.engineSetup = engineSetup;
    exports2.engineReady = engineReady;
    exports2.toSpeech = toSpeech;
    exports2.toSemantic = toSemantic;
    exports2.toJson = toJson;
    exports2.toDescription = toDescription;
    exports2.toEnriched = toEnriched;
    exports2.number = number;
    exports2.ordinal = ordinal;
    exports2.numericOrdinal = numericOrdinal;
    exports2.vulgar = vulgar;
    exports2.processFile = processFile;
    exports2.walk = walk;
    exports2.move = move;
    exports2.exit = exit;
    var engine_js_1 = require_engine();
    var engine_setup_js_1 = require_engine_setup();
    var EngineConst = require_engine_const();
    var FileUtil = require_file_util();
    var ProcessorFactory = require_processor_factory();
    var system_external_js_1 = require_system_external();
    var variables_js_12 = require_variables();
    var math_map_js_1 = require_math_map();
    exports2.version = variables_js_12.Variables.VERSION;
    function setupEngine(feature) {
      return __awaiter(this, void 0, void 0, function* () {
        return (0, engine_setup_js_1.setup)(feature);
      });
    }
    function engineSetup() {
      const engineFeatures = ["mode"].concat(engine_js_1.Engine.STRING_FEATURES, engine_js_1.Engine.BINARY_FEATURES);
      const engine = engine_js_1.Engine.getInstance();
      const features = {};
      engineFeatures.forEach(function(x) {
        features[x] = engine[x];
      });
      features.json = system_external_js_1.SystemExternal.jsonPath;
      features.xpath = system_external_js_1.SystemExternal.WGXpath;
      features.rules = engine.ruleSets.slice();
      return features;
    }
    function engineReady() {
      return __awaiter(this, void 0, void 0, function* () {
        return setupEngine({}).then(() => engine_js_1.EnginePromise.getall());
      });
    }
    exports2.localeLoader = math_map_js_1.standardLoader;
    function toSpeech(expr) {
      return processString("speech", expr);
    }
    function toSemantic(expr) {
      return processString("semantic", expr);
    }
    function toJson(expr) {
      return processString("json", expr);
    }
    function toDescription(expr) {
      return processString("description", expr);
    }
    function toEnriched(expr) {
      return processString("enriched", expr);
    }
    function number(expr) {
      return processString("number", expr);
    }
    function ordinal(expr) {
      return processString("ordinal", expr);
    }
    function numericOrdinal(expr) {
      return processString("numericOrdinal", expr);
    }
    function vulgar(expr) {
      return processString("vulgar", expr);
    }
    function processString(processor, input) {
      return ProcessorFactory.process(processor, input);
    }
    exports2.file = {};
    exports2.file.toSpeech = function(input, opt_output) {
      return processFile("speech", input, opt_output);
    };
    exports2.file.toSemantic = function(input, opt_output) {
      return processFile("semantic", input, opt_output);
    };
    exports2.file.toJson = function(input, opt_output) {
      return processFile("json", input, opt_output);
    };
    exports2.file.toDescription = function(input, opt_output) {
      return processFile("description", input, opt_output);
    };
    exports2.file.toEnriched = function(input, opt_output) {
      return processFile("enriched", input, opt_output);
    };
    function processFile(processor, input, opt_output) {
      switch (engine_js_1.Engine.getInstance().mode) {
        case EngineConst.Mode.ASYNC:
          return processFileAsync(processor, input, opt_output);
        case EngineConst.Mode.SYNC:
          return processFileSync(processor, input, opt_output);
        default:
          throw new engine_js_1.SREError(`Can process files in ${engine_js_1.Engine.getInstance().mode} mode`);
      }
    }
    function processFileSync(processor, input, opt_output) {
      const expr = inputFileSync_(input);
      const result = ProcessorFactory.output(processor, expr);
      if (opt_output) {
        try {
          system_external_js_1.SystemExternal.fs.writeFileSync(opt_output, result);
        } catch (_err) {
          throw new engine_js_1.SREError("Can not write to file: " + opt_output);
        }
      }
      return result;
    }
    function inputFileSync_(file) {
      let expr;
      try {
        expr = system_external_js_1.SystemExternal.fs.readFileSync(file, { encoding: "utf8" });
      } catch (_err) {
        throw new engine_js_1.SREError("Can not open file: " + file);
      }
      return expr;
    }
    function processFileAsync(processor, file, output) {
      return __awaiter(this, void 0, void 0, function* () {
        const expr = yield system_external_js_1.SystemExternal.fs.promises.readFile(file, {
          encoding: "utf8"
        });
        const result = ProcessorFactory.output(processor, expr);
        if (output) {
          try {
            system_external_js_1.SystemExternal.fs.promises.writeFile(output, result);
          } catch (_err) {
            throw new engine_js_1.SREError("Can not write to file: " + output);
          }
        }
        return result;
      });
    }
    function walk(expr) {
      return ProcessorFactory.output("walker", expr);
    }
    function move(direction) {
      return ProcessorFactory.keypress("move", direction);
    }
    function exit(opt_value) {
      const value = opt_value || 0;
      engine_js_1.EnginePromise.getall().then(() => process.exit(value));
    }
    exports2.localePath = FileUtil.localePath;
    if (system_external_js_1.SystemExternal.documentSupported) {
      setupEngine({ mode: EngineConst.Mode.HTTP }).then(() => setupEngine({}));
    } else {
      setupEngine({ mode: EngineConst.Mode.SYNC }).then(() => setupEngine({ mode: EngineConst.Mode.ASYNC }));
    }
  }
});

// node_modules/mathjax-full/js/a11y/mathmaps.js
var require_mathmaps = __commonJS({
  "node_modules/mathjax-full/js/a11y/mathmaps.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var MathMaps = /* @__PURE__ */ new Map();
    exports2.default = MathMaps;
  }
});

// node_modules/mathjax-full/js/a11y/sre.js
var require_sre = __commonJS({
  "node_modules/mathjax-full/js/a11y/sre.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports2 && exports2.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sreReady = exports2.Sre = void 0;
    var Api = __importStar(require_system());
    var WalkerFactory = __importStar(require_walker_factory());
    var SpeechGeneratorFactory = __importStar(require_speech_generator_factory());
    var EngineConst = __importStar(require_engine_const());
    var engine_js_1 = __importDefault(require_engine());
    var clearspeak_preferences_js_1 = require_clearspeak_preferences();
    var HighlighterFactory = __importStar(require_highlighter_factory());
    var variables_js_12 = require_variables();
    var mathmaps_js_1 = __importDefault(require_mathmaps());
    var Sre;
    (function(Sre2) {
      Sre2.locales = variables_js_12.Variables.LOCALES;
      Sre2.sreReady = Api.engineReady;
      Sre2.setupEngine = Api.setupEngine;
      Sre2.engineSetup = Api.engineSetup;
      Sre2.toEnriched = Api.toEnriched;
      Sre2.toSpeech = Api.toSpeech;
      Sre2.clearspeakPreferences = clearspeak_preferences_js_1.ClearspeakPreferences;
      Sre2.getHighlighter = HighlighterFactory.highlighter;
      Sre2.getSpeechGenerator = SpeechGeneratorFactory.generator;
      Sre2.getWalker = WalkerFactory.walker;
      Sre2.clearspeakStyle = function() {
        return EngineConst.DOMAIN_TO_STYLES["clearspeak"];
      };
      Sre2.preloadLocales = function(locale) {
        return __awaiter(this, void 0, void 0, function() {
          var json;
          return __generator(this, function(_a) {
            json = mathmaps_js_1.default.get(locale);
            return [2, json ? new Promise(function(res, _rej) {
              return res(JSON.stringify(json));
            }) : Api.localeLoader()(locale)];
          });
        });
      };
    })(Sre = exports2.Sre || (exports2.Sre = {}));
    exports2.sreReady = Sre.sreReady;
    engine_js_1.default.getInstance().delay = true;
    exports2.default = Sre;
  }
});

// node_modules/mathjax-full/js/ui/menu/Menu.js
var require_Menu = __commonJS({
  "node_modules/mathjax-full/js/ui/menu/Menu.js"(exports2) {
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Menu = void 0;
    var mathjax_js_1 = require_mathjax();
    var MathItem_js_1 = require_MathItem();
    var global_js_1 = require_global();
    var Options_js_1 = require_Options();
    var MJContextMenu_js_1 = require_MJContextMenu();
    var MmlVisitor_js_1 = require_MmlVisitor2();
    var SelectableInfo_js_1 = require_SelectableInfo();
    var info_js_1 = require_info();
    var parse_js_1 = require_parse();
    var item_rule_js_1 = require_item_rule();
    var css_util_js_1 = require_css_util();
    var sre_js_1 = __importDefault(require_sre());
    var MathJax = global_js_1.MathJax;
    var isMac = typeof window !== "undefined" && window.navigator && window.navigator.platform.substr(0, 3) === "Mac";
    var Menu = function() {
      function Menu2(document2, options) {
        if (options === void 0) {
          options = {};
        }
        var _this = this;
        this.settings = null;
        this.defaultSettings = null;
        this.menu = null;
        this.MmlVisitor = new MmlVisitor_js_1.MmlVisitor();
        this.jax = {
          CHTML: null,
          SVG: null
        };
        this.rerenderStart = MathItem_js_1.STATE.LAST;
        this.about = new info_js_1.Info('<b style="font-size:120%;">MathJax</b> v' + mathjax_js_1.mathjax.version, function() {
          var lines = [];
          lines.push("Input Jax: " + _this.document.inputJax.map(function(jax) {
            return jax.name;
          }).join(", "));
          lines.push("Output Jax: " + _this.document.outputJax.name);
          lines.push("Document Type: " + _this.document.kind);
          return lines.join("<br/>");
        }, '<a href="https://www.mathjax.org">www.mathjax.org</a>');
        this.help = new info_js_1.Info("<b>MathJax Help</b>", function() {
          return [
            "<p><b>MathJax</b> is a JavaScript library that allows page",
            " authors to include mathematics within their web pages.",
            " As a reader, you don't need to do anything to make that happen.</p>",
            "<p><b>Browsers</b>: MathJax works with all modern browsers including",
            " Edge, Firefox, Chrome, Safari, Opera, and most mobile browsers.</p>",
            "<p><b>Math Menu</b>: MathJax adds a contextual menu to equations.",
            " Right-click or CTRL-click on any mathematics to access the menu.</p>",
            '<div style="margin-left: 1em;">',
            "<p><b>Show Math As:</b> These options allow you to view the formula's",
            " source markup (as MathML or in its original format).</p>",
            "<p><b>Copy to Clipboard:</b> These options copy the formula's source markup,",
            " as MathML or in its original format, to the clipboard",
            " (in browsers that support that).</p>",
            "<p><b>Math Settings:</b> These give you control over features of MathJax,",
            " such the size of the mathematics, and the mechanism used",
            " to display equations.</p>",
            "<p><b>Accessibility</b>: MathJax can work with screen",
            " readers to make mathematics accessible to the visually impaired.",
            " Turn on the explorer to enable generation of speech strings",
            " and the ability to investigate expressions interactively.</p>",
            "<p><b>Language</b>: This menu lets you select the language used by MathJax",
            " for its menus and warning messages. (Not yet implemented in version 3.)</p>",
            "</div>",
            "<p><b>Math Zoom</b>: If you are having difficulty reading an",
            " equation, MathJax can enlarge it to help you see it better, or",
            " you can scall all the math on the page to make it larger.",
            " Turn these features on in the <b>Math Settings</b> menu.</p>",
            "<p><b>Preferences</b>: MathJax uses your browser's localStorage database",
            " to save the preferences set via this menu locally in your browser.  These",
            " are not used to track you, and are not transferred or used remotely by",
            " MathJax in any way.</p>"
          ].join("\n");
        }, '<a href="https://www.mathjax.org">www.mathjax.org</a>');
        this.mathmlCode = new SelectableInfo_js_1.SelectableInfo("MathJax MathML Expression", function() {
          if (!_this.menu.mathItem)
            return "";
          var text = _this.toMML(_this.menu.mathItem);
          return "<pre>" + _this.formatSource(text) + "</pre>";
        }, "");
        this.originalText = new SelectableInfo_js_1.SelectableInfo("MathJax Original Source", function() {
          if (!_this.menu.mathItem)
            return "";
          var text = _this.menu.mathItem.math;
          return '<pre style="font-size:125%; margin:0">' + _this.formatSource(text) + "</pre>";
        }, "");
        this.annotationText = new SelectableInfo_js_1.SelectableInfo("MathJax Annotation Text", function() {
          if (!_this.menu.mathItem)
            return "";
          var text = _this.menu.annotation;
          return '<pre style="font-size:125%; margin:0">' + _this.formatSource(text) + "</pre>";
        }, "");
        this.zoomBox = new info_js_1.Info("MathJax Zoomed Expression", function() {
          if (!_this.menu.mathItem)
            return "";
          var element = _this.menu.mathItem.typesetRoot.cloneNode(true);
          element.style.margin = "0";
          var scale = 1.25 * parseFloat(_this.settings.zscale);
          return '<div style="font-size: ' + scale + '%">' + element.outerHTML + "</div>";
        }, "");
        this.document = document2;
        this.options = (0, Options_js_1.userOptions)((0, Options_js_1.defaultOptions)({}, this.constructor.OPTIONS), options);
        this.initSettings();
        this.mergeUserSettings();
        this.initMenu();
        this.applySettings();
      }
      Object.defineProperty(Menu2.prototype, "isLoading", {
        get: function() {
          return Menu2.loading > 0;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Menu2.prototype, "loadingPromise", {
        get: function() {
          if (!this.isLoading) {
            return Promise.resolve();
          }
          if (!Menu2._loadingPromise) {
            Menu2._loadingPromise = new Promise(function(ok, failed) {
              Menu2._loadingOK = ok;
              Menu2._loadingFailed = failed;
            });
          }
          return Menu2._loadingPromise;
        },
        enumerable: false,
        configurable: true
      });
      Menu2.prototype.initSettings = function() {
        this.settings = this.options.settings;
        this.jax = this.options.jax;
        var jax = this.document.outputJax;
        this.jax[jax.name] = jax;
        this.settings.renderer = jax.name;
        if (MathJax._.a11y && MathJax._.a11y.explorer) {
          Object.assign(this.settings, this.document.options.a11y);
        }
        this.settings.scale = jax.options.scale;
        this.defaultSettings = Object.assign({}, this.settings);
      };
      Menu2.prototype.initMenu = function() {
        var _this = this;
        var parser = new parse_js_1.Parser([["contextMenu", MJContextMenu_js_1.MJContextMenu.fromJson.bind(MJContextMenu_js_1.MJContextMenu)]]);
        this.menu = parser.parse({
          type: "contextMenu",
          id: "MathJax_Menu",
          pool: [
            this.variable("texHints"),
            this.variable("semantics"),
            this.variable("zoom"),
            this.variable("zscale"),
            this.variable("renderer", function(jax) {
              return _this.setRenderer(jax);
            }),
            this.variable("alt"),
            this.variable("cmd"),
            this.variable("ctrl"),
            this.variable("shift"),
            this.variable("scale", function(scale) {
              return _this.setScale(scale);
            }),
            this.variable("explorer", function(explore) {
              return _this.setExplorer(explore);
            }),
            this.a11yVar("highlight"),
            this.a11yVar("backgroundColor"),
            this.a11yVar("backgroundOpacity"),
            this.a11yVar("foregroundColor"),
            this.a11yVar("foregroundOpacity"),
            this.a11yVar("speech"),
            this.a11yVar("subtitles"),
            this.a11yVar("braille"),
            this.a11yVar("viewBraille"),
            this.a11yVar("locale", function(value) {
              return sre_js_1.default.setupEngine({ locale: value });
            }),
            this.a11yVar("speechRules", function(value) {
              var _a = __read(value.split("-"), 2), domain = _a[0], style = _a[1];
              _this.document.options.sre.domain = domain;
              _this.document.options.sre.style = style;
            }),
            this.a11yVar("magnification"),
            this.a11yVar("magnify"),
            this.a11yVar("treeColoring"),
            this.a11yVar("infoType"),
            this.a11yVar("infoRole"),
            this.a11yVar("infoPrefix"),
            this.variable("autocollapse"),
            this.variable("collapsible", function(collapse) {
              return _this.setCollapsible(collapse);
            }),
            this.variable("inTabOrder", function(tab) {
              return _this.setTabOrder(tab);
            }),
            this.variable("assistiveMml", function(mml) {
              return _this.setAssistiveMml(mml);
            })
          ],
          items: [
            this.submenu("Show", "Show Math As", [
              this.command("MathMLcode", "MathML Code", function() {
                return _this.mathmlCode.post();
              }),
              this.command("Original", "Original Form", function() {
                return _this.originalText.post();
              }),
              this.submenu("Annotation", "Annotation")
            ]),
            this.submenu("Copy", "Copy to Clipboard", [
              this.command("MathMLcode", "MathML Code", function() {
                return _this.copyMathML();
              }),
              this.command("Original", "Original Form", function() {
                return _this.copyOriginal();
              }),
              this.submenu("Annotation", "Annotation")
            ]),
            this.rule(),
            this.submenu("Settings", "Math Settings", [
              this.submenu("Renderer", "Math Renderer", this.radioGroup("renderer", [["CHTML"], ["SVG"]])),
              this.rule(),
              this.submenu("ZoomTrigger", "Zoom Trigger", [
                this.command("ZoomNow", "Zoom Once Now", function() {
                  return _this.zoom(null, "", _this.menu.mathItem);
                }),
                this.rule(),
                this.radioGroup("zoom", [
                  ["Click"],
                  ["DoubleClick", "Double-Click"],
                  ["NoZoom", "No Zoom"]
                ]),
                this.rule(),
                this.label("TriggerRequires", "Trigger Requires:"),
                this.checkbox(isMac ? "Option" : "Alt", isMac ? "Option" : "Alt", "alt"),
                this.checkbox("Command", "Command", "cmd", { hidden: !isMac }),
                this.checkbox("Control", "Control", "ctrl", { hiddne: isMac }),
                this.checkbox("Shift", "Shift", "shift")
              ]),
              this.submenu("ZoomFactor", "Zoom Factor", this.radioGroup("zscale", [
                ["150%"],
                ["175%"],
                ["200%"],
                ["250%"],
                ["300%"],
                ["400%"]
              ])),
              this.rule(),
              this.command("Scale", "Scale All Math...", function() {
                return _this.scaleAllMath();
              }),
              this.rule(),
              this.checkbox("texHints", "Add TeX hints to MathML", "texHints"),
              this.checkbox("semantics", "Add original as annotation", "semantics"),
              this.rule(),
              this.command("Reset", "Reset to defaults", function() {
                return _this.resetDefaults();
              })
            ]),
            this.submenu("Accessibility", "Accessibility", [
              this.checkbox("Activate", "Activate", "explorer"),
              this.submenu("Speech", "Speech", [
                this.checkbox("Speech", "Speech Output", "speech"),
                this.checkbox("Subtitles", "Speech Subtitles", "subtitles"),
                this.checkbox("Braille", "Braille Output", "braille"),
                this.checkbox("View Braille", "Braille Subtitles", "viewBraille"),
                this.rule(),
                this.submenu("A11yLanguage", "Language"),
                this.rule(),
                this.submenu("Mathspeak", "Mathspeak Rules", this.radioGroup("speechRules", [
                  ["mathspeak-default", "Verbose"],
                  ["mathspeak-brief", "Brief"],
                  ["mathspeak-sbrief", "Superbrief"]
                ])),
                this.submenu("Clearspeak", "Clearspeak Rules", this.radioGroup("speechRules", [
                  ["clearspeak-default", "Auto"]
                ])),
                this.submenu("ChromeVox", "ChromeVox Rules", this.radioGroup("speechRules", [
                  ["chromevox-default", "Standard"],
                  ["chromevox-alternative", "Alternative"]
                ]))
              ]),
              this.submenu("Highlight", "Highlight", [
                this.submenu("Background", "Background", this.radioGroup("backgroundColor", [
                  ["Blue"],
                  ["Red"],
                  ["Green"],
                  ["Yellow"],
                  ["Cyan"],
                  ["Magenta"],
                  ["White"],
                  ["Black"]
                ])),
                {
                  "type": "slider",
                  "variable": "backgroundOpacity",
                  "content": " "
                },
                this.submenu("Foreground", "Foreground", this.radioGroup("foregroundColor", [
                  ["Black"],
                  ["White"],
                  ["Magenta"],
                  ["Cyan"],
                  ["Yellow"],
                  ["Green"],
                  ["Red"],
                  ["Blue"]
                ])),
                {
                  "type": "slider",
                  "variable": "foregroundOpacity",
                  "content": " "
                },
                this.rule(),
                this.radioGroup("highlight", [
                  ["None"],
                  ["Hover"],
                  ["Flame"]
                ]),
                this.rule(),
                this.checkbox("TreeColoring", "Tree Coloring", "treeColoring")
              ]),
              this.submenu("Magnification", "Magnification", [
                this.radioGroup("magnification", [
                  ["None"],
                  ["Keyboard"],
                  ["Mouse"]
                ]),
                this.rule(),
                this.radioGroup("magnify", [
                  ["200%"],
                  ["300%"],
                  ["400%"],
                  ["500%"]
                ])
              ]),
              this.submenu("Semantic Info", "Semantic Info", [
                this.checkbox("Type", "Type", "infoType"),
                this.checkbox("Role", "Role", "infoRole"),
                this.checkbox("Prefix", "Prefix", "infoPrefix")
              ], true),
              this.rule(),
              this.checkbox("Collapsible", "Collapsible Math", "collapsible"),
              this.checkbox("AutoCollapse", "Auto Collapse", "autocollapse", { disabled: true }),
              this.rule(),
              this.checkbox("InTabOrder", "Include in Tab Order", "inTabOrder"),
              this.checkbox("AssistiveMml", "Include Hidden MathML", "assistiveMml")
            ]),
            this.submenu("Language", "Language"),
            this.rule(),
            this.command("About", "About MathJax", function() {
              return _this.about.post();
            }),
            this.command("Help", "MathJax Help", function() {
              return _this.help.post();
            })
          ]
        });
        var menu = this.menu;
        this.about.attachMenu(menu);
        this.help.attachMenu(menu);
        this.originalText.attachMenu(menu);
        this.annotationText.attachMenu(menu);
        this.mathmlCode.attachMenu(menu);
        this.zoomBox.attachMenu(menu);
        this.checkLoadableItems();
        this.enableExplorerItems(this.settings.explorer);
        menu.showAnnotation = this.annotationText;
        menu.copyAnnotation = this.copyAnnotation.bind(this);
        menu.annotationTypes = this.options.annotationTypes;
        css_util_js_1.CssStyles.addInfoStyles(this.document.document);
        css_util_js_1.CssStyles.addMenuStyles(this.document.document);
      };
      Menu2.prototype.checkLoadableItems = function() {
        var e_1, _a;
        if (MathJax && MathJax._ && MathJax.loader && MathJax.startup) {
          if (this.settings.collapsible && (!MathJax._.a11y || !MathJax._.a11y.complexity)) {
            this.loadA11y("complexity");
          }
          if (this.settings.explorer && (!MathJax._.a11y || !MathJax._.a11y.explorer)) {
            this.loadA11y("explorer");
          }
          if (this.settings.assistiveMml && (!MathJax._.a11y || !MathJax._.a11y["assistive-mml"])) {
            this.loadA11y("assistive-mml");
          }
        } else {
          var menu = this.menu;
          try {
            for (var _b = __values(Object.keys(this.jax)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var name_1 = _c.value;
              if (!this.jax[name_1]) {
                menu.findID("Settings", "Renderer", name_1).disable();
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          menu.findID("Accessibility", "Activate").disable();
          menu.findID("Accessibility", "AutoCollapse").disable();
          menu.findID("Accessibility", "Collapsible").disable();
        }
      };
      Menu2.prototype.enableExplorerItems = function(enable) {
        var e_2, _a;
        var menu = this.menu.findID("Accessibility", "Activate").menu;
        try {
          for (var _b = __values(menu.items.slice(1)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            if (item instanceof item_rule_js_1.Rule)
              break;
            enable ? item.enable() : item.disable();
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      };
      Menu2.prototype.mergeUserSettings = function() {
        try {
          var settings = localStorage.getItem(Menu2.MENU_STORAGE);
          if (!settings)
            return;
          Object.assign(this.settings, JSON.parse(settings));
          this.setA11y(this.settings);
        } catch (err) {
          console.log("MathJax localStorage error: " + err.message);
        }
      };
      Menu2.prototype.saveUserSettings = function() {
        var e_3, _a;
        var settings = {};
        try {
          for (var _b = __values(Object.keys(this.settings)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var name_2 = _c.value;
            if (this.settings[name_2] !== this.defaultSettings[name_2]) {
              settings[name_2] = this.settings[name_2];
            }
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        try {
          if (Object.keys(settings).length) {
            localStorage.setItem(Menu2.MENU_STORAGE, JSON.stringify(settings));
          } else {
            localStorage.removeItem(Menu2.MENU_STORAGE);
          }
        } catch (err) {
          console.log("MathJax localStorage error: " + err.message);
        }
      };
      Menu2.prototype.setA11y = function(options) {
        if (MathJax._.a11y && MathJax._.a11y.explorer) {
          MathJax._.a11y.explorer_ts.setA11yOptions(this.document, options);
        }
      };
      Menu2.prototype.getA11y = function(option) {
        if (MathJax._.a11y && MathJax._.a11y.explorer) {
          if (this.document.options.a11y[option] !== void 0) {
            return this.document.options.a11y[option];
          }
          return this.document.options.sre[option];
        }
      };
      Menu2.prototype.applySettings = function() {
        this.setTabOrder(this.settings.inTabOrder);
        this.document.options.enableAssistiveMml = this.settings.assistiveMml;
        this.document.outputJax.options.scale = parseFloat(this.settings.scale);
        if (this.settings.renderer !== this.defaultSettings.renderer) {
          this.setRenderer(this.settings.renderer);
        }
      };
      Menu2.prototype.setScale = function(scale) {
        this.document.outputJax.options.scale = parseFloat(scale);
        this.document.rerender();
      };
      Menu2.prototype.setRenderer = function(jax) {
        var _this = this;
        if (this.jax[jax]) {
          this.setOutputJax(jax);
        } else {
          var name_3 = jax.toLowerCase();
          this.loadComponent("output/" + name_3, function() {
            var startup = MathJax.startup;
            if (name_3 in startup.constructors) {
              startup.useOutput(name_3, true);
              startup.output = startup.getOutputJax();
              _this.jax[jax] = startup.output;
              _this.setOutputJax(jax);
            }
          });
        }
      };
      Menu2.prototype.setOutputJax = function(jax) {
        this.jax[jax].setAdaptor(this.document.adaptor);
        this.document.outputJax = this.jax[jax];
        this.rerender();
      };
      Menu2.prototype.setTabOrder = function(tab) {
        this.menu.store.inTaborder(tab);
      };
      Menu2.prototype.setAssistiveMml = function(mml) {
        this.document.options.enableAssistiveMml = mml;
        if (!mml || MathJax._.a11y && MathJax._.a11y["assistive-mml"]) {
          this.rerender();
        } else {
          this.loadA11y("assistive-mml");
        }
      };
      Menu2.prototype.setExplorer = function(explore) {
        this.enableExplorerItems(explore);
        this.document.options.enableExplorer = explore;
        if (!explore || MathJax._.a11y && MathJax._.a11y.explorer) {
          this.rerender(this.settings.collapsible ? MathItem_js_1.STATE.RERENDER : MathItem_js_1.STATE.COMPILED);
        } else {
          this.loadA11y("explorer");
        }
      };
      Menu2.prototype.setCollapsible = function(collapse) {
        this.document.options.enableComplexity = collapse;
        if (!collapse || MathJax._.a11y && MathJax._.a11y.complexity) {
          this.rerender(MathItem_js_1.STATE.COMPILED);
        } else {
          this.loadA11y("complexity");
        }
      };
      Menu2.prototype.scaleAllMath = function() {
        var scale = (parseFloat(this.settings.scale) * 100).toFixed(1).replace(/.0$/, "");
        var percent = prompt("Scale all mathematics (compared to surrounding text) by", scale + "%");
        if (percent) {
          if (percent.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)) {
            var scale_1 = parseFloat(percent) / 100;
            if (scale_1) {
              this.menu.pool.lookup("scale").setValue(String(scale_1));
            } else {
              alert("The scale should not be zero");
            }
          } else {
            alert("The scale should be a percentage (e.g., 120%)");
          }
        }
      };
      Menu2.prototype.resetDefaults = function() {
        var e_4, _a;
        Menu2.loading++;
        var pool = this.menu.pool;
        var settings = this.defaultSettings;
        try {
          for (var _b = __values(Object.keys(this.settings)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var name_4 = _c.value;
            var variable = pool.lookup(name_4);
            if (variable) {
              variable.setValue(settings[name_4]);
              var item = variable.items[0];
              if (item) {
                item.executeCallbacks_();
              }
            } else {
              this.settings[name_4] = settings[name_4];
            }
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
        Menu2.loading--;
        this.rerender(MathItem_js_1.STATE.COMPILED);
      };
      Menu2.prototype.checkComponent = function(name) {
        var promise = Menu2.loadingPromises.get(name);
        if (promise) {
          mathjax_js_1.mathjax.retryAfter(promise);
        }
      };
      Menu2.prototype.loadComponent = function(name, callback) {
        if (Menu2.loadingPromises.has(name))
          return;
        var loader = MathJax.loader;
        if (!loader)
          return;
        Menu2.loading++;
        var promise = loader.load(name).then(function() {
          Menu2.loading--;
          Menu2.loadingPromises.delete(name);
          callback();
          if (Menu2.loading === 0 && Menu2._loadingPromise) {
            Menu2._loadingPromise = null;
            Menu2._loadingOK();
          }
        }).catch(function(err) {
          if (Menu2._loadingPromise) {
            Menu2._loadingPromise = null;
            Menu2._loadingFailed(err);
          } else {
            console.log(err);
          }
        });
        Menu2.loadingPromises.set(name, promise);
      };
      Menu2.prototype.loadA11y = function(component) {
        var _this = this;
        var noEnrich = !MathItem_js_1.STATE.ENRICHED;
        this.loadComponent("a11y/" + component, function() {
          var startup = MathJax.startup;
          mathjax_js_1.mathjax.handlers.unregister(startup.handler);
          startup.handler = startup.getHandler();
          mathjax_js_1.mathjax.handlers.register(startup.handler);
          var document2 = _this.document;
          _this.document = startup.document = startup.getDocument();
          _this.document.menu = _this;
          _this.document.outputJax.reset();
          _this.transferMathList(document2);
          _this.document.processed = document2.processed;
          if (!Menu2._loadingPromise) {
            _this.document.outputJax.reset();
            _this.rerender(component === "complexity" || noEnrich ? MathItem_js_1.STATE.COMPILED : MathItem_js_1.STATE.TYPESET);
          }
        });
      };
      Menu2.prototype.transferMathList = function(document2) {
        var e_5, _a;
        var MathItem = this.document.options.MathItem;
        try {
          for (var _b = __values(document2.math), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            var math = new MathItem();
            Object.assign(math, item);
            this.document.math.push(math);
          }
        } catch (e_5_1) {
          e_5 = { error: e_5_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
      };
      Menu2.prototype.formatSource = function(text) {
        return text.trim().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      };
      Menu2.prototype.toMML = function(math) {
        return this.MmlVisitor.visitTree(math.root, math, {
          texHints: this.settings.texHints,
          semantics: this.settings.semantics && math.inputJax.name !== "MathML"
        });
      };
      Menu2.prototype.zoom = function(event2, type, math) {
        if (!event2 || this.isZoomEvent(event2, type)) {
          this.menu.mathItem = math;
          if (event2) {
            this.menu.post(event2);
          }
          this.zoomBox.post();
        }
      };
      Menu2.prototype.isZoomEvent = function(event2, zoom) {
        return this.settings.zoom === zoom && (!this.settings.alt || event2.altKey) && (!this.settings.ctrl || event2.ctrlKey) && (!this.settings.cmd || event2.metaKey) && (!this.settings.shift || event2.shiftKey);
      };
      Menu2.prototype.rerender = function(start) {
        if (start === void 0) {
          start = MathItem_js_1.STATE.TYPESET;
        }
        this.rerenderStart = Math.min(start, this.rerenderStart);
        if (!Menu2.loading) {
          if (this.rerenderStart <= MathItem_js_1.STATE.COMPILED) {
            this.document.reset({ inputJax: [] });
          }
          this.document.rerender(this.rerenderStart);
          this.rerenderStart = MathItem_js_1.STATE.LAST;
        }
      };
      Menu2.prototype.copyMathML = function() {
        this.copyToClipboard(this.toMML(this.menu.mathItem));
      };
      Menu2.prototype.copyOriginal = function() {
        this.copyToClipboard(this.menu.mathItem.math.trim());
      };
      Menu2.prototype.copyAnnotation = function() {
        this.copyToClipboard(this.menu.annotation.trim());
      };
      Menu2.prototype.copyToClipboard = function(text) {
        var input = document.createElement("textarea");
        input.value = text;
        input.setAttribute("readonly", "");
        input.style.cssText = "height: 1px; width: 1px; padding: 1px; position: absolute; left: -10px";
        document.body.appendChild(input);
        input.select();
        try {
          document.execCommand("copy");
        } catch (error) {
          alert("Can't copy to clipboard: " + error.message);
        }
        document.body.removeChild(input);
      };
      Menu2.prototype.addMenu = function(math) {
        var _this = this;
        var element = math.typesetRoot;
        element.addEventListener("contextmenu", function() {
          return _this.menu.mathItem = math;
        }, true);
        element.addEventListener("keydown", function() {
          return _this.menu.mathItem = math;
        }, true);
        element.addEventListener("click", function(event2) {
          return _this.zoom(event2, "Click", math);
        }, true);
        element.addEventListener("dblclick", function(event2) {
          return _this.zoom(event2, "DoubleClick", math);
        }, true);
        this.menu.store.insert(element);
      };
      Menu2.prototype.clear = function() {
        this.menu.store.clear();
      };
      Menu2.prototype.variable = function(name, action) {
        var _this = this;
        return {
          name,
          getter: function() {
            return _this.settings[name];
          },
          setter: function(value) {
            _this.settings[name] = value;
            action && action(value);
            _this.saveUserSettings();
          }
        };
      };
      Menu2.prototype.a11yVar = function(name, action) {
        var _this = this;
        return {
          name,
          getter: function() {
            return _this.getA11y(name);
          },
          setter: function(value) {
            _this.settings[name] = value;
            var options = {};
            options[name] = value;
            _this.setA11y(options);
            action && action(value);
            _this.saveUserSettings();
          }
        };
      };
      Menu2.prototype.submenu = function(id, content, entries, disabled) {
        var e_6, _a;
        if (entries === void 0) {
          entries = [];
        }
        if (disabled === void 0) {
          disabled = false;
        }
        var items = [];
        try {
          for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
            var entry = entries_1_1.value;
            if (Array.isArray(entry)) {
              items = items.concat(entry);
            } else {
              items.push(entry);
            }
          }
        } catch (e_6_1) {
          e_6 = { error: e_6_1 };
        } finally {
          try {
            if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
          } finally {
            if (e_6) throw e_6.error;
          }
        }
        return { type: "submenu", id, content, menu: { items }, disabled: items.length === 0 || disabled };
      };
      Menu2.prototype.command = function(id, content, action, other) {
        if (other === void 0) {
          other = {};
        }
        return Object.assign({ type: "command", id, content, action }, other);
      };
      Menu2.prototype.checkbox = function(id, content, variable, other) {
        if (other === void 0) {
          other = {};
        }
        return Object.assign({ type: "checkbox", id, content, variable }, other);
      };
      Menu2.prototype.radioGroup = function(variable, radios) {
        var _this = this;
        return radios.map(function(def) {
          return _this.radio(def[0], def[1] || def[0], variable);
        });
      };
      Menu2.prototype.radio = function(id, content, variable, other) {
        if (other === void 0) {
          other = {};
        }
        return Object.assign({ type: "radio", id, content, variable }, other);
      };
      Menu2.prototype.label = function(id, content) {
        return { type: "label", id, content };
      };
      Menu2.prototype.rule = function() {
        return { type: "rule" };
      };
      Menu2.MENU_STORAGE = "MathJax-Menu-Settings";
      Menu2.OPTIONS = {
        settings: {
          texHints: true,
          semantics: false,
          zoom: "NoZoom",
          zscale: "200%",
          renderer: "CHTML",
          alt: false,
          cmd: false,
          ctrl: false,
          shift: false,
          scale: 1,
          autocollapse: false,
          collapsible: false,
          inTabOrder: true,
          assistiveMml: true,
          explorer: false
        },
        jax: {
          CHTML: null,
          SVG: null
        },
        annotationTypes: (0, Options_js_1.expandable)({
          TeX: ["TeX", "LaTeX", "application/x-tex"],
          StarMath: ["StarMath 5.0"],
          Maple: ["Maple"],
          ContentMathML: ["MathML-Content", "application/mathml-content+xml"],
          OpenMath: ["OpenMath"]
        })
      };
      Menu2.loading = 0;
      Menu2.loadingPromises = /* @__PURE__ */ new Map();
      Menu2._loadingPromise = null;
      Menu2._loadingOK = null;
      Menu2._loadingFailed = null;
      return Menu2;
    }();
    exports2.Menu = Menu;
  }
});

export {
  require_Menu
};
//# sourceMappingURL=chunk-65Z2UWWH.js.map
