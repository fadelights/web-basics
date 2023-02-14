/* script files are attached to HTML docs using the `src` tag:
```
<script src="./script.js"></script>
```
you can attach several scripts to an html doc
using multiple tags. if `src` is set,
the content inside the block are ignored */

/* "use strict" enables modern JS features
it must appear on the first line
only comments can be above it */
"uses strict";

/* "use strict" may be used in functions too,
to enable it for that function only */

/* the `alert` function displays a message
in the browser window */
alert("I'm JS!");

/* semicolon can be omitted as in "most cases", newline
is automatically interpreted as new statement. however,
it is considered best practice to insert it */

/* the mini window shown upon running `alert`
is called a "modal window", meaning you can't
interact with other elements unless dealing
with it first. the three types of modal windows
include `alert`, `prompt` and `confirm` */
let message = "Pledge your entire existence to thy king.";
let defaultAnswer = "I pledge."
let pledge = prompt(message, defaultAnswer);

message = "By continuing, you acknowledge that you \
are a member of the Royal Society of Truth Seekers."
let confirmation = confirm(message);
