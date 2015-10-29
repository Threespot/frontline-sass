#Frontline Sass
Threespot's Sass framework

##Functions
* `breakpoint($keys...)` Returns pixel value of named breakpoint using `$breakpoints` map in [_breakpoints.scss](../main/settings/_breakpoints.scss) ([source](functions/_breakpoints.scss))
  * `breakpoint("wide")`
  * `breakpoint("layout", "sidebar")`
* `color($key)` Returns hex value of named color using `$colors` map in [_colors.scss](../main/settings/_colors.scss) ([source](functions/_color.scss))
* `colorAlpha($color, $opacity: 1, $bg-color: #fff)` Returns either rgba or a flat hex color fallback for old IE ([source](functions/_color-alpha.scss))
* `easing($name)` Returns custom easing values ([source](functions/_easings.scss))
* `em($arg, $context: $base-font-size)` Returns value in ems ([source](functions/_em.scss))
* `rem($val)` Returns value in rems ([source](functions/_rem.scss))
* `strip($arg)` Returns unitless value ([source](functions/_strip-unit.scss))
* `z($keys...)` Returns z-index value of named layer using `$z-layers` map in [_z-index.scss](../main/settings/_z-index.scss) ([source](functions/_z-index.scss))
  * `z("nav")`

##Mixins
* `absoluteFill()` Adds `position: avsolute;` and sets `top/right/bottom/left` to 0 ([source](mixins/_absolute-fill.scss))
* `aspectRatio($ratio)` Maintain an element's aspect ratio ([source](mixins/_aspect-ratio.scss))
  * `@include aspectRatio(16/9);`
* `clearfix()` Clearfix ([source](mixins/_clearfix.scss))
* `fontSmoothing( $enabled: true )` Enable font-smoothing (only use for light text on dark backgrounds—[more info](http://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)) ([source](mixins/font-smoothing.scss))
* `hideText()` Image replacement ([source](mixins/_hide-text.scss))
* `mq()` Media query helper, accepts multiple parameters ([source](mixins/_mq.scss))
  * Named breakpoints `mq("wide")`
  * Pixel or em widths `mq(600px)`
  * Max-width flag `mq("wide" - 1px, max)`
  * Multiple conditions as a Sass map `mq(( min-width: 200px, max-width: 500px, min-height: 400px ))`
* `ie($version: "all")` Only output for old IE stylesheets ([source](mixins/_old-ie.scss))
* `print()`, `hidePrint()`, `printOnly()`, `printNoBreak()` Print stylesheet helpers ([source](mixins/_print-utils.scss))
* `attention()`, `static`, `allStates`, `disabled()` State pseudo selector helpers ([source](mixins/_pseudos.scss))
* `rem($property, $px-values)` Output rems with fallbacks ([source](mixins/_rems.scss))
* `resetInput()`, `resetButton()`, `resetTextarea()`, `resetList()` Reset element styles ([source](mixins/_reset-elements.scss))
* `scaleText($start, $end, $min-media, $max-media)` Generates media queries at even intervals to scale `font-size` and `line-height` between two values and between two viewport widths (similar to [FitText.js](http://fittextjs.com/)) ([source](mixins/_scale-text.scss))
```scss
@include scaleText(
  $start: 24px,
  $end: 36px,
  $font-increment: 2px,
  $min-media: breakpoint("narrow"),
  $max-media: breakpoint("med-wide")
);
```
* `rootAdd($selector)`, `rootBefore($selector)` Helpers to add additional selectors to the beginning of the current selector ([source](mixins/_selector-utils.scss))
* `triangle($size, $color, $direction)` Makes a triangle using `border` (from [Bourbon.io](http://bourbon.io/docs/#triangle)) ([source](mixins/_triangle.scss))
* `vertCenter($position: relative)` Vertically center an element ([source](mixins/_vertical-center.scss))
* `visuallyHidden()` Visually hides an element but makes it accessible for assistive devices ([source](mixins/_visuallyhidden.scss))
* `wordBreak()` Force long words to break ([source](mixins/_word-break.scss))

### License

Frontline Sass is free software, and may be redistributed under the terms of the [MIT license](https://github.com/Threespot/frontline-sass/blob/master/LICENSE.md). If Frontline Sass works great for your project, [we'd love to hear about it](http://twitter.com/threespot)!

### Thanks

Our work stands on the shoulders of giants, and we're very thankful to the many people that made Frontline Sass possible either by publishing code we used, or by being an inspiration for this project.

- [Hugo Giraudel](http://hugogiraudel.com)
- [SassDoc](http://sassdoc.com)
- [SassyTester](https://github.com/HugoGiraudel/SassyTester)
- [Sass Guidelines](http://sass-guidelin.es)

### About Threespot

Threespot is a design and development agency from Washington, DC. We work for organizations that we believe are making a positive change in the world. Find out more [about us](https://www.threespot.com), [our projects](https://www.threespot.com/work) or [hire us](https://www.threespot.com/agency/hire-us)!

[![Threespot](https://avatars3.githubusercontent.com/u/370822?v=3&s=100)](https://www.threespot.com)
