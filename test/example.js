function toggleButton(button) {
  const expandedValue = button.getAttribute('aria-expanded');
  const setValue = expandedValue === 'true' ? 'false' : 'true';
  button.setAttribute('aria-expanded', setValue);
}

const example = {
  toggleButton: toggleButton
}

export default example
