import { Component, Element, Host, h, Prop } from "@stencil/core";
import { TOOLTIP_REFERENCE } from "../calcite-tooltip/resources";

@Component({
  tag: "calcite-tooltip-manager"
})
export class CalciteTooltipManager {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * CSS Selector to match reference elements for tooltips.
   */
  @Prop() selector = `[${TOOLTIP_REFERENCE}]`;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteTooltipManagerElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentDidLoad() {
    const { el } = this;

    el.addEventListener("mouseenter", this.show, true);
    el.addEventListener("mouseleave", this.hide, true);
    el.addEventListener("focus", this.show, true);
    el.addEventListener("blur", this.hide, true);
  }

  componentDidUnload() {
    const { el } = this;

    el.removeEventListener("mouseenter", this.show, true);
    el.removeEventListener("mouseleave", this.hide, true);
    el.removeEventListener("focus", this.show, true);
    el.removeEventListener("blur", this.hide, true);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  getTooltip = (element: HTMLElement): HTMLCalciteTooltipElement | null => {
    if (!element.matches(this.selector)) {
      return null;
    }

    const id = element.getAttribute("aria-describedby");

    if (!id) {
      return null;
    }

    return (document.getElementById(id) as HTMLCalciteTooltipElement) || null;
  };

  show = (event: Event): void => {
    const element = this.getTooltip(event.target as HTMLElement);

    if (element) {
      element.open = true;
    }
  };

  hide = (event: Event): void => {
    const element = this.getTooltip(event.target as HTMLElement);

    if (element) {
      element.open = false;
    }
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return <Host></Host>;
  }
}
