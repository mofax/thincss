 # A dead simple, kickstarter responsive css boilerplate.

<div class="docs-section" id="grid">
  <h6 class="docs-header">The grid</h6>
   <div class="example-grid docs-example">
    <div class="h-stack">
      <div class="example-column">Column</div>
    </div>
</div>
<button>Add Column</button>
<button>Remove Column</button>

<div class="docs-section" id="grid">
<h6 class="docs-header">Typography</h6>
<p>
Type is all set with the rems, so font-sizes and spacial relationships can be responsively sized based on a `rem`
`5.0rem` font-size just means `50px`
</p>
<p>
  <strong>The typography base</strong> is <a href="https://css-tricks.com/snippets/css/system-font-stack/">system font stack</a>, <strong
        >strong</strong
      >, <em>emphasis</em>, and <u>underline</u> are all obviously
      included.
    </p>
    <p>
      <strong>Headings</strong> create a family of distinct sizes each
      with specific <code>letter-spacing</code>, <code>line-height</code>,
      and <code>margins</code>.
</p>
<br />
  <h1>Heading<span class="heading-font-size"> <code>&lt;h1&gt;</code> 50rem</span></h1>
  <h2>Heading<span class="heading-font-size"> <code>&lt;h2&gt;</code> 42rem</span></h2>
  <h3>Heading<span class="heading-font-size"> <code>&lt;h3&gt;</code> 36rem</span></h3>
  <h4>Heading<span class="heading-font-size"> <code>&lt;h4&gt;</code> 30rem</span></h4>
  <h5>Heading<span class="heading-font-size"> <code>&lt;h5&gt;</code> 24rem</span></h5>
  <h6>Heading<span class="heading-font-size"> <code>&lt;h6&gt;</code> 15rem</span></h6>

</div>

<div class="docs-section" id="buttons">
  <h6 class="docs-header">Buttons</h6>
  <p>The standard <code>&lt;button&gt;</code> element is plain, whereas the <code>.button-primary</code> button is vibrant and prominent. Button styles are applied to a number of appropriate form elements, but can also be arbitrarily attached to anchors with a <code>.button</code> class.</p>
  <div class="docs-example">
  <br />
    <div>
      <a class="button" href="#">Anchor button</a>
      <button>Button element</button>
      <input type="submit" value="submit input">
      <input type="button" value="button input">
    </div>
    <br />
    <div>
      <a class="button button-primary" href="#">Anchor button</a>
      <button class="button-primary">Button element</button>
      <input class="button-primary" type="submit" value="submit input">
      <input class="button-primary" type="button" value="button input">
    </div>
    <br />
</div>

```html
<button>Button element</button>
<input type="submit" value="submit input">
<input type="button" value="button input">

<a class="button button-primary" href="#">Anchor button</a>
<button class="button-primary">Button element</button>
<input class="button-primary" type="submit" value="submit input">
<input class="button-primary" type="button" value="button input">

```

<div class="docs-section" id="forms">
<h6 class="docs-header">Forms</h6>
<div class="docs-example docs-example-forms">
  <form class="v-stack">
    <div class="h-stack">
      <div class="">
        <label for="exampleEmailInput">Your email</label>
        <input  type="email" placeholder="test@mailbox.com" id="exampleEmailInput">
      </div>
      <div>
        <label for="exampleRecipientInput">Reason for contacting</label>
        <select  id="exampleRecipientInput">
          <option value="Option 1">Questions</option>
          <option value="Option 2">Admiration</option>
          <option value="Option 3">Can I get your number?</option>
        </select>
      </div>
    </div>
   <div>
      <label for="exampleMessage">Message</label>
      <textarea  placeholder="Hi Dave &hellip;" id="exampleMessage"></textarea>
   </div>
   <div class="h-stack">
     <label class="h-stack">
      <input type="checkbox">
      <span class="label-body">Send a copy to yourself</span>
    </label>
    <input class="button-primary" type="submit" value="Submit">
   </div>
  </form>
</div>

<hr />

```html
<form class="v-stack">
    <div class="h-stack">
      <div class="">
        <label for="exampleEmailInput">Your email</label>
        <input  type="email" placeholder="test@mailbox.com" id="exampleEmailInput">
      </div>
      <div>
        <label for="exampleRecipientInput">Reason for contacting</label>
        <select  id="exampleRecipientInput">
          <option value="Option 1">Questions</option>
          <option value="Option 2">Admiration</option>
          <option value="Option 3">Can I get your number?</option>
        </select>
      </div>
    </div>
   <div>
      <label for="exampleMessage">Message</label>
      <textarea  placeholder="Hi Dave &hellip;" id="exampleMessage"></textarea>
   </div>
   <div class="h-stack">
      <label class="h-stack">
        <input type="checkbox">
      <span class="label-body">Send a copy to yourself</span>
    </label>
    <input class="button-primary" type="submit" value="Submit">
   </div>
  </form>
```

<div class="docs-section" id="lists">
  <h6 class="docs-header">Lists</h6>
  <div class="docs-example">
    <div >
      <ul>
        <li>Unordered lists have basic styles</li>
        <ol>
            <li>Nest an ordered list inside</li>
            <li>It feels right at home</li>
          </ol>
        <li>
          They use the circle list style
          <ul>
            <li>Nested lists styled to feel right</li>
            <li>Can nest either type of list into the other</li>
          </ul>
        </li>
        <li>Just more list items mama san</li>
      </ul>
    </div>
    <br/>
    <div >
      <ol>
        <li>Ordered lists also have basic styles</li>
        <li>
          They use the decimal list style
          <ul>
            <li>Ordered and unordered can be nested</li>
            <li>Can nest either type of list into the other</li>
          </ul>
        </li>
        <li>Last list item just for the fun</li>
      </ol>
    </div>
</div>
<br />
<div class="docs-section" id="tables">
  <h6 class="docs-header">Tables</h6>
  <p>Be sure to use properly formed table markup with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> when building a <code>table</code>.</p>
  <br />
  <div class="docs-example">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dave Gamache</td>
          <td>26</td>
          <td>Male</td>
          <td>San Francisco</td>
        </tr>
        <tr>
          <td>Dwayne Johnson</td>
          <td>42</td>
          <td>Male</td>
          <td>Hayward</td>
        </tr>
      </tbody>
    </table>
</div>
