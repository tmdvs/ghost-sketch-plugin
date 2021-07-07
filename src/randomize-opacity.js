var sketch = require('sketch')

export default function() {
  var document = sketch.getSelectedDocument()
  document.selectedLayers.layers.forEach(layer => {
    layer.style.opacity = Math.random()
  })
}
