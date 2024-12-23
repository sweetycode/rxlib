

## Bulma

https://bulma.io/documentation/components

### Block

The `block` element is a simple **spacer tool**. It allows sibling HTML elements to have a consistent margin between them:

```css
.block:not(:last-child) {
  margin-bottom: 1.5rem;
}
```

### Box

The `box` element is a simple container with a white background, some padding and a box shadow.

```css
.box {
  background-color: white;
  border-radius: x;
  box-shadow: x;
  color: x;
  display: block;
  padding: x;
}
```

### Button

- primary
- link
- info
- success
- warning
- danger

### Breadcrumb

```jade
nav.breadcrumb
	ul>li>a
```

### Card

```jade
.card
  .card-header
  	.card-header-title
  	.card-header-icon
  .card-image
  .card-content
  .card-footer
  	.card-footer-item
```

### Dropdown

```jade
.dropdown
  .dropdown-trigger
  .dropdown-menu
    .dropdown-content
      .dropdown-item
      .dropdown-divider
```

### Menu

```jade
.menu
  p.menu-label
  ul.menu-list
  	li>a
```

### Message

```jade
.message
  .message-header
  	.delete
  .message-body
```

### Modal

```jade
.modal
  .modal-background
  .modal-content
  .modal-close
```

### Navbar

```jade
.navbar
  .navbar-brand
  	.navbar-bruger
  .navbar-menu
    .navbar-start
    .navbar-end
      .navbar-item
      	.navbar-link
      	.navbar-dropdown
      	  .navbar-divider
```

### Pagination

```jade
nav.pagination
	a.pagination-previous
	a.pagination-next
	ul.pagination-list
		li>a.pagination-link
```

### Panel

```jade
.panel
  .panel-heading
  .panel-tabs>a
  .panel-block
```

### Tabs

```jade
.tabs
  ul>li>a
```

### Form

```jade
.field
	label.label
	div.control
		input
```

### Hero

```jade
section.hero
	.hero-body
		.title
		.subtitle
```

