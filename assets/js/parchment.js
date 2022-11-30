document.onload = ScrollHeight();

window.addEventListener('resize', function(event){
    ScrollHeight();
  },true);

function ScrollHeight() {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    const contH = document.querySelector("body").offsetHeight
    
    const SetHeight = Math.max(vh,contH)
    var content = document.querySelector('#parchment');
    // var container = document.querySelector('#main-content');
    content.style.height = SetHeight*(.9) + 'px';
  }