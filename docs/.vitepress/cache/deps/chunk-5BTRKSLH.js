import {
  __commonJS
} from "./chunk-DLJ4GP37.js";

// node_modules/mathjax-full/js/util/PrioritizedList.js
var require_PrioritizedList = __commonJS({
  "node_modules/mathjax-full/js/util/PrioritizedList.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PrioritizedList = void 0;
    var PrioritizedList = function() {
      function PrioritizedList2() {
        this.items = [];
        this.items = [];
      }
      PrioritizedList2.prototype[Symbol.iterator] = function() {
        var i = 0;
        var items = this.items;
        return {
          next: function() {
            return { value: items[i++], done: i > items.length };
          }
        };
      };
      PrioritizedList2.prototype.add = function(item, priority) {
        if (priority === void 0) {
          priority = PrioritizedList2.DEFAULTPRIORITY;
        }
        var i = this.items.length;
        do {
          i--;
        } while (i >= 0 && priority < this.items[i].priority);
        this.items.splice(i + 1, 0, { item, priority });
        return item;
      };
      PrioritizedList2.prototype.remove = function(item) {
        var i = this.items.length;
        do {
          i--;
        } while (i >= 0 && this.items[i].item !== item);
        if (i >= 0) {
          this.items.splice(i, 1);
        }
      };
      PrioritizedList2.DEFAULTPRIORITY = 5;
      return PrioritizedList2;
    }();
    exports.PrioritizedList = PrioritizedList;
  }
});

export {
  require_PrioritizedList
};
//# sourceMappingURL=chunk-5BTRKSLH.js.map
